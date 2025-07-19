import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import logo from '/Icons/x-icon.png';
import logoTitled from '/Icons/CT-titled.png';

const Sidebar = ({ sidebarCollapsed, activeTab, setActiveTab, sidebarItems, stats }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get user data from localStorage (set by ProtectedRoute)
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
        console.log('📊 [Sidebar] User data loaded:', parsedUserData);
      } catch (error) {
        console.error('❌ [Sidebar] Error parsing user data:', error);
      }
    }
  }, []);

  // Helper function to get user's display name
  const getUserDisplayName = () => {
    if (!userData) return 'Admin User';
    
    if (userData.name) {
      return `${userData.name}`;
    } else if (userData.email) {
      // Extract name from email if no first/last name
      const emailName = userData.email.split('@')[0];
      console.log(userData);
      return emailName.charAt(0).toUpperCase() + emailName.slice(1);
    }

    return 'Admin User';
  };

  // Helper function to get user's email
  const getUserEmail = () => {
    return userData?.email || 'admin@homeauto.com';
  };

  // Helper function to get user's initials for avatar
  const getUserInitials = () => {
    if (!userData) return 'AU';
    
    if (userData.firstName && userData.lastName) {
      return `${userData.firstName.charAt(0)}${userData.lastName.charAt(0)}`.toUpperCase();
    } else if (userData.firstName) {
      return userData.firstName.charAt(0).toUpperCase();
    } else if (userData.email) {
      return userData.email.charAt(0).toUpperCase();
    }
    
    return 'AU';
  };

  return (
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
          <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-25 h-25 object-contain" />
          </div>
          {!sidebarCollapsed && (
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Contech IoT</h1>
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
                !sidebarCollapsed && activeTab === item.id
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-r-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
          >
            <span className="flex items-center justify-center w-8 h-8">
              <item.icon
                className={`w-6 h-6 transition-colors ${
                  sidebarCollapsed && activeTab === item.id
                    ? 'text-blue-600 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              />
            </span>
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
        {/* {!sidebarCollapsed && (
            <div>
              <img src={logoTitled} alt="Logo" className="mx-auto mt-5 w-auto h-auto object-contain" />
            </div>
        )} */}
      </nav>

      {/* Admin Info - Now using actual user data */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-sm">
            {userData ? getUserInitials() : <User className="w-4 h-4" />}
          </div>
          {!sidebarCollapsed && (
            <div className="flex-1 min-w-0"> {/* min-w-0 helps with text truncation */}
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {getUserDisplayName()}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate" title={getUserEmail()}>
                {getUserEmail()}
              </p>
              {userData?.role && (
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5 capitalize">
                  {userData.role}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;