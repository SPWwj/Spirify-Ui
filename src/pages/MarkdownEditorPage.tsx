import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

import LoadingPage from './LoadingPage';
import { debounce } from 'lodash';
import { processMarkdown } from 'components/markdown/MarkdownProcessor';
import { processMarkdownContent } from 'components/markdown/MdPipeline';

const { TextArea } = Input;

const MarkdownEditorPage: React.FC = () => {
  const [markdown, setMarkdown] = useState(`
  \`\`\`mermaid
graph TD;
A-->BC;
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




  useEffect(() => {
    const handleMarkdownProcessing = async () => {
      setIsLoading(true);
      try {
        const result = await processMarkdownContent(markdown, processMarkdown);
        setTocMarkdown(result);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };
    const processMarkdownDebounced = debounce(handleMarkdownProcessing, 300);
    processMarkdownDebounced();
    return () => {
      processMarkdownDebounced.cancel();
    };
  }, [markdown]);


  if (isLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: tocMarkdown }} />;
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
