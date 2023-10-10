"use client";

import Providers from "@/redux/provider";
import "./globals.css";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Layout = ({ children }) => {
  useEffect(() => {
    initFlowbite();
    return () => {};
  });

  return (
    <html className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default Layout;
