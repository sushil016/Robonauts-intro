import React from 'react';

interface ProjectSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`w-screen h-screen flex-shrink-0 relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

export default ProjectSection;