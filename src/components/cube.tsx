// import React from 'react
// import { createRoot } from 'react-dom/client'
import { Canvas } from "@react-three/fiber";

export default function Cube() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight color="white" intensity={-0.2} />
        <pointLight color="white" position={[-6, 4, 6]} />
        <pointLight color="white" position={[4, 2, 0]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </div>
  );
}
