import React from "react";

const Testimonials = ({ isSidebarOpen }) => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-[40%]">
          <h1 className="text-center text-6xl font-bold p-10">Testimonials</h1>
          <form className="flex flex-col gap-5">
            <>
              <label className="text-lg font-medium text-gray-700">
                User Name
              </label>
              <input
                className="rounded-xl"
                placeholder="Enter the user name"
                type="text"
              />
            </>
            <>
              <label className="text-lg font-medium text-gray-700">
                Feedback
              </label>
              <textarea
                className="rounded-xl"
                placeholder="Enter the feedback"
                type="text"
              />
            </>
            <button className="border-blue-600 bg-blue-600 hover:border-blue-600 hover:bg-transparent hover:text-blue-600 py-2 text-xl rounded-xl">
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
