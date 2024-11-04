//  import { ReactNode } from 'react';
// // import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
//  import React from 'react';
// // // Move the Link interface here
// export interface Link {
//   icon: ReactNode;
//   href: string;
//   label: string;
//   color: string;
//   stats: string;
//   description: string;
// }

// interface SocialLinkProps {
//   link: Link;
//   index: number;
// }


// // // import { Link } from './SocialLinks';
// // // //  import { Link } from './SocialLinks';

// // export const socialLinks: Link[] = [
// //   {
// //     icon: React.createElement(Instagram, { className: "w-6 h-6" }),
// //     href: "https://www.instagram.com/robonauts_team",
// //     label: "Instagram",
// //     color: "hover:text-pink-500",
// //     stats: "1K+ Followers",
// //     description: "Follow our journey"
// //   },
// //   {
// //     icon: React.createElement(Github, { className: "w-6 h-6" }),
// //     href: "https://github.com/sushil016/Robonauts-intro",
// //     label: "Github",
// //     color: "hover:text-neutral-300",
// //     stats: "5+ Stars",
// //     description: "View our projects"
// //   },
// //   {
// //     icon: React.createElement(Linkedin, { className: "w-6 h-6" }),
// //     href: "https://www.linkedin.com/company/robonauts/",
// //     label: "LinkedIn",
// //     color: "hover:text-blue-500",
// //     stats: "1K+ Network",
// //     description: "Connect with us"
// //   },
// //   {
// //     icon: React.createElement(Mail, { className: "w-6 h-6" }),
// //     href: "mailto:contact@robonauts.com",
// //     label: "Email",
// //     color: "hover:text-red-500",
// //     stats: "24/7 Support",
// //     description: "Get in touch"
// //   }
// // ]; 

// const SocialLink: React.FC<SocialLinkProps> = ({ link }) => (
//   <div className="relative group">
//     <a
//       href={link.href}
//       className={`
//         relative flex items-center
//         px-6  rounded-full
//         bg-white/5 backdrop-blur-sm
//         hover:bg-white/10
//         transition-all duration-500
//         ${link.color}
//       `}
//     >
//       <span className="relative flex items-center justify-center">
//         {link.icon}
//         <span className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300">
//           {link.icon}
//         </span>
//       </span>
//       <span className="font-medium text-black border-black p-2 px-4 rounded-full">
//         {link.label}
//       </span>
//     </a>
//   </div>
// );

// export default SocialLink;

