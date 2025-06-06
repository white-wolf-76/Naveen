import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add BoxIcons CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    document.head.appendChild(linkElement);
    
    // Add Google Fonts - Poppins
    const fontElement = document.createElement('link');
    fontElement.rel = 'stylesheet';
    fontElement.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    document.head.appendChild(fontElement);
    
    // Set title
    document.title = 'Naveen G | Portfolio';
    
    // Initialize smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.head.removeChild(linkElement);
      document.head.removeChild(fontElement);
    };
  }, []);

  return (
    <div className="font-['Poppins'] dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;