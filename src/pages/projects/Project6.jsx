import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project6 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      {/* Main Title */}
      <h1 className="text-5xl font-bold mb-8">HelseINN E-learning Platform</h1>

      {/* Section 1: Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
        <p className="text-lg leading-relaxed mt-4">
          We found this project with help of the BeNet webpage where actual partners for our bachelor could list their projects.<br/> 
          We found HelseINNs project interesting because it had real world applications, and we saw the oppertunity to develop something useful <br/>
          for health personel, so we quickly applied to the project. <br/>
        <br/>
        </p>
        
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project6.png"
            alt="HelseINN E-learning platform screenshot"
            className={styles.mediaItem}
          />
        </div>

        <p className="text-lg leading-relaxed mt-4">
          This E-learning platform is part of my bachelor thesis, developed alongside two fellow 
          students for Helse Innlandet (HelseINN). Our goal is to streamline training for healthcare 
          workers and project managers by introducing them to “Fellesmodellen,” a methodology built 
          upon the Double Diamond process. Fellesmodellen provides structured guidance on running 
          health-industry projects effectively, focusing on user-centered design and iteration. This project is still in progress.
        </p>
      </section>

      {/* Section 2: Early Development */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Early Development</h2>
        
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project6img.png"
            alt="HelseINN E-learning early development screenshot"
            className={styles.mediaItem}
          />
        </div>

        <p className="text-lg leading-relaxed mt-4">
          In the early stages, we focused on designing a user-friendly layout, 
          incorporating iterative feedback from healthcare professionals. By 
          interviewing potential users, we refined the platform’s functionality, 
          ensuring that it remains both practical and intuitive.
        </p>
      </section>

      {/* Section 3: Course Builder */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Course Builder</h2>
        
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project6img2.png"
            alt="Course builder screenshot"
            className={styles.mediaItem}
          />
        </div>

        <p className="text-lg leading-relaxed mt-4">
          To reduce development time and ensure consistent design across all modules, 
          we built a dedicated Course Builder. This tool enables administrators to:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed ml-6 mt-2">
          <li>Rapidly create new learning modules</li>
          <li>Maintain consistent branding and style</li>
          <li>Update content without extensive coding</li>
          <li>Centralize all course materials for easy access</li>
        </ul>
      </section>

      {/* Section 4: Custom Reporting */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Custom Reporting</h2>
        
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project6img1.png"
            alt="HelseINN E-learning platform reporting screenshot"
            className={styles.mediaItem}
          />
        </div>

        <p className="text-lg leading-relaxed mt-4">
          After completing a module, users can submit a custom form that generates 
          detailed reports. These reports can be emailed to project administrators 
          or exported as PDFs, providing timely insights into user progress and 
          course effectiveness. 
        </p>
      </section>

      {/* Visit / Back Buttons */}
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
