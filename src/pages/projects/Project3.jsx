import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project3 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      {/* Main Title */}
      <h1 className="text-5xl font-bold mb-8">NRK Extension</h1>

      {/* Section 1: Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project3.png"
            alt="NRK Extension screenshot"
            className={styles.mediaItem}
          />
        </div>
        <p className="text-lg leading-relaxed mt-4">
          The NRK Filter Extension customizes your news feed on NRK.no by 
          hiding categories you’re not interested in—like sports or politics—giving 
          you a cleaner, more personalized experience.
        </p>
      </section>

      {/* Section 2: Implementation Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Implementation Details</h2>
        <p className="text-lg leading-relaxed">
          Built with HTML, CSS, and JavaScript, the extension scans NRK’s DOM 
          to detect active categories, then injects checkbox filters so you can 
          toggle sections on and off. Key features include:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed ml-6 mt-2">
          <li>Regular expression (regex) checks to identify article topics</li>
          <li>DOM manipulation to hide/show unwanted categories</li>
          <li>Seamless integration through the Chrome Web Store</li>
        </ul>
      </section>

      {/* Visit / Back Buttons */}
      <div className="flex gap-4">
        <a
          href="https://chromewebstore.google.com/detail/nrk-filter/hhiajgpkhnbonhlfcgodaphjcahjajgn"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Visit Project
        </a>
        <Link
          to="/projects"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default Project3;
