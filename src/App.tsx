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
import AdminDashboard from './components/community/AdminDashboard';
import ClubMembershipForm from './components/community/MemberDetails';
import AdminDashboardMember from './components/community/MemberInfoPage';
import useMousePosition from './components/hooks/mousePosition';
import { motion } from "framer-motion";



function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { x, y } = useMousePosition();
  const [bgVariant, setBgVariant] = useState("default");

  const [cursorText, setCursorText] = useState("");

  const variants = {
    default: {
      x: x - 20,
      y: y - 20,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },

    navbarCursor: {
      opacity: 1,
      width: 60,
      height: 60,
      border: "none",
      backgroundColor: "#FFA500",
      mixBlendMode: "difference" as const,
      x: x - 30,
      y: y - 30,
    },
    nameCursor: {
      opacity: 1,
      width: 100,
      height: 50,
      border:"none",
      background: "gradient",
      x: x - 50,
      y: y - 25,
      cursor: "none",
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };


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
      <div>
        <motion.div
          variants={variants}
          transition={spring}
          animate={bgVariant}
          className="cursor-none z-50 h-[50px] w-[50px] rounded-full border-2 border-orange-600 fixed top-0 left-0 pointer-events-none justify-center items-center shadow-lg shadow-violet-500"
        > 
          <span className="text-orange-600 m-auto font-size-inherit flex justify-center items-center h-full text-sm">
            {cursorText}
          </span>
        </motion.div>
      </div>
        <div className="lightning-robot-bg"></div>
        <Header  />
        {/* <ThemeSwitch /> */}
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              {/* <ClubOverview  /> */}
              {/* <Meteor/> */}
              <Projects
               setBgVariant={setBgVariant}
               setCursorText={setCursorText}
              />
              <TeamMembers />
              <EventsAndCompetitions/>
              {/* <ExploreButtons /> */}
            </>
          } />
          <Route path="/courses" element={<CoursesAndWorkshops  />} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/community" element={<ApplicationForm  />} />
          <Route path="/member" element={<ClubMembershipForm  />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/member" element={<AdminDashboardMember/>} />
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