import React from "react";

const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/maheggh",
      image: "../assets/socials/github.png",
    },
    {
      name: "Email",
      url: "mailto:martinheggholmen@gmail.com",
      image: "../assets/socials/email.png",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/heggyart",
      image: "../assets/socials/instagram.png",
    },
    {
      name: "ArtStation",
      url: "https://artstation.com/maheggh",
      image: "../assets/socials/artstation.png",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto text-left">
        <p className="text-2xl mb-8">
          Website created by{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <br />
            Martin Heggholmen
          </span>
        </p>
        <div className="flex justify-end items-center space-x-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-transform transform hover:scale-110">
                <img
                  src={social.image}
                  alt={social.name}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <span className="mt-2 text-sm">{social.name}</span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-400 text-right">
          &copy; {new Date().getFullYear()} Martin Heggholmen. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
