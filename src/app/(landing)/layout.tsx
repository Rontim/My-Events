"use client";

import RootFooter from "@/components/Common/Footer";
import Header from "@/components/Common/Header";

import React, { Fragment, ReactNode } from "react";

import type { JSX } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <RootFooter />
    </>
  );
};

export default Layout;
