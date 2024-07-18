import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import schedule from "../../../images/parent/scheduleAppoinment.jpg";
import meeting from "../../../images/parent//meeting.jpg";
import enroll from "../../../images/parent/enroll.jpg";
import sail from "../../../images/parent/sail.jpg";
import report from "../../../images/parent/report.jpg";
import interaction from "../../../images/parent/intraction.jpg";
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
    img: report,
  },
  {
    key: 7,
    h1: "In-depth Interactions",
    h2: "Elina conducts in-depth interactions with the child and the family to better understand their needs. These interactions help refine our approach and ensure we provide the most effective support.",
    p: "Participate in in-depth interactions with the child and family.",
    img: report,
  },
  {
    key: 8,
    h1: "Reports",
    h2: "We provide comprehensive assessment reports that include recommendations and referrals if needed. These reports are designed to offer a clear picture of your child's progress and any additional support they might need.",
    p: "Review and utilize comprehensive assessment, recommendation, and referral reports.",
    img: report,
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

export default function Test() {
  const component = useRef();
  const slider = useRef();

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
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="" ref={component}>
      <div ref={slider} className="container w-[600vw] h-screen flex">
        {ParentContent.map((item) => (
          <div
            className={`min-w-[100vw] panel h-screen  ${
              item.key % 2 === 0 ? "getStartedBg1" : "getStartedBg2"
            }`}
          >
            <div className="flex flex-col p-16 gap-20 items-center">
              <h1 className="text-center text-gray-900 text-2xl lg:text-4xl mx-auto bg-pink-300 p-3 md:px-10 md:py-2 rounded-2xl font-black">
                {item.h1}
              </h1>
              <div className="flex flex-col items-center md:flex-row">
                <img
                  className="rounded-2xl mx-auto w-[90%] lg:w-[35%] object-cover"
                  src={item.img}
                />
                <div className="items-center">
                  <p className="text-center my-auto rounded-2xl text-sm md:text-xl font-medium w-full md:w-[80%] mx-auto p-3">
                    {item.h2}
                  </p>
                  <p className="text-center my-auto rounded-2xl text-sm md:text-xl font-medium w-full md:w-[80%] mx-auto p-3">
                    {item.p}
                  </p>
                </div>
              </div>
              <p className="w-7 animate-bounce">
                <ArrowDownIcon />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
