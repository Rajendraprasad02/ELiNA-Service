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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
      </svg>
    ),
    p: "Better and easier communication between parents and therapist",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
      </svg>
    ),
    p: "Keep Track of Children's Therapy Progress",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM300.9 397.9L256 368V304l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z" />
      </svg>
    ),
    p: "Easy and Quick Home Reinforcement of Therapy Activities",
  },
];

const KeyContent2 = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
      </svg>
    ),
    p: "Increase client engagement and reduce churn",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
      </svg>
    ),
    p: "Remain in sync with child's behavior outside center",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM300.9 397.9L256 368V304l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z" />
      </svg>
    ),
    p: "Proper Documentation of Child Therapy Journey",
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
    WhoCanUseImg: pic2,
    p: (
      <span>
        Individual<span className="text-pink-700"> Therapist </span>
      </span>
    ),
  },
  {
    WhoCanUseImg: pic5,
    p: <span className="text-blue-600"> Rehabilitation</span>,
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
