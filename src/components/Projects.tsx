// src/components/Projects.tsx

'use client';

import React, { useState } from 'react';
import { projects } from '@/data/portfolio';

const projectIcons = ['🎯', '🏠', '🏥', '🎮'];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white/5 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl sm:text-3xl">
                    {projectIcons[index]}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-400 font-medium">
                      {project.tech}
                    </p>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="flex-shrink-0">
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                </div>
              </div>
              
              {/* Project Description */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(' + ').map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Links/Actions */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm font-medium transition-all transform hover:scale-105">
                  View Details
                </button>
                <button className="flex-1 px-4 py-2 border border-blue-500 hover:bg-blue-500/20 rounded-lg text-sm font-medium transition-all">
                  Source Code
                </button>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl transition-opacity duration-300 pointer-events-none ${
                hoveredProject === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white/5 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              More Projects Available
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              I have worked on numerous other projects including mobile applications, 
              API integrations, and custom software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all transform hover:scale-105">
                View All Projects
              </button>
              <button className="px-6 py-3 border border-blue-500 hover:bg-blue-500/20 rounded-lg font-medium transition-all">
                GitHub Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Project Categories */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="text-2xl mb-2">🌐</div>
            <div className="text-sm font-medium text-blue-400">Web Apps</div>
            <div className="text-xs text-gray-400">Full-Stack</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="text-2xl mb-2">📱</div>
            <div className="text-sm font-medium text-purple-400">Mobile</div>
            <div className="text-xs text-gray-400">Cross-Platform</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="text-2xl mb-2">🤖</div>
            <div className="text-sm font-medium text-green-400">AI/ML</div>
            <div className="text-xs text-gray-400">Machine Learning</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="text-2xl mb-2">🔗</div>
            <div className="text-sm font-medium text-yellow-400">APIs</div>
            <div className="text-xs text-gray-400">Integration</div>
          </div>
        </div>
      </div>
    </section>
  );
}