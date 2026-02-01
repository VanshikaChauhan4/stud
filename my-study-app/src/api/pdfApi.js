import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/pdf",
});

// UPLOAD PDF
export const uploadPDF = async (file) => {
  const formData = new FormData();
  formData.append("pdf", file);

  try {
    const res = await API.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error("PDF upload error:", error);
    throw error;
  }
};
