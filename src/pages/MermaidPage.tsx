// MermaidPage.tsx

import MermaidEditor from 'components/mermaid/MermaidEditor';
import MermaidPreview from 'components/mermaid/MermaidPreview';
import React, { useState } from 'react';

const MermaidPage: React.FC = () => {
  const [code, setCode] = useState(`
mindmap
  root((Think Creatively))
    Brainstorming
      Free Writing
      Mind Mapping
      Role Playing
    Divergent Thinking
      Question Assumptions
      SCAMPER
      Random Input
    Convergent Thinking
      SWOT Analysis
      Six Thinking Hats
      PMI
    Lateral Thinking
      Provocation
      Random Entry
    Critical Thinking
      Logical Reasoning
      Evaluation
      Problem Solving
  `);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <MermaidEditor value={code} onChange={setCode} />
      </div>
      <div style={{ flex: 1 }}>
        <MermaidPreview code={code} />
      </div>
    </div>
  );
};

export default MermaidPage;
