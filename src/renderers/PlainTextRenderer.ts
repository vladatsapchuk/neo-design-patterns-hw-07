import { BaseRenderer } from "./BaseRenderer";

// Рендер для простого тексту без HTML і Markdown.
export class PlainTextRenderer extends BaseRenderer {
  public renderHeader(level: number, text: string): string {
    return `${text.toUpperCase()}\n${"=".repeat(text.length)}\n\n`;
  }

  public renderParagraph(text: string): string {
    return `${text}\n\n`;
  }

  public renderList(items: string[]): string {
    return `${items.map(item => `* ${item}`).join("\n")}\n\n`;
  }
}