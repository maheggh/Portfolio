import React from "react";
import { NavLink } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg";
import HeroImg from "../assets/home.jpg";

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header flex items-center justify-between px-4 py-2 bg-gray-100">
      <NavLink
        to="/"
        className="w-10 h-10 items-center justify-center rounded-lg bg-white"
        aria-label="Home"
      >
        <img src={HeroImg} alt="click here to go to the frontpage" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <button
          onClick={() => handleScroll("about")}
          className="text-black blue-gradient_text focus:outline-none"
        >
          About
        </button>
        <button
          onClick={() => handleScroll("projects")}
          className="text-black blue-gradient_text focus:outline-none"
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="text-black blue-gradient_text focus:outline-none"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
