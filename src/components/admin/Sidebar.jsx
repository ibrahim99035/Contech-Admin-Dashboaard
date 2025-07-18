import React from 'react';
import { Home, User } from 'lucide-react';

const Sidebar = ({ sidebarCollapsed, activeTab, setActiveTab, sidebarItems, stats }) => (
  <div
    className={`${sidebarCollapsed ? 'w-16' : 'w-64'} 
      bg-white dark:bg-gray-900 
      shadow-lg 
      border-r border-gray-200 dark:border-gray-800 
      transition-all duration-300 flex flex-col`}
  >
    {/* Logo section */}
    <div className="p-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Home className="w-5 h-5 text-white" />
        </div>
        {!sidebarCollapsed && (
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">HomeAuto</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Admin Panel</p>
          </div>
        )}
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex-1 p-4 space-y-2">
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
            ${
              activeTab === item.id
                ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-r-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
        >
          <item.icon className="w-5 h-5" />
          {!sidebarCollapsed && (
            <>
              <span className="flex-1 text-left">{item.label}</span>
              {item.count && (
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                  {item.count}
                </span>
              )}
            </>
          )}
        </button>
      ))}
    </nav>

    {/* Admin Info */}
    <div className="p-4 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </div>
        {!sidebarCollapsed && (
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Admin User</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">admin@homeauto.com</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Sidebar;