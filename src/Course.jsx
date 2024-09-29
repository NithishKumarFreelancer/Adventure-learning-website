import React from "react";
import Nav from "./Components/Nav";
import CourseCard from "./CourseCard";

function Course() {
  return (
    <div className="">
      {/* Navigation Bar */}
      <Nav />
      {/* Main Content */}
      <div className="flex justify-between  gap-7   top-14 py-3  bg-white border border-[#D9DFF0] px-16 sm:px-5  z-10">
          {/* Sort by Dropdown */}
          <div  className="flex gap-8 sm:flex-col sm:gap-4">
            <select
              name="sort"
              id="sort"
              className="bg-[#EBEEF7] text-[#143AA0] border border-[#E4E5E9] rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#143AA0]"
            >
              <option value="">Sort by</option>
              <option value="name">Name</option>
              <option value="course">Course</option>
            </select>

            {/* Explore Dropdown */}
            <select
              name="explore"
              id="explore"
              className="bg-[#EBEEF7] text-[#143AA0] border border-[#E4E5E9] rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#143AA0]"
            >
              <option value="">Explore</option>
              <option value="data-science">Data Science</option>
              <option value="embedded">Embedded</option>
              <option value="software">Software</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#EBEEF7] text-[#143AA0] border border-[#E4E5E9] rounded-md py-2 px-4 text-sm w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-[#143AA0]"
            />
          </div>
          {/* Search Input */}
        </div>
      <div className="container mx-auto  sm:max-w-full sm:px-4 mt-10 space-y-10 sm:space-y-3 sm:mt-4 px-10">
        {/* Sorting and Filtering Section */}
        

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CourseCard imgsrc="CourseCardImages/img-container-1.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container-2.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container-3.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container-1.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container-2.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container-3.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container-1.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container-2.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container-3.svg" />
          <CourseCard imgsrc="CourseCardImages/img-container.svg" />
        </div>
      </div>
    </div>
  );
}

export default Course;
