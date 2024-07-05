import React, { useState } from "react";

const GalleryPhoto = ({ GalleryPicContent, picButtons }) => {
  const [currentCategory, setCurrentCategory] = useState("f2f");

  const filterCategory =
    currentCategory === "all"
      ? GalleryPicContent
      : GalleryPicContent.filter((img) => img.category === currentCategory);
  return (
    <>
      <div className="HeroBg2">
        <div className="">
          <h1 className="flex lg:pt-20 text-center justify-center text-4xl md:text-6xl lg:text-7xl font-extrabold text-indigo-600">
            Wall Of Love
          </h1>
        </div>
        <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {picButtons.map((item) => (
            <button
              onClick={() => setCurrentCategory(item.buttonOnClick)}
              type="button"
              class={`${
                currentCategory === item.buttonOnClick
                  ? "text-blue-700 border-blue-700"
                  : ""
              }text-gray-900 border border-white  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-lg font-black px-5 py-2 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
            >
              {item.buttonCategory}
            </button>
          ))}
        </div>
        <div class="flex flex-wrap justify-center">
          {filterCategory.map((item) => (
            <div class="p-5 md:p-10">
              <div class="">
                <img
                  className="zoom w-[300px] h-[200px] object-cover rounded-3xl shadow-xl"
                  src={item.pic}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPhoto;
