import React, { useState } from "react";
import { useFormik } from "formik";
import { parentPageForm } from "../../schemas/formSchemas";

const schoolPolicyContent1 = [
  {
    li: "Science Labs",
  },
  {
    li: "Sports(Indoor and Outdoor)",
  },
  {
    li: "Extra Curricular Activities",
  },
  {
    li: "Special Education Support",
  },
  {
    li: "Library",
  },
  {
    li: "Playgrounds",
  },
  {
    li: "Cafeteria",
  },
  {
    li: "Resource Room",
  },
  {
    li: "Art Room",
  },
  {
    li: "Auditorium",
  },
  {
    li: "Counselling Suport",
  },
  {
    li: "First Aid Support",
  },
];

const schoolPolicyContent2 = [
  {
    li: "Experimental Learning",
  },
  {
    li: "Differentiated Learning",
  },
  {
    li: "Multiple Intelligence",
  },
  {
    li: "Learning Style",
  },
  {
    li: "Universal Design for Learning",
  },
  {
    li: "Social Emotional curriculum",
  },
];

const schoolPolicyContent3 = [
  {
    li: "Child Protection Policy",
  },
  {
    li: "Health & Safety",
  },
  {
    li: "RTE Act 2009",
  },
  {
    li: "Barrier Free Environment(Accessibility)",
  },
  {
    li: "Grievance Redressal Committee",
  },
];

const schoolDetailsContent1 = [
  {
    li: "primary",
  },
  {
    li: "HS",
  },
  {
    li: "IE",
  },
];

const schoolDetailsContent2 = [
  {
    li: "primary",
  },
  {
    li: "Secondary",
  },
  {
    li: "Higher Secondary",
  },
];

