import React from "react";
// import learn from "../../images/school/learn.jpg";
import learn from "../../images/school/schoolCompressed/learn-min.jpg";

const LeadYourTeacher = () => {
  return (
    <>
      <div className="HeroBg md:px-[8%] py-[8%] lg:py-[1%]">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-start gap-10 p-5 md:p-0">
          <div className="lg:w-1/2 w-full ">
            <img src={learn} className="rounded-3xl" />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-6 px-[2%] ">
            <h1 className="text-5xl lg:text-6xl md:text-4xl text-blue-700 font-bold">
              Supporting Your Teachers
            </h1>
            <p className="text-lg ">
              <span className="font-black text-xl">
                Inclusive Education Strategies:
                <br />
              </span>
              <span className="font-semibold">Customized Curricula: </span> We
              help design and implement curricula that cater to the diverse
              learning needs of all students. Our strategies ensure that
              children with ADHD, Autism, and Learning Disabilities are included
              and supported in the classroom. Professional Development
              Workshops: Our workshops equip teachers with the latest research,
              techniques, and resources to effectively support children with
              special needs. We cover topics such as behavior management,
              sensory integration, and adaptive teaching methods.
            </p>
            <p className="text-lg ">
              <span className="font-black text-xl">
                Ongoing Support:
                <br />
              </span>
              <p></p>
              <span className="font-semibold"> Resource Library:</span> Resource
              Library: Access a wide range of materials, from practical guides
              to research articles, to enhance your teaching practice.
            </p>
            <p className="text-lg ">
              <span className="font-semibold">On-Demand Consultation: </span>{" "}
              Our team of experts is available for consultation, providing
              guidance and support to address any challenges you may encounter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadYourTeacher;
