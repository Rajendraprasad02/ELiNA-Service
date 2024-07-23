import React from "react";
import Quote from "./Quote";

const Intern = () => {
  return (
    <>
      <div className="HeroBg2">
        <div className="flex px-[10%] py-[10%]">
          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-5xl text-blue-700 font-semibold">
              Join Us As A <span className="font-black">INTERN </span>
              Now!
            </h1>
            <p>
              Prometeo Talent excels in connecting companies with exceptional
              tech and engineering professionals. Our HR and recruitment
              services include targeted recruiting, efficient staffing, and
              flexible outsourcing solutions. Partner with us to enhance your
              global workforce and drive business success.
            </p>
            <button className="w-1/2  bg-blue-700 text-white border-blue-700 hover:text-blue-700 hover:border-blue-700 hover:bg-transparent px-3 py-2 rounded-full">
              Join Now!
            </button>
          </div>
          <div className="w-1/2">
            <img src="" />
          </div>
        </div>

        <Quote />
      </div>
    </>
  );
};

export default Intern;
