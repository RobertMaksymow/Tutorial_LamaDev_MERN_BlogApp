import React, { useState } from "react";
import { IKImage } from "imagekitio-react";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src={"logo.png"} alt={"logo"} width={32} height={32} />
        <span>MyBlogApp</span>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE X BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-5/6 flex flex-col items-center justify-center  gap-8 font-medium text-lg absolute top-16 bg-[#bdbdd6] transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 bg-blue-800 rounded-3xl text-white">
              Login
            </button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="py-2 px-4 bg-blue-800 rounded-3xl text-white">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
