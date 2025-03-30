import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Index from './Navbar/Menu';


gsap.registerPlugin(ScrollTrigger);



const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // const menuVariants = {
  //   hidden: { opacity: 0, x: '100%' },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  // };

  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg' : 'bg-transparent'}`}>
      <div  className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 md:ml-11">
          <img src="/logo-irl.webp" alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-gradient"><img src="/robonauts.png" alt="logo" className=' h-8' /></span>
        </Link>
        <div className="md:hidden ">
          <button
            // className="flex items-center px-3 py-2 border rounded text-purple-400 border-purple-400 hover:text-white hover:border-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg> */}
            <Index />
          </button>
        </div>
        <nav className="hidden md:block ">
          <ul className="flex space-x-8  sm:pr-32">
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link to="/achievements" className="hover:text-purple-400 transition-colors">Achievements</Link></li>
            <li><Link to="/courses" className="hover:text-purple-400 transition-colors">Workshops</Link></li>
            <li><Link to="/events" className="hover:text-purple-400 transition-colors">Events</Link></li>
            <Index />
          </ul>
        </nav>
        <motion.nav
          // className={`fixed top-0 right-0 h-full w-3/4 bg-gradient-to-b from-indigo-950 to-black text-purple-300 shadow-lg md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          // initial="hidden"
          // // animate={isMenuOpen ? 'visible' : 'hidden'}
          // variants={menuVariants}
        >
          
          {/* <div className="flex justify-end p-4">
            <button
              className="text-white"
              onClick={closeMenu}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Close</title>
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div> */}
          {/* <ul className="flex flex-col space-y-4 p-4">
            <li><Link to="/" className="hover:text-purple-400 transition-colors" onClick={closeMenu}>Home</Link></li>
            <li><a href="#projects" className="hover:text-purple-400 transition-colors" onClick={closeMenu}>Projects</a></li>
            <li><a href="#team" className="hover:text-purple-400 transition-colors" onClick={closeMenu}>Team</a></li>
            <li><a href="#events" className="hover:text-purple-400 transition-colors" onClick={closeMenu}>Events</a></li>
            <li><Link to="/courses" className="hover:text-purple-400 transition-colors" onClick={closeMenu}>Courses</Link></li>
            <li><Link to="/resources" className="hover:text-purple-400 transition-colors" onClick={closeMenu}>Resources</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400 transition-colors" onClick={closeMenu}>Contact</Link></li>
          </ul> */}

          
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;