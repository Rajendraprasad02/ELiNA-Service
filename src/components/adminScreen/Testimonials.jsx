import React from "react";
import { useOutletContext } from "react-router-dom";

const Testimonials = () => {
  const [isSidebarOpen] = useOutletContext();
  return (
    <div
      className={`flex  mt-20 font-bold text-4xl  h-screen transition-all duration-300   ${
        isSidebarOpen
          ? "ml-64 w-[calc(100%-16rem)]"
          : "ml-20 w-[calc(100%-5rem)]"
      }`}
    >
      <div className="w-fit mx-auto">
        <h1 className="text-center">Testimonials</h1>
        <form>
          <div className="flex flex-col ">
            <label for="testimonial" className="text-xl">
              Testimonial
            </label>
            <textarea
              id="testimonial"
              placeholder="Enter testimonial"
              className="rounded-xl"
            />
            <label for="user" className="text-xl">
              User name
            </label>
            <input
              type="text"
              id="user"
              placeholder="Enter user name"
              className="rounded-xl"
            />
          </div>
          <button className="text-lg px-5 w-full">Add testimonial</button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
