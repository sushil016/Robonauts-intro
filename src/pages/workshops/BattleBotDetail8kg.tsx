import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Menu from '../../components/Navbar/Menu';
import Footer from '../../components/Footer';

// Steps for building an 8kg BattleBot
const buildSteps = [
  {
    title: "Design & Planning",
    description: "Create a detailed design for your 8kg BattleBot including weapon systems, drive train, and armor layout.",
    image: "/images/workshops/8kg-design.jpg",
    details: [
      "Develop CAD models using Fusion 360 or SolidWorks",
      "Plan weight distribution with approximately 40% for drive, 30% for weapons, and 30% for armor",
      "Select appropriate materials based on function (HARDOX for weapons, aluminum for chassis)",
      "Simulate potential failure points and reinforce accordingly"
    ],
    duration: "1-2 weeks"
  },
  {
    title: "Chassis Construction",
    description: "Build the main frame that will hold all components and provide structural integrity during combat.",
    image: "/images/workshops/8kg-chassis.jpg",
    details: [
      "Cut aluminum or steel plates according to design specifications",
      "Drill mounting holes for motors, electronics, and weapon systems",
      "Weld or bolt frame components together ensuring proper alignment",
      "Test structural integrity by applying force at various points"
    ],
    duration: "1 week"
  },
  {
    title: "Drive System Assembly",
    description: "Install motors, wheels, and drive controls to enable precise movement in the arena.",
    image: "/images/workshops/8kg-drive.jpg",
    details: [
      "Mount 775 or RS-550 motors with appropriate gear reduction",
      "Install 20A-30A ESCs for motor control",
      "Attach high-traction wheels with proper ground clearance",
      "Wire motors to the receiver and test motion control"
    ],
    duration: "3-4 days"
  },
  {
    title: "Weapon System Installation",
    description: "Build and install your primary and secondary weapon systems.",
    image: "/images/workshops/8kg-weapon.jpg",
    details: [
      "Fabricate weapon components from hardened steel",
      "Balance spinning weapons to prevent vibration",
      "Install high-torque weapon motors with proper cooling",
      "Secure weapon assemblies with grade 8 bolts and lock nuts"
    ],
    duration: "1 week"
  },
  {
    title: "Electronics & Controls",
    description: "Install all electronic components and set up the control system.",
    image: "/images/workshops/8kg-electronics.jpg",
    details: [
      "Mount receiver in a protected central location",
      "Install 3S or 4S LiPo battery (2200-3000mAh)",
      "Set up power distribution with appropriate gauge wiring",
      "Program fail-safes for weapon and drive systems"
    ],
    duration: "2-3 days"
  },
  {
    title: "Armor & Protection",
    description: "Add protective armor and finishing touches to maximize durability.",
    image: "/images/workshops/8kg-armor.jpg",
    details: [
      "Cut and shape armor panels from aluminum or polycarbonate",
      "Secure armor with quick-release mechanisms for maintenance access",
      "Apply protective coatings to prevent electrical shorts",
      "Test armor durability with controlled impact tests"
    ],
    duration: "3-4 days"
  },
  {
    title: "Testing & Calibration",
    description: "Perform comprehensive testing to ensure reliability and performance.",
    image: "/images/workshops/8kg-testing.jpg",
    details: [
      "Perform drive system calibration and speed tests",
      "Test weapon activation and power under load",
      "Measure battery life under combat conditions",
      "Practice driving and weapon control in a test arena"
    ],
    duration: "3-5 days"
  }
];

