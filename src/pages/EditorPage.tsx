import React, { useState } from 'react';

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
      <div>
        <strong>Markdown Output:</strong>
      </div>
    </div>
  );
}

export default EditorPage;
