import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";

// Composite: Section може містити інші елементи документа.
// Це може бути Paragraph, List або ще одна Section.
export class Section implements DocNode {
  constructor(
    private title: string,
    private renderer: DocRenderer,
    private children: DocNode[] = [],
    private level: number = 1
  ) {}

  // Додає новий дочірній елемент у секцію.
  public add(child: DocNode): void {
    this.children.push(child);
  }

  public render(): string {
    // Спочатку рендеримо заголовок секції.
    const header = this.renderer.renderHeader(this.level, this.title);

    // Потім рендеримо всіх дітей у тому порядку, в якому вони були додані.
    const content = this.children
      .map(child => child.render())
      .join("");

    return header + content;
  }
}