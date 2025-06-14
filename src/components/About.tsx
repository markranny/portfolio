// src/components/About.tsx

'use client';

import React from 'react';
import { personalInfo, contactInfo } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Description and Info */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate Senior System Developer Specialist with expertise in full-stack development, 
              system architecture, and emerging technologies. Based in the Philippines, I specialize in 
              creating robust web applications and management systems.
            </p>
            
            {/* Personal Info Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="font-semibold text-blue-400 text-sm sm:text-base">Age</h4>
                <p className="text-sm sm:text-base">{personalInfo.age}</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="font-semibold text-blue-400 text-sm sm:text-base">Location</h4>
                <p className="text-sm sm:text-base">{personalInfo.location}</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="font-semibold text-blue-400 text-sm sm:text-base">Education</h4>
                <p className="text-sm sm:text-base">{personalInfo.education}</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="font-semibold text-blue-400 text-sm sm:text-base">Languages</h4>
                <p className="text-sm sm:text-base">{personalInfo.languages}</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 text-xl flex-shrink-0 mt-1">📧</span>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm sm:text-base hover:text-blue-400 transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 text-xl flex-shrink-0 mt-1">📱</span>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm sm:text-base hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 text-xl flex-shrink-0 mt-1">📍</span>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-sm sm:text-base">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-center font-medium transition-colors text-sm sm:text-base"
              >
                Send Email
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex-1 px-4 py-2 border border-blue-500 hover:bg-blue-500/20 rounded-lg text-center font-medium transition-colors text-sm sm:text-base"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}