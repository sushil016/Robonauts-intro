import { motion } from "framer-motion";
import { useState } from "react";

const AchievementsPage = () => {
  const [achievements] = useState([
    {
      id: 1,
      title: 'FPV Drone Racing',
      image: '/images/achievements/fpv-drone.jpg',
      description: 'First place in national FPV drone racing competition, demonstrating exceptional piloting skills and technical expertise.',
      certificate: '/images/achievements/fpv-cert.jpg',
      date: 'March 2023'
    },
    {
      id: 2,
      title: 'RC Nitro Racing Championship',
      image: '/images/achievements/rc-racing.jpg',
      description: 'National champions in RC Nitro Racing, showcasing superior racing strategy and vehicle control.',
      certificate: '/images/achievements/rc-cert.jpg',
      date: 'April 2023'
    },
    {
      id: 3,
      title: 'Robotics Innovation Summit',
      image: '/images/achievements/team-photo.jpg',
      description: 'Our team won first place for innovative robotics solutions in automation and control systems.',
      participants: ['Team Members: John, Sarah, Mike, David'],
      date: 'June 2023'
    },
    {
      id: 4,
      title: 'E-Yantra Robotics Competition',
      image: '/images/achievements/eyantra.jpg',
      description: 'Developed an autonomous agricultural robot for crop monitoring and harvesting.',
      certificate: '/images/achievements/eyantra-cert.jpg',
      date: 'September 2023'
    },
    {
      id: 5,
      title: 'Smart India Hackathon',
      image: '/images/achievements/hackathon.jpg',
      description: 'First prize for developing an AI-powered surveillance system for security applications.',
      teamPhoto: '/images/achievements/team-win.jpg',
      date: 'November 2023'
    }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-900/95 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400"
          >
            Our Achievements
          </motion.h1>
        </div>
      </motion.section>

      {/* Achievements Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-24">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Image Section */}
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl"
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                {achievement.certificate && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4"
                  >
                    <img
                      src={achievement.certificate}
                      alt="Certificate"
                      className="w-32 h-auto rounded shadow-lg"
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* Content Section */}
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-3xl font-bold text-primary-400"
                >
                  {achievement.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-gray-300 text-lg"
                >
                  {achievement.description}
                </motion.p>
                {achievement.participants && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-green-400 font-medium"
                  >
                    {achievement.participants}
                  </motion.p>
                )}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-gray-400"
                >
                  {achievement.date}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500 rounded-full filter blur-3xl" />
      </div>
    </div>
  );
};

export default AchievementsPage;