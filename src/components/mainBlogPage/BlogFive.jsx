import React, { useEffect } from "react";
import Comments from "../reuseable/Comments";
import RecentBlog from "../reuseable/RecentBlog";
import BlogContent from "../../utils/blogContent";
import Author from "../reuseable/Author";
import BlogButtons from "../reuseable/BlogButtons";

const BlogFive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <>
        <div className="bgBlog5">
          <div className="lg:h-screen h-fit bg-black-bg">
            <div className="h-screen flex items-center justify-center p-4">
              <Author />
              <h1 className="text-6xl text-white font-bold text-center">
                The Power Of Play
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
              <h1>What does play mean to you as an adult?</h1>
              <p>
                Play is a child's special moment. Play is a precious gift to
                children allowing them to cultivate skills needed for their
                bright future. For children, play is essential for their growth,
                learning, development, and general well-being. They use play as
                a basic and natural method to freely express themselves, learn
                new abilities, and make sense of the environment. To them play
                is more than simply a pastime.
              </p>
            </section>
            <section>
              <h1>Effects of Play</h1>
              <p>
                <span>5 Stages of Play</span>Play not only affects children by
                cognitive development, emotional development, social skills,
                Problem-solving and decision-making, happiness and well-being.
                It helps children in so many more unique ways. Their physical
                development, Innovation and Adaptability, language development,
                imagination and creativity, and stress relief.
              </p>
              <p>
                <span>Physical development:</span>Playing actively increases
                coordination and physical fitness. It supports the growth of
                healthy bones, muscles,and overall physical health.
              </p>
              <p>
                <span>Innovation and Adaptability:</span>Play fosters trying new
                things and thinking outside the box. This way of thinking can
                lead to innovative thinking and adaptation in a variety of
                aspects of life, including professional and personal
                difficulties
              </p>
              <p>
                <span>Language development:</span>Language and communication
                abilities are encouraged through play. Kids learn to express
                themselves, increase their vocabulary, and improve linguistic
                skills through exchanges and dialogues during play.
              </p>
            </section>
            <section>
              <h1>The 5 stages of play</h1>
              <p>
                <span>Imagination and creativity</span>opportunities to think
                creatively and develop original ideas through play. Children can
                create their own world through creative play which promotes
                original thoughts.
              </p>
              <p>
                <span>Stress relief:</span> Children can decompress and release
                tension through play. Participating in fun activities encourages
                relaxation, which can help improve mental health
              </p>
            </section>
            <section>
              <h1>Ways to identify play</h1>
              <div className="flex flex-col gap-10">
                <p>
                  An important point we must note is, play can not be forced. As
                  we can see in the infographic above, they are the different
                  stages of play. There are possibilities that not every child
                  will follow the exact given timeline. During moments like
                  those, give your child their needed space and support and
                  allow them to discover play at their own pace. Below are
                  characteristics of how play can be observed.
                </p>
                <p>
                  Now for children with neurodiversity, their nature of play may
                  be unique and a method we may not have considered. As a
                  guardian, you may have an assumption of how to play with
                  certain toys and objects. When faced upon a moment where the
                  play is completely different, take a step back and observe.
                  How is your child choosing to interact and play? Why is it
                  meaningful? If you would like to play with them, try
                  connecting with them in their method before sharing other ways
                  to play. There is no right or wrong in play.
                </p>
                <p>
                  However, as crucial as it is to give them their needed space,
                  it is essential to pay attention to red flags in play. A
                  method to identify red flags would be to simply observe them
                  and pay attention to the nature of their play. Examples of red
                  flags in play are: Aggressive play, persistently doomed ending
                  in play, strict or constructive play, and fantasy-aversion
                  play.
                </p>
                <p>
                  Coming to a conclusion, playing is not as simple as we all
                  thought. It is quite complex and valuable. We need to
                  recognize that it is a critical factor for the development of
                  children in a variety of ways. There are different
                  characteristics of playing that parents and caregivers can use
                  as reference to be able to easily identify moments of play.
                  There are not only different ways to play but multiple stages
                  too. It is not a one way for all but it is a layout. Finally,
                  play is what gives meaning to children.
                </p>
              </div>
              <BlogButtons BlogContent={BlogContent} />
            </section>
          </div>
        </div>
      </>
      <Comments />
    </>
  );
};

export default BlogFive;
