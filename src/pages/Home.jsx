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
import { checkWebGLSupport } from "../utils/checkWebGl";

// 3D Model Component
const ThreeDModel = ({ modelPath, modelScale }) => {
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
      scale={[modelScale, modelScale, modelScale]}
      position={[0, -10, 0]}
    />
  );
};

// Grid fallback if no WebGL
function GridBackgroundFallback() {
  return <div className={styles.backupGridBackground} />;
}

const Home = () => {
  const [supportsWebGL, setSupportsWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check WebGL on mount
  useEffect(() => {
    setSupportsWebGL(checkWebGLSupport());
  }, []);

  // Detect mobile vs. desktop
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll to hash section
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Scale & camera adjustments for mobile
  const modelScale = isMobile ? 600 : 1200;
  const cameraPosition = isMobile ? [-60, 60, 0] : [-100, 100, 0];

  // If no WebGL, show fallback
  if (!supportsWebGL) {
    return (
      <div className={styles.noWebglContainer}>
        <div className={styles.backupGridBackground} />
        <div className={styles.heroContainer}>
          <div>
            <p className={styles.introTitle}>Hi, my name is</p>
            <h1 className={styles.heroTitle}>Martin Heggholmen</h1>
          </div>
          <p className={styles.subHeroTitle}>I'm a full-stack web developer</p>
        </div>
        {/* Rest of the page */}
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
  }

  return (
    <div className="relative">
      <div className={styles.canvasWrapper}>
        <Canvas camera={{ position: cameraPosition, fov: 75 }}>
          <Suspense fallback={null}>
            <directionalLight intensity={5} position={[500, 200, 200]} />
            <directionalLight intensity={1} position={[0, 0, -50]} />
            <ambientLight intensity={1} />
            <ThreeDModel modelPath="../assets/3d/scene.gltf" modelScale={modelScale} />
            {/* Touch-based rotation by default. If you want pinch-zoom, remove enableZoom={false}. */}
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>

        {/* Hero text overlay */}
        <div className={styles.heroOverlay}>
  <div className={styles.topText}>
    <p className={styles.introTitle}>Hi, my name is</p>
  </div>
  <div className={styles.bottomText}>
    <h1 className={styles.heroTitle}>Martin Heggholmen</h1>
    <p className={styles.subHeroTitle}>I'm a full-stack web developer</p>
  </div>
</div>
</div>

      {/* Remaining sections */}
      <div id="about" className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-blue-800 dark:to-gray-900 flex items-center justify-center">
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