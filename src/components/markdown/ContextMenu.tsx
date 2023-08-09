import React from 'react';
import { Menu } from 'antd';

interface ContextMenuProps {
  position: { x: number, y: number };
}

const ContextMenu: React.FC<ContextMenuProps> = ({ position }) => {
  return (
    <Menu
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
    </Menu>
  );
};

export default ContextMenu;
