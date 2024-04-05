import { useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Fragment, useLayoutEffect } from 'react'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { beatup } from './textures'

export default function App() {
  const { scene, materials, nodes } = useLoader(GLTFLoader, '/models/taser__taser_gun_model_cs2.glb')
  // const texture = useLoader(THREE.TextureLoader, beatup[0])
  const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture(beatup)

  console.log({ materials })

  console.log()

  useLayoutEffect(() => {
    Object.assign(materials[Object.keys(materials)?.[0]], {
      metalnessMap: metalnessMap,
      normalMap: normalMap,
      roughnessMap: roughnessMap,
      map: colorMap
    })
  }, [scene, nodes, materials, beatup, colorMap, normalMap, roughnessMap, metalnessMap])

  return <primitive object={scene} position={[0, 1, 0]} children-0-castShadow />
}
