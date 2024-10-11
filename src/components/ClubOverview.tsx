import React from 'react';
import { Wrench, Rocket, Trophy, Users } from 'lucide-react';

const activities = [
  { icon: Wrench, title: 'Robotics Workshops', description: 'Hands-on learning experiences' },
  { icon: Rocket, title: 'Projects', description: 'Build innovative robots and systems' },
  { icon: Trophy, title: 'Competitions', description: 'Showcase your skills in robotics contests' },
  { icon: Users, title: 'Mentorship', description: 'Learn from experienced roboticists' },
];

interface ClubOverviewProps {

    isDarkTheme: boolean;
  
  }

const ClubOverview: React.FC<ClubOverviewProps> = ({ isDarkTheme }) =>{
  return (
    <section id="overview" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Club Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <activity.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubOverview;