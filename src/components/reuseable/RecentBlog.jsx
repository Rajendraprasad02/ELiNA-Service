import { ChevronRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const RecentBlog = ({ BlogContent }) => {
  const [sortedBlog, setSortedBlog] = useState(BlogContent);
  const location = useLocation();

  let currentBlog = [];

  const blogPath = location.pathname
    .split()
    .filter((path) => path !== "")
    .map((item) => {
      currentBlog += item;
    });

  const findBlogById = (id) => {
    return BlogContent.find((blog) => blog.id === id);
  };
  const blogPost = findBlogById(Number(location.pathname.slice(-1)));

  const updatedBlogContent = BlogContent.filter(
    (blog) => blog.id !== Number(location.pathname.slice(-1))
  );
  return (
    <div className="w-0 md:w-[50%] lg:w-[40%]">
      <div className="py-[10%] px-[3%]">
        <h1 className="flex justify-left font-black text-2xl lg:text-4xl text-pink-400">
          Our Recent Blogs
        </h1>

        <div className="relative  rounded-2xl w-[90%] h-[500px] overflow-x-scroll p- flex  flex-col gap-5">
          <div className="sticky   py-3 flex cursor-pointer   h-fit items-center gap- p-1 rounded-2xl">
            <div className="flex flex-col ">
              <p className="flex justify-left items-center text-gray-700 font-bold">
                Current Blog:
              </p>
              <div className="flex  lg:gap-3 items-center text-white bg-pink-500 rounded-2xl">
                <img
                  src={blogPost?.blogImg}
                  className="rounded-2xl w-[35%] object-contain p-2"
                  alt="blog"
                />
                <p className="font-black text-sm lg:text-base">
                  {window.innerWidth < 1024 ? (
                    <>{blogPost?.h1.slice(0, 50) + "..."}</>
                  ) : (
                    <>{blogPost?.h1}</>
                  )}
                </p>
              </div>
            </div>
          </div>
          <p className="flex justify-left items-center text-gray-700 font-bold">
            Archived Blog:
          </p>
          <div className="overflow-x-auto flex-1 p-1">
            {updatedBlogContent?.map((item) => (
              <a href={`/#/blog/mainblog/${item.id}`}>
                <div
                  className={`${
                    currentBlog === `/blog/mainblog/${item.id}` &&
                    "bg-pink-600 text-white"
                  } py-3 flex flex-row cursor-pointer  hover:bg-pink-500 hover:text-white h-fit items-center gap-3 p-1 rounded-2xl`}
                  key={item?.id}
                >
                  <img
                    src={item?.blogImg}
                    className="rounded-xl w-[35%] object-contain"
                    alt="blog"
                  />
                  <div className="flex flex-col">
                    <p className="font-black text-sm lg:text-bases">
                      {window.innerWidth < 1024 ? (
                        <>{item?.h1.slice(0, 20) + "..."}</>
                      ) : (
                        <>{item?.h1}</>
                      )}
                    </p>
                    <p className="flex items-center font-medium text-xs lg:text-sm">
                      <p className="">Read more</p>
                      <ChevronRightIcon className="w-3" />
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
