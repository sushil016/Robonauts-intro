import React from 'react';
import { ChevronDown } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black">
        <div className="w-full h-full" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4
        }}></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4 animate-pulse">Welcome to Robonauts</h1>
        <p className="text-2xl mb-8">Innovate. Create. Automate.</p>
        <div className="animate-bounce mt-16">
          <ChevronDown className="w-12 h-12 text-white" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;