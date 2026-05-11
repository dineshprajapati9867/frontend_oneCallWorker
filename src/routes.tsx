import React from "react";
import FreeListing from "@Views/FreeListing";
import HomePage from "@Views/HomePage";
import NoInternetPage from "@Components/NoInternetPage";
import WorkerList from "@Views/WorkerList";
import WorkerDetails  from "@Views/WorkerDetails";
import ReviewComments from "@Views/WorkerDetails/components/ReviewComments";
import WriteReview from "@Views/WorkerDetails/components/WriteReview";
import CreateProfileModal from "@Views/CreateProfileModal";
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
    name: "workerList",
    path: "workers/:type",
    Component: WorkerList,
  },
  {
    name: "workerDetails",
    path: "worker/:id",
    Component: WorkerDetails,
  },
  {
    name: "workerDetails",
    path: "ocwSocial/post/:id",
    Component: ReviewComments,
  },
  {
    name: "WriteReview",
    path: "worker/write-review/:id",
    Component: WriteReview,
  },
  {
    name: "CreateProfileModal",
    path: "personal-details/:id",
    Component: CreateProfileModal,
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
  // {
  //   name: "freeListing",
  //   path: "free-listing",
  //   Component: FreeListing,
  // },
];
