import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A rotating wireframe terrain, standing in for the two worlds Magilavan works
// across: physical sensing (soil / field data) and the model that reads it.
// A vertical "scan" plane sweeps through it like a classification pass.
function Terrain() {
  const meshRef = useRef();
  const scanRef = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(6, 6, 34, 34);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z =
        Math.sin(x * 1.1) * 0.28 +
        Math.cos(y * 1.4) * 0.22 +
        Math.sin((x + y) * 0.6) * 0.15;
      pos.setZ(i, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.06;
    }
    if (scanRef.current) {
      scanRef.current.position.x = Math.sin(t * 0.5) * 3.2;
      scanRef.current.material.opacity = 0.16 + Math.abs(Math.sin(t * 0.5)) * 0.12;
    }
  });

  return (
    <group rotation={[-1.1, 0, 0.5]}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial color="#5FC2BA" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh ref={scanRef} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[6.2, 2]} />
        <meshBasicMaterial color="#E8A33D" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function FieldMesh() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Terrain />
    </Canvas>
  );
}
