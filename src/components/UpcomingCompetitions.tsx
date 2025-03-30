import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, MapPin, Trophy, ArrowRight, Zap } from "lucide-react";
import { Link } from 'react-router-dom';

const UpcomingCompetitions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate featured competition
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % competitions.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const competitions = [
    {
      id: 1,
      title: "ROBOWAR",
      description: "Design and build combat robots to compete in an arena battle where the last bot standing wins.",
      image: "/images/competitions/robowar.jpg",
      date: "June 15-17, 2025",
      location: "Robotics Arena, Amity University",
      category: "Combat Robotics",
      registrationOpen: true,
      highlights: [
        "3-day intensive competition",
        "Weight categories: 15kg and 30kg",
        "Cash prizes worth ₹50,000",
        "National level participants"
      ],
      color: "from-red-600 to-orange-500",
      registerLink: "/community", // Registration form link
      detailsLink: "/resources" // More details page
    },
    {
      id: 2,
      title: "ROBOSOCCER",
      description: "Create autonomous robots that can play soccer in teams, demonstrating coordination and strategic gameplay.",
      image: "/images/competitions/robosoccer.jpg",
      date: "July 8-10, 2025",
      location: "Sports Complex, IIT Bombay",
      category: "Team Robotics",
      registrationOpen: true,
      highlights: [
        "Teams of 3-5 robots",
        "Full autonomous operation",
        "Real-time strategy implementation",
        "International participation"
      ],
      color: "from-green-600 to-emerald-500",
      registerLink: "/community", // Registration form link
      detailsLink: "/resources" // More details page
    },
    {
      id: 3,
      title: "ROBOSUMO",
      description: "Build sumo robots designed to push opponents out of the ring while staying within boundaries.",
      image: "/images/competitions/robosumo.jpg",
      date: "August 22-23, 2025",
      location: "Central Hall, NIT Trichy",
      category: "Combat Robotics",
      registrationOpen: false, // Not open yet
      registrationDate: "Opens May 15, 2025",
      highlights: [
        "Weight classes: Mini (500g) and Standard (3kg)",
        "Autonomous and RC categories",
        "Technical workshop included",
        "Certificates for all participants"
      ],
      color: "from-purple-600 to-indigo-500",
      detailsLink: "/resources" // More details page
    },
    {
      id: 4,
      title: "SMART INDIA HACKATHON 2025",
      description: "National level hardware hackathon focused on solving real-world challenges through innovative robotics solutions.",
      image: "/images/competitions/sih.jpg",
      date: "September 5-7, 2025",
      location: "Multiple Nodal Centers Across India",
      category: "Hackathon",
      registrationOpen: false,
      registrationDate: "Opens June 1, 2025",
      highlights: [
        "36-hour non-stop competition",
        "Industry-sponsored problem statements",
        "Cash prizes worth ₹1,00,000",
        "Opportunity for incubation support"
      ],
      color: "from-blue-600 to-cyan-500",
      detailsLink: "/achievements" // Link to past achievements
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  // Featured competition (the one currently active)
  const featured = competitions[activeIndex];
  
  // Filter out the featured competition to show in the grid below
  const filteredCompetitions = competitions.filter(comp => comp.id !== featured.id);

  // Handle image error fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, colorStr: string) => {
    const target = e.target as HTMLImageElement;
    // Extract color code from gradient string (e.g., "from-red-600" -> "red")
    const colorName = colorStr.split("-")[1];
    target.src = `https://placehold.co/800x600/${colorName}/FFFFFF?text=${target.alt}`;
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 to-black z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4"
          >
            Ready to Compete?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4"
          >
            Upcoming Competitions & Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-400 text-lg"
          >
            Showcase your skills, push the boundaries of robotics, and compete with the best teams from around the country in these exciting upcoming events.
          </motion.p>
        </div>

        {/* Featured Competition */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-full">
                <motion.div
                  key={featured.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={featured.image} 
                    alt={featured.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e, featured.color.split(" ")[0])}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                </motion.div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <motion.div
                    key={`tag-${featured.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${featured.color} font-medium text-white text-sm mb-4`}
                  >
                    {featured.category}
                  </motion.div>
                  <motion.h3
                    key={`title-${featured.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
                  >
                    {featured.title}
                  </motion.h3>
                </div>
                
                {/* Overlay graphic effect */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden opacity-20 pointer-events-none"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotateZ: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                >
                  <div className="w-[150%] h-[150%] border-[30px] border-white/30 rounded-full" />
                </motion.div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 sm:p-8 md:p-10">
                <motion.p
                  key={`desc-${featured.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-lg mb-6"
                >
                  {featured.description}
                </motion.p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <motion.div
                    key={`date-${featured.id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Date</p>
                      <p className="text-white font-medium">{featured.date}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    key={`location-${featured.id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">{featured.location}</p>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                  key={`highlights-${featured.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Trophy className="h-5 w-5 text-amber-400 mr-2" />
                    Key Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {featured.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <Zap className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  key={`cta-${featured.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  {featured.registrationOpen ? (
                    <Link 
                      to={featured.registerLink || "/community"} 
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20"
                    >
                      Register Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <button disabled className="px-6 py-3 rounded-lg bg-zinc-800 text-gray-400 font-medium flex items-center justify-center gap-2 cursor-not-allowed">
                      Registration {featured.registrationDate ? featured.registrationDate : "Coming Soon"}
                    </button>
                  )}
                  <Link 
                    to={featured.detailsLink || "/resources"} 
                    className="px-6 py-3 rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-900/20 hover:border-blue-500/50 font-medium transition-all flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Competition selector dots */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {competitions.map((comp, index) => (
              <button
                key={comp.id}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex 
                    ? `w-10 bg-gradient-to-r ${comp.color}`
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`View ${comp.title}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Other Competitions Grid */}
        <motion.div
          key="competition-grid" // Adding a stable key to prevent full re-render
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Changed from whileInView to animate for better persistence
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCompetitions.map((competition) => (
            <motion.div
              key={competition.id}
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden border border-blue-500/20 bg-blue-900/5 backdrop-blur-sm hover:border-blue-500/40 transition-all"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              layout // Add layout animation for smooth transitions when items change
            >
              <div className="h-48 relative">
                <img 
                  src={competition.image} 
                  alt={competition.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e, competition.color.split(" ")[0])}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${competition.color} text-white text-xs font-medium`}>
                  {competition.category}
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{competition.title}</h3>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">{competition.date}</span>
                </div>
                <p className="text-gray-400 line-clamp-2 mb-4">{competition.description}</p>
                <Link 
                  to={competition.detailsLink || "/resources"} 
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center"
                >
                  View Details <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Link>
              </div>
              
              {competition.registrationOpen && (
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-green-500/90 text-white text-xs font-medium">
                  Registration Open
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Want to participate in these competitions?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join Team Robonauts and get access to mentorship, resources, and training to excel in these competitions!
          </p>
          <Link 
            to="/community" 
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-600/20 inline-flex items-center gap-2"
          >
            Join Robonauts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingCompetitions;
