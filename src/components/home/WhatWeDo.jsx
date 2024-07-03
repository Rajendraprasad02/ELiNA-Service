import React from "react";
import parents from "../../images/teaching2.jpg";
import schools from "../../images/school2.jpg";
import Professionals from "../../images/teaching.jpg";
import { ArrowRightIcon } from "@heroicons/react/outline";

const WhatWeDoContent = [
  {
    h1: (
      <span>
        For <span className=" text-pink-500">Parents</span>
      </span>
    ),
    src: parents,
    p: (
      <span>
        Over the years, our conversations with numerous parents have helped u
        understand the joys and challenges of raising a neurodivergent child. We
        know that parenting can sometimes feel very challenging.
        <span className="text-pink-500 font-medium">
          {" "}
          Do not worry, you are not alone!
        </span>
      </span>
    ),
    button: "Join with us",
  },
  {
    h1: (
      <span>
        For <span className=" text-pink-500">Schools</span>
      </span>
    ),
    src: schools,
    p: (
      <span>
        Supporting neurodivergent children in schools and giving them the
        attention they need can sometimes be challenging and time-consuming. We
        understand and recognise that creating an inclusive school brings with
        it various issues{" "}
        <span className="text-pink-500 font-medium">
          such as teacher burnout, lack of knowledge, and communication
          barriers. This is where we come in.
        </span>
      </span>
    ),
    button: "Join with us",
  },
  {
    h1: (
      <span>
        For <span className=" text-pink-500">Professionals</span>
      </span>
    ),
    src: Professionals,
    p: (
      <span>
        ELiNA offers over two decades of experience in creating inclusive
        spaces. We provide a platform for professionals to collaborate and share
        ideas, expertise, and concerns. Together, we aim to build inclusive
        environments, particularly for neurodivergent children.
        <span className="text-pink-500 font-medium">
          We welcome partners who share our passion for creating inclusive
          spaces!
        </span>{" "}
      </span>
    ),
    button: "Join with us",
  },
];

const WhatWeDo = () => {
  return (
    <div className="WhatWeDoBg lg:w-full content-center lg:py-6 HeroBg2">
      <div className="flex flex-col">
        <div className="lg:pb-5 text-center">
          <h1 className="text-5xl lg:text-6xl font-black text-indigo-600">
            What we do?
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-16 p-5 md:grid-cols-1 md:gap-2 lg:px-10 lg:gap-10 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {WhatWeDoContent.map((item) => (
            <div className="flex flex-col items-center drop-shadow-xl rounded-3xl bg-white lg:w-[100%]">
              <h1 className="text-3xl text-gray-800 font-black lg:text-3xl p-10">
                {item.h1}
              </h1>
              <img
                className="w-[60%] h-auto lg:w-[350px] lg:h-[230px] rounded-3xl"
                src={item.src}
              ></img>
              <p className="p-10 lg:text-xl  text-gray-600">{item.p}</p>
              <button className="flex items-center bg-pink-500 border-pink-500 p-2 lg:gap-1 rounded-xl mt-auto mb-4 lg:p-1 lg:px-2">
                {item.button}
                <ArrowRightIcon className="w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
