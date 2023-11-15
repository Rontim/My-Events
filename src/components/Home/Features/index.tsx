"use client";

import { featuresData } from "./faeturesData";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Features = () => {
  const myRef = useRef(null);
  const inView = useInView(myRef);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 20 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <section
        id="features"
        className="py-16 md:py-20 lg:py-28 bg-white dark:bg-black"
      >
        <div className="container">
          <div
            className="wow fadeInUp w-full mx-auto text-center mb-[100px] max-w-[570px]"
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Empowering Your Event Management
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              Tailored for seamless event planning and execution. Explore key
              features:
            </p>
          </div>

          <div
            ref={myRef}
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className={`w-full opacity-0 transform -translate-x-8 transition-all  duration-500 ${"opacity-100 translate-x-0"}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={controls}
                  transition={{
                    duration: 0.8,
                    delay: 0.25 + feature.id * 0.5,
                  }}
                  className="wow fadeInUp text-center"
                  data-wow-delay=".15s"
                >
                  <div className="mb-10 mx-auto flex h-[70px] w-[70px] items-center text-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    {feature.paragraph}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
