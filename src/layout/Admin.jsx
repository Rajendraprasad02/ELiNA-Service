import React, { useState } from "react";
import AdminNavBar from "../components/adminScreen/AdminNavBar";
import { Outlet, useParams } from "react-router-dom";
import SideBar from "../components/adminScreen/SideBar";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(2);

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen === 2 ? 1 : 2);
  };
  const params = useParams();
  return (
    <>
      <AdminNavBar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <div className="grid grid-cols-12">
        <div
          className={`transition-transform duration-500 ${
            isSidebarOpen === 2 ? "col-span-2" : "col-span-1"
          }`}
        >
          <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div
          className={`transition-all duration-500 ${
            isSidebarOpen === 2 ? "col-span-10" : "col-span-11"
          }`}
        >
          <Outlet context={[isSidebarOpen]} />
        </div>
      </div>
    </>
  );
};

export default Admin;
