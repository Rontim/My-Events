import LeftSideBar from "@/components/Events/LeftSideBar";
import RightSideBar from "@/components/Events/RightSideBar";

export default function DashboardLayout({ children }) {
  return (
    <section className="grid grid-flow-col grid-cols-[1.5fr_2fr_1.5fr] w-full mt-0 gap-1 justify-stretch">
      <LeftSideBar />
      <main className="dark:bg-gray-900">
        <nav>nav</nav>
        {children}
      </main>
      <RightSideBar />
    </section>
  );
}
