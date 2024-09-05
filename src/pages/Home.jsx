import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDModel = ({ modelPath }) => {
  console.log("Loading model from:", modelPath);
  const gltf = useLoader(GLTFLoader, modelPath);
  const objectRef = useRef();
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useFrame(() => {
    if (objectRef.current) {
      objectRef.current.rotation.y = -3 + (mousePos.x / window.innerWidth) * 3;
      objectRef.current.rotation.x =
        -1.2 + (mousePos.y * 2.5) / window.innerHeight;
    }
  });

  return (
    <primitive
      ref={objectRef}
      object={gltf.scene}
      scale={[9, 9, 9]}
      position={[0, 0, 0]}
    />
  );
};

const Home = () => {
  return (
    <div style={{ height: "100vh", margin: 0 }} id="container3D">
      <Canvas camera={{ position: [-50, 25, 50], fov: 75 }}>
        <directionalLight intensity={1} position={[500, 500, 500]} castShadow />
        <ambientLight intensity={1} />
        <ThreeDModel modelPath="../../src/assets/3d/scene.gltf" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Home;
