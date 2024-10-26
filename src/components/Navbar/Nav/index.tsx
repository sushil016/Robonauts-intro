import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { footerLinks, links } from "./projectData";
import { perspective} from "./anim";
import SocialLink from "../../ui/SocialLinks";

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
                  whileHover={{ y: -5 }} // Adjust the y-axis on hover
                >
                  <a href={to}>{title}</a>
                </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        <div className="grid grid-cols-2 gap-8 mt-5">
          {footerLinks.map((link, index) => (
        <SocialLink key={index} link={{ ...link, icon: link.icon }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
