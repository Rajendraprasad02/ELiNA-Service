import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Switch,
  createHashRouter,
} from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/home/home/Home";
import Parent from "./pages/home/parent/Parent";
import Isms from "./pages/home/isms/Isms";
import Gallery from "./pages/home/gallery/Gallery";
import Blog from "./pages/home/blog/Blog";
import About from "./pages/home/about/About";
import ContactUs from "./pages/home/contactUs/ContactUs";
import ServiceProviderPageForm from "./pages/home/forms/ServiceProviderPageForm";
import SchoolPageForm from "./pages/home/forms/SchoolPageForm";
import ParentPageForm from "./pages/home/forms/ParentPageForm";
import GetStartedPageForm from "./pages/home/forms/GetStartedPageForm";
import MainBlogPage from "./pages/home/mainBlogPage/MainBlogPage";
import InternPageForm from "./pages/home/forms/InternPageForm";
import SchoolPage from "./pages/home/schoolPage/SchoolPage";
import ProfessionalsPage from "./pages/home/professionalPage/ProfessionalsPage";
import PartnershipPageContent from "./pages/home/partnershipPage/PartnershipPageContent";
import { useEffect } from "react";
import AdminPage from "./pages/home/adminpage/AdminPage";
import User from "./layout/User";
import Admin from "./layout/Admin";
import Quote from "./components/adminScreen/Quote";
import Testimonials from "./components/adminScreen/Testimonials";

const router = createHashRouter([
  {
    path: "/",
    element: <User />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/parent",
        element: <Parent />,
      },
      {
        path: "/school",
        element: <SchoolPage />,
      },
      {
        path: "/professional",
        element: <ProfessionalsPage />,
      },
      {
        path: "/isms",
        element: <Isms />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/mainblog/:id",
        element: <MainBlogPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/get-started-form",
        element: <GetStartedPageForm />,
      },
      {
        path: "/school-form",
        element: <SchoolPageForm />,
      },
      {
        path: "/parent-form",
        element: <ParentPageForm />,
      },
      {
        path: "/service-form",
        element: <ServiceProviderPageForm />,
      },
      {
        path: "/intern-form",
        element: <InternPageForm />,
      },
      {
        path: "/partnership",
        element: <PartnershipPageContent />,
      },
    ],
  },

  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/",
        element: <Quote />,
      },
      {
        path: "/admin/testimonials",
        element: <Testimonials />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
