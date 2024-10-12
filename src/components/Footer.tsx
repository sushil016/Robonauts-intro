import React from 'react';
import { Instagram, ArrowUp, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/robonauts_team?igsh=MTNzdXlrNGI4OHo4NA==" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="w-10 h-10 text-purple-500 hover:text-pink-600" />
          </a>
          <a href="github.com/sushil016/Robonauts-intro" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-10 h-10 text-purple-500 hover:text-neutral-300" />
          </a>
          <a href="https://www.linkedin.com/company/robonauts/" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-10 h-10 text-purple-500 hover:text-indigo-600" />
          </a>
        </div>
        <p className="text-center text-gray-400 mb-8">
          © 2024 Robonauts. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <ArrowUp className="w-6 h-6 right-28" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;