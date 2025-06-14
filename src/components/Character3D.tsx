// src/components/Character3D.tsx

'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function Character3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group>
      {/* Character Body */}
      <mesh
        ref={meshRef}
        position={[0, -0.5, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[0.8, 1, 2.5, 8]} />
        <meshStandardMaterial color={hovered ? "#4f46e5" : "#6366f1"} />
      </mesh>
      
      {/* Character Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
      
      {/* Character Arms */}
      <mesh position={[-1.2, 0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 8]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      <mesh position={[1.2, 0.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 8]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      
      {/* Floating Tech Icons */}
      <mesh position={[2, 2, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <MeshWobbleMaterial color="#10b981" factor={0.6} speed={2} />
      </mesh>
      <mesh position={[-2, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <MeshWobbleMaterial color="#f59e0b" factor={0.6} speed={1.5} />
      </mesh>
    </group>
  );
}