import { Gltf } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const AnimatedGltf = animated(Gltf);

interface ModelProps {
  path: string;
  position: [number, number, number];
  scale: number;
}

function Model({path, position, scale} : ModelProps) {

  return (
      <AnimatedGltf src={path} position={position} scale={scale} />

  )
}

export default Model;
