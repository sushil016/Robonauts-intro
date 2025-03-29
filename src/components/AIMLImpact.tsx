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
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  
  // Auto-scroll effect - improved for smoother, continuous scrolling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    // Clone the content for seamless looping
    const originalContent = scrollContainer.querySelector('.scroll-content');
    if (!originalContent) return;
    
    // Create the clone for infinite scrolling
    const clone = originalContent.cloneNode(true) as HTMLElement;
    clone.setAttribute('aria-hidden', 'true');
    scrollContainer.appendChild(clone);
    
    // Scroll animation variables
    let animationId: number;
    let startTime: number;
    const scrollDuration = 20000; // 20 seconds for one full scroll cycle
    const totalHeight = originalContent.scrollHeight;
    
    // Smooth animation function
    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!shouldAutoScroll) {
        startTime = timestamp - (timestamp % scrollDuration);
      }
      
      const elapsed = (timestamp - startTime) % scrollDuration;
      const progress = elapsed / scrollDuration;
      
      if (scrollContainer) {
        // Calculate position based on total content height
        scrollContainer.scrollTop = progress * totalHeight;
      }
      
      animationId = requestAnimationFrame(animateScroll);
    };
    
    // Start animation
    animationId = requestAnimationFrame(animateScroll);
    
    // Pause scrolling when user interacts
    const handleMouseEnter = () => setShouldAutoScroll(false);
    const handleMouseLeave = () => setShouldAutoScroll(true);
    const handleTouchStart = () => setShouldAutoScroll(false);
    const handleTouchEnd = () => setShouldAutoScroll(true);
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('touchstart', handleTouchStart);
        scrollContainer.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [shouldAutoScroll]);

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
    <div className="relative z-10 py-24 px-4 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-zinc-800 text-cyan-400">
            Future of Robotics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            AI & Machine Learning in Robotics
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Artificial Intelligence and Machine Learning are revolutionizing the field of robotics, 
            enabling machines to learn from experience, adapt to new inputs, and perform human-like tasks.
          </p>
        </motion.div>

        {/* Blue-bordered transparent card container */}
        <div className="p-6 md:p-8 rounded-2xl border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm shadow-lg shadow-blue-500/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">AI & Robotics</h3>
                  <p className="text-gray-200 drop-shadow-md">
                    Transforming industries through intelligent automation and data-driven decision making.
                  </p>
                  
                  {/* Tech elements decoration */}
                  <div className="absolute top-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30">
                      <span className="text-lg">🤖</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
                      <span className="text-lg">🧠</span>
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
            <div className="h-[500px] relative">
              {/* Gradient overlays for smooth scrolling effect */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-zinc-900/90 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-900/90 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrollable container with infinite scroll */}
              <div 
                ref={scrollContainerRef}
                className="h-full overflow-y-scroll hide-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
              >
                {/* Wrapping content in a container for cloning */}
                <div className="scroll-content">
                  <div className="space-y-6 pr-4">
                    {applications.map((app, index) => (
                      <motion.div
                        key={app.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
                        className="bg-zinc-900/80 backdrop-blur-sm p-5 rounded-xl flex items-start gap-5 border border-zinc-800 hover:border-purple-900/50 transition-all duration-300"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl`}>
                          {app.icon}
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-medium text-white mb-2">{app.title}</h3>
                          <p className="text-gray-400">{app.description}</p>
                        </div>
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="mt-8 mb-12"
                    >
                      <div className="p-5 rounded-xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/20">
                        <h4 className="text-lg font-medium text-purple-400 mb-2">Did You Know?</h4>
                        <p className="text-gray-300">
                          More than 80% of robotics innovations now incorporate some form of machine learning,
                          with computer vision being the most widely implemented AI technology in modern robots.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Clone will be inserted here dynamically by useEffect */}
              </div>
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
