import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import styles from "./Home.module.css";
import Projects from "./Projects";
import About from "./About";

const ThreeDModel = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const objectRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (objectRef.current) {
      const lerpFactor = 0.05;
      const targetRotationY = -3 + (mousePos.x / window.innerWidth) * 3;
      objectRef.current.rotation.y +=
        (targetRotationY - objectRef.current.rotation.y) * lerpFactor;
    }
  });

  return (
    <primitive
      ref={objectRef}
      object={gltf.scene}
      scale={[0.5, 0.5, 0.5]}
      position={[0, 20, 0]}
    />
  );
};

const Home = () => {
  const projectRef = useRef(null);

  return (
    <div className="relative">
      <div className="h-screen w-full relative">
        <Canvas camera={{ position: [-100, 100, 0], fov: 75 }}>
          <directionalLight intensity={2} position={[500, 500, 500]} />
          <directionalLight intensity={1} position={[0, 0, -50]} />
          <ambientLight intensity={1} />
          <ThreeDModel modelPath="../src/assets/3d/scene.gltf" />
          <OrbitControls enableZoom={false} />
        </Canvas>

        <div className={styles.heroContainer}>
          <div>
            <p className={styles.introTitle}>Hi, my name is</p>
            <h1 className={styles.heroTitle}>Martin Heggholmen</h1>
          </div>
          <p className={styles.subHeroTitle}>I create things for the web</p>
        </div>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact" className="min-h-screen">
        {/* Contact Section */}
        <section className="container mx-auto max-w-2xl px-4 py-10">
          <h1 className="text-4xl font-bold text-center text-white dark:text-white mb-8">
            Contact me
          </h1>
          <form className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-5 bg-blue-600 text-white font-medium text-sm rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Home;
