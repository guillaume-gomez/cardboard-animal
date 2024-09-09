import Animal from "./Animal";

function Girafe() {
  return (
    <Animal
      pieces={[
        { path: "Donut.glb", position: [5,4,0], rotation: [0,0,0], scale: 0.5 },
        { path: "Donut.glb", position: [1,4,0], rotation: [0,Math.PI/2,0], scale: 0.33 },
        { path: "Donut.glb", position: [2,5,0], rotation: [0,0,Math.PI/4], scale: 0.25 },
        { path: "Donut.glb", position: [5,2,0], rotation: [0,0,Math.PI], scale: 0.60 },
        { path: "Donut.glb", position: [-5,4,0], rotation: [Math.PI/3,0,0], scale: 0.45 },
        { path: "Donut.glb", position: [2,4,-10], rotation: [Math.PI/3,Math.PI/4,0], scale: 1.25 }
      ]}
      position={[1,4,0]}
      scale={1}
   />
  );
}

export default Girafe;
