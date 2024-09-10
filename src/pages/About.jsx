import React from "react";
import Icons from "../components/TechIcons";

const About = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-800 p-10">
      <div className="container mx-auto max-w-4xl grid justify-center align-center">
        <h1 className="text-4xl font-bold text-left text-gray-900 dark:text-white mb-8">
          About Me
        </h1>
        <img
          src="../src/assets/hero/avatar.png"
          alt="an avatar of me"
          className="w-60 p-4"
        />
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I&apos;m originally from Skien, currently living in Elverum. <br />
          <br />I enjoy creating beautiful and simplistic web-design,
          experimenting with new technologies, and finding new ways to engage
          the user. I enjoy creating oil-paintings in my spare time, photography
          and gaming.
          <br />
          <br />
        </p>
        <h2 className="text-lg text-gray-700 dark:text-gray-300 font-bold">
          My tech stack
        </h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {Icons.map(({ component: Icon, alt }, index) => (
            <div key={index} className="w-16 h-16">
              <Icon aria-label={alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
