import { writeFileSync } from "fs";
import { RendererFactory, RendererType } from "./factories/RendererFactory";
import { Section } from "./nodes/Section";
import { Paragraph } from "./nodes/Paragraph";
import { List } from "./nodes/List";

// Створює дерево документа.
// Це одна структура, яка може бути виведена у Markdown, HTML або plain text.
function createDocument(format: RendererType): string {
  const renderer = RendererFactory.create(format);

  // Головна секція документа.
  const doc = new Section("Структурні патерни", renderer, [], 1);

  // Вкладена секція з основними патернами.
  const patterns = new Section(
    "Основні патерни",
    renderer,
    [
      new Paragraph("Розглянемо два важливих структурних патерни.", renderer),

      new Section(
        "Composite",
        renderer,
        [
          new Paragraph(
            "Дозволяє створювати деревоподібні структури об'єктів.",
            renderer
          ),
          new List(
            ["Спрощує структуру", "Гнучкий код", "Легка підтримка"],
            renderer
          ),
        ],
        2
      ),

      new Section(
        "Bridge",
        renderer,
        [
          new Paragraph("Розділяє абстракцію та реалізацію.", renderer),
          new List(["Незалежні зміни", "Краща масштабованість"], renderer),
        ],
        2
      ),
    ],
    2
  );

  // Додаємо вкладену секцію в головний документ.
  doc.add(patterns);

  return doc.render();
}

// Перевіряємо, чи формат підтримується.
function normalizeFormat(format: string): RendererType {
  const supportedFormats = RendererFactory.getSupportedFormats();

  if (supportedFormats.includes(format as RendererType)) {
    return format as RendererType;
  }

  return "markdown";
}

const format = normalizeFormat(process.argv[2] || "markdown");
const output = process.argv[3];

const content = createDocument(format);
const renderer = RendererFactory.create(format);
const result = renderer.wrapDocument(content);

if (output) {
  writeFileSync(output, result, "utf-8");
  console.log(`Document saved to ${output}`);
} else {
  console.log(result);
}