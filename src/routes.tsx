import React from "react";
import HomeLayout from "@Views/Layout";
import FreeListing from "@Views/FreeListing";
import Navbar from "@Views/Navbar";

export const HomeLayouts: {
  name: string;
  path: string;
  Component: any;
}[] = [
  {
    name: "navbar",
    path: "/",
    Component: Navbar,
  },
  {
    name: "freeListing",
    path: "free-listing",
    Component: FreeListing,
  },
];
