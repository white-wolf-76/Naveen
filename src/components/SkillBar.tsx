import React, { useRef, useEffect, useState } from 'react';
import { SkillType } from '../types';

interface SkillBarProps {
  skill: SkillType;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const [animate, setAnimate] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Determine which animation class to use based on the icon
  const getAnimationClass = () => {
    if (skill.icon.includes('react')) return 'animate-spin-slow';
    if (skill.icon.includes('figma')) return 'animate-bounce-slow';
    return 'animate-pulse-slow';
  };

  return (
    <div 
      ref={barRef}
      className="relative flex items-center justify-between w-full p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center">
        <i className={`${skill.icon} ${getAnimationClass()} text-2xl mr-3 text-blue-600 dark:text-blue-400`}></i>
        <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
      </div>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.percentage}%</span>
      
      <div className="absolute left-0 bottom-0 h-1 bg-gray-200 dark:bg-gray-700 w-full rounded-b-lg overflow-hidden">
        <div 
          className="h-full bg-blue-600 dark:bg-blue-500 rounded-b-lg transition-all duration-1000 ease-out"
          style={{ 
            width: animate ? `${skill.percentage}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;