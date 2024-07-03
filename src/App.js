import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/home/home/Home";
import Parent from "./pages/home/parent/Parent";
import Isms from "./pages/home/isms/Isms";

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
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}
