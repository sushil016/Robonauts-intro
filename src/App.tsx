import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import EventsAndCompetitions from './components/EventsAndCompetitions';
import CoursesAndWorkshops from './components/CoursesAndWorkshops';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import Resources from './components/Resources';
import Contact from './components/Contact';
import RobotMascot from './components/RobotMascotProps';
import LandingPage from './components/Landingpage';
import TeamMembers from './components/TeamMembers';
import Projects from './components/Projects';
import ApplicationForm from './components/community/ApplicationForm';




function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  

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
      <div className={`min-h-screen  text-white`}>
        <div className="lightning-robot-bg"></div>
        <Header  />
        {/* <ThemeSwitch /> */}
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              {/* <ClubOverview  /> */}
              {/* <Meteor/> */}
              <Projects/>
              <TeamMembers />
              <EventsAndCompetitions/>
              {/* <ExploreButtons /> */}
            </>
          } />
          <Route path="/courses" element={<CoursesAndWorkshops  />} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/community" element={<ApplicationForm  />} />
        </Routes>
        
        <Footer  />
      
        <RobotMascot scrollPosition={scrollPosition} />
        <FloatingActionButton  />
      </div>
    </Router>
  );
}

export default App;


// bg-gradient-to-br from-purple-900 to-indigo-900