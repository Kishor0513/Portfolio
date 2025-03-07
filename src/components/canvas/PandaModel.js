import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

// Since we don't have an actual panda model, we'll create a stylized panda using basic shapes
const PandaModel = () => {
  const group = useRef();
  const { viewport } = useThree();

  // Animation parameters
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();

      // Gentle floating animation
      group.current.position.y = Math.sin(t * 0.5) * 0.1;

      // Subtle rotation
      group.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group
      ref={group}
      position={[0, 0, 0]}
      scale={viewport.width > 768 ? 0.5 : 0.4}
    >
      {/* Panda Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Panda Head */}
      <mesh position={[0, 1.3, 0]} castShadow>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Left Ear */}
      <mesh position={[-0.7, 2, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Right Ear */}
      <mesh position={[0.7, 2, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Left Eye Patch */}
      <mesh position={[-0.4, 1.4, 0.7]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Right Eye Patch */}
      <mesh position={[0.4, 1.4, 0.7]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Left Eye */}
      <mesh position={[-0.4, 1.4, 0.85]} castShadow>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Right Eye */}
      <mesh position={[0.4, 1.4, 0.85]} castShadow>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Left Pupil */}
      <mesh position={[-0.4, 1.4, 0.95]} castShadow>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Right Pupil */}
      <mesh position={[0.4, 1.4, 0.95]} castShadow>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 1.1, 0.9]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, 0.9, 0.9]} castShadow>
        <boxGeometry args={[0.2, 0.05, 0.05]} />
        <meshStandardMaterial color="#ff9999" />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-1.1, 0, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Right Arm */}
      <mesh position={[1.1, 0, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.5, -1.1, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.5, -1.1, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Anime Blush - Left */}
      <mesh position={[-0.6, 1, 0.8]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#ff9999" opacity={0.7} transparent />
      </mesh>

      {/* Anime Blush - Right */}
      <mesh position={[0.6, 1, 0.8]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#ff9999" opacity={0.7} transparent />
      </mesh>
    </group>
  );
};

export default PandaModel;
