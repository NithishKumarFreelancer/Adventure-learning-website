import React, { useState, useEffect } from "react";

const images = [
  "/homepage-image1.jpeg",
  "/homepage-image2.jpeg",
  "/homepage-image3.jpeg",
];

function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Set up auto-sliding with useEffect
  useEffect(() => {
    const interval = setInterval(handleNext, 15000); // Change slide every 15 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative h-[70vh] md:h-96 overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              className="w-full h-full object-cover sm:object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex justify-center bottom-5 left-1/2 transform -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#042C9A]" : "bg-[#C7CFE5]"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HomeSlider;
