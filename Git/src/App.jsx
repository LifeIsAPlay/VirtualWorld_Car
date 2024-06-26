import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/lamborghini.glb");
  return <primitive object={scene} {...props} />;
}

function App() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute" }}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global polar={[-Math.PI / 2, Math.PI / 2]}>
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default App;