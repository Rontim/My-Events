import { AboutBody, AboutTop } from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Events - About",
  description: "This is the about page for My Events",
};

const About = () => {
  return (
    <>
      <AboutTop />
      <AboutBody />
    </>
  );
};

export default About;
