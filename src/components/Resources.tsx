import React from 'react';
import { Book, Video, Link as LinkIcon } from 'lucide-react';

interface ResourcesProps {
  isDarkTheme: boolean;
}

const Resources: React.FC<ResourcesProps> = ({ isDarkTheme }) => {
  const resources = [
    { title: 'Introduction to Robotics', type: 'book', link: '#' },
    { title: 'Advanced AI for Robotics', type: 'video', link: '#' },
    { title: 'ROS Tutorial', type: 'link', link: '#' },
    { title: 'Machine Learning for Robotics', type: 'book', link: '#' },
    { title: 'Computer Vision Techniques', type: 'video', link: '#' },
    { title: 'Arduino Projects for Beginners', type: 'link', link: '#' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <Book className="w-6 h-6" />;
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'link':
        return <LinkIcon className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'} py-20`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className={`${isDarkTheme ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                {getIcon(resource.type)}
                <h3 className={`ml-3 text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>{resource.title}</h3>
              </div>
              <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                Click to access this {resource.type === 'link' ? 'resource' : resource.type}.
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;