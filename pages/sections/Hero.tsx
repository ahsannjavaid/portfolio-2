import React, { useEffect, useState, useRef } from "react";
import NonSSRWrapper from "../../components/no-ssr-wrapper";
import ReactTextTransition, { presets } from "react-text-transition";
import { GoArrowRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function Hero() {
  const lol = [
    "Software Engineer",
    "Full Stack Developer",
    "Deep Logic Building Enthusiast",
    "Cloud Engineering Trainee",
    "Graphic Designer",
  ];
  const splineContainer = useRef<HTMLDivElement>(null!);

  const [lolIndex, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((lolIndex) => lolIndex + 1);
    }, 3500);
    setLoading(false);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <NonSSRWrapper>
      <section className="w-full h-max lg:h-screen flex flex-col justify-center items-center z-40 bg-primary ">
        <div className="min-h-max h-[90%] w-[95%] flex flex-col items-center lg:item-start lg:flex-row max-w-[1400px] gap-6">
          <div className="w-full lg:w-[30%] h-full flex flex-col justify-start mt-10 lg:mt-16 items-start">
            <div className="w-full h-full flex justify-center">
              <div className="w-[91%] lg:w-full h-full flex flex-col sm:flex-row lg:flex-col gap-2 lg:gap-6">
                <div className="inline-block sm:hidden lg:inline-block ">
                  <div
                    className="bg-[#01529a] text-base w-max rounded-2xl"
                    id="welcome-im-box"
                  >
                    <p className="py-1 px-4">Assalam-u-Alaikum! I&rsquo;m</p>
                  </div>
                </div>
                <div
                  id="image-thingy"
                  className="flex justify-center items-center relative lg:w-full "
                >
                  <div className="scale-[0.8] lg:scale-100 relative border-[#526fa9] border-[0.7rem] h-56 w-56 shadow-lg shadow-[#333333]">
                    <div className="absolute h-56 w-56 border-[#526fa9] border-b-[0.7rem] top-[-0.7rem] left-[-0.7rem] z-20"></div>
                    <div className="bg-gradient-radial from-[#8a8a8a] to-[#bcbcbc] w-60 h-60 rounded-full absolute top-[-1.7rem] left-[-1.2rem]"></div>
                    <div id="Image Container" className="absolute">
                      <img
                        className="object-cover"
                        src="images/MyProfilePicture-removebg-preview.png"
                        alt="Ahsan's avatar"
                      />
                    </div>
                  </div>
                </div>
                <div id="name-text-button-container" className="grow lg:grow-0">
                  <div className="hidden sm:inline-block lg:hidden">
                    <div
                      id="welcome-im-box"
                      className="text-base w-max rounded-xl"
                    >
                      <p>Asslam-u-Alaikum! I&rsquo;m</p>
                    </div>
                  </div>
                  <div id="name-container">
                    <h1
                      className="bg-clip-text text-transparent text-[2.3rem] lg:text-[2.5rem] 
                                xl:text-[2.6rem] bg-gradient-to-r from-[#09C6F9] 
                                to-[#5472FB] lg:py-2 "
                    >
                      Ahsan Javed
                    </h1>
                  </div>
                  <ReactTextTransition springConfig={presets.gentle} inline>
                    <h1 className="text-xl lg:text-2xl">
                      {lol[lolIndex % lol.length]}
                    </h1>
                  </ReactTextTransition>
                  <div
                    id="call-to-action-button"
                    className="flex items-center justify-start lg:justify-center text-base lg:text-xl mt-6 lg:mt-12 w-auto"
                  >
                    <motion.a
                      className="transition-all
                        bg-gradient-to-r to-[#5f2387] from-[#1669b2]
                        hover:to-[#7d2bb3] hover:from-[#1b78ca]
                        gap-1 flex items-center justify-center px-5 py-2 rounded-xl
                        shadow-md shadow-[#333333]  
                        "
                      href="/linktree"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h1 className="font-[650] text-[#fcfcfc]">
                        Get in touch
                      </h1>
                      <GoArrowRight />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={splineContainer}
            id="spline-container"
            className="hidden sm:block h-[400px] lg:h-full w-[90%] lg:w-[70%] hover:cursor-grab relative"
          >
            {loading && (
              <AnimatePresence>
                <motion.div
                  key="loading-screen"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute h-full w-full bg-primary z-50 flex justify-center items-center top-0 left-0 "
                >
                  <div className="dots">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
            <Image
              src={
                "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Unsplash"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    </NonSSRWrapper>
  );
}

export default Hero;
