import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'
import AdminDashboard from './pages/AdminDashboard';
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
                    <title>ConTech - Home</title>
                  </Helmet>
                  {/* Pass darkMode and setDarkMode to AdminDashboard for Header toggle */}
                  <AdminDashboard darkMode={darkMode} setDarkMode={setDarkMode} />
                  <GoToTopButton />
                </>
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