import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import GoToTopButton from './components/GoToTopButton';
import NotFound from './components/NotFound';

const getSystemDark = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored ? JSON.parse(stored) : getSystemDark();
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(mediaQuery.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <HelmetProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Helmet>
                    <title>ConTech - Admin Dashboard</title>
                  </Helmet>
                  <ProtectedRoute darkMode={darkMode} setDarkMode={setDarkMode}>
                    <AdminDashboard darkMode={darkMode} setDarkMode={setDarkMode} />
                    <GoToTopButton />
                  </ProtectedRoute>
                </>
              }
            />
            {/* Auth callback route for OAuth flow */}
            <Route
              path='/auth/callback'
              element={
                <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Processing authentication...</p>
                  </div>
                </div>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;