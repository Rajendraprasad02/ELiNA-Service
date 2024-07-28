import React from "react";
// import learn from "../../images/school/learn.jpg";
import learn from "../../images/school/schoolCompressed/learn-min.jpg";

const LeadYourTeacher = () => {
  return (
    <>
      <div className="HeroBg md:px-[8%] py-[8%]">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 p-5 md:p-0">
          <div className="lg:w-1/2 w-full leftToRight">
            <img src={learn} className="rounded-3xl" />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-6 p-[2%] rightToLeft">
            <h1 className="text-5xl md:text-4xl text-blue-700 font-bold">
              Lead your teachers, your students, and your day
            </h1>
            <p className="text-lg ">
              Being pulled in so many different directions doesn’t help your
              students – and makes it harder to be the leader your school needs.
              You should be free to spend the best hours of your day investing
              in your people. Over 80,000 schools trust Frontline Education
              software to help them be more efficient and effective, and to
              support teaching and learning at every level.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadYourTeacher;
