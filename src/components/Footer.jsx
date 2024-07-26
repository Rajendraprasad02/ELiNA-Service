import React from "react";
import elina from "../images/elinaservice.png";

const FooterLi = [
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

const Footer = () => {
  return (
    <div className="HeroBg">
      <div class="px-4 pt-16 sm:max-w-xl content-center md:max-w-full lg:max-w-fit lg:px-24">
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <div class="">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              class="inline-flex items-center"
            >
              <img className="w-10 lg:w-16" src={elina}></img>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                ELiNA Services
              </span>
            </a>
            <div class="mt-6 lg:max-w-lg">
              <p class="text-sm text-gray-600">
                ELiNA was was conceived as a powerful concept of inclusion
                within HLC, and nurtured for a decade through extensive
                knowledge gathering, research, and real-life experiences. Our
                name, "ELiNA," signifies the first ray of sun and embodies our
                mission to be the first ray of hope for neurodiverse families.
              </p>
              <p class="mt-4 text-sm text-gray-600">
                Guided by the visionary leadership of Mr. Naveen Mahesh and Ms.
                Padma Naveen, and fueled by the passion of Ms. Ramalakshmi and
                her team, ELiNA emerged as a separate organisation in 2020. With
                a foundation built on rich learnings, we now serve families and
                organisations, offering transformative programs like SAIL,
                CoMPASS, ANCHOR, and BUOYANCY.
              </p>
            </div>
          </div>
          <div class="space-y-2 text-sm flex justify-start md:justify-center">
            <div>
              <p class="text-base pb-4 font-extrabold md:text-lg tracking-wide text-gray-900">
                Links
              </p>
              <div class="flex flex-col justify-center space-y-4">
                {FooterLi.map((item) => (
                  <a
                    href={item.href}
                    className="transition-colors duration-300 cursor-pointer md:text-base text-gray-600 hover:text-pink-600"
                  >
                    {item.li}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <p class="text-base lg:pb-2 font-extrabold md:text-lg tracking-wide text-gray-900">
              Contacts
            </p>
            <div class="flex">
              <p class="mr-1 text-gray-600 md:text-base">Phone:</p>
              <a
                href="tel:9841050686"
                aria-label="Our phone"
                title="Our phone"
                class="transition-colors duration-300 md:text-base text-gray-600 hover:text-deep-purple-800"
              >
                9841050686
              </a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-600 md:text-base">Email:</p>
              <a
                href="mailto:info@elinaservices.in"
                aria-label="Our email"
                title="Our email"
                class="transition-colors duration-300 md:text-base text-gray-600 hover:text-deep-purple-800"
              >
                info@elinaservices.in{" "}
              </a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-600 md:text-base">Website:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                class="transition-colors duration-300 md:text-base text-gray-600 hover:text-deep-purple-800"
              >
                www.elinaservices.com
              </a>
            </div>
            <div className="lg:pt-5">
              <h1 className="text-base lg:pb-2 font-extrabold md:text-lg tracking-wide text-gray-900">
                Address
              </h1>
              <p className="text-gray-500">
                C1 - 301, Pelican Nest, Creek Street, OMR Chennai Tamil Nadu
                600097 India.
              </p>
            </div>
            <div className="lg:pt-10">
              <span class="text-base font-extrabold md:text-lg tracking-wide text-gray-900">
                Follow Us
              </span>
              <div class="flex items-center mt-1 space-x-3">
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="#1DA1F2"
                    class="h-8 w-8 lg:h-10 lg:w-8"
                  >
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg
                    viewBox="0 0 30 30"
                    fill="#E1306C"
                    class="h-8 w-8 lg:h-10 lg:w-8"
                  >
                    <circle cx="15" cy="15" r="4"></circle>
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="#4267B2"
                    class="h-8 w-8 lg:h-8 lg:w-7"
                  >
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-8 w-8 lg:h-8 lg:w-7"
                    fill="#0077B5"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-9 w-9 lg:h-10 lg:w-10"
                    fill="#FF0000"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* follow us 
          <div>
            <span class="text-base font-extrabold md:text-lg tracking-wide text-gray-900">
              Follow Us
            </span>
            <div class="flex items-center mt-1 space-x-3">
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="#1DA1F2" class="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="#E1306C" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="#4267B2
"
                  class="h-5"
                >
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-5"
                  fill="#0077B5"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-5"
                  fill="#FF0000"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
        <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row lg:pt-24">
          <p class="text-sm text-gray-600">
            ELiNA is a trademark of Vimarshi Solutions Private Limited. (CIN:
            U85500TN2023PTC160587)
            <br />© 2024 ELiNA Services www.elinaservice.com
          </p>
          <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Refund policy
              </a>
            </li>
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="grid grid-cols-2">
      <div className="">
        <h1 className="font-bold">Explore</h1>
        <ul>
          {FooterLi.map((item) => (
            <li>{item.li}</li>
          ))}
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold">Policy</h1>
        <ul>
          {policy.map((item) => (
            <li>{item.li}</li>
          ))}
        </ul>
      </div>
      <div className="">
        <h1 className="font-bold">Policy</h1>
        <ul>
          {policy.map((item) => (
            <li>{item.li}</li>
          ))}
        </ul>
      </div>
    </div> */
}
