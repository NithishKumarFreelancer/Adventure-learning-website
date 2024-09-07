import { useState, useRef } from 'react';
import ReviewCard from '../atomicComponents/ReviewCard';

const MobileDeviceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const reviewCards = [<ReviewCard key={0} name={"okok"}  />, <ReviewCard key={1} />, <ReviewCard key={2} />]; // Add your review cards here

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < reviewCards.length - 1;

  const handlePrevClick = () => {
    if (canScrollPrev) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        containerRef.current.scrollTo({
          left: containerRef.current.clientWidth * newIndex,
          behavior: 'smooth',
        });
        return newIndex;
      });
    }
  };

  const handleNextClick = () => {
    if (canScrollNext) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        containerRef.current.scrollTo({
          left: containerRef.current.clientWidth * newIndex,
          behavior: 'smooth',
        });
        return newIndex;
      });
    }
  };

  return (
    <div className="relative sm:block hidden"> {/* Ensure visibility only on small screens */}
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ width: `${reviewCards.length * 100}%` }}
        >
          {reviewCards.map((card, index) => (
            <div
              key={index}
              style={{ flex: '0 0 100%' }} // Show one card at a time
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-2">
        <button
          onClick={handlePrevClick}
          disabled={!canScrollPrev}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${canScrollPrev ? 'bg-[#042C9A]' : 'bg-[#C7CFE5]'}`}
        >
          <img src="/arrow left.svg" className="w-2 h-auto" alt="Previous" />
        </button>
        <button
          onClick={handleNextClick}
          disabled={!canScrollNext}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${canScrollNext ? 'bg-[#042C9A]' : 'bg-[#C7CFE5]'}`}
        >
          <img src="/arrow right.svg" className="w-2 h-auto" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default MobileDeviceCarousel;
