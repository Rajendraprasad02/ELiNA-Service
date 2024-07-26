import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import img from "../../images/IsmsRehabit.jpg";
const BlogContent = () => {
  return (
    <>
      <NavBar />
      <>
        <div className="">
          <div className="text-center flex justify-center h-screen items-center">
            <h1 className="text-6xl">Equity in education</h1>
          </div>
          <div className="w-full">
            <img className="mx-auto w-[70%]" src={img} />
            <div className="w-[70%] mx-auto">
              <h1 className="text-3xl font-bold">
                School accommodations and modifications
              </h1>
              <p className="text-lg">
                In the fascinating journey of parenthood, there is a remarkable
                phase that lays the foundation for a child's future: the early
                years. These formative years are akin to the first strokes on a
                canvas, shaping the intricate patterns of a child's life.
                Parental engagement during this period is not just beneficial
                but pivotal, especially when considering the context of
                neurodivergence. Neurodivergence, with its array of unique
                patterns and potentials, adds an extra layer of significance to
                the role of parents in a child's early development. Let's delve
                into the reasons why parental engagement is critical in these
                early years and explore the connection between nurturing
                developmental milestones and paving the path for future success.
              </p>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
};

export default BlogContent;
