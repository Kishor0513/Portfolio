import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const Home = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const pandaRef = useRef(null);
  const textRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Initialize scene
    const initScene = () => {
      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Fog for depth
      scene.fog = new THREE.FogExp2(0x004400, 0.02);

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 2, 8);
      cameraRef.current = camera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      rendererRef.current = renderer;

      // Clear previous canvas if it exists
      if (mountRef.current.children.length > 0) {
        mountRef.current.removeChild(mountRef.current.children[0]);
      }
      mountRef.current.appendChild(renderer.domElement);

      // Lighting
      setupLighting(scene);

      // Jungle environment
      createJungleEnvironment(scene);

      // Create panda model
      createPandaModel(scene);

      // Create 3D text
      create3DText(scene);

      // Handle window resize
      window.addEventListener("resize", handleResize);
    };

    // Setup lighting
    const setupLighting = (scene) => {
      // Ambient light
      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
      scene.add(ambientLight);

      // Directional light (sun)
      const directionalLight = new THREE.DirectionalLight(0xffffcc, 0.8);
      directionalLight.position.set(5, 10, 7);
      directionalLight.castShadow = true;
      scene.add(directionalLight);

      // Point lights for atmosphere
      const greenLight = new THREE.PointLight(0x00ff00, 0.5, 10);
      greenLight.position.set(-3, 2, -3);
      scene.add(greenLight);

      const blueLight = new THREE.PointLight(0x0044ff, 0.5, 10);
      blueLight.position.set(3, 2, -3);
      scene.add(blueLight);
    };

    // Create jungle environment
    const createJungleEnvironment = (scene) => {
      // Ground
      const groundGeometry = new THREE.PlaneGeometry(100, 100);
      const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x005500,
        roughness: 0.8,
        metalness: 0.2,
      });
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -2;
      ground.receiveShadow = true;
      scene.add(ground);

      // Bamboo trees
      const createBamboo = (x, z) => {
        const group = new THREE.Group();

        // Stem
        const stemGeometry = new THREE.CylinderGeometry(0.1, 0.15, 6, 8);
        const stemMaterial = new THREE.MeshStandardMaterial({
          color: 0x90ee90,
          roughness: 0.8,
        });
        const stem = new THREE.Mesh(stemGeometry, stemMaterial);
        stem.position.y = 1;
        stem.castShadow = true;
        group.add(stem);

        // Leaves
        for (let i = 0; i < 5; i++) {
          const leafGeometry = new THREE.SphereGeometry(
            0.5,
            8,
            8,
            0,
            Math.PI * 2,
            0,
            Math.PI / 2
          );
          const leafMaterial = new THREE.MeshStandardMaterial({
            color: 0x006400,
            roughness: 0.8,
            side: THREE.DoubleSide,
          });
          const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
          leaf.position.y = 2 + i * 0.8;
          leaf.scale.set(0.5, 0.2, 0.5);
          leaf.rotation.x = Math.random() * Math.PI;
          leaf.rotation.z = Math.random() * Math.PI * 2;
          leaf.castShadow = true;
          group.add(leaf);
        }

        group.position.set(x, 0, z);
        return group;
      };

      // Add multiple bamboo trees
      for (let i = 0; i < 20; i++) {
        const x = (Math.random() - 0.5) * 30;
        const z = (Math.random() - 0.5) * 30;
        // Keep a clear area in the center for the panda
        if (Math.sqrt(x * x + z * z) > 5) {
          scene.add(createBamboo(x, z));
        }
      }

      // Skybox - simple color background
      scene.background = new THREE.Color(0x87ceeb); // Sky blue

      // Particles for atmosphere (fireflies/dust)
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 500;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 30;
        posArray[i + 1] = Math.random() * 15;
        posArray[i + 2] = (Math.random() - 0.5) * 30;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xffff00,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);
    };

    // Create panda model (simplified with basic shapes)
    const createPandaModel = (scene) => {
      const panda = new THREE.Group();

      // Body
      const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
      const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.5,
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = 0;
      body.castShadow = true;
      panda.add(body);

      // Head
      const headGeometry = new THREE.SphereGeometry(0.8, 32, 32);
      const headMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.5,
      });
      const head = new THREE.Mesh(headGeometry, headMaterial);
      head.position.y = 1.5;
      head.castShadow = true;
      panda.add(head);

      // Eyes
      const eyeGeometry = new THREE.SphereGeometry(0.2, 32, 32);
      const eyeMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.5,
      });

      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      leftEye.position.set(-0.3, 1.6, 0.6);
      leftEye.scale.set(0.5, 0.5, 0.5);
      panda.add(leftEye);

      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      rightEye.position.set(0.3, 1.6, 0.6);
      rightEye.scale.set(0.5, 0.5, 0.5);
      panda.add(rightEye);

      // Ears
      const earGeometry = new THREE.SphereGeometry(0.3, 32, 32);
      const earMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.5,
      });

      const leftEar = new THREE.Mesh(earGeometry, earMaterial);
      leftEar.position.set(-0.6, 2.1, 0);
      leftEar.scale.set(0.5, 0.5, 0.5);
      panda.add(leftEar);

      const rightEar = new THREE.Mesh(earGeometry, earMaterial);
      rightEar.position.set(0.6, 2.1, 0);
      rightEar.scale.set(0.5, 0.5, 0.5);
      panda.add(rightEar);

      // Nose
      const noseGeometry = new THREE.SphereGeometry(0.1, 32, 32);
      const noseMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.5,
      });
      const nose = new THREE.Mesh(noseGeometry, noseMaterial);
      nose.position.set(0, 1.4, 0.8);
      panda.add(nose);

      // Black patches around eyes
      const patchGeometry = new THREE.SphereGeometry(0.4, 32, 32);
      const patchMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.5,
      });

      const leftPatch = new THREE.Mesh(patchGeometry, patchMaterial);
      leftPatch.position.set(-0.3, 1.6, 0.5);
      leftPatch.scale.set(0.8, 0.8, 0.3);
      panda.add(leftPatch);

      const rightPatch = new THREE.Mesh(patchGeometry, patchMaterial);
      rightPatch.position.set(0.3, 1.6, 0.5);
      rightPatch.scale.set(0.8, 0.8, 0.3);
      panda.add(rightPatch);

      // Arms
      const armGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 32);
      const armMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.5,
      });

      const leftArm = new THREE.Mesh(armGeometry, armMaterial);
      leftArm.position.set(-1, 0, 0);
      leftArm.rotation.z = Math.PI / 4;
      panda.add(leftArm);

      const rightArm = new THREE.Mesh(armGeometry, armMaterial);
      rightArm.position.set(1, 0, 0);
      rightArm.rotation.z = -Math.PI / 4;
      panda.add(rightArm);

      // Legs
      const legGeometry = new THREE.CylinderGeometry(0.25, 0.25, 1, 32);
      const legMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.5,
      });

      const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
      leftLeg.position.set(-0.5, -1, 0);
      panda.add(leftLeg);

      const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
      rightLeg.position.set(0.5, -1, 0);
      panda.add(rightLeg);

      // Position the panda
      panda.position.set(0, 0, 0);
      panda.scale.set(0.8, 0.8, 0.8);
      scene.add(panda);

      pandaRef.current = panda;
    };

    // Create 3D text
    const create3DText = (scene) => {
      // Create a simple 3D cube with "KC" texture as a placeholder
      const geometry = new THREE.BoxGeometry(2, 2, 0.5);

      // Create canvas for text
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 256;
      canvas.height = 256;

      // Draw background
      context.fillStyle = "#8a2be2";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw text
      context.font = "Bold 100px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = "#ffffff";
      context.fillText("KC", canvas.width / 2, canvas.height / 2);

      // Create texture
      const texture = new THREE.CanvasTexture(canvas);

      const materials = [
        new THREE.MeshStandardMaterial({ color: 0x8a2be2 }), // right
        new THREE.MeshStandardMaterial({ color: 0x8a2be2 }), // left
        new THREE.MeshStandardMaterial({ color: 0x8a2be2 }), // top
        new THREE.MeshStandardMaterial({ color: 0x8a2be2 }), // bottom
        new THREE.MeshStandardMaterial({ map: texture }), // front
        new THREE.MeshStandardMaterial({ map: texture }), // back
      ];

      const text = new THREE.Mesh(geometry, materials);
      text.position.set(0, 3, -5);
      text.castShadow = true;
      scene.add(text);

      textRef.current = text;
    };

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();

        rendererRef.current.setSize(width, height);
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    };

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Animate panda
      if (pandaRef.current) {
        const time = Date.now() * 0.001;
        pandaRef.current.rotation.y = Math.sin(time) * 0.3;
        pandaRef.current.position.y = Math.sin(time * 1.5) * 0.2;
      }

      // Animate 3D text
      if (textRef.current) {
        textRef.current.rotation.y += 0.01;
      }

      // Render scene
      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    // Initialize and start animation
    if (mountRef.current) {
      initScene();
      animate();
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }
      if (sceneRef.current) {
        // Dispose of all geometries and materials
        sceneRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  return (
    <motion.div
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="split-layout">
        <div className="content-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.h1
              className="section-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Kishor Chaudhary
            </motion.h1>
            <motion.p
              className="section-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Frontend Developer & 3D Enthusiast
            </motion.p>
            <motion.p
              className="section-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Creating immersive web experiences with modern technologies.
              Specializing in React, Three.js, and interactive 3D content.
            </motion.p>
            <motion.div
              className="home-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                className="primary-btn"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                className="secondary-btn"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        <div className="content-right">
          <div className="model-focus">
            <div className="model-highlight">
              <div className="home-model" ref={mountRef}></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
