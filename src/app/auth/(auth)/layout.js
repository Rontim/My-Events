"use client";

import { useSelector } from "react-redux";
import { Toast } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";

const AuthLayout = ({ children }) => {
  const { error, status } = useSelector((state) => state.user);
  return (
    <div>
      <div>
        {error && (
          <Toast className="fixed z-50 left-1 top-1">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <HiX className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{error.detail}</div>
            <Toast.Toggle />
          </Toast>
        )}
        {status === 200 && (
          <Toast className="fixed z-50 right-1 top-1">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Login successful.</div>
            <Toast.Toggle />
          </Toast>
        )}
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
