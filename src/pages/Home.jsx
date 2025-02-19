// pages/Home.jsx
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import styles from "./home.module.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const ThreeDModel = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const objectRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
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
      scale={[1200, 1200, 1200]}
      position={[0, -10, 0]}
    />
  );
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <div className="h-screen w-full relative">
        {isMobile ? (
          <div className={styles.mobileImageContainer}>
            <picture>
              <source media="(orientation: landscape)" srcSet="../assets/3d/3d-2.jpg" />
              <img src="../assets/3d/3d.jpg" alt="3D Model Placeholder" className={styles.mobileImage} />
            </picture>
          </div>
        ) : (
          <Canvas camera={{ position: [-100, 100, 0], fov: 75 }}>
            <directionalLight intensity={2} position={[500, 500, 500]} />
            <directionalLight intensity={1} position={[0, 0, -50]} />
            <ambientLight intensity={1} />
            <ThreeDModel modelPath="../assets/3d/scene.gltf" />
            <OrbitControls enableZoom={false} />
          </Canvas>
        )}

        {/* Updated hero container with semi-transparent background */}
        <div className={styles.heroContainer}>
          <div>
            <p className={styles.introTitle}>Hi, my name is</p>
            <h1 className={styles.heroTitle}>Martin Heggholmen</h1>
          </div>
          <p className={styles.subHeroTitle}>I'm a full-stack web developer</p>
        </div>
      </div>

      <div id="about" className="">
        <About />
      </div>

      <div id="projects" className="">
        <Projects />
      </div>

      <div id="contact" className="">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
