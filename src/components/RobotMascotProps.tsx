import React from 'react';
import { Cpu } from 'lucide-react';

interface RobotMascotProps {
  scrollPosition: number;
}

const RobotMascot: React.FC<RobotMascotProps> = ({ scrollPosition }) => {
  const mascotPosition = Math.min(scrollPosition / 5, 80); // Max 80vh from top

  return (
    <div
      className="fixed right-8 transition-all duration-300 ease-out"
      style={{ top: `${mascotPosition}vh` }}
    >
      <Cpu className="w-12 h-12 text-purple-400 animate-bounce" />
    </div>
  );
};

export default RobotMascot;