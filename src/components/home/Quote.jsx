import React from "react";

const Quote = () => {
  return (
    <>
      <div className="p-5 md:p-0">
        <div className="blockquote  bg-pink-500 animationHero p-5  rounded-3xl text-white lg:mx-24 lg:p-8 lg:rounded-3xl lg:font-semibold">
          <svg
            class="w-10 h-10 mx-auto mb-3 text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className=" text-center italic text-base font-bold pb-2 text md:text-xl md:pb-3 lg:text-2xl">
            "Inclusion is not a strategy to help people fit into the systems and
            structures that exist in our societies, it is about transforming
            those systems and structures to make it better for everyone."{" "}
          </p>
          <h1 className="text-end mt-auto font-semibold text-white lg:font-bold lg:text-lg">
            - DIANE RICHLER.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Quote;
