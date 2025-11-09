import React from "react";
import FreeListing from "@Views/FreeListing";
import HomePage from "@Views/HomePage";
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
];
