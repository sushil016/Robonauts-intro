import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

// Mentor data structure
interface Mentor {
  name: string;
  image?: string;
  bio?: string;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

// Mentor data
const mentors: Mentor[] = [
  {
    name: 'Prof. Jagdish Mandare',
    image: '/mentors/jagdish.png', // Path to the first mentor image
    bio: 'Expert in Robotics and Automation',
    social: {
      linkedin: 'https://www.linkedin.com/in/jagdish-mandhare-609b4071/',
      email: 'jagdish.mandare@example.com'
    }
  },
  {
    name: 'Dr. Vaishali Agme',
    image: '/mentors/agme.png', // Path to the second mentor image
    bio: 'Specializing in AI and Machine Learning',
    social: {
      linkedin: 'https://www.linkedin.com/in/dr-vaishali-agme-ghodke-9577572a4/',
      email: 'vaishali.agme@example.com'
    }
  },
  {
    name: 'Prof. MM Bhule',
    image: '/mentors/bhule.png', // Path to the third mentor image
    bio: 'Expert in Control Systems',
    social: {
      linkedin: '#',
      email: 'mm.bhule@example.com'
    }
  },
  {
    name: 'Prof. Dilip Radkar',
    image: '/mentors/radkar.png', // Placeholder for the fourth mentor
    bio: 'Specializing in Embedded Systems',
    social: {
      linkedin: 'https://www.linkedin.com/in/dilip-radkar-a8578226/',
      email: 'dilip.radkar@example.com'
    }
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 255, 0.2)",
    transition: {
      duration: 0.3
    }
  }
};

const Mentors = () => {
  // State for hover effects
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-24 px-4 relative z-10" style={{
      background: "linear-gradient(to bottom, #1a1a1a, rgba(0,0,0,0.9))"
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-zinc-800 text-cyan-400"
          >
            Meet Our Mentors
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          >
            Elevating Ambitions: Our Inspiring Mentor Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-3xl mx-auto"
          >
            At Robonauts, we are driven by our mission to help people succeed in the tech industry. 
            Our team of experienced professionals are dedicated to helping people develop the knowledge, 
            skills and confidence to take the next step in their tech career.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-zinc-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={mentor.image || '/api/placeholder/400/400'} 
                  alt={mentor.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-2">{mentor.name}</h3>
                {mentor.bio && <p className="text-gray-400 text-sm mb-4">{mentor.bio}</p>}
                
                <div className="flex items-center gap-3">
                  {mentor.social?.linkedin && (
                    <a href={mentor.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {mentor.social?.email && (
                    <a href={`mailto:${mentor.social.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Mentors;
