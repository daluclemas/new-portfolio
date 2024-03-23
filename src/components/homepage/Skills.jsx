"use client";

import React from "react";
import Slider from "react-slick";

import Image from "next/image";
import { skillsdata } from "@/utils/appdata";
const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    swipeToSlide: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="mt-5">
      <h3 className="text-malibu uppercase font-bold text-xl md:text-2xl text-center ">
        skills
      </h3>

      <div className=" py-4 mt-3 max-w-[250px] sm:max-w-[350px] mx-auto">
        <Slider {...settings}>
          {skillsdata.map((png, id) => {
            return (
              <div className="w-fit mb-4" key={id}>
                <figure className="m-0 relative l-0 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-lg overflow-hidden z-[1] mx-auto">
                  <Image alt="skill" src={png} fill />
                </figure>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
