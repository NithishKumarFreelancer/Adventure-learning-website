import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Confetti from "react-confetti";

function Subscribe() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubscribe = async (data) => {
    const { email } = data;
    const url = "https://api.sheety.co/e8afbbce175c456cfded262f044131c7/studentsDetails/sheet1";
    const body = {
      sheet1: {
        email: email,
        name: "data",
      },
    };

    setIsLoading(true); // Start loading

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      setShowConfetti(true);
      setShowPopup(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 4000); // Confetti duration

      setTimeout(() => {
        setPopupVisible(true);
      }, 100); // Slight delay for smoother transition

      setTimeout(() => {
        setPopupVisible(false);
        setShowPopup(false); // Hide the popup after it disappears
      }, 4000); // Popup and confetti auto-close at the same time

      reset(); // Reset the form fields
    } catch (error) {
      console.error("Error during subscription:", error.response ? error.response.data : error.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="relative p-4 bg-[#F4F4F4]">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          recycle={false}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 50 }}
        />
      )}

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div
            className={`bg-white p-6 rounded-md shadow-lg text-center relative transition-transform duration-500 ease-out transform ${
              popupVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <p className="text-enroll_users font-semibold text-lg">
              🎉 Thank you for subscribing!
            </p>
            <p className="text-learnsmarter_text_p text-sm mt-2">
              You've successfully subscribed to our newsletter.
            </p>
          </div>
        </div>
      )}

      <div className="container flex-col lp:max-w-full tb:max-w-full gap-3 lp:px-10 flex mx-auto sm:max-w-full sm:px-4">
        <div className="w-full flex flex-col items-center gap-4 pb-4 sm:gap-1 ">
          <div className="flex flex-col items-center">
            <h1 className="text-enroll_users font-semibold text-2xl sm:text-xl">
              Subscribe to Our Newsletter for
            </h1>
            <h1 className="text-enroll_users font-semibold text-2xl sm:text-xl">
              the Latest Course Updates!
            </h1>
          </div>
          <p className="text-learnsmarter_text_p font-medium text-sm w-[450px] text-center sm:w-96">
            Stay informed about our newest courses and exclusive offers.
            Subscribe now and receive 20% off on your first course enrollment!
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleSubscribe)}
          className="w-fit flex mr-auto ml-auto gap-3 flex-col justify-center"
        >
          <div className="flex justify-between w-fit bg-subscribeFormBG px-3 py-2 rounded-full">
            <div className="flex gap-2">
              <img className="w-5" src="mail-icon.svg" alt="Mail Icon" />
              <input
                className="bg-subscribeFormBG outline-none text-sm"
                type="text"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
            </div>
            <button
              type="submit"
              className={`bg-enroll_users text-white font-medium text-sm flex items-center px-6 py-3 rounded-full ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>
          )}
          <p className="text-learnsmarter_text_p font-medium text-sm text-center flex gap-1 mt-2 text-wrap sm:flex sm:flex-col">
            <p>We prioritize the protection of your data in our</p>
            <span className="underline underline-offset-2 cursor-pointer">
              privacy policy.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;