import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="scroll-top scroll-to-target" data-target="html" onClick={scrollToTop}>
    </button>
  );
};

export default ScrollToTopButton;