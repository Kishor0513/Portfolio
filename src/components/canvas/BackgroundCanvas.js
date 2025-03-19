import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import BackgroundPandaModel from "./BackgroundPandaModel";

const BackgroundCanvas = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set up event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Initial values
    setScrollY(window.scrollY);
    setWindowHeight(window.innerHeight);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        background: "linear-gradient(to bottom, #0f0f2e, #0a0a20)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 95 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%" }}
      >
        <fog attach="fog" args={["#0a0a20", 10, 40]} />

        {/* Ambient light for soft overall illumination */}
        <ambientLight intensity={0.5} color="#a088ff" />

        {/* Main directional light */}
        <directionalLight
          position={[5, 10, 5]}
          intensity={0.7}
          color="#ffffff"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Colored rim light for dramatic effect */}
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#ff69b4" />

        {/* Front fill light */}
        <pointLight position={[0, 5, 8]} intensity={0.4} color="#8a2be2" />

        <Suspense fallback={null}>
          <BackgroundPandaModel
            scrollY={scrollY}
            windowHeight={windowHeight}
            fillScreen={true}
          />
        </Suspense>

        {/* Background particles or sparkles could be added here */}

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
