import { createContext, useContext, useState } from "react";
import { loginUser, registerUser, logoutUser } from "../api/authApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const styles = {
    error: { color: "red", marginTop: "10px" },
    loader: { color: "#00e5ff", fontWeight: "bold" },
  };

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const data = await loginUser(credentials);
      setUser(data.user);
    } catch {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      const data = await registerUser(userData);
      setUser(data.user);
    } catch {
      setError("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, styles, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
