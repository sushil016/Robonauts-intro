
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import React, { ReactNode } from 'react';



export const links = [
  {
    title: "Resources",
    to: "/resources"
  },
  {
    title: "Documentation",
    to: "/courses"
  },
  {
    title: "Contact us",
    to: "/contact"
  },
  {
    title: "Join us",
    to: "/community"
  },
  {
    title: "Our Members",
    to: "/member"
  },

];

 export interface Link {
  icon: ReactNode;
  href: string;
  label: string;
  color: string;
  stats: string;
  description: string;
}

export const footerLinks: Link[] = [
  {
    icon: React.createElement(Instagram, { className: "w-6 h-6" }),
    href: "https://www.instagram.com/robonauts_team",
    label: "Instagram",
    color: "hover:text-pink-500",
    stats: "1K+ Followers",
    description: "Follow our journey"
  },
  {
    icon: React.createElement(Github, { className: "w-6 h-6" }),
    href: "https://github.com/sushil016/Robonauts-intro",
    label: "Github",
    color: "hover:text-neutral-300",
    stats: "5+ Stars",
    description: "View our projects"
  },
  {
    icon: React.createElement(Linkedin, { className: "w-6 h-6" }),
    href: "https://www.linkedin.com/company/robonauts/",
    label: "LinkedIn",
    color: "hover:text-blue-500",
    stats: "1K+ Network",
    description: "Connect with us"
  },
  {
    icon: React.createElement(Mail, { className: "w-6 h-6" }),
    href: "mailto:contact@robonauts.com",
    label: "Email",
    color: "hover:text-red-500",
    stats: "24/7 Support",
    description: "Get in touch"
  }
];



