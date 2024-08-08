import Comments from "../reuseable/Comments";
import React, { useEffect } from "react";
import one from "../../images/blog/blog4/1.png";
import two from "../../images/blog/blog4/2.png";
import three from "../../images/blog/blog4/3.png";
import four from "../../images/blog/blog4/4.png";
import five from "../../images/blog/blog4/5.png";
import RecentBlog from "../reuseable/RecentBlog";
import BlogContent from "../../utils/blogContent";
import Author from "../reuseable/Author";
import BlogButtons from "../reuseable/BlogButtons";

const BlogFour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <>
        <div className="bgBlog4 ">
          <div className="lg:h-screen h-fit bg-black-bg">
            <div className="h-screen flex items-center justify-center  md:p-4">
              <Author />

              <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
                DEVELOPMENT MILESTONES:CELEBRATION OR CHECKLIST?
              </h1>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="lg:ml-[10%] mx-[1%] flex flex-row-reverse">
          <RecentBlog BlogContent={BlogContent} />
          <div className="blog2 md:w-[80%] text-justify ">
            <section>
              <h1>
                WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?
              </h1>
              <p>
                Have you witnessed grandparents excitedly sharing sweet treats
                to celebrate their grandchild’s grand achievement—turning over
                for the first time?
                <br />
                Did your heart skip a beat when your little one said their first
                magical words or took their first wobbly steps? These momentous
                landmarks are expressions of your child’s ongoing learning and
                development since the moment of birth. While these developmental
                milestones are surely moments to celebrate for reasons other
                than scrumptious sweets, they can also be crucial identifiers of
                your child’s development or, in some cases, a call for support.
                <br />
                Besides healthy growth, developmental milestones in the early
                years can correlate to development and academic success at later
                stages. While it is imperative to keep in mind that all children
                aren’t alike and grow at varying rates, it can be beneficial to
                get a head start and support children who are slightly lagging
                or skipping milestones.
              </p>
            </section>
            <div className="flex flex-col ">
              <section className="w-full flex items-center">
                <div className="w-1/2">
                  <h1>One Month</h1>
                  <p>
                    <span>Communication</span>
                  </p>
                  <li>Root,suck primitive reflexes.</li>
                  <li>Turn to sound.</li>
                  <li>Smile to voice.</li>
                </div>
                <div className="w-1/2">
                  <img src={one} className="rounded-3xl p-5" />
                </div>
              </section>
              <section className="w-full flex flex-row items-center">
                <div className="w-1/2">
                  <h1>Two Months</h1>
                  <div className="flex flex-wrap  gap-5">
                    <div className="">
                      <span>Physical</span>
                      <li>Hand grasp reflex.</li>
                      <li>Moro, positive support reflexes.</li>
                      <li>Flexed posture.</li>
                    </div>
                    <div className="">
                      <span>Cognitive</span>
                      <li>Explores the world by putting things in the mouth</li>
                      <li>Extends to grab a toy.</li>
                      <li>Purses lips to say she wont eat.</li>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <img src={two} className="rounded-3xl p-5" />
                </div>
              </section>
              <section className="w-full flex flex-row items-center">
                <div className="w-1/2">
                  <h1>Three Months</h1>
                  <div className="flex flex-wrap gap-5">
                    <div className="">
                      <span>Socio/ Emotional</span>
                      <li>
                        Explores the world by putting things in the mouth.
                      </li>
                      <li>Extends to grab a toy.</li>
                      <li>Purses lips to say she wont eat.</li>
                    </div>
                    <div className="">
                      <span>Communication</span>
                      <li>Alternates With The Adult And Makes Sounds.</li>
                      <li>Makes High Pitched Noises.</li>
                      <li>Blows 'raspberries'(sticks tongue out and blows).</li>
                    </div>
                    <div className="">
                      <span>Physical</span>
                      <li>Rolls Over</li>
                      <li>When On tummy, tries to push herself up.</li>
                      <li>Leans On palms for support while sitting.</li>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <img src={three} className="rounded-3xl p-5" />
                </div>
              </section>
              <h1>Four Months</h1>
              <section className="w-full flex flex-row items-center">
                <div className="w-1/2">
                  <div className="grid lg:grid-cols-2 gap-5">
                    <div className="">
                      <span>Cognitive</span>
                      <li>
                        Explores the world by putting things in the mouth.
                      </li>
                      <li>Extends to grab a toy.</li>
                      <li>Purses lips to say she wont eat.</li>
                    </div>
                    <div className="">
                      <span>Socio/ Emotional</span>
                      <li>Recognize known people</li>
                      <li>Enjoys looking at herself in the mirror.</li>
                      <li>Laughs</li>
                    </div>
                    <div className="">
                      <span>Communication</span>
                      <li>Puts arms up asking to be picked up.</li>
                      <li>Can make sounds like mama and baba.</li>
                    </div>
                    <div className="">
                      <span>Physical</span>
                      <li>Can sit up</li>
                      <li>Passes things from one hand to another.</li>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <img src={four} className="rounded-2xl p-5" />
                </div>
              </section>

              <section className="w-full flex flex-row items-center">
                <div className="w-1/2">
                  <h1>Five Months</h1>
                  <div className="flex flex-wrap items-center">
                    <div className="">
                      <span>Communication</span>
                      <p>
                        Akin to the tale of the good willing boy who helped a
                        butterfly break out of its cocoon and unknowingly
                        deprived the development of its flight muscles –
                        misguided or delayed actions can impact children’s
                        developmental milestones.
                      </p>
                    </div>
                    <div className="">
                      <span>Socio/ Emotional</span>
                      <p>Plays simple games with the adult</p>
                    </div>
                    <div className="">
                      <span>Cognitive</span>
                      <p>
                        Tracking milestones provides information about the
                        child’s growth and development and plays a pivotal role
                        in forming the child’s identity and boosting their
                        self-esteem.
                      </p>
                    </div>
                    <div className="">
                      <span>Physical</span>
                      <li>
                        Constantly holding the baby and not letting them down.
                      </li>
                      <li>
                        Waiting too long for milestones such as saying first
                        words – beyond 1-2 years and missing the window of early
                        intervention.
                      </li>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <img className="rounded-2xl p-5  " src={five} />
                </div>
              </section>
            </div>

            <section>
              <h1>Help or Hindrance?</h1>
              <p>
                Akin to the tale of the good willing boy who helped a butterfly
                break out of its cocoon and unknowingly deprived the development
                of its flight muscles – misguided or delayed actions can impact
                children’s developmental milestones.
              </p>
            </section>
            <section>
              <h1>Common adverse behaviors to avoid:</h1>
              <li>Constantly holding the baby and not letting them down.</li>
              <li>
                Always preempting and providing the baby with food/ toys thereby
                eliminating opportunities or need to learn to communicate.
              </li>
              <li>
                Waiting too long for milestones such as saying first words –
                beyond 1-2 years and missing the window of early intervention.
              </li>
              <li>Introducing screen time earlier than necessary.</li>
              <li>
                Following wrong advice from unreliable/ non-medical sources.
              </li>
            </section>
            <section>
              <h1>How Parents Can Help</h1>
              <p>
                Tracking milestones provides information about the child’s
                growth and development and plays a pivotal role in forming the
                child’s identity and boosting their self-esteem. When milestones
                are slightly delayed, modifications in the environment and
                caregivers’ behavior can help children catch up. However,
                milestones delayed beyond the window may require attention and
                intervention—known as ‘red flags’. A few common red flags in the
                mentioned age groups have been elucidated: Developmental delays
                can be specific (present in one of the four areas) or global
                (present in more than 2 areas). Children with specific
                developmental delays, if left untreated, may lead to global
                delays or special. Needs conditions, therefore emphasizing the
                cruciality of early intervention.
              </p>
              <BlogButtons BlogContent={BlogContent} />
            </section>
          </div>
        </div>
      </>
      <Comments />
    </>
  );
};

export default BlogFour;
