"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

function MetallicShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth rotation
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.4;

    // Subtle tilt toward mouse position
    meshRef.current.rotation.x += (mouse.ny * 0.5 - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (mouse.nx * 0.5 - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <MeshDistortMaterial
          color="#151515"
          emissive="#C8FF3D"
          emissiveIntensity={0.08}
          roughness={0.15}
          metalness={0.9}
          distort={0.25}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export function HeroVisual() {
  const [mounted, setMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center opacity-30">
        <div className="w-64 h-64 rounded-full border border-accent/30 animate-pulse bg-gradient-to-tr from-accent/10 to-transparent blur-xl" />
      </div>
    );
  }

  return (
    <div className="w-full h-full pointer-events-none select-none relative z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        onError={() => setHasError(true)}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#C8FF3D" />
        <pointLight position={[0, 0, 5]} intensity={0.8} />
        <MetallicShape />
      </Canvas>
    </div>
  );
}
