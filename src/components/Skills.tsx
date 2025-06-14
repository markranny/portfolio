// src/components/Skills.tsx

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { skills } from '@/data/portfolio';

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-white/5 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              {/* Skill Header */}
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl mr-3 flex-shrink-0">{skill.icon}</span>
                <h3 className="font-semibold text-sm sm:text-base leading-tight">{skill.name}</h3>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                ></div>
              </div>
              
              {/* Proficiency Text */}
              <p className="text-xs sm:text-sm text-gray-400">
                {skill.level}% Proficiency
              </p>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">5+</div>
            <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">50+</div>
            <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">8</div>
            <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">24/7</div>
            <div className="text-xs sm:text-sm text-gray-400">Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
}