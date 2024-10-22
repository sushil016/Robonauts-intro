import RoverImage from "../../assets/rover.png"

interface RobotMascotProps {
  scrollPosition: number;
}
const Rover: React.FC<RobotMascotProps> = ({ scrollPosition }) => {
  const mascotPosition = Math.min(scrollPosition / 5, 80); // Max 80vh from top
  return (
    <div
    className="fixed sm:flex  left-2 top-[2vh]  transition-all duration-300 ease-out"
    style={{ top: `${mascotPosition}vh` }}
  >
    <img className="w-28 h-28 text-purple-400 animate-pulse"
    src={RoverImage}
    alt="rover"
    />
  </div>
  )
}

export default Rover
