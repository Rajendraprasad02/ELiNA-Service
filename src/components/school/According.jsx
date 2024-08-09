import React from "react";

const content = [
  {
    head: "Individualized Learning Plans (ILPs):",
    des: "We work with teachers to create personalized learning plans tailored to each student's unique needs and strengths. These plans set specific goals, strategies, and accommodations to ensure academic and social success. ",
  },
  {
    head: "Behavioral and Emotional Support:",
    des: "Our programs include effective strategies to support students' emotional well-being and manage behavioral challenges, fostering a positive and productive learning environment. ",
  },
];
const sailContent = [
  {
    head: "Screening and Assessment:",
    des: "The SAIL (Setting up Access for Independence and Learning) Program is crucial for identifying the root causes of academic or behavioral issues. Through comprehensive observation and analysis, SAIL provides a deep understanding of a child's strengths and challenges. ",
  },
  {
    head: "Insightful Diagnosis: ",
    des: "Using both standard and non-standard tools, SAIL accurately identifies specific learning difficulties, emotional barriers, or other factors affecting a student's performance. This detailed assessment allows us to tailor interventions effectively. ",
  },
];
const compassContent = [
  {
    head: "Team Formulation:",
    des: " We assemble a dedicated team for each child, including educators, therapists, parents, and other professionals, to provide comprehensive support. ",
  },
  {
    head: "Program Plan:",
    des: " We develop a detailed plan based on the child's unique needs and strengths, outlining specific goals, strategies, and interventions. ",
  },
  {
    head: "Monthly Reviews:",
    des: "We review the child's progress monthly to assess the effectiveness of strategies and make necessary adjustments. ",
  },
  {
    head: "Direct Interaction and Observation:",
    des: "Bi-monthly interactions and observations offer real-time insights into the child's progress, helping to fine-tune interventions. ",
  },
  {
    head: "Analysis and Visualization:",
    des: "Data from assessments and observations are analyzed and visualized to track the child's progress and identify areas needing additional focus. ",
  },
  {
    head: "Course Correction and Recommendations: ",
    des: "Based on the analysis, the team recommends next steps and adjusts the program plan as needed to ensure continuous progress. ",
  },
];

const According = () => {
  return (
    <>
      <div className="HeroBg2">
        <div className="mx-0 lg:mx-[16%] lg:py-[5%]">
          <h1 className="flex justify-center text-5xl text-center  font-black text-blue-950 py-20">
            Personalized Support Plans for Every Student
          </h1>
          <div className="">
            <h1 className="font-bold text-base px-3 lg:px-10">
              <span className="font-black text-xl text-blue-950">
                Our Specialized Program Plan:
              </span>{" "}
            </h1>
            <div className="grid grid-flow-row md:grid-cols-2 lg:p-10">
              {content.map((item, index) => (
                <details
                  key={index}
                  className="py-8 bg-gray-200 m-2 cursor-pointer rounded-2xl self-start"
                >
                  <summary className="p-3 lg:p-5 text-lg font-black ">
                    {item.head}
                  </summary>
                  <p className="mx-2 lg:mx-5 rounded-3xl p-5 bg-gray-50 font-semibold opacity-90">
                    {item.des}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-medium text-base px-3 lg:px-10">
              <span className="font-black text-xl text-blue-950">
                SAIL Program:
              </span>{" "}
              Essential for Identifying Student Challenges
            </h1>

            <div className="grid grid-flow-row md:grid-cols-2 lg:p-10">
              {sailContent.map((item, index) => (
                <details
                  key={index}
                  className="py-8 bg-gray-200 m-2 cursor-pointer rounded-2xl self-start"
                >
                  <summary className="p-3 lg:p-5 text-lg font-black">
                    {item.head}
                  </summary>
                  <p className="mx-2 lg:mx-5 rounded-3xl p-5 bg-gray-50 font-semibold opacity-90">
                    {item.des}
                  </p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-medium text-base px-3 lg:px-10">
              <span className="font-black text-xl text-blue-950">
                CoMPASS Program:
              </span>{" "}
              Continuous Support and Coordination
            </h1>
            <div className="grid grid-flow-row md:grid-cols-2 lg:p-10">
              {compassContent.map((item, index) => (
                <details
                  key={index}
                  className="py-8 bg-gray-200 m-2 cursor-pointer rounded-2xl self-start"
                >
                  <summary className="p-3 lg:p-5 text-lg font-black">
                    {item.head}
                  </summary>
                  <p className="mx-2 lg:mx-5 rounded-3xl p-5 bg-gray-50 font-semibold opacity-90">
                    {item.des}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default According;
