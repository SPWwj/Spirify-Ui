import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeRaw from 'rehype-raw';
import LoadingPage from './LoadingPage';
import { processMarkdown } from 'utilities/markdownProcessor';
import mermaid from 'mermaid';
import MermaidPreview from 'components/mermaid/MermaidPreview';
import { debounce } from 'lodash';

const { TextArea } = Input;
function decodeHtml(html: string) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}
const MarkdownEditorPage: React.FC = () => {
  const [markdown, setMarkdown] = useState(`
  \`\`\`mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\`
[toc]

# Tomato and Egg Stir-fry (西红柿炒蛋)

## Ingredients

- 3 medium tomatoes
- 4 eggs
- Salt, to taste
- Sugar, to taste
- 2 tablespoons vegetable oil

## Instructions

1. Beat the eggs in a bowl and add a pinch of salt. Mix well.

   <img src="/images/egg.png" alt="Egg" style="width: 200px; height: auto;">

2. Heat a tablespoon of oil in a wok or pan. Pour in the eggs and scramble until nearly cooked. Remove the eggs and set them aside.

   <img src="/images/friedegg.png" alt="Egg" style="width: 200px; height: auto;">

3. In the same pan, add another tablespoon of oil. Add the tomatoes and stir-fry for a couple of minutes.

    <img src="/images/tomato.png" alt="Egg" style="width: 200px; height: auto;">

4. Add the scrambled eggs back into the pan. Stir well to combine the eggs and tomatoes. 
     
   <img src="/images/cooktomato.png" alt="Egg" style="width: 200px; height: auto;">

5. Season with salt and a bit of sugar to taste. Stir well and cook for another minute.
   
   <img src="/images/tomato_fired_egg.png" alt="Egg" style="width: 200px; height: auto;">

6. Serve hot with rice or bread.

   <img src="/images/servewithrice.png" alt="Egg" style="width: 200px; height: auto;">


## Notes

- The sugar is optional but it helps balance out the acidity of the tomatoes.

`);


  const [tocMarkdown, setTocMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const processMarkdownDebounced = debounce(async (markdown) => {
    setIsLoading(true);
    try {
      let result = await processMarkdown(markdown);

      // Find all Mermaid code blocks
      const mermaidCodeBlocks = result.match(/<code class="language-mermaid">([\s\S]*?)<\/code>/g);


      if (mermaidCodeBlocks) {
        // Process each Mermaid code block
        for (const block of mermaidCodeBlocks) {
          const mermaidCodeMatch = block.match(/<code class="language-mermaid">([\s\S]*?)<\/code>/);
          if (mermaidCodeMatch && mermaidCodeMatch[1]) {
            let mermaidCode = mermaidCodeMatch[1];
            console.log(mermaidCode);
            mermaidCode = decodeHtml(mermaidCodeMatch[1]);

            try {
              const svg = await mermaid.render('graphDiv', mermaidCode.trim());
              result = result.replace(block, svg.svg); // Replace the code block with the SVG chart
            } catch (e) {
              console.error(e);
              // You can decide how to handle rendering errors here
            }
          }
        }
      }

      setTocMarkdown(result);
      setIsLoading(false);
      // The rest of your code remains the same...
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  }, 300); // 300ms debounce time


  useEffect(() => {
    processMarkdownDebounced(markdown);
  }, [markdown]);


  if (isLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkSlug]} rehypePlugins={[rehypeRaw]} children={tocMarkdown} />
      <TextArea
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
        placeholder="Write some markdown here..."
        rows={4}
      />
    </div>
  );

};

export default MarkdownEditorPage;
