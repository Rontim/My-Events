import { ReactNode } from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Events - Auth",
};

interface AuthBaseLayoutProps {
  children: ReactNode;
}

const AuthBaseLayout = ({ children }: AuthBaseLayoutProps) => {
  return <main className="bg-gray-50 dark:bg-gray-900">{children}</main>;
};

export default AuthBaseLayout;
