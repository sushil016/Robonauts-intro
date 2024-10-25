import { motion } from 'framer-motion';
import { MotionValue } from 'framer-motion';
import IconMapping from './IconMapping';
import { Project } from './types';
import ParallaxBackground from './projects/ParallaxBackground';
import StatsOverlay from './projects/StatsOverlays';


interface ProjectSectionProps {
  project: Project;
  scrollProgress: MotionValue<number>;
  isAlternate?: boolean;
}

const ProjectSections = ({ project, scrollProgress, isAlternate }: ProjectSectionProps) => {
  const { ModelComponent } = project;

  return (
    <div className={`horizontal-section w-screen h-screen flex-shrink-0 bg-gradient-to-br from-${project.background.gradientFrom} to-${project.background.gradientTo}`}>
      <ParallaxBackground type={project.background.type} progress={scrollProgress} />
      <motion.div 
        className="relative z-10 flex items-center justify-center w-screen h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-4xl sm:w-[70rem] mx-auto flex items-center gap-12 sm:gap-48">
          {!isAlternate && <ModelComponent className="w-1/2" />}
          <motion.div 
            className="space-y-6 w-1/2"
            initial={{ x: isAlternate ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <motion.div 
              className="flex gap-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {project.icons.map((icon, index) => {
                const IconComponent = IconMapping[icon.name];
                return (
                  <IconComponent 
                    key={index}
                    className={`w-6 h-6 ${icon.color}`} 
                  />
                );
              })}
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
            <StatsOverlay stats={project.stats} />
          </motion.div>
          {isAlternate && <ModelComponent className="w-1/2" />}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSections;