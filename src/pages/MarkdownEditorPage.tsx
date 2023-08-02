import React, { useState, useMemo, useEffect } from 'react';
import { Input } from 'antd';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';
import LoadingPage from './LoadingPage';

const { TextArea } = Input;

const MarkdownEditorPage: React.FC = () => {
  const [markdown, setMarkdown] = useState(`
# Tomato and Egg Stir-fry (西红柿炒蛋)
## Table of Contents

## Ingredients

- 3 medium tomatoes
- 4 eggs
- Salt, to taste
- Sugar, to taste
- 2 tablespoons vegetable oil

## Instructions

1. Beat the eggs in a bowl and add a pinch of salt. Mix well.

2. Heat a tablespoon of oil in a wok or pan. Pour in the eggs and scramble until nearly cooked. Remove the eggs and set them aside.

3. In the same pan, add another tablespoon of oil. Add the tomatoes and stir-fry for a couple of minutes.

4. Add the scrambled eggs back into the pan. Stir well to combine the eggs and tomatoes. 

5. Season with salt and a bit of sugar to taste. Stir well and cook for another minute.

6. Serve hot with rice or bread.

## Notes

- The sugar is optional but it helps balance out the acidity of the tomatoes.
`);


  const [tocMarkdown, setTocMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      const parsedMarkdown = unified()
        .use(remarkParse)
        .parse(markdown);

      const transformedMarkdown: any = unified()
        .use(remarkSlug)
        .use(remarkToc)
        .runSync(parsedMarkdown);

      let lastHeadingText = '';
      let toc: any[] = [];

      visit(transformedMarkdown, (node: any) => {
        if (node.type === 'heading') {
          lastHeadingText = node.children[0].value;
        } else if (node.type === 'list' && /Table of Contents/i.test(lastHeadingText)) {
          toc.push(node);
        }
      });

      const urlParts = window.location.href.split(/#\/(.+)/);
      const base = urlParts[0];
      const subpath = urlParts[1] ? urlParts[1].split('#')[0] : '';

      visit(transformedMarkdown, 'link', (node: any) => {
        if (node.url.startsWith('#')) {
          node.url = `${base}#/${subpath}${node.url}`;
        }
      });

      const result = unified()
        .use(remarkStringify)
        .stringify(transformedMarkdown);

      setTocMarkdown(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false)
    }
  }, [markdown]);

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkSlug]} children={tocMarkdown} />
          <TextArea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Write some markdown here..."
            rows={4}
          />
        </>
      )}
    </div>
  );
};

export default MarkdownEditorPage;