// Materials needed for an 8kg BattleBot
const materials = [
  {
    category: "Frame & Structure",
    items: [
      { name: "Aluminum plate (6mm)", quantity: "2 sq. meters", estimated_cost: "₹3,000" },
      { name: "Steel angle bars", quantity: "4 x 1m lengths", estimated_cost: "₹1,200" },
      { name: "Hardened steel (weapon)", quantity: "1 piece, 300mm x 200mm", estimated_cost: "₹2,500" },
      { name: "Hardware (bolts, nuts, washers)", quantity: "Assorted", estimated_cost: "₹1,000" }
    ]
  },
  {
    category: "Drive System",
    items: [
      { name: "RS-550 motors", quantity: "2 units", estimated_cost: "₹2,800" },
      { name: "Wheels (high traction)", quantity: "4 units", estimated_cost: "₹1,600" },
      { name: "30A ESCs", quantity: "2 units", estimated_cost: "₹2,400" },
      { name: "Motor mounts", quantity: "2 sets", estimated_cost: "₹800" }
    ]
  },
  {
    category: "Weapon System",
    items: [
      { name: "Weapon motor (high torque)", quantity: "1 unit", estimated_cost: "₹3,500" },
      { name: "Weapon ESC (40A)", quantity: "1 unit", estimated_cost: "₹1,800" },
      { name: "Weapon shaft & bearings", quantity: "1 set", estimated_cost: "₹1,200" },
      { name: "Weapon material (depends on type)", quantity: "Varies", estimated_cost: "₹2,000-4,000" }
    ]
  },
  {
    category: "Electronics & Power",
    items: [
      { name: "4S LiPo Battery (3000mAh)", quantity: "1-2 units", estimated_cost: "₹3,500" },
      { name: "RC Receiver", quantity: "1 unit", estimated_cost: "₹1,800" },
      { name: "Power distribution board", quantity: "1 unit", estimated_cost: "₹800" },
      { name: "Wiring & connectors", quantity: "Assorted", estimated_cost: "₹1,000" }
    ]
  },
  {
    category: "Protection & Finishing",
    items: [
      { name: "Polycarbonate sheets (4mm)", quantity: "1 sq. meter", estimated_cost: "₹1,500" },
      { name: "Aluminum armor panels", quantity: "As needed", estimated_cost: "₹2,000" },
      { name: "Heat shrink tubing", quantity: "Assorted", estimated_cost: "₹300" },
      { name: "Battery straps & foam padding", quantity: "2 sets", estimated_cost: "₹500" }
    ]
  }
];

// Technical specifications for 8kg BattleBot
const technicalSpecs = {
  weightClass: "8kg (Hobbyweight)",
  dimensions: "Maximum 400mm x 400mm x 250mm",
  motorRecommendations: "RS-550 or similar brushed DC motors",
  batterySpecs: "3S-4S LiPo, 2200-3000mAh, 40-60C discharge rate",
  controlSystem: "Standard RC transmitter/receiver (minimum 6 channels)",
  weaponOptions: [
    "Vertical spinner (1000-3000 RPM)",
    "Horizontal spinner (2000-4000 RPM)",
    "Drum (3000-5000 RPM)",
    "Flipper/lifter (pneumatic or electric)"
  ],
  armorRecommendations: [
    "6mm aluminum for main chassis",
    "2-4mm HARDOX for weapon components",
    "4-6mm polycarbonate for non-impact areas"
  ],
  safetyFeatures: [
    "Weapon lock mechanism",
    "Power isolation switch",
    "Fail-safe programming",
    "LED power indicator"
  ]
};

