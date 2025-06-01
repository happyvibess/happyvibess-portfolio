import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

// Add theme-color meta tag
const metaTheme = document.createElement('meta');
metaTheme.name = 'theme-color';
metaTheme.content = '#ffffff'; // Default light theme color
document.head.appendChild(metaTheme);

// Update theme-color based on dark mode
const updateThemeColor = (isDark: boolean) => {
  metaTheme.content = isDark ? '#0f172a' : '#ffffff';
};

// Create ThemeWrapper component to handle theme updates
const ThemeWrapper = () => {
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateThemeColor(darkModeQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      updateThemeColor(e.matches);
    };

    darkModeQuery.addEventListener('change', handleChange);
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeWrapper />
  </React.StrictMode>
);
