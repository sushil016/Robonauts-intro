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
                whileHover={{ scale: 1.1 }}
              >
                <a href={to}>{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-5">
            {footerLinks.map((link, index) => (
              <SocialLink key={index} link={{ ...link, icon: link.icon}} />
            ))}
          </div>
      </motion.div>
    </div>
  );
}
