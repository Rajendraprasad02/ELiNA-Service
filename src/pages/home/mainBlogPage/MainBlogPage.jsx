import React from "react";
import BlogOne from "../../../components/mainBlogPage/BlogOne";
import BlogTwo from "../../../components/mainBlogPage/BlogTwo";
import BlogThree from "../../../components/mainBlogPage/BlogThree";
import BlogFour from "../../../components/mainBlogPage/BlogFour";
import BlogFive from "../../../components/mainBlogPage/BlogFive";
import BlogEleven from "../../../components/mainBlogPage/BlogEleven";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { useParams, useSearchParams } from "react-router-dom";
import BlogSix from "../../../components/mainBlogPage/BlogSix";
import BlogSeven from "../../../components/mainBlogPage/BlogSeven";
import BlogEight from "../../../components/mainBlogPage/BlogEight";
import BlogNine from "../../../components/mainBlogPage/BlogNine";
import BlogTen from "../../../components/mainBlogPage/BlogTen";
import BlogTwelve from "../../../components/mainBlogPage/BlogTwelve";
import BlogThirteen from "../../../components/mainBlogPage/BlogThirteen";
import BlogFourteen from "../../../components/mainBlogPage/BlogFourteen";

const MainBlogPage = () => {
  const params = useParams();
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
    BlogEleven,
    BlogTwelve,
    BlogThirteen,
    BlogFourteen,
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
