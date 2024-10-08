import React, { useEffect } from "react";
import Comments from "../reuseable/Comments";
import RecentBlog from "../reuseable/RecentBlog";
import BlogContent from "../../utils/blogContent";
import Author from "../reuseable/Author";

const BlogEight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <>
        <div className="bgBlog8">
          <div className="lg:h-screen h-fit bg-black-bg">
            <div className="h-screen flex items-center justify-center p-4">
              <Author />
              <h1 className="text-6xl text-white font-bold text-center">
                Gut-Brain Connection
              </h1>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="lg:ml-[10%] mx-[1%] flex flex-row-reverse">
          <RecentBlog BlogContent={BlogContent} />
          <div className="blog2 md:w-[80%]">
            <section>
              <h1>Gut-Our Second Brain</h1>
              <div className="flex flex-col md:flex-row">
                <img src="" />
                <p>
                  Why is the gut known as our second brain? We have more
                  neurotransmitters in the gut than the entire body. And even
                  serotonin is produced in the guts. Improper care can cause an
                  imbalance in serotonin and other neurotransmitters which in
                  turn, significantly impacts mood, sleep and behaviours.
                </p>
              </div>
            </section>
            <section>
              <h1>Most important things for gut health</h1>
              <div className="flex flex-col md:flex-row-reverse">
                <img src="" />
                <p>
                  Why is the gut known as our second brain? We have more
                  neurotransmitters in the gut than the entire body. And even
                  serotonin is produced in the guts. Improper care can cause an
                  imbalance in serotonin and other neurotransmitters which in
                  turn, significantly impacts mood, sleep and behaviours.
                </p>
              </div>
            </section>
            <section>
              <h1>With Neurodiversity</h1>
              <p>
                Gastrointestinal (GI) symptoms are common in autistic
                individuals. This affects their daily lives and those of their
                families. Several studies have shown the gut-brain axis or the
                multiple biochemical signaling pathways that exist between the
                GI tract and the central nervous system have a potential link to
                autism spectrum disorder.
              </p>
            </section>
            <section>
              <h1>Support Neurodivergent</h1>
              <p>
                Parents can support the child by giving them a safe space to
                freely be themselves and meeting their unique needs. Giving the
                child time to explore their interests can help the parent
                provide better care and plan activities that suit their sensory
                preferences.
              </p>
              <p className="py-5">For example,</p>
              <li>
                If the child needs plenty of physical activity, pick an area
                where they can be free to run, jump and play without harming
                themselves or others.
              </li>
              <li>
                If the child is sensitive to sounds or light (and more), try to
                use dimmable lighting or reduce the sounds of the TV or music.
                In the end, there is nothing wrong with having a child or a
                person you know who is neurodivergent. Be supportive and adjust
                to their needs.
              </li>
            </section>
          </div>
        </div>
      </>
      <Comments />
    </>
  );
};

export default BlogEight;
