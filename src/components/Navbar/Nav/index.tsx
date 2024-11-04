import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { footerLinks, Link, links } from "./projectData";
import { perspective} from "./anim";


interface SocialLinkProps {
  link: Link;
  index: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => (
  <div className="relative group">
    <a
      href={link.href}
      className={`
        relative flex items-center
        rounded-full px-5  
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
      <span className="font-medium text-black border-black p-2 px-6 underline rounded-full">
        {link.label}
      </span>
    </a>
  </div>
);



export default function Indextwo() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, to } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  style={{ originX: 0.5 }} 
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ y: -5 }}
                >
                  <a href={to}>{title}</a>
                </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        <div className="grid grid-cols-2 gap-8 mt-3">
          {footerLinks.map((link, index) => (
            <SocialLink key={index} link={link} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
