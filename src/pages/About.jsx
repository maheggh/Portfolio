import React from "react";
import Icons from "../components/TechIcons";

const About = () => {
  // Define the links for each technology with corrected names
  const techLinks = {
    CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
    Sass: "https://sass-lang.com",
    React: "https://reactjs.org",
    GitHub: "https://github.com",
    PostgreSQL: "https://www.postgresql.org",
    MySQL: "https://www.mysql.com",
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "Tailwind CSS": "https://tailwindcss.com",
    Figma: "https://www.figma.com",
    PHP: "https://www.php.net",
    Photoshop: "https://www.adobe.com/products/photoshop.html",
    "Three.js": "https://threejs.org",
    "VS Code": "https://code.visualstudio.com",
    Postman: "https://www.postman.com",
    "Node.js": "https://nodejs.org",
    MongoDB: "https://www.mongodb.com",
    HTML: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    Docker: "https://www.docker.com",
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-gray-900 p-10 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-4xl text-center space-y-10">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          About Me
        </h1>

        {/* Avatar Image */}
        <div className="flex justify-center">
          <img
            src="../assets/hero/avatar.png"
            alt="an avatar of me"
            className="w-48 h-48 rounded-full shadow-lg"
          />
        </div>

        {/* Text Section */}
        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          I&apos;m originally from Skien, currently living in Elverum. I enjoy
          creating beautiful and simplistic web-designs, experimenting with new
          technologies, and finding new ways to engage users. <br />
          <br />
          In my spare time, I love painting, 3d-modeling, and exercising.
          <br />
          <br />
          Contact me to discuss your next web adventure!
        </p>

        {/* Technologies Section */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Technologies I Use
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {Icons.map(({ component: Icon, alt }, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon with Hover Effects */}
              <a
                href={techLinks[alt]} // Map the alt text to the appropriate link
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-20 h-20 p-4 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md group transition-all duration-300 ease-in-out transform hover:bg-blue-500 dark:hover:bg-blue-600 hover:shadow-xl hover:scale-110"
              >
                <Icon
                  aria-label={alt}
                  className="w-full h-full text-gray-900 dark:text-gray-100 group-hover:text-white"
                />
              </a>

              {/* Technology Name Underneath the Icon */}
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                {alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
