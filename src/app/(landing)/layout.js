"use client";

import RootFooter from "@/components/Footer";
import NavBar from "@/components/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <RootFooter />
    </>
  );
};

export default layout;
