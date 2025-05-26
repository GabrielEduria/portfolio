import React, { useContext } from 'react';
import { DarkModeContext } from '../components/DarkModeContext'; 

const DarkMode = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={() => {
         console.log('Toggle clicked');
        setIsDarkMode(!isDarkMode)}}
      className="rounded text-gray-600 dark:text-gray-300 cursor-pointer 
      transition-transform duration-300 hover:scale-105 flex-shrink-0 p-2 mr-1
      text-xs sm:text-sm z-10"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <i className="fa-solid fa-moon text-sm sm:text-lg"></i>
      ) : (
        <i className="fa-solid fa-sun text-sm sm:text-lg"></i>
      )}
    </button>
  );
};

export default DarkMode;
