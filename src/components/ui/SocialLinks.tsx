import React from 'react';

interface SocialLinkProps {
  link: {
    href: string;
    icon: React.ReactNode;
    label: string;
    color: string;
  };
}

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => (
  <div className="relative group">
    <a
      href={link.href}
      className={`
        relative flex items-center
        px-6  rounded-full
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
      <span className="font-medium text-black border-black p-2 px-4 rounded-full">
        {link.label}
      </span>
    </a>
  </div>
);

export default SocialLink;