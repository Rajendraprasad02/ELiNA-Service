import React from "react";
import HowItWorksImg from "../../images/HowItWorks.png";
const HowItWorksContent = [
  {
    video: HowItWorksImg,
    h1: "Manage Child Profile",
    li: [
      "Add Child history data, other details like conditions, therapy details",
      "Upload Medication Files, and Diagnosis Reports.",
      "Recording Therapy Notes",
      "Assign Multiple Caregivers to children.",
      "App-Based Access for Parent",
    ],
    ImgDirection: "left",
  },
  {
    video: HowItWorksImg,
    h1: "Calendar and Therapy Schedule",
    li: [
      "One-Time Session",
      "Create Repeating Therapy Sessions",
      "Integrate with Google Meet for TeleTherapy Session.",
    ],
  },
  {
    video: HowItWorksImg,
    h1: "Activities Library",
    li: [
      "Bring your own Activities and Assign them to children.",
      "Common Activities Repository across the organization.",
      "Explore the range of Activities provided by Kidaura.",
      "Ability to create a custom questionnaire for each activity.",
    ],
    ImgDirection: "left",
  },
  {
    video: HowItWorksImg,
    h1: "Analytics for Admin and Clinical Director",
    li: [
      "Keep track of events across the organization.",
      "View journal, session, and home reinforcement trends.",
    ],
  },
];

const HowItWorks = () => {
  return (
    <>
      <p className="animationHero  flex justify-center mt-28  text-5xl lg:text-6xl font-black text-indigo-600">
        How It Works?
      </p>
      {HowItWorksContent.map((item) => (
        <div
          className={`  lg:h-screen flex flex-col lg:flex-row ${
            item.ImgDirection === "left" ? "" : "lg:flex-row-reverse"
          } justify-center gap-[5%] items-center ${
            item.ImgDirection === "left" ? "HowItWorksPink" : "HowItWorksBlue"
          }`}
        >
          <div>
            <img
              className="animationHero mt-24 w-[350px] h-[250px] md:w-[573px] md:h-[326px]"
              src={item.video}
            />
          </div>
          <div className="animationHero p-10 lg:p-0">
            <h1 className="font-black text-xl md:text-3xl lg:text-4xl py-6">
              {item.h1}
            </h1>
            <ol className="list-decimal lg:pl-4">
              {item.li.map((items) => (
                <li className="font-medium text-base md:text-lg lg:text-xl">
                  {items}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </>
  );
};

export default HowItWorks;
