// src/data/portfolio.ts

import { Skill, Experience, Project, ContactInfo } from '@/types';

export const skills: Skill[] = [
  { name: 'React & Next.js', level: 90, icon: '⚛️' },
  { name: 'Laravel & PHP', level: 95, icon: '🐘' },
  { name: 'JavaScript/TypeScript', level: 88, icon: '📜' },
  { name: 'Database Management', level: 85, icon: '🗄️' },
  { name: 'System Design', level: 92, icon: '🏗️' },
  { name: 'C# .NET', level: 80, icon: '💻' },
  { name: 'Vue.js', level: 82, icon: '💚' },
  { name: 'Django/Python', level: 78, icon: '🐍' }
];

export const experiences: Experience[] = [
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

export const projects: Project[] = [
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

export const contactInfo: ContactInfo = {
  email: "aglapay.markranny@gmail.com",
  phone: "+63 951 538 4154",
  location: "Brgy. Gasosod, Mayantoc Tarlac"
};

export const personalInfo = {
  name: "Mark Ranny Aglapay",
  title: "Senior System Developer",
  age: 27,
  location: "Philippines",
  education: "BS Information Technology",
  languages: "English, Tagalog"
};