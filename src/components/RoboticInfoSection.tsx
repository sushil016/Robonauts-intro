import React from 'react'

const RoboticInfoSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-purple-300 mb-4">Contact Us</h2>
      <p className="text-purple-200">
        Have questions about our Robonauts club or the upcoming orientation? We'd love to hear from you! Fill out the
        form, and we'll get back to you faster than a robot can process a command.
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-purple-300">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>info@robonautsclub.com</span>
        </div>
        <div className="flex items-center space-x-3 text-purple-300">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>+91 7007115675</span>
        </div>
        <div className="flex items-center space-x-3 text-purple-300">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Room No. 211 , Bharati Vidyapeeth college of Engineering , Navi Mumbai</span>
        </div>
      </div>
    </div>
  )
}

export default RoboticInfoSection