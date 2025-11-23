import React from "react";
import FreeListing from "@Views/FreeListing";
import HomePage from "@Views/HomePage";
import NoInternetPage from "@Components/NoInternetPage";
import WorkerList from "@Components/WorkerList";
export const HomeLayouts: {
  name: string;
  path: string;
  Component: any;
}[] = [
  {
    name: "home-page",
    path: "/",
    Component: HomePage,
  },
  {
    name: "freeListing",
    path: "free-listing",
    Component: FreeListing,
  },
  {
    name: "workerList",
    path: "workers/:type",
    Component: WorkerList,
  },
];

/**
 * Public routes for all general purpose
 */

export const PublicRoute: {
  name: string;
  path: string;
  Component: any;
}[] = [
  {
    name: "NoInternetPage",
    path: "no-internet",
    Component: NoInternetPage,
  },
];
