import React from "react";
import SideBar from "./SideBar";
import logo from "../../images/elinalogoSaturation.png";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuAlt1Icon,
} from "@heroicons/react/outline";

const AdminNavBar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <nav class="block top-0 z-50 w-full h-[11vh]  bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <div>
                {isOpen === 2 ? (
                  <ChevronLeftIcon
                    onClick={toggleSidebar}
                    className=" flex items-center cursor-pointer text-gray-500 rounded-md w-5"
                  />
                ) : (
                  <ChevronRightIcon
                    onClick={toggleSidebar}
                    className=" flex items-center cursor-pointer text-gray-500 rounded-md w-5"
                  />
                )}
              </div>
              <a href="" class="flex ms-2 md:me-24">
                <img src={logo} class="h-14 me-3" alt="FlowBite Logo" />
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Elina service
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavBar;
