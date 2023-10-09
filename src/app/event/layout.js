"user client";

import EventNavBar from "@/components/Events/EventNavBar";
import LeftSideBar from "@/components/Events/LeftSideBar";
import RightSideBar from "@/components/Events/RightSideBar";
import { useDispatch } from "react-redux";
import { checkAuth } from "@/redux/feature/user/userSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  dispatch(checkAuth());
  return (
    <section className="w-full mt-0 justify-stretch">
      <EventNavBar />
      <LeftSideBar />
      <main className="dark:bg-gray-900 p-4 min-[960px]:ml-64 min-[960px]:mr-72 max-[960px]:ml-36 max-[600px]:ml-0 h-auto pt-20 max-[600px]:pt-24">
        {children}
        <RightSideBar />
      </main>
    </section>
  );
};

export default Layout;
