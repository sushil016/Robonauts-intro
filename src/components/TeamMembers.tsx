import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const teamMembers = [
  { name: 'Dr.', role: 'Faculty Advisor', image: 'https://c8.alamy.com/comp/2CCYPPP/industrial-robotic-drone-with-mechanical-arms-on-white-background-concept-of-robot-helper-or-bot-3d-render-and-illustration-2CCYPPP.jpg' },
  { name: 'Praharshraj Singh', role: 'Club President', image: 'https://example.com/john-doe.jpg' },
  { name: 'Sushil Sahani', role: 'Technical Lead', image: 'https://example.com/emily-johnson.jpg' },
  { name: 'Omkar Pol', role: 'Project Manager', image: 'https://example.com/michael-brown.jpg' },
];

const TeamMembers: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="team" className="py-20 bg-opacity-50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 transform bg-[#1e1e2e3f] transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg"
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 0.85 }}
            >
              <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
              <p className="text-center text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;