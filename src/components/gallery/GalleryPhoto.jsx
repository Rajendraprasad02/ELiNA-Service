import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
const GalleryPhoto = ({ GalleryPicContent, picButtons }) => {
  const [currentCategory, setCurrentCategory] = useState("f2f");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Number of items per page

  // Filter photos based on category
  const filteredPhotos =
    currentCategory === "all"
      ? GalleryPicContent
      : GalleryPicContent.filter((img) => img.category === currentCategory);

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPhotos.slice(indexOfFirstItem, indexOfLastItem);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div id="galleryScroll" className="HeroBg2">
        <div className="">
          <h1 className="flex lg:pt-20 text-center justify-center text-4xl md:text-6xl lg:text-7xl font-extrabold text-indigo-600">
            Wall Of Love
          </h1>
        </div>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {picButtons.map((item) => (
            <button
              key={item.buttonOnClick}
              onClick={() => setCurrentCategory(item.buttonOnClick)}
              type="button"
              className={`${
                currentCategory === item.buttonOnClick
                  ? "text-blue-700 border-blue-700"
                  : ""
              } text-gray-900 border border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-lg font-black px-5 py-2 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
            >
              {item.buttonCategory}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {currentItems.map((item, index) => (
            <div key={index} className="p-5 md:p-10">
              <div>
                <img
                  className="zoom w-[300px] h-[200px] object-cover rounded-3xl shadow-xl"
                  src={item.pic}
                  alt={`Photo ${index}`}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          {currentPage === 1 ? (
            ""
          ) : (
            <button
              onClick={() => paginate(currentPage - 1)}
              className="bg-blue-600 text-white px-4 py-2 mx-1 rounded-md focus:outline-none flex items-center gap-2"
            >
              <ArrowLeftIcon className="w-3" />
              Previous
            </button>
          )}
          {indexOfLastItem >= filteredPhotos.length ? (
            ""
          ) : (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="bg-blue-600 text-white px-4 py-2 mx-1 rounded-md focus:outline-none flex items-center gap-"
            >
              Next
              <ArrowRightIcon className="w-3" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryPhoto;
