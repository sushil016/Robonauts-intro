import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeSwitchProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {isDarkTheme ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeSwitch;