import React, { useState } from "react";
import AdminScreen from "../../../components/adminScreen/AdminScreen";
import SideBar from "../../../components/adminScreen/SideBar";
import AdminNavBar from "../../../components/adminScreen/AdminNavBar";
import Quote from "../../../components/adminScreen/Quote";
import Testimonials from "../../../components/adminScreen/Testimonials";
import { useParams } from "react-router-dom";

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const params = useParams();
  const admin = [Quote, Testimonials];
  return (
    <>
      <AdminScreen />
      <AdminNavBar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* <Quote isSidebarOpen={isSidebarOpen} /> */}
      <Testimonials isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default AdminPage;
