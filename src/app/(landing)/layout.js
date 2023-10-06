"use client";

import RootFooter from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { useDispatch } from "react-redux";
import { checkAuthentication } from "@/redux/feature/user/userSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  dispatch(checkAuthentication());

  return (
    <>
      <NavBar />
      <main>{children}</main>
      <RootFooter />
    </>
  );
};

export default Layout;
