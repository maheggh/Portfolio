import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeroImg from "../assets/home.jpg";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import styles from "./Navbar.module.css";

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
    console.log("Dark mode toggled. Current state:", isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`${styles.header} fixed w-full top-0 z-50`}>
      <div className="flex items-center justify-between w-full p-6 dark:bg-black">
        <NavLink to="/" className={styles.homeLink} aria-label="Home">
          <img src={HeroImg} alt="Home" className={styles.homeIcon} />
        </NavLink>
        <nav className="hidden md:flex text-lg gap-15 font-medium items-center">
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
          className={`${styles.menuButton} md:hidden ${
            isMenuOpen ? styles.open : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.hamburger}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </button>
      </div>
      {isMenuOpen && (
        <nav
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <button
            onClick={() => handleScroll("about")}
            className={styles.mobileMenuItem}
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className={styles.mobileMenuItem}
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className={styles.mobileMenuItem}
          >
            Contact
          </button>
          <button
            onClick={toggleDarkMode}
            className="mt-4 flex items-center justify-center p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
