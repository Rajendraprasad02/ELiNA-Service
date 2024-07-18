import React from "react";
import IsmsHeroPage from "../../../components/Isms/IsmsHeroPage";
import Hero from "../../../components/home/Hero";
import NavBar from "../../../components/NavBar";
import WhoCanUse from "../../../components/Isms/WhoCanUse";
import Carousel from "../../../components/Isms/Carousel";
import HowItWorks from "../../../components/Isms/HowItWorks";
import WhatsNext from "../../../components/Isms/WhatsNext";
import Footer from "../../../components/Footer";
import pic from "../../../images/IsmsTherapist.jpg";
import pic2 from "../../../images/TherapistIsms.jpg";
import pic3 from "../../../images/IsmsSchools.jpg";
import pic4 from "../../../images/IsmsParents.jpg";
import pic5 from "../../../images/IsmsRehabit.jpg";
import support from "../../../images/friendship.png";
import mission from "../../../images/target.png";
import test from "../../../images/exam.png";
import workfromhome from "../../../images/work-from-home.png";
import comfort from "../../../images/working-woman.png";
import access from "../../../images/easy-access.png";

import activity from "../../../images/isms/activity.jpg";
import calender from "../../../images/isms/calender.png";
import manage from "../../../images/isms/manage.jpg";

const CarouselContent = [
  {
    icon: "",
    h1: "The pain areas true... Home Reinforcement is actually a major concern in the whole learning process.",
    p: "MCHP (Manipal University)",
  },
  {
    icon: "",
    h1: "It is helping us to complete the activities in a stepwise manner and through checklist able to communicate progress as well as feedback to go about in activities.",
    p: "Parent of a 6 year old Kid with Autism.",
  },
  {
    icon: "",
    h1: "App is very good. It is definitely a useful and quick learning guide for kids which we can use at any point in time when we don't have study books. Anywhere we can operate and kids will enjoy the learning.",
    p: "Parent of a 6 year old Kid with Autism.",
  },
];

const HowItWorksContent = [
  {
    video: manage,
    h1: "Child Profile Dashboard",
    li: [
      "Child Information",
      "Contact Information",
      "Educational Information",
      "Intervention Plans",
      "Progress Tracking",
      "Therapy & Support",
      "Additional Documents",
    ],
    ImgDirection: "left",
  },
  {
    video: calender,
    h1: "Integrated Child Support Management System (ICSMS): Enhancing Coordination and Care",
    li: [
      "Therapist Allocation ",
      "Role-Based Permissions",
      "Integrated Therapy Team",
      "School Integration",
      "Security and Compliance",
      "User-Friendly Interface",
    ],
  },
  {
    video: activity,
    h1: "Therapy Session Management",
    li: [
      "Individualized Session Planning",
      "Recurring Session Scheduling",
      "TeleTherapy Integration",
      "Comprehensive Schedule Tracking",
      "Reporting and Presentation Coordination",
    ],
    ImgDirection: "left",
  },
  {
    video: activity,
    h1: "Integrated Child Activity Management and Parent Engagement System",
    li: [
      "Structured Activities for Home",
      "Feedback and Communication Hub",
      "Specialist Collaboration and Updates",
      "Activities Management within ISMS",
      "Tailored Activity Selection",
      "Centralized Activity Repository",
      "Organization-Wide Activity Catalog",
      "Custom Questionnaire Creation",
      "Integrated Assessment Approach",
    ],
  },

  {
    video: activity,
    h1: "Integrated Tracking and Coordination System for All Stakeholders ",
    li: [
      "      Event Tracking Across the Organization",
      "Trend Analysis",
      "Easy Scheduling and Assessment Procedures",
      "Tailored Program Preparation",
    ],
    ImgDirection: "left",
  },
];

const KeyContent = [
  {
    icon: workfromhome,
    p: (
      <span>
        <span className="font-bold lg:text-xl text-pink-500">
          Remote Collaboration:{" "}
        </span>
        Teams can collaborate remotely to overcome distance.
      </span>
    ),
  },
  {
    icon: comfort,

    p: (
      <span>
        <span className="font-bold lg:text-xl text-pink-500">Convenient: </span>
        Superior Home-Based Evaluation for Optimal Child Development.
      </span>
    ),
  },
  {
    icon: support,
    p: (
      <span>
        <span className="font-bold lg:text-xl text-pink-500">
          Personalized Support:{" "}
        </span>
        Personalized Evaluation support that is tailored.
      </span>
    ),
  },
];

const KeyContent2 = [
  {
    icon: mission,
    p: (
      <span>
        <span className="font-bold lg:text-xl text-pink-500">Measurable: </span>
        Weekly Goal Tracking with Timely Progress Reports.
      </span>
    ),
  },
  {
    icon: access,
    p: (
      <span>
        <span className="font-bold lg:text-xl text-pink-500">Accessible: </span>
        Accessible Device-Ready Assessment Tool.
      </span>
    ),
  },
  {
    icon: test,
    p: (
      <span>
        <span className="font-bold lg:text-xl text-pink-500">Resources: </span>
        Assessment Resource with Learner Companion for Enhanced Skill
        Evaluation.
      </span>
    ),
  },
];

const WhoCanUseContent = [
  {
    WhoCanUseImg: pic4,
    p: <span className="text-green-500"> Parents</span>,
  },
  {
    WhoCanUseImg: pic3,
    p: <span className="text-violet-600"> Schools</span>,
  },
  {
    WhoCanUseImg: pic,
    p: (
      <span>
        Therapy <span className="text-blue-700">Centers</span>
      </span>
    ),
  },

  {
    WhoCanUseImg: pic5,
    p: <span className="text-blue-600"> Rehabilitation</span>,
  },
  {
    WhoCanUseImg: pic2,
    p: (
      <span>
        Individual<span className="text-pink-700"> Therapist </span>
      </span>
    ),
  },
];

const Imis = () => {
  return (
    <>
      <NavBar />
      <IsmsHeroPage />
      <WhoCanUse
        KeyContent={KeyContent}
        KeyContent2={KeyContent2}
        WhoCanUseContent={WhoCanUseContent}
      />
      <Carousel CarouselContent={CarouselContent} />
      <HowItWorks HowItWorksContent={HowItWorksContent} />
      <WhatsNext />
      <Footer />
    </>
  );
};

export default Imis;
