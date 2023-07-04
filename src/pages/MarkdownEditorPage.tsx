import React, { useState } from 'react';
import { Input } from 'antd';
import MarkdownRenderer from 'components/markdown/MarkdownRenderer';

const { TextArea } = Input;

const MarkdownEditorPage: React.FC = () => {
  const [markdown, setMarkdown] = useState(`
- item 1
- item 2 {icon="https://spirify.azurewebsites.net/icon-512.png"}
`);

  return (
    <div>
      <TextArea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write some markdown here..."
        rows={4}
      />
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
};

export default MarkdownEditorPage;
