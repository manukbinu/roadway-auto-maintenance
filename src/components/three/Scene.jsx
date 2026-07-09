import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, PerformanceMonitor, Environment } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing'
import { useState } from 'react'
import Garage from './Garage'
import CarRig from './CarRig'
import CameraRig from './CameraRig'
import FloatingParticles from './FloatingParticles'
import useIsMobile from '../../hooks/useIsMobile'

export default function Scene() {
  const isMobile = useIsMobile()
  const [dpr, setDpr] = useState(isMobile ? 1 : 1.5)

  return (
    <Canvas
      dpr={dpr}
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
      shadows={!isMobile}
      camera={{ position: [9, 3.4, 58], fov: 45, near: 0.1, far: 200 }}
    >
      <color attach="background" args={['#030303']} />
      <fog attach="fog" args={['#030303', 20, 75]} />

      <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(isMobile ? 1 : 1.5)} />
      <AdaptiveDpr pixelated={false} />
      <AdaptiveEvents />

      <ambientLight intensity={0.15} color="#3a1010" />
      <hemisphereLight args={['#1a1a2a', '#050505', 0.3]} />
      <directionalLight
        position={[-8, 12, 6]}
        intensity={0.6}
        color="#ff5252"
        castShadow={!isMobile}
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight position={[0, 15, -18]} angle={0.6} penumbra={1} intensity={8} color="#ff1a1a" distance={40} />
      <spotLight position={[0, 10, 10]} angle={0.5} penumbra={1} intensity={4} color="#ffffff" distance={30} />

      <Suspense fallback={null}>
        <Garage />
        <CarRig />
        {!isMobile && <FloatingParticles count={100} />}
        <Environment preset="city" environmentIntensity={0.25} />
      </Suspense>

      <CameraRig />

      {!isMobile && (
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.7} luminanceThreshold={0.25} luminanceSmoothing={0.9} mipmapBlur radius={0.8} />
          <Vignette eskil={false} offset={0.15} darkness={0.9} />
          <Noise opacity={0.02} />
        </EffectComposer>
      )}
    </Canvas>
  )
}
