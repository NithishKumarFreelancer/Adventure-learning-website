import React from "react";
import { Link } from "react-router-dom";

function CourseCard({imgsrc}) {
  return (
    <div className="group relative rounded-md max-w-[350px] border border-[#E4E5E9] shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className="rounded-sm"
        src={imgsrc}
        alt="Course"
      />
      <div className="p-4 flex flex-col gap-2">
        <h1 className="font-bold">Figma UI UX Design Essentials</h1>
        <p className="text-[#143AA0] font-light text-sm">Daniel Walter Scott</p>
        <p className="text-sm text-[#292929]">
          Use Figma to get a job in UI Design, User Interface, User Experience
          design, UX Design & Web Design
        </p>
        <div className="flex gap-2 items-center">
          <p className="font-bold text-sm pt-0.5">4.5</p>
          <img src="/star.svg" alt="star" />
          <img src="/star.svg" alt="star" />
          <img src="/star.svg" alt="star" />
          <img src="/star.svg" alt="star" />
          <img src="/star.svg" alt="star" />
          <p className="text-[#7C7C7C]">(25,145)</p>
        </div>
        {/* Opacity transition for price and bestseller */}
        <div className="flex items-center gap-1 transition-opacity duration-300 group-hover:opacity-0">
          <p className="text-[#143AA0] font-bold">17,99 Rs</p>
          <p className="line-through text-[#7C7C7C] text-xs">114,99 Rs</p>
        </div>
        <div className="text-[#143AA0] text-sm bg-[#EBEEF7] w-fit px-3 py-1 transition-opacity duration-300 group-hover:opacity-0">
          Bestseller
        </div>
        {/* Enroll button with horizontal centering */}
        <Link to="/CourseInfo">
        <div className="absolute sm:static sm:clear-left sm:opacity-100 bottom-8 left-1/2 transform lg:-translate-x-1/2 lp:-translate-x-1/2 text-white bg-[#143AA0] hover:bg-[#4761A8] w-[90%] sm:w-[100%] text-center rounded-sm text-sm py-1.5 cursor-pointer  opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Enroll
        </div>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;