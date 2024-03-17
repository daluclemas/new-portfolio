import React from "react";
import Layout from "../Layout";
import { Kanit } from "next/font/google";
import Skills from "./Skills";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HomePage = () => {
  return (
    <Layout>
      <section
        className={`w-full mt-[60px] lg:mt-[80px] text-white min-h-[calc(100vh-100px)] flex justify-center items-center ${kanit.className}`}
      >
        <div className="w-[90%] mx-auto xl:w-full xl:max-w-[1200px]">
          <div className=" py-5 mx-auto flex flex-col items-center">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl text-center uppercase font-bold leading-custom w-full max-w-[294px] md:max-w-[350px] lg:max-w-[480px] `}
            >
              hi there, I&apos;m{" "}
              <span className="text-malibu">chidalu anukam </span>
              <span className="">
                {/* community manager */}
                {/* technical writer */}
                {`<web developer />`}
              </span>
            </h2>

            <p className="w-[90%] mx-auto md:w-full text-center max-w-[800px] mt-4 text-base uppercase font-normal">
              Self-taught Frontend Developer passionate about programming with
              comprehensive experience in working on projects and delivers tasks
              on time
            </p>

            <Skills />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
