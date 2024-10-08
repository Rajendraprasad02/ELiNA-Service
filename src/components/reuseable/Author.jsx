import { UserCircleIcon } from "@heroicons/react/outline";
import men from "../../images/blog/blogHero/man.png";
import female from "../../images/blog/blogHero/girl.png";
import React from "react";

import { useParams } from "react-router-dom";
import BlogContent from "../../utils/blogContent";

const Author = () => {
  const params = useParams();

  const data = BlogContent?.find((elem) => elem?.id === Number(params.id));

  return (
    <>
      <div className=" group absolute inline-block left-[60%] top-[30%] md:left-[80%] md:top-[30%] lg:left-[80%] lg:top-[40%]">
        <p className="font-black text-2xl">
          <div popovertarget="popup" className="">
            {data.gender === "male" ? (
              <img src={men} className="w-14 animate-pulse" />
            ) : (
              <img src={female} className="w-14 animate-pulse" />
            )}
          </div>
          <p className="text-xl  items-center group-hover:visible opacity-0 group-hover:opacity-100 transition absolute bottom-full left-5  transform -translate-x-1/2 mt-2 whitespace-nowrap bg-black text-white p-3 rounded-md">
            {data?.author}
          </p>
        </p>
      </div>
    </>
  );
};

export default Author;
