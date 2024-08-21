import * as yup from "yup";
import "yup-phone";

export const quoteSchema = yup.object().shape({
  authorName: yup.string().required("This field is required"),
  quote: yup.string().required("This field is required"),
});
