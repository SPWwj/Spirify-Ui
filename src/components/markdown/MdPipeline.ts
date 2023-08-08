import mermaidPlugin from "./MermaidPlugin";
function decodeHtml(html: string) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}
const processingPipeline = [
  mermaidPlugin,
];

export const processMarkdownContent = async (markdown: string, processMarkdown: (content: string) => Promise<string>) => {
  let result = markdown;
  result = await processMarkdown(result);

  for (const processFunction of processingPipeline) {
    result = await processFunction.process(result, decodeHtml);
  }

  return result;
};
