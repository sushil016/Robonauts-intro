import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactProps {
  isDarkTheme: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkTheme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'} py-20`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Contact Us</h2>
        <div className={`max-w-2xl mx-auto ${isDarkTheme ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-8`}>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className={`block mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className={`block mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className={`block mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className={`w-full px-3 py-2 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full ${isDarkTheme ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center`}
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;