import React, { useState } from "react";
import { useFormik } from "formik";
import { serviceProviderPageForm } from "../../schemas/formSchemas";

const serviceProviderContent1 = [
  {
    li: "Hybrid",
  },
  {
    li: "Speech Therapy",
  },
  {
    li: "Special Education",
  },
  {
    li: "Physical Trainer",
  },
  {
    li: "Art Therapy",
  },
  {
    li: "Music Therapy",
  },
  {
    li: "Physiotherapy",
  },
  {
    li: "Yoga Therapy",
  },
  {
    li: "Other",
  },
];

const serviceProviderContent2 = [
  {
    li: "Online",
  },
  {
    li: "Offline",
  },
  {
    li: "Hybrid",
  },
];

const serviceProviderContent3 = [
  {
    li: "Diploma",
  },
  {
    li: "Bachelor",
  },
  {
    li: "Master",
  },
  {
    li: "Phd",
  },
];

const serviceProviderContent4 = [
  {
    li: "I shall provide services to the child referred by Elina according to my availability.",
  },
  {
    li: "I shall share reports and other observations about the child with Elina.",
  },
  {
    li: "I shall seek information from Elina about the child.",
  },
  {
    li: "I shall adopt an open door policy with the parents so as to enable and empower them to be part of their child’s progress.",
  },
  {
    li: "I shall operate on trust and transparency with Elina.",
  },
  {
    li: "I do not have any financial arrangements with Elina and all my professional charges towards providing service to the child will be charged to the Parents/ Guardian.",
  },
];

