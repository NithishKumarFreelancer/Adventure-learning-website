import React from "react";

function CourseCard({ text }) {
  return (
    <div className="w-fit rounded-md h-fit p-3 flex gap-4  flex-col items-center bg-white">
      <div className="flex  flex-col gap-2 items-center">
        <img className="w-20" src="embed_icon.png" alt="" />
        <p className="text-course_level font-medium text-xs">Basics</p>
        <h className="text-enroll_users font-semibold text-lg ">
          Embedded Systems
        </h>
        <p className="text-center text-learnsmarter_text_p font-normal text-sm leading-6">
          Delve into Embedded Systems and learn to design and program smart
          devices. Gain practical skills in IoT and embedded software
          development with hands-on experience and expert instruction.
        </p>
      </div>
      <div className="w-100  space-y-4">
        <button className="bg-enroll_users py-2 rounded-md font-bold text-sm text-white w-full">
          Join the course
        </button>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            <img
              className="w-8 h-8 object-cover rounded-full -ml-1.5 shadow-lg "
              src="image1.png"
              alt=""
            />
            <img
              className="w-8 h-8 object-cover rounded-full -ml-1.5 shadow-lg"
              src="image2.png"
              alt=""
            />
            <img
              className="w-8 h-8 object-cover rounded-full -ml-1.5"
              src="image3.png"
              alt=""
            />
            <img
              className="w-8 h-8 object-cover rounded-full -ml-1.5"
              src="image4.png"
              alt=""
            />
            <img
              className="w-8 h-8   object-cover  rounded-full -ml-1.5"
              src="image5.png"
              alt=""
            />
          </div>
          <p className="text-learnsmarter_text_p font-medium text-xs">
            Trusted by our 10,000 students
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
