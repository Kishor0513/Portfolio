import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const BackgroundPandaModel = ({
  scrollY,
  windowHeight,
  fillScreen = false,
}) => {
  const group = useRef();
  const { viewport } = useThree();
  const [rotation, setRotation] = useState(0);
  const [sectionsData, setSectionsData] = useState({
    currentSection: "home",
    progress: 0,
  });
  const [reachedBottom, setReachedBottom] = useState(false);
  const [spinAnimation, setSpinAnimation] = useState(0);
  const fullRotation = Math.PI * 2;

  // Transparency level (60%)
  const opacityLevel = 0.6;

  // Much larger base scale
  const baseScale = viewport.width < 768 ? 6 : 8;

  // Handle scroll-based rotation, section detection, and bottom detection
  useEffect(() => {
    if (typeof scrollY === "number" && typeof windowHeight === "number") {
      // Calculate how far through the page we've scrolled (0 to 1)
      const documentHeight =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Calculate rotation based on scroll position (0 to 2π for a full 360 rotation)
      setRotation(scrollProgress * fullRotation);

      // SIMPLIFIED SECTION DETECTION - works reliably with viewport heights
      let currentSection = "home";
      let sectionProgress = 0;

      if (scrollY < windowHeight * 0.8) {
        // First 80% of first viewport height is home
        currentSection = "home";
        sectionProgress = scrollY / (windowHeight * 0.8);
      } else if (scrollY < windowHeight * 1.8) {
        // Next viewport height is projects
        currentSection = "projects";
        sectionProgress = (scrollY - windowHeight * 0.8) / windowHeight;
      } else if (scrollY < windowHeight * 2.8) {
        // Next viewport height is about
        currentSection = "about";
        sectionProgress = (scrollY - windowHeight * 1.8) / windowHeight;
      } else {
        // Rest is contact
        currentSection = "contact";
        sectionProgress = (scrollY - windowHeight * 2.8) / windowHeight;
      }

      // Log the current section for debugging
      if (sectionsData.currentSection !== currentSection) {
        console.log("Section changed to:", currentSection);
      }

      // Update sections data with clamped progress
      setSectionsData({
        currentSection,
        progress: Math.min(Math.max(sectionProgress, 0), 1),
      });

      // Detect if we've reached the bottom of the page
      if (scrollProgress > 0.85) {
        setReachedBottom(true);
        // Start the 360 spin animation when reaching bottom
        setSpinAnimation((prev) => (prev + 0.05) % fullRotation);
      } else {
        setReachedBottom(false);
      }
    }
  }, [scrollY, windowHeight, fullRotation, sectionsData.currentSection]);

  // Animation for the model
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();

      // Calculate transition progress to next section for smoother transitions
      let targetY = 0;
      let targetRotX = 0;
      let targetRotY = 0;
      let targetRotZ = 0;

      // Section-specific positions and rotations
      if (sectionsData.currentSection === "home") {
        // Home section - show head
        targetY = 2;
        targetRotX = 0;
        targetRotY = 0;
        targetRotZ = rotation;
      } else if (sectionsData.currentSection === "projects") {
        // Projects section - show shoulders with 90 degree right rotation
        targetY = 0;
        targetRotX = 0;
        // Apply 90-degree right rotation (PI/2 radians) and add scroll-based rotation
        targetRotY = Math.PI / 2 + (sectionsData.progress * Math.PI) / 4;
        targetRotZ = rotation / 2;
      } else if (sectionsData.currentSection === "about") {
        // About section - show back
        targetY = -1.5;
        targetRotX = 0.2;
        // Rotate to show the back
        targetRotY = Math.PI + (sectionsData.progress * Math.PI) / 6;
        targetRotZ = rotation / 3;
      } else if (sectionsData.currentSection === "contact") {
        // Contact section - show legs
        targetY = -3;
        targetRotX = 0.4;
        // Return to front view but tilted to see legs
        targetRotY = 0;
        targetRotZ = rotation;
      }

      // Apply smooth transitions between section positions and rotations
      // Use a higher easing value (0.08 instead of 0.05) for faster response
      group.current.position.y +=
        (targetY + Math.sin(t * 0.3) * 0.2 - group.current.position.y) * 0.08;
      group.current.rotation.x +=
        (targetRotX - group.current.rotation.x) * 0.08;
      group.current.rotation.y +=
        (targetRotY - group.current.rotation.y) * 0.08;
      group.current.rotation.z +=
        (targetRotZ - group.current.rotation.z) * 0.08;

      // Apply fixed scale that's much larger
      group.current.scale.setScalar(baseScale);

      // Add 360 spin animation when reaching bottom
      if (reachedBottom) {
        // Complete 360-degree rotation at the bottom
        group.current.rotation.y += 0.02;
        group.current.rotation.z = spinAnimation * fullRotation;
      }
    }
  });

  return (
    <group
      ref={group}
      position={[0, 0, 0]} // Center position for maximum visibility
      rotation={[0, 0, 0]}
    >
      {/* Panda Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Panda Head */}
      <mesh position={[0, 1.3, 0]} castShadow>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Left Ear */}
      <mesh position={[-0.7, 2, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Right Ear */}
      <mesh position={[0.7, 2, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Left Eye Patch */}
      <mesh position={[-0.4, 1.4, 0.7]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Right Eye Patch */}
      <mesh position={[0.4, 1.4, 0.7]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Left Eye */}
      <mesh position={[-0.4, 1.4, 0.85]} castShadow>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Right Eye */}
      <mesh position={[0.4, 1.4, 0.85]} castShadow>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Left Pupil */}
      <mesh position={[-0.4, 1.4, 0.95]} castShadow>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel + 0.2}
        />
      </mesh>

      {/* Right Pupil */}
      <mesh position={[0.4, 1.4, 0.95]} castShadow>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel + 0.2}
        />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 1.1, 0.9]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel + 0.1}
        />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, 0.9, 0.9]} castShadow>
        <boxGeometry args={[0.2, 0.05, 0.05]} />
        <meshStandardMaterial
          color="#ff9999"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-1.1, 0, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Right Arm */}
      <mesh position={[1.1, 0, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.5, -1.1, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.5, -1.1, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={opacityLevel}
        />
      </mesh>

      {/* Anime Blush - Left */}
      <mesh position={[-0.6, 1, 0.8]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#ff9999"
          opacity={opacityLevel - 0.1}
          transparent
        />
      </mesh>

      {/* Anime Blush - Right */}
      <mesh position={[0.6, 1, 0.8]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#ff9999"
          opacity={opacityLevel - 0.1}
          transparent
        />
      </mesh>
    </group>
  );
};

export default BackgroundPandaModel;
