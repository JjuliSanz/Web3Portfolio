"use client"

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Mesh } from "three";

const DroidModel = () => {
  const [model, setModel] = React.useState<Mesh | null>(null);

  // Carga el modelo 3D del droide cuando el componente se monta
  React.useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/droid/scene.gltf", (gltf) => {
      const droid = gltf.scene;
      // Puedes realizar cualquier manipulación del modelo aquí si es necesario.
      setModel(droid as unknown as Mesh);
    });
  }, []);

  return model ? <primitive object={model} scale={0.1} position={[0, 0, 0]} /> : null;
};

const DroidViewer: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      onCreated={({ gl }) => {
        // Opcional: Puedes configurar el fondo transparente del lienzo.
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <DroidModel />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default DroidViewer;




// import React, { useRef } from "react";
// import { Canvas, useThree, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// const Model = () => {
//   const modelRef = useRef<THREE.Group | null>(null);
//   const { scene } = useLoader(GLTFLoader, "/droid/scene.gltf");
//   return (
//     <group ref={modelRef}>
//       <primitive object={scene} />
//     </group>
//   );
// };

// const ModelViewer: React.FC = () => {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Model />
//     </Canvas>
//   );
// };

// export default ModelViewer;

