import React, { useState } from 'react';

const courses = [
  { title: 'Introduction to Robotics', image: 'https://example.com/intro-robotics.jpg', description: 'Learn the basics of robotics and automation.' },
  { title: 'Advanced AI for Robots', image: 'https://example.com/ai-robotics.jpg', description: 'Implement cutting-edge AI algorithms in robotic systems.' },
  { title: 'Robot Design and Fabrication', image: 'https://example.com/robot-design.jpg', description: 'Master the art of designing and building robots from scratch.' },
];

const CoursesAndWorkshops: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="courses" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Courses & Workshops</h2>
        <div className="flex justify-center mb-8">
          {courses.map((course, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-2 rounded-lg transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {course.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-700 rounded-lg p-6">
          <img
            src={courses[activeTab].image}
            alt={courses[activeTab].title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">{courses[activeTab].title}</h3>
          <p>{courses[activeTab].description}</p>
        </div>
      </div>
    </section>
  );
};

export default CoursesAndWorkshops;