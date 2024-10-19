import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
const projects = [
  { id: 1, title: 'Autonomous Drone', image: 'https://images.ctfassets.net/oxcgtdo88e20/NrLWifrjnSFYaPZVRuO2x/c92252247708c257897097a76f16f193/university-of-seville-drone-equipped-with-robotic-arm.jpg', description: 'An AI-powered drone for search and rescue missions.' },
  { id: 2, title: 'Robotic Arm', image: 'https://example.com/robotic-arm.jpg', description: 'A precise robotic arm for manufacturing applications.' },
  { id: 3, title: 'Smart Home Robot', image: 'https://example.com/home-robot.jpg', description: 'An intelligent robot assistant for your home.' },
];

const ProjectShowcase: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Project Showcase</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button onClick={prevProject} className="absolute left-0 z-10">
              <ChevronLeft className="w-8 h-8" />
            </button>
           
          <motion.div
            className="w-full max-w-3xl border p-8 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            style={{
              borderImage: 'linear-gradient(45deg, #f3ec78, #af4261) 1',
            }}
          >
            <img
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">{projects[currentProject].title}</h3>
              <p className="mt-2">{projects[currentProject].description}</p>
            </div>
          </motion.div>
            <button onClick={nextProject} className="absolute right-0 z-10">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;