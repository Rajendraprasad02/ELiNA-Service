import React from "react";
import img1 from "../../images/school/card1.png";
import img2 from "../../images/school/card2.png";
import img3 from "../../images/school/card3.png";
import img4 from "../../images/school/card4.png";

import CareGivers from "./CareGivers";

const div1Content = [
  {
    h1: "Regular Updates and Meetings:",
    src: img1,
    P: "We ensure open communication between schools, families, and professionals. Regular updates and meetings keep everyone aligned and informed about each child's progress. ",
  },
  {
    h1: "Integrated Efforts:",
    src: img2,
    P: "Our collaborative approach integrates efforts across various environments, preventing challenges from escalating and ensuring timely and effective interventions. ",
  },
];
const div2Content = [
  {
    h1: "Community Workshops and Events:",
    src: img4,
    P: "We organize informative workshops and engaging events for the entire school community, fostering awareness and understanding of ADHD, Autism, and Learning Disabilities. ",
  },
  {
    h1: "Collaboration Opportunities:",
    src: img3,
    P: "Partner with leading experts to develop comprehensive care plans and strategies tailored to your students' needs. These collaborations enhance the support provided to each student, ensuring a holistic approach to their development.",
  },
];
const OurPrograms = () => {
  return (
    <>
      <div className="HeroBg">
        <h1 className=" text-center  text-3xl lg:text-6xl font-black text-blue-600 animationHero p-5">
          Holistic Collaboration: Supporting Your School Community
        </h1>
        <div className="flex flex-col justify-center items-center md:px-[20%] lg:px-[5%] md:py-[3%]">
          <p className="text-3xl lg:text-4xl font-bold text-center text-blue-950 p-10">
            Seamless Communication
          </p>
          <div className="flex flex-col lg:flex-row w-full lg:w-[80%]">
            {div1Content.map((item, index) => (
              <div
                key={index}
                className="p-5 lg:p-10 flex w-full lg:w-1/2 flex-col justify-between animationHero"
              >
                <div className="px-4">
                  <img
                    className="w-full rounded-xl h-[230px] object-cover"
                    src={item.src}
                    alt={item.h1}
                  />
                </div>
                <div className="h-full ">
                  <div className="p-4 flex flex-col gap-8 ">
                    <div className="">
                      <h1 className="font-black text-lg mt-2 text-blue-600">
                        {item.h1}
                      </h1>
                      <p className="text-gray-800 font-normal mt-2">{item.P}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-3xl lg:text-4xl  font-bold text-center text-blue-950 p-10">
            {" "}
            Empowering the School Community
          </p>
          <div className="flex flex-col lg:flex-row w-full lg:w-[80%]">
            {div2Content.map((item, index) => (
              <div
                key={index}
                className="p-5 lg:p-10 flex flex-col justify-between animationHero w-full lg:w-1/2"
              >
                <div className="px-4">
                  <img
                    className="w-full rounded-xl h-[230px] object-cover"
                    src={item.src}
                    alt={item.h1}
                  />
                </div>
                <div className="h-full ">
                  <div className="p-4 flex flex-col gap-8 ">
                    <div className="">
                      <h1 className="font-black text-lg mt-2 text-blue-600">
                        {item.h1}
                      </h1>
                      <p className="text-gray-800 font-normal mt-2">{item.P}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CareGivers />
    </>
  );
};

export default OurPrograms;
