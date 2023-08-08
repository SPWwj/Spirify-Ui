import MarkdownIt from "markdown-it";
import Mermaid from "mermaid";

export default function mermaidPlugin(md: MarkdownIt, options: any) {
  Mermaid.initialize({
    securityLevel: "loose",
    ...options,
  });

  function getLangName(info: string): string {
    return info.split(/\s+/g)[0];
  }

  let defaultFenceRenderer = md.renderer.rules.fence;

  function customFenceRenderer(
    tokens: any[],
    idx: number,
    options: any,
    env: any,
    slf: any
  ) {
    let token = tokens[idx];
    let info = token.info.trim();
    let langName = info ? getLangName(info) : "";

    if (["mermaid", "{mermaid}"].indexOf(langName) === -1) {
      if (defaultFenceRenderer !== undefined) {
        return defaultFenceRenderer(tokens, idx, options, env, slf);
      }
      return "";
    }

    let imageHTML: string = "";
    let imageAttrs: string[][] = [];

    const element = document.createElement("div");
    element.style.visibility = 'hidden';
    element.id = "mermaid-container";
    document.body.appendChild(element); 

    try {
      Mermaid.mermaidAPI.render(element.id, token.content, element);

      setTimeout(() => {
        const svg = document.querySelector('#' + element.id + ' svg') as SVGElement; // TypeScript type assertion here

        if (svg) {
          imageAttrs.push([
            "style",
            `max-width:${svg.style.width};max-height:${svg.style.height}`,
          ]);
          imageHTML = svg.outerHTML;
        }
        document.body.removeChild(element);
      }, 0);

    } catch (e) {
      return `<div class="alert alert-danger">${e}</div>`;
    }

    imageAttrs.push(["src", `data:image/svg+xml,${encodeURIComponent(imageHTML)}`]);
    return `<img ${slf.renderAttrs({ attrs: imageAttrs })}>`;
  }

  md.renderer.rules.fence = (tokens: any[], idx: number, options: any) => customFenceRenderer(tokens, idx, options, {}, {});
}
