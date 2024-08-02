import React from "react";
import blog from "../../images/blog/blog3/blog.png";
import blog1 from "../../images/blog/blog3/blog1.jpg";
import blog2 from "../../images/blog/blog3/blog2.jpg";
import Comments from "../reuseable/Comments";
import RecentBlog from "../reuseable/RecentBlog";
import BlogContent from "../../utils/blogContent";
import Author from "../reuseable/Author";

const BlogThree = () => {
  return (
    <>
      <>
        <div className="bgBlog3">
          <div className="lg:h-screen h-fit bg-black-bg">
            <div className="h-screen flex items-center justify-center p-4">
              <Author />

              <h1 className="text-6xl text-white font-bold text-center">
                In the midst of chaos, there is also opportunity - Sun Tzu
              </h1>
            </div>
          </div>
        </div>
      </>
      <div className="lg:ml-[10%] mx-[1%] flex flex-row-reverse">
        <RecentBlog BlogContent={BlogContent} />
        <div className="blog2 w-[80%]">
          <section>
            <h1>Introduction</h1>
            <p>
              <span>Imagine a situation:</span> A child in a store aisle,
              stomping their feet, face red and screaming loudly. People nearby
              give disapproving looks, parents feel embarrassed, and dealing
              with the child's frustration seems really hard. But under all
              these strong feelings, there's an important truth: behavior is a
              way of talking. This becomes even clearer when we think about
              neurodivergence – that's when people's brains work in different
              ways, like with autism or ADHD.
            </p>
          </section>
          <section>
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="w-full lg:w-[60%]">
                <h1>All Behavior Is a Way of Talking</h1>
                <p>
                  In how we interact with each other, the big idea that "All
                  behavior is a way of talking" helps us understand why we act
                  and react like we do. This means that every action, word, or
                  burst of strong feelings has meaning beyond what we see. It's
                  like a special lens that helps us understand the hidden
                  messages in things like tantrums, tears, and getting angry,
                  especially when someone is neurodivergent. By believing in
                  this important idea, we start a journey of understanding,
                  caring, and making connections with others. This goes beyond
                  what's usual and lets us see the wide range of human feelings
                  and actions.
                </p>
              </div>
              <div className="w-full md:w-[40%]">
                <img src={blog} />
              </div>
            </div>
          </section>
          <section>
            <h1>Understanding Neurodivergence and Behavior</h1>
            <p>
              From autism to ADHD and more, people who are neurodivergent often
              experience the world in unique ways. Behaviors that might look
              random or not normal can actually be ways of expressing feelings,
              needs, or how things feel for them. Understanding this helps when
              we see kids having tantrums, crying a lot, or getting really
              upset. For example, tantrums can be because there's too much to
              handle, tears might be when feelings are too big to say, and
              getting angry might come from problems with talking.
            </p>
          </section>
          <section>
            <h1>Learning About the Why Behind Behaviors</h1>
            <p>
              Knowing that behavior is a way of talking can really help,
              especially for people who are neurodivergent and those around
              them. Instead of just thinking about what we see on the surface,
              it's good to think about why someone is acting that way. This
              needs us to be patient, care about how others feel, and look
              beyond what's usually considered normal.
            </p>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[60%]">
                <li>
                  <span>Watch and Learn:</span> See if there are things that
                  make someone act a certain way. Maybe certain places, things
                  they see, or being with others can make their actions
                  stronger. This helps us understand why.
                </li>
                <li>
                  <span>Different Ways to Talk:</span> Some people can't talk
                  with words easily. Finding other ways for them to express
                  themselves, like using pictures or gestures, can be a big
                  help.
                </li>
                <li>
                  <span>Feelings Matter:</span> Teaching how to handle big
                  feelings is important. Things like taking deep breaths, having
                  quiet time, or trying mindfulness can help manage emotions.
                </li>
                <li>
                  <span>Keep Things Regular:</span> Having a schedule that's the
                  same can make someone feel less worried. This can reduce
                  stress that might cause challenging behaviors.
                </li>
                <li>
                  <span>Support and Understand:</span> People who are
                  neurodivergent need to know that their feelings and
                  experiences matter. We should listen, believe them, and help
                  them through a world that isn't always easy.
                </li>
              </div>
              <div className="w-full lg:w-[40%]">
                <img className="rounded-2xl" src={blog1} />
              </div>
            </div>
          </section>
          <section>
            <h1>Why Developmental Milestones Matter</h1>
            <p>
              Learning about how people grow can help us understand why they act
              a certain way. Parents often look at milestones to see how their
              child is growing. These milestones are like checkpoints for a
              child's development – things like moving, talking, and feeling.
            </p>
          </section>
          <section>
            <h1>Knowing Milestones and Why They're Important</h1>
            <p>
              Milestones show how someone grows and changes. From rolling over
              to saying words, each milestone builds on the one before. These
              steps aren't just things to check off; they help with learning and
              growing. It's really important to know about milestones. They help
              kids get ready for school and do well in learning. If there are
              delays, getting help early is really important. This can make it
              easier for kids to learn and do well later on.
            </p>
          </section>
          <section>
            <h1>What to Do About Concerns and Signs</h1>
            <p>
              Knowing the signs that something might not be going right is
              important. When kids aren't reaching milestones like they should,
              it's a sign to look out for. Problems with talking, moving, or
              getting along with others could mean there's something to address.
              Experts like doctors and therapists can help parents with this.
            </p>
          </section>
          <section>
            <h1>Helpful Tips for Parents</h1>
            <p>
              Guiding parents to understand their child's growth and behavior is
              important. Here's how:
            </p>
            <div className="flex flex-col-reverse lg-flex-row">
              <div className="w-full md:w-[60%]">
                <li>
                  <span>Talk to Experts:</span> Have regular talks with doctors,
                  therapists, and teachers. They can help with understanding
                  what's happening and planning ways to help.
                </li>
                <li>
                  <span>Ask Questions:</span> Don't be afraid to ask questions.
                  Getting advice from experts who understand your child's needs
                  can make things better.
                </li>
                <li>
                  <span>Work Together:</span> Help your child by working with
                  professionals. Trying strategies to reach milestones and goals
                  can be really helpful.
                </li>
                <li>
                  <span>Learn About It:</span> Take time to learn about your
                  child's unique needs. Understanding their way of thinking can
                  help you support them better.
                </li>
                <li>
                  <span>Create a Caring Space:</span> Make your home a place of
                  understanding and love. Celebrate when your child achieves
                  something, and show them you care.
                </li>
                <li>
                  <span>Make a Routine:</span> Having a regular schedule can
                  make your child feel secure. It helps them know what to expect
                  and reduces worry.
                </li>
              </div>
              <div className="w-full lg:w-[40%]">
                <img src={blog2} />
              </div>
            </div>
            <li>
              <span>Manage Sensitivity:</span> If your child has strong
              reactions to things, find ways to make things easier for them.
              Create quiet spaces or use tools that help them manage.
            </li>
            <li>
              <span>Let Them Express:</span> Support your child to express
              themselves in different ways. Art, music, and other creative ways
              can help them talk when words don’t work.
            </li>
            <li>
              <span>Learn Social Skills:</span> Help your child learn to get
              along with others. Practice being with friends, imagining social
              situations, and teaching them how to understand others.
            </li>
            <li>
              <span>Reward Good Behavior:</span> Encourage your child by
              rewarding good actions. This can help them achieve goals and
              handle tough times.
            </li>
            <li>
              <span>Take Care of Yourself:</span> Remember that taking care of
              yourself is important too. Parenting a neurodivergent child can be
              tough, so make sure you also feel good.
            </li>
            <li>
              <span>Connect with Others:</span> Join groups of parents who are
              going through similar things. Sharing experiences can help you
              learn and feel supported.
            </li>
            <p>
              Following these steps will lead to understanding, growth, and
              stronger connections. By adjusting your approach to your child's
              special needs, you set the stage for their success and happiness.
            </p>
          </section>
          <section>
            <h1>Conclusion</h1>
            <p>
              <span>Helping Communication and Growth</span>
              Just like talking, behavior is a way of saying something. And
              understanding how people grow helps us know why they act how they
              do. This is super important when people are neurodivergent.
              Knowing about behavior and milestones helps us connect and be
              kinder to one another. This makes us welcome all kinds of people
              and their special ways.
            </p>
          </section>
        </div>
      </div>
      <Comments />
    </>
  );
};

export default BlogThree;
