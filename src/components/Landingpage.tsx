import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Wrench, 
  Rocket, 
  Trophy, 
  Users, 
  Zap, 
  ArrowRight, 
  Star, 
  Bell, 
  Calendar, 
  Clock, 
  AlertCircle,
} from 'lucide-react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import useMousePosition from './hooks/mousePosition';
import UpcomingCompetitions from './UpcomingCompetitions';

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
    {[...Array(1)].map((_, i) => (
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

// Static circuit images at corners
const CodeLinesEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left corner circuit image */}
      <div className="absolute left-0 bottom-0 w-64 h-64 opacity-30">
        <img 
          src="/images/ras.png" 
          alt="Circuit" 
          className="w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0 0 8px rgba(0, 200, 255, 0.6))' }}
        />
      </div>
      
      {/* Right corner circuit image */}
      <div className="absolute right-0 top-0 w-64 h-64 opacity-30">
        <img 
          src="/images/line2.png" 
          alt="Red Circuit" 
          className="w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0 0 8px rgba(255, 100, 100, 0.6))' }}
        />
      </div>
    </div>
  );
};

// Notification data
const notifications = [

  {
    id: 2,
    type: 'event',
    title: 'Workshop Registration Open',
    message: 'Registration for the Arduino and Linux workshop is now open. Limited seats available!',
    date: 'April 5-10, 2025',
    link: '/courses'
  },
  {
    id: 1,
    type: 'alert',
    title: 'FE Recruitment',
    message: 'Recruitment for Freshers is open. Apply now!',
    date: 'April 1, 2025',
    link: '/community'
  },
];

// Live and upcoming events
const liveEvents = [
  {
    id: 1,
    title: 'Recruitment of Freshers "Interviews of FE and SE"',
    isLive: true,
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    location: 'Innovation And Robotics Lab',
    participants: '24 Members and Counting ',
    image: '/images/robowars.png',
    link: '/events/robowars',
    date: '2025-04-01T10:00:00', // Date for countdown
    isSoon: false
  }
];

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const activitiesRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { x, y } = useMousePosition();
  const navigate = useNavigate();
  
  // For notification section
  const [activeNotification, setActiveNotification] = useState(0);
  
  // Auto-rotate notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % notifications.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  // Calculate normalized mouse position for parallax effect
  const normalizedMousePosition = {
    x: (x / window.innerWidth) * 20,
    y: (y / window.innerHeight) * 20,
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        {/* Background with dynamic circuit patterns */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
          <CodeLinesEffect />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 70%)`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              translateY: scrollY * 0.4
            }}
          />
          <CircuitBackground />
          {/* Add animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{
            translateX: normalizedMousePosition.x,
            translateY: normalizedMousePosition.y + scrollY * 0.3,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:text-[6rem] sm:text-[4rem] text-6xl font-bold mb-4 text-white relative"
          >
            <div className="flex items-center justify-center flex-wrap gap-2">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Welcome to</span>
              <img src="/robonauts-logo.png" alt="Robonauts" className="ml-2 h-16 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
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
            className="text-2xl md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-medium text-center px-4"
          >
           Revolutionizing Through Bold Innovation.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl mb-48 text-neutral-400 opacity-60 max-w-2xl text-center px-4"
          >
          A Thrilling Journey into the Realm of Robotics & Automation
          </motion.p>
        
          {/* Notification Bar - Centered on hero section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute bottom-32 w-full max-w-4xl mx-auto px-4 z-10"
          >
            <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
              <div className="flex items-center justify-center bg-gradient-to-r from-cyan-900/80 to-blue-900/80 px-4 py-3">
                <Bell className="w-5 h-5 text-cyan-400 mr-2 animate-pulse" />
                <h3 className="text-white font-semibold tracking-wide">Important Updates</h3>
              </div>
              
              <div className="relative h-32 md:h-28 overflow-hidden">
                <AnimatePresence mode="wait">
                  {notifications.map((notification, index) => (
                    index === activeNotification && (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 p-4 flex items-start"
                      >
                        <div className="flex-shrink-0 mr-3">
                          {notification.type === 'important' && <AlertCircle className="w-6 h-6 text-red-400" />}
                          {notification.type === 'event' && <Calendar className="w-6 h-6 text-green-400" />}
                          {notification.type === 'alert' && <Bell className="w-6 h-6 text-yellow-400" />}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start flex-wrap gap-1">
                            <h4 className="text-white font-medium truncate">{notification.title}</h4>
                            <span className="text-xs bg-cyan-500/20 px-2 py-0.5 rounded-full text-cyan-300 whitespace-nowrap">{notification.date}</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1 line-clamp-2">{notification.message}</p>
                          <motion.div 
                            className="mt-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <a href={notification.link} className="text-xs flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                              Learn more <ArrowRight className="ml-1 w-3 h-3" />
                            </a>
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Notification indicators */}
              <div className="px-4 py-2 flex justify-center gap-2">
                {notifications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveNotification(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeNotification 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-zinc-600 hover:bg-zinc-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll Button */}
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute bottom-8"
          >
            <motion.button 
              className="group bg-zinc-900/50 backdrop-blur-sm p-3 rounded-full border border-zinc-800 hover:border-cyan-500/50 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
            >
              <ChevronDown className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-500/20 -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Live Event Banner with Countdown */}
      {liveEvents.length > 0 && (
        <div className="relative z-10 bg-gradient-to-r from-red-900/20 to-purple-900/20 py-3 sm:py-4 px-3 sm:px-4 border-t border-b border-red-500/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-red-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-md sm:rounded-lg overflow-hidden">
                    <img 
                      src={liveEvents[0].image} 
                      alt="Live Event" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {liveEvents[0].isLive && (
                    <div className="absolute -top-1 -right-1 bg-red-500 rounded-full px-2 py-1 text-xs font-medium text-white flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      LIVE
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-medium text-white truncate">
                    {liveEvents[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {liveEvents[0].location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                  <span className="text-gray-200">{liveEvents[0].startTime} - {liveEvents[0].endTime}</span>
                </div>
                <div className="hidden sm:flex w-px h-6 bg-red-500/30" />
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                  <span className="text-gray-200">{liveEvents[0].participants}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

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
                //whileHover="hover"
                //viewport={{ once: true }}
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
            <button onClick={() => navigate('/community')} className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            Join Our Club
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Competitions Section */}
      <UpcomingCompetitions />

    </div>
  );
}