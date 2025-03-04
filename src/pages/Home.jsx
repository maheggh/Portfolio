// pages/Home.jsx
import React, { useRef, useEffect, useState, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import styles from "./home.module.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { checkWebGLSupport } from "../utils/checkWebGl"; // If you put the helper in a utils folder

// 3D Model Component
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

// A simple fallback component that renders the grid background
function GridBackgroundFallback() {
  return <div className={styles.backupGridBackground} />;
}

const Home = () => {
  const [supportsWebGL, setSupportsWebGL] = useState(true);
  const location = useLocation();

  // Check for WebGL support on mount
  useEffect(() => {
    setSupportsWebGL(checkWebGLSupport());
  }, []);

  // If there's a hash in the URL (e.g. /#about), scroll to that element
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="relative">
      <div className="h-screen w-full relative">
        {supportsWebGL ? (
          // If WebGL is supported, render the 3D Canvas
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Canvas camera={{ position: [-100, 100, 0], fov: 75 }}>
              {/* Use fallback={null} so we don't try to render a DOM node in R3F */}
              <Suspense fallback={null}>
                <directionalLight intensity={5} position={[500, 200, 200]} />
                <directionalLight intensity={1} position={[0, 0, -50]} />
                <ambientLight intensity={1} />
                <ThreeDModel modelPath="../assets/3d/scene.gltf" />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
        ) : (
          // If no WebGL, show the grid background immediately
          <GridBackgroundFallback />
        )}

        {/* Hero Container Text */}
        <div className={styles.heroContainer}>
          <div>
            <p className={styles.introTitle}>Hi, my name is</p>
            <h1 className={styles.heroTitle}>Martin Heggholmen</h1>
          </div>
          <p className={styles.subHeroTitle}>I'm a full-stack web developer</p>
        </div>
      </div>

      {/* Section Anchors */}
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
