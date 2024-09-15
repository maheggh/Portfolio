import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeroImg from "../assets/home.jpg";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu after scrolling
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = (e) => {
    e.stopPropagation();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-100 dark:bg-black shadow-md">
      <div className="flex items-center justify-between w-full p-4">
        <NavLink to="/" aria-label="Home">
          <img src={HeroImg} alt="Home" className="w-10 h-auto rounded-lg" />
        </NavLink>
        <nav className="hidden md:flex text-lg gap-7 font-medium items-center">
          <button
            onClick={() => handleScroll("about")}
            className="text-black dark:text-white focus:outline-none"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-black dark:text-white focus:outline-none"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="text-black dark:text-white focus:outline-none"
          >
            Contact
          </button>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </nav>
        <button
          className="md:hidden flex flex-col justify-center items-center p-2 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transform transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-900 dark:bg-gray-100 my-1 transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transform transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>
      <nav
        className={`fixed top-0 left-0 w-full bg-gray-100 dark:bg-black transition-all duration-300 ease-in-out ${
          isMenuOpen ? "h-full opacity-100" : "h-0 opacity-0"
        } flex flex-col items-center justify-center overflow-hidden`}
        style={{
          transitionProperty: "height, opacity",
        }}
      >
        <button
          onClick={() => handleScroll("about")}
          className="text-black dark:text-white focus:outline-none text-2xl py-4"
        >
          About
        </button>
        <button
          onClick={() => handleScroll("projects")}
          className="text-black dark:text-white focus:outline-none text-2xl py-4"
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="text-black dark:text-white focus:outline-none text-2xl py-4"
        >
          Contact
        </button>
        <button
          onClick={toggleDarkMode}
          className="mt-4 flex items-center justify-center p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition focus:outline-none"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
