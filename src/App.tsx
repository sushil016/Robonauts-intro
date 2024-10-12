import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import ClubOverview from './components/ClubOverview';
import ProjectShowcase from './components/ProjectShowcase';
import TeamMembers from './components/TeamMembers';
import EventsAndCompetitions from './components/EventsAndCompetitions';
import CoursesAndWorkshops from './components/CoursesAndWorkshops';
import Footer from './components/Footer';

import FloatingActionButton from './components/FloatingActionButton';
import Resources from './components/Resources';
import Contact from './components/Contact';
import RobotMascot from './components/RobotMascotProps';
import LandingPage from './components/Landingpage';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
   const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const toggleTheme = () => {
  //   setIsDarkTheme(!isDarkTheme);
  // };

  return (
    <Router>
      <div className={`min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white`}>
        <div className="lightning-robot-bg"></div>
        <Header isDarkTheme={isDarkTheme} />
        {/* <ThemeSwitch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} /> */}
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              <ClubOverview  />
              <ProjectShowcase  />
              <TeamMembers  />
              <EventsAndCompetitions/>
              
            </>
          } />
          <Route path="/courses" element={<CoursesAndWorkshops  />} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/contact" element={<Contact  />} />
        </Routes>
        <Footer  />
        <RobotMascot scrollPosition={scrollPosition} />
        <FloatingActionButton isDarkTheme={isDarkTheme} />
      </div>
    </Router>
  );
}

export default App;