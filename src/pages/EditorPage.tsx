import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function EditorPage() {


  const [value, setValue] = useState("## Markdown Editor\nJust a **sample**!");

  const handleEditorChange = (
    newValue?: string | undefined,
    event?: React.ChangeEvent<HTMLTextAreaElement> | undefined,
    state?: any | undefined
  ) => {
    if (newValue !== undefined) {
      setValue(newValue);
    }
  };

  return (
    <div>
      <MDEditor value={value} onChange={handleEditorChange} />
      <div>
        <strong>Markdown Output:</strong>
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
}

export default EditorPage;
