import React, { useState } from "react";
import AdminNavBar from "../components/adminScreen/AdminNavBar";
import { Outlet, useParams } from "react-router-dom";
import SideBar from "../components/adminScreen/SideBar";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(3);

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen === 3 ? 2 : 3);
  };
  const params = useParams();
  return (
    <>
      <AdminNavBar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <div className={`grid grid-cols-12`}>
        <div className={`col-span-${isSidebarOpen} `}>
          <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className={`col-span-${isSidebarOpen === 3 ? 9 : 10}`}>
          <Outlet context={[isSidebarOpen]} />
        </div>
      </div>
    </>
  );
};

export default Admin;
