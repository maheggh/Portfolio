import React from "react";
import { NavLink } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg";
import HeroImg from "../assets/home.jpg";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = React.useState(false);

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
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `blue-gradient_text ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `blue-gradient_text ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `blue-gradient_text ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
