import React from "react";

const projects = [
  {
    title: "Mafia game",
    image: "../assets/projects/project1.png",
    link: "https://heggh.no/potatogame/Queen%20of%20potato/index.html",
    description: "An interactive multiplayer Mafia game with unique twists.",
  },
  {
    title: "Sustainability diary",
    image: "../assets/projects/project2.png",
    link: "https://team3.sustainability.it.ntnu.no/",
    description: "Track your sustainability goals and progress with ease.",
  },
  {
    title: "NRK Extension",
    image: "../assets/projects/project3.png",
    link: "https://github.com/maheggh/NRKExtension",
    description: "Chrome extension for filtering news for NRK.no.",
  },
  {
    title: "Super accessor",
    image: "../assets/projects/project4.JPG",
    link: "https://github.com/maheggh/cardgame",
    description: "A card game to create assessment-methods for teachers.",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-20 px-5">
      <h2 className="text-5xl font-bold text-center text-blue-300 dark:text-white mb-12">
        My Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="block group overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-105"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:opacity-70 transition-opacity duration-300"
              />
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
