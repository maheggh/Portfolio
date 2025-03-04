import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project1 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      <h1 className="text-5xl font-bold mb-8">Mafia Game</h1>

      {/* Media (Image / Video) */}
      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project1.png"
          alt="Mafia Game example screenshot"
          className={styles.mediaItem}
        />
      </div>

      {/* Project details / description */}
      <div className="mt-8">
        <p className="text-lg mb-6">
          This game was made entirely in HTML, CSS and Javascript. It was inspired by a game I played in my childhood called "Omerta" <br/>
          which was an online crime game where you could steal cars, steal wallets, and do other criminal activities to rise to the top of the criminal underworld
        </p>
        <p className="text-lg mb-6">This game was entirely made by me</p>
        <br />
      </div>

      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/potatoimg1.png"
          alt="Image of an unlucky potato getting thrown in jail"
          className={styles.mediaItem}
        />
      </div>
      <figcaption>Image of an unlucky potato getting thrown in jail</figcaption>
      <br />
      <p className="text-lg mb-6">The whole game has a potato related theme where the goal is to be the queen potato, it utilizes localstorage to store the progress for now <br />
      but I am working on an online multiplayer version made in the MERN stack that stores progress in a mongoDB database</p>

      {/* External link and navigation */}
      <div className="flex gap-4">
        <a
          href="https://heggh.no/potatogame/Queen%20of%20potato/index.html"
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

export default Project1;
