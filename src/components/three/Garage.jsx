import { MeshReflectorMaterial } from '@react-three/drei'
import useIsMobile from '../../hooks/useIsMobile'

function NeonStrip({ position, rotation = [0, 0, 0], length = 8 }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[length, 0.06, 0.06]} />
        <meshStandardMaterial color="#ff1a1a" emissive="#ff1a1a" emissiveIntensity={4} toneMapped={false} />
      </mesh>
      <pointLight color="#ff1a1a" intensity={3} distance={6} decay={2} />
    </group>
  )
}

export default function Garage() {
  const isMobile = useIsMobile()
  const reflectionRes = isMobile ? 256 : 768

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[60, 120]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={reflectionRes}
          mixBlur={1}
          mixStrength={40}
          roughness={0.9}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#050505"
          metalness={0.6}
          mirror={0.35}
        />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 12, -20]}>
        <planeGeometry args={[60, 24]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.95} />
      </mesh>

      {/* Side walls */}
      <mesh position={[-18, 12, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[120, 24]} />
        <meshStandardMaterial color="#080808" roughness={0.95} />
      </mesh>
      <mesh position={[18, 12, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[120, 24]} />
        <meshStandardMaterial color="#080808" roughness={0.95} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 24, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[60, 120]} />
        <meshStandardMaterial color="#050505" roughness={1} />
      </mesh>

      {/* Neon strips along side walls */}
      {[-8, 0, 8, 16, -16].map((z) => (
        <NeonStrip key={`l-${z}`} position={[-17.7, 6, z]} rotation={[0, 0, Math.PI / 2]} length={5} />
      ))}
      {[-8, 0, 8, 16, -16].map((z) => (
        <NeonStrip key={`r-${z}`} position={[17.7, 6, z]} rotation={[0, 0, Math.PI / 2]} length={5} />
      ))}

      {/* Back wall red accent strip */}
      <NeonStrip position={[0, 3, -19.7]} rotation={[0, 0, 0]} length={30} />
      <NeonStrip position={[0, 20, -19.7]} rotation={[0, 0, 0]} length={30} />

      {/* Ambient garage floor glow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <circleGeometry args={[10, 48]} />
        <meshBasicMaterial color="#e10600" transparent opacity={0.06} />
      </mesh>
    </group>
  )
}
