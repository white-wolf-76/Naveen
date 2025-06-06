import React from 'react';
import { socialLinks } from '../data';

interface SocialIconsProps {
  className?: string;
  iconSize?: string;
  showLabels?: boolean;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  className = "", 
  iconSize = "text-2xl",
  showLabels = false
}) => {
  return (
    <div className={`flex ${showLabels ? 'flex-col space-y-3' : 'space-x-4'} ${className}`}>
      {socialLinks.map((social, index) => (
        <a 
          key={index}
          href={social.link} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={social.platform}
          className={`transition-all duration-300 transform hover:scale-110 ${social.hoverColor} text-current`}
        >
          <div className={`flex items-center ${showLabels ? 'space-x-2' : ''}`}>
            <i className={`${social.icon} ${iconSize}`}></i>
            {showLabels && <span>{social.platform}</span>}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;