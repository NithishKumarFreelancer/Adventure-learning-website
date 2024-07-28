import React from "react";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";

function WhyAdv() {
  const why_Adv_data = [
    {
      image_link: "why_Adv_icon.svg",
      title: "25 unique pages",
      discription: "Pre built static layouts & CMS powered templates.",
      link: "view all pages",
    },
    {
      image_link: "why_Adv_icon.svg",
      title: "25 unique pages",
      discription: "Pre built static layouts & CMS powered templates.",
      link: "view all pages",
    },
    {
      image_link: "why_Adv_icon.svg",
      title: "25 unique pages",
      discription: "Pre built static layouts & CMS powered templates.",
      link: "view all pages",
    },
    {
      image_link: "why_Adv_icon.svg",
      title: "25 unique pages",
      discription: "Pre built static layouts & CMS powered templates.",
      link: "view all pages",
    },
    {
      image_link: "why_Adv_icon.svg",
      title: "25 unique pages",
      discription: "Pre built static layouts & CMS powered templates.",
      link: "view all pages",
    },
    {
      image_link: "why_Adv_icon.svg",
      title: "25 unique pages",
      discription: "Pre built static layouts & CMS powered templates.",
      link: "view all pages",
    },
  ];
  return (
    <div className="bg-whyadvBG">
      <div className="container  lp:max-w-full   tb:max-w-full lp:px-10  flex mx-auto sm:max-w-full sm:px-0">
        <div className="flex justify-between sm:items-center  items-start py-5 gap-10 flex-col flex-1 p-4">
          <WhyAdvButton text={"WHY ADVENTURE?"} />
          <div className="grid gap-20 sm:grid-cols-1 sm:gap-4 lg:grid-cols-3  tb:grid-cols-2  justify-items-stretch  lp:grid-cols-3">
            {why_Adv_data.map((d) => (
              <div className="flex flex-col items-center justify-center h-fit gap-5 rounded-lg bg-white py-8 px-0 ">
                <img className="why_Adv_icon" src={d.image_link} alt="" />
                <div className="flex items-center justify-center gap-2 flex-col">
                  <h className="text-custom-purple text-lg font-semibold">
                    {d.title}
                  </h>
                  <p className="font-normal text-sm text-center w-3/4 mb-0">
                    {d.discription}{" "}
                    <span className="text-enroll_users text-sm font-medium text-textLink">
                      {d.link}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyAdv;
