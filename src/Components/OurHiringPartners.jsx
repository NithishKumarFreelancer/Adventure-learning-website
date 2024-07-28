import React from "react";

function OurHiringPartners() {
  const OurClients = [
    {
      src: "client1.svg",
    },
    {
      src: "client2.svg",
    },
    { src: "client3.svg" },
    { src: "client4.svg" },
    { src: "client5.svg" },
    { src: "client6.svg" },
    { src: "client7.svg" },
    { src: "client8.svg" },
  ];
  return (
    <div className="bg-[#F8F8F8]">
      <div className="container lp:max-w-full tb:max-w-full lp:px-10 flex flex-col mx-auto sm:max-w-full sm:px-0">
        <div className="w-100 flex flex-col items-center gap-5 flex-1 p-4 sm:gap-5 tb:w-full tb:h-fit tb:gap-10">
          <h1 className="text-enroll_users font-semibold text-4xl tb:text-center sm:text-center sm:text-3xl">
            Our Hiring Partners
          </h1>
          <p className="text-learnsmarter_text_p text-center font-medium text-sm w-[360px]">
            Top Placement Support and Training Institute in Chennai Our
            Recruitment Partners
          </p>
        </div>
        <div className="autoscroll flex gap-10 overflow-x-auto no-scrollbar pb-4">
          <div className="grid grid-cols-8 lp:grid-cols-8 sm:grid-cols-3 gap-4 tb:grid-cols-4 w-full items-center">
            {OurClients.map((d) => (
              <div className="flex justify-center">
                <img src={d.src} alt="Client 1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurHiringPartners;
