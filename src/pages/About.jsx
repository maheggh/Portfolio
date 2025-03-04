// pages/About.jsx
import React from "react";
import Icons from "../components/TechIcons";
import styles from "./About.module.css";

const About = () => {
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
    <div className={`${styles.aboutContainer} relative min-h-screen p-10 py-40 flex flex-col items-center justify-center`}>
      <div className="container mx-auto max-w-4xl text-center space-y-10">
        <h1 className={`text-5xl font-extrabold mb-4 ${styles.aboutTitle}`}>
          About Me
        </h1>
        <div className="flex justify-center">
          <img
            src="../assets/hero/avatar.png"
            alt="an avatar of me"
            className="w-48 h-48 rounded-full shadow-lg"
          />
        </div>
        <div className={`text-xl leading-relaxed mb-6 ${styles.aboutText}`}>
          I'm a <div className= "inline text-blue-500" >Web Developer</div> currently studying at NTNU Gjøvik.
          I enjoy creating beautiful and simplistic web designs, experimenting with new
          technologies, and finding new ways to engage users.
          <br /><br />
          In my spare time, I love painting, 3D modeling, and exercising.
          <br /><br />
          <button
            onClick={() => scrollToSection("contact")}
            className="text-black dark:text-white focus:outline-none"
          >
            <div className= "inline text-blue-500" >Contact me</div>
          </button> to discuss your next web adventure!
        </div>
        <h2 className={`text-2xl font-bold mb-4 ${styles.aboutTitle}`}>
          Technologies I Use
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {Icons.map(({ component: Icon, alt }, index) => (
            <div key={index} className="flex flex-col items-center">
              <a
                href={techLinks[alt]}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-20 h-20 p-4 bg-gray-100 rounded-full shadow-md group transition-all duration-300 ease-in-out transform hover:bg-blue-500 hover:shadow-xl hover:scale-110"
              >
                <Icon
                  aria-label={alt}
                  className="w-full h-full text-gray-900 group-hover:text-white"
                />
              </a>
              <span className="mt-2 text-sm text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
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
