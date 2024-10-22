import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll } from 'framer-motion';
import { Camera, Shield, Sword, Video, Image as ImageIcon, Box } from 'lucide-react';
import ProjectSection from './projects/ProjectSection';
import ParallaxBackground from './projects/ParallaxBackground';
import DroneModel from './projects/DroneModel';
import StatsOverlay from './projects/StatsOverlays';
import BattleBot from './projects/BattleBot';
import ContentDrone from './projects/ContentDrone';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const horizontalContainerRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({ container: horizontalContainerRef });

  useEffect(() => {
    const sections = gsap.utils.toArray(".horizontal-section");
    const horizontalContainer = horizontalContainerRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalContainer,
        start: "top top",
        pin: true,
        scrub: 1,
        end: () => horizontalContainer ? `+=${horizontalContainer.offsetWidth - window.innerWidth}` : '+=0',
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    const container = horizontalContainerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollTimeout: number;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (!isScrolling) {
        isScrolling = true;
        
        const scrollSpeed = 100;
        const delta = e.deltaY || e.deltaX;
        
        const targetScroll = container.scrollLeft + (delta * scrollSpeed / 100);
        const startScroll = container.scrollLeft;
        const startTime = performance.now();
        const duration = 200;

        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          
          container.scrollLeft = startScroll + (targetScroll - startScroll) * easeProgress;

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);

        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
          isScrolling = false;
        }, 150);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <motion.div 
        ref={horizontalContainerRef} 
        className="flex bg-gradient-to-b from-indigo-950 to-black"
        style={{ width: "300vw" }}
      >
        {/* Security Drone Section */}
        <ProjectSection className="horizontal-section w-screen h-screen flex-shrink-0 bg-gradient-to-br from-slate-900 to-slate-800">
          <ParallaxBackground type="security" progress={scrollXProgress} />
          <motion.div 
            className="relative z-10 flex items-center justify-center w-screen h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-4xl sm:w-[70rem] mx-auto flex items-center gap-12 sm:gap-48">
              <DroneModel className="w-1/2" />
              <motion.div 
                className="space-y-6 w-1/2"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-white tracking-tight">
                  Automation Drone
                </h2>
                <motion.div 
                  className="flex gap-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Shield className="w-6 h-6 text-blue-400" />
                  <Camera className="w-6 h-6 text-blue-400" />
                </motion.div>
                <p className="text-gray-300 leading-relaxed">
                  Advanced security drone equipped with AI-powered surveillance and real-time threat detection. 
                  Featuring 4K thermal imaging and autonomous patrol capabilities.
                </p>
                <StatsOverlay 
                  stats={[
                    { label: 'Range', value: '5km' },
                    { label: 'Flight Time', value: '45min' },
                    { label: 'AI Detection', value: '99.9%' }
                  ]}
                />
              </motion.div>
            </div>
          </motion.div>
        </ProjectSection>

        {/* Battlebots Section */}
        <ProjectSection className="horizontal-section w-screen h-screen flex-shrink-0 bg-gradient-to-br from-red-900 to-slate-900">
          <ParallaxBackground type="battle" progress={scrollXProgress} />
          <motion.div 
            className="relative z-10 flex items-center justify-center w-screen h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto px-6 flex items-center gap-12">
              <motion.div 
                className="space-y-6 w-1/2"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-white tracking-tight">
                  Combat Robot
                </h2>
                <motion.div 
                  className="flex gap-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Sword className="w-6 h-6 text-red-400" />
                </motion.div>
                <p className="text-gray-300 leading-relaxed">
                  State-of-the-art combat robot designed for competitive battles. 
                  Features high-torque motors, reinforced armor, and advanced weapon systems.
                </p>
                <StatsOverlay 
                  stats={[
                    { label: 'Power', value: '2000W' },
                    { label: 'Weight', value: '250lbs' },
                    { label: 'Speed', value: '20mph' }
                  ]}
                />
              </motion.div>
              <BattleBot className="w-1/2" />
            </div>
          </motion.div>
        </ProjectSection>

        {/* Content Creation Section */}
        <ProjectSection className="horizontal-section w-screen h-screen flex-shrink-0 bg-gradient-to-br from-purple-900 to-slate-900">
          <ParallaxBackground type="content" progress={scrollXProgress} />
          <motion.div 
            className="relative z-10 flex items-center justify-center w-screen h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto px-6 flex items-center gap-12">
              <ContentDrone className="w-1/2" />
              <motion.div 
                className="space-y-6 w-1/2"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-white tracking-tight">
                  Content Creator Drone
                </h2>
                <motion.div 
                  className="flex gap-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Video className="w-6 h-6 text-purple-400" />
                  <ImageIcon className="w-6 h-6 text-purple-400" />
                  <Box className="w-6 h-6 text-purple-400" />
                </motion.div>
                <p className="text-gray-300 leading-relaxed">
                  Professional-grade content creation drone with 8K camera system, 
                  3D scanning capabilities, and advanced stabilization for perfect shots.
                </p>
                <StatsOverlay 
                  stats={[
                    { label: 'Resolution', value: '8K' },
                    { label: 'Stabilization', value: '6-Axis' },
                    { label: 'Storage', value: '1TB' }
                  ]}
                />
              </motion.div>
            </div>
          </motion.div>
        </ProjectSection>
      </motion.div>
    </section>
  );
};

export default Projects;