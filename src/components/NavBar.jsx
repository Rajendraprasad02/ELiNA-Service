import React, { useState } from "react";
// import logo from "../images/elinalogoSaturation.png";
import logo from "../images/7.png";

import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";
import ReCAPTCHA from "react-google-recaptcha";
import steps from "../images/StepsSvg.svg";
import google from "../images/google-icon.svg";
import face from "../images/facebook-icon.svg";
const NavBar = () => {
  const [nav, SetNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navEnrollDropDown, SetNavEnrollDropDown] = useState(false);
  const [phoneEnrollDropDown, SetPhoneEnrollDropDown] = useState(false);
  const [openForgetPassword, setOpenForgetPassword] = useState(false);
  const [side, setSide] = useState(false);
  const handleClick = () => {
    SetNav(!nav);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavDropdownToggle = () => {
    SetNavEnrollDropDown(!navEnrollDropDown);
  };

  const toggleDropDownForms = () => {
    SetPhoneEnrollDropDown(!phoneEnrollDropDown);
  };

  const toggleForgetPassword = () => {
    setOpenForgetPassword(!openForgetPassword);
  };

  const handleSideToggle = () => {
    setSide(!side);
  };

  //LoginForm;
  const [heroForm, SetForm] = useState(false);

  const toggleForm = () => {
    SetForm(!heroForm);
  };
  //|DEBUG| attention: Nav Bar Content
  const NavBarContent = [
    {
      li: "ISMS",
      href: "/#/isms",
    },
    {
      li: "Gallery",
      href: "/#/gallery",
    },
    {
      li: "About",
      href: "/#/about",
    },
    {
      li: "Blog",
      href: "/#/blog",
    },
    {
      li: "FAQ",
      href: "/#/contact",
    },
    {
      li: "Contact",
      href: "/#/contact",
    },
  ];
  //|DEBUG| attention: Nav Bar Drop Down
  const NavBarDropDownContent = [
    {
      li: "For Parents",
      href: "/#/parent",
    },
    {
      li: "For Schools",
      href: "/#/school",
    },
    {
      li: "For Professional",
      href: "/#/professional",
    },
  ];
  //|DEBUG| attention: Nav Bar Drop Down
  const MultiLevelDropDown = [
    {
      li: "Beyond 8",
      href: "",
    },
    {
      li: "HLC",
      href: "",
    },

    {
      li: "SSN",
      href: "",
    },
    {
      li: "Others",
      href: "",
    },
  ];

  // |DEBUG| attention: Mobile side bar content
  const ResponsiveLi = [
    {
      li: "Elina Service",
      href: "/#/",
    },
    {
      li: "For Parents",
      href: "/#/parent",
    },
    {
      li: "For Schools",
      href: "/#/school",
    },
    {
      li: "For Professional",
      href: "/#/professional",
    },
    {
      li: "ISMS",
      href: "/#/isms",
    },
    {
      li: "Gallery",
      href: "/#/gallery",
    },
    {
      li: "About",
      href: "/#/about",
    },
    {
      li: "Blog",
      href: "/#/blog",
    },
    {
      li: "Contact",
      href: "/#/contact",
    },
  ];

  const NavBarEnrollContent = [
    {
      li: "Parents",
      href: "/#/parent-form",
    },
    {
      li: "Schools",
      href: "/#/school-form",
    },
    {
      li: "Service provider",
      href: "/#/service-form",
    },
    {
      li: "Interns",
      href: "/#/intern-form",
    },
  ];
  return (
    <>
      <div className="relative h-[20%]">
        <div className="flex justify-center md:justify-between items-center lg:px-10 py-3 navBg">
          <div className="md:flex md:items-center">
            <a href="/">
              <img className="w-[20%] md:w-24" src={logo} alt=""></img>
            </a>

            <ul className="lg:gap-6 md:flex gap-4 hidden lg:p-8 md:items-baseline  text-gray-700">
              <li
                className="relative text-2xl  hover:text-pink-600 cursor-pointer font-semibold"
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownToggle}
              >
                <a href="/">
                  <span className="flex lg:gap-1 md:gap-0 text-xs lg:text-lg md:font-extrabold text-[#11375b]">
                    ELiNA Services <ChevronDownIcon className="w-3 lg:w-5" />
                  </span>
                </a>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-100">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-800">
                      {NavBarDropDownContent.map((item) => (
                        <li>
                          <a
                            href={item.href}
                            className="block px-4 lg:text-base py-2 hover:bg-gray-200 dark:hover:bg-indigo-600 font-bold dark:hover:text-white"
                          >
                            {item.li}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              {NavBarContent.map((item) => (
                <li>
                  <a
                    href={item.href}
                    className="text-xs hover:text-pink-600 text-[#11375b]
                    cursor-pointer font-extrabold lg:text-lg"
                  >
                    {item.li}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex lg:pr-4  md:gap-1 items-center">
            {/* <button className="flex lg:gap-2 items-center w-20 h-6 md:w-[5.5rem] md:text-xs md:h-fit md:font-light lg:h-10 lg:w-fit lg:px-5 lg:font-bold lg:text-base lg:rounded-2xl  bg-gradient-to-br from-indigo-500 to-pink-600 border-none hover:text-white">
              Start your journey now
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white  opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </button> */}

            <button className="gradient border-none rounded-3xl  hover:text-white">
              <a href="/#/get-started-form">
                <span className="p-1 rounded-3xl">
                  <span className="text-xs lg:text-xl !bg-gradient-to-r from-[#FCC201] to-[#ffb92d] text-transparent !bg-clip-text">
                    {" "}
                    Get Started
                  </span>
                  <img src={steps} alt="steps" className="w-8" />
                </span>
              </a>
            </button>
            {/* <button className="gradient border-none rounded-3xl  hover:text-white">
              <span className="p-1 rounded-3xl">
                <span className="!bg-gradient-to-r from-[#FCC201] to-[#b7841c] text-transparent !bg-clip-text">
                  {" "}
                  Start your journey
                </span>
                <img
                  src={steps}
                  alt="steps"
                  className="w-5 stepsGradient !bg-gradient-to-r from-[#FCC201] to-[#ba8314]"
                />
              </span>
            </button> */}

            {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg border-2 bg-pink-600 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Purple to pink
              </span>
            </button> */}
            <div className="">
              <ul className="lg:gap-6 md:flex gap-6 hidden  lg:items-baseline  text-gray-700">
                <li
                  className="relative text-2xl hover:text-pink-600 cursor-pointer font-semibold"
                  onMouseEnter={handleNavDropdownToggle}
                  onMouseLeave={handleNavDropdownToggle}
                >
                  <button
                    onClick={handleNavDropdownToggle}
                    className="flex items-center justify-center w-16  lg:w-32 lg:p-[0.35rem] p-1 lg:gap-2 md:gap-0 text-xs lg:text-lg lg:font-extrabold bg-pink-500 text-white hover:text-pink-600 hover:bg-white hover:border-pink-600 border-pink-500"
                  >
                    Enroll <ChevronDownIcon className="w-3 lg:w-5" />
                  </button>
                  {navEnrollDropDown && (
                    <div className="absolute  -left-12 md:left-10 lg:right-0 transform -translate-x-1/2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-100">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-800 relative">
                        <li
                          className="relative"
                          onMouseEnter={handleSideToggle}
                          onMouseLeave={handleSideToggle}
                        >
                          <a
                            href="/#/parent-form"
                            className="block relative px-4 lg:text-base py-2 hover:bg-gray-200 dark:hover:bg-indigo-600 font-bold dark:hover:text-white"
                          >
                            <div className="flex justify-between items-center">
                              <div className="mr-5">
                                <ChevronLeftIcon className="w-4" />
                              </div>
                              Parents
                            </div>
                          </a>
                          {side && (
                            <ul className="absolute right-[100%] top-0 flex flex-col w-44 justify-center transform  items-center rounded-lg shadow-lg bg-white mt-2">
                              {MultiLevelDropDown.map((item) => (
                                <li className="px-4 lg:text-base py-2 w-full flex justify-center hover:bg-gray-200 dark:hover:bg-indigo-600 font-bold dark:hover:text-white">
                                  {item.li}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>

                        {NavBarEnrollContent.slice(1).map((item) => (
                          <li>
                            <a
                              href={item.href}
                              className={`${
                                item.li === "parents" && ""
                              } block px-4 lg:text-base py-2 hover:bg-gray-200 dark:hover:bg-indigo-600 font-bold dark:hover:text-white`}
                            >
                              <div className="flex justify-end">{item.li}</div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
              {/* <p>
                {MultiLevelDropDown.map((item) => (
                  <a className="absolute  top-1 left-1">{item.li}</a>
                ))}
              </p> */}
            </div>

            <button
              onClick={toggleForm}
              className="w-20 h-6 lg:w-44 md:text-xs md:font-light lg:h-10 lg:font-bold lg:text-base bg-pink-500 text-white border-pink-500 hover:border-pink-600 hover:text-pink-600"
            >
              Login
            </button>
          </div>
          {/*  //|DEBUG| attention: Drop Down small screen */}
          <div className="md:hidden cursor-pointer" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
          {/* //|DEBUG| Forget password  */}
          {/* <div className="">
            {openForgetPassword && (
              <>
                <ArrowLeftIcon className="w-5" />
                <div className="">
                  <form action="">
                    <div class="relative z-0 w-full mb-5 group">
                      
                    </div>
                  </form>
                </div>
              </>
            )}
          </div> */}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute bg-indigo-50 w-full py-5 h-fit z-50  md:hidden px-10"
          }
        >
          <div className=" flex gap-6 justify-center pt-6 pb-6">
            <button className="gradient border-none rounded-3xl  hover:text-white">
              <a href="/#/get-started-form">
                <span className="p-1  rounded-3xl">
                  <span className="text-xs lg:text-xl !bg-gradient-to-r from-[#FCC201] to-[#ffb92d] text-transparent !bg-clip-text">
                    {" "}
                    Get Started
                  </span>
                  <img src={steps} alt="steps" className="w-8" />
                </span>
              </a>
            </button>

            <button
              onClick={toggleForm}
              className="w-32 h-8 bg-transparent text-indigo-600 "
            >
              Login
            </button>
          </div>
          <p
            onClick={toggleDropDownForms}
            className="p-4 w-32 h-8 cursor-pointer flex items-center font-black text-xl"
          >
            Enroll <ChevronDownIcon className="w-5" />
          </p>
          {/* {toggleDropDownForms && (
            <ul className="">
              <li>{item.li}</li>
            </ul>
          )} */}
          {phoneEnrollDropDown && (
            <ul>
              {NavBarEnrollContent.map((item) => (
                <li
                  key={item.href}
                  className="p-4  hover:text-indigo-500 cursor-pointer font-black border-b-2 border-zinc-200 text-blue-600 "
                >
                  <a className="" href={item.href}>
                    {item.li}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {ResponsiveLi.map((item) => (
            <a href={item.href}>
              <li className="p-4 hover:text-indigo-500 cursor-pointer font-medium border-b-2 border-zinc-200">
                {item.li}
              </li>
            </a>
          ))}
        </ul>
      </div>
      {/* //|DEBUG| attention: Nav Bar Form */}
      {heroForm && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-[90%] h-fit lg:w-[50%] lg:h-fit content-center rounded-xl  FormBg  md:w-[90%] md:h-fit ">
            <form class="p-5 md:px-16 relative">
              {openForgetPassword ? (
                <ArrowLeftIcon
                  onClick={toggleForgetPassword}
                  className="absolute text-pink-600 top-0 left-0 m-5 w-5 cursor-pointer hover:text-gray-900"
                />
              ) : (
                <XIcon
                  onClick={toggleForm}
                  className="absolute w-5 right-0 top-0 m-5 text-pink-600 cursor-pointer hover:text-gray-900"
                />
              )}
              {openForgetPassword ? (
                <>
                  <div className="px-14 py-16">
                    <div className="flex flex-col gap-12">
                      <div className="">
                        <h1 className="text-4xl font-bold">
                          Forgot your password?
                        </h1>
                        <p className="text-base">
                          Please enter the email address you'd like your
                          password reset information sent to
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <label className="font-bold" for="forgetEmail">
                          Enter email address
                        </label>
                        <input to="forgetEmail" id="forgetEmail" type="email" />
                      </div>
                      <button className="py-3 text-xl  bg-pink-600 text-white font-bold border-pink-600 hover:text-pink-600 hover:bg-transparent hover:border-pink-600 rounded-lg">
                        Send reset request link
                      </button>
                      <p
                        onClick={toggleForgetPassword}
                        className="underline font-bold text-blue-700 cursor-pointer flex justify-center"
                      >
                        Back to login
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex  justify-center py-[20%]">
                    <div className="w-1/2 flex justify-center items-center">
                      {/* <div className="w-fit flex flex-col gap-5 lg:gap-10">
                        <p className="font-bold">Or login with :</p>
                        <button className="flex gap-3 items-center text-blue-700 bg-gray-100 border-none shadow-md rounded-xl    font-normal text-xs lg:text-sm  sm:w-auto px-5 py-2.5 text-center">
                          <img className="w-5" src={google} />
                          <span className="">
                            Sign in with{" "}
                            <span className="font-bold">Google</span>
                          </span>
                        </button>
                        <button className="flex gap-3 items-center text-blue-700 bg-gray-100 border-none shadow-md rounded-xl    font-normal text-xs  lg:text-sm  sm:w-auto px-5 py-2.5 text-center">
                          <img className="w-5" src={face} />
                          <span className="">
                            Sign in with{" "}
                            <span className="font-bold">Facebook</span>
                          </span>
                        </button>
                      </div> */}
                      <img className="w-1/2" src={logo} />
                    </div>
                    <div class="flex w-1/2 flex-col md:gap-6 items-center">
                      <div class="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          name="floating_parent_name"
                          id="floating_parent_name"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_parent_name"
                          class="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email
                        </label>
                      </div>
                      <div class="relative z-0 w-full mb-5 group">
                        <input
                          type="password"
                          name="floating_parent_name"
                          id="floating_parent_name"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_parent_name"
                          class="peer-focus:font-medium absolute text-sm text-gray-600  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          password
                        </label>
                        <button className="bg-pink-600 text-white font-bold border-pink-600 hover:text-pink-600 hover:bg-transparent hover:border-pink-600 rounded-lg w-full py-1 lg:py-2 mt-5 lg:mt-10">
                          Login
                        </button>
                        <p
                          onClick={() =>
                            setOpenForgetPassword(!openForgetPassword)
                          }
                          className="py-[1%] cursor-pointer text-xs lg:text-sm font-bold text-gray-600 hover:text-gray-800 underline"
                        >
                          Forget Password?
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* <ReCAPTCHA
                sitekey="6LceNQYqAAAAANmxHgRcfdU_e8KW_c05MKTOBai3"
                // onChange={onChange}
              /> */}
              {/* <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button> */}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
