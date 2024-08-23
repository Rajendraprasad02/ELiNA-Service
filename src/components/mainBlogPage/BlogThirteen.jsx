import React, { useEffect } from "react";
import Author from "../reuseable/Author";
import Comments from "../reuseable/Comments";
import RecentBlog from "../reuseable/RecentBlog";
import BlogContent from "../../utils/blogContent";
import one from "../../images/blog/blog13/one.jpg";

const BlogThirteen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <>
        <div className="bgBlog13">
          <div className="lg:h-screen h-fit bg-black-bg">
            <div className="h-screen flex items-center justify-center p-4">
              <Author />

              <h1 className="text-6xl text-white font-bold text-center">
                LETTING LEARNING FLOURISH
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
              <h1>LETTING LEARNING FLOURISH</h1>
              <p>
                Before we start exploring the nuances of modifications, support
                and accomodations I want to list the objectives I want to
                achieve through today's blog post:
              </p>
              <li>Understand what it means to provide support</li>
              <li>
                What are the differences between accomodation and modifications
              </li>
              <li>Examples of how we can be more inclusive</li>
              <li>
                Why support is so significant and why providing such support is
                NOT unfair to other children.
              </li>
            </section>
            <section>
              <h1>WHY DO CHILDREN NEED SUPPORT</h1>
              <p>
                The key to understanding this is to acknowledge everyone needs
                support and help. As one of my facilitators at Elina put it- It
                is not a suggestion its a right of every student to recieve help
                and enthusiastic support from their teachers, parents and
                mentors. You might have been told from previous experiences that
                help or customised aid is preventing children from growing or
                learning the "harshness" of the real world but this couldn't be
                farther from the truth!
              </p>
              <h1>WHY DO CHILDREN NEED SUPPORT</h1>
              <p>
                Children from all ages whether neurodivergent or neurotypical
                are likely to do better in school if given proper help and have
                had their needs met and taken seriously. There is no positive
                outcome to robbing your children from their BIRTHRIGHT to a
                holistic education but leaving them vulnerable to the
                "harshness" of the real world. For some children this help might
                be as simple as moving a child with glasses to the front desk
                but for other we might need more in depth aid. No matter what
                though they must receive this support to grow as both students
                and children
              </p>
            </section>
            <section>
              <h1>DISTINCTION BETWEEN ACCOMODATIONS AND MODIFICATIONS</h1>
              <li>
                <span>ACCOMODATIONS</span>Definition: Supports that are put into
                place to help a student access the general curriculum. The
                curriculum doesn't change.
              </li>
              <li>
                <span>MODIFICATIONS</span>Definition: Changes in the curriculum,
                based on the student's individual abilities. Modification
                typically the content, the manner a student is assessed and or
                instructional content.
              </li>
            </section>
            <section>
              <h1>Modification and Accomodations</h1>
              <img src={one} />
            </section>
            <section>
              <h1>EXAMPLES</h1>
              <p>
                <span>ACCOMODATION</span>
              </p>
              <li>Preferentially seating a child</li>
              <li>Additional time to complete an assignment.</li>
              <li>
                Present the information to students in a different way
                (visually, orally, etc)
              </li>
              <li>Allowing students to take a test in quieter environments.</li>
              <p>
                <span>MODIFICATION</span>
              </p>
              <li>Reduced amount of work (do only even-numbered problems)</li>
              <li>
                Alternative information or completely different skill or content
              </li>
              <li>
                Adjusting the grading level, for instance, to weighted grading.
              </li>
              <li>Simplifying the vocabulary used</li>
              <p>
                <span>ACCOMODATION</span>
              </p>

              <li>Applying positive reinforcement behavior strategies.</li>
              <li>
                Getting sign language interpreters for students with hearing
                complications.
              </li>
              <li>Offering large-print learning materials.</li>
              <p>
                <span>MODIFICATION</span>
              </p>

              <li>
                Simplifying the lessons that a student takes to increase their
                level of understanding.
              </li>
              <li>Reducing the number of similar questions in a test.</li>
            </section>
            <section>
              <h1>Why additional support is not unfair to other students</h1>
              <p>
                It is imperative that we understand that additional
                accommodations or modifications does NOT mean other students are
                being treated unfairly or given a lack of attention. If
                anything, it is unfair when a student that needs more attention
                and effort is ignored under the guise of supporting a
                merit-based education system when in reality teachers and
                parents are losing out a bright future for that child.
                Educations deserves to be consumed by everyone and additional
                support helps foster good, fair and efficient education!
              </p>
            </section>
            <section>
              <div className="flex flex-col text-left">
                <h1>REFERENCES</h1>
                <li>
                  <a href="https://www.parentcenterhub.org/accommodations/">
                    https://www.parentcenterhub.org/ accommodations/
                  </a>
                </li>
                <li>
                  <a href="http://www.differencebetween.net/language/difference-between-accommodations-and-modifications/">
                    http://www.differencebetween.ne
                    t/language/difference-between- accommodations-and-
                    modifications/
                  </a>
                </li>
                <li>
                  <a href="https://www.behaviorist.com/differences-between-accommodations-and-modifications-in-special-education/">
                    https://www.behaviorist.com/diffe rences-between-
                    accommodations-and- modifications-in-special- education/
                  </a>
                </li>
              </div>
            </section>
          </div>
        </div>
      </>
      <Comments />
    </>
  );
};

export default BlogThirteen;
