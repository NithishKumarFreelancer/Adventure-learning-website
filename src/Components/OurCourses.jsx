import React, { useState } from "react";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";
import CourseCard from "./CourseCard";

function OurCourses() {
  const [activeTab, setActiveTab] = useState("Development");
  const tabs = ["Development", "Marketing", "Design"];

  const getTabContent = () => {
    switch (activeTab) {
      case "Development":
        return (
          <div className="w-full  grid gap-5 sm:grid-cols-1 tb:grid-cols-2 lp:grid-cols-2 lg:grid-cols-3 sm:px-6">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        );
      case "Marketing":
        return (
          <div className="w-full grid grid-cols-3 gap-5">
            <CourseCard text="text" />
            <CourseCard />
            <CourseCard />
          </div>
        );
      case "Design":
        return (
          <div className="w-full grid grid-cols-3 gap-5">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        );
      default:
        return (
          <div className="w-full grid grid-cols-3 gap-5">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        );
    }
  };

  return (
    <div className="w-100 py-4 bg-whyadvBG">
      <div className="container lp:max-w-full tb:max-w-full sm:max-w-full lp:px-10  flex mx-auto  sm:px-0">
        <div className="flex gap-9 flex-col justify-between items-center flex-1">
          <div className="space-y-4 flex flex-col items-center w-100">
            <WhyAdvButton text={"Our Courses"} />
            <p className="text-enroll_users font-semibold text-sm">
              Currently Popular Courses
            </p>
            <p className="max-w-xl text-center text-learnsmarter_text_p font-medium text-sm">
              Many of the world's leading technical experts offer courses
              designed for continuous career advancement. Explore all of the
              most popular courses right here.
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-9">
            <div className="flex w-fit transition-all duration-300 bg-white border gap-6 border-[#E1E4ED] p-2 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`py-2 rounded-full font-bold px-4 transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#143aa0] font-medium text-white"
                      : "bg-white font-medium text-black"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
           {getTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCourses;
