'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'

function RotatingBox() {
  const meshRef = useRef<Mesh>(null!)

  return (
    <mesh
      ref={meshRef}
      onClick={(e) => {
        if (meshRef.current) {
          meshRef.current.rotation.x += 0.5
        }
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ height: '400px', width: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
      <OrbitControls />
    </Canvas>
  )
}