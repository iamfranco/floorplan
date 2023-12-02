import { OrbitControls } from "@react-three/drei"

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  )
}

export default Experience