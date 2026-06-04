import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";

// Простий елемент документа: список.
export class List implements DocNode {
  constructor(
    private items: string[],
    private renderer: DocRenderer
  ) {}

  public render(): string {
    return this.renderer.renderList(this.items);
  }
}