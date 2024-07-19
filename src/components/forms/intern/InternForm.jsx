import React, { useState } from "react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

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

const InternForm = () => {
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
                <h1 className="text-center font-black text-3xl md:text-5xl text-blue-950 pb-8 ">
                  Internship Form
                </h1>
                {/* GENERAL INFORMATION */}
                <>
                  <div class="mb-5 pt-3">
                    <h1 className="font-black text-2xl text-[#07074D] mb-5">
                      Personal Details<span className="text-red-500">*</span>
                    </h1>
                    <div class="-mx-3 flex flex-wrap">
                      {/* NAME */}
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
                      {/* D.O.B */}
                      <div class="w-full px-3 sm:w-1/2 ">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Date of birth<span className="text-red-500">*</span>
                        </label>
                        <div class="mb-5">
                          <input
                            type="date"
                            id="dob"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dob}
                            placeholder="D.O.B"
                            class={`${
                              formik.errors.dob && formik.touched.dob
                                ? "border border-red-600"
                                : ""
                            } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          />
                          {formik.errors.dob && formik.touched.dob ? (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.dob}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      {/* PHONE NUMBER */}
                      <div class="px-3 w-full md:w-1/2">
                        <div class="mb-5">
                          <label class="mb-3 block text-base font-medium text-[#07074D]">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
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
                      {/* PARENT NAME */}
                      <div class="w-full px-3 sm:w-1/2 mb-5">
                        <label
                          for="name"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Name of the Parents/Guardian
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.parentName}
                          placeholder="Name of the Parents/Guardian"
                          class={`${
                            formik.errors.parentName &&
                            formik.touched.parentName
                              ? "border border-red-600"
                              : ""
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.parentName &&
                        formik.touched.parentName ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.parentName}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </>
                <>
                  <div class="mb-5 pt-3">
                    <h1 className="font-black text-2xl text-[#07074D] mb-5">
                      Additional Details<span className="text-red-500">*</span>
                    </h1>
                    <div class="-mx-3 flex flex-wrap">
                      {/* When Could You Start Interning with Elina? */}
                      <div class="w-full px-3 sm:w-1/2 ">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          When Could You Start Interning with Elina?
                          <span className="text-red-500">*</span>
                        </label>
                        <div class="mb-5">
                          <input
                            type="date"
                            id="dob"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dob}
                            placeholder="D.O.B"
                            class={`${
                              formik.errors.dob && formik.touched.dob
                                ? "border border-red-600"
                                : ""
                            } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          />
                          {formik.errors.dob && formik.touched.dob ? (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.dob}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      {/* How Many Hours Can you Intern with Elina per week */}
                      <div class="px-3 w-full md:w-1/2">
                        <div class="mb-5">
                          <label class="mb-3 block text-base font-medium text-[#07074D]">
                            How Many Hours Can you Intern with Elina per week{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="workinghour"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.workinghour}
                            placeholder="Enter working hours"
                            class={`${
                              formik.errors.workinghour &&
                              formik.touched.workinghour
                                ? "border border-red-600"
                                : " "
                            } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                          />
                          {formik.errors.workinghour &&
                            formik.touched.workinghour && (
                              <p className="text-sm font-semibold text-red-500">
                                {formik.errors.workinghour}
                              </p>
                            )}
                        </div>
                      </div>
                      {/* EMAIL ADDRESS */}
                      <div class="px-3 w-full md:w-1/2">
                        <div class="mb-5">
                          <label class="mb-3 block text-base font-medium text-[#07074D]">
                            Email Address{" "}
                            <span className="text-red-500">*</span>
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
                    </div>
                  </div>
                </>
              </>

              <>
                <div className="mb-5 pt-3">
                  <h1 className="font-black text-2xl text-[#07074D] mb-5">
                    Acknowledgement
                    <span className="text-red-500">*</span>
                  </h1>
                  <div className="-mx-3 flex flex-wrap ">
                    {/* A Short Introduction about Yourself? */}
                    <div class="px-3 w-full md:w-1/2 mb-5">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          A Short Introduction about Yourself?
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          id="shortAboutElina"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.shortAboutElina}
                          accept=".pdf, .docx, .txt, .png, .jpg, .jpeg"
                          class={`${
                            formik.errors.shortAboutElina &&
                            formik.touched.shortAboutElina
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.shortAboutElina &&
                          formik.touched.shortAboutElina && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.shortAboutElina}
                            </p>
                          )}
                      </div>
                    </div>
                    {/* What do you know about Elina? */}
                    <div class="px-3 w-full md:w-1/2 mb-5">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          What do you know about Elina?
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          id="knowAboutElina"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.knowAboutElina}
                          accept=".pdf, .docx, .txt, .png, .jpg, .jpeg"
                          class={`${
                            formik.errors.knowAboutElina &&
                            formik.touched.knowAboutElina
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.knowAboutElina &&
                          formik.touched.knowAboutElina && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.knowAboutElina}
                            </p>
                          )}
                      </div>
                    </div>
                    {/* What are you looking forward to while interning with Elina? */}
                    <div class="px-3 w-full md:w-1/2 mb-5">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          What are you looking forward to while interning with
                          Elina?
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          id="lookingAboutElina"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.lookingAboutElina}
                          accept=".pdf, .docx, .txt, .png, .jpg, .jpeg"
                          class={`${
                            formik.errors.lookingAboutElina &&
                            formik.touched.lookingAboutElina
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.lookingAboutElina &&
                          formik.touched.lookingAboutElina && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.lookingAboutElina}
                            </p>
                          )}
                      </div>
                    </div>
                    <div className="lg:px-[2%]">
                      <p className="text-gray-700">
                        I hereby agree to be part of Elina network for
                        Professionals who enable inclusion. By being part of
                        Elina network for professionals, I understand that
                        <span className="text-red-500">*</span>
                      </p>

                      <input type="checkbox"></input>
                      <label className="ml-3 font-bold text-[#07074D]">
                        I Agrees
                      </label>
                      <div className="py-5">
                        <ReCAPTCHA sitekey="6LceNQYqAAAAANmxHgRcfdU_e8KW_c05MKTOBai3" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div className="flex justify-center">
              <button className="md:w-[20%] w-[90%] p-3 bg-blue-950 border-blue-950 hover:text-blue-950 hover:bg-transparent">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InternForm;
