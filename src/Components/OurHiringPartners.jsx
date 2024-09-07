import React from "react";
import "./ourhiringpartner.css";

function OurHiringPartners() {
  const OurClients = [
    { src: "client1.svg" },
    { src: "client2.svg" },
    { src: "client3.svg" },
    { src: "client4.svg" },
    { src: "client5.svg" },
    { src: "client6.svg" },
    { src: "client7.svg" },
    { src: "client8.svg" },
    { src: "client8.svg" },
    { src: "client8.svg" },
    { src: "client8.svg" },
    { src: "client8.svg" },
    { src: "client8.svg" },
  ];

  return (
    <div className="bg-[#F8F8F8] py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-enroll_users font-semibold text-4xl sm:text-3xl sm:text-nowrap text-center">
          Our Hiring Partners
        </h1>
        <p className="text-learnsmarter_text_p text-center font-medium text-sm w-[360px] mt-4">
          Top Placement Support and Training Institute in Chennai Our
          Recruitment Partners
        </p>
      </div>
      <div className="scrolling-text-container mt-8">
        <div className="scrolling-text flex gap-16">
          {OurClients.map((client, index) => (
            <div className="flex justify-center min-w-[120px] mx-2" key={index}>
              <img src={client.src} alt={`Client ${index + 1}`} />
            </div>
          ))}
          {OurClients.map((client, index) => (
            <div className="flex justify-center min-w-[120px] mx-2" key={index + OurClients.length}>
              <img src={client.src} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurHiringPartners;
