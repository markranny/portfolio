// src/components/Footer.tsx

'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-sm sm:text-base">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Crafted with React, Next.js & Three.js
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
            >
              Contact
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-all group"
            aria-label="Back to top"
          >
            <span className="text-blue-400 group-hover:text-blue-300 text-sm">Back to Top</span>
            <svg 
              className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transform group-hover:-translate-y-1 transition-all" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            {/* Tech Stack */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
              <span>Built with:</span>
              <span className="text-blue-400">React</span>
              <span>•</span>
              <span className="text-green-400">Next.js</span>
              <span>•</span>
              <span className="text-purple-400">Three.js</span>
              <span>•</span>
              <span className="text-cyan-400">Tailwind CSS</span>
            </div>

            {/* Status */}
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}