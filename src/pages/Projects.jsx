// pages/Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./projects.module.css";

const projects = [
  {
    id: "1",
    title: "Mafia Game",
    image: "../assets/projects/project1.png",
    externalLink: "https://potatomultiplayer-production.up.railway.app/",
    description: "An interactive multiplayer Mafia game with unique twists.",
    details: "Detailed information about the Mafia Game project, including tech stack, challenges, and more."
  },
  {
    id: "2",
    title: "Sustainability Diary",
    image: "../assets/projects/project2.png",
    externalLink: "https://team3.sustainability.it.ntnu.no/",
    description: "Track your sustainability goals and progress with ease.",
    details: "An in-depth look at the Sustainability Diary project, featuring design decisions and functionality details."
  },
  {
    id: "3",
    title: "NRK Extension",
    image: "../assets/projects/project3.png",
    externalLink: "https://chromewebstore.google.com/detail/nrk-filter/hhiajgpkhnbonhlfcgodaphjcahjajgn",
    description: "A Chrome extension to filter news on NRK.no.",
    details: "All about the NRK Extension project – its features, code structure, and user experience enhancements."
  },
  {
    id: "4",
    title: "Super Accessor",
    image: "../assets/projects/project4.JPG",
    externalLink: "https://github.com/maheggh/cardgame",
    description: "A card game to create assessment methods for teachers.",
    details: "Detailed insights into the Super Accessor project, including gameplay mechanics and technical challenges."
  },
  {
    id: "5",
    title: "Web of things",
    image: "../assets/projects/project5.jpg",
    externalLink: "https://github.com/maheggh/WoT/tree/main",
    description: "A door counter system to count people entering and exiting the library with a visual LED display",
    details: "Detailed insight in to how the doorcounter works."
  },
  {
    id: "6",
    title: "HelseINN E-learning platform",
    image: "../assets/projects/project6.png",
    externalLink: "https://idg3920-production-8276.up.railway.app/",
    description: "Create an E-learning platform for fellesmodellen for healthcare workers.",
    details: "Detailed insights into the Fellesmodellen project, our bachelor thesis for HelseINN."
  }
];

const Projects = () => {
  return (
    <section className={`${styles.projectsSection} py-40 min-h-screen from-blue-200 to-blue-200 dark:from-blue-800 dark:to-gray-900 flex items-center justify-center`}>
      <div className="container mx-auto">
        <h2 className={`text-6xl font-bold text-center mb-12 ${styles.sectionTitle}`}>
          My Projects
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className={`rounded-lg overflow-hidden ${styles.projectCard}`}>
              {/* Clicking the image navigates to the project detail page */}
              <Link to={`/projects/${project.id}`}>
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover ${styles.projectImage}`}
                  />
                </div>
              </Link>
              <div className={`p-6 ${styles.cardContent}`}>
                <h3 className={`text-2xl font-semibold mb-3 ${styles.projectTitle}`}>
                  {project.title}
                </h3>
                <p className={`text-base mb-4 ${styles.projectDescription}`}>
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/projects/${project.id}`}
                    className={`px-4 py-2 rounded ${styles.detailButton}`}
                  >
                    View Details
                  </Link>
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded ${styles.visitButton}`}
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
