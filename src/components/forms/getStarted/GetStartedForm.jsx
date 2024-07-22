import React, { useState } from "react";
import { useFormik } from "formik";
import { gettingStartedForm } from "../../schemas/formSchemas";
import BreadCrumbs from "../../reuseable/BreadCrumbs";

import ReCAPTCHA from "react-google-recaptcha";

const onSubmit = (values, actions) => {
  setTimeout(() => actions.resetForm(), 1000);
};

const GetStartedForm = () => {
  const formik = useFormik({
    initialValues: {
      childName: "",
      dob: "",
      gender: "",
      relation: "",
      parentName: "",
      phoneNumber: "",
      email: "",
      schoolName: "",
      howdoyouknow: "",
      reason: "",
    },
    validationSchema: gettingStartedForm,
    onSubmit,
  });

  return (
    <>
      <div className="md:ml-14 md:pt-5">
        <BreadCrumbs />
      </div>
      <div class="flex items-center justify-center p-5 md:p-12 HeroBg2">
        <div class="mx-auto max-w-[650px] md:max-w-[80%] bg-gray-200 rounded-3xl p-5 md:p-10">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-center font-black text-4xl text-blue-950 pb-4 underline">
              Getting Started
            </h1>
            <div class="mb-5 pt-3">
              <label class="mb-5 block text-lg font-black text-[#07074D] ">
                Child information
              </label>
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2 ">
                  <div class="mb-5">
                    <label class="mb-3 block text-base font-medium text-[#07074D]">
                      Child name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="childName"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.childName}
                      placeholder="Child name"
                      class={`${
                        formik.errors.childName && formik.touched.childName
                          ? "border border-red-600"
                          : " "
                      } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                    {formik.errors.childName && formik.touched.childName && (
                      <p className="text-sm font-semibold text-red-500">
                        {formik.errors.childName}
                      </p>
                    )}
                  </div>
                </div>
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
                <div class="w-full px-3 sm:w-1/2 ">
                  <label class="mb-3 block text-base font-medium text-[#07074D]">
                    Child Gender<span className="text-red-500">*</span>
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

                <div class="w-full px-3 sm:w-1/2 ">
                  <label class="mb-3 block text-base font-medium text-[#07074D]">
                    Relationship with child
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="relation"
                    onChange={formik.handleChange}
                    value={formik.values.relation}
                    onBlur={formik.handleBlur}
                    class="mb-5 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option>Select an option</option>
                    <option>Father</option>
                    <option>Mother</option>
                    <option>Guardian</option>
                    <option>Other</option>
                  </select>
                  {formik.errors.relation && formik.touched.relation ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.relation}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
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
                      formik.errors.parentName && formik.touched.parentName
                        ? "border border-red-600"
                        : ""
                    } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  />
                  {formik.errors.parentName && formik.touched.parentName ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.parentName}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="phone"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="phoneNumber"
                    inputProps={{ maxLength: "10" }}
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your phone number"
                    class={`${
                      formik.errors.phoneNumber && formik.touched.phoneNumber
                        ? "border border-red-600"
                        : ""
                    } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.phoneNumber}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Enter your email"
                    class={`${
                      formik.errors.email && formik.touched.email
                        ? "border border-red-600"
                        : ""
                    } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Child's current school (if attending)
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    onChange={formik.handleChange}
                    value={formik.values.schoolName}
                    placeholder="School name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    How do you know about us:{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="howdoyouknow"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.howdoyouknow}
                    class={`${
                      formik.touched.howdoyouknow && formik.errors.howdoyouknow
                        ? "border border-red-600"
                        : ""
                    }  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  >
                    <option>Select an option</option>
                    <option>Elina Website</option>
                    <option>Social Media</option>
                    <option>Through HCL</option>
                    <option>THrough other schools</option>
                    <option>THrough other parents</option>
                    <option>THrough friends</option>
                    <option>THrough my therapists</option>
                    <option>others</option>
                  </select>
                  {formik.errors.howdoyouknow && formik.touched.howdoyouknow ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.howdoyouknow}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Reason for contacting us
                  </label>
                  <textarea
                    type="text"
                    id="reason"
                    onChange={formik.handleChange}
                    value={formik.values.reason}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <ReCAPTCHA sitekey="6LceNQYqAAAAANmxHgRcfdU_e8KW_c05MKTOBai3" />
            </div>
            <div className="flex justify-end">
              <button
                disabled={formik.isSubmitting}
                class="hover:shadow-form w-full md:w-[40%] rounded-md bg-blue-950 border-blue-950 hover:border-blue-950 hover:text-blue-950 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetStartedForm;
