import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../../components/Navbar/Menu';
import Footer from '../../components/Footer';

// Categories of BattleBots
const battleBotCategories = [
  {
    id: '1kg',
    title: '1kg Ant Weight',
    image: '/images/workshops/battlebots-1kg.jpg',
    description: 'Compact, fast and agile robots designed for beginners with basic components and simple weaponry.',
    path: '/workshop/battlebots-making/1kg',
    difficulty: 'Beginner',
    buildTime: '2-3 weeks',
    cost: '₹5,000 - ₹8,000'
  },
  {
    id: '3kg',
    title: '3kg Beetle Weight',
    image: '/images/workshops/battlebots-3kg.jpg',
    description: 'Medium-sized robots with improved power systems and more destructive weapons.',
    path: '/workshop/battlebots-making/3kg',
    difficulty: 'Beginner-Intermediate',
    buildTime: '3-4 weeks',
    cost: '₹8,000 - ₹15,000'
  },
  {
    id: '8kg',
    title: '8kg Hobbyweight',
    image: '/images/workshops/battlebots-8kg.jpg',
    description: 'Advanced combat robots with powerful motors and destructive weaponry requiring solid engineering skills.',
    path: '/workshop/battlebots-making/8kg',
    difficulty: 'Intermediate',
    buildTime: '4-6 weeks',
    cost: '₹15,000 - ₹25,000'
  },
  {
    id: '15kg',
    title: '15kg Featherweight',
    image: '/images/workshops/battlebots-15kg.jpg',
    description: 'Heavy combat robots with professional-grade components, advanced weapon systems, and robust armor.',
    path: '/workshop/battlebots-making/15kg',
    difficulty: 'Advanced',
    buildTime: '6-8 weeks',
    cost: '₹25,000 - ₹40,000'
  },
  {
    id: '30kg',
    title: '30kg Lightweight',
    image: '/images/workshops/battlebots-30kg.jpg',
    description: 'Competition-grade combat robots with high-power motors, sophisticated weapon systems, and heavy-duty armor plating.',
    path: '/workshop/battlebots-making/30kg',
    difficulty: 'Expert',
    buildTime: '8-12 weeks',
    cost: '₹40,000 - ₹70,000'
  }
];

const BattleBots = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Menu />
      
      <section className="pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black z-0" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-600/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Link to="/workshop" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Workshops
            </Link>
            
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 mb-6">Battle Bots Workshop</h1>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Design and build competitive combat robots of various weight categories. Learn about structural design, 
              power systems, weapon mechanisms, and remote control integration.
            </p>
          </motion.div>

          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-zinc-900/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-4">What Are Battle Bots?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4">
                  Battle Bots are remote-controlled armored robots designed to fight in an arena combat setting. 
                  They feature various offensive and defensive capabilities, including spinners, hammers, flippers, 
                  and sturdy armor plating.
                </p>
                <p className="text-gray-300 mb-4">
                  Building a Battle Bot involves knowledge of mechanical engineering, electronics, power systems, 
                  and remote control technologies. Teams compete in organized competitions based on weight classes.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/30 p-4 rounded-lg border border-red-500/20">
                    <h3 className="text-red-400 font-semibold mb-2">Key Components</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Chassis & Frame</li>
                      <li>• Weapons Systems</li>
                      <li>• Armor Plating</li>
                      <li>• Motors & ESCs</li>
                      <li>• Battery & Power</li>
                      <li>• RC Receiver & Controls</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-red-500/20">
                    <h3 className="text-red-400 font-semibold mb-2">Skills Learned</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Mechanical Design</li>
                      <li>• Electronics Integration</li>
                      <li>• Metal Fabrication</li>
                      <li>• Motor Selection</li>
                      <li>• Power Management</li>
                      <li>• Strategic Thinking</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden h-[300px] md:h-auto">
                <img 
                  src="/images/workshops/battlebots-intro.jpg" 
                  alt="Battle Bots in Arena" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x600/red/FFFFFF?text=Battle+Bots";
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Categories Section */}
          <h2 className="text-3xl font-bold text-white text-center mb-8">Select a Weight Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {battleBotCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="relative rounded-xl overflow-hidden border border-red-500/20 bg-zinc-900/50 backdrop-blur-sm hover:border-red-500/40 transition-all cursor-pointer"
                onClick={() => navigate(category.path)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="h-48 relative">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/600x300/red/FFFFFF?text=${category.title}`;
                    }}
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-opacity duration-300 ${
                      hoveredCategory === category.id ? 'opacity-40' : 'opacity-60'
                    }`} 
                  />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                      <div className="text-xs text-gray-400">Difficulty</div>
                      <div className="text-red-400 font-medium">{category.difficulty}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-400">Build Time</div>
                      <div className="text-red-400 font-medium">{category.buildTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-400">Est. Cost</div>
                      <div className="text-red-400 font-medium">{category.cost}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button 
                      className={`px-4 py-2 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-900/20 hover:border-red-500/50 font-medium transition-all inline-flex items-center ${
                        hoveredCategory === category.id ? 'bg-red-900/20' : ''
                      }`}
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BattleBots;
