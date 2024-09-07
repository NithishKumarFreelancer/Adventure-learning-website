import React from "react";

function CourseCard({ level, role, content, image_url }) {
  return (
    <div className="w-fit rounded-md h-fit p-3 flex gap-4 flex-col items-center bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-50">
      <div className="flex flex-col gap-2 items-center">
        <img className="w-20" src={image_url} alt="" />
        <p className="text-course_level font-medium text-xs">{level}</p>
        <h className="text-enroll_users font-semibold text-lg">{role}</h>
        <p className="text-center text-learnsmarter_text_p font-normal text-sm leading-6">
          {content}
        </p>
      </div>
      <div className="w-100 space-y-4">
        <button className="bg-enroll_users py-2 rounded-md font-bold text-sm text-white w-full transition-colors duration-200 hover:bg-enroll_users/90">
          Join the course
        </button>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            <img
              className="w-8 h-8 object-cover rounded-full -ml-1.5 shadow-lg"
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
              className="w-8 h-8 object-cover rounded-full -ml-1.5"
              src="image5.png"
              alt=""
            />
          </div>
          <p className="text-learnsmarter_text_p font-medium text-xs">
            Trusted by our 12,000 students
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;