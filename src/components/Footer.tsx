import React from 'react';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-600 dark:bg-blue-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Naveen G</h2>
          
          <div className="mb-6">
            <SocialIcons className="justify-center" iconSize="text-2xl" />
          </div>
          
          <div className="text-sm opacity-90">
            <p>© {currentYear} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;