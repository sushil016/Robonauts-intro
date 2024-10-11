import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

interface HeaderProps {
  isDarkTheme: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-primary shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 md:ml-11">
          <Cpu className="w-8 h-8 text-purple-400" />
          <span className="text-2xl font-bold text-gradient">Robonauts</span>
        </Link>
        <nav>
          <ul className="flex space-x-12 sm:mr-48">
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
            <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
            <li><a href="#team" className="hover:text-purple-400 transition-colors">Team</a></li>
            <li><a href="#events" className="hover:text-purple-400 transition-colors">Events</a></li>
            <li><a href="#courses" className="hover:text-purple-400 transition-colors">Courses</a></li>
            <li><Link to="/resources" className="hover:text-purple-400 transition-colors">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;