const onSubmit = async (values, actions) => {
  setTimeout(() => actions.resetForm(), 1000);
};
const ParentForm = () => {
  const formik = useFormik({
    initialValues: {
      schoolName: "",
      principalName: "",
      buildingName: "",
      buildingAddress: "",
      buildingState: "",
      yearEstablishment: "",
      buildingContact: "",
      administrationContact: "",
      phoneNumber: "",
      telephoneNumber: "",
      email: "",
      studentPopulation: "",
      teacherPopulation: "",
      schoolType: "",
      studentRatio: "",
    },
    validationSchema: parentPageForm,
    onSubmit,
  });

  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step >= 1 && step <= 2) {
      setStep(step + 1);
    }
  };
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <div class="flex items-center justify-center py-10 md:px-5 lg:p-12">
        <div class="mx-auto w-full max-w-[90%] md:max-w-[100%] lg:max-w-[80%] bg-gray-200 rounded-3xl p-10">
          <form onSubmit={formik.handleSubmit}>
            {step === 1 && (
              <div className="step1">
                <h1 className="text-center font-black text-4xl text-blue-950 pb-8 underline">
                  School Details
                </h1>
                <div class="mb-5 pt-3">
                  <div class="-mx-3 flex flex-wrap">
                    <div class="px-3 w-full md:w-[33.3%]">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          School Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="schoolName"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.schoolName}
                          placeholder="School name"
                          class={`${
                            formik.errors.schoolName &&
                            formik.touched.schoolName
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.schoolName &&
                          formik.touched.schoolName && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.schoolName}
                            </p>
                          )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-[33.3%]">
                      <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Principal Name <span className="text-red-500">*</span>
                      </label>
                      <div class="mb-5">
                        <input
                          type="text"
                          id="principalName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.principalName}
                          placeholder="principal Name"
                          class={`${
                            formik.errors.principalName &&
                            formik.touched.principalName
                              ? "border border-red-600"
                              : ""
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.principalName &&
                        formik.touched.principalName ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.principalName}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-[33.3%]">
                      <label
                        for="name"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Year of Establishment{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="yearEstablishment"
                        onChange={formik.handleChange}
                        value={formik.values.yearEstablishment}
                        onBlur={formik.handleBlur}
                        placeholder="Year of Establishment"
                        class={`${
                          formik.errors.yearEstablishment &&
                          formik.touched.yearEstablishment
                            ? "border border-red-600"
                            : ""
                        } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {formik.errors.yearEstablishment &&
                      formik.touched.yearEstablishment ? (
                        <p className="text-sm font-semibold text-red-500">
                          {formik.errors.yearEstablishment}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div class="mb-5 pt-3">
                  <div class="-mx-3 flex flex-wrap">
                    <div className="px-3 w-full md:w-[33.3%]">
                      <div class="mb-5">
                        <label
                          for="name"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Building Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="buildingName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.buildingName}
                          placeholder="Building Name"
                          class={`${
                            formik.errors.buildingName &&
                            formik.touched.buildingName
                              ? "border border-red-600"
                              : ""
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.buildingName &&
                        formik.touched.buildingName ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.buildingName}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="px-3 w-full md:w-[33.3%]">
                      <div class="mb-5">
                        <label
                          for="phone"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Building Address{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="buildingAddress"
                          onChange={formik.handleChange}
                          value={formik.values.buildingAddress}
                          onBlur={formik.handleBlur}
                          placeholder="Enter your Building Address"
                          class={`${
                            formik.errors.buildingAddress &&
                            formik.touched.buildingAddress
                              ? "border border-red-600"
                              : ""
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.buildingAddress &&
                        formik.touched.buildingAddress ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.buildingAddress}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-[33.3%]">
                      <label
                        for="name"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Building State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="buildingState"
                        onChange={formik.handleChange}
                        value={formik.values.buildingState}
                        onBlur={formik.handleBlur}
                        placeholder="Building state"
                        class={`${
                          formik.errors.buildingState &&
                          formik.touched.buildingState
                            ? "border border-red-600"
                            : ""
                        } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {formik.errors.buildingState &&
                      formik.touched.buildingState ? (
                        <p className="text-sm font-semibold text-red-500">
                          {formik.errors.buildingState}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div class="mb-5 pt-3">
                  <div class="-mx-3 flex flex-wrap">
                    <div class="px-3 w-full md:w-[33.3%]">
                      <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                          Building Contact{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          id="buildingContact"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.buildingContact}
                          placeholder="Building Contact"
                          class={`${
                            formik.errors.buildingContact &&
                            formik.touched.buildingContact
                              ? "border border-red-600"
                              : " "
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.buildingContact &&
                          formik.touched.buildingContact && (
                            <p className="text-sm font-semibold text-red-500">
                              {formik.errors.buildingContact}
                            </p>
                          )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-[33.3%]">
                      <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Administration Contact{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div class="mb-5">
                        <input
                          type="number"
                          id="administrationContact"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.administrationContact}
                          placeholder="Administration Contact"
                          class={`${
                            formik.errors.administrationContact &&
                            formik.touched.administrationContact
                              ? "border border-red-600"
                              : ""
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.administrationContact &&
                        formik.touched.administrationContact ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.administrationContact}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-[33.3%]">
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

                <div class="mb-5">
                  <div class="-mx-3 flex flex-wrap">
                    <div class="px-3 w-full md:w-1/2">
                      <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Telephone Number <span className="text-red-500">*</span>
                      </label>
                      <div class="mb-5">
                        <input
                          type="number"
                          id="telephoneNumber"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.telephoneNumber}
                          placeholder="Telephone Number"
                          class={`${
                            formik.errors.telephoneNumber &&
                            formik.touched.telephoneNumber
                              ? "border border-red-600"
                              : ""
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.telephoneNumber &&
                        formik.touched.telephoneNumber ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.telephoneNumber}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <label
                        for="email"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address <span className="text-red-500">*</span>
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
                  </div>
                </div>
                <div class="mb-5">
                  <div class="-mx-3 flex flex-wrap">
                    <div class="px-3 w-full md:w-1/2">
                      <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Total Number of Student Population{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div class="mb-5">
                        <input
                          type="number"
                          id="studentPopulation"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.studentPopulation}
                          placeholder="Total Number of Student Population"
                          class={`${
                            formik.errors.studentPopulation &&
                            formik.touched.studentPopulation
                              ? "border border-red-600"
                              : ""
                          } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                        />
                        {formik.errors.studentPopulation &&
                        formik.touched.studentPopulation ? (
                          <p className="text-sm font-semibold text-red-500">
                            {formik.errors.studentPopulation}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <label
                        for="email"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Total Number of Teacher Population{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="teacherPopulation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.teacherPopulation}
                        placeholder="Total Number of Teacher Population"
                        class={`${
                          formik.errors.teacherPopulation &&
                          formik.touched.teacherPopulation
                            ? "border border-red-600"
                            : ""
                        } w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                      />
                      {formik.errors.teacherPopulation &&
                      formik.touched.teacherPopulation ? (
                        <p className="text-sm font-semibold text-red-500">
                          {formik.errors.teacherPopulation}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <div class="-mx-3 flex flex-wrap">
                    <div class="px-3 w-full md:w-1/2">
                      <label class="mb-5 block text-lg font-black text-[#07074D] ">
                        School Type <span className="text-red-500">*</span>
                      </label>
                      <div class="w-full px-3 mb-5  grid grid-cols-1 lg:grid-cols-3 ">
                        {schoolDetailsContent1.map((item) => (
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id="checkBoxParentForm"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.checkBoxParentForm}
                              class={`${
                                formik.errors.checkBoxParentForm &&
                                formik.touched.checkBoxParentForm
                                  ? "border border-red-600"
                                  : " "
                              }   bg-white  text-base font-medium text-green-600 outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            />
                            <label class="block text-base font-medium text-[#07074D]">
                              {item.li}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <label class="mb-5 block text-lg font-black text-[#07074D] ">
                        Student Teacher-Ratio{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div class="w-full px-3 mb-5  grid grid-cols-1 lg:grid-cols-3 ">
                        {schoolDetailsContent2.map((item) => (
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id="checkBoxParentForm"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.checkBoxParentForm}
                              class={`${
                                formik.errors.checkBoxParentForm &&
                                formik.touched.checkBoxParentForm
                                  ? "border border-red-600"
                                  : " "
                              }   bg-white  text-base font-medium text-green-600 outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            />
                            <label class="block text-base font-medium text-[#07074D]">
                              {item.li}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="step2">
                <>
                  <h1 className="text-center font-black text-3xl md:text-4xl text-blue-950 pb-8 underline">
                    General Questions
                  </h1>
                  <div class="mb-5 pt-3 flex flex-col gap-3 ">
                    <>
                      <label class="mb-5 block text-lg md:text-xl font-black text-[#07074D] ">
                        1. Infrastructure Facility{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div class="w-full px-3 mb-5  grid grid-cols-1 md:grid-cols-3 ">
                        {schoolPolicyContent1.map((item) => (
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id="checkBoxParentForm"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.checkBoxParentForm}
                              class={`${
                                formik.errors.checkBoxParentForm &&
                                formik.touched.checkBoxParentForm
                                  ? "border border-red-600"
                                  : " "
                              }   bg-white  text-base font-medium text-green-600 outline-none focus:border-[#6A64F1] focus:shadow-md`}
                            />
                            <label class="block text-base md:text-lg font-medium text-[#07074D]">
                              {item.li}
                            </label>
                          </div>
                        ))}
                      </div>
                    </>
                    <>
                      <label class="mb-5 block text-lg md:text-xl font-black text-[#07074D] ">
                        2. Is the School Curriculam Supportive of these
                        Educational Components
                        <span className="text-red-500">*</span>
                      </label>
                      <div class="w-full px-3 mb-5  grid grid-cols-1 md:grid-cols-3 ">
                        {schoolPolicyContent2.map((item) => (
                          <div className="flex items-center gap-3">
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
                            <label class="block text-base md:text-lg font-medium text-[#07074D]">
                              {item.li}
                            </label>
                          </div>
                        ))}
                      </div>
                    </>
                    <>
                      <label class="mb-5 block text-lg md:text-xl font-black text-[#07074D] ">
                        3. Has Your School Implemented the Policies
                        <span className="text-red-500">*</span>
                      </label>
                      <div class="w-full px-3 grid grid-cols-1 md:grid-cols-2 ">
                        {schoolPolicyContent3.map((item) => (
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
                    </>
                  </div>
                </>
              </div>
            )}
            {step === 3 && (
              <div className="step3">
                <div className="">
                  <h1 className="text-center font-black text-4xl text-blue-950 pb-8 underline">
                    School Policy
                  </h1>
                  <div className="flex flex-col gap-5 mb-10">
                    <div className="mb-5">
                      <h1 className="font-bold text-lg md:text-xl mb-5">
                        1. Does the School have an Inclusion Policy that
                        specifies action for including children with special
                        needs?
                      </h1>
                      <div className="flex gap-5 items-center">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="inclusionPolicyYes"
                            name="inclusionPolicy"
                            value="yes"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.inclusionPolicy === "yes"}
                            className="form-radio h-5 w-5 text-blue-600"
                          />
                          <label htmlFor="inclusionPolicyYes">Yes</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="inclusionPolicyNo"
                            name="inclusionPolicy"
                            value="no"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.inclusionPolicy === "no"}
                            className="form-radio h-5 w-5 text-blue-600"
                          />
                          <label htmlFor="inclusionPolicyNo">No</label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h1 className="font-bold text-lg md:text-xl mb-5">
                        2. Is a Multidisciplinary team approach in your school
                        to provide alternatives to suspension or expulsion for
                        students with complex needs?
                      </h1>
                      <div className="flex gap-5 items-center">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="multidisciplinaryTeamYes"
                            name="multidisciplinaryTeam"
                            value="yes"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={
                              formik.values.multidisciplinaryTeam === "yes"
                            }
                            className="form-radio h-5 w-5 text-blue-600"
                          />
                          <label htmlFor="multidisciplinaryTeamYes">Yes</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            id="multidisciplinaryTeamNo"
                            name="multidisciplinaryTeam"
                            value="no"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={
                              formik.values.multidisciplinaryTeam === "no"
                            }
                            className="form-radio h-5 w-5 text-blue-600"
                          />
                          <label htmlFor="multidisciplinaryTeamNo">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>

          <div
            className={`${
              step === 2 || step === 3 ? "justify-between" : "justify-end"
            } flex`}
          >
            {step > 1 && (
              <button
                onClick={handlePrevious}
                className="hover:shadow-form w-[50%] rounded-md bg-blue-950 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Previous
              </button>
            )}

            <button
              onClick={handleNext}
              className="hover:shadow-form w-[50%] rounded-md bg-blue-950 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentForm;
