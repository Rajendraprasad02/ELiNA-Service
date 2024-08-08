import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import schedule from "../../../images/parent/compressed/scheduleAppoinment.jpg";
import meeting from "../../../images/parent/compressed/meeting.jpg";
import enroll from "../../../images/parent/compressed/enroll.jpg";
import sail from "../../../images/parent/compressed/sail.jpg";
import report from "../../../images/parent/compressed/report.jpg";
import interaction from "../../../images/parent/compressed/intraction.jpg";

import sailprocess from "../../../images/parent/compressed/sailprocess.jpg";

import depth from "../../../images/parent/compressed/reportsss.jpg";
import { ArrowDownIcon } from "@heroicons/react/outline";

const ParentContent = [
  {
    key: 1,
    h1: "Log in to ISMS",
    h2: "Begin your journey by logging into the Intervention Service Management System (ISMS). Ensure you complete the registration process and pay any necessary fees to activate your account. This initial step is crucial to accessing all subsequent stages and resources.",
    p: " Log in to ISMS and pay registration fees.",
    img: schedule,
  },
  {
    key: 2,
    h1: "Schedule Appointment",
    h2: "Once registered, schedule an appointment with our team. This meeting is designed to give an overview of our process and services. During this time, we will outline the steps and provide you with all the necessary information to get started.",
    p: "Schedule overview meetings with parents/guardians.",
    img: meeting,
  },
  {
    key: 3,
    h1: "Meet 1 - About the Child",
    h2: "This meeting focuses on understanding your child. You will have the opportunity to share detailed information about your child's strengths, areas that need support, and any observations or concerns you have. This helps us tailor our approach to your child's unique needs.",
    p: "Share about your child - their strengths, stretches, observations, and concerns.",
    img: enroll,
  },
  {
    key: 4,
    h1: "Meet 2 - About ELiNA",
    h2: "This session provides comprehensive information about ELiNA’s programs and how they can benefit your child. We will address any questions or clarifications you might have to ensure you are fully informed and comfortable with our services.",
    p: "Get detailed information about ELiNA programs and seek clarifications.",
    img: sail,
  },
  {
    key: 5,
    h1: "Enrolment Decision",
    h2: "Based on the information shared and discussed in previous meetings, you can make an informed decision about enrolling your child in our programs. This decision should be based on mutual understanding and agreement.",
    p: "Make an enrolment decision based on mutual understanding.",
    img: report,
  },
  {
    key: 6,
    h1: "SAIL Process",
    h2: "Once your child is enrolled, we will guide you through the SAIL (Support and Inclusion Learning) process. This includes specific steps and activities designed to support your child's development and integration.",
    p: "Follow the steps as guided by Team ELiNA.",
    img: sailprocess,
  },
  {
    key: 7,
    h1: "In-depth Interactions",
    h2: "Elina conducts in-depth interactions with the child and the family to better understand their needs. These interactions help refine our approach and ensure we provide the most effective support.",
    p: "Participate in in-depth interactions with the child and family.",
    img: interaction,
  },
  {
    key: 8,
    h1: "Reports",
    h2: "We provide comprehensive assessment reports that include recommendations and referrals if needed. These reports are designed to offer a clear picture of your child's progress and any additional support they might need.",
    p: "Review and utilize comprehensive assessment, recommendation, and referral reports.",
    img: depth,
  },
  {
    key: 9,
    h1: "Compass",
    h2: "Enroll in the CoMPASS program to track your child's development and progress over time. This tool provides ongoing support and updates to ensure your child continues to thrive.",
    p: "Enroll in CoMPASS to track child development and progress.",
    img: report,
  },
];

gsap.registerPlugin(ScrollTrigger);

// export default function Test() {
//   const component = useRef();
//   const slider = useRef();

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       let panels = gsap.utils.toArray(".panel");
//       console.log(panels.map((elem) => elem.offsetWidth));
//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: slider.current,
//           pin: true,
//           scrub: 1,
//           snap: 1 / (panels.length - 1),
//           end: () => "+=" + slider.current.offsetWidth,
//         },
//       });
//     }, component);
//     return () => ctx.revert();
//   });

//   const [currentStep, setCurrentStep] = useState("");

