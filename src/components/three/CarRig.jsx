import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import CarModel from './CarModel'
import Smoke from './Smoke'
import { useScrollStore } from '../../lib/scrollStore'
import { CAR_ARRIVAL } from '../../data/cameraKeyframes'

const CAR_SCALE = 4.55
const CAR_Y_OFFSET = 0.672

function smoothstep(t) {
  return t * t * (3 - 2 * t)
}

export default function CarRig() {
  const group = useRef()
  const smokeActive = useRef(false)

  useFrame(() => {
    const { progress, cameraStops } = useScrollStore.getState()
    if (!cameraStops || !group.current) return

    const fromStop = cameraStops.find((s) => s.key === CAR_ARRIVAL.from.key)
    const toStop = cameraStops.find((s) => s.key === CAR_ARRIVAL.to.key)
    if (!fromStop || !toStop) return

    const range = toStop.progress - fromStop.progress
    const t = range > 0 ? THREE.MathUtils.clamp((progress - fromStop.progress) / range, 0, 1) : 1
    const eased = smoothstep(t)

    group.current.position.z = THREE.MathUtils.lerp(CAR_ARRIVAL.from.z, CAR_ARRIVAL.to.z, eased)
    smokeActive.current = t > 0.85 && t < 1
  })

  return (
    <group ref={group} position={[0, 0, CAR_ARRIVAL.from.z]}>
      <CarModel scale={CAR_SCALE} position={[0, CAR_Y_OFFSET, 0]} />
      <Smoke position={[0, 0.25, 2.3]} activeRef={smokeActive} />
      <Smoke position={[0, 0.25, -2.3]} activeRef={smokeActive} count={30} />

      {/* Headlights */}
      {[-0.58, 0.58].map((x) => (
        <group key={x} position={[x, 0.56, 2.16]}>
          <mesh>
            <sphereGeometry args={[0.075, 12, 12]} />
            <meshStandardMaterial color="#eaf4ff" emissive="#eaf4ff" emissiveIntensity={2.4} toneMapped={false} />
          </mesh>
          <spotLight
            position={[0, 0, 0.1]}
            target-position={[x * 0.5, -0.3, 14]}
            angle={0.5}
            penumbra={0.6}
            intensity={20}
            distance={18}
            color="#eaf4ff"
          />
        </group>
      ))}

      {/* Taillights */}
      {[-0.56, 0.56].map((x) => (
        <mesh key={x} position={[x, 0.62, -2.18]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#ff1a1a" emissive="#ff1a1a" emissiveIntensity={2.6} toneMapped={false} />
        </mesh>
      ))}
      <pointLight position={[0, 0.62, -2.35]} intensity={2.5} distance={3.5} color="#ff1a1a" />
    </group>
  )
}
