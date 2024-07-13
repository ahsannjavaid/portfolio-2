import React from "react";
import type { NextPage } from "next";
import Projects from "./sections/Project";
// import HonorableMentions from "./sections/HonorableMentions";
import Hero from "./sections/Hero";

const Home: NextPage = () => {
  return (
    <div className="z-20 w-screen flex flex-col justify-start items-center">
      <Hero />
      <Projects />
      {/* <HonorableMentions /> */}
    </div>
  );
};

export default Home;
