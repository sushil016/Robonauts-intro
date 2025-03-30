import { motion } from "framer-motion";
import { useState } from "react";

const AchievementsPage = () => {
  const [achievements] = useState([
    {
      id: 1,
      title: 'SMART INDIA HACKATHON - 2022',
      image: '/achievement/sih-2022 winner.jpg',
      //certificate: '/achievement/sih-certificate.jpg', // Add actual certificate path if available
      details: {
        participants: 'Saket Pathak, Roushan Sharma',
        rank: '1st',
        level: 'National',
        date: '25th August 2022 – 29th August 2022',
        problemStatement: 'Anti-drone system for VIP protection and surveillance.'
      }
    },
    {
      id: 2,
      title: 'FPV DRONE RACING AT AMITY UNIVERSITY, MUMBAI',
      image: '/achievement/FPV drone racing.jpeg',
      certificate: '/achievement/fpv-certificates.png', // Add actual certificate path if available
      details: {
        participants: 'Saket Pathak',
        rank: '1st',
        level: 'National',
        date: '25th March 2022',
        summary: 'Saket Pathak stood 1st and won the Competition by completing the laps in shortest time.'
      }
    },
    {
      id: 3,
      title: 'RC NITRO CAR RACING AT AMITY UNIVERSITY, MUMBAI',
      image: '/achievement/saket-winning.png',
      certificate: '/achievement/nitro-racing-certificate.png', // Add actual certificate path if available
      details: {
        participants: 'Ketan Patil and Saket Pathak',
        rank: '1st',
        level: 'National',
        date: '24th March 2022',
        summary: 'Ketan and Saket won the race, leaving all other participants behind! Winning the competition was the best part. Dedication and Consistency made efforts work effectively.'
      }
    },
    {
      id: 4,
      title: 'NIT TRICHY SIMDROID 2021',
      image: '/achievement/NIT-Trichy-Sumdroid.jpeg',
      certificate: '/achievement/simdroid-certificate.jpg', // Add actual certificate path if available
      details: {
        participants: '4 Teams Participated from Team Robonaut',
        rank: '1st and 3rd',
        level: 'National',
        date: 'March 2022',
        problemStatement: 'Design a robot which will collect sea debris from deep ocean.',
        additionalInfo: 'All 4-team qualified for the final round in which 2 out of 4 teams won 1st and 3rd Rank.',
        teams: [
          {
            name: 'TEAM 1: Aquasaver',
            members: 'Varun Kulkarni, Omkar Pol, Ketan Patil',
            rank: '1st'
          },
          {
            name: 'TEAM 2: Robonauts',
            members: 'Roushan Sharma, Aniket Kadam, Rushikesh Mahajan, Pratiksha Pawar',
            rank: '3rd'
          },
          {
            name: 'TEAM 3: Aquadon',
            members: 'Aryan Khare, Shrivardhini Sakhare, Sushmita',
            rank: 'Participation'
          },
          {
            name: 'TEAM 4: Convibot',
            members: 'Aditya Pawar, Riya Tikole, Adityaraj Patil',
            rank: 'Participation'
          }
        ]
      }
    },
    {
      id: 5,
      title: 'RC NITRO CAR RACING AT FATHER AGNEL, NAVI MUMBAI',
      image: '/achievement/FPV nitro car racing.jpeg', // Add actual image path if available
      certificate: '/achievement/nitro-racing-certificate.png', // Add actual certificate path if available
      details: {
        participants: 'Aryan Khare, Ketan Patil',
        rank: '3rd',
        date: '10th March 2022'
      }
    },
    {
      id: 6,
      title: 'IIT MADRAS- ROBONAV 2022',
      image: '/achievement/robonav.png', // Add actual image path if available
      certificate: '/achievement/iit-madras-robonav.png', // Add actual certificate path if available
      details: {
        participants: 'Aryan Khare, Ketan Patil, Saket Pathak, Rohan Wadkar',
        rank: '2nd',
        level: 'International',
        date: 'January 2022',
        problemStatement: 'Used Fetch robot and pick the shape of the color based on inputs and then recognize the shape, drop the shape in drop box and come back for another one.'
      }
    },
    {
      id: 7,
      title: 'IIT BOMBAY\'S E-YANTRA – AGRIBOT',
      image: '/achievement/iitb-Agri-Achivement.jpeg',
      certificate: '/achievement/agribot.png', // Add actual certificate path if available
      details: {
        participants: 'Ketan Patil, Saket Pathak, Rohan Wadkar',
        rank: '10th',
        level: 'International',
        date: 'December 2021',
        problemStatement: 'Correctly detect and collect ripen tomatoes from every trough. Agribot stands for Agricultural Bot. Got to learn about robot manipulation, navigation, and image processing and implemented the same on Agribot. Successfully completed all tasks.'
      }
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/95 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
          >
            Our Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Celebrating excellence and innovation in robotics competitions
          </motion.p>
        </div>
      </motion.section>

      {/* Achievements List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-20">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                {achievement.id === 4 ? (
                  <div className="space-y-6">
                    <motion.div
                      variants={imageVariants}
                      whileHover="hover"
                      className="relative aspect-video overflow-hidden rounded-lg shadow-2xl border border-cyan-500/30"
                    >
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/800x450/003366/FFFFFF?text=Achievement+Image";
                        }}
                      />
                    </motion.div>
                    
                    {achievement.certificate && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl border border-red-500/30"
                      >
                        <img
                          src={achievement.certificate}
                          alt="Certificate"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://placehold.co/800x600/990000/FFFFFF?text=Certificate";
                          }}
                        />
                        <div className="absolute top-3 left-3 bg-red-600/80 text-white text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-sm">
                          Certificate
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="relative">
                    {/* Main image (tilted slightly and overlapping) */}
                    <motion.div
                      variants={imageVariants}
                      whileHover="hover"
                      className="relative aspect-video overflow-hidden rounded-lg shadow-2xl border border-cyan-500/30 z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                      style={{ maxWidth: "95%" }}
                    >
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/800x450/003366/FFFFFF?text=Achievement+Image";
                        }}
                      />
                    </motion.div>
                    
                    {/* Certificate image (overlapping and tilted opposite direction) */}
                    {achievement.certificate && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-0 right-0 w-2/3 aspect-video overflow-hidden rounded-lg shadow-xl border border-red-500/30 z-20 transform rotate-3 hover:rotate-0 transition-transform duration-300"
                      >
                        <img
                          src={achievement.certificate}
                          alt="Certificate"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://placehold.co/800x600/990000/FFFFFF?text=Certificate";
                          }}
                        />
                        <div className="absolute top-3 left-3 bg-red-600/80 text-white text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-sm">
                          Certificate
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Bottom detail box (participants info) */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute left-4 bottom-4 max-w-[70%] bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-blue-500/30 z-30"
                    >
                      <h5 className="text-cyan-400 font-semibold text-sm">Team Members</h5>
                      <p className="text-white text-xs sm:text-sm mt-1">{achievement.details.participants}</p>
                    </motion.div>
                  </div>
                )}

                {/* Content Section */}
                {achievement.id === 4 ? (
                  <div className="flex flex-col h-full justify-center">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
                    >
                      {achievement.title}
                    </motion.h3>
                    
                    <div className="space-y-4 text-gray-200">
                      {achievement.details.participants && (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span className="text-cyan-400 font-semibold min-w-[120px]">Participants:</span>
                          <span>{achievement.details.participants}</span>
                        </div>
                      )}
                      
                      {achievement.details.rank && (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span className="text-cyan-400 font-semibold min-w-[120px]">Rank:</span>
                          <span className="font-bold text-amber-400">{achievement.details.rank}</span>
                        </div>
                      )}
                      
                      {achievement.details.level && (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span className="text-cyan-400 font-semibold min-w-[120px]">Level:</span>
                          <span>{achievement.details.level}</span>
                        </div>
                      )}
                      
                      {achievement.details.date && (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span className="text-cyan-400 font-semibold min-w-[120px]">Date:</span>
                          <span>{achievement.details.date}</span>
                        </div>
                      )}
                      
                      {achievement.details.problemStatement && (
                        <div className="flex flex-col gap-2">
                          <span className="text-cyan-400 font-semibold">Problem Statement:</span>
                          <p className="bg-black/40 p-3 rounded-md">{achievement.details.problemStatement}</p>
                        </div>
                      )}
                      
                      {achievement.details.summary && (
                        <div className="flex flex-col gap-2">
                          <span className="text-cyan-400 font-semibold">Summary:</span>
                          <p className="bg-black/40 p-3 rounded-md">{achievement.details.summary}</p>
                        </div>
                      )}
                      
                      {achievement.details.additionalInfo && (
                        <div className="flex flex-col gap-2">
                          <p className="bg-blue-900/40 p-3 rounded-md border-l-4 border-blue-500">
                            {achievement.details.additionalInfo}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {achievement.details.teams && (
                      <div className="mt-6 space-y-4">
                        <h4 className="text-xl font-semibold text-cyan-400">Teams</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {achievement.details.teams.map((team, index) => (
                            <div key={index} className="bg-black/40 p-4 rounded-md border border-blue-500/30">
                              <h5 className="font-semibold text-white">{team.name}</h5>
                              <p className="text-gray-300 text-sm mt-1">Members: {team.members}</p>
                              <p className="text-amber-400 font-medium mt-1">Rank: {team.rank}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col h-full justify-between">
                    {/* Top section - title and competition details */}
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
                      >
                        {achievement.title}
                      </motion.h3>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-blue-900/20 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30 mb-4"
                      >
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Competition Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                          {achievement.details.level && (
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-300 font-medium">Level:</span>
                              <span className="text-white">{achievement.details.level}</span>
                            </div>
                          )}
                          {achievement.details.rank && (
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-300 font-medium">Rank:</span>
                              <span className="font-bold text-amber-400">{achievement.details.rank}</span>
                            </div>
                          )}
                          {achievement.details.date && (
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-300 font-medium">Date:</span>
                              <span className="text-white">{achievement.details.date}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="space-y-4">
                      {achievement.details.problemStatement && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-col gap-2"
                        >
                          <span className="text-cyan-400 font-semibold">Problem Statement</span>
                          <p className="bg-black/40 p-3 rounded-md text-gray-200">{achievement.details.problemStatement}</p>
                        </motion.div>
                      )}
                      
                      {achievement.details.summary && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-col gap-2"
                        >
                          <span className="text-cyan-400 font-semibold">Summary</span>
                          <p className="bg-black/40 p-3 rounded-md text-gray-200">{achievement.details.summary}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl" />
      </div>
    </div>
  );
};

export default AchievementsPage;