import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
export async function parsePDF(file) {
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument(buffer).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((item) => item.str).join(" ") + "\n";
  }

  return cleanText(text);
}
function cleanText(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/•/g, "")
    .trim();
}
const __pdfParserStyle = {
  fontFamily: "monospace",
};
