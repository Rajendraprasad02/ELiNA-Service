import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogButtons = ({ BlogContent }) => {
  const { id } = useParams(); // Get the current blog ID from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically

  const currentBlogId = Number(id); // Convert the ID to a number
  const lastBlogId = BlogContent.length; // Get the total number of blog posts

  // Function to navigate to the previous blog
  const goToPreviousBlog = () => {
    if (currentBlogId > 1) {
      navigate(`/blog/mainblog/${currentBlogId - 1}`); // Navigate to the previous blog
    }
  };

  // Function to navigate to the next blog
  const goToNextBlog = () => {
    if (currentBlogId < lastBlogId) {
      navigate(`/blog/mainblog/${currentBlogId + 1}`); // Navigate to the next blog
    }
  };

  return (
    <div
      className={`flex ${
        currentBlogId === 1 ? "justify-end" : "justify-between"
      } `}
    >
      {currentBlogId > 1 && (
        <button
          onClick={goToPreviousBlog}
          className="px-4 text-2xl py-2 flex justify-center items-center gap-2"
        >
          <ArrowLeftIcon className="w-5" />
          Previous
        </button>
      )}
      {currentBlogId < lastBlogId && (
        <button
          onClick={goToNextBlog}
          className="px-4 text-2xl py-2 flex justify-center items-center gap-2"
        >
          Next
          <ArrowRightIcon className="w-5" />
        </button>
      )}
    </div>
  );
};

export default BlogButtons;
