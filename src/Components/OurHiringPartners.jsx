import React from "react";
import "./ourhiringpartner.css";

function OurHiringPartners() {
  const OurClients = [
    { src: "hiring_partners/client1.jpeg" },
    { src: "hiring_partners/client2.svg" },
    { src: "hiring_partners/client3.png" },
    { src: "hiring_partners/client4.jpg" },
    { src: "hiring_partners/client5.png" },
    { src: "hiring_partners/client6.png" },
    { src: "hiring_partners/client7.png" },
    { src: "hiring_partners/client8.png" },
    { src: "hiring_partners/client9.png" },
    { src: "hiring_partners/client10.png" },
    { src: "hiring_partners/client11.png" },
    { src: "hiring_partners/client12.png" },
    { src: "hiring_partners/client13.png" },
    { src: "hiring_partners/client14.png" },
    { src: "hiring_partners/client15.jpg" },
    { src: "hiring_partners/client16.jpeg" },
    { src: "hiring_partners/client17.png" },
    { src: "hiring_partners/client18.jpg" },
    { src: "hiring_partners/client19.png" },
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
              <img src={client.src} alt={`Client ${index + 1}`} className="h-12" />
            </div>
          ))}
          {OurClients.map((client, index) => (
            <div className="flex justify-center min-w-[120px] mx-2" key={index + OurClients.length}>
              <img src={client.src} alt={`Client ${index + 1}`}  className="h-14" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurHiringPartners;
