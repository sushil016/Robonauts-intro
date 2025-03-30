import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';

const AIMLImpact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Reference for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    // Initialize scrolling variables
    let scrollHeight = scrollContainer.scrollHeight;
    let scrollPosition = 0;
    let animationFrameId: number;
    const scrollSpeed = 0.5; // pixels per frame

    // Animation function for smooth scrolling
    const animate = () => {
      if (!isHovering && scrollContainer) {
        // Update scroll position
        scrollPosition += scrollSpeed;
        
        // Reset position when reaching the end to create infinite loop
        if (scrollPosition >= scrollHeight / 2) {
          scrollPosition = 0;
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop = scrollPosition;
        }
      }
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);
  
  // Handle hover events to pause scrolling
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const handleTouchStart = () => setIsHovering(true);
  const handleTouchEnd = () => setIsHovering(false);

  // AI/ML applications in robotics
  const applications = [
    {
      title: "Computer Vision",
      description: "Enables robots to perceive and understand their environment through visual data processing.",
      icon: "👁️",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Reinforcement Learning",
      description: "Allows robots to learn optimal behaviors through trial and error interactions.",
      icon: "🧠",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Natural Language Processing",
      description: "Facilitates human-robot interaction through voice commands and conversational interfaces.",
      icon: "💬",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Predictive Maintenance",
      description: "Uses sensor data and ML algorithms to predict when equipment requires maintenance.",
      icon: "⚙️",
      color: "from-orange-500 to-amber-600"
    },
    {
      title: "Autonomous Navigation",
      description: "Enables robots to navigate environments and avoid obstacles without human control.",
      icon: "🧭",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Smart Robotics",
      description: "Combines multiple AI technologies to create adaptable, context-aware robotic systems.",
      icon: "🤖",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Neural Networks",
      description: "Power sophisticated decision-making capabilities in advanced robotic systems.",
      icon: "🔄",
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <div className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-4 px-4 sm:px-6 py-2 rounded-full bg-zinc-800 text-cyan-400">
            Future of Robotics
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            AI & Machine Learning in Robotics
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            Artificial Intelligence and Machine Learning are revolutionizing the field of robotics, 
            enabling machines to learn from experience, adapt to new inputs, and perform human-like tasks.
          </p>
        </motion.div>

        {/* Blue-bordered transparent card container */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm shadow-lg shadow-blue-500/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Enhanced Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 aspect-[4/3]">
                <img 
                  src="/images/ai-robotics-illustration.jpg" 
                  alt="AI in Robotics" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                
                {/* Overlay with mesh gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-purple-900/50 to-transparent mix-blend-overlay"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">AI & Robotics</h3>
                  <p className="text-sm sm:text-base text-gray-200 drop-shadow-md">
                    Transforming industries through intelligent automation and data-driven decision making.
                  </p>
                  
                  {/* Tech elements decoration */}
                  <div className="absolute top-4 right-4 flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30">
                      <span className="text-base sm:text-lg">🤖</span>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
                      <span className="text-base sm:text-lg">🧠</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-5 -right-5 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5] 
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5] 
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Right side - Applications with improved auto-scroll */}
            <div className="h-[400px] sm:h-[500px] relative">
              {/* Gradient overlays for smooth scrolling effect */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-zinc-900/90 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-900/90 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrollable container with infinite scroll */}
              <div 
                ref={scrollContainerRef}
                className="h-full overflow-y-scroll hide-scrollbar"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Display the content twice to create seamless loop */}
                <div className="space-y-4 sm:space-y-6 pr-4">
                  {/* First set of applications */}
                  {applications.map((app, index) => (
                    <motion.div
                      key={`first-${app.title}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
                      className="bg-zinc-900/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl flex items-start gap-3 sm:gap-5 border border-zinc-800 hover:border-purple-900/50 transition-all duration-300"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center text-xl sm:text-2xl`}>
                        {app.icon}
                      </div>
                      
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium text-white mb-1 sm:mb-2">{app.title}</h3>
                        <p className="text-sm sm:text-base text-gray-400">{app.description}</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Fact box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-6 sm:mt-8 mb-8 sm:mb-12"
                  >
                    <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/20">
                      <h4 className="text-base sm:text-lg font-medium text-purple-400 mb-2">Did You Know?</h4>
                      <p className="text-sm sm:text-base text-gray-300">
                        More than 80% of robotics innovations now incorporate some form of machine learning,
                        with computer vision being the most widely implemented AI technology in modern robots.
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Second set of applications (duplicate for seamless scroll) */}
                  {applications.map((app, index) => (
                    <motion.div
                      key={`second-${app.title}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
                      className="bg-zinc-900/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl flex items-start gap-3 sm:gap-5 border border-zinc-800 hover:border-purple-900/50 transition-all duration-300"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center text-xl sm:text-2xl`}>
                        {app.icon}
                      </div>
                      
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium text-white mb-1 sm:mb-2">{app.title}</h3>
                        <p className="text-sm sm:text-base text-gray-400">{app.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Visual indicator for hover pause */}
              {isHovering && (
                <div className="absolute top-4 right-4 bg-purple-900/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                  Scroll Paused
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS for hiding scrollbar but allowing scrolling
const styles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// Inject the CSS to the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}

export default AIMLImpact;
