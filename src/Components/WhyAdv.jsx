import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/WhyAdv.css";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";
function WhyAdv() {
  const why_Adv_data = [
    {
      image_link : "why_Adv_icon.svg",
      title:"25 unique pages",
      discription:"Pre built static layouts & CMS powered templates.",
      link :"view all pages"
    },
    {
      image_link : "why_Adv_icon.svg",
      title:"25 unique pages",
      discription:"Pre built static layouts & CMS powered templates.",
      link :"view all pages"
    },
    {
      image_link : "why_Adv_icon.svg",
      title:"25 unique pages",
      discription:"Pre built static layouts & CMS powered templates.",
      link :"view all pages"
    },
    {
      image_link : "why_Adv_icon.svg",
      title:"25 unique pages",
      discription:"Pre built static layouts & CMS powered templates.",
      link :"view all pages"
    },
    {
      image_link : "why_Adv_icon.svg",
      title:"25 unique pages",
      discription:"Pre built static layouts & CMS powered templates.",
      link :"view all pages"
    },
    {
      image_link : "why_Adv_icon.svg",
      title:"25 unique pages",
      discription:"Pre built static layouts & CMS powered templates.",
      link :"view all pages"
    }
  ]
  return (
    <div className="whyadv container">
      <div className="whyadv_wrapper container">
        <WhyAdvButton />
        <div className="whyadv_grid">
          {
            why_Adv_data.map(d => (
              <div className="whyadv_grid_child">
              <img className="why_Adv_icon" src={d.image_link} alt="" />
              <div className="why_Adv_child_info">
                <h>{d.title}</h>
                <p>{d.discription} <span>{d.link}</span></p>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default WhyAdv;
