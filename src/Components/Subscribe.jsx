import React from "react";

function Subscribe() {
  return (
    <div className="p-4">
      <div className="container flex-col lp:max-w-full tb:max-w-full gap-3 lp:px-10  flex mx-auto sm:max-w-full sm:px-4">
        <div className="w-full flex  flex-col items-center  gap-4 pb-4 sm:gap-1 ">
          <div className="flex flex-col items-center">
            <h className="text-enroll_users font-semibold text-2xl sm:text-xl">
              Subscribe to Our Newsletter for
            </h>
            <h className="text-enroll_users font-semibold text-2xl sm:text-xl">
              the Latest Course Updates!
            </h>
          </div>
          <p className="text-learnsmarter_text_p font-medium text-sm w-[450px] text-center sm:w-96">
            Stay informed about our newest courses and exclusive offers.
            Subscribe now and receive 20% off on your first course enrollment!
          </p>
        </div>
        <div className="w-fit flex mr-auto ml-auto gap-3 flex-col justify-center">
          <div className="flex justify-between w-fit bg-subscribeFormBG px-3 py-2  rounded-full">
            <div className="flex gap-2">
              <img className="w-5" src="mail-icon.svg" alt="" />
              <input
                className="bg-subscribeFormBG outline-none text-sm"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <button className="bg-enroll_users text-white font-medium text-sm flex items-center px-6 py-3 rounded-full">
              Subscribe
            </button>
          </div>
          <p className="text-learnsmarter_text_p font-medium text-sm text-center flex gap-1">
            We prioritize the protection of your data in our
            <span className="underline underline-offset-2 cursor-pointer">
              privacy policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
