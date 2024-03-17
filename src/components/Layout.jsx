"use client";
import { useState } from "react";
import NavigationBar from "./navbar";
import { Kanit } from "next/font/google";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import Link from "next/link";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }) => {
  const [showSocials, setShowSocials] = useState(false);
  return (
    <section className={`w-full ${kanit.className}`}>
      <NavigationBar />

      <div className={`w-full`}>
        <div className="w-full relative z-[1]">
          <aside
            className={`absolute left-0 z-[2] transition-all ${
              showSocials ? "translate-x-0" : "translate-x-[-55px]"
            } translate-y-[50%] lg:translate-x-0 top-[50%] flex justify-start`}
          >
            <ul className="flex flex-col bg-malibu p-3 gap-4 text-customBlack">
              <li className="text-lg">
                <Link href="">
                  <FaTwitter />
                </Link>
              </li>
              <li className="text-lg">
                <Link href="">
                  <FaLinkedin />
                </Link>
              </li>
              <li className="text-lg">
                <Link href="">
                  <HiMail />
                </Link>
              </li>
              <li className="text-lg">
                <Link href="">
                  <FaGithub />
                </Link>
              </li>
            </ul>

            <div
              className={`w-[45px] h-[30px] rounded-[0_5px_5px_0] overflow-hidden bg-malibu ${
                !showSocials && "animate-bounce"
              } lg:hidden cursor-pointer`}
              onClick={() => setShowSocials(!showSocials)}
            >
              <button
                className={`w-full h-full bg-transparent text-lg flex justify-center items-center text-customBlack ${
                  !showSocials && "text-white"
                }`}
              >
                {showSocials ? <FaAnglesLeft /> : <FaAnglesRight />}
              </button>
            </div>
          </aside>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
