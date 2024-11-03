import { useEffect, useRef, FC } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  content: string;
  onClick?: () => void;
}

const Card: FC<CardProps> = ({ title, content, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 10,
        duration: 2,
        // repeat: -1,
        // yoyo: true,
        // ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg sm:p-4 p-2 sm:w-64 sm:h-50 flex flex-col justify-between cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="flex gap-5 justify-center">
        <h2 className="md:text-2xl flex justify-center font-bold text-gradient ">{title}</h2>
        <motion.div
          className="w-8 h-8 mb-1  bg-neutral-200 rounded-full flex items-center justify-center sm:self-end self-center"
          whileHover={{ scale: 1.2, rotate: 90 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </div>
      <p className="text-textSec mb-4 sm:block hidden justify-center items-center ml-3 text-sm">{content}</p>
    </motion.div>
  );
};    



const HomePageButton: FC = () => {
  const navigate = useNavigate();

  function resClickHandeler() {
    navigate("/resources");
  }

  function contactClickhandler() {
    navigate("/contact");
  }

  return (
    <div className="relative w-full h-full bg-transparent overflow-hidden">
      {/* <StarryBackground /> */}
      <div className="absolute inset-0 flex items-end justify-center sm:space-x-48 space-x-4 sm:mb-20 mb-32 ">
        <Card
          onClick={resClickHandeler}
          title="Resources"
          content="documentation / tutorial"
        />
        <Card
          onClick={contactClickhandler}
          title="Contact us"
          content="Robonauts support team "
        />
      </div>
    </div>
  );
};

export default HomePageButton;
