
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
export async function generateQuizFromPDF(text, level = "medium") {
  const prompt = `
Generate 10 ${level}-level multiple choice questions for UPSC/SSC exams.
Each question must have:
- question
- 4 options
- correct option index
- difficulty
Return STRICT JSON only.
Content:
${text.slice(0, 4000)}
`;
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });
  return JSON.parse(response.choices[0].message.content);
}
export function calculateScore(questions, answers) {
  let score = 0;
  questions.forEach((q) => {
    if (answers[q.id] === q.correct) score += 2;
    else if (answers[q.id] !== undefined) score -= 0.66;
  });
  return score;
}
const __quizStyle = {
  color: "#22c55e",
};
