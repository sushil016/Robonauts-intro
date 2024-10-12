"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Wrench, Rocket, Trophy, Users, Zap } from "lucide-react"

const activities = [
  { icon: Wrench, title: "Robotics Workshops", description: "Hands-on learning experiences" },
  { icon: Rocket, title: "Projects", description: "Build innovative robots and systems" },
  { icon: Trophy, title: "Competitions", description: "Showcase your skills in robotics contests" },
  { icon: Users, title: "Mentorship", description: "Learn from experienced roboticists" },
]

export default function Component() {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  return (
    <div className="min-h-auto py-24 flex items-center justify-center p-4 " ref={ref}>
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-4xl font-bold text-center text-gradient mb-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
          }}
        >
          Club Activities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              className="bg-gradient-to-br from-purple-800 to-blue-950 rounded-lg p-6 flex flex-col items-center text-center relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
            >
              <activity.icon className="text-cyan-400 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
              <p className="text-gray-300">{activity.description}</p>
              <AnimatePresence>
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                >
                  {[...Array(1)].map((_, i) => (
                    <Zap
                      key={i}
                      className="text-cyan-400 w-6 h-6 absolute"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 360}deg)`,
                      }}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}