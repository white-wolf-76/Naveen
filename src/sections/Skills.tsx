import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import { skills } from '../data';

const Skills: React.FC = () => {
  // Split skills into two columns
  const midPoint = Math.ceil(skills.length / 2);
  const leftColumnSkills = skills.slice(0, midPoint);
  const rightColumnSkills = skills.slice(midPoint);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills" />
        
        <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-8">
          Professional Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <div className="space-y-4">
            {leftColumnSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
          
          <div className="space-y-4">
            {rightColumnSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;