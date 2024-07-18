import React from "react";
import MainBlog from "../../../components/mainBlogPage/MainBlog";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { useParams, useSearchParams } from "react-router-dom";

const MainBlogPage = () => {
  const params = useParams();

  return (
    <>
      <NavBar />
      <MainBlog />
      <Footer />
    </>
  );
};

export default MainBlogPage;
