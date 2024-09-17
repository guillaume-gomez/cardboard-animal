import { useRef, Suspense, useEffect } from 'react';
import { useFullscreen } from "rooks";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport, Stage, Grid, Bounds, Box } from '@react-three/drei';
import Girafe from "./Girafe";

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

  return (
    <div ref={canvasContainerRef} /*className="w-full h-full max-h-[92%]"*/ style={{width: "600px", height: "600px"}}>
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
              <Girafe />
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