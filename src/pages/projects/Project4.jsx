import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project4 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      <h1 className="text-5xl font-bold mb-8">Super Accessor</h1>

      {/* Media */}
      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project4.JPG"
          alt="Super Accessor screenshot"
          className={styles.mediaItem}
        />
      </div>

      {/* Details */}
      <div className="mt-8">
        <p className="text-lg mb-6">
          This project was made in collaboration with 2 other students for the full-stack development course. <br /> 
          The goal of the project was to make a card game for teachers to create assessment methods for the students. The game is turn based <br />
          where you can play as different characters <br />
          <br />

          <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project4img2.png"
          alt="Super Accessor screenshot"
          className={styles.mediaItem}
        />
      </div>

          <br />
          This project was created in the MERN stack (MongoDB, Express, React, Node.js) where I was responsible for the board setup, the card layout, <br />
          the card mechanics much of the css, the gamification and the initial database setup. The cards were made in webcomponents <br />
          the page had a login system, so you could log in as an administrator, drag and drop .csv files to easily add cards in bulk, and do <br />
          crud operations to add, remove and update cards from the mongoDB database. The administrator had protected routes that only the admin can access. <br />
          <br />
          It also had the ability to print the finished game layout to PDF so that you can print and cut out the actual cards for a physical copy, if you find <br />
          a card layout you are satisfied with. You could also save entire boards, and add invididual cards to your favorite list.
        </p>

        <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project4img.JPG"
          alt="Super Accessor screenshot"
          className={styles.mediaItem}
        />
      </div>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href="https://github.com/maheggh/cardgame"
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

export default Project4;
