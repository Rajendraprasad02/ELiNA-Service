import React from "react";
import PartnershipCarousel from "./PartnershipCarousel";

const partnerContent = [
  {
    h1: "Corporate partnerships",
    p: "Create positive social impact that lifts your brand, engages your employees, and boosts your customer loyalty. Together, we can create cause-marketing campaigns, design employee resource programs, and deliver one-of-a-kind events.",
  },
  {
    h1: "Institutional giving",
    p: "Fund priority projects that advance our research agenda and product development. Philanthropic investments help us innovate and scale for greater impact.",
  },
  {
    h1: "Public partnerships",
    p: "License our content, or let us create a custom program to meet your needs. We work with school districts, health agencies, local governments, and other nonprofits to mobilize resources, reach underserved communities, and equip professionals.",
  },
];

const PartnershipContent = () => {
  return (
    <>
      <div className="HeroBg2 py-20">
        <h1 className="text-center text-6xl font-bold text-blue-700">
          Ways to partner with us
        </h1>
        <div className="grid grid-cols-3 p-[8%] gap-10">
          {partnerContent.map((item) => (
            <div className="flex flex-col px-6 gap-5">
              <h1 className="text-3xl font-bold text-blue-900">{item.h1}</h1>
              <p className="text-lg text-pretty">{item.p}</p>
            </div>
          ))}
        </div>
        <PartnershipCarousel />
      </div>
    </>
  );
};

export default PartnershipContent;
