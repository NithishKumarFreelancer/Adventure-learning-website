import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Confetti from "react-confetti";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";
function ContactForm() {
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
                subject: data.subject, // New subject field
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
    <div className="relative bg-whyadvBG p-4 tb:p-6 lg:p-10 rounded-lg">
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
      <div className="flex flex-col items-center gap-8 mb-10 sm:gap-4">
        <WhyAdvButton text={"Get in touch"} />
        <p className="font-semibold text-enroll_users text-3xl sm:text-2xl text-center max-w-[430px]">
          Start Learning Journey Contact us, happy learning!
        </p>
        <p className="text-learnsmarter_text_p text-sm sm:text-sm">
          If you need help or have a question, we’re here for you
        </p>
      </div>
      <div className="p-4 tb:p-6 lg:p-8 bg-white rounded-lg shadow-lg max-w-[700px] mx-auto mb-3 sm:mb-5">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-enroll_users"
            >
              Name<span className="ml-1">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users text-sm"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-enroll_users"
            >
              Email<span className="ml-1">*</span>
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
              className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users text-sm"
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
              className="text-sm font-semibold text-enroll_users"
            >
              Phone Number<span className="ml-1">*</span>
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
              className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users text-sm"
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
              className="text-sm font-semibold text-enroll_users"
            >
              Interested In<span className="ml-1">*</span>
            </label>
            <select
              id="interest"
              {...register("interest", {
                required: "Please select an interest",
              })}
              className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users text-sm"
            >
              <option value="">Select an option</option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
              <option value="Feedback">Feedback</option>
            </select>
            {errors.interest && (
              <p className="text-red-500 text-xs mt-2">
                {errors.interest.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-sm font-semibold text-enroll_users"
            >
              Subject<span className="ml-1">*</span>
            </label>
            <textarea
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-enroll_users text-sm"
              placeholder="Message"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-2">
                {errors.subject.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 px-4 py-2 bg-enroll_users text-white rounded-md hover:bg-enroll_users_hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-enroll_users_disabled text-sm"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;