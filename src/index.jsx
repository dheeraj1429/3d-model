import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, Circle, useTexture } from '@react-three/drei'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={Math.PI} castShadow />
      <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle>
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
      <App />
    </Canvas>
  </StrictMode>
)
