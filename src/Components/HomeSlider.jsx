import React from "react";
function HomeSlider() {
  return (
    <div className="container lp:max-w-full tb:max-w-full lp:px-10 flex mx-auto sm:max-w-full sm:p-4 tb:p-4 ">
      <div className="flex justify-between w-screen sm:flex-col sm:pb-6 tb:flex-col">
        <img src="Codingworkshop-amico.svg" className="h-[500px]" alt="" />
        <div className="flex  flex-col gap-4 justify-center ">
          <div className="space-y-2">
            <h1 className="text-[#1D41A4] text-3xl font-bold sm:text-3xl">
            Job-Ready Courses 
            </h1>
            <h5 className="text-[#525252] text-xl font-bold">
            with 100% Placement Assistance
            </h5>
          </div>
          <p className="text-[#7E98B0] w-[700px] text-[15px] font-medium sm:w-fit text-wrap lp:w-fit lp:text-wrap ">
            Elevating education in vernacular languages, we're the premier
            destination for personalized learning. From online education to
            career advancement, we offer top-notch tech skills in your native
            language. Experience limitless learning and success with us.
          </p>
          <p className="text-[#1D41A4]  text-sm sm:text-xs bg-[#F4F2F2] p-2 font-semibold w-fit rounded-sm">
            ADV
            <span className="pl-1 text-[#8B8888]">
               - Unleash Your Learning Potential With Native Flavor
            </span>
          </p>
          <button className="bg-[#042C9A] w-fit text-sm font-semibold p-2 px-5 text-white rounded-md">
            Get started
          </button>
          <div className="flex gap-10">
            <div className="bg-white p-2 border w-fit rounded-md">
              <p className="text-2xl  font-bold">
                243
                <span className="text-[#042C9A]">+</span>
              </p>
              <p className="text-[#9D9A9A] ">Online Courses</p>
            </div>
            <div className="bg-white p-2 border w-fit rounded-md">
              <p className="text-2xl  font-bold">
                60,500
                <span className="text-[#042C9A]">+</span>
              </p>
              <p className="text-[#9D9A9A] ">    Students Alumini
              </p>
            </div>
            <div className="bg-white p-2 border w-fit rounded-md">
              <p className="text-2xl  font-bold">
                485
                <span className="text-[#042C9A]">+</span>
              </p>
              <p className="text-[#9D9A9A] ">Hiring Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;