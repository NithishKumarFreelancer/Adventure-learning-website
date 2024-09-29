import React, { useState } from "react";
import { useForm } from "react-hook-form";

function StickyForm() {
  const [learningMode, setLearningMode] = useState("Offline");
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
      await fetch(
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
      setTimeout(() => setShowConfetti(false), 4000);
      reset();
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex sm:hidden flex-col md:flex-row">
      {/* Sticky element */}
      <div className="fixed right-1 top-[58px] z-10 min-w-[400px]">
        <div className="bg-white border p-4 flex flex-col gap-2 shadow-md rounded-md">
          <h1 className="text-xl font-semibold">
            Start Your Adventure: Enroll Now!
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full"
          >
            {["name", "email", "phone"].map((field) => (
              <div className="flex flex-col" key={field}>
                <label
                  htmlFor={field}
                  className="text-sm font-semibold  text-[#143AA0]"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  type={field === "email" ? "email" : "tel"}
                  {...register(field, {
                    required: `${
                      field.charAt(0).toUpperCase() + field.slice(1)
                    } is required`,
                    pattern:
                      field === "phone"
                        ? {
                            value: /^[0-9]{10}$/,
                            message:
                              "Please enter a valid 10-digit phone number",
                          }
                        : undefined,
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
              <label
                htmlFor="interest"
                className="text-sm font-semibold text-[#143AA0]"
              >
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
                {[
                  "Full Stack Development",
                  "Embedded System",
                  "Java",
                  "Python",
                  "Software Testing",
                  "Data Science",
                  "Data Analytics",
                  "AWS",
                  "DevOps",
                  "CCNA",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.interest && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.interest.message}
                </p>
              )}
            </div>
            <div className="flex items-center mt-2">
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
              className="mt-2 px-4 py-2 bg-enroll_users text-white rounded-md hover:bg-enroll_users/80 focus:outline-none focus:ring-2 focus:ring-enroll_users"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="bg-white border p-4 flex flex-col gap-3 mt-2 rounded-md">
          <p className="text-xl text-[#093097] font-extrabold">Brochures</p>
          <p className="max-w-[400px] text-sm text-[#5D7286]">
            Start your career with confidence and our 100% placement support.
            Click here to see how we can help you succeed and unlock your full
            potential.
          </p>
          <div className="bg-[#143AA0] w-fit ml-auto mr-auto flex p-3 gap-4 rounded-md">
            <p className="text-white text-[17px] font-semibold">Download Now</p>
            <img src="/courseInfo/download.svg" alt="Download" />
          </div>
        </div>
      </div>
      {/* Increased height for scrolling effect */}
    </div>
  );
}

export default StickyForm;
