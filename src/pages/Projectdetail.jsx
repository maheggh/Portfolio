import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./projects.module.css";

// Updated projects array with a 'media' property for each project.
// Note: For projects with only one image, you can include a single-item array.
const projects = [
  {
    id: "1",
    title: "Mafia Game",
    media: ["../assets/projects/project1.png"],
    externalLink: "https://heggh.no/potatogame/Queen%20of%20potato/index.html",
    description: "An interactive multiplayer Mafia game with unique twists.",
    details:
      "Detailed information about the Mafia Game project, including tech stack, challenges, and more.",
  },
  {
    id: "2",
    title: "Sustainability Diary",
    media: ["../assets/projects/project2.png"],
    externalLink: "https://team3.sustainability.it.ntnu.no/",
    description: "Track your sustainability goals and progress with ease.",
    details:
      "An in-depth look at the Sustainability Diary project, featuring design decisions and functionality details.",
  },
  {
    id: "3",
    title: "NRK Extension",
    media: ["../assets/projects/project3.png"],
    externalLink:
      "https://chromewebstore.google.com/detail/nrk-filter/hhiajgpkhnbonhlfcgodaphjcahjajgn",
    description: "A Chrome extension to filter news on NRK.no.",
    details:
      "All about the NRK Extension project – its features, code structure, and user experience enhancements.",
  },
  {
    id: "4",
    title: "Super Accessor",
    media: ["../assets/projects/project4.JPG"],
    externalLink: "https://github.com/maheggh/cardgame",
    description: "A card game to create assessment methods for teachers.",
    details:
      "Detailed insights into the Super Accessor project, including gameplay mechanics and technical challenges.",
  },
  {
    id: "5",
    title: "Web of Things",
    media: [
      "../assets/projects/project5.jpg",
      "../assets/projects/p5video.mp4" // Video file example
    ],
    externalLink: "https://github.com/maheggh/WoT/tree/main",
    description:
      "A door counter system to count people entering and exiting the library with a visual LED display",
    details:
      "Detailed insight into how the door counter works. This project involves hardware integration, real-time data processing, and a user-friendly visual display.",
  },
  {
    id: "6",
    title: "HelseINN E-learning platform",
    media: ["../assets/projects/project6.png"],
    externalLink: "https://idg3920-production-8276.up.railway.app/",
    description:
      "Create an E-learning platform for fellesmodellen for healthcare workers.",
    details:
      "Detailed insights into the Fellesmodellen project, our bachelor thesis for HelseINN.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="container mx-auto py-20 px-5 text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-blue-600 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20 px-5">
      <h1 className="text-5xl font-bold mb-8">{project.title}</h1>
      
      {/* Media container for images/videos */}
      <div className={styles.mediaContainer}>
        {project.media.map((item, index) => {
          // Check the file extension to decide between video and image
          if (item.endsWith(".mp4")) {
            return (
              <video key={index} controls className={styles.mediaItem}>
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            );
          }
          return (
            <img
              key={index}
              src={item}
              alt={`${project.title} media ${index + 1}`}
              className={styles.mediaItem}
            />
          );
        })}
      </div>

      {/* Detailed description */}
      <div className="mt-8">
        <p className="text-lg mb-6">{project.details}</p>
      </div>
      
      {/* Buttons for external project link and navigating back */}
      <div className="flex gap-4">
        <a
          href={project.externalLink}
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

export default ProjectDetail;
