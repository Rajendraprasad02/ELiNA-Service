import React from "react";

const InternHero = () => {
  return (
    <>
      <div className="lg:h-screen internShipBg">
        <div className="flex flex-col p-5 lg:p-36">
          <div className="bg-black-bg rounded-3xl flex flex-col gap-5 lg:gap-16 p-8 lg:p-20">
            <h1 className="text-center text-5xl md:text-8xl font-black text-white">
              Internship with ELiNA
            </h1>

            {/* <p className="text-center text-white">
              Welcome to ELiNA service, where conceived as a powerful concept of
              inclusion within HLC, and nurtured for a decade through extensive
              knowledge gathering, research, and real-life experiences. Our
              name, "ELiNA," signifies the first ray of sun and embodies our
              mission to be the first ray of hope for neurodiverse families.
            </p> */}
            <p className="text-center text-white">
              <span className="font-bold underline">
                Getting started is easy!
              </span>{" "}
              Follow these simple steps:
            </p>
          </div>
          <div className="mx-auto bg-black w-[80%] h-fit">
            <form></form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternHero;
