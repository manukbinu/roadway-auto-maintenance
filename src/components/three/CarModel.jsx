import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import useIsMobile from '../../hooks/useIsMobile'

const DESKTOP_URL = '/models/car.glb'
const MOBILE_URL = '/models/car-mobile.glb'

export default function CarModel(props) {
  const isMobile = useIsMobile()
  const { scene } = useGLTF(isMobile ? MOBILE_URL : DESKTOP_URL)

  const cloned = useMemo(() => {
    const clone = scene.clone(true)
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material) {
          child.material.envMapIntensity = 1.1
        }
      }
    })
    return clone
  }, [scene])

  return <primitive object={cloned} {...props} />
}

useGLTF.preload(DESKTOP_URL)
useGLTF.preload(MOBILE_URL)
