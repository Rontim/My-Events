import Hero from "@/components/Home/Hero";
import Content from "@/components/Home/Content";
import Features from "@/components/Home/Features";
import CTA from "@/components/Home/CTA";

export const metadata = {
  title: "My Events - Landing",
  description: "This is the landing page for My Events",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Content />
      <CTA />
    </div>
  );
};

export default Home;
