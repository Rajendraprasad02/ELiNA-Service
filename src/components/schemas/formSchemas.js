import * as yup from "yup";
import "yup-phone";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const parentFormAnimated = yup.object().shape({
  childName: yup.string().required("This field is required"),
  dob: yup.date().required("This field is required"),
  gender: yup.string().required("Select any one option"),

  fatherName: yup.string().required("This field is required"),
  motherName: yup.string().required("This field is required"),
  alternativephoneNumber: yup
    .string()
    .matches(phoneRegExp, "Alternative phone number is not valid")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("This field is required"),
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
  schoolName: yup.string().required("This field is required"),
  howdoyouknow: yup.string().required("Select an option"),
  expectation: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
  confirmPassword: yup.string().required("This field is required"),
  captcha: yup.string().required("Captcha is required"),
  agree: yup.string().required("This field is required"),
});

export const gettingStartedForm = yup.object().shape({
  childName: yup.string().required("This field is required"),
  dob: yup.date().required("This field is required"),
  gender: yup.string().required("Select any one option"),
  reason: yup.string().required("Select an option"),
  parentName: yup.string().required("This field is required"),

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
  howdoyouknow: yup.string().required("Select an option"),

  captcha: yup.string().required("Captcha is required"),
});

// export const parentPageForm = yup.object().shape({
//   schoolName: yup.string().required("This field is required"),
//   principalName: yup.string().required("This field is required"),
//   buildingName: yup.string().required("This field is required"),
//   buildingAddress: yup.string().required("This field is required"),
//   buildingState: yup.string().required("This field is required"),
//   yearEstablishment: yup
//     .number()
//     .integer()
//     .max(9999, "Year of establishment must be 4 digits")
//     .required("This field is required"),
//   buildingContact: yup.string().required("This field is required"),
//   administrationContact: yup.string().required("This field is required"),
//   phoneNumber: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .min(10, "Must be exactly 10 digits")
//     .max(10, "Must be exactly 10 digits")
//     .required("This field is required"),
//   telephoneNumber: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .min(10, "Must be exactly 10 digits")
//     .max(10, "Must be exactly 10 digits")
//     .required("This field is required"),
//   email: yup
//     .string()
//     .email("Please entry valid email address")
//     .required("This field is required"),
//   studentPopulation: yup.number().integer().required("This field is required"),
//   teacherPopulation: yup.number().integer().required("This field is required"),
//   // studentRatio: yup.string().required("This field is required"),
//   captcha: yup.string().required("Captcha is required"),
//   schoolType: yup
//     .array()
//     .min(1, "This field is required")
//     .of(yup.string())
//     .required("This field is required"),
//   studentTeacherRatio: yup
//     .array()
//     .min(1, "This field is required")
//     .of(yup.string())
//     .required("This field is required"),
//   infrastructureFacility: yup
//     .array()
//     .min(1, "This field is required")
//     .of(yup.string())
//     .required("This field is required"),
//   curriculamSupport: yup
//     .array()
//     .min(1, "This field is required")
//     .of(yup.string())
//     .required("This field is required"),
//   schoolPolicy: yup
//     .array()
//     .min(1, "This field is required")
//     .of(yup.string())
//     .required("This field is required"),
//   multidisciplinaryTeam: yup.string().required("This field is required"),
//   inclusionPolicy: yup.string().required("This field is required"),
// });
export const parentPageFormstep1 = yup.object().shape({
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
  schoolType: yup
    .array()
    .min(1, "This field is required")
    .of(yup.string())
    .required("This field is required"),
  studentTeacherRatio: yup
    .array()
    .min(1, "This field is required")
    .of(yup.string())
    .required("This field is required"),
});
export const parentPageFormstep2 = yup.object().shape({
  infrastructureFacility: yup
    .array()
    .min(1, "This field is required")
    .of(yup.string())
    .required("This field is required"),
  curriculamSupport: yup
    .array()
    .min(1, "This field is required")
    .of(yup.string())
    .required("This field is required"),
  schoolPolicy: yup
    .array()
    .min(1, "This field is required")
    .of(yup.string())
    .required("This field is required"),
});
export const parentPageFormstep3 = yup.object().shape({
  multidisciplinaryTeam: yup.string().required("This field is required"),
  inclusionPolicy: yup.string().required("This field is required"),
});

export const serviceProviderPageForm = yup.object().shape({
  serviceName: yup.string().required("This field is required"),
  universityName: yup.string().required("This field is required"),
  gender: yup.string().required("Select any one option"),
  professionalCharges: yup.string().required("This field is required"),
  yearOfCompletion: yup.date().required("This field is required"),
  specialistIn: yup.string().required("This field is required"),
  workExperience: yup.string().required("This field is required"),
  phoneNumber: yup
    .string()
    .required("This field is required")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .matches(phoneRegExp, "Phone number is not valid"),
  email: yup
    .string()
    .email("please enter valid email address")
    .required("This field is required"),
  agree: yup.bool().required("This field is required"),
  captcha: yup.string().required("Captcha is required"),
  specialization: yup
    .array()
    .min(1, "This field is required")
    .of(yup.string())
    .required("This field is required"),
  modeOfOperation: yup.string().required("Please select any option"),
  modeOfDelivery: yup.string().required("Please select any option"),
  modeOfService: yup
    .array()
    .min(1, "This field is required")
    .of(yup.string())
    .required("This field is required"),
  professionalQualification: yup.string().required("Please select any option"),
});

export const internPageForm = yup.object().shape({
  internName: yup.string().required("This field is required"),
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
  dob: yup.date().required("This field is required"),
  internDob: yup.string().required("This field is required"),
  workinghour: yup.string().required("This field is required"),
  parentName: yup.string().required("This field is required"),
  agree: yup
    .bool()
    .oneOf([true], "You need to accept the terms and conditions")
    .required("You need to accept the terms and conditions"),
  captcha: yup.string().required("Captcha is required"),
  shortAboutElina: yup.string().required("This field is required"),
  knowAboutElina: yup.string().required("This field is required"),
  lookingAboutElina: yup.string().required("This field is required"),
});

export const comments = yup.object().shape({
  name: yup.string().required("This field is required"),
  phonenumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("This field is required"),
  email: yup
    .string()
    .email("please enter valid email address")
    .required("This field is required"),
  comment: yup.string().required("This field is required"),
  // captcha: yup.string().required("Captcha is required"),
});

export const contactUsForm = yup.object().shape({
  floating_first_name: yup.string().required("This field is required"),
  floating_last_name: yup.string().required("This field is required"),
  floating_email: yup
    .string()
    .email("please enter valid email address")
    .required("This field is required"),
  floating_phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("This field is required"),
  message: yup.string().required("This field is required"),
  captcha: yup.string().required("This field is required"),
});