const ServiceProviderForm = () => {
  const formik = useFormik({
    initialValues: {
      serviceName: "",
      universityName: "",
      professionalCharges: "",
      yearOfCompletion: "",
      specialistIn: "",
      yearEstablishment: "",
      workExperience: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: serviceProviderPageForm,
  });

  return (
    <>
      <div class="flex items-center justify-center py-10 md:px-5 lg:p-12">
        <div class="mx-auto w-full max-w-[90%] md:max-w-[100%] lg:max-w-[80%] bg-gray-200 rounded-3xl p-10">
          <form onSubmit={formik.handleSubmit}>
            <div className="step1">
              {/* Personal Details */}
              <>
                <h1 className="text-center font-black text-3xl md:text-4xl text-blue-950 pb-8 underline">
                  Service Provider
                </h1>
                <div class="mb-5 pt-3">
                  <h1 className="font-black text-2xl text-[#07074D] mb-5">
                    Personal Details<span className="text-red-500">*</span>
                  </h1>
                  <div class="-mx-3 flex flex-wrap">
                    <div class="px-3 w-full md:w-1/2">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="serviceName"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.serviceName}
                          placeholder="School name"
                          class={`${
                            formik.errors.serviceName &&
                            formik.touched.serviceName
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.serviceName &&
                          formik.touched.serviceName && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.serviceName}
                            </p>
                          )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Gender<span className="text-red-500">*</span>
                      </label>
                      <div class="my-auto">
                        <input
                          type="radio"
                          id="genderM"
                          name="gender"
                          onChange={formik.handleChange}
                          value="male"
                          checked={formik.values.gender === "male"}
                          class="mr-2"
                        />
                        <label
                          htmlFor="genderM"
                          className="mr-5 text-[#33373d] font-semibold"
                        >
                          Male
                        </label>
                        <input
                          type="radio"
                          id="genderF"
                          name="gender"
                          onChange={formik.handleChange}
                          value="female"
                          checked={formik.values.gender === "female"}
                          class="mr-2"
                        />
                        <label
                          htmlFor="genderF"
                          className="mr-5 text-[#33373d] font-semibold"
                        >
                          Female
                        </label>
                        {formik.errors.gender && formik.touched.gender ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.gender}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          placeholder="Email Address"
                          class={`${
                            formik.errors.email && formik.touched.email
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          id="phoneNumber"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.phoneNumber}
                          placeholder="Phone Number"
                          class={`${
                            formik.errors.phoneNumber &&
                            formik.touched.phoneNumber
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.phoneNumber &&
                          formik.touched.phoneNumber && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.phoneNumber}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 ">
                  <h1 className="font-medium text-[#07074D] mb-5">
                    Specialization <span className="text-red-500">*</span>
                  </h1>
                  <div class="w-full px-3 grid grid-cols-1 md:grid-cols-3 ">
                    {serviceProviderContent1.map((item) => (
                      <div className="flex w-full items-center gap-3">
                        <input
                          type="checkbox"
                          id="specialization"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.specialization}
                          placeholder="Child name"
                          class={`${
                            formik.errors.specialization &&
                            formik.touched.specialization
                              ? "border border-red-600"
                              : " "
                          }   bg-white  text-base font-medium text-green-600 outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        <label class="w-full block text-base md:text-lg font-medium text-[#161660]">
                          {item.li}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </>
              {/* Service Details */}
              <>
                <div className="mb-5 pt-3">
                  <h1 className="font-black text-2xl text-[#07074D] mb-5">
                    Service Details
                    <span className="text-red-500">*</span>
                  </h1>
                  <div className="-mx-3 flex flex-wrap ">
                    <div class="px-3 w-full md:w-1/2 mb-5">
                      <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Mode of operation<span className="text-red-500">*</span>
                      </label>
                      <div class="my-auto">
                        <input
                          type="radio"
                          id="modeOfOperation"
                          name="modeOfOperation"
                          onChange={formik.handleChange}
                          value="individual"
                          checked={
                            formik.values.modeOfOperation === "individual"
                          }
                          class="mr-2"
                        />
                        <label
                          htmlFor="modeOfOperation"
                          className="mr-5 text-[#33373d] font-semibold"
                        >
                          Individual
                        </label>
                        <input
                          type="radio"
                          id="modeOfOperation2"
                          name="modeOfOperation"
                          onChange={formik.handleChange}
                          value="organisation"
                          checked={
                            formik.values.modeOfOperation === "organisation"
                          }
                          class="mr-2"
                        />
                        <label
                          htmlFor="modeOfOperation2"
                          className="mr-5 text-[#33373d] font-semibold"
                        >
                          Organisation
                        </label>
                        {formik.errors.modeOfOperation &&
                        formik.touched.modeOfOperation ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.modeOfOperation}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Mode of delivery<span className="text-red-500">*</span>
                      </label>
                      <div class="my-auto">
                        <input
                          type="radio"
                          id="yes"
                          name="modeOfDelivery"
                          onChange={formik.handleChange}
                          value="yes"
                          checked={formik.values.modeOfDelivery === "yes"}
                          class="mr-2"
                        />
                        <label
                          htmlFor="yes"
                          className="mr-5 text-[#33373d] font-semibold"
                        >
                          Yes
                        </label>
                        <input
                          type="radio"
                          id="no"
                          name="modeOfDelivery"
                          onChange={formik.handleChange}
                          value="no"
                          checked={formik.values.modeOfDelivery === "no"}
                          class="mr-2"
                        />
                        <label
                          htmlFor="no"
                          className="mr-5 text-[#33373d] font-semibold"
                        >
                          No
                        </label>
                        {formik.errors.gender && formik.touched.gender ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.gender}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 pt-3">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-col w-full md:w-1/2">
                        <h1
                          className="font-medium
                       text-[#07074D] mb-5"
                        >
                          Mode of Service<span className="text-red-500">*</span>
                        </h1>
                        <div class="w-full px-3 grid grid-cols-1 md:grid-cols-3">
                          {serviceProviderContent2.map((item) => (
                            <div className="flex w-full items-center gap-3">
                              <input
                                type="checkbox"
                                id="childName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.childName}
                                placeholder="Child name"
                                class={`${
                                  formik.errors.childName &&
                                  formik.touched.childName
                                    ? "border border-red-600"
                                    : " "
                                }   bg-white  text-base font-medium text-green-600 outline-none focus:border-[#6A64F1] focus:shadow-md`}
                              />
                              <label class="w-full block text-base md:text-lg font-medium text-[#161660]">
                                {item.li}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-full mt-5 md:w-1/2">
                        <div class="md:px-3 p-0 w-full ">
                          <div class="mb-5">
                            <label class="mb-3 block text-base font-medium text-[#07074D]">
                              Professional Charges Per Session{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="number"
                              id="professionalCharges"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.professionalCharges}
                              placeholder="Professional Charges Per Session"
                              class={`${
                                formik.errors.professionalCharges &&
                                formik.touched.professionalCharges
                                  ? "border border-red-600"
                                  : " "
                              } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            />
                            {formik.errors.professionalCharges &&
                              formik.touched.professionalCharges && (
                                <p className="text-sm font-semibold text-red-500">
                                  {formik.errors.professionalCharges}
                                </p>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              <>
                <div className="mb-5 pt-3">
                  <h1 className="font-black text-2xl text-[#07074D] mb-5">
                    Acknowledgement
                    <span className="text-red-500">*</span>
                  </h1>
                  <div className="-mx-3 flex flex-wrap ">
                    <div class="px-3 w-full md:w-1/2 mb-5">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          University Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="universityName"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.universityName}
                          placeholder="University Name"
                          class={`${
                            formik.errors.universityName &&
                            formik.touched.universityName
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.universityName &&
                          formik.touched.universityName && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.universityName}
                            </p>
                          )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <div className="mb-5 ">
                        <h1 className="font-medium text-[#07074D] mb-5">
                          Professional Qualification{" "}
                          <span className="text-red-500">*</span>
                        </h1>
                        <div class="w-full px-3 grid grid-cols-2 md:grid-cols-4 ">
                          {serviceProviderContent3.map((item) => (
                            <div className="flex w-full items-center gap-3">
                              <input
                                type="checkbox"
                                id="childName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.professionalQualification}
                                placeholder="Child name"
                                class={`${
                                  formik.errors.professionalQualification &&
                                  formik.touched.professionalQualification
                                    ? "border border-red-600"
                                    : " "
                                }   bg-white  text-base font-medium text-green-600 outline-none focus:border-[#6A64F1] focus:shadow-md`}
                              />
                              <label class="w-full block text-base md:text-lg font-medium text-[#161660]">
                                {item.li}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div class="w-full px-3 sm:w-1/2">
                      <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Year Of Completion
                        <span className="text-red-500">*</span>
                      </label>
                      <div class="mb-5">
                        <input
                          type="date"
                          id="yearOfCompletion"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.yearOfCompletion}
                          placeholder="Year Of Completion"
                          class={`${
                            formik.errors.yearOfCompletion &&
                            formik.touched.yearOfCompletion
                              ? "border border-red-600"
                              : ""
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.yearOfCompletion &&
                        formik.touched.yearOfCompletion ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.yearOfCompletion}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2 mb-5">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Specialist in<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="specialistIn"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.specialistIn}
                          placeholder="Specialist in"
                          class={`${
                            formik.errors.specialistIn &&
                            formik.touched.specialistIn
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.specialistIn &&
                          formik.touched.specialistIn && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.specialistIn}
                            </p>
                          )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2 mb-5">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Work Experience<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="workExperience"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.workExperience}
                          placeholder="Work Experience"
                          class={`${
                            formik.errors.workExperience &&
                            formik.touched.workExperience
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.workExperience &&
                          formik.touched.workExperience && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.workExperience}
                            </p>
                          )}
                      </div>
                    </div>
                    <div className="w-full">
                      <p>
                        I hereby agree to be part of Elina network for
                        Professionals who enable inclusion. By being part of
                        Elina network for professionals, I understand that
                      </p>
                      {serviceProviderContent4.map((item) => (
                        <li className="text-gray-600">{item.li}</li>
                      ))}
                      <input type="checkbox"></input>
                      <label className="ml-3">I Agrees</label>
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div className="flex justify-center">
              <button className="md:w-[20%] w-[90%] p-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceProviderForm;
