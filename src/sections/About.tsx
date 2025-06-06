import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">I'm Naveen</h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Welcome to my portfolio!<br />
                A passionate front-end developer dedicated to crafting beautiful
                and user-friendly web experiences. With a strong foundation in
                HTML, CSS, and JavaScript, I transform ideas into dynamic websites
                that engage and inspire.
              </p>
              
              <p>
                I believe that great web development combines aesthetics with
                functionality. Every project is an opportunity to innovate, solve
                problems, and create seamless user journeys. I'm committed to
                staying updated with the latest trends and technologies to deliver
                top-notch results.
              </p>
              
              <p>
                Let's Connect! I'm always excited to collaborate on new projects.
                Feel free to reach out if you'd like to discuss how we can work
                together!
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <i className="bx bx-code-alt text-xl text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Web Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Frontend & Backend</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <i className="bx bx-palette text-xl text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">UI/UX Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">User-Centered Approach</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Passionate Developer</h3>
                  <p>Creating innovative web solutions with modern technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;