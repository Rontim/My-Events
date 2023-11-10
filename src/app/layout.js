"use client";

import Providers from "@/redux/provider";
import "./globals.css";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { Toasts } from "@/components/utils";

const Layout = ({ children }) => {
  useEffect(() => {
    initFlowbite();
    return () => {};
  });

  return (
    <html className="dark">
      <body>
        <Providers>
          <Toasts />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
