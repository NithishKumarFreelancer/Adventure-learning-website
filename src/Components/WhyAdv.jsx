import React from "react";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";

function WhyAdv() {
  const why_Adv_data = [
    {
      image_link: "/WhyAdv1.svg",
      title: "Expert Trainers",
      discription: "Gain valuable insights from experienced",
      link: "IT professionals.",
    },
    {
      image_link: "/WhyAdv2.svg",
      title: "Hands-On Training",
      discription: "Focused on practical applications from experienced",
      link: "IT experts.",
    },
    {
      image_link: "/WhyAdv3.svg",
      title: "Affordable Fees",
      discription: "Quality at competitive rates, affordability ensured.",
      link: "education",
    },
    {
      image_link: "/WhyAdv4.svg",
      title: "Industry Level Syllabus",
      discription: "Updated industry syllabus for learners to acquire the skills needed for their field.",
      link: "paired with",
    },
    {
      image_link: "/WhyAdv5.svg",
      title: "Placement Support",
      discription: "100% assured placement assistance with resume preparation and soft skill Training.",
      link: "combined with",
    },
    {
      image_link: "/WhyAdv6.svg",
      title: "Flexible Schedules",
      discription: "A flexible schedule allows a student to attend the classes with variable timing pattern.",
      link: "designed to",
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
                    {/* <span className="text-enroll_users text-sm font-medium text-textLink">
                      {d.link}
                    </span> */}
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