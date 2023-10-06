import LeftSideBar from "@/components/Events/LeftSideBar";
import RightSideBar from "@/components/Events/RightSideBar";

export default function DashboardLayout({ children }) {
  return (
    <section className="grid grid-flow-col grid-cols-[1fr_4fr] max-[960px]:grid-cols-[.5fr_3.5fr] max-[600px]:grid-cols-1 w-full mt-0 gap-0 justify-stretch overflow-y-hidden">
      <LeftSideBar />
      <main className="grid grid-flow-col grid-cols-[2fr_1fr] dark:bg-gray-900 overflow-y-hidden">
        {children}
        <RightSideBar />
      </main>
    </section>
  );
}
