import React, { useRef, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const ThreeDModel = ({ modelPath, modelScale = 1000, positionY = 20 }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const objectRef = useRef();

  // Load the base color & bump map
  const latteBaseColor = useLoader(
    THREE.TextureLoader,
    "/assets/3d/textures/LatteMAT1_baseColor.png"
  );
  const saucerBumpMap = useLoader(
    THREE.TextureLoader,
    "/assets/3d/textures/Saucers_etcMAT1_baseColor.png"
  );

  // Apply textures
  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.map = latteBaseColor;
          child.material.bumpMap = saucerBumpMap;
          child.material.bumpScale = 0.05; 
          child.material.needsUpdate = true;
        }
      });
    }
  }, [gltf, latteBaseColor, saucerBumpMap]);

  // Rotation logic
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
      position={[0, positionY, 0]}  // keep a default offset if you want
    />
  );
};

export default ThreeDModel;
