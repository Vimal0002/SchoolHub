import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { StudentProvider } from "./context/StudentContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <StudentProvider>
          <App />
        </StudentProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
