import React, { useEffect } from "react";
import Comments from "../reuseable/Comments";
import BlogContent from "../../utils/blogContent";
import RecentBlog from "../reuseable/RecentBlog";
import Author from "../reuseable/Author";

const BlogSeven = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <>
        <div className="bgBlog7">
          <div className="lg:h-screen h-fit bg-black-bg">
            <div className="h-screen flex items-center justify-center p-4">
              <Author />

              <h1 className="text-6xl text-white font-bold text-center">
                Nurturing reading habits in children
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
              <h1>Reading Habits</h1>
              <p>
                In a world taken over by technologies, having a balance is
                crucial for a healthy life. Especially the balance between
                technology and reading. As times change, children’s interests
                change, but if they are exposed to good habits like reading,
                they would have a good start to a balance with technology.
              </p>
            </section>
            <section>
              <h1>Importance of reading habits:</h1>
              <p>Strategies to support the habit of reading</p>
              <li>
                <span>If your child finds reading boring, </span>they are most
                likely to not continue reading. Reluctant readers will be more
                interested if the subject of the book is to their liking. So let
                your child choose what they want to read.{" "}
              </li>
              <li>
                <span>If reading is difficult for your child, </span>take it
                slowly. Let your child read at their own pace. Start with easy
                and basic books and slowly move to the next level.
              </li>
              <li>
                <span>Set an example:</span>Children tend to copy the behavior
                around them. So reading in front of your child encourages your
                child to join you and start reading on their own. Also, talking
                to your child about your experiences with books helps them
                understand the value of reading.
              </li>
              <li>
                <span>Physical conditions:</span>If your child squints or
                struggles to read letters, check their vision to make sure they
                have any sort of obstacle. Get them what they need to help with
                the issue.
              </li>
            </section>
            <section>
              <h1>Neurodiversity</h1>
              <p>
                Children who have neurological differences that affect their
                reading experiences.
              </p>
              <li>
                Dyslexia: difficulty with reading, spelling, and decoding words
              </li>
              <li>
                ADHD: trouble sustaining attention and staying focused while
                reading
              </li>
              <li>
                Autism Spectrum Disorder: Challenges with social communication
                and understanding abstract language
              </li>
              <li>
                Sensory Processing Disorder: Sensitivity to sensory stimuli that
                can affect reading comprehension
              </li>
            </section>
            <section>
              <h1>Strategies for Supporting Neurodivergent Readers</h1>
              <li>
                Neurodivergent readers often benefit from engaging multiple
                senses while learning. Incorporate activities that involve
                touch, movement, and visual aids to enhance comprehension and
                retention
              </li>
              <li>
                Assistive technology tools can be crucial for your child. Screen
                readers, text-to-speech software, and speech recognition tools
                can help overcome reading barriers and improve reading.
              </li>
              <li>
                Minimize distractions, provide clear instructions, and establish
                consistent routines to support reading success. Creating a
                structured reading environment can help your child.
              </li>
              <li>
                Recognising the strengths and interests of your child can boost
                their confidence and motivation.
              </li>
              <p>
                Understanding the unique needs of neurodivergent readers is
                essential for creating inclusive and supportive reading
                environments. Digital media has its benefits, and instilling a
                reading habit might seem troublesome, but its effects are
                boundless. Books enrich children’s vocabulary, creativity,
                concentration, interactions, etc. And a developed cognition
                gives your child better opportunities to be themselves and still
                be good at many useful life skills with vocabulary, studies,
                behaviour, emotions, etc. Work with your child’s needs and
                reluctance and slowly instill the habit of reading.
              </p>
            </section>
          </div>
        </div>
      </>
      <Comments />
    </>
  );
};

export default BlogSeven;
