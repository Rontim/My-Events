import Image from "next/image";
import cta1 from "../../../public/cta/cat1.jpg";
import cta2 from "../../../public/cta/cta2.jpg";

export default function Content() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Events Made Effortless
          </h2>

          <p className="mb-4">
            Simplifying event management for you. Our agile team of strategists,
            designers, and developers is dedicated to making your event
            experience stress-free. Whether it&rsquo;s a small gathering or a
            large event, we&rsquo;ve got you covered.
          </p>
          <p>
            Join us today and unlock the power to create unforgettable
            experiences effortlessly. Welcome to the future of event planning.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={cta1}
            alt="office content 1"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={cta2}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
