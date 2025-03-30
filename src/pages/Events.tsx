
import UpcomingCompetitions from "../components/UpcomingCompetitions";
import Menu from "../components/Navbar/Menu";
import EventsAndCompetitions from "../components/EventsAndCompetitions";


const EventsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Menu />
      
      {/* Hero Section */}
      {/* <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/95 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
          >
            Events & Competitions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Discover the exciting world of robotics competitions, workshops, and events hosted by Team Robonauts
          </motion.p>
        </div>
      </motion.section> */}
      
      {/* Upcoming Competitions */}
      <UpcomingCompetitions />
      
      {/* Past Event Highlights */}
      {/* <EventHighlights /> */}
      <EventsAndCompetitions />
      
      {/* <Footer /> */}
    </div>
  );
};

export default EventsPage;
