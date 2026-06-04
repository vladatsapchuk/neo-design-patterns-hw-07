import { BaseRenderer } from "./BaseRenderer";

// Рендер для Markdown формату.
export class MarkdownRenderer extends BaseRenderer {
  public renderHeader(level: number, text: string): string {
    const safeLevel = Math.max(1, Math.min(level, 6));
    return `${"#".repeat(safeLevel)} ${text}\n\n`;
  }

  public renderParagraph(text: string): string {
    return `${text}\n\n`;
  }

  public renderList(items: string[]): string {
    return `${items.map(item => `- ${item}`).join("\n")}\n\n`;
  }
}