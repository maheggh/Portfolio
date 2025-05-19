import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project1 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      {/* Main Title */}
      <h1 className="text-5xl font-bold mb-8">Mafia Game</h1>

      {/* Section 1: Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-lg leading-relaxed mt-4">
          This was a game I made in my spare time to experiment more with javascript, <br/>
          all the different functionalities in the game made me learn a lot about the language. <br/>
        </p>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project1.png"
            alt="Mafia Game example screenshot"
            className={styles.mediaItem}
          />
        </div>

        <p className="text-lg leading-relaxed mt-4">
          Inspired by the classic “Omerta” crime game, this Mafia Game I played as a kid.
          It is built entirely with HTML, CSS, and JavaScript. Your goal is to 
          climb the criminal underworld hierarchy, taking on missions, 
          stealing cars and wallets, and forging your own path to become 
          the ultimate “Queen Potato.”
        </p>
      </section>

      {/* Section 2: Gameplay & Theme */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Gameplay & Theme</h2>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/potatoimg1.png"
            alt="Image of an unlucky potato getting thrown in jail"
            className={styles.mediaItem}
          />
        </div>
        <figcaption className="italic text-sm mt-2 mb-4">
          An unlucky potato thrown in jail
        </figcaption>
        
        <p className="text-lg leading-relaxed">
          The entire game features a potato-themed storyline, complete 
          with quirky characters and entertaining scenes. Player progress 
          is currently stored in LocalStorage, but a MERN-stack upgrade 
          (MongoDB, Express, React, Node) is in the works to support 
          online multiplayer and persistent data.
        </p>
      </section>

      {/* External Link & Back */}
      <div className="flex gap-4">
        <a
          href="https://potatomultiplayer-production.up.railway.app/"
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
