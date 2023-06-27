import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';
import Prism from 'prismjs';
import { html as html_beautify } from 'js-beautify';
import 'prismjs/components/prism-markup';  // For HTML highlighting
import 'prismjs/themes/prism.css';  // Choose the theme you like
import { Row, Col, Switch } from 'antd';

const md = new MarkdownIt();
md.use(MarkdownItAttrs);

interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  const [isHTMLVisible, setIsHTMLVisible] = useState(true);
  const [isRawHTMLVisible, setIsRawHTMLVisible] = useState(true);

  const renderedMarkdown = md.render(markdown);
  const beautifiedHTML = html_beautify(renderedMarkdown, { indent_size: 2 });
  const highlightedHTML = Prism.highlight(beautifiedHTML, Prism.languages.markup, 'markup');

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Switch checked={isHTMLVisible} onChange={setIsHTMLVisible} /> Show Rendered HTML
          {isHTMLVisible && <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />}
        </Col>
        <Col span={12}>
          <Switch checked={isRawHTMLVisible} onChange={setIsRawHTMLVisible} /> Show Raw HTML
          {isRawHTMLVisible && <pre className="language-markup"><code dangerouslySetInnerHTML={{ __html: highlightedHTML }} /></pre>}
        </Col>
      </Row>
    </div>
  );
};

export default MarkdownRenderer;
