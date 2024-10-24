import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Wrench, Rocket, Trophy, Users, Zap, ArrowRight, Star } from "lucide-react"

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
]

export default function Component() {
  const controls = useAnimation()
  const ref = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 10,
      z: 50,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  }

  return (
    <div className="min-h-auto py-24 flex items-center justify-center p-4 backdrop-blur-lg bg-gradient-to-b from-black to-zinc-900" ref={ref}
    style={{
      background: "linear-gradient(to bottom, black, #1a1a1a)",
    }}
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-zinc-800 text-cyan-400"
          >
            Explore Our Activities
          </motion.div>
          <motion.h2
            className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
          >
            Club Activities
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join our vibrant community and participate in various exciting activities 
            that will enhance your robotics journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform-gpu"
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                animate={{
                  rotateY: hoveredIndex === index ? 360 : 0
                }}
                transition={{ duration: 0.6 }}
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
                transition={{ duration: 0.3 }}
              />

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(3)].map((_, i) => (
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            Join Our Community
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}