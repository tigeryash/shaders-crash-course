import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";

import vertexShader from "./shaders/final/vertex.glsl";
import fragmentShader from "./shaders/final/fragment.glsl";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
// import { useControls } from "leva";
// import magic from "./assets/magic.png";

function Experience() {
  const key = THREE.MathUtils.generateUUID();
  const matRef = useRef<THREE.ShaderMaterial | null>(null);
  // const { uRadius } = useControls("Shader", {
  //   uRadius: { value: 0.2, min: 0, max: 1, step: 0.01 },
  // });
  useFrame((_, delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += delta;
    }
  });

  useFrame((_, delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += delta;
    }
  });
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls />
      <mesh>
        <icosahedronGeometry args={[1, 100]} />
        <shaderMaterial
          ref={matRef}
          key={key}
          ref={matRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0 },
            // uRadius: { value: uRadius },
            // uTexture: { value: new THREE.TextureLoader().load(magic) },
          }}
        />
      </mesh>
      <ambientLight intensity={0.2} />
    </>
  );
}

export default Experience;
