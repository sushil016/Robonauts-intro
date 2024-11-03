import React, { useState } from 'react';
import RoboticHeader from './RoboticHeader';

const courses = [
  { title: 'Introduction to Robotics', image: '', description: 'Learn the basics of robotics and automation.' },
  { title: 'Advanced AI for Robots', image: '', description: 'Implement cutting-edge AI algorithms in robotic systems.' },
  { title: 'Robot Design and Fabrication', image: '', description: 'Master the art of designing and building robots from scratch.' },
  { title: 'Programming / Devlopment', image: '', description: 'Master the art of devlopment and building realtime web from scratch.' },
];

const CoursesAndWorkshops: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-2 text-purple-50 pt-14 backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom, #2c003e, #000000)' }}>
       <RoboticHeader />
      <div className="container mx-auto px-16">
       
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Courses & Workshops</h2>
        <div className="flex flex-wrap sm:flex-nowrap justify-center items-center mb-8 gap-5 ">
          {courses.map((course, index) => (
            <button
              key={index}
              className={`w-full   rounded-lg grid grid-cols-2 transition-all duration-300 p-4 text-center sm:pl-24 pl-20 text-sm ${
                activeTab === index
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'bg-purple-800 text-gray-200 hover:bg-indigo-500'
              } md:text-center md:text-sm`}
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
            className="w-full h-auto object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">{courses[activeTab].title}</h3>
          <p>{courses[activeTab].description}</p>
        </div>
      </div>
    </section>
  );
};

export default CoursesAndWorkshops;