import React, { useState, useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';
import './MarkdownEditorPage.scss';
import AceEditor from "react-ace";

import LoadingPage from './LoadingPage';
import { debounce } from 'lodash';
import { processMarkdown } from 'components/markdown/MarkdownProcessor';
import { processMarkdownContent } from 'components/markdown/MdPipeline';
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import ContextMenu from 'components/markdown/ContextMenu';

const MarkdownEditorPage: React.FC = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const aceEditorRef = useRef<any>(null);

  const handleRightClick = (event: MouseEvent) => {
    if (event.shiftKey) {
      // If shift key was held down, allow default context menu
      return;
    }

    // Prevent the default context menu
    event.preventDefault();

    // Set the position for the custom context menu
    setContextMenuPosition({ x: event.clientX, y: event.clientY });

    // Show the custom context menu
    setContextMenuVisible(true);
  };



  const handleClick = () => {
    setContextMenuVisible(false);
  };

  useEffect(() => {
    const editor = aceEditorRef.current?.editor;
    if (editor) {
      editor.container.addEventListener('contextmenu', handleRightClick);
    }
    document.addEventListener('click', handleClick);

    return () => {
      if (editor) {
        editor.container.removeEventListener('contextmenu', handleRightClick);
      }
      document.removeEventListener('click', handleClick);
    };
  }, []);
  const [markdown, setMarkdown] = useState(`
  \`\`\`
Code
\`\`\`

$$
x = \\frac{{-b \\pm \\sqrt{{b^2 - 4ac}}}}{{2a}}
$$
  \`\`\`mermaid
graph TD;
A-->BC;
A-->C;
B-->D;
C-->D;
\`\`\`
[toc]

# Tomato and Egg Stir-fry (西红柿炒蛋)

## Ingredients

- 3 medium tomatoes { img-icon="https://spirify.azurewebsites.net/icon-512.png"}
- 4 eggs { img-icon="/images/egg.png"}
- Salt, to taste { img-icon="https://spirify.azurewebsites.net/icon-512.png" i-width="60px" i-height="30px"}
- Sugar, to taste { img-icon="https://spirify.azurewebsites.net/icon-512.png" i-width="60px" i-height="30px"}
- 2 tablespoons vegetable oil  { img-icon="https://spirify.azurewebsites.net/icon-512.png" i-width="60px" i-height="30px"}

## Instructions

1. Beat the eggs in a bowl and add a pinch of salt. Mix well.

    ![Egg](/images/egg.png){ width=200px height=auto}

2. Heat a tablespoon of oil in a wok or pan. Pour in the eggs and scramble until nearly cooked. Remove the eggs and set them aside.

    ![Fried Egg](/images/friedegg.png){ width=200px height=auto}

3. In the same pan, add another tablespoon of oil. Add the tomatoes and stir-fry for a couple of minutes.

    ![Tomato](/images/tomato.png){ width=200px height=auto}

4. Add the scrambled eggs back into the pan. Stir well to combine the eggs and tomatoes.

    ![Cooked Tomato](/images/cooktomato.png){ width=200px height=auto}

5. Season with salt and a bit of sugar to taste. Stir well and cook for another minute.

    ![Tomato Fired Egg](/images/tomato_fired_egg.png){ width=200px height=auto}

6. Serve hot with rice or bread.

    ![Serve with Rice](/images/servewithrice.png){ width=200px height=auto}



## Notes

- The sugar is optional but it helps balance out the acidity of the tomatoes.
`);

  const [tocMarkdown, setTocMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMarkdownProcessing = async () => {
      setIsLoading(true);
      try {
        const result = await processMarkdownContent(markdown, processMarkdown);
        setTocMarkdown(result);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };
    const processMarkdownDebounced = debounce(handleMarkdownProcessing, 300);
    processMarkdownDebounced();
    return () => {
      processMarkdownDebounced.cancel();
    };
  }, [markdown]);


  if (isLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <div>
      <AceEditor
        mode="markdown"
        theme="github"
        value={markdown}
        onChange={setMarkdown}
        name="markdown-editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          showLineNumbers: true // Set this to true if you want line numbers
        }}
        height="200px"
        width="100%"
        ref={aceEditorRef}

      />
      {contextMenuVisible && (
        <ContextMenu position={contextMenuPosition} editorRef={aceEditorRef} />
      )}
      <div dangerouslySetInnerHTML={{ __html: tocMarkdown }} />

    </div>
  );

};

export default MarkdownEditorPage;