//   return (
//     <div className="" ref={component}>
//       <div className=""></div>
//       <div ref={slider} className="container w-[600vw] h-screen flex">
//         {ParentContent.map((item) => (
//           <>
//             <div
//               className={`min-w-[100vw] panel h-screen  ${
//                 item.key % 2 === 0 ? "getStartedBg1" : "getStartedBg2"
//               }`}
//             >
//               <div className="">
//                 <div className="  flex items-center justify-between p-10">
//                   {ParentContent.map((item, index) => (
//                     <div className="flex flex-col items-center">
//                       <div
//                         className={`
//                          bg-gray-100 text-center font-bold flex justify-center items-center rounded-full w-[30px] h-[30px]`}
//                       >
//                         {item.key}
//                       </div>
//                       <div className="font-black">{item.h1}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* <div className="absolute flex justify-start md:pt-10 md:ml-20">
//                 <p className="text-3xl   rounded-full p-6 font-bold underline">
//                   Step: {item.key}
//                 </p>
//               </div> */}
//               <div className="flex flex-col p-16 gap-20 items-center">
//                 <h1 className="text-center text-gray-900 text-2xl lg:text-4xl mx-auto bg-pink-300 p-3 md:px-10 md:py-2 rounded-2xl font-black">
//                   {item.h1}
//                 </h1>
//                 <div className="flex flex-col items-center lg:flex-row">
//                   <img
//                     className="rounded-2xl mx-auto w-[90%] lg:w-[35%] object-cover"
//                     src={item.img}
//                   />
//                   <div className="items-center">
//                     <p className="text-center my-auto rounded-2xl text-sm md:text-xl font-medium w-full md:w-[80%] mx-auto p-3">
//                       {item.h2}
//                     </p>
//                     <p className="text-center my-auto rounded-2xl text-sm md:text-xl font-medium w-full md:w-[80%] mx-auto p-3">
//                       {item.p}
//                     </p>
//                   </div>
//                 </div>
//                 {/* <p className="w-7 animate-bounce">
//                 <ArrowDownIcon />
//               </p> */}
//               </div>
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Test() {
  const component = useRef();
  const slider = useRef();
  const [currentStep, setCurrentStep] = useState(1);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          onUpdate: (self) => {
            // Calculate the current step
            const currentIndex = Math.round(
              self.progress * (panels.length - 1)
            );
            setCurrentStep(currentIndex + 1); // Set current step based on progress
          },
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div className="" ref={component}>
      <div ref={slider} className="container w-[600vw] h-fit flex">
        <div className="fixed top-0 w-[5%] md:w-screen md:h-fit h-screen bg-white z-50">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 pt-[2%]  text-center items-center justify-between p-0 lg:p-10">
            {ParentContent.map((item) => (
              <div
                key={item.key}
                className={`flex flex-col items-center ${
                  currentStep === item.key ? "text-blue-600" : ""
                }`}
              >
                <div
                  className={`bg-gray-100 text-center font-bold flex justify-center items-center rounded-full w-[30px] h-[30px] ${
                    currentStep === item.key ? "bg-blue-900 text-blue-900 " : ""
                  }`}
                >
                  {item.key}
                </div>
                <div
                  className={`font-black text-xs lg:text-sm ${
                    currentStep === item.key ? "text-blue-900 underline" : ""
                  }`}
                >
                  {item.h1}
                </div>
              </div>
            ))}
          </div>
        </div>
        {ParentContent.map((item) => (
          <div
            key={item.key}
            className={`min-w-[100vw] panel h-fit ${
              item.key % 2 === 0 ? "getStartedBg1" : "getStartedBg2"
            }`}
          >
            <div className="flex flex-col ml-[15%] md:ml-0 p-16 gap-20 items-center justify-center">
              <div className="flex flex-col lg:flex-row items-center justify-center pt-[10%]">
                <img
                  className="rounded-2xl mx-auto w-[90%] lg:w-[35%] object-cover"
                  src={item.img}
                  alt={item.h1}
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <h1 className="text-gray-900 text-2xl lg:text-4xl mx-auto bg-pink-300 p-3 md:px-10 md:py-2 rounded-2xl font-black">
                    {item.h1}
                  </h1>
                  <p className="text-sm md:text-xl font-medium w-full md:w-[80%] mx-auto p-3">
                    {item.h2}
                  </p>
                  <p className="text-sm md:text-xl font-medium w-full md:w-[80%] mx-auto p-3">
                    {item.p}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
