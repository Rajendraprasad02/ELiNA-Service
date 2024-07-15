import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + container.scrollWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="item">hi</div>
      <div className="item">welcome</div>
      <div className="item">to</div>
      <div className="item">the</div>
      <div className="item">website</div>
    </div>
  );
};

export default Text;
