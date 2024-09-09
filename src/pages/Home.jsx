import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import styles from "./Home.module.css"; // Import the CSS module

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
      const lerpFactor = 1;
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
      position={[0, 20, 0]} // Adjust position as needed
    />
  );
};

const Home = () => {
  return (
    <div className="relative h-screen m-0">
      <Canvas camera={{ position: [-100, 100, 0], fov: 75 }}>
        <directionalLight intensity={1} position={[500, 500, 500]} castShadow />
        <ambientLight intensity={1} />
        <ThreeDModel modelPath="../src/assets/3d/scene.gltf" />
        <OrbitControls />
      </Canvas>
      <div className={`${styles.heroContainer} `}>
        <h1
          className={`${styles.heroTitle} text-white text-center drop-shadow z-40`}
        >
          Martin Heggholmen
        </h1>
        <p
          className={`${styles.subHeroTitle} text-blue-300 text-center drop-shadow z-30 p-4`}
        >
          I create things for the web
        </p>
      </div>
    </div>
  );
};

export default Home;
