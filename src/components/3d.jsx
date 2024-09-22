import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const ThreeDModel = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const objectRef = useRef();

  // Load the base color texture and bump map
  const latteBaseColor = useLoader(
    THREE.TextureLoader,
    "/assets/3d/textures/LatteMAT1_baseColor.png"
  );
  const saucerBumpMap = useLoader(
    THREE.TextureLoader,
    "/assets/3d/textures/Saucers_etcMAT1_baseColor.png"
  );

  // Apply the textures to the model
  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          // Apply base color texture
          child.material.map = latteBaseColor;

          // Apply bump map
          child.material.bumpMap = saucerBumpMap;
          child.material.bumpScale = 0.05; // Adjust bump intensity as needed

          child.material.needsUpdate = true;
        }
      });
    }
  }, [gltf, latteBaseColor, saucerBumpMap]);

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
      scale={[1000, 1000, 1000]}
      position={[0, 20, 0]}
    />
  );
};

export default ThreeDModel;
