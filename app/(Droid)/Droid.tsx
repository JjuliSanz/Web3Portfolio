"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/droid/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const [time, setTime] = useState(0);

  useFrame((state, delta) => {
    setTime((prevTime) => prevTime + delta);
    const t = time % 5;
    if (t < 1) {
      mesh.current.rotation.y += 0.04;
    } else if (t < 3) {
      mesh.current.rotation.y -= 0.06;
    } else if (t < 4) {
      mesh.current.rotation.y += 0.04;
    }
  });

  useFrame((state, delta) => {
    setTime((prevTime) => prevTime + delta);
    const t = time + delta;
    const floatingHeight = Math.sin(t / 0.7) / 60;
    mesh.current.position.y = floatingHeight;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} scale={15} position={[0, 0.02, 0]} />
    </mesh>
  );
}

export function Droid() {
  return (
    <Canvas
      camera={{ position: [0.001, 0.03, 0.2], rotation: [-0.78, -0.29, -0] }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
      <pointLight intensity={0.5} position={[0, 0.3, 0.6]}/>
      <ambientLight intensity={0.3} />
      <MeshComponent />
    </Canvas>
  );
}
export default Droid;
