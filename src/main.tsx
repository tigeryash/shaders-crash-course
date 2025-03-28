import { createRoot } from "react-dom/client";
import "./index.css";
import Experience from "./Experience.tsx";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

createRoot(document.getElementById("root")!).render(
  <>
    <Canvas
      gl={{ antialias: true }}
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <color attach="background" args={["#0f1000"]} />
      <Experience />
    </Canvas>
    <Leva collapsed />
  </>
);
