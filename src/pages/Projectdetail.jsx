// pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// In a real application, you might fetch this data from an API or store it in a context.
// For this example, we reuse the projects array from Projects.jsx.
const projects = [
  {
    id: "1",
    title: "Mafia Game",
    image: "../assets/projects/project1.png",
    externalLink: "https://heggh.no/potatogame/Queen%20of%20potato/index.html",
    description: "An interactive multiplayer Mafia game with unique twists.",
    details:
      "Detailed information about the Mafia Game project, including tech stack, challenges, and more.",
  },
  {
    id: "2",
    title: "Sustainability Diary",
    image: "../assets/projects/project2.png",
    externalLink: "https://team3.sustainability.it.ntnu.no/",
    description:
      "Track your sustainability goals and progress with ease.",
    details:
      "An in-depth look at the Sustainability Diary project, featuring design decisions and functionality details.",
  },
  {
    id: "3",
    title: "NRK Extension",
    image: "../assets/projects/project3.png",
    externalLink:
      "https://chromewebstore.google.com/detail/nrk-filter/hhiajgpkhnbonhlfcgodaphjcahjajgn",
    description: "A Chrome extension to filter news on NRK.no.",
    details:
      "All about the NRK Extension project – its features, code structure, and user experience enhancements.",
  },
  {
    id: "4",
    title: "Super Accessor",
    image: "../assets/projects/project4.JPG",
    externalLink: "https://github.com/maheggh/cardgame",
    description:
      "A card game to create assessment methods for teachers.",
    details:
      "Detailed insights into the Super Accessor project, including gameplay mechanics and technical challenges.",
  },
  {
    id: "5",
    title: "Super Accessor",
    image: "../assets/projects/project4.JPG",
    externalLink: "https://github.com/maheggh/cardgame",
    description:
      "A card game to create assessment methods for teachers.",
    details:
      "Detailed insights into the Super Accessor project, including gameplay mechanics and technical challenges.",
  },
  {
    id: "6",
    title: "Super Accessor",
    image: "../assets/projects/project4.JPG",
    externalLink: "https://github.com/maheggh/cardgame",
    description:
      "A card game to create assessment methods for teachers.",
    details:
      "Detailed insights into the Super Accessor project, including gameplay mechanics and technical challenges.",
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
      <div className="mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded shadow-md"
        />
      </div>
      <p className="text-lg mb-6">{project.details}</p>
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
