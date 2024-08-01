import React from "react";
import Quote from "./Quote";
import Lottie from "lottie-react";
import internAnimation from "../../images/compressed/hero/intern.jpg";

const Intern = () => {
  return (
    <>
      <div className="HeroBg2">
        <div className="flex flex-col md:flex-row items-center py-[10%] md:px-[10%] lg:px-[10%] md:py-[5%] lg:py-[2%]">
          <div className="w-full md:w-1/2 flex flex-col gap-10 md:gap-5">
            <h1 className="text-5xl text-blue-700 md:text-left text-center font-semibold">
              Join Us As An <span className="font-black">INTERN </span>
              Now!
            </h1>
            <p className="md:text-left text-center">
              Prometeo Talent excels in connecting companies with exceptional
              tech and engineering professionals. Our HR and recruitment
              services include targeted recruiting, efficient staffing, and
              flexible outsourcing solutions. Partner with us to enhance your
              global workforce and drive business success.
            </p>
            <a
              className="flex lg:justify-start justify-center"
              href="/#/intern-form"
            >
              <button className="w-[80%] md:w-1/2  bg-blue-700 text-white border-blue-700 hover:text-blue-700 hover:border-blue-700 hover:bg-transparent px-3 py-2 rounded-full">
                Join Now!
              </button>
            </a>
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-0">
            <img className="rounded-2xl" src={internAnimation} />
            {/* <Lottie animationData={internAnimation}></Lottie> */}
          </div>
        </div>

        <Quote />
      </div>
    </>
  );
};

export default Intern;
