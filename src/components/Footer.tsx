import React, { useState, useEffect } from 'react';
import { Instagram, ArrowUp, Linkedin, Github, Mail, Star, Heart } from 'lucide-react';

interface Link {
  icon: JSX.Element;
  href: string;
  label: string;
  color: string;
  stats: string;
  description: string;
}

interface SocialLinkProps {
  link: Link;
  index: number;
}

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const socialLinks: Link[] = [
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/robonauts_team",
      label: "Instagram",
      color: "hover:text-pink-500",
      stats: "1K+ Followers",
      description: "Follow our journey"
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/sushil016/Robonauts-intro",
      label: "Github",
      color: "hover:text-neutral-300",
      stats: "5+ Stars",
      description: "View our projects"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/robonauts/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
      stats: "1K+ Network",
      description: "Connect with us"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:contact@robonauts.com",
      label: "Email",
      color: "hover:text-red-500",
      stats: "24/7 Support",
      description: "Get in touch"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Tooltip = ({ isVisible, stats, description }: { isVisible: boolean, stats: string, description: string }) => (
    <div
      className={`
        absolute left-1 -translate-x-1/2
        w-max px-4 py-2
        bg-black/90 backdrop-blur-xl
        rounded-lg border border-white/20
        transition-all duration-300 ease-out
        ${isVisible 
          ? 'opacity-100 -top-20 transform-none' 
          : 'opacity-0 -top-16 translate-y-2 pointer-events-none'
        }
        shadow-[0_8px_32px_rgba(0,0,0,0.2)]
      `}
    >
      <div className="text-center whitespace-nowrap">
        <p className="text-white font-medium text-sm mb-1">{stats}</p>
        <p className="text-white/60 text-xs">{description}</p>
      </div>
      <div className="
        absolute left-1/2 -translate-x-1/2 bottom-[-8px]
        w-4 h-4 rotate-45
        bg-white/0 backdrop-blur-xl
        border-r border-b border-white/30
      "/>
    </div>
  );

  const SocialLink = ({ link, index }: SocialLinkProps) => (
    <div
      className="relative group"
      onMouseEnter={() => setHoveredLink(index)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <a
        href={link.href}
        className={`
          relative flex items-center gap-3
          px-6 py-3 rounded-full
          bg-white/5 backdrop-blur-sm
          hover:bg-white/10
          transition-all duration-500
          ${link.color}
        `}
      >
        <span className="relative flex items-center justify-center">
          {link.icon}
          <span className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            {link.icon}
          </span>
        </span>
        <span className="font-medium text-white">
          {link.label}
        </span>
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </a>
      <Tooltip 
        isVisible={hoveredLink === index}
        stats={link.stats}
        description={link.description}
      />
    </div>
  );

  return (
    <footer 
      className="relative bg-black/95 overflow-hidden border-t border-white/10"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(150, 500, 280, 0.3), transparent)`
        }}
      />
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center mb-12">
            <Star className="w-12 h-12 text-purple-500 mb-6 animate-float" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
              Connect With Us
            </h2>
            <p className="text-gray-400 text-center max-w-md">
              Join our community and stay updated with the latest in robotics and innovation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} link={link} index={index} />
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="flex items-center gap-2 text-gray-400">
              Made with <Heart className="w-4 h-4 text-red-500 animate-heartbeat" /> by Sushil
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Robonauts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 left-8 p-4
          bg-purple-500 rounded-full shadow-lg
          hover:bg-purple-600 transition-colors
          transform duration-300
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
      >
        <ArrowUp className="w-6 h-6 text-white animate-bounce" />
      </button>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          @keyframes particle {
            0% { transform: translate(0, 0) scale(1); opacity: 0; }
            50% { transform: translate(10px, -10px) scale(2); opacity: 0.5; }
            100% { transform: translate(20px, -20px) scale(1); opacity: 0; }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
          }
          .animate-particle {
            animation: particle 2s ease-in-out infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;