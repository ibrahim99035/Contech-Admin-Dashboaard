// src/components/admin/Header.jsx
import React, { useState, useEffect } from 'react';
import { Settings, Bell, LogOut, Sun, Moon, User, Menu, X } from 'lucide-react';

const Header = ({ activeTab, activeTabIcon: ActiveTabIcon, sidebarCollapsed, setSidebarCollapsed, darkMode, setDarkMode }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      console.log('🔍 Token found:', token ? 'Yes' : 'No');
      
      if (!token) {
        console.log('❌ No auth token found');
        // Try to get user data from localStorage as fallback
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          console.log('📦 Using stored user data');
          setUser(JSON.parse(storedUserData));
        }
        setIsLoading(false);
        return;
      }

      console.log('📡 Fetching user data...');
      
      // Try the /me endpoint first
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('📡 Response status:', response.status);

      if (response.ok) {
        const userData = await response.json();
        console.log('✅ User data received:', userData);
        const userToStore = userData.user || userData;
        setUser(userToStore);
        localStorage.setItem('userData', JSON.stringify(userToStore));
      } else {
        console.log('❌ Failed to fetch from /me, trying /verify...');
        
        // Fallback to verify endpoint
        const verifyResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/verify`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (verifyResponse.ok) {
          const verifyData = await verifyResponse.json();
          console.log('✅ User data from verify:', verifyData);
          // Handle different response structures
          const userToStore = verifyData.user || verifyData;
          setUser(userToStore);
          localStorage.setItem('userData', JSON.stringify(userToStore));
        } else {
          console.log('❌ Both endpoints failed');
          // If both fail, try stored data or decode token
          const storedUserData = localStorage.getItem('userData');
          if (storedUserData) {
            console.log('📦 Using stored user data as fallback');
            setUser(JSON.parse(storedUserData));
          } else {
            tryDecodeToken(token);
          }
        }
      }
    } catch (error) {
      console.error('❌ Failed to fetch user data:', error);
      
      // Fallback: try stored data first, then decode token
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        console.log('📦 Using stored user data after error');
        setUser(JSON.parse(storedUserData));
      } else {
        const token = localStorage.getItem('authToken');
        if (token) {
          tryDecodeToken(token);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const tryDecodeToken = (token) => {
    try {
      // If token is JWT, try to decode it
      const parts = token.split('.');
      if (parts.length === 3) {
        const payload = JSON.parse(atob(parts[1]));
        console.log('🔓 Decoded token payload:', payload);
        
        // Create user object from token data
        const userData = {
          id: payload.id || payload.sub || payload.userId,
          name: payload.name || payload.displayName || payload.given_name + ' ' + payload.family_name,
          email: payload.email,
          picture: payload.picture || payload.avatar,
          role: payload.role || 'admin'
        };
        
        console.log('✅ User data from token:', userData);
        setUser(userData);
      }
    } catch (decodeError) {
      console.error('❌ Failed to decode token:', decodeError);
      
      // Final fallback: use mock data to show the UI works
      console.log('🔧 Using fallback user data');
      setUser({
        name: 'Admin User',
        email: 'admin@contech.com',
        role: 'administrator'
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setUser(null);
    setShowUserMenu(false);
    // Trigger a page reload to go back to the login screen
    window.location.reload();
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 px-6 py-4 transition-colors">
      <div className="flex items-center justify-between">
        {/* Left side - Menu toggle and page title */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors lg:hidden"
          >
            {sidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
          
          <div className="hidden lg:flex items-center space-x-3">
            <ActiveTabIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 capitalize">
                {activeTab}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user ? `Welcome back, ${user.name || user.email}` : 'Admin Dashboard'}
              </p>
            </div>
          </div>

          <div className="lg:hidden">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 capitalize">
              {activeTab}
            </h1>
          </div>
        </div>

        {/* Right side - Actions and user menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Notifications */}
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative transition-colors">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
          </button>

          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isLoading ? (
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
              ) : user?.picture ? (
                <img 
                  src={user.picture} 
                  alt={user.name || user.email}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                  {user?.name ? (
                    <span className="text-white text-sm font-medium">
                      {getInitials(user.name)}
                    </span>
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
              )}
              
              <div className="hidden sm:block text-left">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user?.name || 'Admin User'}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {user?.email || 'admin@contech.com'}
                </div>
              </div>
            </button>

            {/* User dropdown menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {user?.name || 'Admin User'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.email || 'admin@contech.com'}
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    {user?.role || 'Administrator'}
                  </div>
                </div>
                
                <div className="py-1">
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      // You can add profile settings functionality here
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Profile Settings</span>
                  </button>
                  
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile user info */}
      <div className="lg:hidden mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {user ? `Welcome back, ${user.name || user.email}` : 'Admin Dashboard'}
        </p>
      </div>

      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </header>
  );
};

export default Header;