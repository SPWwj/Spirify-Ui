import React from 'react';
import { Menu } from 'antd';

interface ContextMenuProps {
  position: { x: number, y: number };
  editorRef: any;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ position, editorRef }) => {
  const copyText = () => {
    const editor = editorRef.current?.editor;
    if (editor) {
      const selectedText = editor.session.getTextRange(editor.getSelectionRange());
      navigator.clipboard.writeText(selectedText);
    }
  };

  const pasteText = () => {
    navigator.clipboard.readText().then((text) => {
      const editor = editorRef.current?.editor;
      if (editor) {
        editor.session.insert(editor.getCursorPosition(), text);
      }
    });
  };

  return (
    <Menu
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Menu.Item key="1" onClick={copyText}>Copy</Menu.Item>
      <Menu.Item key="2" onClick={pasteText}>Paste</Menu.Item>
    </Menu>
  );
};

export default ContextMenu;
