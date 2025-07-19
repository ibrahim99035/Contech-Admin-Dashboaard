import React, { useState, useEffect } from 'react';
import { Shield, Lock, AlertCircle, LogIn, Eye, EyeOff } from 'lucide-react';
import useGoogleOAuth from '../hooks/useGoogleOAuth';

const ProtectedRoute = ({ children, darkMode, setDarkMode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const googleLogin = useGoogleOAuth();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        setIsAuthenticated(false);
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      // Verify token with backend
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/verify`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('🔍 Authentication check result:', userData);
        
        setIsAuthenticated(true);
        setIsAdmin(userData.role === 'admin' || userData.user?.role === 'admin');
        
        // Store user data in localStorage for the Header component
        const userToStore = userData.user || userData;
        localStorage.setItem('userData', JSON.stringify(userToStore));
        console.log('💾 Stored user data:', userToStore);
        
        // If user is authenticated but not admin, show error
        if (userData.role !== 'admin' && userData.user?.role !== 'admin') {
          setError('Access denied. Admin privileges required.');
        }
      } else {
        // Invalid token, clear it
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        setIsAdmin(false);
        setError('Your session has expired. Please log in again.');
      }
    } catch (error) {
      console.error('Authentication check failed:', error);
      setError('Authentication check failed. Please try again.');
      setIsAuthenticated(false);
      setIsAdmin(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        
        // Check if user is admin
        if (data.user.role === 'admin') {
          setIsAuthenticated(true);
          setIsAdmin(true);
          setError('');
        } else {
          setError('Access denied. Admin privileges required.');
          localStorage.removeItem('authToken');
        }
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your connection and try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoginLoading(true);
      setError('');
      
      const result = await googleLogin();
      
      // Store user data for Header component
      const userToStore = result.user || result;
      localStorage.setItem('userData', JSON.stringify(userToStore));
      console.log('💾 Stored user data after Google login:', userToStore);
      
      if (result.user?.role === 'admin' || result.role === 'admin') {
        setIsAuthenticated(true);
        setIsAdmin(true);
        setError('');
      } else {
        setError('Access denied. Admin privileges required.');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    } catch (error) {
      console.error('Google login failed:', error);
      setError('Google login failed. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setIsAdmin(false);
    setError('');
    setShowLoginForm(false);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Not authenticated or not admin
  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 transition-colors">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Shield className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ConTech Admin Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Admin access required
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 mr-2" />
                  <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Login Options */}
            <div className="space-y-4">
              {/* Google Login */}
              <button
                onClick={handleGoogleLogin}
                disabled={loginLoading}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loginLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </>
                )}
              </button>

              {/* Email Login Toggle */}
              <div className="text-center">
                <button
                  onClick={() => setShowLoginForm(!showLoginForm)}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                >
                  {showLoginForm ? 'Hide email login' : 'Use email instead'}
                </button>
              </div>

              {/* Email Login Form */}
              {showLoginForm && (
                <form onSubmit={handleEmailLogin} className="space-y-4 border-t dark:border-gray-700 pt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="admin@contech.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loginLoading}
                    className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loginLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <LogIn className="w-5 h-5 mr-2" />
                        Sign In
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <div className="mt-8 pt-6 border-t dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 ConTech. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // User is authenticated and is admin - render the dashboard
  return children;
};

export default ProtectedRoute;