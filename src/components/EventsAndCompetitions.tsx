import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const events = [
  { date: '2024-05-15', title: 'Annual Robotics Showcase', description: 'Present your projects to the university community.' },
  { date: '2024-06-20', title: 'National Robotics Competition', description: 'Compete against top universities in robotics challenges.' },
  { date: '2024-09-10', title: 'Robotics Workshop Series', description: 'Learn advanced techniques from industry experts.' },
];

const EventsAndCompetitions: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section id="events" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Events & Competitions</h2>
        <div className="relative">
          <div className="absolute left-0 w-1 bg-blue-500 h-full"></div>
          {events.map((event, index) => (
            <div key={index} className="mb-8 flex">
              <div className="bg-blue-500 w-6 h-6 rounded-full -ml-3 mr-4 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div
                className="bg-gray-800 rounded-lg p-6 flex-grow cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => setSelectedEvent(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-2">{event.date}</p>
                {selectedEvent === index && (
                  <p className="mt-4">{event.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsAndCompetitions;