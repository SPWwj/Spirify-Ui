// MermaidPreview.tsx

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidPreviewProps {
  code: string;
}

const MermaidPreview: React.FC<MermaidPreviewProps> = ({ code }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    const renderMermaid = async () => {
      try {
        const svg = await mermaid.render('graphDiv', code);
        if (ref.current) {
          ref.current.innerHTML = svg.svg;
        }
      } catch (e) {
        console.error(e);
      }
    };
    renderMermaid();
  }, [code]);

  return <div ref={ref} />;
};

export default MermaidPreview;
