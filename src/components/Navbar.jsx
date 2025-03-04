// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImg from "/assets/home.jpg";
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = (e) => {
    e.stopPropagation();
    setIsDarkMode(!isDarkMode);
  };

  // When clicked on a link, close the mobile menu
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-100 dark:bg-black shadow-md">
      <div className="flex items-center justify-between w-full p-4">
        
      <Link
  to="/#"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  }}
  aria-label="Home"
  className="focus:outline-none"
>
  <img src={HeroImg} alt="Home" className="w-10 h-auto rounded-lg" />
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-lg gap-7 font-medium items-center">
          <Link
            to="/#about"
            onClick={handleNavClick}
            className="text-black dark:text-white focus:outline-none"
          >
            About
          </Link>
          <Link
            to="/#projects"
            onClick={handleNavClick}
            className="text-black dark:text-white focus:outline-none"
          >
            Projects
          </Link>
          <Link
            to="/#contact"
            onClick={handleNavClick}
            className="text-black dark:text-white focus:outline-none"
          >
            Contact
          </Link>
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

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center p-2 z-50 focus:outline-none"
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

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full bg-gray-100 dark:bg-black transition-all duration-300 ease-in-out ${
          isMenuOpen ? "h-full opacity-100" : "h-0 opacity-0"
        } flex flex-col items-center justify-center overflow-hidden`}
        style={{
          transitionProperty: "height, opacity",
        }}
      >
        {isMenuOpen && (
          <>
            <Link
              to="/#"
              onClick={handleNavClick}
              className="text-black dark:text-white focus:outline-none text-2xl py-4"
            >
              Home
            </Link>
            <Link
              to="/#about"
              onClick={handleNavClick}
              className="text-black dark:text-white focus:outline-none text-2xl py-4"
            >
              About
            </Link>
            <Link
              to="/#projects"
              onClick={handleNavClick}
              className="text-black dark:text-white focus:outline-none text-2xl py-4"
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              onClick={handleNavClick}
              className="text-black dark:text-white focus:outline-none text-2xl py-4"
            >
              Contact
            </Link>
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
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