const BattleBotDetail8kg = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-black">
      <Menu />
      
      {/* Hero Section */}
      <section className="pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black z-0" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-600/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
              <Link to="/workshop" className="hover:text-blue-400 transition-colors">Workshops</Link>
              <span className="mx-2">›</span>
              <Link to="/workshop/battlebots-making" className="hover:text-blue-400 transition-colors">Battle Bots</Link>
              <span className="mx-2">›</span>
              <span className="text-orange-400">8kg Hobbyweight</span>
            </div>
            
            <Link to="/workshop/battlebots-making" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Battle Bots Categories
            </Link>
          </div>
          
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mb-6">8kg Hobbyweight BattleBot</h1>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Build a competitive 8kg combat robot with advanced weapon systems and durable frame design.
              This mid-weight class offers an ideal balance of power, versatility, and affordability.
            </p>
          </motion.div>
          
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16 rounded-xl overflow-hidden border border-red-500/30 shadow-lg shadow-red-500/10"
          >
            <img 
              src="/images/workshops/8kg-battlebot-main.jpg" 
              alt="8kg Hobbyweight BattleBot" 
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/1200x400/orange/FFFFFF?text=8kg+Hobbyweight+BattleBot";
              }}
            />
          </motion.div>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap border-b border-zinc-800 mb-10">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium transition-colors ${activeTab === 'overview' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('steps')}
              className={`px-6 py-3 font-medium transition-colors ${activeTab === 'steps' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Build Steps
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-6 py-3 font-medium transition-colors ${activeTab === 'materials' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Materials
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-6 py-3 font-medium transition-colors ${activeTab === 'specs' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Technical Specs
            </button>
            <button
              onClick={() => setActiveTab('safety')}
              className={`px-6 py-3 font-medium transition-colors ${activeTab === 'safety' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Safety Guidelines
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="mb-16">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-white mb-4">About 8kg Hobbyweight BattleBots</h2>
                    <p className="text-gray-300 mb-4">
                      The 8kg Hobbyweight class offers an optimal balance between power, cost, and complexity. 
                      These robots are large enough to accommodate sophisticated weapon systems while remaining 
                      affordable and manageable for builders with intermediate experience levels.
                    </p>
                    <p className="text-gray-300 mb-4">
                      Hobbyweight bots typically feature powerful brushed motors, LiPo battery systems, and a 
                      variety of weapon options including spinners, drums, and flippers. This class is popular 
                      in competitions throughout India and serves as an excellent stepping stone before moving 
                      to larger weight classes.
                    </p>
                    <p className="text-gray-300 mb-6">
                      This workshop will guide you through the complete process of designing, building, and 
                      testing an 8kg BattleBot that can compete in regional and national competitions.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-zinc-900/80 p-4 rounded-lg border border-red-500/20">
                        <div className="text-gray-400 text-sm mb-1">Build Time</div>
                        <div className="text-orange-400 font-medium">4-6 weeks</div>
                      </div>
                      <div className="bg-zinc-900/80 p-4 rounded-lg border border-red-500/20">
                        <div className="text-gray-400 text-sm mb-1">Difficulty</div>
                        <div className="text-orange-400 font-medium">Intermediate</div>
                      </div>
                      <div className="bg-zinc-900/80 p-4 rounded-lg border border-red-500/20">
                        <div className="text-gray-400 text-sm mb-1">Cost Range</div>
                        <div className="text-orange-400 font-medium">₹15,000-₹25,000</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-900/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                      </svg>
                      Key Features
                    </h3>
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        High power-to-weight ratio
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Versatile weapon options
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Durable aluminum chassis
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        High-performance drive system
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Advanced protection systems
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Competition-ready design
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Build Steps Tab */}
            {activeTab === 'steps' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Building Guide</h2>
                
                <div className="space-y-12">
                  {buildSteps.map((step, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                      <div className="md:col-span-1">
                        <div className="aspect-square rounded-xl overflow-hidden border border-orange-500/30">
                          <img 
                            src={step.image} 
                            alt={step.title} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://placehold.co/600x600/orange/FFFFFF?text=Step+${index + 1}`;
                            }}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400 font-bold mr-4">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        
                        <div className="bg-zinc-900/80 p-5 rounded-lg border border-orange-500/20 mb-4">
                          <h4 className="text-lg font-medium text-white mb-3">Detailed Tasks:</h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex text-gray-300">
                                <span className="text-orange-400 mr-2">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="text-sm text-gray-400">
                          <span className="font-medium text-orange-400">Estimated time:</span> {step.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Materials Tab */}
            {activeTab === 'materials' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Materials & Components List</h2>
                
                <div className="space-y-8">
                  {materials.map((category, index) => (
                    <div key={index} className="bg-zinc-900/80 rounded-xl border border-orange-500/20 overflow-hidden">
                      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/20 p-4 border-b border-orange-500/30">
                        <h3 className="text-xl font-medium text-white">{category.category}</h3>
                      </div>
                      
                      <div className="p-1">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-black/40">
                              <th className="text-left p-4 text-gray-400">Component</th>
                              <th className="text-left p-4 text-gray-400">Quantity</th>
                              <th className="text-left p-4 text-gray-400">Est. Cost</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.items.map((item, i) => (
                              <tr key={i} className="border-t border-zinc-800">
                                <td className="p-4 text-white">{item.name}</td>
                                <td className="p-4 text-gray-300">{item.quantity}</td>
                                <td className="p-4 text-orange-400">{item.estimated_cost}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-5 bg-zinc-900/80 rounded-xl border border-orange-500/20">
                  <div className="flex items-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-medium">Important Notes:</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex">
                      <span className="text-orange-400 mr-2">•</span>
                      Prices are estimates and may vary based on suppliers and quality
                    </li>
                    <li className="flex">
                      <span className="text-orange-400 mr-2">•</span>
                      Consider buying extra parts for critical components that may break during testing
                    </li>
                    <li className="flex">
                      <span className="text-orange-400 mr-2">•</span>
                      Tools required are not included in this list - see our resources section for recommended tools
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
            
            {/* Technical Specs Tab */}
            {activeTab === 'specs' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/80 rounded-xl border border-orange-500/20 p-6">
                    <h3 className="text-xl font-medium text-white mb-4">General Specifications</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Weight Class</div>
                        <div className="text-white font-medium">{technicalSpecs.weightClass}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Dimensions</div>
                        <div className="text-white font-medium">{technicalSpecs.dimensions}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-900/80 rounded-xl border border-orange-500/20 p-6">
                    <h3 className="text-xl font-medium text-white mb-4">Performance Specifications</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Motor Recommendations</div>
                        <div className="text-white font-medium">{technicalSpecs.motorRecommendations}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Battery Specifications</div>
                        <div className="text-white font-medium">{technicalSpecs.batterySpecs}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">Control System</div>
                        <div className="text-white font-medium">{technicalSpecs.controlSystem}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-900/80 rounded-xl border border-orange-500/20 p-6">
                    <h3 className="text-xl font-medium text-white mb-4">Weapon Options</h3>
                    <ul className="space-y-2">
                      {technicalSpecs.weaponOptions.map((option, i) => (
                        <li key={i} className="flex text-gray-300">
                          <span className="text-orange-400 mr-2">•</span>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-zinc-900/80 rounded-xl border border-orange-500/20 p-6">
                    <h3 className="text-xl font-medium text-white mb-4">Armor Recommendations</h3>
                    <ul className="space-y-2">
                      {technicalSpecs.armorRecommendations.map((recommendation, i) => (
                        <li key={i} className="flex text-gray-300">
                          <span className="text-orange-400 mr-2">•</span>
                          {recommendation}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-zinc-900/80 rounded-xl border border-orange-500/20 p-6">
                    <h3 className="text-xl font-medium text-white mb-4">Safety Features</h3>
                    <ul className="space-y-2">
                      {technicalSpecs.safetyFeatures.map((feature, i) => (
                        <li key={i} className="flex text-gray-300">
                          <span className="text-orange-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-br from-red-900/30 to-orange-900/10 rounded-xl border border-orange-500/20 p-6">
                  <h3 className="text-xl font-medium text-white mb-4">Performance Expectations</h3>
                  <p className="text-gray-300 mb-4">
                    When built to these specifications, your 8kg BattleBot should achieve a top speed of 4-5 m/s with 
                    precise control, and weapon systems capable of delivering significant damage to opponents. Battery life 
                    should allow for 3-5 minutes of continuous operation at full capacity.
                  </p>
                  <p className="text-gray-300">
                    Performance may vary based on component quality, build precision, and driving skill. We recommend 
                    thorough testing and practice sessions before competition.
                  </p>
                </div>
              </motion.div>
            )}
            
            {/* Safety Guidelines Tab */}
            {activeTab === 'safety' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Safety Guidelines</h2>
                
                <div className="bg-red-900/20 border border-red-500/40 rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-white">IMPORTANT SAFETY NOTICE</h3>
                  </div>
                  <p className="text-white mb-4">
                    Combat robotics involves powerful motors, sharp edges, and potentially hazardous materials. 
                    Always prioritize safety above all else. Failure to follow proper safety protocols can result 
                    in serious injury.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-zinc-900/80 rounded-xl border border-orange-500/20 p-6">
                    <h3 className="text-xl font-medium text-white mb-4">Workshop Safety</h3>
                    <ul className="space-y-3">
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Always wear appropriate personal protective equipment (PPE) including safety glasses, gloves, and closed-toe shoes
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Use proper tools for each job and ensure they are in good working condition
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Work in a well-ventilated area, especially when soldering, painting, or working with chemicals
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Keep a fire extinguisher and first aid kit readily accessible
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Never work alone when using power tools or handling dangerous components
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-zinc-900/80 rounded-xl border border-orange-500/20 p-6">
                    <h3 className="text-xl font-medium text-white mb-4">Electrical Safety</h3>
                    <ul className="space-y-3">
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Always disconnect the battery before working on electrical components
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Use proper insulation and heat shrink tubing on all electrical connections
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Install a properly rated power switch that is easily accessible in case of emergency
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Never exceed the current rating of your motors, ESCs, or wiring
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Handle LiPo batteries with extreme care - use fireproof bags for storage and charging
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-zinc-900/80 rounded-xl border border-orange-500/20 p-6">
                    <h3 className="text-xl font-medium text-white mb-4">Testing & Competition Safety</h3>
                    <ul className="space-y-3">
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Always test your robot in a proper enclosed arena with safety barriers
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Never activate weapons or drive systems while handling the robot
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Maintain a safe distance during testing and competition
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Include a failsafe mechanism that cuts power to all systems if radio control is lost
                      </li>
                      <li className="flex text-gray-300">
                        <span className="text-orange-400 mr-2">•</span>
                        Follow all competition safety rules and staff instructions
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/20 rounded-xl border border-orange-500/20 p-8 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Build Your BattleBot?</h3>
                <p className="text-gray-300">Join our weekend workshop or request mentor assistance.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
                  Register for Workshop
                </a>
                <a href="#" className="px-6 py-3 bg-transparent hover:bg-white/10 border border-orange-500/50 text-orange-400 font-medium rounded-lg transition-colors">
                  Request Mentorship
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

export default BattleBotDetail8kg;
