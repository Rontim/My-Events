import Image from "next/image";
import officeLong2 from "../../../public/office-long-2.png";
import officeLong1 from "../../../public/office-long-1.png";

export default function Content() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Events Made Effortless
          </h2>
          <p className="mb-4">
            Welcome to the future of event management. We&apos;re not here to
            reinvent the wheel; we&apos;re here to make event planning and
            execution a breeze. Our team consists of strategists, designers, and
            developers—innovators and problem solvers who are committed to
            simplifying your event experience.
          </p>
          <p>
            We are small enough to be agile and responsive, yet experienced
            enough to handle events of any size and complexity. With our
            platform, you&apos;ll have the power to create unforgettable
            experiences without the usual hassle. Join us today and discover how
            effortless event management can be.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={officeLong2}
            alt="office content 1"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={officeLong1}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
