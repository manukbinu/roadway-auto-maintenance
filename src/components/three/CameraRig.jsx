import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollStore } from '../../lib/scrollStore'

function smoothstep(t) {
  return t * t * (3 - 2 * t)
}

function findSegment(stops, progress) {
  if (!stops || stops.length === 0) return null
  if (progress <= stops[0].progress) return [stops[0], stops[0], 0]
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i]
    const b = stops[i + 1]
    if (progress >= a.progress && progress <= b.progress) {
      const range = b.progress - a.progress
      const t = range > 0 ? (progress - a.progress) / range : 0
      return [a, b, smoothstep(t)]
    }
  }
  const last = stops[stops.length - 1]
  return [last, last, 0]
}

export default function CameraRig() {
  const targetPos = useRef(new THREE.Vector3(9, 3.4, 58))
  const targetLook = useRef(new THREE.Vector3(0, 1.2, 40))
  const currentLook = useRef(new THREE.Vector3(0, 1.2, 40))
  const tmpA = useRef(new THREE.Vector3())
  const tmpB = useRef(new THREE.Vector3())

  useFrame((state, delta) => {
    const { progress, cameraStops } = useScrollStore.getState()
    const seg = findSegment(cameraStops, progress)

    if (seg) {
      const [a, b, t] = seg
      tmpA.current.set(...a.position)
      tmpB.current.set(...b.position)
      targetPos.current.lerpVectors(tmpA.current, tmpB.current, t)

      tmpA.current.set(...a.target)
      tmpB.current.set(...b.target)
      targetLook.current.lerpVectors(tmpA.current, tmpB.current, t)

      const fov = THREE.MathUtils.lerp(a.fov, b.fov, t)
      if (Math.abs(state.camera.fov - fov) > 0.01) {
        state.camera.fov = fov
        state.camera.updateProjectionMatrix()
      }
    }

    const damp = 1 - Math.pow(0.001, delta)
    state.camera.position.lerp(targetPos.current, damp)
    currentLook.current.lerp(targetLook.current, damp)
    state.camera.lookAt(currentLook.current)
  })

  return null
}
