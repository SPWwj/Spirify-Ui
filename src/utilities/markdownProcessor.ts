import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';
import { visit } from 'unist-util-visit';

export const processMarkdown = async (markdown: string) => {
  try {
    const parsedMarkdown = unified()
      .use(remarkParse)
      .parse(markdown);

    const transformedMarkdown: any = await unified()
      .use(remarkSlug)
      .use(remarkToc)
      .run(parsedMarkdown);

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

    return unified()
      .use(remarkStringify)
      .stringify(transformedMarkdown);
  } catch (e) {
    console.error(e);
    return "";
  }
};
