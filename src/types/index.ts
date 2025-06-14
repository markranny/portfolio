// src/types/index.ts

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  tech: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}