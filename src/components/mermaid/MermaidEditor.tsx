// MermaidEditor.tsx

import React from 'react';

interface MermaidEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MermaidEditor: React.FC<MermaidEditorProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default MermaidEditor;
