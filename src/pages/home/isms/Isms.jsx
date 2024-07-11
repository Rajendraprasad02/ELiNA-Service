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

import HowItWorksImg from "../../../images/HowItWorks.png";

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
