import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project4 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      {/* Main Title */}
      <h1 className="text-5xl font-bold mb-8">Super Accessor</h1>

      {/* Section 1: Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-lg leading-relaxed mt-4">
          This was a task I got for the full-stack development course for our second year <br/>
           the task was to create a tool for teachers to create accessment methods for their students in the shape of a card game. 
          <br/>
          <br/>
        </p>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project4.JPG"
            alt="Super Accessor screenshot"
            className={styles.mediaItem}
          />
        </div>
        <p className="text-lg leading-relaxed mt-4">
          This project was developed by me and two other 
          students, this project highlights 
          collaborative design, gamification principles, and a robust MERN-based 
          backend.
        </p>
      </section>

      {/* Section 2: Key Features & Responsibilities */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Key Features & Responsibilities</h2>
        
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project4img2.png"
            alt="Additional Super Accessor screenshot"
            className={styles.mediaItem}
          />
        </div>
        <p className="text-lg leading-relaxed mt-4">
          Built with MongoDB, Express, React, and Node.js, with swagger documentation Super Accessor includes:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed ml-6 mt-2">
          <li>Interactive board setup and custom card layouts</li>
          <li>Gamification elements like unique characters</li>
          <li>WebComponents to render dynamic card elements</li>
          <li>Login system with role-based access and protected routes</li>
          <li>Drag-and-drop .csv import for bulk card creation</li>
          <li>CRUD operations to manage cards from an admin dashboard</li>
        </ul>
        <p className="text-lg leading-relaxed mt-4">
          My primary responsibilities involved board setup, card layout and mechanics, 
          significant portions of the CSS, as well as the initial database structure. 
          I also implemented an option to save boards and favorite cards, plus the 
          ability to print the final layout to PDF for physical card usage.
        </p>
      </section>

      {/* Additional Media */}
      <section className="mb-16">
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project4img.JPG"
            alt="Super Accessor screenshot"
            className={styles.mediaItem}
          />
        </div>
      </section>

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
