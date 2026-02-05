import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

// SIGN UP
export const registerUser = async (userData) => {
  try {
    const res = await API.post("/register", userData);
    return res.data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};

// LOGIN
export const loginUser = async (credentials) => {
  try {
    const res = await API.post("/login", credentials);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
};
