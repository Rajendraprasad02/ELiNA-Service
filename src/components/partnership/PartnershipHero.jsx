import React from "react";

const PartnershipHero = () => {
  return (
    <>
      <div className="HeroBg">
        <div className="flex items-center text-center flex-col px-[28%] py-[5%] gap-14">
          <h1 className="text-7xl font-bold text-blue-700">Partnerships</h1>
          <h2 className="text-2xl font-semibold">
            Let’s shape the world for difference
          </h2>
          <p className="text-lg font-medium">
            We envision a neuroinclusive world where all ways of learning and
            thinking are embraced. A place where all people feel a sense of
            belonging at school, at work, and in life.{" "}
          </p>
          <p className="text-lg font-medium">
            Our goal is to make an impact on 100 million people by 2030. We’ll
            do that with innovative products, digital content, and leading-edge
            research. Strategic partners provide the support we need to advance
            towards that goal. Learn about the impact we’ve made so far in our
            Annual Report.
          </p>
          <p className="text-lg text-gray-700">
            For more information, please contact us at
            partnerships@understood.org.
          </p>
        </div>
      </div>
    </>
  );
};

export default PartnershipHero;
