import React, { useState } from "react";
import { useFormik } from "formik";
import { gettingStartedForm } from "../../schemas/formSchemas";
import ReCAPTCHA from "react-google-recaptcha";

const onSubmit = (values, actions) => {
  setTimeout(() => actions.resetForm(), 1000);
};

const ParentForm = () => {
  const formik = useFormik({
    initialValues: {
      childName: "",
      dob: "",
      gender: "",
      fatherName: "",
      motherName: "",
      phoneNumber: "",
      alternativephoneNumber: "",
      email: "",
      schoolName: "",
      howdoyouknow: "",
      expectation: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
    validationSchema: gettingStartedForm,
    onSubmit,
  });

  console.log(formik);

  return (
    <>
      <div class="flex items-center justify-center p-5 md:p-12 HeroBg2">
        <div class="mx-auto max-w-[650px] md:max-w-[80%] bg-gray-200 rounded-3xl p-5 md:p-10">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-center font-black text-4xl text-blue-950 pb-4 underline">
              Enrollment Form - Parent
            </h1>
            <div class="mb-5 pt-3">
              <label class="mb-5 block text-lg font-black text-[#07074D] ">
                Child information
              </label>
              <div class="-mx-3 flex flex-wrap">
                {/* CHILD NAME */}
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
                {/* GENDER */}
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
                {/* RELATIONSHIP WITH CHILD */}
                {/* <div class="w-full px-3 sm:w-1/2 ">
                  <label class="mb-3 block text-base font-medium text-[#07074D]">
                    Relationship with child
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
                </div> */}
                {/* Child's Current School Name and Address */}
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Child's Current School Name and Address
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    id="schoolName"
                    onChange={formik.handleChange}
                    value={formik.values.schoolName}
                    placeholder="School name"
                    class={`${
                      formik.errors.schoolName && formik.touched.schoolName
                        ? "border border-red-600"
                        : ""
                    } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  />
                  {formik.errors.schoolName && formik.touched.schoolName ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.schoolName}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* Child's Father/Guardian Name */}
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Child's Father/Guardian Name
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fatherName}
                    placeholder="Name of the Parents/Guardian"
                    class={`${
                      formik.errors.fatherName && formik.touched.fatherName
                        ? "border border-red-600"
                        : ""
                    } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  />
                  {formik.errors.fatherName && formik.touched.fatherName ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.fatherName}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* Child's Mother/Primary Caretaker's Name */}
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Child's Mother/Primary Caretaker's Name
                  </label>
                  <input
                    type="text"
                    id="motherName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.motherName}
                    placeholder="Enter name of the Mother/Primary Caretaker's Name"
                    class={`${
                      formik.errors.motherName && formik.touched.motherName
                        ? "border border-red-600"
                        : ""
                    } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  />
                  {formik.errors.motherName && formik.touched.motherName ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.motherName}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* PHONE NUMBER */}
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
                {/* ALTERNATIVE PHONE NUMBER */}
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="phone"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Alternative Phone Number
                  </label>
                  <input
                    type="number"
                    id="alternativephoneNumber"
                    onChange={formik.handleChange}
                    value={formik.values.alternativephoneNumber}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your alternative phone number"
                    class={`${
                      formik.errors.alternativephoneNumber &&
                      formik.touched.alternativephoneNumber
                        ? "border border-red-600"
                        : ""
                    } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  />
                  {formik.errors.alternativephoneNumber &&
                  formik.touched.alternativephoneNumber ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.alternativephoneNumber}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* EMAIL ADDRESS */}
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
                  <div className="text-red-600 text-sm font-semibold">
                    Note: You can use this Email to login.
                  </div>
                  {formik.errors.email && formik.touched.email ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* How do you know about us */}
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    How do you know about us
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
                    } mb-5 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
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
                {/* ADDRESS */}
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Address<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    id="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    class={`${
                      formik.errors.address && formik.touched.address
                        ? "border border-red-600"
                        : ""
                    } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  />
                  {formik.errors.address && formik.touched.address ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.address}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* What is your expectation from Elina? */}
                <div class="w-full px-3 sm:w-1/2 mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    What is your expectation from Elina?
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    id="expectation"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.expectation}
                    class={`${
                      formik.errors.expectation && formik.touched.expectation
                        ? "border border-red-600"
                        : ""
                    } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                  />
                  {formik.errors.expectation && formik.touched.expectation ? (
                    <p className="text-sm font-semibold text-red-500">
                      {formik.errors.expectation}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* PASSWORD */}
                <div class="w-full px-3 sm:w-1/2 ">
                  <div class="mb-5">
                    <label class="mb-3 block text-base font-medium text-[#07074D]">
                      Password<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder="Enter password"
                      class={`${
                        formik.errors.password && formik.touched.password
                          ? "border border-red-600"
                          : " "
                      } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                    {formik.errors.password && formik.touched.password && (
                      <p className="text-sm font-semibold text-red-500">
                        {formik.errors.password}
                      </p>
                    )}
                  </div>
                </div>
                {/* CONFIRM PASSWORD */}
                <div class="w-full px-3 sm:w-1/2 ">
                  <div class="mb-5">
                    <label class="mb-3 block text-base font-medium text-[#07074D]">
                      Confirm Password<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      placeholder="Confirm Password"
                      class={`${
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword
                          ? "border border-red-600"
                          : " "
                      } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                    {formik.errors.confirmPassword &&
                      formik.touched.confirmPassword && (
                        <p className="text-sm font-semibold text-red-500">
                          {formik.errors.confirmPassword}
                        </p>
                      )}
                  </div>
                </div>
                <div className="ml-3 text-red-600 text-sm font-semibold">
                  Note : Please ensure the accuracy of the email address and
                  password before proceeding.
                </div>
                <div className="lg:px-[1%] lg:py-[3%]">
                  <p className="text-gray-700">
                    I hereby agree to be part of Elina network for Professionals
                    who enable inclusion. By being part of Elina network for
                    professionals, I understand that
                    <span className="text-red-500">*</span>
                  </p>

                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formik.values.agree}
                    onChange={formik.handleChange}
                  ></input>
                  <label className="ml-3 text-[#07074D]">I Agrees</label>
                  {formik.touched.agree && formik.errors.agree && (
                    <p className="text-sm text-red-600">
                      {formik.errors.agree}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="py-">
              <ReCAPTCHA sitekey="6LceNQYqAAAAANmxHgRcfdU_e8KW_c05MKTOBai3" />
            </div>
            <div className="flex justify-center">
              <button
                disabled={formik.isSubmitting}
                class="hover:shadow-form w-full md:w-[30%] rounded-md bg-blue-950 border-blue-950 hover:border-blue-950 hover:text-blue-950 py-3 px-8 text-center text-base font-semibold text-white outline-none"
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

export default ParentForm;
