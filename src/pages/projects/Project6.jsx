import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project6 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      <h1 className="text-5xl font-bold mb-8">HelseINN E-learning platform</h1>

      {/* Media */}
      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project6.png"
          alt="HelseINN E-learning platform screenshot"
          className={styles.mediaItem}
        />
      </div>

      {/* Details */}
      <div className="mt-8">
        <p className="text-lg mb-6">
          So this is my bachelor thesis I'm writing together with 2 other students that we are currently working on, where we are creating an e-learning module for Helse Innlandet (HelseINN) <br />
          Its a model called "Fellesmodellen" which is a model on how to do projects in the health industry, based on the double-diamond. <br />
          Our e-learning aims to as effective as possible train healthcare workers and project leaders this new and effective method of doing projects. <br />
          And through iteration testing, user insights, and interviews we are striving to make this model an effective tool.
        </p>
      </div>

      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project6img.png"
          alt="HelseINN E-learning platform screenshot"
          className={styles.mediaItem}
        />
      </div>

      <div className="mt-8">
        <p className="text-lg mb-6">
          This is the early stages of the developement, where you can see the layout. 
        </p>
      </div>

      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project6img2.png"
          alt="HelseINN E-learning platform screenshot"
          className={styles.mediaItem}
        />
      </div>

      <div className="mt-8">
        <p className="text-lg mb-6">
          This is the coursebuilder I'm working on that enables you to easily make courses for the e-learning modules. This is made to make it easier and faster <br />
          to publish modules, and enables you to easily modify existing content, and enables you to have consistant design through all the modules.
        </p>
      </div>

      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project6img1.png"
          alt="HelseINN E-learning platform screenshot"
          className={styles.mediaItem}
        />
      </div>
      <div className="mt-8">
        <p className="text-lg mb-6">
          After you are done with your e-learning modules you are asked to send a report, I developed a custom form for this so we can more easily customize <br />
          and edit the forms design for consistansy and ease of use. This form also sends the reports directly to whos administrating the project. <br />
          and enables you to export the results to a PDF if you so desire.
        </p>
      </div>
      {/* Links */}
      <div className="flex gap-4">
        <a
          href="https://github.com/maheggh/IDG3920"
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

export default Project6;
