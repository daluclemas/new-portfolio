"use client";

import { useState } from "react";
import Link from "next/link";
import { Krona_One } from "next/font/google";
import { TiThMenuOutline } from "react-icons/ti";
import PrimaryButton from "../buttons/PrimaryButton";
import styles from "@/styles/navbar/style.module.css";
import { FaTimes } from "react-icons/fa";
import { navData } from "@/utils/appdata";
import MenuLink from "./MenuLink";

const kronaone = Krona_One({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`w-full fixed top-0 right-0 left-0 z-[2] ${styles.customShadow}`}
    >
      <div className="w-[90%] mx-auto xl:w-full xl:max-w-[1200px] py-3 flex items-center lg:justify-between lg:gap-16">
        <section className="flex justify-between w-full items-center lg:w-fit">
          <h1 className={`text-xl md:text-2xl uppercase ${kronaone.className}`}>
            <Link href="/">clemas</Link>
          </h1>

          <button className="text-2xl lg:hidden" onClick={() => setOpen(true)}>
            <TiThMenuOutline />
          </button>
        </section>

        <section
          className={`w-full lg:w-[65%] ${styles.navMenu} ${
            open && styles.open
          } flex justify-end`}
        >
          <div className="max-w-[300px] w-full lg:flex lg:flex-row lg:justify-between lg:items-center bg-malibu lg:bg-transparent lg:max-w-full h-full p-5 lg:py-0">
            <div className="flex justify-end lg:hidden">
              <button className="text-2xl " onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <ul className="flex flex-col lg:gap-4 mt-10 lg:mt-0 lg:flex-row ">
              {navData.map((link, i) => (
                <MenuLink key={i} link={link} />
              ))}
            </ul>
            <PrimaryButton />
          </div>
        </section>
      </div>
    </nav>
  );
};

export default NavigationBar;
