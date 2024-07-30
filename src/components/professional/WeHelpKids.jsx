import React from "react";
import card1 from "../../images/professional/card1.png";
import card2 from "../../images/professional/card2.png";
import card3 from "../../images/professional/card3.png";
import card4 from "../../images/professional/card4.png";

const weHelpKidContent = [
  {
    h1: "Targeted Referrals",
    decs: "Specialized Referrals: Elina connects professionals with referrals for children with ADHD, Autism, and Learning Disabilities who can benefit from your expertise. Our system ensures children receive the specialized care they need from the most suitable professionals.",
    src: card1,
  },
  {
    h1: "Specialized Referrals",
    decs: "Elina connects professionals with referrals for children with ADHD, Autism, and Learning Disabilities who can benefit from your specific expertise. Our referral system ensures that children receive the specialized care they need from the most suitable professionals.",
    src: card2,
  },
  {
    h1: "Integrated Perspective",
    decs: "Gain a holistic view of the child's needs across all environments, including home, school, and therapy settings. This comprehensive understanding enables more targeted and effective interventions, ensuring that every aspect of the child's development is addressed.",
    src: card3,
  },
  {
    h1: "Effective Intervention",
    decs: "Collaborative Success: Deliver effective interventions through a coordinated approach. Our program integrates the expertise of various professionals, ensuring a cohesive strategy that maximizes the impact of your work.",
    src: card4,
  },
  {
    h1: "Collaborative Success",
    decs: "Experience the satisfaction of delivering effective interventions through a coordinated approach. Our program integrates the expertise of various professionals, ensuring a cohesive strategy that maximizes the impact of your work.",
    src: card1,
  },
  {
    h1: "Enhanced Visibility",
    decs: "Interdisciplinary Insights: Elina provides visibility into the broader scope of care through collaboration with doctors, therapists, and educators. This interdisciplinary approach enriches your understanding of the child's overall needs and the strategies being implemented.",
    src: card2,
  },
  {
    h1: "Interdisciplinary Insights",
    decs: "Elina provides visibility into the broader scope of care through collaboration with other professionals, including doctors, therapists, and educators. This interdisciplinary approach enriches your understanding of the child's overall needs and the strategies being implemented. Technology-Based Enhancement: Utilizing the ISMS Tool",
    src: card3,
  },
  {
    h1: "Unified Program Plan",
    decs: "Access the unified program plan created by Elina through our ISMS tool, which offers clear and specific details on focus areas, goals, and strategies. This technology-based enhancement facilitates seamless communication and coordination, ensuring that all professionals are aligned and working towards common objectives.",
    src: card4,
  },
  {
    h1: "Flexibility and Accessibility",
    decs: "The ISMS tool allows for flexible collaboration, accommodating professionals and children from varied locations. This flexibility ensures geographic limitations do not hinder the quality of care or interventions.",
    src: card2,
  },
  {
    h1: "Communication and Tracking",
    decs: "Seamless Communication: Benefit from structured communication channels via our ISMS tool, enabling ongoing dialogue between all stakeholders. Regular updates, progress tracking, and shared insights allow for real-time adjustments to support strategies based on the child's evolving needs.",
    src: card3,
  },
  {
    h1: "Seamless Communication",
    decs: "Benefit from structured communication channels facilitated by our ISMS tool, which enables ongoing dialogue between all stakeholders. This includes regular updates, progress tracking, and shared insights, allowing for real-time adjustments to support strategies based on the child's evolving needs.",
    src: card4,
  },
];

const WeHelpKids = () => {
  return (
    <>
      <div className="HeroBg">
        <div className="flex flex-col items-center ">
          <h1 className="text-center text-3xl lg:text-5xl font-bold text-blue-700 w-full lg:w-1/2 p-10">
            Benefits of Collaborating with Elina
          </h1>
          <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-16 px:[5%] lg:px-[10%]">
            {weHelpKidContent.map((item) => (
              <div className="flex flex-col items-center drop-shadow-xl rounded-3xl bg-white w-fit">
                <img className="w-[400px] rounded-3xl" src={item.src}></img>
                <p className=" px-10 py-5 text-2xl text-gray-800 font-black text-center">
                  {item.h1}
                </p>
                <p className="lg:text-base p-5 text-center my-auto text-gray-600">
                  {item.decs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeHelpKids;
