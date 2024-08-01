ex1: Implement A Theme Switcher
Objective: Create a theme switcher component that allows users to toggle between light and dark themes using useContext and useState.
Set up a new React project using create-react-app or your preferred method.
Create a context for managing the theme (light/dark mode).
Implement a theme switcher component that toggles between light and dark themes when clicked.
Use useContext to access the current theme in other components and apply the theme styles.
Hints:
You can create a context with a default theme value (e.g., light) and a function to toggle the theme.
The theme switcher component should have a button that, when clicked, calls the theme toggling function provided by the context.
Apply different styles (CSS or inline styles) to your components based on the current theme.
Example Starter Code:
Here’s a simplified example to get you started:
// ThemeContext.js
import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
export { ThemeProvider, useTheme };
// App.js
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        {/* Other components here */}
      </div>
    </ThemeProvider>
  );
}
export default App;