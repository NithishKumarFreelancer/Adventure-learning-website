import React from "react";
function ReviewCard({text}) {
  return (
    <div className="flex flex-col  review-card  gap-4  border-2 bg-white   border-[#E7EDFB] rounded-md p-4" >
      <div className="flex justify-between items-center ">
      <div className="flex  gap-2 ">
        <img src="/star.svg" alt="" />
        <img src="/star.svg" alt="" />
        <img src="/star.svg" alt="" />
        <img src="/star.svg" alt="" />
        <img src="/star.svg" alt="" />
        <p className="font-bold text-sm pt-0.5">{text}</p>
      </div>
      <img src="/quote-icon.svg" alt="" />
      </div>
      <p className="w-[300px] text-[14px] text-[#5E5E5E] font-medium leading-relaxed">
        "I recently used the services provided and was ff impressed with the
        experience. The website was incredibly user-friendly, thanks to the
        seamless integration of custom code that enhanced the overall
        functionality. The performance was top-notch, with fast page loading
        times that made browsing a breeze.”
      </p>
      <div className="flex gap-3 items-center">
        <img
          src="/reviewProfilePic.svg"
          className="rounded-full w-[50px] h-[50px]"
          alt=""
        />
        <div>
          <p className="font-semibold text-sm">David Broody</p>
          <p className="text-[#ADA7A7] text-xs font-medium">App store</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
