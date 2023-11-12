"use client";

import React, { ReactNode, useEffect } from "react";
import CustomProvider from "@/redux/provider";
import "./globals.css";
import { initFlowbite } from "flowbite";
import { Toasts, CheckAuth } from "@/components/utils";

type LayoutProps = {
  children: ReactNode;
};

import type { JSX } from "react";
import ScrollToTop from "@/components/Common/ScrollToTop";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <html className="dark" />
      <body>
        <CustomProvider>
          <CheckAuth />
          <Toasts />
          {children}
          <ScrollToTop />
        </CustomProvider>
      </body>
    </>
  );
};

export default Layout;
