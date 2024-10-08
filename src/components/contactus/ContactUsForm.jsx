import { useFormik } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { contactUsForm } from "../schemas/formSchemas";

const ContactUsForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const formik = useFormik({
    initialValues: {
      floating_first_name: "",
      floating_last_name: "",
      floating_email: "",
      floating_phone: "",
      message: "",
      captcha: "",
    },
    validationSchema: contactUsForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleRecaptcha = (value) => {
    setRecaptchaValue(value);
    console.log("value : ", value);
    formik.setFieldValue("captcha", value);
  };
  return (
    <>
      <div className="lg:pl-[8%] px-10 py-20">
        <h1 className="text-5xl text-blue-700 font-black pb-5">
          New Inquiries
        </h1>
        <form onSubmit={formik.handleSubmit} class="max-w-2xl lg:mx-0 mx-auto">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.floating_first_name}
                class={`${
                  formik.errors.floating_first_name &&
                  formik.touched.floating_first_name
                    ? "border border-red-600"
                    : " "
                } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              {formik.errors.floating_first_name &&
                formik.touched.floating_first_name && (
                  <p className="text-sm font-semibold text-red-500">
                    {formik.errors.floating_first_name}
                  </p>
                )}
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.floating_last_name}
                class={`${
                  formik.errors.floating_last_name &&
                  formik.touched.floating_last_name
                    ? "border border-red-600"
                    : " "
                } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              {formik.errors.floating_last_name &&
                formik.touched.floating_last_name && (
                  <p className="text-sm font-semibold text-red-500">
                    {formik.errors.floating_last_name}
                  </p>
                )}
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.floating_email}
              class={`${
                formik.errors.floating_email && formik.touched.floating_email
                  ? "border border-red-600"
                  : " "
              } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
            />
            {formik.errors.floating_email && formik.touched.floating_email && (
              <p className="text-sm font-semibold text-red-500">
                {formik.errors.floating_email}
              </p>
            )}
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.floating_phone}
                class={`${
                  formik.errors.floating_phone && formik.touched.floating_phone
                    ? "border border-red-600"
                    : " "
                } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              {formik.errors.floating_phone &&
                formik.touched.floating_phone && (
                  <p className="text-sm font-semibold text-red-500">
                    {formik.errors.floating_phone}
                  </p>
                )}
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
              <div className="pt-5">
                <label
                  for="message"
                  class="block  mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >
                  Question / Comments
                </label>
                <textarea
                  id="message"
                  rows="4"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  class={`${
                    formik.errors.message && formik.touched.message
                      ? "border border-red-600"
                      : " "
                  } block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Leave a Question / Comments..."
                ></textarea>
                {formik.errors.message && formik.touched.message && (
                  <p className="text-sm font-semibold text-red-500">
                    {formik.errors.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="pb-3">
            <p className="text-sm font-semibold text-blue-600">
              For Immediate assistance contact Mrs.Aparna Ravikannan :{" "}
              <span className="font-bold">+91 984 079 4434</span>
            </p>
            <p className="text-xs text-gray-400 font-medium">
              Your privacy is important to us. All information shared will be
              kept confidential and used solely to respond to your inquiries and
              provide requested services.*
            </p>
          </div>
          <div className="py-5" id="captcha">
            <ReCAPTCHA
              // sitekey="6LceNQYqAAAAANmxHgRcfdU_e8KW_c05MKTOBai3"
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
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-white  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:border-blue-600 hover:text-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
