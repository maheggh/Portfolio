import React from "react";
import { Link } from "react-router-dom";
import styles from "../projects.module.css";

const Project5 = () => {
  return (
    <div className="container mx-auto py-40 px-5">
      <h1 className="text-5xl font-bold mb-8">Web of Things</h1>

      {/* Media (Image + Video) */}
      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project5.jpg"
          alt="Web of Things project screenshot"
          className={styles.mediaItem}
        />
      </div>

      {/* Project details */}
      <div className="mt-8">
        <p className="text-lg mb-6">
            This was a very exciting Web of Things project me and 5 other students made in the course "Web of things" WOT for short. <br />
            In this project we made a working prototype of a door counter that counted the amount of people that moved in and out of the school library. 
        </p>
      </div>

      <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project5img.jpg"
          alt="Web of Things project screenshot"
          className={styles.mediaItem}
        />
        </div>
        <div className="mt-8">
        <p className="text-lg mb-6">
            So firstly we started out with an arduino, and did some soldering to connect the electricity to our breadboard, this was to power our LED strips <br />
            so we experimenting with making our echo sensors communicate with our arduino, <br /> and then based on what sensor data is getting registered by the echo sensors
            chose what LED lights to turn on, this will represent the capacity of people that are in the library.
        </p>
      </div>

        <div className={styles.mediaContainer}>
        <img
          src="../../assets/projects/project5img3.jpg"
          alt="Web of Things project screenshot"
          className={styles.mediaItem}
        />
        </div>
      <p className="text-lg mb-6">
            We later decided to replace the arduino with two raspberry pies, each connected with a rainbow cable to their respective breadboards. <br />
            The raspberry with the echo sensors connected to it processed the sensor data with a python script, and sent the information with node-red to <br />
            a MSQTT broker called hiveMQ, the recieving raspberry subscribed to the HiveMQ broker and recieved the information through Node-red, <br />
            afterwards it processed this incoming information in a python script and sent the information to node-reds graphic UI elements, as well as <br />
            the LED-strips which was adressable. We also created a bash script that would fire at launch, so the whole project would launch when the raspberry got powered up.
        </p>

        
        <div className={styles.mediaContainer}>
        <video controls className={styles.mediaItem}>
          <source src="../../assets/projects/p5video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="text-lg mb-6">
            As you can see in the video the hand triggers the counter, so if it moves in one direction a person is registered as <br />
            entering the library, while if the hand moves the other way it counts as a person exiting the library, and the capacity of the library is displayed both <br />
            on the LED-strips and the screen.
        </p>
      {/* Links */}
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
