import React, { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img className="w-[124px] h-[32px]" src={logo}></img>

      <ul className="list-none hidden sm:flex justify-end items-center flex-1 space-x-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white text-[16px] rounded-xl hover:bg-gray-700 p-3 hover:bg-gradient-to-r `}
          >
            <a>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          onClick={() => settoggle((prev) => !prev)}
          src={toggle == true ? close : menu}
          className="w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex items-start flex-col justify-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-white text-[16px] my-2`}
              >
                <a>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
