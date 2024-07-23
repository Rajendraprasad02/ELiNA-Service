import React from "react";

const SpecialNeedCare = () => {
  return (
    <>
      <div className="HeroBg2">
        <div className="flex flex-col text-center items-center gap-10 p-[5%]">
          <h1 className="text-5xl font-semibold text-blue-700">
            As a Special Needs Caregiver, You Wear Many Hats
          </h1>
          <p className="px-[20%] text-lg">
            Every day feels like new territory. There are more decisions to
            make, challenges to address, and responsibilities to balance with
            the needs of your family and career.
          </p>
          <p>It can feel overwhelming.</p>
          <p className="px-[20%] text-lg">
            At Hearts and Hands Therapy, we believe you should be able to focus
            on being a caregiver to your kiddo, not also their therapist and
            teacher.
          </p>
          <button className="p-3 rounded-2xl text-lg bg-blue-700 border-blue-700 text-white hover:bg-transparent hover:border-blue-700 hover:text-blue-700">
            Join our Therapy Team
          </button>
        </div>
      </div>
    </>
  );
};

export default SpecialNeedCare;
