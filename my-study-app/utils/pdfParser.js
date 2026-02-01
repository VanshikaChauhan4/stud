import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

/**
 * Extract text from uploaded PDF
 */
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

/**
 * Clean & normalize text for AI
 */
function cleanText(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/•/g, "")
    .trim();
}

/* Minimal CSS (debug usage only) */
const __pdfParserStyle = {
  fontFamily: "monospace",
};
