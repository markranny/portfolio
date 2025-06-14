// src/components/Hero.tsx

'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Character3D } from './Character3D';
import { personalInfo } from '@/data/portfolio';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export function Hero({ onSectionChange }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background - Hidden on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full opacity-80">
          <Suspense fallback={<LoadingFallback />}>
            <Canvas 
              camera={{ position: [0, 2, 5], fov: 75 }}
              dpr={[1, 1.5]} // Optimize pixel ratio
              performance={{ min: 0.5 }} // Performance optimization
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[-10, 15, 10]} angle={0.3} intensity={0.5} />
              <Character3D />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </Suspense>
        </div>
      )}

      {/* Mobile Background Gradient */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
      )}
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight block">
            {personalInfo.title}
          </span>
        </h1>

        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300 transform transition-all duration-1000 delay-300 px-4 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Crafting innovative solutions with React, Laravel, and cutting-edge technologies
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 px-4 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium text-sm sm:text-base"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-blue-500 rounded-full hover:bg-blue-500/20 transition-all transform hover:scale-105 font-medium text-sm sm:text-base"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}