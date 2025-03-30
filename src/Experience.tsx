import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";

import vertexShader from "./shaders/organic/vertex.glsl";
import fragmentShader from "./shaders/organic/fragment.glsl";
import { useControls } from "leva";
// import magic from "./assets/magic.png";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Experience() {
  const key = THREE.MathUtils.generateUUID();
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { uRadius } = useControls("Shader", {
    uRadius: { value: 0.2, min: 0, max: 1, step: 0.01 },
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
        <sphereGeometry args={[1]} />
        <shaderMaterial
          ref={matRef}
          key={key}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uRadius: { value: uRadius },
            // uTexture: { value: new THREE.TextureLoader().load(magic) },
            uTime: { value: 0 },
          }}
        />
      </mesh>
      <ambientLight intensity={0.2} />
    </>
  );
}

export default Experience;
