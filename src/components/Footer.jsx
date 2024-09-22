import React from "react";
import styles from "../components/Footer.module.css";

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
      url: "https://artstation.com/marhegg",
      image: "../assets/socials/artstation.png",
    },
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          Website created by{" "}
          <span className={styles.footerAuthor}>
            <br />
            Martin Heggholmen
          </span>
        </p>
        <div className={styles.socialContainer}>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <div className={styles.socialIconWrapper}>
                <img
                  src={social.image}
                  alt={social.name}
                  className={styles.socialIcon}
                />
              </div>
              <span className={styles.socialLabel}>{social.name}</span>
            </a>
          ))}
        </div>
        <p className={styles.footerRights}>
          &copy; {new Date().getFullYear()} Martin Heggholmen. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
