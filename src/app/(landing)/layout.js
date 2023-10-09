"use client";

import RootFooter from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { useDispatch } from "react-redux";
import { checkAuth } from "@/redux/feature/user/userSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  dispatch(checkAuth());

  return (
    <>
      <NavBar />
      <main>{children}</main>
      <RootFooter />
    </>
  );
};

export default Layout;
