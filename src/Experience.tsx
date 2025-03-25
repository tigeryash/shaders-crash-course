import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";

import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

function Experience() {
  const key = THREE.MathUtils.generateUUID();
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls />
      <mesh>
        <icosahedronGeometry args={[1, 5]} />
        <shaderMaterial
          key={key}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <ambientLight intensity={0.2} />
    </>
  );
}

export default Experience;
