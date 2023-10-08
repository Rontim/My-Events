import React from "react";
import Image from "next/image";
import logo from "../../../../public/logo-removebg-preview.png";

const Logo = () => {
  return (
    <div className="flex justify-start items-center">
      <a
        href="#"
        className="-m-1.5 p-1.5 flex items-center justify-between mr-4"
      >
        <Image className="h-16 mb-0 mr-3 w-28" src={logo} alt="" />
        <span className="sr-only">My Events</span>
      </a>
    </div>
  );
};

export default Logo;
