import React from 'react';
import { ProjectType } from '../types';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
    >
      <div className="relative overflow-hidden group h-48 sm:h-64">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-lg font-medium">{project.title}</span>
            <div className="mt-2 flex justify-center">
              <span className="px-4 py-2 rounded-full bg-white text-blue-600 text-sm font-medium">
                View Project
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;