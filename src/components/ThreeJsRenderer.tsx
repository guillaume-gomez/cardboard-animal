import { useRef, Suspense, useEffect } from 'react';
import { useFullscreen } from "rooks";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport, Stage, Grid, Bounds, Box } from '@react-three/drei';
import Model from "./Model";
import Animal from "./Animal";

interface ThreejsRendererProps {
}

function ThreejsRenderer({} : ThreejsRendererProps ): React.ReactElement {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const {
    toggleFullscreen,
    isFullscreenEnabled
  } = useFullscreen({ target: canvasContainerRef });
  const groupRef = useRef<ExternalActionInterface| null>(null);

  function recenter() {
    if(!groupRef.current) {
      return;
    }
    groupRef.current.recenter();
  }

  function handleGenerate() {

  }

  return (
    <div ref={canvasContainerRef} /*className="w-full h-full max-h-[92%]"*/ style={{width: "600px", height: "600px"}}>
      <div className={`self-start relative ${isFullscreenEnabled ? "" : "hidden"}`}>
        <button onClick={handleGenerate} className="btn btn-outline absolute z-10 top-6 left-1">
          Generate
        </button>
      </div>
      <Canvas
        camera={{ position: [0,0, 1.75], fov: 75, far: 5 }}
        dpr={window.devicePixelRatio}
        shadows
        onDoubleClick={() => {
          toggleFullscreen();
          recenter();
        }}
      >
        <color attach="background" args={['#06092c']} />
        <Suspense fallback={null}>
          <Stage preset="rembrandt" intensity={1} environment="studio">
            <Bounds fit clip observe margin={2}>
              <Animal
                pieces={[
                  { path: "Donut.glb", position: [5,4,0], rotation: [0,0,0], scale: 0.5 },
                  { path: "Donut.glb", position: [1,4,0], rotation: [0,Math.PI/2,0], scale: 0.33 },
                  { path: "Donut.glb", position: [2,5,0], rotation: [0,0,Math.PI/4], scale: 0.25 },
                  { path: "Donut.glb", position: [5,2,0], rotation: [0,0,Math.PI], scale: 0.60 },
                  { path: "Donut.glb", position: [-5,4,0], rotation: [Math.PI/3,0,0], scale: 0.45 }
                ]}
                position={[1,4,0]}
                scale={1}
             />
            </Bounds>
          </Stage>
          <Grid args={[10, 10]} position={[0,-0.5,0]} cellColor='white' />
        </Suspense>
        <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

export default ThreejsRenderer;