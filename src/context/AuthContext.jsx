import { createContext, useState, useMemo } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("auth")) || null
  );

  const login = (email, password) => {
    if (email && password) {
      const userData = { email };
      setUser(userData);
      localStorage.setItem("auth", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth");
  };

  const value = useMemo(
    () => ({ user, login, logout }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
