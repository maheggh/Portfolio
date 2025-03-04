import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project3 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      <h1 className="text-5xl font-bold mb-8">NRK Extension</h1>

      {/* Media */}
      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project3.png"
          alt="NRK Extension screenshot"
          className={styles.mediaItem}
        />
      </div>

      {/* Details */}
      <div className="mt-8">
        <p className="text-lg mb-6">
        NRK Filter
        Customize your news experience on NRK.no. <br />
         This extension automatically detects active categories on the site, giving you checkboxes to filter out the news topics you don't want to see. Not interested in sports, politics, or other specific topics?
         Simply turn them off and enjoy a personalized news feed tailored to your interests.
         <br />
         <br />
         This Webpage was entirely made by me, using regex and injections to detect categories manipulate the DOM to give you the best NRK experience <br />
         this was written in HTML, CSS, and Javascript, and published to the chrome webstore.
        </p>
      </div>

      {/* Links */}
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
