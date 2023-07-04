import { NodeOrText, DomElement } from './Node';

export function convertToBarGraph(node: NodeOrText): NodeOrText {
  // Check if the node is a MbNode and is an 'ul' with the 'bargraph' attribute
  if ('name' in node && node.name === 'ul' && node.attribs && node.attribs['bargraph'] !== undefined) {

    // Define the dimensions of the bar graph
    let barWidth = 40;
    let barSpacing = 10;
    let barHeightMultiplier = 3;  // Arbitrary unit for visualizing the bar heights
    let svgWidth = (node.children?.length || 0) * (barWidth + barSpacing);

    // Initialize max height variable
    let maxBarHeight = 0;

    // Initialize an empty array for the new children
    let newChildren: NodeOrText[] = [];

    // Define padding
    let padding = 20;

    // First pass to determine the maximum bar height
    node.children?.forEach((child) => {
      if ('name' in child && child.name === 'li' && child.attribs && child.attribs['value']) {
        let barHeight = Number(child.attribs['value']) * barHeightMultiplier;
        if (barHeight > maxBarHeight) {
          maxBarHeight = barHeight;
        }
      }
    });

    // Second pass to create the SVG rectangles
    node.children?.forEach((child, i) => {
      if ('name' in child && child.name === 'li' && child.attribs && child.attribs['value']) {
        let barHeight = Number(child.attribs['value']) * barHeightMultiplier;
        let x = i * (barWidth + barSpacing);
        let y = padding + (maxBarHeight - barHeight);  // Add padding to the y position

        // Create a rectangle for the bar
        let rectNode: NodeOrText = {
          type: 'tag',
          name: 'rect',
          attribs: {
            'x': x.toString(),
            'y': y.toString(),
            'width': barWidth.toString(),
            'height': barHeight.toString(),
            'fill': 'red'
          },
          children: [],
          parent: node,
          prev: i > 0 ? newChildren[newChildren.length - 1] : undefined,  // Set the previous sibling if it exists
          next: undefined  // This will be set in the next iteration
        };

        // If there is a previous sibling, set its 'next' link to this node
        if (i > 0 && newChildren[newChildren.length - 1] && 'next' in newChildren[newChildren.length - 1]) {
          newChildren[newChildren.length - 1].next = rectNode;
        }

        // Add the rectangle to the new children
        newChildren.push(rectNode);

        // Check if the child has text data for a label
        if ('children' in child && child.children && child.children.length > 0 && 'data' in child.children[0]) {
          // Create a text SVG element for the label
          let textNode: NodeOrText = {
            type: 'tag',
            name: 'text',
            attribs: {
              'x': x.toString(),
              'y': (padding + maxBarHeight + 20).toString(),  // Add padding to the y position of the label
              'fill': 'black'
            },
            children: [{
              type: 'text',
              data: child.children[0].data
            }],
            parent: node,
            prev: newChildren[newChildren.length - 1],  // Set the previous sibling to the rectangle
            next: undefined  // This will be set in the next iteration
          };

          // Set the rectangle's 'next' link to this node
          if ('next' in rectNode) {
            rectNode.next = textNode;
          }

          // Add the text node to the new children
          newChildren.push(textNode);
        }
      }
    });

    // Now that we've computed the max height, set the SVG height (additional 50 units for labels and padding)
    node.attribs = {
      'width': svgWidth.toString(),
      'height': (padding * 2 + maxBarHeight + 30).toString()  // Add padding to the total height
    };

    // Change the node's name to 'svg' and replace its children with the new children
    node.name = 'svg';
    node.children = newChildren;
  }

  // Return the node (modified or not)
  return node;
}
