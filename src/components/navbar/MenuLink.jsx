import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ link }) => {
  const pathname = usePathname();
  return (
    <li
      className={`lg:hover:text-malibu text-base uppercase mb-5 lg:mb-0 ${
        pathname.includes(link.url)
          ? "text-white lg:text-malibu"
          : "text-customBlack lg:text-white"
      } `}
    >
      <Link href={link.url}>{link.pathname}</Link>
    </li>
  );
};

export default MenuLink;
