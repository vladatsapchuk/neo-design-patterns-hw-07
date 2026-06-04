import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";

// Простий елемент документа: параграф.
export class Paragraph implements DocNode {
  constructor(
    private text: string,
    private renderer: DocRenderer
  ) {}

  public render(): string {
    return this.renderer.renderParagraph(this.text);
  }
}