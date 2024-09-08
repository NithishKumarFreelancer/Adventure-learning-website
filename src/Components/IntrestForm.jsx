import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Confetti from "react-confetti";
import axios from "axios";

function InterestForm() {
  const [learningMode, setLearningMode] = useState("Offline");
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

  const handleToggle = () => {
    setLearningMode((prevMode) =>
      prevMode === "Offline" ? "Online" : "Offline"
    );
  };

  const onSubmit = async (data) => {
    // Simulating form submission
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.sheety.co/e8afbbce175c456cfded262f044131c7/courseEnrollment/sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sheet1: {
              name: data.name,
              email: data.email,
              phonenumber: data.phone,
              intrestedIn: data.interest,
              onlineOffline: learningMode,
            },
          }),
        }
      );

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
      console.error("Error during submission:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="relative bg-[#F4F4F4] p-4 sm:p-8 rounded-lg">
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
              🎉 Thank you for your interest!
            </p>
            <p className="text-learnsmarter_text_p text-sm mt-2">
              We've received your details and will get back to you soon.
            </p>
          </div>
        </div>
      )}

      <div className="lg:px-12  lp:grid-cols-2 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* Text Column */}
        <div className="text-center lg:text-left lp:text-left ">
          <h2 className="text-2xl sm:text-3xl font-bold text-enroll_users mb-4">
            Elevate Your Skills with Our Courses
          </h2>
          <ul className="text-learnsmarter_text_p text-xs sm:text-sm lg:text-base mb-4 space-y-2">
            <li className="flex items-center">
              <span className="text-enroll_users mr-2">✔</span>
              <span className="truncate">
                Expert-led courses in development, data science, and IT.
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-enroll_users mr-2">✔</span>
              <span className="truncate">
                Flexible learning modes: Online and Offline.
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-enroll_users mr-2">✔</span>
              <span className="truncate">
                Industry-relevant skills to boost your career.
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-enroll_users mr-2">✔</span>
              <span className="truncate">
                Access to a global community of learners and professionals.
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-enroll_users mr-2">✔</span>
              <span className="truncate">
                Hands-on projects and real-world applications.
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-enroll_users mr-2">✔</span>
              <span className="truncate">
                Personalized mentorship and career guidance.
              </span>
            </li>
          </ul>
          <p className="text-learnsmarter_text_p text-xs sm:text-sm lg:text-base">
            Fill out the form to receive more information and start your
            learning journey today!
          </p>
        </div>

        {/* Form Column */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm sm:text-sm font-semibold text-enroll_users"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users text-xs sm:text-sm"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm sm:text-sm font-semibold text-enroll_users"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users text-sm sm:text-sm"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm sm:text-sm font-semibold text-enroll_users"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                })}
                className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users text-sm sm:text-sm"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="interest"
                className="text-sm sm:text-sm font-semibold text-enroll_users"
              >
                Interested In
              </label>
              <select
                id="interest"
                {...register("interest", {
                  required: "Please select an interest",
                })}
                className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users text-sm sm:text-sm"
              >
                <option value="">Select an option</option>
                <option value="Full Stack Development">
                  Full Stack Development
                </option>
                <option value="Embedded System">Embedded System</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="Software Testing">Software Testing</option>
                <option value="Data Science">Data Science</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="AWS">AWS</option>
                <option value="DevOps">DevOps</option>
                <option value="CCNA">CCNA</option>
              </select>
              {errors.interest && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.interest.message}
                </p>
              )}
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="mode"
                checked={learningMode === "Online"}
                onChange={handleToggle}
                className="mr-2"
              />
              <label
                htmlFor="mode"
                className="text-sm sm:text-sm text-learnsmarter_text_p"
              >
                I am interested in Online Learning
              </label>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 px-4 py-2 bg-enroll_users text-white rounded-md hover:bg-enroll_users/80 focus:outline-none focus:ring-2 focus:ring-enroll_users text-sm sm:text-base"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InterestForm;
