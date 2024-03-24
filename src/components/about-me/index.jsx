import React from "react";
import Layout from "../Layout";
import Image from "next/image";
import { avatar } from "@/assets/images";

const AboutPage = () => {
  return (
    <Layout>
      <section
        className={`w-full mt-[60px] lg:mt-[80px] text-white min-h-[calc(100vh-95px)] md:min-h-[calc(100vh-80px)] flex flex-col md:flex-row justify-center items-center bg-cinder `}
      >
        <div className="flex flex-col md:flex-row justify-center items-center  w-[90%] mx-auto gap-10 md:gap-[90px] lg:gap-[127px] py-5 xl:w-full xl:max-w-[1200px]">
          <div className="w-full">
            <figure className="m-0 p-0 relative h-[300px] md:max-w-[500px] w-full md:h-[292px] lg:h-[500px] mx-auto md:mx-0">
              <Image src={avatar} alt="my-avatar" fill objectFit="contain" />
            </figure>
          </div>
          <article className="w-full md:max-w-[630px]">
            <h2 className="text-xl md:2xl lg:3xl uppercase border-b-4 border-b-malibu w-fit pb-1 mb-6">
              about me
            </h2>
            <p className="text-base md:text-lg leading-normal mb-2">
              I am a frontend developer with experience in building website with
              frontend tools and really passionate about growth and tech.
            </p>
            <p className="text-base md:text-lg leading-normal mb-2">
              My current stack is react.js but I&apos;m open to roles that
              require the use of other technologies as i am a very fast learner
              and love to try new things.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
