import React from "react";

const professionalLiContent = [
  {
    li: "Special Educators",
    p: "Experts in adapting teaching methods and materials to meet the needs of students with learning disabilities.",
  },
  {
    li: "Teachers",
    p: "Classroom educators who support children with ADHD, Autism, and Learning Disabilities, ensuring inclusive education.",
  },
  {
    li: "Counselors",
    p: "Professionals providing emotional and psychological support to help children navigate their challenges.",
  },
  {
    li: "Doctors",
    p: "Medical professionals specializing in pediatric care, neurology, psychiatry, and other relevant fields.",
  },
  {
    li: "Occupational Therapists",
    p: "Specialists in helping children develop fine motor skills, sensory processing, and daily living skills.",
  },
  {
    li: "Speech Therapists",
    p: "Experts in supporting children with communication disorders and language development.",
  },
  {
    li: "Art-Based Therapists",
    p: "Therapists using creative expression to help children explore emotions and enhance mental health.",
  },
  {
    li: "Physical Educators",
    p: "Instructors focusing on physical development and fitness, including adapted physical education.",
  },
  {
    li: "Yoga Trainers",

    p: "Practitioners teaching yoga to promote physical and mental well-being.",
  },
  {
    li: "Life Skill Coaches",
    p: "Coaches helping children develop essential life skills, including social skills, self-management, and problem-solving.",
  },
];

const SpecialNeedCare = () => {
  return (
    <>
      <div className="HeroBg2">
        <div className="flex flex-col  items-center gap-10 p-[5%]">
          <h1 className="text-4xl lg:text-5xl font-semibold text-blue-700">
            Who Can Be Part of Our Network?
          </h1>
          <div className="lg:p-10 p-0 ">
            <ul className="grid lg:grid-cols-4 grid-cols-2 gap-5 lg:gap-5  w-full">
              {professionalLiContent.map((item) => (
                <div className="flex flex-col">
                  <li className="lg:text-xl text-base font-black text-blue-950">
                    {item.li}
                  </li>
                  <p className="lg:text-base text-sm">{item.p}</p>
                </div>
              ))}
            </ul>
          </div>
          <a href="/#/service-form">
            <button className="p-3 rounded-2xl text-lg bg-blue-700 border-blue-700 text-white hover:bg-transparent hover:border-blue-700 hover:text-blue-700">
              Join our Therapy Team
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default SpecialNeedCare;
