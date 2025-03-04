// pages/Home.jsx
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import styles from "./home.module.css";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { checkWebGLSupport } from "../utils/checkWebGL"; // If you put the helper in a utils folder

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

  // Check for WebGL support on mount
  useEffect(() => {
    setSupportsWebGL(checkWebGLSupport());
  }, []);

  return (
    <div className="relative">
      <div className="h-screen w-full relative">
        {supportsWebGL ? (
          // If WebGL is supported, try to render the 3D Canvas
          <Canvas camera={{ position: [-100, 100, 0], fov: 75 }}>
            {/* Provide a fallback while the model is loading */}
            <Suspense fallback={<GridBackgroundFallback />}>
              <directionalLight intensity={5} position={[500, 100, 100]} />
              <directionalLight intensity={1} position={[0, 0, -50]} />
              <ambientLight intensity={1} />
              <ThreeDModel modelPath="../assets/3d/scene.gltf" />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        ) : (
          // If no WebGL, fallback to the grid background immediately
          <GridBackgroundFallback />
        )}

        {/* Your hero container text */}
        <div className={styles.heroContainer}>
          <div>
            <p className={styles.introTitle}>Hi, my name is</p>
            <h1 className={styles.heroTitle}>Martin Heggholmen</h1>
          </div>
          <p className={styles.subHeroTitle}>I'm a full-stack web developer</p>
        </div>
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
};

export default Home;
