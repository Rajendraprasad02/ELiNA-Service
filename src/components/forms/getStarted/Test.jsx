import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import schedule from "../../../images/getStarted/scheduleAppoinment.jpg";
import meeting from "../../../images/getStarted//meeting.jpg";
import enroll from "../../../images/getStarted/enroll.jpg";
import sail from "../../../images/getStarted/sail.jpg";
import report from "../../../images/getStarted/report.jpg";
import interaction from "../../../images/getStarted/intraction.jpg";

const getStartedContent = [
  {
    h1: "Step 1 : Schedule Appointment",
    p: "Initial meeting with team ELiNA will be scheduled at a mutually convenient time and date",
    img: schedule,
  },
  {
    h1: "Step 2 : Meeting with ELiNA",
    p: "Sharing your child's strengths, challenges, observations and concerns. Service briefing will be presented by team ELiNA. Questions from parents will be addressed",
    img: meeting,
  },
  {
    h1: "Step 3 : Enrollment Decision",
    p: "Making enrollment decisions based on understanding gained from the meetings",
    img: enroll,
  },
  {
    h1: "Step 4 : What is Sail & Compass",
    p: "After enrollment, follow the steps for SAIL and COMPASS as explained during the meeting and guided by the team.",
    img: sail,
  },
  {
    h1: "Step 5 : In-depth Interactions",
    p: "ELiNA conducts in-depth interactions with children and family",
    img: interaction,
  },
  {
    h1: "Step 6 : Reports",
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
        {getStartedContent.map((item) => (
          <div className="min-w-[100vw] panel h-screen HeroBg">
            <div className="flex flex-col gap-8 pt-16 p-10 ">
              <h1 className="text-center text-gray-900 text-2xl lg:text-6xl mx-auto bg-pink-400 p-2 rounded-2xl font-black">
                {item.h1}
              </h1>
              <img
                className="rounded-2xl mx-auto w-[70%] lg:w-[35%] object-cover"
                src={item.img}
              />
              <p className="text-center rounded-2xl text-sm md:text-xl font-medium bg-pink-200 w-fit mx-auto p-3">
                {item.p}
              </p>
              <p className="font-black text-black text-center">Scroll down</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
