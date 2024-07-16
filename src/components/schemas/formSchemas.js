import * as yup from "yup";

export const gettingStartedForm = yup.object().shape({
  childName: yup.string().required("This field is required"),
  dob: yup.date().required("This field is required"),
  parentName: yup.string().required("This field is required"),
  phoneNumber: yup
    .number()
    .positive()
    .integer()
    .required("This field is required"),
  email: yup
    .string()
    .email("please enter valid email address")
    .required("This field is required"),
  howdoyouknow: yup.string().required("Select an option"),
  gender: yup.string().required("Select any one option"),
  relation: yup.string().required("Select an option"),
});

export const parentPageForm = yup.object().shape({
  schoolName: yup.string().required("This field is required"),
  principalName: yup.string().required("This field is required"),
  buildingName: yup.string().required("This field is required"),
  buildingAddress: yup.string().required("This field is required"),
  buildingState: yup.string().required("This field is required"),
  yearEstablishment: yup.number().integer().required("This field is required"),
  buildingContact: yup.string().required("This field is required"),
  administrationContact: yup.string().required("This field is required"),
  phoneNumber: yup.number().integer().required("This field is required"),
  telephoneNumber: yup.number().integer().required("This field is required"),
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
  phoneNumber: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("please enter valid email address")
    .required("This field is required"),
});
