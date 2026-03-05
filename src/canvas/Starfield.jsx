import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef, useEffect } from 'react'

const Stars = () => {
  const ref = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const positions = useMemo(() => {
    const points = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i += 1) {
      // Math.cbrt distributes points uniformly inside the sphere instead of bunching them at the center
      const radius = 45 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      points.set([x, y, z], i * 3)
    }
    return points
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime() * 0.02

    // Base continuous rotation plus subtle mouse influence
    const targetX = t * 0.5 + mouse.current.y * 0.4
    const targetY = t * 0.6 + mouse.current.x * 0.4

    // Smoothly interpolate current rotation towards the target
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05
  })

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          size={0.12}
          sizeAttenuation
          depthWrite={false}
          transparent
          color="#a5b4fc"
        />
      </Points>
    </group>
  )
}

const Starfield = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 65 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#020617']} />
        <Stars />
      </Canvas>
    </div>
  )
}

export default Starfield

