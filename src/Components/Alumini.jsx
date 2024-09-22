import React from "react";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";

function Alumini() {
  
  const AluminiData = [
    {
      text: "243+ Courses",
    },
    {
      text: "10 yr+ Experience",
    },
    {
      text: "60,500 - Alumini",
    },
    {
      text: "485+ hiring partners",
    },
  ];

  return (
    <div className="bg-[#F8F8F8] p-4 pb-14 pt-14">
      <div className="container lp:max-w-full tb:max-w-full lp:px-10  flex mx-auto sm:max-w-full sm:px-0">
        <div className="w-100 flex   flex-col items-center  gap-5  flex-1 sm:gap-5   tb:w-full tb:h-fit tb:gap-10">
          <div className="flex flex-col items-center gap-2">
            <WhyAdvButton text={"ALUMINI"} />
            <h1 className="text-enroll_users font-semibold text-4xl  tb:text-center sm:text-center sm:text-3xl">
               Our Influence and Scope
            </h1>
          </div>
          <div className=" w-full grid grid-cols-4 gap-20 lp:gap-10 sm:grid-cols-1 sm:gap-5 sm:w-5/5 tb:grid-cols-2 tb:gap-5">
            {AluminiData.map((d) => (
              <div className="border-2 w-full flex items-center justify-center min-h-24 rounded-md border-[#E7EDFB] text-[#486886] text-2xl lp:text-xl font-bold bg-white">
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alumini;