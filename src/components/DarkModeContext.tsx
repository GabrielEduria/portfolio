import React, { createContext, useState, useEffect } from 'react';

// New key so earlier visitors (who had "light" auto-saved) start in dark mode too.
// Keep in sync with the inline script in index.html.
const STORAGE_KEY = 'theme';

export const DarkModeContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isDarkMode: true,
  setIsDarkMode: () => {},
});

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;
    // Dark is the default; only an explicit "light" choice turns it off
    return localStorage.getItem(STORAGE_KEY) !== 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem(STORAGE_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
