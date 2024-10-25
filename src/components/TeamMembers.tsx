import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ChevronRight } from 'lucide-react';

// Enhanced intersection observer hook with more options and better performance
const useInView = (options = {
  threshold: [0.2, 0.4, 0.6, 0.8],
  rootMargin: '50px',
  freezeOnceVisible: false
}) => {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const frozen = useRef(false);

  const callback = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (options.freezeOnceVisible && frozen.current) return;
    setInView(entry.isIntersecting);
    setEntry(entry);
    if (entry.isIntersecting && options.freezeOnceVisible) {
      frozen.current = true;
    }
  }, [options.freezeOnceVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: options.threshold,
      rootMargin: options.rootMargin,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options.threshold, options.rootMargin]);

  return [ref, inView, entry] as const;
};

// Team member data structure
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// Optimized team members data with memoization
const teamMembers: TeamMember[] = [
  {
    name: 'Dr.',
    role: 'Faculty Advisor',
    image: '/api/placeholder/400/400',
    bio: 'Leading robotics research with over 10 years of experience in autonomous systems.',
    expertise: ['Robotics', 'AI', 'Control Systems'],
    achievements: ['Published 20+ Papers', 'Led 5 Major Projects', 'Industry Partnerships'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'faculty@example.com'
    }
  },
  {
    name: 'Praharshraj Singh',
    role: 'Club President',
    image: '/api/placeholder/400/400',
    bio: 'Passionate about building the next generation of robotics engineers.',
    expertise: ['Project Management', 'Team Leadership', 'Robot Design'],
    achievements: ['Best Project Award', 'Robotics Hackathon Winner', 'Research Publication'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'president@example.com'
    }
  },
  {
    name: 'og',
    role: 'Technical Lead',
    image: '/api/placeholder/400/400',
    bio: 'Specialized in embedded systems and computer vision applications.',
    expertise: ['Computer Vision', 'ROS', 'Deep Learning'],
    achievements: ['Tech Innovation Award', 'ML Competition Winner', 'Patent Filing'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'tech@example.com'
    }
  },
  {
    name: 'Omkar Pol',
    role: 'Project Manager',
    image: '/api/placeholder/400/400',
    bio: 'Coordinating innovative robotics projects and team collaborations.',
    expertise: ['Agile', 'Technical Planning', 'Systems Integration'],
    achievements: ['Project Excellence Award', 'Team Leadership Award', 'Industry Collaboration'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'project@example.com'
    }
  }
];

// Memoized card animations
const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: (i: number) => ({ 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      type: "spring",
      stiffness: 100
    }
  }),
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut"
    }
  }
};

// Memoized achievement component
interface AchievementProps {
  text: string;
}

const Achievement = memo(({ text }: AchievementProps) => (
  <div className="flex items-center gap-2 text-sm text-cyan-400/80">
    <ChevronRight className="w-4 h-4" />
    <span>{text}</span>
  </div>
));

// Memoized team member card component
interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  inView: boolean;
  intersectionRatio?: number;
}

const TeamMemberCard = memo(({ member, index, inView, intersectionRatio }: TeamMemberCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipProgress = useRef(0);

  // Optimize flip animation based on intersection ratio
  useEffect(() => {
    if (intersectionRatio) {
      flipProgress.current = intersectionRatio;
    }
  }, [intersectionRatio]);

  return (
    <motion.div
      className=" w-full h-96 perspective-1000"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="w-full h-full relative preserve-3d cursor-pointer"
          animate={{ 
            rotateY: isFlipped ? 180 : 0,
            scale: isFlipped ? 1.05 : 1
          }}
          transition={{ 
            duration: 0.6, 
            type: "spring", 
            stiffness: 100,
            damping: 15
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="h-full bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 rounded-xl p-6 flex flex-col items-center justify-center border border-zinc-700/50 backdrop-blur-sm shadow-xl">
              <motion.div 
                className="relative w-32 h-32 mb-6"
                animate={{ 
                  rotateY: flipProgress.current * 360 
                }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-lg opacity-20" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover relative z-10 border-2 border-cyan-500/20"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
              <div className="flex gap-2 flex-wrap justify-center">
                {member.expertise.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <motion.div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-400 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click to flip
              </motion.div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="h-full bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 rounded-xl p-6 flex flex-col items-center border border-zinc-700/50 backdrop-blur-sm shadow-xl">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-white mb-2">About {member.name}</h4>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
              
              <div className="w-full space-y-2 mb-4">
                <h5 className="text-cyan-400 font-medium text-sm mb-2">Achievements</h5>
                {member.achievements.map((achievement, i) => (
                  <Achievement key={i} text={achievement} />
                ))}
              </div>
              
              <div className="mt-auto w-full">
                <div className="flex justify-center gap-4">
                  {member.social.github && (
                    <motion.a 
                      href={member.social.github}
                      className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 text-cyan-400" />
                    </motion.a>
                  )}
                  {member.social.linkedin && (
                    <motion.a 
                      href={member.social.linkedin}
                      className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5 text-cyan-400" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a 
                      href={member.social.twitter}
                      className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-5 h-5 text-cyan-400" />
                    </motion.a>
                  )}
                  {member.social.email && (
                    <motion.a 
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});

const TeamMembers = () => {
  const [ref, inView, entry] = useInView({
    threshold: [0.2, 0.4, 0.6, 0.8],
    rootMargin: '50px',
    freezeOnceVisible: true
  });

  return (
    <section className="py-24 min-h-screen bg-black/80 backdrop-blur-lg relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-zinc-800/50 text-cyan-400 backdrop-blur-sm"
          >
            Meet Our Team
          </motion.div>
          <motion.h2
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The Minds Behind Our Success
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our team of dedicated professionals brings together expertise in robotics,
            artificial intelligence, and engineering to drive innovation forward.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
              inView={inView}
              intersectionRatio={entry?.intersectionRatio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;