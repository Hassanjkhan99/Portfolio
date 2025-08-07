import React, { useRef, useMemo, useFrame } from 'react'
import { Canvas, useFrame as useThreeFrame } from '@react-three/fiber'
import { Stars, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// Galaxy Star Component
const GalaxyStar: React.FC<{
  position: [number, number, number]
  color: string
  size: number
  velocity: [number, number, number]
}> = ({ position, color, size, velocity }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [pos, setPos] = React.useState(position)
  const [vel, setVel] = React.useState(velocity)

  useThreeFrame((state, delta) => {
    if (!meshRef.current) return

    // Simple gravitational simulation
    const center = new THREE.Vector3(0, 0, 0)
    const currentPos = new THREE.Vector3(...pos)
    const direction = center.sub(currentPos).normalize()
    
    // Gravitational force
    const gravity = 0.1
    const newVel: [number, number, number] = [
      vel[0] + direction.x * gravity * delta,
      vel[1] + direction.y * gravity * delta,
      vel[2] + direction.z * gravity * delta
    ]

    // Update position
    const newPos: [number, number, number] = [
      pos[0] + newVel[0] * delta,
      pos[1] + newVel[1] * delta,
      pos[2] + newVel[2] * delta
    ]

    setPos(newPos)
    setVel(newVel)

    // Apply spiral arm forces
    const angle = Math.atan2(newPos[1], newPos[0])
    const radius = Math.sqrt(newPos[0] ** 2 + newPos[1] ** 2)
    const spiralForce = 0.05
    const spiralAngle = radius * 0.5 // Spiral density
    
    const spiralVel: [number, number, number] = [
      newVel[0] + Math.cos(spiralAngle) * spiralForce * delta,
      newVel[1] + Math.sin(spiralAngle) * spiralForce * delta,
      newVel[2]
    ]

    setVel(spiralVel)
  })

  return (
    <mesh ref={meshRef} position={pos}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

// Galaxy Component
const Galaxy: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null)
  
  // Generate galaxy stars
  const stars = useMemo(() => {
    const starCount = 5000
    const starsData = []
    
    for (let i = 0; i < starCount; i++) {
      // Disk-like distribution
      const radius = Math.random() * 20 + 5
      const angle = Math.random() * Math.PI * 2
      const height = (Math.random() - 0.5) * 2
      
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const z = height
      
      // Color based on distance from center (red-ish in center, blue-ish at rim)
      const distanceFromCenter = Math.sqrt(x * x + y * y)
      const colorIntensity = Math.max(0, Math.min(1, distanceFromCenter / 25))
      const color = new THREE.Color()
      color.setHSL(0.6 + colorIntensity * 0.3, 0.8, 0.5 + colorIntensity * 0.3)
      
      // Size based on distance
      const size = Math.random() * 0.1 + 0.02
      
      // Initial velocity (tangential rotation)
      const tangentialSpeed = 2 / (radius + 1)
      const vx = -Math.sin(angle) * tangentialSpeed
      const vy = Math.cos(angle) * tangentialSpeed
      const vz = (Math.random() - 0.5) * 0.1
      
      starsData.push({
        position: [x, y, z] as [number, number, number],
        color: color.getHexString(),
        size,
        velocity: [vx, vy, vz] as [number, number, number]
      })
    }
    
    return starsData
  }, [])

  useThreeFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {stars.map((star, index) => (
        <GalaxyStar
          key={index}
          position={star.position}
          color={star.color}
          size={star.size}
          velocity={star.velocity}
        />
      ))}
    </group>
  )
}

// Nebula Effect Component
const NebulaEffect: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useThreeFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.0005
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial
        color="#4a044e"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// Particle System for additional space effects
const ParticleSystem: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 1000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Random positions in a large sphere
      const radius = Math.random() * 100 + 50
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
      
      // Colors ranging from purple to blue
      const color = new THREE.Color()
      color.setHSL(0.7 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3)
      
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }
    
    return { positions, colors }
  }, [])

  useThreeFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0002
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Main Space Scene Component
export const SpaceScene3D: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.1} />
        
        {/* Point light at the center of the galaxy */}
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffffff" />
        
        {/* Galaxy */}
        <Galaxy />
        
        {/* Nebula background effect */}
        <NebulaEffect />
        
        {/* Additional particle system */}
        <ParticleSystem />
        
        {/* Distant stars background */}
        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default SpaceScene3D 