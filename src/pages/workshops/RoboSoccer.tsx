import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Menu from '../../components/Navbar/Menu';
import Footer from '../../components/Footer';

const categories = [
  {
    id: 'mini',
    title: 'Mini RoboSoccer (500g)',
    description: 'Compact and beginner-friendly soccer robots perfect for learning the basics of robotics and team competitions.',
    image: '/images/workshops/robosoccer-mini.jpg',
    features: [
      'Lightweight design (under 500g)',
      'Basic sensor integration',
      'Simple programming interface',
      'Battery life of 20-30 minutes'
    ],
    difficulty: 'Beginner',
    buildTime: '2-3 weeks',
    costRange: '₹5,000-₹8,000'
  },
  {
    id: 'standard',
    title: 'Standard RoboSoccer (3kg)',
    description: 'Intermediate-level robots with advanced control systems for regional and national competitions.',
    image: '/images/workshops/robosoccer-standard.jpg',
    features: [
      'Powerful drive systems',
      'Advanced sensor arrays',
      'Precision ball handling mechanisms',
      'Wireless communication protocols'
    ],
    difficulty: 'Intermediate',
    buildTime: '3-5 weeks',
    costRange: '₹10,000-₹15,000'
  },
  {
    id: 'professional',
    title: 'Professional RoboSoccer (5kg)',
    description: 'Competition-grade robots with sophisticated AI and mechanical systems for national and international contests.',
    image: '/images/workshops/robosoccer-pro.jpg',
    features: [
      'Vision-based detection systems',
      'Advanced positioning algorithms',
      'High-torque motors with precision control',
      'Multi-robot coordination capabilities'
    ],
    difficulty: 'Advanced',
    buildTime: '6-8 weeks',
    costRange: '₹20,000-₹30,000'
  }
];

const RoboSoccer = () => {
  const [activeCategory, setActiveCategory] = useState('standard');

  return (
    <div className="min-h-screen bg-black">
      <Menu />
      
      {/* Hero Section */}
      <section className="pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black z-0" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-600/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
              <Link to="/workshop" className="hover:text-blue-400 transition-colors">Workshops</Link>
              <span className="mx-2">›</span>
              <span className="text-blue-400">Robo Soccer</span>
            </div>
          </div>
          
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 mb-6">Robo Soccer Workshop</h1>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Design and build autonomous soccer-playing robots that can detect, track, and manipulate a ball 
              while navigating a playing field and coordinating with teammates.
            </p>
          </motion.div>
          
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16 rounded-xl overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/10"
          >
            <img 
              src="/images/workshops/robosoccer-main.jpg" 
              alt="Robo Soccer Workshop" 
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/1200x400/blue/FFFFFF?text=Robo+Soccer+Workshop";
              }}
            />
          </motion.div>
          
          {/* Workshop Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">About Robo Soccer</h2>
              <p className="text-gray-300 mb-4">
                Robo Soccer combines principles of mechanics, electronics, and programming to create 
                autonomous robots that can play soccer. These competitions promote teamwork, strategy 
                development, and real-time problem solving while teaching valuable engineering skills.
              </p>
              <p className="text-gray-300 mb-4">
                In this workshop, you'll learn how to design and build robots that can detect a ball, 
                navigate a playing field, and work together as a team. You'll gain hands-on experience 
                with sensors, motors, microcontrollers, and programming logic for autonomous behavior.
              </p>
              <p className="text-gray-300 mb-6">
                The skills learned in Robo Soccer are highly transferable to other robotics fields, 
                including autonomous vehicles, industrial automation, and multi-robot systems.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-900/80 p-4 rounded-lg border border-blue-500/20">
                  <div className="text-gray-400 text-sm mb-1">Team Size</div>
                  <div className="text-blue-400 font-medium">2-5 members</div>
                </div>
                <div className="bg-zinc-900/80 p-4 rounded-lg border border-blue-500/20">
                  <div className="text-gray-400 text-sm mb-1">Tournament Format</div>
                  <div className="text-blue-400 font-medium">5-min matches</div>
                </div>
                <div className="bg-zinc-900/80 p-4 rounded-lg border border-blue-500/20">
                  <div className="text-gray-400 text-sm mb-1">Robot Count</div>
                  <div className="text-blue-400 font-medium">2-5 per team</div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
                Key Technologies
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Proximity and optical sensors for ball detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>PID control systems for precise movement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Wireless communication for team coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Custom drive systems for quick direction changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Computer vision for advanced ball tracking</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Category Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Robot Categories</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-5 py-3 rounded-lg transition-colors ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Category Details */}
          {categories.filter(category => category.id === activeCategory).map(category => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Image Column */}
                <div className="lg:col-span-2">
                  <div className="rounded-xl overflow-hidden border border-blue-500/30 h-full">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/800x600/blue/FFFFFF?text=${category.title.replace(' ', '+')}`;  
                      }}
                    />
                  </div>
                </div>
                
                {/* Details Column */}
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-zinc-900/80 p-4 rounded-lg border border-blue-500/20">
                      <div className="text-gray-400 text-sm mb-1">Difficulty</div>
                      <div className="text-blue-400 font-medium">{category.difficulty}</div>
                    </div>
                    <div className="bg-zinc-900/80 p-4 rounded-lg border border-blue-500/20">
                      <div className="text-gray-400 text-sm mb-1">Build Time</div>
                      <div className="text-blue-400 font-medium">{category.buildTime}</div>
                    </div>
                    <div className="bg-zinc-900/80 p-4 rounded-lg border border-blue-500/20">
                      <div className="text-gray-400 text-sm mb-1">Cost Range</div>
                      <div className="text-blue-400 font-medium">{category.costRange}</div>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-900/80 p-6 rounded-lg border border-blue-500/20 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex text-gray-300">
                          <span className="text-blue-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex">
                    <Link 
                      to={`/workshop/robosoccer-making/${category.id}`}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      View Building Guide
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Benefits of Building Robo Soccer Robots</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/80 p-6 rounded-xl border border-blue-500/20">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Problem-Solving Skills</h3>
                <p className="text-gray-300">
                  Design robots that can solve complex navigation and ball-handling challenges in real-time, 
                  developing critical thinking and engineering problem-solving abilities.
                </p>
              </div>
              <div className="bg-zinc-900/80 p-6 rounded-xl border border-blue-500/20">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Teamwork & Collaboration</h3>
                <p className="text-gray-300">
                  Work in teams to design multi-robot systems that coordinate effectively, learning 
                  collaborative engineering and communication skills essential in the industry.
                </p>
              </div>
              <div className="bg-zinc-900/80 p-6 rounded-xl border border-blue-500/20">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Multidisciplinary Learning</h3>
                <p className="text-gray-300">
                  Combine mechanical design, electronics, and programming in one project, gaining a 
                  well-rounded understanding of robotics engineering fundamentals.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900/30 to-teal-900/20 rounded-xl border border-blue-500/20 p-8 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Join the RoboSoccer League?</h3>
                <p className="text-gray-300">Register for our workshop or apply to join one of our RoboSoccer teams.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Register for Workshop
                </a>
                <a href="#" className="px-6 py-3 bg-transparent hover:bg-white/10 border border-blue-500/50 text-blue-400 font-medium rounded-lg transition-colors">
                  Join RoboSoccer Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RoboSoccer;
