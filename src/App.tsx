import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import Resources from './components/Resources';
import Contact from './components/Contact';
import RobotMascot from './components/RobotMascotProps';
import LandingPage from './components/Landingpage';
import AIMLImpact from './components/AIMLImpact';
import TechnologyShowcase from './components/TechnologyShowcase';
import Mentors from './components/Mentors';
import ApplicationForm from './components/community/ApplicationForm';
import AdminDashboard from './components/community/AdminDashboard';
import ClubMembershipForm from './components/community/MemberDetails';
import AdminDashboardMember from './components/community/MemberInfoPage';
import useMousePosition from './components/hooks/mousePosition';
import { motion } from "framer-motion";
import AdminLogin from './components/admin/AdminLogin';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AchievementsPage from './components/Achievements';
import EventHighlights from './components/Achieve';
import EventsPage from './pages/Events';
import Workshops from './components/Workshops';
import BattleBots from './pages/workshops/BattleBots';
import BattleBotDetail8kg from './pages/workshops/BattleBotDetail8kg';

// Import placeholder components for the other workshop types
// We will create these components later
const RoboSoccer = () => <div className="min-h-screen pt-20 bg-black text-white"><h1 className="text-center text-3xl">Robo Soccer Workshop - Coming Soon</h1></div>;
const RoboSumo = () => <div className="min-h-screen pt-20 bg-black text-white"><h1 className="text-center text-3xl">Robo Sumo Workshop - Coming Soon</h1></div>;
const Drones = () => <div className="min-h-screen pt-20 bg-black text-white"><h1 className="text-center text-3xl">Drones Workshop - Coming Soon</h1></div>;
const SkyPlane = () => <div className="min-h-screen pt-20 bg-black text-white"><h1 className="text-center text-3xl">Boeing Sky Plane Workshop - Coming Soon</h1></div>;
const RCCar = () => <div className="min-h-screen pt-20 bg-black text-white"><h1 className="text-center text-3xl">RC Car Workshop - Coming Soon</h1></div>;
const WaterBoat = () => <div className="min-h-screen pt-20 bg-black text-white"><h1 className="text-center text-3xl">Water Boat Workshop - Coming Soon</h1></div>;
const CustomPCB = () => <div className="min-h-screen pt-20 bg-black text-white"><h1 className="text-center text-3xl">Custom PCB Workshop - Coming Soon</h1></div>;
const WebDevelopment = () => <div className="min-h-screen pt-20 bg-black text-white"><h1 className="text-center text-3xl">Web Development Workshop - Coming Soon</h1></div>;

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { x, y } = useMousePosition();
  const [bgVariant, _setBgVariant] = useState("default");

  const [cursorText, _setCursorText] = useState("");

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
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              <EventHighlights />
              {/* <EventsAndCompetitions/> */}
              <TechnologyShowcase />
              <AIMLImpact />
              <Mentors />
              {/* <TeamMembers /> */}
            </>
          } />
          <Route path="/workshop" element={<Workshops />} />
          <Route path="/workshop/battlebots-making" element={<BattleBots />} />
          <Route path="/workshop/battlebots-making/:category" element={<BattleBotDetail8kg />} />
          <Route path="/workshop/robosoccer-making" element={<RoboSoccer />} />
          <Route path="/workshop/robosumo-making" element={<RoboSumo />} />
          <Route path="/workshop/drones-making" element={<Drones />} />
          <Route path="/workshop/skyplane-making" element={<SkyPlane />} />
          <Route path="/workshop/rccar-making" element={<RCCar />} />
          <Route path="/workshop/waterboat-making" element={<WaterBoat />} />
          <Route path="/workshop/pcb-making" element={<CustomPCB />} />
          <Route path="/workshop/webdev-making" element={<WebDevelopment />} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/community" element={<ApplicationForm  />} />
          <Route path="/member" element={<ClubMembershipForm  />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/member" element={
            <ProtectedRoute>
              <AdminDashboardMember />
            </ProtectedRoute>
          } />
        </Routes>
        
        <Footer  />
      
        <RobotMascot scrollPosition={scrollPosition} />
        <FloatingActionButton  />
      </div>
    </Router>
  );
}

export default App;