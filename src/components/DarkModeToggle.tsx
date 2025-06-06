 import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
          {theme === 'dark' ? (
            <i className="bx bxs-sun text-xl animate-spin-slow text-yellow-400"></i>
          ) : (
            <i className="bx bxs-moon text-xl animate-pulse text-blue-800"></i>
          )}
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
