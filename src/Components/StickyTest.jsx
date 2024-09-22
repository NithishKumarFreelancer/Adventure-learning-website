import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Confetti from "react-confetti";

function StickyTest() {
  const [learningMode, setLearningMode] = useState("Offline");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      }, 4000);

      setTimeout(() => {
        setPopupVisible(true);
      }, 100);

      setTimeout(() => {
        setPopupVisible(false);
        setShowPopup(false);
      }, 4000);

      reset();
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setIsLoading(false);
    }
  }


  return (
     <div className="container lp:max-w-[1000px] mx-auto">
      {showConfetti && <Confetti />}
      <div className="flex flex-col items-center mb-10 gap-4">
        <h1 className="text-[#143AA0] text-4xl font-semibold">
          Master Full Stack Development: Code Your Way to Success
        </h1>
        <p className="text-[#8C8080] max-w-[700px] text-center font-medium">
          Master the fundamentals of why coding works, from building robust
          applications to deploying live, and learn how to navigate the tech
          industry to advance your full stack development career.
        </p>
      </div>
      <div className= "flex gap-10">
        <div className="flex flex-col gap-4">
          {["yt", "goal", "placement", "feedback"].map((icon) => (
            <div key={icon} className="bg-[#143AA0] flex w-[330px] p-3 gap-3">
              <img src={`/courseInfo/${icon}.svg`} alt="" />
              <p className="text-white text-sm">
                Get comprehensive training in 4 months
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src="/courseInfo/banner.jpg" className="w-[524px] rounded-sm" alt="Banner" />
          <p className="text-[#8C8080] font-medium text-sm max-w-[400px] text-center">
            Complete Full Stack Development: Master Frontend, Backend, and
            Deployment with Expert Guidance!
          </p>
        </div>
        <div className="sticky" style={{ top: "20px", zIndex: 10, background: "white", padding: "10px", border: "1px solid #ccc"}}>
          <div className="bg-white border p-4 flex flex-col gap-5">
            <h1 className="text-xl font-semibold">
              Start Your Adventure: Enroll Now!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full"
            >
              {["name", "email", "phone"].map((field) => (
                <div className="flex flex-col" key={field}>
                  <label htmlFor={field} className="text-sm font-semibold">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    type={field === "email" ? "email" : "tel"}
                    {...register(field, {
                      required: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
                      pattern: field === "phone" ? {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number",
                      } : undefined,
                    })}
                    className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users"
                    placeholder={`Enter your ${field}`}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors[field].message}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex flex-col">
                <label htmlFor="interest" className="text-sm font-semibold">
                  Interested In
                </label>
                <select
                  id="interest"
                  {...register("interest", {
                    required: "Please select an interest",
                  })}
                  className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users"
                >
                  <option value="">Select an option</option>
                  {["Full Stack Development", "Embedded System", "Java", "Python", "Software Testing", "Data Science", "Data Analytics", "AWS", "DevOps", "CCNA"].map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
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
                <label htmlFor="mode" className="text-sm">
                  I am interested in Online Learning
                </label>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 px-4 py-2 bg-enroll_users text-white rounded-md hover:bg-enroll_users/80 focus:outline-none focus:ring-2 focus:ring-enroll_users"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
          <div className="bg-white border p-4 flex flex-col gap-5 mt-4">
            <p className="text-xl text-[#093097] font-extrabold">Brochures</p>
            <p className="max-w-[400px] text-sm text-[#5D7286]">
              Start your career with confidence and our 100% placement support.
              Click here to see how we can help you succeed and unlock your full
              potential.
            </p>
            <div className="bg-[#143AA0] w-fit ml-auto mr-auto flex p-4 gap-4 rounded-md">
              <p className="text-white text-[17px] font-semibold">Download Now</p>
              <img src="/courseInfo/download.svg" alt="Download" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[800px]"> {/* Increased height for scrolling */}
        <p>Content for scrolling...</p>
      </div>
    </div>
  );
}

export default StickyTest;
