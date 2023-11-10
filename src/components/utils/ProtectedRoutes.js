"use client";

import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  if (isAuthenticated === false) return redirect("/auth/login");

  return <>{children}</>;
};

export default ProtectedRoutes;
