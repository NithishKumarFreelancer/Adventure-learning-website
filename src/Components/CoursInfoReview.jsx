import React from "react";
import "../Styles/CoursInfoReview.css"
function CoursInfoReview() {
  const reviews = [
    {
      review:
        "Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best course I could take. Vako touched upon everything.",
      name: "Osheen Tripathi",
      role: "Management Associate, Bangalore",
    },
    {
      review:
      "Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best course I could take. Vako touched upon everything.",
      name: "Rahul Verma",
      role: "Product Manager, Delhi",
    },
    {
      review:
      "Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best course I could take. Vako touched upon everything.",
      name: "Anjali Sharma",
      role: "Software Developer, Mumbai",
    },
    {
      review:
      "Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best course I could take. Vako touched upon everything.",
      name: "John Doe",
      role: "Data Analyst, Chennai",
    },
    {
      review:
      "Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best course I could take. Vako touched upon everything.",
      name: "Jane Smith",
      role: "UX Designer, Hyderabad",
    },
  ];

  return (
    <div className="flex lp:max-w-[70%] flex-col items-center mt-10 sm:px-6">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#5F73AB] to-[#153BA0] bg-clip-text text-transparent sm:text-center">
          You may not believe us, but you can believe them
        </h1>
        <p className="text-[#5D7286] text-[18px] sm:text-center">
          Experiences shared by people who previously attended this course
        </p>
      </div>

      {/* Infinite Carousel Container */}
      <div className="carousel-container overflow-hidden w-full max-w-[1000px] sm:max-w-[400px] mt-5 sm:mt-0 py-8 ">
        {/* Moving items */}
        <div className="carousel-track flex gap-4 animate-scroll">
          {/* Repeat reviews twice for seamless scrolling */}
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={index}
              className="bg-[#143AA0] p-8 rounded-2xl flex flex-col justify-between gap-5 min-w-[440px] max-w-[365px] flex-shrink-0"
            >
              <p className="text-white text-[16px] ">{review.review}</p>
              <div className="flex gap-2 items-center">
                <img src="courseInfo/Oval.svg" alt="Profile" />
                <div className="flex flex-col">
                  <p className="text-white">{review.name}</p>
                  <p className="text-[#D0D8EC] text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursInfoReview;
