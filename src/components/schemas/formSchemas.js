import * as yup from "yup";
import "yup-phone";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const gettingStartedForm = yup.object().shape({
  childName: yup.string().required("This field is required"),
  dob: yup.date().required("This field is required"),
  parentName: yup.string().required("This field is required"),
  fatherName: yup.string().required("This field is required"),
  address: yup.string().required("This field is required"),
  schoolName: yup.string().required("This field is required"),
  expectation: yup.string().required("This field is required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("This field is required"),
  alternativephoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("This field is required"),
  email: yup
    .string()
    .email("please enter valid email address")
    .required("This field is required"),
  howdoyouknow: yup.string().required("Select an option"),
  gender: yup.string().required("Select any one option"),
  relation: yup.string().required("Select an option"),
  expectation: yup.string().required("Select an option"),
  password: yup
    .string()
    .min(5, "Password should be minimum 5 characters")
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "password and confirm password not matching"
    ),
  agree: yup
    .bool()
    .oneOf([true], "You need to accept the terms and conditions")
    .required("You need to accept the terms and conditions"),
});

export const parentPageForm = yup.object().shape({
  schoolName: yup.string().required("This field is required"),
  principalName: yup.string().required("This field is required"),
  buildingName: yup.string().required("This field is required"),
  buildingAddress: yup.string().required("This field is required"),
  buildingState: yup.string().required("This field is required"),
  yearEstablishment: yup
    .number()
    .integer()
    .max(9999, "Year of establishment must be 4 digits")
    .required("This field is required"),
  buildingContact: yup.string().required("This field is required"),
  administrationContact: yup.string().required("This field is required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("This field is required"),
  telephoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("This field is required"),
  email: yup
    .string()
    .email("Please entry valid email address")
    .required("This field is required"),
  studentPopulation: yup.number().integer().required("This field is required"),
  teacherPopulation: yup.number().integer().required("This field is required"),
  schoolType: yup.string().required("This field is required"),
  studentRatio: yup.string().required("This field is required"),
});

export const serviceProviderPageForm = yup.object().shape({
  serviceName: yup.string().required("This field is required"),
  universityName: yup.string().required("This field is required"),
  professionalCharges: yup.string().required("This field is required"),
  yearOfCompletion: yup.date().required("This field is required"),
  specialistIn: yup.string().required("This field is required"),
  yearEstablishment: yup.string().required("This field is required"),
  workExperience: yup.string().required("This field is required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("This field is required"),
  email: yup
    .string()
    .email("please enter valid email address")
    .required("This field is required"),
  agree: yup
    .bool()
    .oneOf([true], "You need to accept the terms and conditions")
    .required("You need to accept the terms and conditions"),
});
