import React, { useState } from "react";
import pic1 from "../../images/gallery/img1.jpeg";
import pic2 from "../../images/gallery/img2.jpeg";
import pic3 from "../../images/gallery/img3.jpeg";
import pic4 from "../../images/gallery/img4.jpeg";
import pic5 from "../../images/gallery/img5.jpeg";
import pic6 from "../../images/gallery/img6.jpg";
import pic7 from "../../images/gallery/img7.jpg";
import pic8 from "../../images/gallery/office/IMG20240409124853.jpg";

import pic9 from "../../images/gallery/office/IMG20240411105725.jpg";

import pic10 from "../../images/gallery/office/IMG20240412111652.jpg";
import pic11 from "../../images/gallery/office/IMG20240412111708.jpg";
import pic12 from "../../images/gallery/office/IMG20240416142118 (1).jpg";
import pic13 from "../../images/gallery/office/IMG20240416143943.jpg";
import pic14 from "../../images/gallery/office/IMG20240423141950.jpg";

const GalleryHero = () => {
  const GalleryPicContent = [
    {
      pic: pic1,
      category: "teamouting",
    },
    {
      pic: pic2,
      category: "teamouting",
    },
    {
      pic: pic3,
      category: "teamouting",
    },
    {
      pic: pic4,
      category: "teamouting",
    },
    {
      pic: pic5,
      category: "teamouting",
    },
    {
      pic: pic6,
      category: "teamouting",
    },
    {
      pic: pic7,
      category: "teamouting",
    },
    {
      pic: pic8,
      category: "f2f",
    },
    {
      pic: pic9,
      category: "f2f",
    },
    {
      pic: pic10,
      category: "f2f",
    },
    {
      pic: pic11,
      category: "f2f",
    },
    {
      pic: pic12,
      category: "f2f",
    },
    {
      pic: pic13,
      category: "f2f",
    },
    {
      pic: pic14,
      category: "f2f",
    },
  ];

  const picButtons = [
    {
      buttonCategory: "Team outing",
      buttonOnClick: "teamouting",
    },
    {
      buttonCategory: "F2F",
      buttonOnClick: "f2f",
    },
  ];

  const [currentCategory, setCurrentCategory] = useState("all");

  const filterCategory =
    currentCategory === "all"
      ? GalleryPicContent
      : GalleryPicContent.filter((img) => img.category === currentCategory);
  return (
    <>
      <div className="HeroBg2">
        <div className="">
          <h1 className="flex justify-center text-7xl font-extrabold text-indigo-600">
            Wall Of Love
          </h1>
        </div>
        <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            onClick={() => setCurrentCategory("all")}
            type="button"
            class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-lg font-black px-5 py-2 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            All photos
          </button>
          {picButtons.map((item) => (
            <button
              onClick={() => setCurrentCategory(item.buttonOnClick)}
              type="button"
              class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-lg font-black px-5 py-2 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
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
                  className="w-[300px] h-[200px] object-cover rounded-3xl shadow-xl"
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

export default GalleryHero;
