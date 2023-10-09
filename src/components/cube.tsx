// import React from 'react
// import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";
// import { OrbitControls } from "three-stdlib";
const Box = () => {
  const mesh = useRef<Mesh>(null);
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.z += 0.005;
    }
  });
  const metalValue = 4;
  return (
    <mesh ref={mesh}>
      <mesh>
        <mesh position={[0, 0, 0]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[1, 0, 0]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[-1, 0, 0]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[0, 1, 0]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[0, -1, 0]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[1, 1, 0]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[1, -1, 0]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[-1, 1, 0]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[-1, -1, 0]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
      </mesh>
      <mesh>
        <mesh position={[0, 0, 1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[1, 0, 1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[-1, 0, 1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[0, 1, 1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[0, -1, 1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[1, 1, 1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[1, -1, 1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[-1, 1, 1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[-1, -1, 1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
      </mesh>
      <mesh>
        <mesh position={[0, 0, -1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[1, 0, -1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[-1, 0, -1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[0, 1, -1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[0, -1, -1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[1, 1, -1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[1, -1, -1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[-1, 1, -1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
        <mesh position={[-1, -1, -1]}>
          <pointLight position={[5, 5, 5]} />
          <RoundedBox args={[1, 1, 1]} radius={0.09}>
            <meshStandardMaterial
              metalness={metalValue}
              attach={"material"}
              color={0x6e4cd3}
            />
          </RoundedBox>
        </mesh>
      </mesh>
    </mesh>
  );
};
export default function Cube() {
  return (
    <Canvas style={{ height: 600, width: 600 }}>
      {/* <OrbitControls /> */}
      {/* <ambientLight intensity={0.3} color={"white"} /> */}
      <pointLight position={[10, 20, 30]} intensity={2000} color={"white"} />
      <pointLight position={[-10, -20, -30]} intensity={2000} color={"white"} />
      <Box />
    </Canvas>
  );
}
