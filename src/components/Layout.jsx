import React from "react";
import NavigationBar from "./navbar";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }) => {
  return (
    <section className={`w-full ${kanit.className}`}>
      <NavigationBar />

      <div className={`w-full`}>{children}</div>
    </section>
  );
};

export default Layout;
