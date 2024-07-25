import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const GalleryPhoto = ({ GalleryPicContent, picButtons }) => {
  // For Gallery photo pagination
  const [currentCategory, setCurrentCategory] = useState("f2f");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Number of items per page

  // For Gallery buttons pagination
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);
  const [buttonsPerPage] = useState(5); // Number of buttons per page

  // Filter photos based on category
  const filteredPhotos =
    currentCategory === "all"
      ? GalleryPicContent
      : GalleryPicContent.filter((img) => img.category === currentCategory);

  // Pagination calculations for photos
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPhotos.slice(indexOfFirstItem, indexOfLastItem);

  // Change page for photos
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Change page for buttons carousel
  const prevButton = () => {
    if (firstIndex > 0) {
      setFirstIndex(firstIndex - 1);
      setLastIndex(lastIndex - 1);
    }
  };

  const nextButton = () => {
    if (lastIndex < picButtons.length) {
      setFirstIndex(firstIndex + 1);
      setLastIndex(lastIndex + 1);
    }
  };

  return (
    <>
      <div id="galleryScroll" className="HeroBg2">
        {/* Gallery Title */}
        <div className="">
          <h1 className="flex lg:pt-20 text-center justify-center text-4xl md:text-6xl lg:text-7xl font-extrabold text-indigo-600">
            Wall Of Love
          </h1>
        </div>

        {/* Category Buttons */}
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <div className="group relative inline-block">
            <p
              onClick={prevButton}
              className={`${
                firstIndex === 0 ? "hidden" : ""
              } cursor-pointer text-black mx-1 flex items-center gap-2`}
            >
              <ChevronLeftIcon className="w-5" />
            </p>
            <p className="text-xs invisible items-center group-hover:visible opacity-0 group-hover:opacity-100 transition absolute bottom-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap bg-black text-white p-1 rounded-md">
              Previous
            </p>
          </div>
          {picButtons.slice(firstIndex, lastIndex).map((item, index) => (
            <>
              <button
                key={index}
                onClick={() => setCurrentCategory(item.buttonOnClick)}
                type="button"
                className={`${
                  currentCategory === item.buttonOnClick
                    ? "text-blue-700 border-blue-700"
                    : ""
                } text-gray-900 border ease-in-out border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-lg font-black px-5 py-2 text-center me-3 mb-3 lg:mb-0 dark:text-white dark:focus:ring-gray-800`}
              >
                {item.buttonCategory}
              </button>
            </>
          ))}
          <div className="group relative inline-block">
            <p
              onClick={nextButton}
              className={`${
                lastIndex >= picButtons.length ? "hidden" : ""
              } cursor-pointer text-black  flex items-center gap-2`}
            >
              <ChevronRightIcon className="w-5" />
            </p>
            <p className="text-xs invisible items-center group-hover:visible opacity-0 group-hover:opacity-100 transition absolute bottom-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap bg-black text-white p-1 rounded-md">
              Next
            </p>
          </div>
          <button
            onClick={() => setCurrentCategory("all")}
            type="button"
            className={`${
              currentCategory === "all" ? "text-blue-700 border-blue-700" : ""
            } text-gray-900 border border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-lg font-black px-5 py-2 text-center me-3 mb-3 lg:mb-0 dark:text-white dark:focus:ring-gray-800`}
          >
            All Photos
          </button>
        </div>
        {/* Gallery Images */}
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

        {/* Pagination controls for gallery images */}
        <div className="flex justify-center mt-4">
          {currentPage === 1 ? (
            ""
          ) : (
            <button
              onClick={() => paginate(currentPage - 1)}
              className="bg-blue-600 text-white px-4 py-2 mx-1 rounded-md focus:outline-none flex items-center gap-2"
            >
              <ChevronLeftIcon className="w-3" />
              Previous
            </button>
          )}
          {indexOfLastItem >= filteredPhotos.length ? (
            ""
          ) : (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="bg-blue-600 text-white px-4 py-2 mx-1 rounded-md focus:outline-none flex items-center gap-2"
            >
              Next
              <ChevronRightIcon className="w-3" />
            </button>
          )}
        </div>

        {/* Pagination controls for category buttons carousel */}
      </div>
    </>
  );
};

export default GalleryPhoto;
