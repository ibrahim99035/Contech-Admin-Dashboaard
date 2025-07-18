import React from 'react';
import { Settings, Bell, LogOut, Sun, Moon } from 'lucide-react';

const Header = ({ activeTab, sidebarCollapsed, setSidebarCollapsed, darkMode, setDarkMode }) => (
  <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 px-6 py-4 transition-colors">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 capitalize">{activeTab}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Welcome to your admin dashboard</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative transition-colors">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <LogOut className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <button
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow transition-colors flex items-center gap-2"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          <span className="hidden sm:inline">{darkMode ? 'Dark' : 'Light'}</span>
        </button>
      </div>
    </div>
  </header>
);

export default Header;