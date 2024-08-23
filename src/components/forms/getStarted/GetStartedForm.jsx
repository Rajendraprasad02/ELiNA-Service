import React, { useState } from "react";
import { useFormik } from "formik";
import { gettingStartedForm } from "../../schemas/formSchemas";
import BreadCrumbs from "../../reuseable/BreadCrumbs";

import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const GetStartedForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

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
      captcha: "",
    },
    validationSchema: gettingStartedForm,
    onSubmit: async (values, actions) => {
      console.log("onclick", values);

      setLoading(true);
      setSubmissionStatus(null);
      const c_dob = values.dob;

      const getStartedDB = {
        name: values.childName,
        parentname: values.parentName,
        gender: values.gender,
        childrelationship: values.relation,
        child_dob: c_dob.split("-").reverse().join("/"),
        contact_no: values.phoneNumber,
        child_school: values.schoolName,
        email_address: values.email,
        knowaboutUs: values.howdoyouknow,
        contact_reason: values.reason,
        other_reason: null,
        age: 10,
        "g-recaptcha-response": recaptchaValue,
      };
      console.log(getStartedDB);

      try {
        const response = await axios.post(
          // "http://183.83.188.205:60162/api/mayi_helpyou/mail",
          "https://onlineappointment.onrender.com/getStarted",
          getStartedDB
        );

        setSubmissionStatus("success");
        actions.resetForm();
        alert("form submitted");
      } catch (error) {
        setSubmissionStatus("error");
        console.error("There was an error submitting the form!", error);
        alert("form not submitted");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleRecaptcha = (value) => {
    setRecaptchaValue(value);
    formik.setFieldValue("captcha", value);
  };

  return (
    <>
      <div className="md:ml-14 md:pt-5">
        <BreadCrumbs />
      </div>
      {loading ? (
        <div className="flex items-center justify-center p-5 md:p-12 HeroBg2">
          <div className="mx-auto max-w-[650px] md:max-w-[80%] bg-gray-200 rounded-3xl p-5 md:p-10 text-center">
            <h1 className="text-xl font-bold">Submitting your form...</h1>
            <div className="mt-5">
              {/* Add your spinner component or any loading indicator here */}
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center p-5 md:p-12 HeroBg2">
          <div className="mx-auto max-w-[650px] md:max-w-[80%] bg-gray-200 rounded-3xl p-5 md:p-10">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="text-center font-black text-4xl text-blue-950 pb-4 underline">
                Getting Started
              </h1>
              <div className="mb-5 pt-3">
                <label className="mb-5 block text-lg font-black text-[#07074D] ">
                  Child information
                </label>
                <div className="-mx-3 flex flex-wrap">
                  {/* Child Name */}
                  <div className="w-full px-3 sm:w-1/2 ">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Child name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="childName"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.childName}
                        placeholder="Child name"
                        disabled={loading}
                        className={`${
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
                  {/* Date of birth */}
                  <div className="w-full px-3 sm:w-1/2 ">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Date of birth<span className="text-red-500">*</span>
                    </label>
                    <div className="mb-5">
                      <input
                        type="date"
                        id="dob"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dob}
                        placeholder="D.O.B"
                        disabled={loading}
                        className={`${
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
                  {/* child gender */}
                  <div className="w-full px-3 sm:w-1/2 ">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Child Gender
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gender"
                      onChange={formik.handleChange}
                      value={formik.values.gender}
                      onBlur={formik.handleBlur}
                      disabled={loading}
                      className={`${
                        formik.errors.gender && formik.touched.gender
                          ? "border border-red-600"
                          : ""
                      } mb-5 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    >
                      <option>Select an option</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    {formik.errors.relation && formik.touched.relation ? (
                      <p className="text-sm font-semibold text-red-500">
                        {formik.errors.relation}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="w-full px-3 sm:w-1/2 ">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Relationship with child
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="relation"
                      onChange={formik.handleChange}
                      value={formik.values.relation}
                      onBlur={formik.handleBlur}
                      disabled={loading}
                      className={`${
                        formik.errors.relation && formik.touched.relation
                          ? "border border-red-600"
                          : ""
                      } mb-5 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
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
                  <div className="w-full px-3 sm:w-1/2 mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
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
                      disabled={loading}
                      className={`${
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
                  <div className="w-full px-3 sm:w-1/2 mb-5">
                    <label
                      htmlFor="phoneNumber"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}
                      placeholder="Phone Number"
                      disabled={loading}
                      className={`${
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
                  <div className="w-full px-3 sm:w-1/2 mb-5">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#07074D]"
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
                      disabled={loading}
                      className={`${
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
                  <div className="w-full px-3 sm:w-1/2 mb-5">
                    <label
                      htmlFor="schoolName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Child's current school (if attending)
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      onChange={formik.handleChange}
                      value={formik.values.schoolName}
                      placeholder="School name"
                      disabled={loading}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 mb-5">
                    <label
                      htmlFor="howdoyouknow"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      How do you know about us:{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="howdoyouknow"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.howdoyouknow}
                      disabled={loading}
                      className={`${
                        formik.touched.howdoyouknow &&
                        formik.errors.howdoyouknow
                          ? "border border-red-600"
                          : ""
                      }  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    >
                      <option>Select an option</option>
                      <option>Elina Website</option>
                      <option>Social Media</option>
                      <option>Through HCL</option>
                      <option>Through other schools</option>
                      <option>Through other parents</option>
                      <option>Through friends</option>
                      <option>Through my therapists</option>
                      <option>others</option>
                    </select>
                    {formik.errors.howdoyouknow &&
                    formik.touched.howdoyouknow ? (
                      <p className="text-sm font-semibold text-red-500">
                        {formik.errors.howdoyouknow}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="w-full px-3 sm:w-1/2 mb-5">
                    <label
                      htmlFor="reason"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Reason for contacting us
                    </label>
                    <textarea
                      id="reason"
                      onChange={formik.handleChange}
                      value={formik.values.reason}
                      disabled={loading}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div id="captcha" className="">
                <ReCAPTCHA
                  sitekey="6LcfLFUoAAAAACno3hdClnckkDsl4ERrkfhX7Alr"
                  onChange={handleRecaptcha}
                />
                {formik.errors.captcha && formik.touched.captcha ? (
                  <p className="text-sm font-semibold text-red-500">
                    {formik.errors.captcha}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="hover:shadow-form w-full md:w-[40%] rounded-md bg-blue-950 border-blue-950 hover:border-blue-950 hover:text-blue-950 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
              {submissionStatus === "success" && (
                <div className="mt-5 text-green-500 text-center">
                  Form submitted successfully!
                </div>
              )}
              {submissionStatus === "error" && (
                <div className="mt-5 text-red-500 text-center">
                  There was an error submitting the form. Please contact admin.
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default GetStartedForm;
