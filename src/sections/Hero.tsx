import React, { useEffect, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';
import ParticleSystem from '../components/ui/ParticleSystem';

// Enhanced Animated 3D Astronaut Component (Fixed)
const Astronaut = () => {
  const { scene } = useGLTF('/portfolio/models/tenhun_falling_spaceman_fanart.glb');
  
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // Ensure materials are visible
          if (child.material) {
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene]);

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
      <primitive 
        object={scene} 
        scale={[1.0, 1.0, 1.0]}
        position={[0, -0.5, 0]}
        rotation={[-Math.PI / 2, -0.2, 2.2]}
      />
    </Float>
  );
};

// Loading fallback component
const AstronautLoader = () => (
  <mesh position={[2, -1, 0]}>
    <boxGeometry args={[1, 2, 1]} />
    <meshStandardMaterial color="#33c2cc" transparent opacity={0.5} />
  </mesh>
);

// Enhanced Animated Background (Fixed)
const SpaceBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Space Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #1e40af 100%)',
            'linear-gradient(135deg, #7c3aed 0%, #1e40af 50%, #1e3a8a 100%)',
            'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #7c3aed 100%)',
            'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #1e40af 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated Parallax Mountains */}
      <motion.img
        src="/portfolio/assets/mountain-3.png"
        alt="Mountain 3"
        className="absolute bottom-0 w-full h-auto object-cover opacity-70"
        style={{ y: y3 }}
      />
      <motion.img
        src="/portfolio/assets/mountain-2.png"
        alt="Mountain 2"
        className="absolute bottom-0 w-full h-auto object-cover opacity-80"
        style={{ y: y2 }}
      />
      <motion.img
        src="/portfolio/assets/mountain-1.png"
        alt="Mountain 1"
        className="absolute bottom-0 w-full h-auto object-cover opacity-90"
        style={{ y: y1 }}
      />
      
      {/* Animated Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 left-20 w-24 h-24 bg-purple-500/30 rounded-full blur-lg"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-40 w-16 h-16 bg-pink-500/30 rounded-full blur-md"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Animated Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Light Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-800/10" />
    </div>
  );
};

// Enhanced Animated Hero Text (Fixed)
const HeroText = () => {
  const words = ["Scalable", "Modern", "Robust"];
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-left"
      >
        {/* Animated Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-500/60 rounded-full backdrop-blur-sm"
        >
          <span className="text-cyan-300 font-medium text-sm">🚀 Welcome to my Portfolio</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Muhammad Hassan
          </span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-3xl text-gray-200 mb-6 font-light"
        >
          I craft{' '}
          <motion.span
            key={currentWordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent font-bold"
          >
            {words[currentWordIndex]}
          </motion.span>{' '}
          web solutions
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed"
        >
          Full Stack Developer with expertise in modern web technologies, 
          creating robust and scalable applications that drive digital innovation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Enhanced Animated Tech Stack (Fixed)
const TechStack = () => {
  const techStack = [
    { name: 'Angular', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'GraphQL', icon: '🔗' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'VS Code', icon: '💻' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="mt-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          Technologies I Master
        </h3>
        <p className="text-gray-200">
          From frontend frameworks to backend technologies
        </p>
      </motion.div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.8 + index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 border border-gray-600/60 hover:border-cyan-500/60 transition-all duration-300"
          >
            <div className="text-2xl mb-1 text-center">{tech.icon}</div>
            <p className="text-xs text-center text-gray-200">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Hero Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <SpaceBackground />
      
      {/* Particle System */}
      <ParticleSystem />
      
      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1">
              <HeroText />
              <TechStack />
      </div>

                         {/* Right Side - 3D Astronaut */}
             <div className="order-1 lg:order-2 relative">
               <div className="w-full h-[400px] lg:h-[500px]">
                 <Canvas
                   camera={{ position: [0, 0, 8], fov: 35 }}
                   className="w-full h-full"
                   gl={{ 
                     antialias: true, 
                     alpha: true,
                     powerPreference: "high-performance"
                   }}
                 >
                  {/* Brighter, more stable lighting */}
                  <ambientLight intensity={1.2} />
                  <directionalLight 
                    position={[10, 10, 5]} 
                    intensity={2} 
                    castShadow 
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                  />
                  <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
                  <pointLight position={[-5, -5, -5]} intensity={0.8} color="#33c2cc" />
                  
                  <Suspense fallback={<AstronautLoader />}>
                    <Astronaut />
                  </Suspense>
                  
                  <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.4}
                    maxPolarAngle={Math.PI / 2.2}
                    minPolarAngle={Math.PI / 2.8}
                    maxAzimuthAngle={Math.PI / 2.5}
                    minAzimuthAngle={-Math.PI / 2.5}
                  />
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 