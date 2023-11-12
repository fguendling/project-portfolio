import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import AOS from "aos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "details/:ProjectId",
    element: <ProjectDetails />,
    loader: async ({ params }) => {
      return params.ProjectId;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// Initialize AOS (Animate on scroll library)
AOS.init({});
