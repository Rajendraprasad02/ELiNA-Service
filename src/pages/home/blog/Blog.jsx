import React, { useEffect } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ElinaBlog from "../../../components/blog/ElinaBlog";

import BlogHero from "../../../components/blog/BlogHero";
import RecentBlog from "../../../components/reuseable/RecentBlog";
import BlogContent from "../../../utils/blogContent";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BlogHero />
      <ElinaBlog BlogContent={BlogContent} />
    </>
  );
};

export default Blog;
