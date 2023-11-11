"use client";

import RootFooter from "@/components/Common/Footer";
import NavBar from "@/components/Common/Navbar";
// import { useAppDispatch } from '@/redux/hooks'
// import { checkAuth } from "@/redux/feature/user/thunk/userThunk";

import React, { Fragment, ReactNode } from "react";

import type { JSX } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  // const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   dispatch(checkAuth());
  // }, [dispatch]);

  return (
    <>
      <NavBar />
      {children}
      <RootFooter />
    </>
  );
};

export default Layout;
