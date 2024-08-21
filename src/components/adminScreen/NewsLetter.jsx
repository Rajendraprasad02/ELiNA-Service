import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-[40%]">
          <h1 className="text-center text-6xl font-bold pb-5">News Letter</h1>
          <form className="flex flex-col gap-5">
            <>
              <label className="text-lg font-medium text-gray-700">
                Newsletter Title
              </label>
              <input
                id="newsletterTitle"
                className="rounded-xl"
                placeholder="Enter the Newsletter Title"
                type="text"
                // value={authorName}
                // onChange={(e) => setAuthorName(e.target.value)}
              />
            </>
            <>
              <label className="text-lg font-medium text-gray-700">
                Newsletter content
              </label>
              <textarea
                id="newsletterContent"
                className="rounded-xl"
                placeholder="Enter the Newsletter content"
                type="text"
                // value={quote}
                // onChange={(e) => setQuote(e.target.value)}
              />
            </>
            <>
              <label className="text-lg font-medium text-gray-700">Quote</label>
              <input
                id="quote"
                className="rounded-xl"
                placeholder="Enter the quote"
                type="file"
                // value={quote}
                // onChange={(e) => setQuote(e.target.value)}
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

export default NewsLetter;
