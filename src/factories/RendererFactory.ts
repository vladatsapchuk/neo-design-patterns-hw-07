import { DocRenderer } from "../interfaces/DocRenderer";
import { HTMLRenderer } from "../renderers/HTMLRenderer";
import { MarkdownRenderer } from "../renderers/MarkdownRenderer";
import { PlainTextRenderer } from "../renderers/PlainTextRenderer";

export type RendererType = "html" | "markdown" | "plain";

// Фабрика створює потрібний renderer.
// main.ts не створює renderer напряму через new.
export class RendererFactory {
  public static create(type: string): DocRenderer {
    switch (type) {
      case "html":
        return new HTMLRenderer();

      case "plain":
        return new PlainTextRenderer();

      case "markdown":
      default:
        return new MarkdownRenderer();
    }
  }

  public static getSupportedFormats(): RendererType[] {
    return ["html", "markdown", "plain"];
  }
}