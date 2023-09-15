"use client";
import React from "react";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useSelector } from "react-redux";
import { StarMode_data, StarColor_data } from "../../Redux-store/Redux-action";

function Background_Stars(props: any) {
  // Fetch the star color from Redux state.
  const color = useSelector(StarColor_data);
  // Initialize color data state.
  const [colorData, setColorData] = useState<string>("#c2410c");
  // Create a reference to the 3D scene.
  const ref: any = useRef();
  const [sphere] = useState(() =>
    // Generate random 3D coordinates for stars within a sphere.
    // @ts-ignore
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Use the useFrame hook to animate the rotation of stars.
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  function getRandomColor() {
    // Generate a random RGB color and set it in the colorData state.
    // Generate a random number between 0 and 255 for each RGB component
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the color in the form of a CSS RGB string
    setColorData(`rgb(${r}, ${g}, ${b})`);
  }

  /*
  const intervalID = setInterval(() => {
    getRandomColor();
  }, 6000);
  */

  return (
    // Render the group of stars with properties like color and size.
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const StarsCanvas = () => {
  // Fetch the star mode from Redux state.
  const starMode = useSelector(StarMode_data);
  return (
    <div
      className={`w-full h-auto ${
        starMode === "active" ? "" : "hidden"
      } fixed inset-0 z-[-2]`}
    >
      {/* Render the 3D canvas */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          {/* Render the background stars using the Background_Stars component */}
          <Background_Stars />
        </Suspense>

        {/* Preload assets */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
