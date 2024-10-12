import React, { useState } from 'react';
import RoboticHeader from './RoboticHeader';

const courses = [
  { title: 'Introduction to Robotics', image: 'https://example.com/intro-robotics.jpg', description: 'Learn the basics of robotics and automation.' },
  { title: 'Advanced AI for Robots', image: 'https://example.com/ai-robotics.jpg', description: 'Implement cutting-edge AI algorithms in robotic systems.' },
  { title: 'Robot Design and Fabrication', image: 'https://example.com/robot-design.jpg', description: 'Master the art of designing and building robots from scratch.' },
  { title: 'Programming Languages and Devlopment', image: 'https://example.com/robot-design.jpg', description: 'Master the art of devlopment and building realtime web from scratch.' },
];

const CoursesAndWorkshops: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-2 bg-gradient-to-b from-purple-950 to-black text-purple-50 pt-14">
       <RoboticHeader />
      <div className="container mx-auto px-16">
       
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Courses & Workshops</h2>
        <div className="flex justify-center mb-8 space-x-6">
          {courses.map((course, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-2 rounded-lg transition-all duration-300 ${
                activeTab === index
                  ? 'bg-indigo-800 text-white'
                  : 'bg-purple-900 text-gray-300 hover:bg-indigo-600'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {course.title}
            </button>
          ))}
        </div>
        <div
          className="rounded-lg p-6 border overflow-hidden text-purple-300"
          style={{
            borderImage: 'linear-gradient(45deg, #f3ec78, #af4261) 1',
            borderRadius: '12px',
            borderWidth: '2px',
            borderStyle: 'solid',
          }}
        >
          <img
            src={courses[activeTab].image}
            alt={courses[activeTab].title}
            className="w-full h-64 object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">{courses[activeTab].title}</h3>
          <p>{courses[activeTab].description}</p>
        </div>
      </div>
    </section>
  );
};

export default CoursesAndWorkshops;