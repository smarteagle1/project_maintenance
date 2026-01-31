import * as THREE from "three";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense, useMemo, useRef, Children } from "react";
import { Bvh, Center, OrbitControls } from "@react-three/drei";
import { EffectComposer, Outline, ToneMapping } from "@react-three/postprocessing";

function ControlsFollowModel({ modelRef }) {
  const controlsRef = useRef();

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      onStart={() => {
        const controls = controlsRef.current;
        const root = modelRef.current;
        if (!controls || !root) return;

        const box = new THREE.Box3().setFromObject(root);
        const center = box.getCenter(new THREE.Vector3());
        controls.target.copy(center);
        controls.update();
      }}
    />
  );
}

// Collect all meshes under an Object3D
function collectMeshes(haha) {
  const meshes = [];
  haha.traverse((nieco) => {
    if (nieco.isMesh) meshes.push(nieco);
    console.log("meshes", meshes)
  });
  return meshes;
}

export default function StationST10({ partForm, className = "", hoveredId, setHoverId, items }) {
  const { id } = useParams();
  const modelRef = useRef();

  // id -> Mesh[]
  const itemMeshesRef = useRef(new Map());
  // let outlineSelection;

  // // Step 1: Check if something is hovered at all
  // if (hoveredId === null || hoveredId === undefined) {
  // // Nothing is hovered → outline nothing
  // outlineSelection = [];
  // } else {
  // // Step 2: Something is hovered, try to find its meshes in the Map
  // const meshesForHoveredItem = itemMeshesRef.current.get(hoveredId);

  // // Step 3: Check if the Map actually has an entry for this id
  // if (meshesForHoveredItem === null || meshesForHoveredItem === undefined) {
  //   // No meshes registered for this id → outline nothing
  //   outlineSelection = [];
  // } else {
  //   // Step 4: We found the meshes → use them for outlining
  //   outlineSelection = meshesForHoveredItem;
  // }
  // }
 useEffect(() => {
  if (modelRef.current) {
    console.log("model is now available:", modelRef.current);
  }
});
  
  const outlineSelection = useMemo(() => {
    if (hoveredId==null) return [];
    return itemMeshesRef.current.get(hoveredId) ?? [];
  }, [hoveredId]);

 useEffect(() => {
  if (outlineSelection.length>0) {
    console.log("outlineSelection",outlineSelection.map(m=>({
      uuid: m.uuid,
      type: m.type
    })));
  }
});

  return (
    <div className={`flex flex-col w-full h-full min-h-0 ${className}`}>
      <div className="w-full relative left-1/2 px-4 z-50 py-1 -translate-x-1/2 rounded-t-2xl bg-slate-600">
        Station {id}
      </div>

      <div className="flex-1 min-h-0 w-full">
        <Canvas
          camera={{ position: [1, 1, 1], fov: 80 }}
          className="rounded-b-2xl w-full bg-slate-900"
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[1, 100, 30]} intensity={10} />

          <EffectComposer autoClear={false} multisampling={4}>
            <Outline
              selection={outlineSelection}
              edgeStrength={0.8}
              blur={false}
              visibleEdgeColor={0xffff00}
              hiddenEdgeColor={0xffff00}
            />
            <ToneMapping />
          </EffectComposer>

          <group ref={modelRef} rotation={[2.3, -0.4, 2.3]}>
            <Suspense fallback={null}>
              <Center>
                  {items.map((item) => (
                    <group
                      key={item.id}
                      ref={(obj) => {
                        if (!obj) {
                          itemMeshesRef.current.delete(item.id);
                          return;
                        }
                        // store all meshes under this item
                        itemMeshesRef.current.set(item.id, collectMeshes(obj));
                      }}
                      onPointerEnter={(e) => {
                        e.stopPropagation();
                        if (hoveredId !== item.id) setHoverId(item.id);
                      }}
                      onPointerLeave={(e) => {
                        e.stopPropagation();
                        if (hoveredId === item.id) setHoverId(null);
                      }}
                      onPointerDown={(e)=>{
                        e.stopPropagation();
                        partForm?.(item.id)}}
                    >
                      <item.Model />
                    </group>
                  ))}    
              </Center>
            </Suspense>


          </group>

          <ControlsFollowModel modelRef={modelRef} />
        </Canvas>
      </div>
    </div>
  );
}
