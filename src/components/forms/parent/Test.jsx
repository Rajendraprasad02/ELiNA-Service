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
    h1: "Schedule Appointment",
    p: "Initial meeting with team ELiNA will be scheduled at a mutually convenient time and date",
    img: schedule,
  },
  {
    key: 2,
    h1: "Meeting with ELiNA",
    p: "Sharing your child's strengths, challenges, observations and concerns. Service briefing will be presented by team ELiNA. Questions from parents will be addressed",
    img: meeting,
  },
  {
    key: 3,
    h1: "Enrollment Decision",
    p: "Making enrollment decisions based on understanding gained from the meetings",
    img: enroll,
  },
  {
    key: 4,
    h1: "What is Sail & Compass",
    p: "After enrollment, follow the steps for SAIL and COMPASS as explained during the meeting and guided by the team.",
    img: sail,
  },
  {
    key: 5,
    h1: "In-depth Interactions",
    p: "ELiNA conducts in-depth interactions with children and family",
    img: interaction,
  },
  {
    key: 6,
    h1: "Reports",
    p: "Comprehensive, Assessment, Recommendation and Referrals shared by Elina",
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
              <div className="flex flex-col md:flex-row">
                <img
                  className="rounded-2xl mx-auto w-[90%] lg:w-[35%] object-cover"
                  src={item.img}
                />
                <p className="text-center my-auto rounded-2xl text-sm md:text-xl font-medium w-full md:w-[30%] mx-auto p-3">
                  {item.p}
                </p>
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
