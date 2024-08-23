import React from "react";

const Quote = ({ isSidebarOpen }) => {
  return (
    <>
      <div className="w-fit mx-auto">
        <h1 className="text-center">Quote</h1>
        <form>
          <div className="flex flex-col">
            <label for="author" className="text-xl">
              Author
            </label>
            <input
              id="author"
              type="text"
              placeholder="Enter author"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <label for="quote" className="text-xl">
              Quote
            </label>
            <textarea
              id="quote"
              placeholder="Enter quote"
              className="rounded-xl"
            />
          </div>
          <button className="text-xl mx-auto px-5">Post</button>
        </form>
      </div>
    </>
  );
};

export default Quote;
