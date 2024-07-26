import React from "react";
import logo1 from "../../images/partnership/logo1HLC.png";
import logo2 from "../../images/partnership/Logo2Athena.png";

import logo3 from "../../images/partnership/Sree-Rehabilitation-Chennai-scaled.webp";

import logo4 from "../../images/partnership/cambridge-assessment-international-education.png";

import logo5 from "../../images/partnership/hamsa-logo-resized.jpg";

import logo6 from "../../images/partnership/logoo.jpg";
import logo7 from "../../images/partnership/ttcms-logo-symbol-text.svg";

const partnerImages = [
  {
    i1: logo1,
  },
  {
    i1: logo2,
  },
  {
    i1: logo3,
  },
  {
    i1: logo4,
  },
  {
    i1: logo5,
  },
  {
    i1: logo6,
  },
  {
    i1: logo1,
  },
  {
    i1: logo2,
  },
  {
    i1: logo3,
  },
  {
    i1: logo4,
  },
  {
    i1: logo5,
  },
  {
    i1: logo6,
  },
];

const PartnershipCarousel = () => {
  return (
    <>
      <div class="slider">
        <div class="slide-track flex  gap-24">
          {partnerImages.map((item) => (
            <div class="slide flex w-full">
              <img className="w-full" src={item.i1} alt="test" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnershipCarousel;
