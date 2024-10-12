import React from 'react'
import RoboticContactForm from './ContactForm'
import RoboticInfoSection from './RoboticInfoSection'
import RoboticHeader from './RoboticHeader'


const RoboticContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <RoboticHeader />
        <div className="grid md:grid-cols-2 gap-12">
          <RoboticInfoSection />
          <RoboticContactForm />
        </div>
      </div>
    </div>
  )
}

export default RoboticContactPage