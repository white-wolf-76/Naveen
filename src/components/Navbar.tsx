import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100; // Adding offset

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = `#${section.id}`;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });

      // Check if page is scrolled for navbar styling
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <a href="#home" className="text-xl font-semibold text-gray-900 dark:text-white">
            Naveen G
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="text-gray-800 dark:text-white lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`relative pb-1 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    activeLink === link.href ? 'font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>
      
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 dark:text-white focus:outline-none"
              aria-label="Close menu"
            >
              <i className="bx bx-x text-2xl"></i>
            </button>
          </div>
          
          <ul className="mt-8 space-y-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`block text-lg ${
                    activeLink === link.href 
                      ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                      : 'text-gray-800 dark:text-white'
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;