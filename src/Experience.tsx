import { Environment, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

function Experience() {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls />

      <ambientLight intensity={0.2} />
    </>
  );
}

export default Experience;
