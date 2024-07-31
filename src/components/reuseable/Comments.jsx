import React from "react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { comments } from "../schemas/formSchemas";

const Comments = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phonenumber: "",
      email: "",
      comment: "",
      captcha: "",
    },
    validationSchema: comments,
    onSubmit: (values, actions) => {
      actions.resetForm();
      alert("Form submitted successfully");
    },
  });
  return (
    <>
      <div className="comments">
        <div className="w-full border-gray-900 bg-gray-200 rounded-3xl my-10">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col justify-center  w-full p-10 gap-5"
          >
            <p className="flex justify-left text-4xl font-black text-blue-950">
              Leave a comment
            </p>
            <label for="name">
              Name:<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              class={`${
                formik.errors.name && formik.touched.name
                  ? "border border-red-600"
                  : " "
              } w-full border-b-1 border-t-0 border-x-0 rounded-md`}
              type="text"
              placeholder="Enter your name"
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-sm font-semibold text-red-500">
                {formik.errors.name}
              </p>
            )}
            <label for="phonenumber">
              Phone number:<span className="text-red-500">*</span>
            </label>

            <input
              id="phonenumber"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phonenumber}
              class={`${
                formik.errors.phonenumber && formik.touched.phonenumber
                  ? "border border-red-600"
                  : " "
              } w-full border-b-1 border-t-0 border-x-0 rounded-md`}
              type="tel"
              placeholder="Enter your phone number"
            />
            {formik.errors.phonenumber && formik.touched.phonenumber && (
              <p className="text-sm font-semibold text-red-500">
                {formik.errors.phonenumber}
              </p>
            )}
            <label for="email">
              Email address:<span className="text-red-500">*</span>
            </label>

            <input
              id="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              class={`${
                formik.errors.email && formik.touched.email
                  ? "border border-red-600"
                  : " "
              } w-full border-b-1 border-t-0 border-x-0 rounded-md`}
              type="email"
              placeholder="Enter your email address"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-sm font-semibold text-red-500">
                {formik.errors.email}
              </p>
            )}
            <label for="comment">
              Comment:<span className="text-red-500">*</span>
            </label>

            <textarea
              id="comment"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.comment}
              class={`${
                formik.errors.comment && formik.touched.comment
                  ? "border border-red-600"
                  : " "
              } w-full border-b-1 border-t-0 border-x-0 rounded-md`}
            />
            {formik.errors.comment && formik.touched.comment && (
              <p className="text-sm font-semibold text-red-500">
                {formik.errors.comment}
              </p>
            )}
            <div id="captcha" className="py-5">
              <ReCAPTCHA sitekey="6LceNQYqAAAAANmxHgRcfdU_e8KW_c05MKTOBai3" />

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
              disabled={formik.isSubmitting}
              className="flex justify-start bg-blue-950 border-blue-950 text-white hover:bg-white hover:text-blue-950 hover:border-blue-950 w-fit py-3 px-7"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
