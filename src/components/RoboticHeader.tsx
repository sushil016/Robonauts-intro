import React from 'react'

const RoboticHeader: React.FC = () => {
  return (
    <header className="flex flex-col items-center mb-12">
      <div className="relative w-24 h-24 mb-4">
        <svg className="w-24 h-24 mx-auto mb-4" viewBox="0 0 100 100">
          <circle className="text-purple-700 stroke-current" strokeWidth="6" cx="50" cy="50" r="40" fill="none" />
          <circle className="text-purple-400 stroke-current animate-spin origin-center" strokeWidth="6" strokeDasharray="75 100" cx="50" cy="50" r="40" fill="none" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-12 h-12 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-purple-300 mb-4">Team Robonauts</h1>
      <p className="text-xl text-purple-400">Exploring the Future of Robotics</p>
    </header>
  )
}

export default RoboticHeader