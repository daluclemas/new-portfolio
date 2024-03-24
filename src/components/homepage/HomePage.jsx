"use client";

import Typewriter from "typewriter-effect";
import Layout from "../Layout";
import { Kanit } from "next/font/google";
import Skills from "./Skills";
import { useTypeWriterEffect } from "@/utils/hooks/typewriterEffect";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HomePage = () => {
  return (
    <Layout>
      <section
        className={`w-full mt-[60px] lg:mt-[80px] text-white min-h-[calc(100vh-95px)] md:min-h-[calc(100vh-80px)] flex justify-center items-center ${kanit.className}`}
      >
        <div className="w-[90%] mx-auto xl:w-full xl:max-w-[1200px]">
          <div className=" py-5 mx-auto flex flex-col items-center">
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl text-center uppercase font-bold leading-custom w-full max-w-[294px] md:max-w-[350px] lg:max-w-[550px] `}
            >
              hi there, I&apos;m <br />
              <span className="text-malibu">chidalu anukam </span>
              <Typewriter
                options={{
                  strings: [
                    "software engineer",
                    "community manager",
                    "technical writer",
                    "security engineer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* </span> */}
            </h2>

            <p className="w-[90%] max-w-[550px] mx-auto md:w-full text-center lg:max-w-[800px] mt-4 text-base uppercase font-normal">
              Software Engineer passionate about programming with comprehensive
              experience in working on projects and delivers tasks on time.
            </p>

            <Skills />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
