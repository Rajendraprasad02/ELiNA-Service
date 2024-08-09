import React from "react";
import card1 from "../../images/professional/1.jpg";
import card2 from "../../images/professional/2.jpg";
import card3 from "../../images/professional/3.jpg";
import card4 from "../../images/professional/4.jpg";
import TR from "../../images/professional/cardImg/TargetedReferrals.png";
import SR from "../../images/professional/cardImg/SpecializedReferrals.png";
import IP from "../../images/professional/cardImg/IntegratedPerspective2.png";
import CS from "../../images/professional/cardImg/CollaborativeSuccess.png";
import EV from "../../images/professional/cardImg/EnhancedVisibility.png";
import CT from "../../images/professional/cardImg/CommunicationandTracking.png";
import hos from "../../images/professional/cardImg/holistic.png";
import SC from "../../images/professional/cardImg/seemlesscommunication.png";
import card5 from "../../images/professional/5.jpg";
import card6 from "../../images/professional/6.jpg";
import card7 from "../../images/professional/7.jpg";
import card8 from "../../images/professional/8.jpg";
import card9 from "../../images/professional/9.jpg";
import card10 from "../../images/professional/10.jpg";
import card11 from "../../images/professional/11.jpg";
import card12 from "../../images/professional/12.jpg";

const weHelpKidContent = [
  {
    h1: "Targeted Referrals: Connecting with the Right Children",
    decs: (
      <span>
        <span className="text-pink-600 font-bold">Specialized Referrals:</span>{" "}
        Elina connects professionals with referrals for children with ADHD,
        Autism, and Learning Disabilities who can benefit from your expertise.
        Our system ensures children receive the specialized care they need from
        the most suitable professionals.
      </span>
    ),
    src: TR,
  },
  {
    h1: "Holistic View: Comprehensive Understanding of the Child's Environment",
    decs: (
      <span>
        <span className="text-pink-600 font-bold">Integrated Perspective:</span>{" "}
        Gain a holistic view of the child's needs across all environments,
        including home, school, and therapy settings. This comprehensive
        understanding enables more targeted and effective interventions,
        ensuring that every aspect of the child's development is addressed.
      </span>
    ),
    src: hos,
  },
  {
    h1: "Effective Intervention: Converging Efforts for Maximum Impact",
    decs: (
      <span>
        <span className="text-pink-600 font-bold">Collaborative Success:</span>{" "}
        Deliver effective interventions through a coordinated approach. Our
        program integrates the expertise of various professionals, ensuring a
        cohesive strategy that maximizes the impact of your work.
      </span>
    ),
    src: card7,
  },
  {
    h1: "Technology-Based Enhancement: Utilizing the ISMS Tool",
    decs: (
      <span>
        <span className="text-pink-600 font-bold">
          Flexibility and Accessibility:
        </span>
        The ISMS tool allows for flexible collaboration, accommodating
        professionals and children receiving support from varied locations. This
        flexibility ensures that geographic limitations do not hinder the
        quality of care or the effectiveness of interventions.
      </span>
    ),
    src: IP,
  },
  {
    h1: "Technology-Based Enhancement: Utilizing the ISMS Tool",
    decs: (
      <span className="text-left">
        <span>
          <span className="text-pink-600 font-bold">Unified Program Plan:</span>{" "}
          Access the unified program plan created by Elina through our ISMS
          tool, which offers clear and specific details on focus areas, goals,
          and strategies. This technology-based enhancement facilitates seamless
          communication and coordination, ensuring that all professionals are
          aligned and working towards common objectives.
        </span>
        <br></br>
      </span>
    ),
    src: CS,
  },
  {
    h1: "Enhanced Visibility: Understanding the Broader Scope of Care",
    decs: (
      <span>
        <span className="text-pink-600 font-bold">
          Interdisciplinary Insights:
        </span>{" "}
        Elina provides visibility into the broader scope of care through
        collaboration with doctors, therapists, and educators. This
        interdisciplinary approach enriches your understanding of the child's
        overall needs and the strategies being implemented.
      </span>
    ),
    src: EV,
  },
  // {
  //   h1: "Interdisciplinary Insights",
  //   decs: "Elina provides visibility into the broader scope of care through collaboration with other professionals, including doctors, therapists, and educators. This interdisciplinary approach enriches your understanding of the child's overall needs and the strategies being implemented. Technology-Based Enhancement: Utilizing the ISMS Tool",
  //   src: card12,
  // },
  // {
  //   h1: "Flexibility and Accessibility",
  //   decs: "The ISMS tool allows for flexible collaboration, accommodating professionals and children from varied locations. This flexibility ensures geographic limitations do not hinder the quality of care or interventions.",
  //   src: card11,
  // },
  // {
  //   h1: "Unified Program Plan",
  //   decs: "Access the unified program plan created by Elina through our ISMS tool, which offers clear and specific details on focus areas, goals, and strategies. This technology-based enhancement facilitates seamless communication and coordination, ensuring that all professionals are aligned and working towards common objectives.",
  //   src: card8,
  // },
  {
    h1: "Communication and Tracking: Ongoing Support and Monitoring",
    decs: (
      <span>
        <span className="text-pink-600 font-bold">Seamless Communication:</span>{" "}
        Benefit from structured communication channels via our ISMS tool,
        enabling ongoing dialogue between all stakeholders. Regular updates,
        progress tracking, and shared insights allow for real-time adjustments
        to support strategies based on the child's evolving needs.
      </span>
    ),
    src: CT,
  },
  // {
  //   h1: "Seamless Communication",
  //   decs: "Benefit from structured communication channels facilitated by our ISMS tool, which enables ongoing dialogue between all stakeholders. This includes regular updates, progress tracking, and shared insights, allowing for real-time adjustments to support strategies based on the child's evolving needs.",
  //   src: SC,
  // },
];

const WeHelpKids = () => {
  return (
    <>
      <div className="HeroBg">
        <div className="flex flex-col items-center lg:py-16  ">
          <h1 className="text-center text-3xl lg:text-5xl font-bold text-blue-700 w-full lg:w-1/2 p-10">
            Benefits of Collaborating with Elina
          </h1>
          <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-16 px:[5%] lg:px-[10%]">
            {weHelpKidContent.map((item) => (
              <div className="flex flex-col items-center drop-shadow-xl rounded-3xl bg-white w-fit">
                <img
                  className="w-[400px] h-[250px] rounded-3xl"
                  src={item.src}
                  alt=""
                ></img>
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
