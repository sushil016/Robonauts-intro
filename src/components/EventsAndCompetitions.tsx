import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Award, Users, Clock } from 'lucide-react';
import useMousePosition from './hooks/mousePosition';

interface Event {
  date: string;
  title: string;
  description: string;
  attendees: string;
  duration: string;
  highlights: string[];
}

interface EventCardProps {
  event: Event;
  isSelected: boolean;
  onClick: () => void;
  index: number;
  isVisible: boolean;
}

const events: Event[] = [
  {
    date: '2025-03-11',
    title: 'RoboWars 2025',
    description: 'showcasing the Best soccerBots in BVCOEnm Campus',
    attendees: '500+',
    duration: '8+ hours',
    highlights: ['Live Demonstrations', 'Prize Pool ₹30,000', 'Industry Experts'],
  },
  {
    date: '2024-03-12',
    title: 'RoboWars 2024',
    description: 'showcasing the Best soccerBots in BVCOEnm Campus',
    attendees: '300+',
    duration: '8 hours',
    highlights: ['Live Demonstrations', 'Prize Pool ₹30,000', 'Industry Experts'],
  },
  {
    date: '2024-06-20',
    title: 'Robotic Workshop',
    description: 'A Huge workshop has begun in bvcoenm campus by team Robonauts.',
    attendees: '50+',
    duration: '3 hours',
    highlights: ['Hands-on Training', 'Project Building', 'Certification'],
  },
  {
    date: '2022-11-20',
    title: 'SIH 2022 Winner',
    description: 'Developed a fully Autonomus Drone',
    attendees: '6',
    duration: '36 hours',
    highlights: ['National Recognition', 'Innovation Award', 'Government Project'],
  },
];

const EventCard: React.FC<EventCardProps> = ({ event, isSelected, onClick, index, isVisible }) => {
  return (
    <div 
      className={`mb-8 flex group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative">
        <div className="bg-indigo-800 w-6 h-6 rounded-full -ml-3 mr-4 flex items-center justify-center 
                      group-hover:scale-125 group-hover:bg-indigo-600 transition-all duration-300
                      hover:ring-4 hover:ring-indigo-400/30">
          <Calendar className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <div className="absolute h-full w-0.5 bg-gradient-to-b from-indigo-800 to-transparent top-6 -ml-0.5
                      group-hover:h-[120%] transition-all duration-500" />
      </div>
      
      <div
        className="bg-[#19162480] rounded-lg p-6 flex-grow cursor-pointer transition-all duration-300 
                   hover:bg-[#191624bb] hover:shadow-lg hover:shadow-indigo-500/20 
                   group-hover:translate-x-2 relative overflow-hidden"
        onClick={onClick}
        style={{
          transform: isSelected ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex justify-between items-start relative">
          <div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 
                         bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
              {event.title}
            </h3>
            <p className="text-gray-300 mb-2 flex items-center group-hover:text-indigo-300 transition-colors duration-300">
              <Clock className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" /> 
              {event.date} • {event.duration}
            </p>
          </div>
          <div className="flex items-center text-gray-300 group-hover:text-indigo-300 transition-colors duration-300">
            <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              {event.attendees} Participants
            </span>
          </div>
        </div>

        {isSelected && (
          <div className="mt-4 space-y-4 animate-fadeIn">
            <p className="text-gray-200 group-hover:text-indigo-200 transition-colors duration-300">
              {event.description}
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                Event Highlights:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {event.highlights.map((highlight, idx) => (
                  <li key={idx} 
                      className="flex items-center text-gray-300 hover:text-indigo-300 
                               transition-all duration-300 hover:translate-x-2">
                    <Award className="w-4 h-4 mr-2 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <ChevronRight 
          className={`w-5 h-4 text-indigo-400 mt-2 transition-all duration-300 
                     ${isSelected ? 'rotate-90' : ''} 
                     group-hover:translate-x-1`}
        />
      </div>
    </div>
  );
};

const EventsAndCompetitions: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<boolean[]>(new Array(events.length).fill(false));
   const { x, y } = useMousePosition();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setVisibleEvents(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = document.querySelectorAll('.event-card-wrapper');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Add subtle mouse movement effect to event cards
  const getCardTransform = (index: number) => {
    const cardElement = document.querySelector(`[data-index="${index}"]`);
    if (!cardElement) return '';
    
    const rect = cardElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const moveX = (x - centerX) * 0.01;
    const moveY = (y - centerY) * 0.01;
    
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <section id="events" className="py-20 backdrop-blur-xl bg-black/80">
      
      <style>
        {`
          @keyframes floatAnimation {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          .animate-float {
            animation: floatAnimation 3s ease-in-out infinite;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 
                     bg-clip-text text-transparent animate-float hover:scale-105 transition-transform duration-300">
          Events & Competitions
        </h2>
        <div className="relative">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="event-card-wrapper" 
              data-index={index}
              style={{
                transform: getCardTransform(index),
                transition: 'transform 0.3s ease-out'
              }}
            >
              <EventCard
                event={event}
                isSelected={selectedEvent === index}
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                index={index}
                isVisible={visibleEvents[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsAndCompetitions;