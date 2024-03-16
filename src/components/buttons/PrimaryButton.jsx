import React from "react";
import Link from "next/link";

const PrimaryButton = () => {
  return (
    <div className="bg-customBlack text-malibu border-customBlack flex uppercase text-base border-2 lg:border-malibu lg:bg-malibu hover:bg-transparent lg:text-customBlack max-w-[149px] w-full h-[45px] rounded-lg hover:text-customBlack lg:hover:text-malibu transition-all">
      <Link
        href=""
        className="flex w-full h-full justify-center items-center transition-all"
      >
        view resume
      </Link>
    </div>
  );
};

export default PrimaryButton;
