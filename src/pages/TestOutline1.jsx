
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Outline, Selection, Select } from "@react-three/postprocessing";


export default function TestOutline1() {
  return (
    <div className="w-full h-full">
    <Canvas 
    camera={{ position: [2, 2, 2], fov: 5 }}
    className="w-full h-full">
      <ambientLight intensity={10} />
      <Selection>
        <Select enabled>
          <mesh>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={"black"} />
          </mesh>
        </Select>
        <EffectComposer multisampling={4} autoClear={false}>
          <Outline
            edgeStrength={20}
            blur={false}
            visibleEdgeColor={0xffff00}
            hiddenEdgeColor={0xffff00}
          />
        </EffectComposer>
      </Selection>
      <OrbitControls/>
    </Canvas>
    </div>
  );
}