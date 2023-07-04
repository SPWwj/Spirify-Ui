import React from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';
import Prism from 'prismjs';
import { html as html_beautify } from 'js-beautify';
import 'prismjs/themes/prism.css';  // Choose the theme you like
import { Row, Col } from 'antd';
import { convertBackToHtml, parseHTML } from './Node';
import { processUlNode } from './UlNodeProcessor';
import { convertToBarGraph } from './ConvertToBarGraph';




const md = new MarkdownIt();
md.use(MarkdownItAttrs);
interface UlObject {
  index: number,
  map: number[],
  token: any, // Replace 'any' with actual token type
  pTag: boolean,
  atIndex: number
}
md.core.ruler.push('modify_tokens', (state: any) => { // Replace 'any' with actual state type
  let ulList: UlObject[] = [];
  let resultUl: UlObject[] = [];

  //Locate all the element with p tag and non p tag
  state.tokens.forEach((token: any, index: number) => { // Replace 'any' with actual token type
    if (token.type === 'bullet_list_open') {
      ulList.push({ index: index, map: [...token.map], token, pTag: false, atIndex: -1 });
    } else if (token.type === 'bullet_list_close') {
      let curUl = ulList.pop();

      if (curUl != null) {

      if (curUl.token.attrs !== null) {
        curUl.map[0] = curUl.map[0] + 1;
        if (ulList.length > 0) {
          ulList[ulList.length - 1].map[0] = curUl.map[0] + 1;
        } else {
          curUl.map[0] = curUl.map[0] + 1;
        }
      }
      else {
        if (ulList.length > 0) {
          ulList[ulList.length - 1].map[0] = curUl.map[0];
        }
      }
        resultUl.push(curUl);
      }


    } else if (token.type === "inline") {
      if (ulList.length > 0) {  // check that ulList is not empty
        if (ulList[ulList.length - 1].map[0] >= token.map[0]) {
          ulList[ulList.length - 1].map[0] = token.map[1];
        } else {
          ulList[ulList.length - 1].pTag = true;
          ulList[ulList.length - 1].atIndex = index;
          ulList[ulList.length - 1].map[0] = token.map[1];
        }
      }
    }

  });

  //apply the resultUl 
  let newTokens: any[] = []; // Replace 'any' with actual token type

  state.tokens.forEach((token: any, index: number) => { // Replace 'any' with actual token type
    // Check if the token is a paragraph
    if (token.type === 'paragraph_open' || token.type === 'paragraph_close') {
      // Locate the corresponding ul object in resultUl based on the token's level
      const matchingUl = resultUl.find(ul => ul.token.level === token.level - 2);

      // If a matching ul object is found and it has pTag set to true
      if (matchingUl) {
        if (matchingUl.pTag) {
          newTokens.push(token);
        }
      } else {
        newTokens.push(token);
      }
    } else {
      newTokens.push(token);
    }
  });

  state.tokens = newTokens;
});

interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {

  let renderedMarkdown = md.render(markdown);

  console.log("renderedMarkdown", renderedMarkdown);
  // Convert the rendered markdown to a Cheerio object
  let nodes = parseHTML(renderedMarkdown);
  console.log(nodes);
  // console.log("render", renderedMarkdown)
  // console.log("x cherrio", x)
  // console.log(x)
  // let node = x('ul');

  // console.log("Text end", node);


if (nodes === null) {
  console.log('parseHTML(renderedMarkdown) returned null');
} else {
  nodes.forEach(node => {
    if (node.name == "ul") {
      console.log("ul node", node);
      processUlNode(node);
      node = convertToBarGraph(node);
      console.log("after process", node);
          renderedMarkdown = convertBackToHtml([node]);

    }
    // renderedMarkdown = convertBackToHtml(nodes);

  });
}
// Process the Cheerio object$ = processHTML($); // Cast Root to CheerioAPI

// Convert the Cheerio object back to a string
// renderedMarkdown = x.html();

  const beautifiedHTML = html_beautify(renderedMarkdown, { indent_size: 2 });
  
  const highlightedHTML = Prism.highlight(beautifiedHTML, Prism.languages.markup, 'markup');

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
        </Col>
        <Col span={12}>
          <pre className="language-markup"><code dangerouslySetInnerHTML={{ __html: highlightedHTML }} /></pre>
        </Col>
      </Row>
    </div>
  );
};

export default MarkdownRenderer;
