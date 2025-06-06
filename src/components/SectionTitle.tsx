import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="relative mb-10 text-center">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
        {title}
      </h2>
      <div className="h-1 w-16 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
    </div>
  );
};

export default SectionTitle;