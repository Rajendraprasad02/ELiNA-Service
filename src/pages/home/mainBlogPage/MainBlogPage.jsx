import React from "react";
import BlogOne from "../../../components/mainBlogPage/BlogOne";
import BlogTwo from "../../../components/mainBlogPage/BlogTwo";
import BlogThree from "../../../components/mainBlogPage/BlogThree";
import BlogFour from "../../../components/mainBlogPage/BlogFour";
import BlogFive from "../../../components/mainBlogPage/BlogFive";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { useParams, useSearchParams } from "react-router-dom";
import BlogSix from "../../../components/mainBlogPage/BlogSix";
import BlogSeven from "../../../components/mainBlogPage/BlogSeven";
import BlogEight from "../../../components/mainBlogPage/BlogEight";
import BlogNine from "../../../components/mainBlogPage/BlogNine";
import BlogTen from "../../../components/mainBlogPage/BlogTen";

const MainBlogPage = () => {
  const params = useParams();

  console.log(params);
  const blog = [
    BlogOne,
    BlogTwo,
    BlogThree,
    BlogFour,
    BlogFive,
    BlogSix,
    BlogSeven,
    BlogEight,
    BlogNine,
    BlogTen,
  ];

  return (
    <>
      <NavBar />
      {blog.map((elem, index) => {
        if (blog.length < Number(params.id)) alert("error");
        if (index + 1 === Number(params.id)) return React.createElement(elem);
      })}
      <Footer />
    </>
  );
};

export default MainBlogPage;
