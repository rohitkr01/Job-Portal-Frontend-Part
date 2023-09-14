import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';

// import UpArrowImg from '../../images/Home-page-img/arrow_upward_white.svg'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button if the user has scrolled down at least 300 pixels
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };

  // Add a scroll event listener to show/hide the button based on scrolling position
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`back-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
    <i>Back To Top</i>
     {/* <img src={UpArrowImg} alt="arrow_upward_img" /> */}
    </div>
  );
};

export default BackToTopButton;
