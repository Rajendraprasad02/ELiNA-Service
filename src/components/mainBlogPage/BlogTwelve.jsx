import React, { useEffect } from "react";
import Comments from "../reuseable/Comments";
import BlogContent from "../../utils/blogContent";
import RecentBlog from "../reuseable/RecentBlog";
import Author from "../reuseable/Author";
import one from "../../images/blog/blog12/one.png";

const BlogTwelve = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <>
        <div className="bgBlog12">
          <div className="lg:h-screen h-fit bg-black-bg">
            <div className="h-screen flex items-center justify-center p-4">
              <Author />

              <h1 className="text-6xl text-white font-bold text-center">
                How much screen time is too much for a child's brain and its
                relevance to Adhd and Autism
              </h1>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="lg:ml-[10%] mx-[1%] flex flex-row-reverse">
          <RecentBlog BlogContent={BlogContent} />
          <div className="blog2 md:w-[65%]">
            <section>
              <h1>Introduction</h1>
              <p>
                Anything in excess is injurious to one’s health even something
                that as sweet as honey. This is especially true when it comes to
                technology and children. In today’s world technology is as
                irreplaceable as the very air we breathe. So, it is only natural
                children are being exposed to phones, tablets, laptops at a very
                young age. It is also not unheard of for a parent to utilise
                technology to engage their child. While, tech improvements
                provide fantastic means for education and entertainment it has
                several cons.
              </p>
            </section>
            <section>
              <h1>Before we explore that...What is screen time?</h1>
              <p>
                “Screen time” is a term used for activities done in front of any
                screen such as televisions, computers, I-pads or even video
                games. “Screen time is a sedentary activity meaning you are
                being physically inactive while sitting down. Very little energy
                is used during screen time”
              </p>
            </section>
            <section>
              <h1>How much is too much?</h1>
              <p>
                While it is certainly impossible to completely avoid screen time
                altogether not only because it is unreasonable but also because
                there are certain pros to having access to such technology.
              </p>
              <p>
                For example, increased access to internet helps in increasing
                awareness and education of several topics such as this one.
                Increase in advancements of technology also aid in making
                education more interactive and make the world a more accessible
                place for disabled individuals. It can also help calm children
                down and retain concentration when used in moderation
              </p>
              <p>
                However, without restrictions too much exposure to the internet
                can have adverse effects on children. Due to the possible
                harmful algorithms of social media and media platforms that
                depend on children clicking on videos that deliberately bait
                their viewers through loud thumbnails; children are more at a
                risk of being over exposed to ‘damaging content ’and falling
                into bad habits of excessive consumption.
              </p>
            </section>
            <section>
              <h1>GUIDELINES</h1>
              <p>
                This kind of consumption can lead to several issues that can
                affect children mentally and physically. Some of them are as
                follows:
              </p>
              <li>-Exposure to predatory advertisement</li>
              <li>-Negative stereotypes</li>
              <li>-Misleading or inaccurate information</li>
              <li>-Sleep problems</li>
              <li>-Lethargy and weight problems</li>
              <li>-Poor self-image and body issues</li>
              <li>-Less interest in outdoor and physical activity</li>
              <li>-Can lead to increased chances of depression and anxiety</li>
            </section>
            <section>
              <h1>Recommended screen time</h1>
              <img src={one} />
            </section>
            <section>
              <h1>Relevance to children with Autism and ADHD</h1>
              <p>
                While the previously provided information applies to all types
                of children there are certain specific issues that may affect
                children on the Autism Spectrum and kids who have ADHD. For
                example, as the California Association of Health and education
                states -“Children with autism are prone to arousal regulation
                issues, manifesting in an exaggerated stress response, emotional
                dysregulation, or a tendency to be over or under-stimulated;
                screen time increases acute and chronic stress, induces
                hyperarousal, causes emotional dysregulation, and produces
                overstimulation”.
              </p>
              <p>
                Excessive screen time is in no way responsible for the
                occurrence of ADHD itself in children. However, excessive screen
                time could possibly have a heightened impact as opposed to
                neurotypical children. Children with ADHD are more likely to
                fall into excessive consumption of technology and therefore
                unregulated screen time can be particularly harmful. Not only
                this, excessive screen time can also make them vulnerable to
                mental health issues such as anxiety.
              </p>
            </section>
            <section>
              <h1>Conclusion</h1>
              <p>
                While it may be tricky to figure out the logistics of screen
                time and how much a child should use it is far from a scary
                topic. Nothing is black and white and there are certain pros and
                cons to screen time. Parents must strive hard to strike a
                balance so as to facilitate holistic development in their
                children.
              </p>
            </section>
            <section>
              <div className="flex flex-col text-left">
                <li>
                  <a href="https://www.webmd.com/add-adhd/childhood-adhd/childhood-adhd-screen-time">
                    https://www.webmd.com/add-adhd/childhood-adhd/childhood-adhd-screen-time
                  </a>
                </li>
                <li>
                  <a href="https://psychcentral.com/adhd/screen-time-and-children-with-adhd#The-relationship-between-screen-time-and-ADHD">
                    https://psychcentral.com/adhd/screen-time-and-children-with-adhd#The-relationship-between-screen-time-and-ADHD
                  </a>
                </li>
                <li>
                  <a href="https://www.cahelp.org/educators/services/plc/enewsarchive/archive_2018-19/how_much_is_too_much__autism_and_screen_time#:~:text=Autism%20is%20associated%20with%20inflammation,the%2">
                    https://www.cahelp.org/educators/services/plc/enewsarchive/archive_2018-19/how_much_is_too_much__autism_and_screen_time#:~:text=Autism%20is%20associated%20with%20inflammation,the%2
                  </a>
                </li>
                <li>
                  <a href="https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Children-And-Watching-TV-054.aspx#:~:text=Between%2018%20and%2024%20months,limit%20activities%20that%20include%20screens">
                    https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Children-And-Watching-TV-054.aspx#:~:text=Between%2018%20and%2024%20months,limit%20activities%20that%20include%20screens
                  </a>
                </li>
                <li>
                  <a href="https://www.theswaddle.com/404">
                    https://www.theswaddle.com/404
                  </a>
                </li>
                <li>
                  <a href="https://www.cantonpl.org/blogs/post/screen-time/">
                    https://www.cantonpl.org/blogs/post/screen-time/
                  </a>
                </li>
                <li>
                  <a href="https://medlineplus.gov/ency/patientinstructions/000355.htm#:~:text=Current%20Screen%20Time%20Guidelines&text=Children">
                    https://medlineplus.gov/ency/patientinstructions/000355.htm#:~:text=Current%20Screen%20Time%20Guidelines&text=Children
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

export default BlogTwelve;
