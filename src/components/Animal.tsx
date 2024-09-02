import { Gltf } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import Model from "./Model";

interface Piece {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  path: string;
}

interface AnimalProps {
  pieces: Piece[];
  position: [number, number, number];
  scale: number;
}

function Animal({position, scale, pieces} : AnimalProps) {
  return (
    <group
      position={position}
      scale={scale}
    >
      {
        pieces.map(({path, position, rotation, scale}, index) => {
          return (
            <Model
              key={index}
              path={path}
              position={position}
              rotation={rotation}
              scale={scale}
            />);
        })
      }
    </group>
  )
}

export default Animal;
