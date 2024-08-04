import React from "react";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";
import ReviewCard from "../atomicComponents/ReviewCard";

function Reviews() {
  return (
    <div className="container  lp:max-w-full tb:max-w-full lp:px-10  flex mx-auto sm:max-w-full sm:px-0">
      <div className="w-100 flex bg-[#F8F8F8] justify-between items-center flex-1 p-4 sm:flex-col-reverse sm:gap-10  tb:flex-col-reverse tb:w-full tb:h-fit tb:gap-10">
        <div className="flex flex-col items-center w-full">
          <WhyAdvButton text="REVIEWS" />
          <h1 className=" font-semibold text-4xl  tb:text-center sm:text-center sm:text-3xl">
             What our learners say about us
          </h1>
        </div>
        <div>
          <button></button>
          <div>
            <ReviewCard />
          </div>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;