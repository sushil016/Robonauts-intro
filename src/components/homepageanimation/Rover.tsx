import RoverImage from "../../assets/rover.png"
const Rover = () => {
  return (
    <div
    className="fixed sm:left-[200px] left-2 top-[60vh] transition-all duration-300 ease-out"
  >
    <img className="w-28 h-28 text-purple-400 animate-bounce"
    src={RoverImage}
    alt="rover"
    />
  </div>
  )
}

export default Rover
