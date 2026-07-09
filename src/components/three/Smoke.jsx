import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Smoke({ count = 40, activeRef, position = [0, 0.3, 2.2] }) {
  const points = useRef()

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 1.6
      pos[i * 3 + 1] = Math.random() * 0.6
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.2
      spd[i] = 0.15 + Math.random() * 0.25
    }
    return [pos, spd]
  }, [count])

  useFrame((_, delta) => {
    if (!points.current) return
    const arr = points.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * delta
      if (arr[i * 3 + 1] > 1.6) {
        arr[i * 3 + 1] = 0
        arr[i * 3] = (Math.random() - 0.5) * 1.6
        arr[i * 3 + 2] = (Math.random() - 0.5) * 1.2
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true
    const active = activeRef?.current ?? false
    points.current.material.opacity = THREE.MathUtils.lerp(
      points.current.material.opacity,
      active ? 0.35 : 0,
      0.05
    )
  })

  return (
    <points ref={points} position={position}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        color="#888888"
        transparent
        opacity={0}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}
