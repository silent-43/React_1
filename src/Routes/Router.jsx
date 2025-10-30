import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
import AppInstalled from "../Pages/AppInstalled";
import Loader from "../Components/Loader";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/Apps.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/all-apps",
        element: <AllApps></AllApps>,
        loader: () => fetch("/AllApps.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/app-details/:id",
        element: <AppDetails></AppDetails>,
        loader: () => fetch("/AllApps.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/my-installation",
        element: <AppInstalled></AppInstalled>,
      },

      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
