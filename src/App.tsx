import { Canvas } from '@react-three/fiber'
import './App.scss'
import Experience from './components/experience/Experience'

function App() {
  return (
    <>
      <Canvas >
        <Experience />
      </Canvas>
    </>
  )
}

export default App
