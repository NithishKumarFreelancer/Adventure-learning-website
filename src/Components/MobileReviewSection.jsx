import React, { useState } from "react";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";
import ReviewCard from "../atomicComponents/ReviewCard";
import reviewsDataset from "../dataset"; // Adjust the import path as needed
import "./Reviews.css";

function MobileReviewSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const handleNext = () => {
    if (currentPage < reviewsDataset.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto sm:max-w-full overflow-hidden">
      <div className="relative w-full flex flex-col gap-7 justify-between items-center p-4 sm:gap-10 pb-14">
        <div className="flex flex-col items-center w-full mb-4">
          <WhyAdvButton text="REVIEWS" />
          <h1 className="font-semibold text-2xl text-center">
            What our learners say about us
          </h1>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[340px] h-[auto]">
            <ReviewCard
              name={reviewsDataset[currentPage].name}
              content={reviewsDataset[currentPage].content}
              platform={reviewsDataset[currentPage].platform}
              rating={reviewsDataset[currentPage].Ratings}
              image={reviewsDataset[currentPage].image}
            />
          </div>
          <div className="flex justify-between w-full mt-4">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage > 0 ? "bg-[#042C9A]" : "bg-[#C7CFE5]"
              }`}
              onClick={handlePrev}
              disabled={currentPage === 0}
            >
              <img src="/arrow left.svg" alt="Previous" />
            </button>
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage < reviewsDataset.length - 1 ? "bg-[#042C9A]" : "bg-[#C7CFE5]"
              }`}
              onClick={handleNext}
              disabled={currentPage === reviewsDataset.length - 1}
            >
              <img src="/arrow right.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileReviewSection;