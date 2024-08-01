import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import "./App.css";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;