import React, { useContext } from 'react';
import { DarkModeContext } from '../components/DarkModeContext'; 

const DarkMode = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={() => {
        setIsDarkMode(!isDarkMode)}}
      className="rounded text-gray-600 dark:text-gray-300 cursor-pointer 
      transition-transform duration-300 hover:scale-105 flex-shrink-0 
      sm:pt-3 z-10 pt-1.5 pr-3 sm:pr-0 overflow-x-auto"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <i className="fa-solid fa-moon text-xl"></i>
      ) : (
        <i className="fa-solid fa-sun text-xl"></i>
      )}
    </button>
  );
};

export default DarkMode;
