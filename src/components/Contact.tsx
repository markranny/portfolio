// src/components/Contact.tsx

'use client';

import React, { useState } from 'react';
import { contactInfo } from '@/data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // In a real app, you would handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-400">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 rounded-lg font-medium transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-6 sm:space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-400">
                Quick Contact
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    📧
                  </div>
                  <div>
                    <div className="font-medium">Send Email</div>
                    <div className="text-sm text-gray-400">{contactInfo.email}</div>
                  </div>
                </a>
                
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div>
                    <div className="font-medium">Call Me</div>
                    <div className="text-sm text-gray-400">{contactInfo.phone}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/5 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-green-400 font-medium">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Time Zone</span>
                  <span className="text-blue-400 font-medium">PHT (UTC+8)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Preferred Contact</span>
                  <span className="text-purple-400 font-medium">Email / Phone</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-all"
                >
                  <span className="mr-2">💼</span>
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center p-3 bg-gray-600/20 hover:bg-gray-600/30 rounded-lg transition-all"
                >
                  <span className="mr-2">🐙</span>
                  GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center p-3 bg-blue-400/20 hover:bg-blue-400/30 rounded-lg transition-all"
                >
                  <span className="mr-2">🐦</span>
                  Twitter
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center p-3 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-all"
                >
                  <span className="mr-2">📱</span>
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}