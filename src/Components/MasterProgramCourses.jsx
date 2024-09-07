import React, { useState } from "react";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";
import CourseCard from "./CourseCard";

function MasterProgramCourses() {
  const [activeTab, setActiveTab] = useState("Development");

  const tabs = ["Master program courses"];

  const getTabContent = () => {
    switch (activeTab) {
      case "Development":
        return (
          <div className="w-full  grid gap-5 sm:grid-cols-1 tb:grid-cols-2 lp:grid-cols-2 lg:grid-cols-3 sm:px-6">
            <CourseCard level={"Advance"}  image_url={"/masterProgram/embeded.svg"} role={"Embedded system"} content={"Adventure Learning offers advanced embedded system and automotive Embedded course for students, Professionals and Job seekers to entering into the embedded field."}/>
            <CourseCard level={"Intermediate"}  image_url={"/masterProgram/web-development-svgrepo-com.svg"} role={"Full stack development"} content={"We provide full stack development course, including front-end and back-end technologies, databases, and deployment. We integrate various technologies and frameworks."}/>
            <CourseCard level={"Advance"}  image_url={"/masterProgram/testing.svg"} role={"Software testing"} content={"We provide a comprehensive introduction to software testing principles, methodologies, and tools. You can learn about different types of testing, test automation, and ensuring software quality."}/>
           
            <CourseCard level={"Advance"}  image_url={"/masterProgram/datascience.svg"} role={"Data science"} content={"We cover the entire data science workflow, including data collection, processing, analysis, and visualization. You will gain practical experience with popular tools and techniques used in the field."}/>
            <CourseCard level={"Intermediate"}  image_url={"/masterProgram/data-analytics.svg"} role={"Data analytics"} content={"We offer the key aspects of data analytics, including data collection, cleaning, analysis, and visualization. you will gain hands-on experience with various tools and techniques to make data-driven decisions."}/>
            <CourseCard level={"Basic"}  image_url={"/masterProgram/cloudcomputing1.svg"} role={"Cloud computing"} content={"We provide an in-depth understanding of cloud computing principles, services, and implementation. You will learn about different cloud models, major cloud providers, and practical applications of cloud technologies."}/>
          </div>
        );
      default:
        return (
          <div className="w-full  grid gap-5 sm:grid-cols-1 tb:grid-cols-2 lp:grid-cols-2 lg:grid-cols-3 sm:px-6">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        );
    }
  };

  return (
    <div className="w-100 py-4 bg-whyadvBG">
      <div className="container lp:max-w-full tb:max-w-full sm:max-w-full lp:px-10  gap-3 flex flex-col mx-auto  sm:px-0">
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
            <div className="flex w-fit transition-all duration-300 bg-white border gap-6 border-[#E1E4ED] p-1.5 rounded-full sm:gap-0 sm:justify-between">
                <button
                  className={"py-2 rounded-full font-bold px-4 transition-all duration-300 bg-[#143aa0] font-medium text-white"}
              >
                  {tabs[0]}
                </button>
            </div>
            {getTabContent()}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-moreBtnBg font-bold text-learnsmarter_text_p px-4 py-0.5 rounded-lg">
            more
          </button>
        </div>
      </div>
    </div>
  );
}

export default MasterProgramCourses;