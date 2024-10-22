import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  { date: '2024-03-12', title: 'RoboWars', description: 'showcasing the Best soccerBots in BVCOEnm Campus ' },
  { date: '2024-06-20', title: 'Robotic Workshop', description: 'A Huge workshop has begun in bvcoenm campus by team Robonauts.' },
  { date: '2022-11-20', title: 'SIH 2022 Winner', description: 'Developed a fully Autonomus Drone' },
];

const EventsAndCompetitions: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
 

    <section id="events" className="py-20 bg-bgPrimary">
      <div className="container mx-auto px-12">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Events & Competitions</h2>
        <div className="relative">
          <div className="absolute left-0 w-1 backdrop-blur-lg h-full"></div>
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="mb-8 flex"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
            >
              <div className="bg-indigo-800 w-6 h-6 rounded-full -ml-3 mr-4 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <motion.div
                className="bg-[#19162480] rounded-lg p-6 flex-grow cursor-pointer transform transition duration-300 "
                onClick={() => setSelectedEvent(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-2">{event.date}</p>
                {selectedEvent === index && (
                  <p className="mt-4">{event.description}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsAndCompetitions;