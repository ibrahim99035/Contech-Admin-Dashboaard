import React, { useState, useEffect } from 'react';
import './Styles/up.css'; // Import your CSS file for styling

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`goToTopBtn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      Up
    </button>
  );
};

export default GoToTopButton;
