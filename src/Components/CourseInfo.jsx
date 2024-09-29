import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Confetti from "react-confetti";
import FrequentlyAskedQ from "./FrequentlyAskedQ";
import CoursInfoReview from "./CoursInfoReview";
import CourseModule from "./CourseModule";
import Certificate from "./Certificate";
import StickyForm from "./StickyForm";
import NonStickyForm from "./NonStickyForm";
import Footer from "../Components/Footer";
import Nav from "./Nav";
function CourseInfo() {
  const [learningMode, setLearningMode] = useState("Offline");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dataset = [
    { iconsrc: "yt", text: "Get comprehensive training in 4 months" },
    { iconsrc: "goal", text: "Daily guided exercises" },
    { iconsrc: "placement", text: "100% Placement Assistance" },
    { iconsrc: "feedback", text: "Regular expert feedback" },
  ];

  return (
    <div className="">
      <Nav />
      <div className="containe pt-14 mx-auto sm:max-w-full lp:max-w-full">
        {showConfetti && <Confetti />}
        <div className="lg:max-w-[70%] lp:max-w-[60%]   flex flex-col items-center mb-10 gap-4 sm:px-6 sm:max-w-full">
          <h1 className="text-[#143AA0] text-4xl font-semibold text-center sm:text-center text-2l sm:text-2xl">
            Master Full Stack Development Code Your Way to Success
          </h1>
          <p className="text-[#8C8080] max-w-[700px] text-center font-medium sm:text-sm">
            Master the fundamentals of why coding works, from building robust
            applications to deploying live, and learn how to navigate the tech
            industry to advance your full stack development career.
          </p>
        </div>
        <div className="relative lp:max-w-[50%] lg:max-w-[73%] lg:px-6   lp:px-6 flex gap-5 ">
          <div>
            <div className="flex  justify-between sm:flex-col   lp:gap-2 ">
              <div className="flex flex-col gap-4 sm:flex sm:items-center sm:mb-6">
                {dataset.map((d) => (
                  <div
                    key={d.iconsrc}
                    className="bg-[#143AA0] rounded-md flex w-[330px] p-3 gap-3"
                  >
                    <img src={`/courseInfo/${d.iconsrc}.svg`} alt="" />
                    <p className="text-white text-sm">{d.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4 sm:mx-6">
                <img
                  src="/courseInfo/banner.jpg"
                  className="w-[524px] rounded-sm"
                  alt="Banner"
                />
                <p className="text-[#8C8080] font-medium text-sm max-w-[400px] text-center sm:text-sm">
                  Complete Full Stack Development: Master Frontend, Backend, and
                  Deployment with Expert Guidance!
                </p>

                <button
                  className="text-white font-semibold w-full p-3 rounded-md text-[18px]"
                  style={{
                    background:
                      "linear-gradient(to right, #143AA0 0%, #143AA0 54%, #B3B4B7 100%)",
                  }}
                >
                  Buy Now for $600{" "}
                  <span className="line-through text-[10px]">$9000</span>
                </button>
              </div>

              <NonStickyForm />
            </div>
            <CourseModule />

            <Certificate />
            <FrequentlyAskedQ />
            {/* <CoursInfoReview /> */}
            <Footer />
          </div>
          <StickyForm />
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;