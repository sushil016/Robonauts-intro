import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const highlights = [
  { 
    id: 1, 
    src: '/images/robowars.png',
    alt: 'RoboMania 2024 Winner',
    title: 'Championship Battle',
    description: 'Witness the epic finale of RoboMania 2024',
    date: 'March 15, 2024'
  },
  { 
    id: 2, 
    src: '/images/robowars.png',
    alt: 'Exciting Robot Battle',
    title: 'Arena Combat',
    description: 'High-intensity robot battles in our state-of-the-art arena',
    date: 'March 10, 2024'
  },
  { 
    id: 3, 
    src: '/images/robowars.png',
    alt: 'Team Collaboration',
    title: 'Team Spirit',
    description: 'Collaborative engineering at its finest',
    date: 'March 5, 2024'
  },
  { 
    id: 4, 
    src: '/images/robowars.png',
    alt: 'Innovative Robot Design',
    title: 'Innovation',
    description: 'Pushing the boundaries of robot design and technology',
    date: 'March 1, 2024'
  },
];

export default function EventHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + highlights.length) % highlights.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
            Event Highlights
          </span>
        </motion.h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-red-500/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/9]"
              >
                <img
                  src={highlights[currentIndex].src}
                  alt={highlights[currentIndex].alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x450/FF0000/FFFFFF?text=Event+Highlight";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {highlights[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/80 mb-2"
                  >
                    {highlights[currentIndex].description}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-red-400 text-sm"
                  >
                    {highlights[currentIndex].date}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/75 transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/75 transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {highlights.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-red-500 to-cyan-400' 
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
} 