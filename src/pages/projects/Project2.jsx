import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project2 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      {/* Main Title */}
      <h1 className="text-5xl font-bold mb-8">Sustainability Diary</h1>

      {/* Section 1: Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-lg leading-relaxed mt-4">
          The task of this project was to create a digital diary for students to take notes and share ideas during or after classes <br/>
          and if desired give access to teachers and other students to read these notes, and comment on them. The teachers can share resources <br />
          create classrooms, and add/modify users.
          <br/>
          <br/>
        </p>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project2.png"
            alt="Sustainability Diary screenshot"
            className={styles.mediaItem}
          />
        </div>
        <p className="text-lg leading-relaxed mt-4">
          This website made for our “Webproject” course in collaboration with four classmates, we started with the ideation phase, with sketches <br/>
          low-fi prototypes, roadmaps, personas, sitemaps, high-fi prototypes, and had to communicate our progress to the project owner at every milestone.
          We used the scrum method for frequent meetings, and we used github issues to divide tasks.
        </p>
      </section>

      {/* Section 2: Tech Stack & Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Tech Stack & Features</h2>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project2img.png"
            alt="Sustainability Diary extended screenshot"
            className={styles.mediaItem}
          />
        </div>
        <p className="text-lg leading-relaxed mt-4">
          Built using the MERN stack (MongoDB, Express, React, Node.js) <br/> 
          Docker for dockerizing the project for hosting <br/>
          Swagger for documentating the endpoints <br/>
          the platform includes:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed ml-6 mt-2">
          <li>A classroom enrollment system</li>
          <li>Ability to post and share lecture notes</li>
          <li>Role-based access (students vs. teachers)</li>
          <li>Email-based password recovery and achievement system</li>
        </ul>
      </section>

      {/* Section 3: My Contributions */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">My Contributions</h2>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project2img2.png"
            alt="Sustainability Diary screenshot - achievements"
            className={styles.mediaItem}
          />
        </div>
        <p className="text-lg leading-relaxed mt-4">
          My primary responsibilities included implementing tests, building 
          the email-based password recovery workflow, creating the classroom 
          joining functionality, and developing the achievement system. 
          I also handled some styling to give the platform a cohesive, 
          user-friendly interface.
        </p>
      </section>

      {/* Visit / Back Buttons */}
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
