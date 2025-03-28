import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";

import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import { useControls } from "leva";
import magic from "./assets/magic.png";

function Experience() {
  const key = THREE.MathUtils.generateUUID();
  const { uRadius } = useControls("Shader", {
    uRadius: { value: 0.2, min: 0, max: 1, step: 0.01 },
  });
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls />
      <mesh>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          key={key}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uRadius: { value: uRadius },
            uTexture: { value: new THREE.TextureLoader().load(magic) },
          }}
        />
      </mesh>
      <ambientLight intensity={0.2} />
    </>
  );
}

export default Experience;
