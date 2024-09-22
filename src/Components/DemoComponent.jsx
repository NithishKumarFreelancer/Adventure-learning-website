import React from "react";

function DemoComponent() {
  return (
    <div className="flex justify-around items-center mt-10 mb-10 sm:flex-col sm:items-start sm:px-5 sm:gap-10">
      <div className="flex flex-col gap-6 ">
        <div className="flex  ">
          <h className="text-[#143AA0] text-4xl font-bold w-96 sm:w-52 leading-snug sm:text-3xl">
            Start your free{" "}
            <span className="text-[#3B63DA] text-4xl font-bold">1-day</span>{" "}
            demo class
          </h>
        </div>
        <div className="flex gap-6">
          <button className="rounded-md text-white bg-[#143AA0] h-fit py-2 px-3 font-bold">
            Get started
          </button>
          <div>
            <p className="text-sm font-extrabold">4.80/5</p>
            <p className="text-[#5D7286] text-xs font-medium">
              From 1000+ students review
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[#143AA0] font-bold text-xl">Let’s try!</p>
        <div className="flex flex-col gap-3">
          <div className="flex h-fit gap-2">
            <img src="Icon_assure.svg" className="h-6" alt="" />
            <p className="text-sm  flex items-center">
              Unlock IT Potential, Free Demo!
            </p>
          </div>
          <div className="flex h-fit gap-2">
            <img src="Icon_assure.svg" className="h-6" alt="" />
            <p className="text-sm  flex items-center">
              Explore IT, Completely Risk-Free!
            </p>
          </div>
          <div className="flex h-fit gap-2">
            <img src="Icon_assure.svg" className="h-6" alt="" />
            <p className="text-sm  flex items-center">
              One Day, Endless IT Possibilities!
            </p>
          </div>
          <div className="flex h-fit gap-2">
            <img src="Icon_assure.svg" className="h-6" alt="" />
            <p className="text-sm  flex items-center">
            IT Mastery Starts 100% Free!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoComponent;