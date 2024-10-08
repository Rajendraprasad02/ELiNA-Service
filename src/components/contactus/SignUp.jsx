import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="bg-blue-600 w-[90%] lg:w-[90%] items-center mx-auto rounded-3xl blockquote m-5 animationHero">
        <div className="flex flex-col gap-10 py-10 w-full">
          <h1 className="text-4xl lg:text-6xl text-white font-black text-center ">
            Sign Up for our Newsletter
          </h1>
          <form class="md:max-w-sm max-w-xl md:mx-auto">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="email-address-icon"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-96 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
              />
            </div>
          </form>
          <button className="w-[60%] md:w-[10%] mx-auto py-2 text-xl bg-white text-pink-600 border-white hover:border-white hover:text-white">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
