import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project5 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      {/* Main Title */}
      <h1 className="text-5xl font-bold mb-8">Web of Things</h1>

      {/* Section 1: Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
        <p className="text-lg leading-relaxed mt-4">
          This was made for the Web of things course, a course where we learned a lot on how different devices communicate with eachother, <br/> 
          what protocols they use, how we can connect them together. We also got to visit vitensenteret in Gjøvik and get valuable insights from employees. <br/>
          Our task for this course was to make a WoT device that served a purpose, where devices communicated with eachother to accomplish a goal. <br/>
          <br/>
        </p>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project5.jpg"
            alt="Web of Things project screenshot"
            className={styles.mediaItem}
          />
        </div>
        <p className="text-lg leading-relaxed mt-4">
          This Web of Things (WoT) project was a collaboration between myself and five 
          fellow students. Our goal was to create a working prototype of a door counter 
          that tracks how many people enter and exit our school library.
        </p>
      </section>

      {/* Section 2: Early Hardware & Prototyping */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Early Hardware & Prototyping</h2>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project5img.jpg"
            alt="Arduino setup screenshot"
            className={styles.mediaItem}
          />
        </div>
        <p className="text-lg leading-relaxed mt-4">
          We began with an Arduino, soldering connections to a breadboard to power LED 
          strips. By experimenting with ultrasonic (echo) sensors, we configured the Arduino 
          to detect movement and trigger the LEDs, representing the library’s current occupancy.
        </p>
      </section>

      {/* Section 3: Transition to Raspberry Pi */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Transition to Raspberry Pi</h2>
        <div className={styles.mediaContainer}>
          <img
            src="../../assets/projects/project5img3.jpg"
            alt="Raspberry Pi setup screenshot"
            className={styles.mediaItem}
          />
        </div>
        <p className="text-lg leading-relaxed mt-4">
          We later replaced the Arduino with two Raspberry Pis, each connected to its own 
          breadboard via a ribbon cable. The first Pi:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed ml-6 mt-2">
          <li>Processed sensor data (via Python scripts).</li>
          <li>Communicated sensor readings through Node-RED.</li>
          <li>Published occupancy data to a HiveMQ MQTT broker.</li>
        </ul>
        <p className="text-lg leading-relaxed mt-4">
          The second Pi subscribed to the HiveMQ broker, received the occupancy messages, 
          and updated:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed ml-6 mt-2">
          <li>A Node-RED graphical UI.</li>
          <li>An addressable LED strip reflecting the number of people in the library.</li>
        </ul>
        <p className="text-lg leading-relaxed mt-4">
          We also created a bash script to automatically launch the entire setup whenever 
          the Pi boots up, making it easy to deploy and maintain.
        </p>
      </section>

      {/* Section 4: Demonstration Video */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Demonstration Video</h2>
        <div className={styles.mediaContainer}>
          <video controls className={styles.mediaItem}>
            <source src="../../assets/projects/p5video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-lg leading-relaxed mt-4">
          In this clip, you can see a hand passing in front of the sensor. 
          When movement is detected in one direction, it counts as someone 
          entering. Moving in the opposite direction counts as someone 
          exiting. Both the LED strip and the Node-RED interface 
          dynamically update to display current occupancy.
        </p>
      </section>

      {/* Visit / Back Buttons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/maheggh/WoT/tree/main"
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

export default Project5;
