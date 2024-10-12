import { Link } from "react-router-dom"



const ExploreButtons = () => {
  return (
    <div className="w-full pb-16 gap-20 flex justify-center items-center ">
     <Link to="/courses">
      <button className="bg-zinc-950 p-5 rounded-full hover:scale-105 duration-200 border space-x-3">Explore Our Courses section</button>
      </Link>
      <Link to="/resources">
      <button className="bg-zinc-950 p-5 rounded-full hover:scale-105 duration-200 border px-10">Explore Our Resources</button>
      </Link>
    </div>
  )
}

export default ExploreButtons
