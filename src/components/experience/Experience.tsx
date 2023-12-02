import { OrbitControls, PerspectiveCamera, useGLTF, useTexture } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type GLTFResult = GLTF & {
  nodes: {
    baked: THREE.Mesh;
  }
}

const Experience = () => {
  const { nodes } = useGLTF('./models/scene.glb') as GLTFResult;
  const bakedTexture = useTexture('./models/baked.jpg');
  bakedTexture.flipY = false;

  return (
    <>
      <PerspectiveCamera 
        makeDefault
        position={[-2, 6, 9]}
      />

      <OrbitControls makeDefault />

      <mesh
        geometry={nodes.baked.geometry}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </>
  )
}

export default Experience