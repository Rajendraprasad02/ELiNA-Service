import React from "react";
// import parents from "../../images/teaching2.jpg";
// import schools from "../../images/school2.jpg";
// import Professionals from "../../images/teaching.jpg";
import parents from "../../images/compressed/hero/teaching2-min.jpg";
import schools from "../../images/compressed/hero/school2-min.jpg";

import Professionals from "../../images/compressed/hero/teaching-min.jpg";

import { ArrowRightIcon } from "@heroicons/react/outline";

const WhatWeDoContent = [
  {
    h1: (
      <span>
        For <span className=" text-pink-500">Parents</span>
      </span>
    ),
    sh: "Empower Your Child's Journey",
    src: parents,
    href: "/#/parent-form",
    p: "Parenting a child with special needs can be challenging yet rewarding. At Elina, we support you every step of the way. Our programs are designed to:",
    li: [
      <span>
        <span className=" font-black text-pink-600">
          Provide Personalized Assessments:
        </span>{" "}
        Understand your child’s unique strengths and challenges.
      </span>,
      <span>
        <span className=" font-black text-pink-600">
          Offer Tailored Recommendations:{" "}
        </span>
        Receive expert guidance on managing behaviors, enhancing learning, and
        fostering social skills.
      </span>,
      <span>
        <span className=" font-black text-pink-600">
          Build a Supportive Community:{" "}
        </span>
        Connect with other parents, share experiences, and find comfort in a
        community that understands your journey.
      </span>,
    ],
    button: "Join us",
    p1: "We equip you with the knowledge and tools to support your child's growth, helping them thrive both at home and beyond.",
  },
  {
    h1: (
      <span>
        For <span className=" text-pink-500">Schools</span>
      </span>
    ),
    sh: "Creating Inclusive Learning Environments",
    src: schools,
    href: "/#/school-form",
    p: "Inclusive education is essential for the development of children with special needs. We collaborate closely with educational institutions to:",
    li: [
      <span>
        <span className=" font-black text-pink-600">
          Design Inclusive Curricula:
        </span>
        Develop learning strategies that cater to the diverse needs of all
        students.
      </span>,
      <span>
        <span className=" font-black text-pink-600">
          Provide Training for Educators:
        </span>
        Equip teachers with the skills and resources needed to support children
        with ADHD, Autism, and Learning Disabilities in the classroom.
      </span>,
      <span>
        <span className=" font-black text-pink-600">
          Foster Collaborative Learning:
        </span>
        Encourage peer interaction and understanding through inclusive
        activities and projects.
      </span>,
    ],
    button: "Join us",
    p1: "Our goal is to create a nurturing and inclusive environment where every child can succeed and feel valued.",
  },
  {
    h1: (
      <span>
        For <span className=" text-pink-500">Professionals</span>
      </span>
    ),
    sh: "Enhancing Expertise and Collaboration",
    src: Professionals,
    href: "/#/service-form",
    p: "We recognize the importance of a multidisciplinary approach to support children with special needs. Elina offers:",
    li: [
      <span>
        <span className=" font-black text-pink-600">
          Professional Development Workshops:
        </span>
        Stay updated with the latest research and techniques in special
        education and therapy.
      </span>,
      <span>
        <span className=" font-black text-pink-600">
          Collaboration Opportunities:
        </span>
        Work alongside other experts in the field to develop comprehensive care
        plans.
      </span>,
      <span>
        <span className=" font-black text-pink-600">Resource Library:</span>
        Access a wide range of materials, from research articles to practical
        guides, to enhance your practice. Stay informed and inspired with
        up-to-date resources tailored to your needs.
      </span>,
    ],
    button: "Join us",
    p1: "Join us in making a difference in the lives of children and their families by expanding your knowledge and skills.",
  },
];

const WhatWeDo = () => {
  return (
    <div className="WhatWeDoBg  lg:w-full content-center lg:py-7 HeroBg2">
      <div className="flex flex-col">
        <div className="lg:pb-5 text-center">
          <h1 className="text-5xl lg:text-6xl p-5 animationHero font-black text-indigo-600">
            What we do?
          </h1>
        </div>
        <div className="grid lg:animationHero grid-cols-1 gap-16 p-5 md:grid-cols-1 md:gap-2 lg:px-10 lg:gap-10 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {WhatWeDoContent.map((item) => (
            <div className="flex flex-col items-center drop-shadow-xl rounded-3xl bg-white lg:w-[100%]">
              <h1 className="text-3xl text-gray-800 font-black lg:text-3xl py-5 px-3 lg:px-10 lg:pt-10 ">
                {item.h1}
              </h1>
              <p className="font-bold lg:pb-5 text-blue-900">{item.sh}</p>
              <img
                className="w-[85%] h-auto lg:w-[350px] lg:h-[230px] rounded-3xl"
                src={item.src}
                alt=""
              ></img>
              <div className="p-5 lg:p-10 lg:text-base flex flex-col gap-2 text-gray-800">
                <p className="font-bold">{item.p}</p>
                {item.li.map((i) => (
                  <p>{i}</p>
                ))}
              </div>
              <div className="mt-auto">
                <p className="p-5 lg:px-10 lg:text-base flex flex-col gap-2 text-gray-800">
                  {item.p1}
                </p>
              </div>

              <button className="flex items-center bg-pink-500 hover:text-pink-600 border-pink-500 p-2 lg:gap-1 lg:text-xl rounded-xl mt-auto mb-4 lg:p-2 lg:px-3 lg:mb-10">
                <a href={item.href}>{item.button}</a>
                <ArrowRightIcon className="w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
