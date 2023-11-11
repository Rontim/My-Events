import { LeftSideBar, RightSideBar, EventNavbar } from "@/components/Events";
import { LoadUser } from "@/components/utils";

import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "My Events - Events",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="w-full mt-0 justify-stretch">
      <LoadUser />
      <EventNavbar />
      <LeftSideBar />
      <main className="dark:bg-gray-900 p-4 min-[960px]:ml-64 min-[960px]:mr-72 max-[960px]:ml-36 max-[960px]:mr-0 max-[600px]:ml-0 h-auto pt-20 max-[600px]:pt-24">
        {children}
        <RightSideBar />
      </main>
    </section>
  );
};

export default Layout;
