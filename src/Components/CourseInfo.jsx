import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Confetti from "react-confetti";

function CourseInfo() {
  const [learningMode, setLearningMode] = useState("Offline");
  const [showConfetti, setShowConfetti] = useState(false);
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
    <div className="relative container lp:max-w-[1000px] mx-auto">
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
      <div className="relative flex  gap-5">
        <div>
          <div className="flex  justify-between">
            <div className="flex flex-col gap-4">
              {["yt", "goal", "placement", "feedback"].map((icon) => (
                <div
                  key={icon}
                  className="bg-[#143AA0] rounded-sm flex w-[330px] p-3 gap-3"
                >
                  <img src={`/courseInfo/${icon}.svg`} alt="" />
                  <p className="text-white text-sm">
                    Get comprehensive training in 4 months
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <img
                src="/courseInfo/banner.jpg"
                className="w-[524px] rounded-sm"
                alt="Banner"
              />
              <p className="text-[#8C8080] font-medium text-sm max-w-[400px] text-center">
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
          </div>
          <div className="flex flex-col gap-10 items-center mt-10">
            <p class="bg-gradient-text bg-clip-text text-transparent font-bold text-3xl">
              Mastery Awaits: What You'll Conquer in This Course
            </p>
            <div className="flex flex-wrap gap-10 items-start justify-center">
              {/* Card 1 */}
              <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
                <p className="text-[#143AA0] text-[18px] font-bold">Module 1</p>
                <p className="text-[#3F5387] text-[18px] font-bold">
                  Frontend development
                </p>
                <div className="pl-7 flex flex-col gap-6">
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li className="text-[#5D7286]">Core Technologies</li>
                    <li className="text-[#5D7286]">Frameworks and Libraries</li>
                    <li className="text-[#5D7286]">Design Tools</li>
                    <li className="text-[#5D7286]">Practical Skills</li>
                  </ul>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
                <p className="text-[#143AA0] text-[18px] font-bold">Module 2</p>
                <p className="text-[#3F5387] text-[18px] font-bold">
                  Frontend development
                </p>
                <div className="pl-7 flex flex-col gap-6">
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li className="text-[#5D7286]">Core Technologies</li>
                    <li className="text-[#5D7286]">Frameworks and Libraries</li>
                    <li className="text-[#5D7286]">Design Tools</li>
                    <li className="text-[#5D7286]">Practical Skills</li>
                  </ul>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
                <p className="text-[#143AA0] text-[18px] font-bold">Module 3</p>
                <p className="text-[#3F5387] text-[18px] font-bold">
                  Frontend development
                </p>
                <div className="pl-7 flex flex-col gap-6">
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li className="text-[#5D7286]">Core Technologies</li>
                    <li className="text-[#5D7286]">Frameworks and Libraries</li>
                    <li className="text-[#5D7286]">Design Tools</li>
                    <li className="text-[#5D7286]">Practical Skills</li>
                  </ul>
                </div>
              </div>

              {/* Card 4 */}
              <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
                <p className="text-[#143AA0] text-[18px] font-bold">Module 4</p>
                <p className="text-[#3F5387] text-[18px] font-bold">
                  Frontend development
                </p>
                <div className="pl-7 flex flex-col gap-6">
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li className="text-[#5D7286]">Core Technologies</li>
                    <li className="text-[#5D7286]">Frameworks and Libraries</li>
                    <li className="text-[#5D7286]">Design Tools</li>
                    <li className="text-[#5D7286]">Practical Skills</li>
                  </ul>
                </div>
              </div>

              {/* Card 5 */}
              <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
                <p className="text-[#143AA0] text-[18px] font-bold">Module 5</p>
                <p className="text-[#3F5387] text-[18px] font-bold">
                  Frontend development
                </p>
                <div className="pl-7 flex flex-col gap-6">
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li className="text-[#5D7286]">Core Technologies</li>
                    <li className="text-[#5D7286]">Frameworks and Libraries</li>
                    <li className="text-[#5D7286]">Design Tools</li>
                    <li className="text-[#5D7286]">Practical Skills</li>
                  </ul>
                </div>
              </div>
            </div>
            <button
                className="text-white font-semibold w-2/4 p-3 rounded-md text-[18px]"
                style={{
                  background:
                    "linear-gradient(to right, #143AA0 0%, #143AA0 54%, #B3B4B7 100%)",
                }}
              >
                Buy Now for $600{" "}
                <span className="line-through text-[10px]">$9000</span>
              </button>
          </div>

          <div className="mt-10">
            <h className="text-[#143AA0] font-bold text-3xl">
              Let Your Certificates Speak
            </h>
            <div className="flex items-center mt-10">
              <div>
                <img src="/courseInfo/certificate.png" alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src="courseInfo/tick.svg" className="w-6" alt="" />
                  <p className="text-[#5D7286] text-sm">
                    ADV Learning Certificate in Full stack development
                  </p>
                </div>
                <div  className="flex items-center gap-3">
                  <img src="courseInfo/tick.svg" className="w-6" alt="" />
                  <p className="text-[#5D7286] text-sm">
                    Our globally recognized certificates enhance your
                    programming profile and elevate your career prospects.
                  </p>
                </div>
                <div  className="flex items-center gap-3">
                  <img src="courseInfo/tick.svg" className="w-6" alt="" />
                  <p className="text-[#5D7286] text-sm">
                    Certificates are generated after the completion of course.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Sticky element */}
          <div className="sticky top-10 z-10 min-w-[400px]">
            <div className="bg-white border p-4 flex flex-col gap-5 shadow-md rounded-md">
              <h1 className="text-xl font-semibold">
                Start Your Adventure: Enroll Now!
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 w-full"
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

            <div className="bg-white border p-4 flex flex-col gap-3 mt-4">
              <p className="text-xl text-[#093097] font-extrabold">Brochures</p>
              <p className="max-w-[400px] text-sm text-[#5D7286]">
                Start your career with confidence and our 100% placement
                support. Click here to see how we can help you succeed and
                unlock your full potential.
              </p>
              <div className="bg-[#143AA0] w-fit ml-auto mr-auto flex p-3 gap-4 rounded-md">
                <p className="text-white text-[17px] font-semibold">
                  Download Now
                </p>
                <img src="/courseInfo/download.svg" alt="Download" />
              </div>
            </div>
          </div>
          {/* Increased height for scrolling effect */}
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
