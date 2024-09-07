import React from "react";
function ReviewCard({name, content,platform, rating,image}) {
  console.log(name)
  return (
    <div className="flex flex-col  review-card  gap-4  border-2 bg-white h-fit   border-[#E7EDFB] rounded-md p-4" >
      <div className="flex justify-between items-center ">
      <div className="flex  gap-2 ">
        <img src="/star.svg" alt="" />
        <img src="/star.svg" alt="" />
        <img src="/star.svg" alt="" />
        <img src="/star.svg" alt="" />
        <img src="/star.svg" alt="" />
        <p className="font-bold text-sm pt-0.5">{rating}</p>
      </div>
      <img src="/quote-icon.svg" alt="" />
      </div>
      <p className="w-[300px] text-[14px] text-[#5E5E5E] font-medium leading-relaxed">
        {content}
      </p>
      <div className="flex gap-3 items-center">
        <img
          src={image}
          className="rounded-full w-[50px] h-[50px]"
          alt=""
        />
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-[#ADA7A7] text-xs font-medium">{platform}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;