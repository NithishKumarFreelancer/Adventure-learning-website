import React, { useState } from "react";

function FrequentlyAskedQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Who is this course for?",
      answer: "This course is for anyone looking to improve their skills in the subject matter, whether you're a beginner or looking to advance your knowledge."
    },
    {
      question: "What prerequisites are needed?",
      answer: "No prerequisites are needed. Just bring your enthusiasm to learn!"
    },
    {
      question: "How long does the course last?",
      answer: "The course lasts for 6 weeks, with a total of 12 hours of content."
    },
    {
      question: "Is there a certification after completion?",
      answer: "Yes, a certificate will be awarded upon successful completion of the course."
    }
  ];

  return (
    <div className="flex flex-col items-center mt-8 lg:mt-16 sm:px-6">
      <h className="font-bold text-2xl sm:text-3xl sm:text-center sm:font-bold lg:text-3xl bg-gradient-freq bg-clip-text text-transparent">
        Frequently Asked Questions
      </h>
      <div className="my-4  px-4 sm:px-2 tb:px-4 lp:px-6 lg:px-8">
        {questions.map((item, index) => (
          <div key={index} className="my-4 sm:my-2 tb:my-3 lp:my-4">
            <div
              className={`card flex flex-col p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                openIndex === index ? "border-2 border-[#9BBAE4]" : "border border-[#B2C1D6]"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-[#153BA0] sm:w-64 text-[16px] tb:text-[18px] font-bold">{item.question}</p>
                <div className="bg-[#4D69B3] rounded-full w-10 h-10 tb:w-12 tb:h-12 flex items-center justify-center">
                  <img src="courseInfo/ArrowDown.svg" alt="" />
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ overflow: "hidden" }}
              >
                <p className="pt-2 w-full tb:w-[600px] lp:w-[700px] lg:w-[700px] font-normal text-[12px] tb:text-[14px] text-[#5D7286]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQ;