import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") return false;
    if (stored === "dark") return true;
    return getSystemTheme();
  };

  useEffect(() => {
    setIsDark(getInitialTheme());
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        setIsDark(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.add("theme-transition");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  const setTheme = (theme: "light" | "dark" | "system") => {
    if (theme === "system") {
      localStorage.removeItem("theme");
      setIsDark(getSystemTheme());
    } else {
      localStorage.setItem("theme", theme);
      setIsDark(theme === "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
