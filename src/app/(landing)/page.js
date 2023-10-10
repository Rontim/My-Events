
import Hero from "@/components/Home/Hero";
import Content from "@/components/Home/Content";
import Features from "@/components/Home/Features";
import CTA from "@/components/Home/CTA";

export const metadata = {
    title: 'My Events - Landing'
}

const Home = () => {
  return (
    <div>
      <Hero />
      <Content />
      <Features />
      <CTA />
    </div>
  );
};

export default Home;
