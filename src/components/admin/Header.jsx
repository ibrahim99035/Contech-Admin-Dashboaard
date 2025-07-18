import React from 'react';
import { Settings, Bell, LogOut, Sun, Moon } from 'lucide-react';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.3-4.1-50.6H272v95.9h146.9c-6.4 34.7-25.5 64.1-54.3 83.5v68h87.6c51.4-47.3 81.3-117 81.3-196.8z"/>
    <path fill="#34A853" d="M272 544.3c73.5 0 135-24.4 179.9-66.2l-87.6-68c-24.3 16.3-55.4 25.8-92.3 25.8-70.9 0-131-47.9-152.4-112.3H29.6v70.9c44.8 88.2 136.8 150.8 242.4 150.8z"/>
    <path fill="#FBBC05" d="M119.6 323.6c-10.4-30.5-10.4-63.4 0-93.9V158.8H29.6c-38.6 77.1-38.6 168.6 0 245.7l90-70.9z"/>
    <path fill="#EA4335" d="M272 107.7c39.9-.6 78.1 13.9 107.1 40.7l80.3-80.3C413.4 24.4 351.9 0 272 0 166.4 0 74.4 62.6 29.6 150.8l90 70.9C141 155.6 201.1 107.7 272 107.7z"/>
  </svg>
);

const Header = ({ activeTab, activeTabIcon: ActiveTabIcon, sidebarCollapsed, setSidebarCollapsed, darkMode, setDarkMode }) => (
  <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 px-6 py-4 transition-colors">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ActiveTabIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
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

        {/* Google login icon */}
        <button
          className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center"
          aria-label="Google Login"
        >
          <GoogleIcon />
        </button>
      </div>
    </div>
  </header>
);

export default Header;