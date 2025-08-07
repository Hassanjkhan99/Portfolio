import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface TechBox3DProps {
  icon: string;
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  color?: string;
}

const TechBox3D: React.FC<TechBox3DProps> = ({ 
  icon, 
  name, 
  position, 
  rotation, 
  color = "#1a1a2e" 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(...rotation);
    }
  }, [rotation]);

  return (
    <group ref={groupRef} position={position}>
      {/* Main Box */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Glow Effect */}
      <mesh position={[0, 0, 0.61]}>
        <boxGeometry args={[1.3, 1.3, 0.1]} />
        <meshBasicMaterial 
          color="#33c2cc"
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Icon Face */}
      <mesh position={[0, 0, 0.61]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial 
          color="#ffffff"
          transparent 
          opacity={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>
      

    </group>
  );
};

export default TechBox3D; 