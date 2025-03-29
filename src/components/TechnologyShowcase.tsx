import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Technology category interface
interface TechCategory {
  title: string;
  description: string;
  icon: string;
}

const TechnologyShowcase = () => {
  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Categories data
  const categories: TechCategory[] = [
    {
      title: "Programming",
      description: "The goal of programming is to create software that solves problems.",
      icon: "/icons/programming.png"
    },
    {
      title: "Electronics",
      description: "Electronics will change the world in ways we can't even imagine.",
      icon: "/icons/electronics.png"
    },
    {
      title: "Mechanical",
      description: "Mechanical Power: The Power to Change the World",
      icon: "/icons/solidworks.png"
    }
  ];

  return (
    <div className="relative z-10 py-24 px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Blue-bordered transparent card container */}
        <div className="p-6 md:p-8 rounded-2xl border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm shadow-lg shadow-blue-500/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Description */}
            <motion.div 
              ref={leftRef}
              initial={{ opacity: 0, x: -50 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Discover how technology has come so far with innovation and robotics
              </h2>
              <p className="text-gray-400 text-lg">
                Programmers, electrical engineers, mechanical engineers, and developers collaborate to design, 
                construct, and program robotic systems, combining their expertise in software, electronics, 
                and mechanics to create advanced robotic solutions for various applications and industries.
              </p>
            </motion.div>

            {/* Right Section - Tech Categories */}
            <motion.div 
              ref={rightRef}
              initial={{ opacity: 0, y: 50 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {categories.map((category, index) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={rightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-zinc-900/90 backdrop-blur-sm p-6 rounded-xl flex items-start gap-6 border border-zinc-800 hover:border-cyan-900/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden flex items-center justify-center bg-black/30">
                    <img 
                      src={category.icon} 
                      alt={category.title} 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-cyan-400 mb-2">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                    <div className="mt-3 h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyShowcase;
