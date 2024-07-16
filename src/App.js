import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/home/home/Home";
import Parent from "./pages/home/parent/Parent";
import Isms from "./pages/home/isms/Isms";
import Gallery from "./pages/home/gallery/Gallery";
import Blog from "./pages/home/blog/Blog";
import About from "./pages/home/about/About";
import ContactUs from "./pages/home/contactUs/ContactUs";
import GetStarted from "./pages/home/forms/GetStarted";
import ParentPageForm from "./pages/home/forms/ParentPageForm";
import ServiceProviderPageForm from "./pages/home/forms/ServiceProviderPageForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/parent",
    element: <Parent />,
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
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/forms",
    element: <GetStarted />,
  },
  {
    path: "/parentform",
    element: <ParentPageForm />,
  },

  {
    path: "/serviceform",
    element: <ServiceProviderPageForm />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
