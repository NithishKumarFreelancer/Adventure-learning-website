import React, { useRef, useEffect, useState } from 'react';
import '../Styles/CarouselComponent.css';
const CarouselComponent = () => {
  const scrollingTextRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const updateTextWidth = () => {
      if (scrollingTextRef.current) {
        setTextWidth(scrollingTextRef.current.scrollWidth);
      }
    };

    updateTextWidth();
    window.addEventListener('resize', updateTextWidth);
    return () => {
      window.removeEventListener('resize', updateTextWidth);
    };
  }, []);

  return (
    <div className="scrolling-text-container  h-7vh  md:h-3vh  bg-custom-bar-bg">
      <div
        className="scrolling-text"
        ref={scrollingTextRef}
        style={{ animationDuration: `${textWidth / 30}s` }} // Adjust the duration as needed
      >
        <span className="scroll-text-dark">Last chance to grab courses with 30% off!</span>
        <span className="scroll-text-light">Don't miss out on this deal!</span>
        <span className="scroll-text-dark">Enroll now and save big on your educational journey!</span>
        <span className="scroll-text-light">Boost your skills and knowledge.</span>
        <span className="scroll-text-dark">Act fast, spots are filling up quickly.</span>
        <span className="scroll-text-light">Limited time offer!</span>
        <span className="scroll-text-dark">Last chance to grab courses with 30% off!</span>
        <span className="scroll-text-light">Don't miss out on this deal!</span>
        <span className="scroll-text-dark">Enroll now and save big on your educational journey!</span>
        <span className="scroll-text-light">Boost your skills and knowledge.</span>
        <span className="scroll-text-dark">Act fast, spots are filling up quickly.</span>
        <span className="scroll-text-light">Limited time offer!</span>
      </div>
    </div>
  );
};

export default CarouselComponent;