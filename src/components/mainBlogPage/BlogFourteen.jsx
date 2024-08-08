import React, { useEffect } from "react";
import Author from "../reuseable/Author";
import RecentBlog from "../reuseable/RecentBlog";
import BlogContent from "../../utils/blogContent";
import Comments from "../reuseable/Comments";
import one from "../../images/blog/blog14/one.jpg";
import two from "../../images/blog/blog14/two.jpg";

const BlogFourteen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <>
        <div className="bgBlog14">
          <div className="lg:h-screen h-fit bg-black-bg">
            <div className="h-screen flex items-center justify-center p-4">
              <Author />

              <h1 className="text-6xl text-white font-bold text-center">
                Equity In Education
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
              <h1>Introduction</h1>
              <p>
                In my last blog, I attempted to cover the importance of
                accommodations and modifications.
              </p>
              <p>The objectives of this blog are as follows:</p>
              <li>
                To enumerate the different aids that schools in India provide
              </li>
              <li>
                To explore the legal requirements and rights of disabled
                students
              </li>
              <li>
                To determine the advantages and pros of implementing said aids
              </li>
            </section>
            <section>
              <h1>How do accommodations and modifications work?</h1>
              <p>
                If you have read our previous blog you will know by now
                accommodations are changes in the way a curriculum is taught
                while modifications are changes to the curriculum itself.
              </p>
            </section>
            <section>
              <h1>However, we did not explore</h1>
              <p>
                how these modifications and accommodations are implemented into
                school and education and how parents and students need to be
                aware of what they deserve as the citizens of India. The right
                to persons with disability act was specifically introduced to
                make education a more inclusive space and provide certain
                provisions and aids in order to facilitate education for
                students with disabilities. In addition, being more inclusive
                can have benefits for non-disabled students as well because of
                the Curb Cut Effect. The effect refers to the phenomenon of
                disabled friendly provisions positively affecting everyone. For
                example, allowing children to talk a break and walk around open
                spaces might be beneficial for all students and provide them
                with a calm and useful way to take a break from the rigors of
                school life.
              </p>
              <h1>As parents and guardians, it is</h1>
              <p>
                up to you to educate yourselves on what schools can and SHOULD
                provide for your children! According to learning disabilities-
                “The rights to Persons with Disabilities act, 2016 recommends
                provisions toward inclusive education, ” These modifications
                maybe in the curriculum or examination system such as extra time
                for completion or the provision of a scribe or amanuensis. These
                provisions are provided by different education boards ranging
                from CBSE to ICSE and IGCSE and IB.
              </p>
            </section>
            <section>
              <h1>Here are some helpful graphics</h1>
              <img src={one} />
              <img src={two} />
            </section>
            <section>
              <h1>The CBSE or Central Board of Secondary Education</h1>
              <p>
                for example, provide accommodation that include (but are not
                limited to) extra time on exams, provision of a scribe, teacher
                or prompter exemption from third language, alternate or separate
                questions etc. Given the upcoming board exams for 10th and 12th
                Grade students, you might be wondering if these provisions are
                available for these exams. They are! Here is an extract from the
                curriculum for the CBSCE boards-
              </p>
              <span>ATTACHED HERE IS A LINK TO THE REST OF THE PDF</span>
              <li>
                <a
                  href="https://www.ldexplained.org/wp-
content/uploads/2022/01/CWSN-April-2019.pdf"
                >
                  https://www.ldexplained.org/wp-
                  content/uploads/2022/01/CWSN-April-2019.pdf
                </a>
              </li>
              <h1>These provisions</h1>
              <p>
                can be asked for and provided by following certain regulations
                and rules. These vary according to boards and schools but one of
                those ways is by producing a medical certificate. According to
                my CBSC guide-
              </p>
              <p>
                “The medical certificate issued by the following
                agencies/organizations will be considered for granting
                concessions to Differently abled candidates:
              </p>
              <li>
                Disability Certificate(s) issued by Government hospitals
                controlled by either the Central or State Governments;
              </li>
              <li>
                Disability Certificate(s) issued by Recognized institutes of
                national level viz National Association for the Blind, Spastic
                Society of India etc; and
              </li>
              <li>
                Disability Certificate(s) issued by Non-governmental
                Organizations/practitioners registered with Rehabilitation
                Council of India/Central Government/State Government of the
                Respective State.”
              </li>
              <h1>As mentioned before students</h1>
              <p>
                who are visually impaired, physically Handicapped, Dyslexic,
                Autistic and candidates with disabilities as defined in the
                Persons with Disabilities Act, 1995 can be provided with
                scribed, extra time or adult supervision. This blog is providing
                its readers with certain examples to showcase the range of the
                choices disabled students need and deserved to be provided with.
                However, I will urge the readers to click on the websites and
                resources at the end of the blog to read and find out more about
                the specifics of these provisions and how they may differ from
                student to student.
              </p>
              <h1>Furthermore, in ICSE IGCSE and IB</h1>
              <p>
                schools there are certain accommodations and modifications
                implemented to help students. According to the Cambridge, “We
                recognise that some learners may require extra accommodations
                when taking an assessment due to special educational needs.
                Therefore, centres can request access arrangements such as extra
                time, scribes and supervised rest breaks.” ICSE schools also
                provide additional resources like extra time and calculators.
                This link will help enumerate the different aids provided by
                cambridge or the IGCSE
                board-271195-special-educational-needs.pdf
                (cambridgeinternational.org)
              </p>
              <h1>Why Equity is important.</h1>
              <p>
                If there is one thing I learnt while preparing for this blog and
                one thing I want our readers to take into account, it is the
                importance of Equity. That’s right Equity not Equality. Equity
                in education is important as it acknowledges not every has the
                same needs and requirements. Everyone isn’t equal because not
                everyone is the same. However, this does not mean anyone is
                better or worse than the other. Just that everyone is unique and
                to foster good, efficient meaningful education students no
                matter whether they are disabled or not must be provided with
                equitable support!
              </p>
            </section>
            <section>
              <div className="flex flex-col">
                <li>
                  <a href="https://www.ldexplained.org/educational-strategies-lp/for-educators/accommodations-and-modifications/">
                    IEP, scribe, accommodations, modifications-ADHD & Learning
                    Disabilities (ldexplained.org)
                  </a>
                </li>
                <li>
                  <a href="https://mycbseguide.com/blog/cbse-rules-and-exemptions-for-disabled-students/">
                    CBSE Rules and Exemptions for Disabled Students |
                    myCBSEguide
                  </a>
                </li>
                <li>
                  <a href="https://www.mdachennai.com/dyslexia/board-concessions">
                    Board Concessions (mdachennai.com)
                  </a>
                </li>
                <li>
                  <a href="https://www.spedprepacademy.com/blog/understanding-accommodations-and-modifications">
                    Help Paraprofessionals Understand Accommodations &
                    Modifications (spedprepacademy.com)
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

export default BlogFourteen;
