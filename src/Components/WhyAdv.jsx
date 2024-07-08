import React from "react";
import "../Styles/WhyAdv.css";
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
    <div className="whyadv flex   justify-center py-10  container sm:max-w-full tb:max-w-full lp:max-w-full lg:max-w-full mx-auto">
      <div className="whyadv_wrapper flex gap-10 flex-col ">
        <WhyAdvButton text={"WHY ADVENTURE?"} />
        <div className="whyadv_grid    sm:grid-cols-1   tb:grid-cols-1  lp:grid-cols-2 ">
          {why_Adv_data.map((d) => (
            <div className="whyadv_grid_child">
              <img className="why_Adv_icon" src={d.image_link} alt="" />
              <div className="why_Adv_child_info">
                <h className="text-custom-purple">{d.title}</h>
                <p>
                  {d.discription} <span>{d.link}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyAdv;