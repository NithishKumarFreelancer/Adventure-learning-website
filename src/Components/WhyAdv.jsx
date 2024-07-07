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
    <div className="whyadv flex  justify-center py-0.5">
      <div className="whyadv_wrapper max-[768px]:px-6 py-10 max-w-screen-xl ">
        <WhyAdvButton text={"WHY ADVENTURE?"} />
        <div className="whyadv_grid    max-[768px]:grid-cols-1  max-[768px]:gap-10">
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