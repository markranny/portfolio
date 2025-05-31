import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Character Component (Placeholder for Ready Player Me integration)
function Character3D() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group>
      {/* Character Body */}
      <mesh
        ref={meshRef}
        position={[0, -0.5, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[0.8, 1, 2.5, 8]} />
        <meshStandardMaterial color={hovered ? "#4f46e5" : "#6366f1"} />
      </mesh>
      
      {/* Character Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
      
      {/* Character Arms */}
      <mesh position={[-1.2, 0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 8]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      <mesh position={[1.2, 0.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 8]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      
      {/* Floating Tech Icons */}
      <mesh position={[2, 2, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <MeshWobbleMaterial color="#10b981" factor={0.6} speed={2} />
      </mesh>
      <mesh position={[-2, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <MeshWobbleMaterial color="#f59e0b" factor={0.6} speed={1.5} />
      </mesh>
    </group>
  );
}

// Skills data based on resume
const skills = [
  { name: 'React & Next.js', level: 90, icon: '⚛️' },
  { name: 'Laravel & PHP', level: 95, icon: '🐘' },
  { name: 'JavaScript/TypeScript', level: 88, icon: '📜' },
  { name: 'Database Management', level: 85, icon: '🗄️' },
  { name: 'System Design', level: 92, icon: '🏗️' },
  { name: 'C# .NET', level: 80, icon: '💻' },
  { name: 'Vue.js', level: 82, icon: '💚' },
  { name: 'Django/Python', level: 78, icon: '🐍' }
];

const experiences = [
  {
    title: "Senior System Developer Specialist",
    company: "Current Position",
    duration: "May 2023 - Present",
    description: "Leading development of HRMS using Laravel backend and React frontend. Developing POS systems with Kotlin and Laravel Vue.js."
  },
  {
    title: "Web Developer Specialist", 
    company: "ELJIN Corp.",
    duration: "Jan 2021 - May 2023",
    description: "Developed corporate websites, implemented ticketing systems, and provided comprehensive POS system training across 21 store branches."
  },
  {
    title: "Programmer Intern",
    company: "Hino Motors Philippines Corporation", 
    duration: "Sep 2017 - Dec 2017",
    description: "Programmed system modules and supported IT operations for automotive manufacturing processes."
  }
];

const projects = [
  {
    title: "Event Management System",
    tech: "Flutter + Laravel",
    description: "Full-stack event management platform for USTP with real-time features"
  },
  {
    title: "Real Estate Management System", 
    tech: "Laravel + Vue.js",
    description: "Property management system with advanced search and filtering capabilities"
  },
  {
    title: "Health Monitoring System",
    tech: "Machine Learning + IoT",
    description: "IoT-based health monitoring with ML predictions using Raspberry Pi"
  },
  {
    title: "Farmers Simulation Game",
    tech: "Unity + Deep Q-Learning",
    description: "Educational game featuring Filipino endemic creatures with AI learning"
  }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mark Ranny Aglapay
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === item ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[-10, 15, 10]} angle={0.3} intensity={0.5} />
            <Character3D />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Senior System Developer
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 text-gray-300 transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Crafting innovative solutions with React, Laravel, and cutting-edge technologies
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-500 rounded-full hover:bg-blue-500/20 transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Senior System Developer Specialist with expertise in full-stack development, 
                system architecture, and emerging technologies. Based in the Philippines, I specialize in 
                creating robust web applications and management systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-blue-400">Age</h4>
                  <p>27</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-blue-400">Location</h4>
                  <p>Philippines</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-blue-400">Education</h4>
                  <p>BS Information Technology</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-blue-400">Languages</h4>
                  <p>English, Tagalog</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📧</span>
                  <span>aglapay.markranny@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📱</span>
                  <span>+63 951 538 4154</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📍</span>
                  <span>Brgy. Gasosod, Mayantoc Tarlac</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                  <p className="text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-sm text-purple-400 mb-4">{project.tech}</p>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:aglapay.markranny@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Send Email
            </a>
            <a 
              href="tel:+639515384154"
              className="px-8 py-3 border-2 border-blue-500 rounded-full hover:bg-blue-500/20 transition-all transform hover:scale-105"
            >
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Mark Ranny Aglapay. Crafted with React & Three.js
          </p>
        </div>
      </footer>
    </div>
  );
}