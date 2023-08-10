const listPlugin = {
  name: 'listPlugin',
  initialize: () => {
    // You can place any initialization logic here if needed.
  },
  process: (content: string) => {
    // Create a new DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');

    // Get all li elements
    const liElements = doc.querySelectorAll('li');

    liElements.forEach(li => {
      // Check if img-icon attribute exists
      const imgIcon = li.getAttribute('img-icon');
      const iWidth = li.getAttribute('i-width') || '20px'; // default width
      const iHeight = li.getAttribute('i-height') || '20px'; // default height

      if (imgIcon) {
        li.classList.add('img-icon');
        li.setAttribute('style', `--img-icon: url(${imgIcon}); --i-width: ${iWidth}; --i-height: ${iHeight}`);
        li.removeAttribute('img-icon');
        li.removeAttribute('i-width');
        li.removeAttribute('i-height');
      }

      // Create a new div element
      const div = doc.createElement('div');
      div.className = 'list-item-content';

      // Move all children of li to the div
      while (li.firstChild) {
        div.appendChild(li.firstChild);
      }

      // Append the div to the li
      li.appendChild(div);
    });

    // Serialize the modified content back to a string
    const serializer = new XMLSerializer();
    return serializer.serializeToString(doc.body);
  }

};

export default listPlugin;
