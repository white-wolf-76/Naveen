import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="mr-4 p-1 rounded hover:bg-gray-100 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">My Project</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;