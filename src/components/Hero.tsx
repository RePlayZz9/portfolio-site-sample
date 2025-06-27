import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Alex</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
            <span className="font-mono">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional web experiences with modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Github size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Linkedin size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Mail size={28} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
          >
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-purple-600 text-purple-400 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
            Download Resume
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;