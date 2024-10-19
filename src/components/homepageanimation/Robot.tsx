import RobotImage from "../../assets/robot.png"
const Robot = () => {
  return (
    <div
    className="fixed sm:right-[200px] top-[60vh]  right-2 transition-all duration-300 ease-out"
  >
    <img className="w-24 h-30 text-purple-400 animate-bounce"
    src={RobotImage}
    alt="rover"
    />
  </div>
  )
}

export default Robot