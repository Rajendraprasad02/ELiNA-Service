import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const ElinaBlog = ({ BlogContent }) => {
  const [blogPerPage] = useState(6); // Number of blogs per page
  const [blogContentPerPage, setBlogContentPerPage] = useState(1); // Initial page number

  // Calculate indices for pagination
  const indexOfLastBlog = blogContentPerPage * blogPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
  const currentBlog = BlogContent.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle pagination
  const paginateBlog = (pageNumber) => {
    setBlogContentPerPage(pageNumber);
  };

  return (
    <>
      <h1
        id="blogScroll"
        className="text-center underline text-5xl md:text-6xl font-black text-blue-700 pt-10"
      >
        Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 p-8 md:p-20 gap-5">
        {currentBlog.map((item, index) => (
          <div
            key={index}
            className="py-5 md:p-10 flex flex-col justify-between shadow-xl rounded-2xl"
          >
            <div className="px-4">
              <img
                className="w-full h-[230px] rounded-xl md:h-[230px]"
                src={item.blogImg}
                alt={item.h1}
              />
            </div>
            <div className="h-full">
              <div className="p-4 flex flex-col gap-8">
                <div>
                  <p className="text-gray-500 text-sm">14 Jun 2024</p>
                  <h1 className="font-black text-base md:text-lg mt-2">
                    {item.h1}
                  </h1>
                  <p className="text-gray-800 font-normal mt-2">
                    {item.des.slice(0, 200) + "..."}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto pl-2 flex items-center">
              <a
                className="cursor-pointer px-2 py-1 self-end font-black text-blue-800"
                href={`/blog/mainblog/${item.id}`}
              >
                Learn more
              </a>
              <p className="items-center">
                <ArrowRightIcon className="w-4 text-blue-800" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-5">
        {blogContentPerPage === 1 ? (
          ""
        ) : (
          <div>
            <button
              onClick={() => paginateBlog(blogContentPerPage - 1)}
              className="bg-blue-600 text-white px-4 py-2 mx-1 rounded-md focus:outline-none flex items-center gap-2"
            >
              <ChevronLeftIcon className="w-3" />
              Previous
            </button>
          </div>
        )}
        {indexOfLastBlog >= BlogContent.length ? (
          ""
        ) : (
          <div>
            <button
              onClick={() => paginateBlog(blogContentPerPage + 1)}
              className="bg-blue-600 text-white px-4 py-2 mx-1 rounded-md focus:outline-none flex items-center gap-2"
            >
              Next
              <ChevronRightIcon className="w-3" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ElinaBlog;
