import React from "react";
import ContactUsHero from "../../../components/contactus/ContactUsHero";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import FAQsContactUs from "../../../components/contactus/FAQsContactUs";
import ContactUsForm from "../../../components/contactus/ContactUsForm";
import SignUp from "../../../components/contactus/SignUp";

const blogContent = [
  {
    h1: "What is ELiNA?",
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    h1: "What is ELiNA?1",
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    h1: "What is ELiNA?2",
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <ContactUsHero />
      <FAQsContactUs blogContent={blogContent} />
      <ContactUsForm />
      <SignUp />
      <Footer />
    </>
  );
};

export default ContactUs;
