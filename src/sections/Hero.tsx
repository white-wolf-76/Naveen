import React from 'react';
import SocialIcons from '../components/SocialIcons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi,<br />I'm <span className="text-blue-600 dark:text-blue-400">Naveen G</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mt-4 mb-6">
              Full Stack Developer
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-center"
              >
                Contact Me
              </a>
              <a 
                href="#work" 
                className="inline-block px-8 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-300 text-center"
              >
                View My Work
              </a>
            </div>
            
            <div className="mt-10">
              <SocialIcons iconSize="text-3xl" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 dark:opacity-50"></div>
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <i className="bx bx-chevron-down text-4xl text-blue-600 dark:text-blue-400"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;