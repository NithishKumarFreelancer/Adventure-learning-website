import React from "react";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";

// Helper component to handle dynamic links in description
const DescriptionWithLink = ({ description, linkText, linkClass }) => {
  // Split description into parts where linkText appears
  const parts = description.split(linkText);
  if (parts.length > 1) {
    // If there is more than one part, insert the styled span in the middle
    return (
      <p className="font-medium text-sm text-center lg:w-[75%] mb-0 break-words">
        {parts[0]}
        <span className={linkClass}>{linkText}</span>
        {parts[1]}
      </p>
    );
  }
  // Return description as-is if no linkText is found
  return (
    <p className="font-medium text-sm text-center lg:w-[75%] mb-0 break-words">
      {description}
    </p>
  );
};

function WhyAdv() {
  const why_Adv_data = [
    {
      image_link: "/WhyAdv1.svg",
      title: "Expert Trainers",
      description: "Gain insights from IT professionals with real-world experience, offering practical knowledge and industry expertise.",
      linkText: "IT professionals",
      linkClass: "text-enroll_users text-sm font-medium",
    },
    {
      image_link: "/WhyAdv2.svg",
      title: "Hands-On Training",
      description: "Experience practical applications taught by IT experts, enhancing your skills with real-world scenarios and insights.",
      linkText: "IT experts",
      linkClass: "text-enroll_users text-sm font-medium",
    },
    {
      image_link: "/WhyAdv3.svg",
      title: "Affordable Fees",
      description: "Get high-quality education at competitive rates, ensuring value and affordability ensured without compromising on quality.",
      linkText: "affordability ensured",
      linkClass: "text-enroll_users text-sm font-medium",
    },
    {
      image_link: "/WhyAdv4.svg",
      title: "Industry Level Syllabus",
      description: "Learn from an updated syllabus that reflects current industry trends, equipping you with relevant skills for your field.",
      linkText: "paired with",
      linkClass: "text-enroll_users text-sm font-medium",
    },
    {
      image_link: "/WhyAdv5.svg",
      title: "Placement Support",
      description: "Receive 100% placement assistance with resume help and soft skill training, combined with expert career guidance.",
      linkText: "combined with",
      linkClass: "text-enroll_users text-sm font-medium",
    },
    {
      image_link: "/WhyAdv6.svg",
      title: "Flexible Schedules",
      description: "Attend classes with flexible scheduling, designed to accommodate your needs and fit your personal timing preferences.",
      linkText: "designed to",
      linkClass: "text-enroll_users text-sm font-medium",
    },
  ];

  return (
    <div className="bg-whyadvBG py-10 ">
      <div className=" mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-5 gap-10">
          <WhyAdvButton text={"WHY ADVENTURE?"} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lp:grid-cols-3">
            {why_Adv_data.map((d, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center h-full gap-5 rounded-lg bg-white py-8 px-6 shadow-lg`}
              >
                <img className="w-16 h-16 mb-4" src={d.image_link} alt={d.title} />
                <div className="flex flex-col items-center">
                  <h3 className="text-custom-purple text-lg font-semibold mb-2">
                    {d.title}
                  </h3>
                  <DescriptionWithLink
                    description={d.description}
                    linkText={d.linkText}
                    linkClass={d.linkClass}
                  />
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