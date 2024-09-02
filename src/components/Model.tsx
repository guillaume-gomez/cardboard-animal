import { Gltf } from '@react-three/drei';
import { useSpring, easings, animated } from '@react-spring/web';

const AnimatedGltf = animated(Gltf);

interface ModelProps {
  path: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

function Model({path, position, rotation, scale} : ModelProps) {
const props = useSpring(
    {
      from: { position: [0,0,0], rotation:[0,0,0], scale: 1 },
      to: { position, scale, rotation },
      delay: 1000,
      config: {
        duration: 2000,
        easing: easings.easeOutQuart
      },
      reset: true,
    }
  )
  return (
      <AnimatedGltf
        src={path}
        position={props.position}
        rotation={props.rotation}
        scale={props.scale}
      />

  )
}

export default Model;
