"use client"

import React from 'react'
import { Book, Video, Link } from 'lucide-react'
import { motion } from 'framer-motion'

interface Resource {
  title: string
  type: 'book' | 'video' | 'resource'
  description: string
}

const resources: Resource[] = [
  { title: 'Introduction to Robotics', type: 'book', description: 'Click to access this book.' },
  { title: 'Advanced AI for Robotics', type: 'video', description: 'Click to access this video.' },
  { title: 'ROS Tutorial', type: 'resource', description: 'Click to access this resource.' },
  { title: 'Machine Learning for Robotics', type: 'book', description: 'Click to access this book.' },
  { title: 'Computer Vision Techniques', type: 'video', description: 'Click to access this video.' },
  { title: 'Arduino Projects for Beginners', type: 'resource', description: 'Click to access this resource.' },
]

const ResourceCard: React.FC<Resource> = ({ title, type, description }) => {
  const Icon = type === 'book' ? Book : type === 'video' ? Video : Link

  return (
    <motion.div
      className="bg-purple-900 bg-opacity-50 rounded-lg p-6 flex flex-col space-y-2 hover:bg-purple-800 hover:bg-opacity-60 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-3">
        <Icon className="w-6 h-6 text-purple-200" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-purple-100">{description}</p>
    </motion.div>
  )
}

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-purple-50  py-12 px-4 sm:px-6 lg:px-8 sm:pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-gradient text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         {"<"} Code : Resources{"/>"}
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {resources.map((resource, index) => (
            <motion.div key={index} variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}>
              <ResourceCard {...resource} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ResourcesPage