import React, { useState } from "react";
import logo from "../images/elinalogoSaturation.png";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import ReCAPTCHA from "react-google-recaptcha";
import steps from "../images/StepsSvg.svg";
const NavBar = () => {
  const [nav, SetNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navEnrollDropDown, SetNavEnrollDropDown] = useState(false);

  const handleClick = () => {
    SetNav(!nav);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavDropdownToggle = () => {
    SetNavEnrollDropDown(!navEnrollDropDown);
  };

  // LoginForm
  // const [heroForm, SetForm] = useState(false);

  // const toggleForm = () => {
  //   SetForm(!heroForm);
  // };
  //|DEBUG| attention: Nav Bar Content
  const NavBarContent = [
    {
      li: "ISMS",
      href: "/isms",
    },
    {
      li: "Gallery",
      href: "/gallery",
    },
    {
      li: "About",
      href: "/about",
    },
    {
      li: "Blog",
      href: "/blog",
    },
    {
      li: "Contact",
      href: "contact",
    },
  ];
  //|DEBUG| attention: Nav Bar Drop Down
  const NavBarDropDownContent = [
    {
      li: "For Parents",
      href: "/parent",
    },
    {
      li: "For Schools",
      href: "/school",
    },
    {
      li: "For Professional",
      href: "/professional",
    },
  ];

  // |DEBUG| attention: Mobile side bar content
  const ResponsiveLi = [
    {
      li: "Elina Service",
      href: "/",
    },
    {
      li: "For Parents",
      href: "/parent",
    },
    {
      li: "For Schools",
      href: "/school",
    },
    {
      li: "For Professional",
      href: "/professional",
    },
    {
      li: "ISMS",
      href: "/isms",
    },
    {
      li: "Gallery",
      href: "/gallery",
    },
    {
      li: "About",
      href: "/about",
    },
    {
      li: "Blog",
      href: "/blog",
    },
    {
      li: "Contact",
      href: "/contact",
    },
  ];

  const NavBarEnrollContent = [
    {
      li: "Parents",
      href: "/parentform",
    },
    {
      li: "Schools",
      href: "/schoolform",
    },
    {
      li: "Service provider",
      href: "/serviceform",
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

            <ul className="lg:gap-6 md:flex gap-6 hidden lg:p-8 lg:items-baseline  text-gray-700">
              <li
                className="relative text-2xl hover:text-pink-600 cursor-pointer font-semibold"
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownToggle}
              >
                <a href="/">
                  <span className="flex lg:gap-1 md:gap-0 text-xs lg:text-lg lg:font-extrabold text-[#11375b]">
                    ELiNA Services <ChevronDownIcon className="w-5" />
                  </span>
                </a>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-100">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-800">
                      {NavBarDropDownContent.map((item) => (
                        <li>
                          <a
                            href={item.href}
                            className="block px-4 lg:text-base py-2 hover:bg-gray-100 dark:hover:bg-indigo-600 font-bold dark:hover:text-white"
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
          <div className="hidden md:flex pr-4 lg:gap-4 md:gap-1 items-center">
            {/* <button className="flex lg:gap-2 items-center w-20 h-6 md:w-[5.5rem] md:text-xs md:h-fit md:font-light lg:h-10 lg:w-fit lg:px-5 lg:font-bold lg:text-base lg:rounded-2xl  bg-gradient-to-br from-indigo-500 to-pink-600 border-none hover:text-white">
              Start your journey now
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white  opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </button> */}

            <button className="gradient border-none rounded-3xl  hover:text-white">
              <a href="/forms">
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
              <ul className="lg:gap-6 md:flex gap-6 hidden lg:p-10 lg:items-baseline  text-gray-700">
                <li
                  className="relative text-2xl hover:text-pink-600 cursor-pointer font-semibold"
                  onMouseEnter={handleNavDropdownToggle}
                  onMouseLeave={handleNavDropdownToggle}
                >
                  <a href="">
                    <span className="flex lg:gap-1 md:gap-0 text-xs lg:text-lg lg:font-extrabold text-pink-600 hover:text-[#11375b]">
                      Enroll <ChevronDownIcon className="w-5" />
                    </span>
                  </a>
                  {navEnrollDropDown && (
                    <div className="absolute left-0 mt-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-100">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-800">
                        {NavBarEnrollContent.map((item) => (
                          <li>
                            <a
                              href={item.href}
                              className="block px-4 lg:text-base py-2 hover:bg-gray-100 dark:hover:bg-indigo-600 font-bold dark:hover:text-white"
                            >
                              {item.li}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>

            <button
              // onClick={toggleForm}
              className="w-20 h-6 lg:w-44 md:text-xs md:font-light lg:h-10 lg:font-bold lg:text-base bg-pink-500 text-white border-pink-500 hover:border-pink-600 hover:text-pink-600"
            >
              Login
            </button>
          </div>
          {/*  //|DEBUG| attention: Drop Down small screen */}
          <div className="md:hidden cursor-pointer" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute bg-indigo-50 w-full py-5 h-fit z-50  md:hidden px-10"
          }
        >
          {ResponsiveLi.map((item) => (
            <a href={item.href}>
              <li className="p-4 hover:text-indigo-500 cursor-pointer font-medium border-b-2 border-zinc-200">
                {item.li}
              </li>
            </a>
          ))}

          <div className="flex gap-6 justify-center pt-6 pb-6">
            <button className="w-32 h-8">Enroll</button>
            <button
              // onClick={toggleForm}
              className="w-32 h-8 bg-transparent text-indigo-600 "
            >
              Login
            </button>
          </div>
          <button className="gradient border-none rounded-3xl  hover:text-white">
            <a href="/forms">
              <span className="p-1  rounded-3xl">
                <span className="text-xs lg:text-xl !bg-gradient-to-r from-[#FCC201] to-[#ffb92d] text-transparent !bg-clip-text">
                  {" "}
                  Get Started
                </span>
                <img src={steps} alt="steps" className="w-8" />
              </span>
            </a>
          </button>
        </ul>
      </div>
      {/* //|DEBUG| attention: Nav Bar Form */}
      {/* {heroForm && (
        <div className="fixed top-0 left-0 w-screen h-fit bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-[90%] h-[100%] lg:w-[50%] lg:h-fit content-center rounded-xl bg-white FormBg md:w-[90%] md:h-[80%] ">
            <form class="p-5 md:p-16 ">
              <XIcon
                onClick={toggleForm}
                className="w-5 lg:pb-0 md:pb-8 ml-[95%] md:ml-[100%] lg:ml-[100%] text-gray-400 cursor-pointer hover:text-gray-900"
              />

              <div class="grid md:grid-cols-2 md:gap-6 items-center">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_parent_name"
                    id="floating_parent_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_parent_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name of the parent/Guardian*
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <label
                    for="countries"
                    class="block mb-2 text-xs md:text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Specify Relationship with child:*
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border-none  border-b-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Select an option</option>
                    <option>Father</option>
                    <option>Mother</option>
                    <option>Guardian</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6 items-center">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_child"
                    id="floating_child"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_child"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name of the child*
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <p className="text-gray-500 text-xs md:text-sm p-2">
                    Child's Gender*
                  </p>
                  <div class="flex items-center mb-4 gap-1">
                    <input
                      id="Gender-option-1"
                      type="radio"
                      name="countries"
                      value="Male"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      checked
                    />
                    <label
                      for="country-option-1"
                      class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                    <input
                      id="Gender-option-2"
                      type="radio"
                      name="countries"
                      value="Female"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      checked
                    />
                    <label
                      for="Gender-option-2"
                      class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div class="relative max-w-sm pb-3">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <p className="text-gray-500">Child's date of birth*</p>
                <input
                  type="date"
                  id="default-datepicker"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (123-456-7890)*
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_school"
                  id="floating_school"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_school"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Child's current school (if attending):
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <div class="relative z-0 w-full mb-5 group">
                  <label
                    for="aboutus"
                    class="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                  >
                    How do you know about us:*
                  </label>
                  <select
                    id="aboutus"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Select an option</option>
                    <option>Elina Website</option>
                    <option>Social Media</option>
                    <option>Through HCL</option>
                    <option>THrough other schools</option>
                    <option>THrough other parents</option>
                    <option>THrough friends</option>
                    <option>THrough my therapists</option>
                    <option>others</option>
                  </select>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <div class="relative z-0 w-full mb-5 group">
                  <textarea
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Reason for contacting us*
                  </label>
                </div>
              </div>
              <ReCAPTCHA
                sitekey="6LceNQYqAAAAANmxHgRcfdU_e8KW_c05MKTOBai3"
                onChange={onChange}
              />
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )} */}
    </>
  );
};

export default NavBar;
