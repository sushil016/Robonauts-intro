import React from 'react';

const teamMembers = [
  { name: 'Dr. Jane Smith', role: 'Faculty Advisor', image: 'https://example.com/jane-smith.jpg' },
  { name: 'John Doe', role: 'Club President', image: 'https://example.com/john-doe.jpg' },
  { name: 'Emily Johnson', role: 'Technical Lead', image: 'https://example.com/emily-johnson.jpg' },
  { name: 'Michael Brown', role: 'Project Manager', image: 'https://example.com/michael-brown.jpg' },
];

const TeamMembers: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
              <p className="text-center text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;