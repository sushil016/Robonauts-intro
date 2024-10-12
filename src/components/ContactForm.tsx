import React, { useState } from 'react'
import Input from './ui/input'
import Textarea from './ui/textarea'
import Button from './ui/button'


const RoboticContactForm: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { name, email, message })
    // Add your form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your Name"
          className="bg-purple-900 border-purple-600 text-purple-100 placeholder-purple-400 pl-10"
        />
        <svg className="w-6 h-6 text-purple-400 absolute left-2 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div className="relative">
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your.email@example.com"
          className="bg-purple-900 border-purple-600 text-purple-100 placeholder-purple-400 pl-10"
        />
        <svg className="w-6 h-6 text-purple-400 absolute left-2 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="relative">
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Your message here..."
          rows={4}
          className="bg-purple-900 border-purple-600 text-purple-100 placeholder-purple-400 pl-10 pt-3"
        />
        <svg className="w-6 h-6 text-purple-400 absolute left-2 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <span className="mr-2">Send Message</span>
        <svg className="w-5 h-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Button>
    </form>
  )
}

export default RoboticContactForm