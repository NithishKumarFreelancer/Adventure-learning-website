import React, { useRef, useState, useEffect } from "react";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";
import ReviewCard from "../atomicComponents/ReviewCard";
import "./Reviews.css";
import MobileReviewSection from "./MobileReviewSection";
import reviewsDataset from "../dataset";

function Reviews() {
  const scrollRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true); // Default to true initially

  const handleNext = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.clientWidth;
      const gap = 48; // Adjusted gap between cards
      const scrollDistance = cardWidth + gap;

      scrollRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });

      checkScrollPosition();
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.clientWidth;
      const gap = 48; // Adjusted gap between cards
      const scrollDistance = cardWidth + gap;

      scrollRef.current.scrollBy({
        left: -scrollDistance,
        behavior: "smooth",
      });

      checkScrollPosition();
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.clientWidth;
      const gap = 48; // Adjusted gap between cards
      const scrollPosition = scrollRef.current.scrollLeft;
      const maxScrollLeft =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      const isLastCardVisible =
        scrollPosition >= maxScrollLeft - (cardWidth + gap - 1); // Ensure the last card is fully visible

      setCanScrollPrev(scrollPosition > 0);
      setCanScrollNext(!isLastCardVisible); // Disable next button when the last card is visible
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, []);

  return (
    <div className="container lp:max-w-full tb:max-w-full lp:px-10 flex mx-auto sm:max-w-full sm:px-0 overflow-x-hidden  pb-14  pt-14">
      <div className="w-full flex flex-col relative  gap-7  justify-between sm:items-center items-center flex-1 p-4 sm:gap-10 tb:w-full tb:h-fit tb:gap-10">
        <div className="sm:hidden relative flex justify-center w-full ">
          <button
            className={`absolute bottom-[50%] left-4 w-10 h-10 rounded-full flex items-center justify-center ${
              canScrollPrev ? "bg-[#042C9A]" : "bg-[#C7CFE5]"
            }`}
            onClick={handlePrev}
          >
            <img src="/arrow left.svg" alt="Previous" />
          </button>
          <div
            className="flex w-[80%] sm:w-[100%] overflow-x-auto space-x-12 sm:space-x-0 custom-scrollbar-hide"
            ref={scrollRef}
            onScroll={checkScrollPosition}
          >
            {reviewsDataset.map((d) => (
              <>
                <ReviewCard className="review-card"  name= {d.name}  content={d.content} rating={d.Ratings}  platform = {d.platform} image={d.image}/>
              </>
            ))}
          </div>
          <button
            className={`absolute bottom-[50%] right-4 w-10 h-10 rounded-full flex items-center justify-center ${
              canScrollNext ? "bg-[#042C9A]" : "bg-[#C7CFE5]" // Change color when no more cards to scroll
            }`}
            onClick={handleNext}
          >
            <img src="/arrow right.svg" alt="Next" />
          </button>
        </div>
        <div className="hidden sm:flex ">
          <MobileReviewSection />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
