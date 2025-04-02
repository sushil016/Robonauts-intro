import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RoboticHeader from './RoboticHeader';

// Workshop categories for Robonauts club
const workshopCategories = [
  {
    id: 'battlebots',
    title: 'Battle Bots',
    image: '/images/workshops/battlebots.jpg',
    description: 'Design and build combat robots for competitions in various weight categories.',
    categories: ['1kg', '3kg', '8kg', '15kg', '30kg'],
    path: '/workshop/battlebots-making',
    color: 'from-red-600 to-orange-500'
  },
  {
    id: 'robosoccer',
    title: 'Robo Soccer',
    image: '/images/workshops/robosoccer.jpg',
    description: 'Create autonomous soccer-playing robots with real-time decision making capabilities.',
    path: '/workshop/robosoccer-making',
    color: 'from-green-600 to-emerald-500'
  },
  {
    id: 'robosumo',
    title: 'Robo Sumo',
    image: '/images/workshops/robosumo.jpg',
    description: 'Build robots designed to push opponents out of the ring while staying within boundaries.',
    path: '/workshop/robosumo-making',
    color: 'from-purple-600 to-indigo-500'
  },
  {
    id: 'drones',
    title: 'Drones',
    image: '/images/workshops/drones.jpg',
    description: 'Design, build, and program autonomous and RC quadcopters for various applications.',
    path: '/workshop/drones-making',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'skyplane',
    title: 'Boeing Sky Plane',
    image: '/images/workshops/skyplane.jpg',
    description: 'Engineer and construct fixed-wing aircraft with advanced aerodynamics and control systems.',
    path: '/workshop/skyplane-making',
    color: 'from-amber-500 to-yellow-400'
  },
  {
    id: 'rccars',
    title: 'RC Cars',
    image: '/images/workshops/rccars.jpg',
    description: 'Build and race high-performance remote-controlled cars with precision engineering.',
    path: '/workshop/rccar-making',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'waterboat',
    title: 'Water Boat',
    image: '/images/workshops/waterboat.jpg',
    description: 'Create autonomous and RC watercraft with advanced propulsion and navigation systems.',
    path: '/workshop/waterboat-making',
    color: 'from-blue-500 to-indigo-400'
  },
  {
    id: 'pcb',
    title: 'Custom PCBs',
    image: '/images/workshops/pcb.jpg',
    description: 'Design and fabricate custom printed circuit boards for robotics applications.',
    path: '/workshop/pcb-making',
    color: 'from-green-500 to-teal-400'
  },
  {
    id: 'webdev',
    title: 'Web Development',
    image: '/images/workshops/webdev.jpg',
    description: 'Learn modern web development techniques for creating interactive applications.',
    path: '/workshop/webdev-making',
    color: 'from-blue-400 to-indigo-600'
  }
];

const Workshops = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-20">
      <RoboticHeader />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6">Robotics Workshops</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore our hands-on workshops where we build cutting-edge robots, drones, and electronic systems.
            Each workshop provides comprehensive guidance from design to implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopCategories.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden border border-blue-500/20 bg-blue-900/5 backdrop-blur-sm hover:border-blue-500/40 transition-all group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-48 relative">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x300/${workshop.color.split("-")[1]}/FFFFFF?text=${workshop.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${workshop.color} text-white text-xs font-medium`}>
                  {workshop.id.charAt(0).toUpperCase() + workshop.id.slice(1)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{workshop.title}</h3>
                <p className="text-gray-400 mb-6">{workshop.description}</p>
                
                {workshop.categories && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {workshop.categories.map(category => (
                      <span key={category} className="px-2 py-1 bg-blue-900/50 rounded-md text-blue-300 text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                )}
                
                <Link 
                  to={workshop.path} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Explore Workshop
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
