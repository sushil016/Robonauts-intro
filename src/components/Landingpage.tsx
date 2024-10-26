import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronDown, Wrench, Rocket, Trophy, Users, Zap, ArrowRight, Star } from 'lucide-react';
import HomePageButton from './HomePageButtons';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const activities = [
  { 
    icon: Wrench, 
    title: "Robotics Workshops", 
    description: "Hands-on learning experiences with cutting-edge technology",
    stats: "20+ workshops/year",
    highlight: "Featured Projects"
  },
  { 
    icon: Rocket, 
    title: "Projects", 
    description: "Build innovative robots and autonomous systems",
    stats: "15+ active projects",
    highlight: "Innovation Lab"
  },
  { 
    icon: Trophy, 
    title: "Competitions", 
    description: "Showcase your skills in national robotics contests",
    stats: "5 major competitions",
    highlight: "Award Winning"
  },
  { 
    icon: Users, 
    title: "Mentorship", 
    description: "Learn from experienced roboticists and industry experts",
    stats: "1:5 mentor ratio",
    highlight: "Expert Network"
  },
];

// Circuit grid background using pure SVG
const CircuitBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10">
    <defs>
      <pattern id="circuit" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M 25 0 L 25 25 M 0 25 L 50 25" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500" fill="none" />
        <circle cx="25" cy="25" r="2" className="text-cyan-400" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
    {/* Random connection points */}
    {[...Array(20)].map((_, i) => (
      <circle
        key={i}
        cx={`${Math.random() * 100}%`}
        cy={`${Math.random() * 100}%`}
        r="1"
        className="text-cyan-400"
        fill="currentColor"
      />
    ))}
  </svg>
);

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const activitiesRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (activitiesRef.current) {
        const rect = activitiesRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          controls.start("visible");
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 15,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900"
          style={{
            translateY: scrollY * 0.4
          }}
        >
          {/* Robot Background */}
          <div className="w-full h-full opacity-30" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='30' r='20' fill='none' stroke='%2306b6d4' stroke-width='0.5'/%3E%3Crect x='35' y='50' width='30' height='40' fill='none' stroke='%2306b6d4' stroke-width='0.5'/%3E%3Cpath d='M40 90 L30 100 M60 90 L70 100' stroke='%2306b6d4' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '400px 400px',
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat',
              filter: 'blur(1px)',
            }}
          />
          <CircuitBackground />
        </motion.div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(1)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
              }}
              transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              }}
            />
            ))}
        </div>

        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{
            translateX: mousePosition.x,
            translateY: mousePosition.y + scrollY * 0.3,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:text-[6rem] sm:text-[4rem] text-6xl font-bold mb-4 text-white relative animate-pulse"
          >
            Welcome to Robonauts
            <motion.div
              className="absolute -inset-2 bg-cyan-500/20 -z-10 blur-xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.10, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-3xl mb-8 text-textPrimary"
          >
            Innovate. Create. Automate.
          </motion.p>
        
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="mt-16"
          >
            <ChevronDown className="w-12 h-12 text-white" />
            
          </motion.div>
          
        </motion.div>
        <HomePageButton />
      </div>

      {/* Activities Section */}
      <div 
        ref={activitiesRef}
        className="relative z-10 min-h-screen py-24 px-4"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.9), #1a1a1a)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-block mb-4 px-6 py-2 rounded-full bg-zinc-800 text-cyan-400"
            >
              Explore Our Activities
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
            >
              Club Activities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Join our vibrant community and participate in various exciting activities 
              that will enhance your robotics journey
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{ perspective: "1000px" }}
          >
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  animate={{
                    rotateY: hoveredIndex === index ? 360 : 0
                  }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <activity.icon className="text-cyan-400 w-14 h-14" />
                </motion.div>

                <span className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full mb-4">
                  {activity.highlight}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                <p className="text-gray-400 mb-4">{activity.description}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-center gap-2 text-sm text-cyan-400">
                    <Star className="w-4 h-4" />
                    {activity.stats}
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(1)].map((_, i) => (
                      <Zap
                        key={i}
                        className="text-cyan-400/30 w-6 h-6 absolute"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                      />
                    ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
             <Link to="/community">Join Our Club</Link>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}