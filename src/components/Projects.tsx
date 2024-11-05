import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll } from 'framer-motion';
import { Camera, Shield, Sword, Video, Image as ImageIcon, Box } from 'lucide-react';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

import { ReactNode } from "react";

interface ProjectSectionProps {
  children: ReactNode;
  className?: string;

  bgVariant: string;

  setBgVariant: React.Dispatch<React.SetStateAction<string>>;

  cursorText: string;

  setCursorText: React.Dispatch<React.SetStateAction<string>>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectSection = ({ children, className = "", onMouseEnter, onMouseLeave }: ProjectSectionProps) => (
  <div className={`relative ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</div>
);

interface ProjectsProps {
  setBgVariant: React.Dispatch<React.SetStateAction<string>>;
  setCursorText: React.Dispatch<React.SetStateAction<string>>;
}

const Projects = ({ setBgVariant, setCursorText, }: ProjectsProps) => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  useScroll({ container: horizontalRef });

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // direction: 'horizontal',
      // gestureDirection: 'horizontal',
      // smooth: true,
      // smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // GSAP ScrollTrigger setup
    const sections = gsap.utils.toArray(".project-section");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${window.innerWidth * (sections.length - 1)}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const projects = [
    {
      title: "Automation Drone",
      description: "Advanced security drone equipped with AI-powered surveillance and real-time threat detection. Featuring 4K thermal imaging and autonomous patrol capabilities.",
      gradient: "from-zinc-950 to-blue-900/20",
      icons: [
        { icon: Shield, color: "text-blue-400" },
        { icon: Camera, color: "text-blue-400" }
      ],
      stats: [
        { label: 'Range', value: '5km' },
        { label: 'Flight Time', value: '45min' },
        { label: 'AI Detection', value: '99.9%' }
      ],
      image:"/sih-2022 winner.jpg",
    },
    {
      title: "Combat Robot",
      description: "State-of-the-art combat robot designed for competitive battles. Features high-torque motors, reinforced armor, and advanced weapon systems.",
      gradient: "from-indigo-950 to-slate-900/10",
      icons: [
        { icon: Sword, color: "text-red-400" }
      ],
      stats: [
        { label: 'Power', value: '2000W' },
        { label: 'Weight', value: '250lbs' },
        { label: 'Speed', value: '20mph' }
      ],
      image: "/iitb-Agri-Achivement.jpeg"
    },
    {
      title: "Content Creator Drone",
      description: "Professional-grade content creation drone with 8K camera system, 3D scanning capabilities, and advanced stabilization for perfect shots.",
      gradient: "from-secondary to-slate-900/10",
      icons: [
        { icon: Video, color: "text-purple-400" },
        { icon: ImageIcon, color: "text-purple-400" },
        { icon: Box, color: "text-purple-400" }
      ],
      stats: [
        { label: 'Resolution', value: '8K' },
        { label: 'Stabilization', value: '6-Axis' },
        { label: 'Storage', value: '1TB' }
      ],
      image:"/FPV drone racing.jpeg"
    },
    {
      title:"Nitro Car Racing",
      description:"",
      gradient:"from-secondary to-slate-900/10",
      icons:[],
      stats:[],
      image:"/FPV nitro car racing.jpeg"
    },
    {
      title:"NIT Trichy Sundroid",
      description:"",
      gradient:"from-secondary to-slate-900/10",
      icons:[],
      stats:[],
      image:"/NIT-Trichy-Sumdroid.jpeg"
    }

  ];

  function mouseEnter() {
   setBgVariant('nameCursor');
   setCursorText('Achievements');
  }

  function mouseLeave() {
    setBgVariant("default");
    setCursorText('');
  }

  return (
    <div ref={containerRef} id="projects" className="h-screen overflow-hidden bg-black">
      <div 
        ref={horizontalRef}
        className="flex h-screen"
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project, index) => (
          <ProjectSection 
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          key={index}
          className="project-section w-screen h-screen flex-shrink-0"
          bgVariant={project.gradient}
          setBgVariant={setBgVariant}
          cursorText="View Project"
          setCursorText={setCursorText}
          >
            <div className="relative h-full w-full">
              {/* Image with gradient overlay */}
              <div className="absolute inset-0 w-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black translate-x-[80%]" />
              </div>

              {/* Content */}
              <motion.div 
                className="absolute right-0 w-full h-full flex items-center p-24"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="max-w-full">
                  {/* Project number */}
                  <motion.span 
                    className="text-8xl font-bold text-white/20"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>

                  {/* Title */}
                  <motion.h2 
                    className="text-[8rem] font-bold text-white mt-4 tracking-tight"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {project.title}
                  </motion.h2>

                  {/* Icons */}
                  <motion.div 
                    className="flex gap-6 mt-8"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {project.icons.map((IconObj, i) => (
                      <IconObj.icon 
                        key={i}
                        className={`w-8 h-8 ${IconObj.color}`}
                      />
                    ))}
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-400 text-lg mt-8 leading-relaxed max-w-xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Stats */}
                  <motion.div 
                    className="grid grid-cols-3 gap-8 mt-12"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </ProjectSection>
        ))}
      </div>
    </div>
  );
};

export default Projects;