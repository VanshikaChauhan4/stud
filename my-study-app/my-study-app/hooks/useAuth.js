import { useState } from "react";
import { loginUser, registerUser, logoutUser } from "../api/authApi";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Inline styles
  const styles = {
    input: {
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      marginBottom: "10px",
      width: "100%",
    },
    button: {
      padding: "12px",
      borderRadius: "20px",
      background: "linear-gradient(135deg,#00e5ff,#7f5cff)",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
  };

  const login = async (credentials) => {
    try {
      setLoading(true);
      const data = await loginUser(credentials);
      setUser(data.user);
    } catch (err) {
      setAuthError("Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setLoading(true);
      const data = await registerUser(userData);
      setUser(data.user);
    } catch (err) {
      setAuthError("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return {
    user,
    loading,
    authError,
    styles,
    login,
    signup,
    logout,
  };
}
