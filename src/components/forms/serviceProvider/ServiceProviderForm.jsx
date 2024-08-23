import React, { useState } from "react";
import { useFormik } from "formik";
import { serviceProviderPageForm } from "../../schemas/formSchemas";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

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
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const formik = useFormik({
    initialValues: {
      serviceName: "",
      universityName: "",
      gender: "",
      professionalCharges: "",
      yearOfCompletion: "",
      specialistIn: "",
      workExperience: "",
      phoneNumber: "",
      email: "",
      agree: false,
      captcha: "",
      specialization: [],
      modeOfDelivery: "",
      modeOfOperation: "",
      modeOfService: [],
      professionalQualification: "",
    },

    validationSchema: serviceProviderPageForm,
    onSubmit: async (values, actions) => {
      console.log(values);
      setLoading(true);
      setSubmissionStatus(null);
      const postData = {
        name: values.serviceName,
        gender: values.gender,
        phone_number: values.phoneNumber,
        email_address: values.email,
        area_of_specializtion: values.specialization,
        type_of_service: values.modeOfOperation,
        providing_home_service: values.modeOfDelivery,
        mode_of_service: values.modeOfService,
        profession_charges_per_session: values.professionalCharges,
        universtiy_name: values.universityName,
        profession_qualification: values.professionalQualification,
        year_of_completion: values.yearOfCompletion,
        specialist_in: values.specialistIn,
        work_experience: values.workExperience,
        agree_of_acknowledgement: "Agreed",
        organisation_name: null,
        organisation_head_name: null,
        organisation_email_address: null,
        organisation_website_info: null,
        specification_limitation_constraint: null,
        "g-recaptcha-response": recaptchaValue,
      };

      try {
        const response = await axios.post(
          // "https://onlineappointment.onrender.com/serviceProvider",
          "http://183.83.188.205:60162/api/serviveprovider/storedata",
          postData
        );
        setSubmissionStatus("success");

        actions.resetForm();
        console.log("Response data", postData);
      } catch (error) {
        setSubmissionStatus("error");

        console.error("There was an error submitting the form!", error);
        console.log(values);
      } finally {
        setLoading(false);
      }
    },
  });
  const handleRecaptcha = (value) => {
    setRecaptchaValue(value);
    console.log("value : ", value);
    formik.setFieldValue("captcha", value);
  };
  const handleCheckboxChange = (event, fieldName) => {
    const { value, checked } = event.target;
    const currentValues = formik.values[fieldName];
    if (checked) {
      formik.setFieldValue(fieldName, [...currentValues, value]);
    } else {
      formik.setFieldValue(
        fieldName,
        currentValues.filter((item) => item !== value)
      );
    }
  };

  return (
    <>
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
        <div class="flex items-center justify-center py-10 md:px-5 lg:p-12">
          <div class="mx-auto w-full max-w-[90%] md:max-w-[100%] lg:max-w-[80%] bg-gray-200 rounded-3xl p-10">
            <form onSubmit={formik.handleSubmit}>
              <div className="step1">
                {/* Personal Details */}
                <>
                  <h1 className="text-center font-black text-3xl md:text-5xl text-blue-950 pb-8 ">
                    Service Provider
                  </h1>
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
                      {/* GENDER */}

                      <div class="w-full px-3 sm:w-1/2 ">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Child Gender
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="gender"
                          onChange={formik.handleChange}
                          value={formik.values.gender}
                          onBlur={formik.handleBlur}
                          class={`${
                            formik.errors.gender && formik.touched.gender
                              ? "border border-red-600"
                              : ""
                          } mb-5 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        >
                          <option>Select an option</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        {formik.errors.gender && formik.touched.gender ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.gender}
                          </p>
                        ) : (
                          ""
                        )}
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
                    </div>
                  </div>
                  <div className="mb-5 ">
                    <h1 className="font-medium text-[#07074D] mb-5">
                      Specialization <span className="text-red-500">*</span>
                    </h1>
                    {/* Specialization  */}
                    <div class="w-full px-3 grid grid-cols-1 md:grid-cols-3 ">
                      {serviceProviderContent1.map((item) => (
                        <div className="flex w-full items-center gap-3">
                          <input
                            type="checkbox"
                            className="rounded-[25%]"
                            name="selectedOptions"
                            id="specialization"
                            onBlur={formik.handleBlur}
                            // onChange={formik.handleChange}
                            // value={formik.values.specialization}
                            onChange={(e) =>
                              handleCheckboxChange(e, "specialization")
                            }
                            value={item.li}
                            checked={formik.values.specialization.includes(
                              item.li
                            )}
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
                      {formik.errors.specialization &&
                      formik.touched.specialization ? (
                        <p className="text-sm font-semibold text-red-500">
                          {formik.errors.specialization}
                        </p>
                      ) : (
                        ""
                      )}
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
                    {/* Mode of operation */}
                    <div className="-mx-3 flex flex-wrap ">
                      <div class="px-3 w-full md:w-1/2 mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Mode of operation
                          <span className="text-red-500">*</span>
                        </label>
                        <div class="my-auto">
                          <input
                            type="radio"
                            id="modeOfOperation1"
                            name="modeOfOperation"
                            onChange={formik.handleChange}
                            value="individual"
                            checked={
                              formik.values.modeOfOperation === "individual"
                            }
                            class="mr-2"
                          />
                          <label
                            htmlFor="modeOfOperation1"
                            className="mr-5 text-[#07074D] font-medium"
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
                            className="mr-5 text-[#07074D] font-medium"
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
                      {/* MODE OF DELIVERY */}
                      <div class="px-3 w-full md:w-1/2">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Mode of delivery
                          <span className="text-red-500">*</span>
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
                            className="mr-5 text-[#07074D] font-medium"
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
                            className="mr-5 text-[#07074D] font-medium"
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
                        {/* Mode of Service */}
                        <div className="flex flex-col w-full md:w-1/2">
                          <h1
                            className="font-medium
                       text-[#07074D] mb-5"
                          >
                            Mode of Service
                            <span className="text-red-500">*</span>
                          </h1>
                          <div class="w-full px-3 grid grid-cols-1 md:grid-cols-3">
                            {serviceProviderContent2.map((item) => (
                              <div className="flex w-full items-center gap-3">
                                <input
                                  type="checkbox"
                                  className="rounded-[25%]"
                                  id="modeOfService"
                                  onBlur={formik.handleBlur}
                                  // onChange={formik.handleChange}
                                  // value={formik.values.modeOfService}
                                  onChange={(e) =>
                                    handleCheckboxChange(e, "modeOfService")
                                  }
                                  value={item.li}
                                  checked={formik.values.modeOfService.includes(
                                    item.li
                                  )}
                                  placeholder="Child name"
                                  class={`${
                                    formik.errors.modeOfService &&
                                    formik.touched.modeOfService
                                      ? "border border-red-600"
                                      : " "
                                  }   bg-white  text-base font-medium text-green-600 outline-none focus:border-[#6A64F1] focus:shadow-md`}
                                />
                                <label class="w-full block text-base md:text-lg font-medium text-[#161660]">
                                  {item.li}
                                </label>
                              </div>
                            ))}
                            {formik.errors.modeOfService &&
                              formik.touched.modeOfService && (
                                <p className="text-sm font-semibold text-red-500">
                                  {formik.errors.modeOfService}
                                </p>
                              )}
                          </div>
                        </div>
                        {/* Professional Charges Per Session */}
                        <div className="w-full mt-5 md:w-1/2">
                          <div class="md:px-3 p-0 w-full ">
                            <div class="mb-5">
                              <label class="mb-3 block text-base font-medium text-[#07074D]">
                                Professional Charges Per Session{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="tel"
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
                            University Name
                            <span className="text-red-500">*</span>
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
                            <div className="flex w-full items-center gap-3">
                              <input
                                type="radio"
                                className="round"
                                id="Diploma"
                                name="professionalQualification"
                                onChange={formik.handleChange}
                                value="Diploma"
                                checked={
                                  formik.values.professionalQualification ===
                                  "Diploma"
                                }
                              />

                              <label class="w-full block text-base md:text-lg font-medium text-[#161660]">
                                Diploma
                              </label>
                              <input
                                type="radio"
                                className="round"
                                id="Bachelor"
                                name="professionalQualification"
                                onChange={formik.handleChange}
                                value="Bachelor"
                                checked={
                                  formik.values.professionalQualification ===
                                  "Bachelor"
                                }
                              />

                              <label class="w-full block text-base md:text-lg font-medium text-[#161660]">
                                Bachelor
                              </label>
                              <input
                                type="radio"
                                className="round"
                                id="Master"
                                name="professionalQualification"
                                onChange={formik.handleChange}
                                value="Master"
                                checked={
                                  formik.values.professionalQualification ===
                                  "Master"
                                }
                              />

                              <label class="w-full block text-base md:text-lg font-medium text-[#161660]">
                                Master
                              </label>
                              <input
                                type="radio"
                                className="round"
                                id="Phd"
                                name="professionalQualification"
                                onChange={formik.handleChange}
                                value="Phd"
                                checked={
                                  formik.values.professionalQualification ===
                                  "Phd"
                                }
                              />

                              <label class="w-full block text-base md:text-lg font-medium text-[#161660]">
                                Phd
                              </label>
                            </div>
                          </div>
                          {formik.errors.professionalQualification &&
                            formik.touched.professionalQualification && (
                              <p className="text-sm font-semibold text-red-500">
                                {formik.errors.professionalQualification}
                              </p>
                            )}
                        </div>
                      </div>

                      <div class="w-full px-3 sm:w-1/2">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Year Of Completion
                          <span className="text-red-500">*</span>
                        </label>
                        <div class="mb-5">
                          <input
                            type="month"
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
                            Work Experience
                            <span className="text-red-500">*</span>
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
                      <div className="w-full p-5">
                        <p className="text-[#07074D]">
                          I hereby agree to be part of Elina network for
                          Professionals who enable inclusion. By being part of
                          Elina network for professionals, I understand that
                        </p>
                        {serviceProviderContent4.map((item) => (
                          <li className="text-gray-600">{item.li}</li>
                        ))}
                        <input
                          type="checkbox"
                          className="rounded-[25%]"
                          id="agree"
                          name="agree"
                          checked={formik.values.agree}
                          onChange={formik.handleChange}
                          required
                        ></input>
                        <label className="ml-3 text-[#07074D]">I Agree</label>
                        {formik.touched.agree && formik.errors.agree && (
                          <p className="text-sm text-red-600">
                            {formik.errors.agree}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              </div>
              <div id="captcha" className="pb-">
                <ReCAPTCHA
                  onChange={handleRecaptcha}
                  // sitekey="6LceNQYqAAAAANmxHgRcfdU_e8KW_c05MKTOBai3"
                  sitekey="6LcfLFUoAAAAACno3hdClnckkDsl4ERrkfhX7Alr"
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

export default ServiceProviderForm;
