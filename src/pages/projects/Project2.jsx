import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project2 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      <h1 className="text-5xl font-bold mb-8">Sustainability Diary</h1>

      {/* Media */}
      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project2.png"
          alt="Sustainability Diary screenshot"
          className={styles.mediaItem}
        />
      </div>

      {/* Details */}
      <div className="mt-8">
        <p className="text-lg mb-6">
          This is the sustainability diary I made in collaboration with 4 oher students for a course called "Webproject" <br /> <br />
        The purpose of this web application is to make students able to sign up for classes, post notes and reflections on lectures, and share these notes with the teacher <br />
        or other students if the student choses to do so. This project was written in the MERN stack, MongoDB, Express, React and Node.js
        <br />
        <br />
        <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project2img.png"
          alt="Sustainability Diary screenshot"
          className={styles.mediaItem}
        />
      </div>
        <br />

          My main responsibility was to make tests, make the email forgotten password logic, make you able to join a classroom <br />
          some styling, and the achievement system.
        </p>
        <br />
        <br />
        <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project2img2.png"
          alt="Sustainability Diary screenshot"
          className={styles.mediaItem}
        />
      </div>
      </div>


      {/* Links */}
      <div className="flex gap-4">
        <a
          href="https://team3.sustainability.it.ntnu.no/"
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

export default Project2;
