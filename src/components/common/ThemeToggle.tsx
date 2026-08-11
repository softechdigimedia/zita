import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  compact?: boolean;
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  showLabel = true,
  className = ''
}) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'Slate Light' : 'Dark'} theme`}
      title={`Switch to ${isDark ? 'Slate Light' : 'Dark'} theme`}
      className={`relative inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 font-bold text-xs select-none focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${
        isDark
          ? 'bg-slate-900 hover:bg-slate-800 text-yellow-400 border border-slate-800 shadow-sm'
          : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
        <Sun
          className={`w-4 h-4 text-amber-500 transition-all duration-300 absolute inset-0 ${
            isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
          }`}
        />
        <Moon
          className={`w-4 h-4 text-yellow-400 transition-all duration-300 absolute inset-0 ${
            isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
          }`}
        />
      </div>

      {showLabel && (
        <span className="hidden sm:inline font-mono tracking-tight text-[11px] uppercase font-black">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
};
