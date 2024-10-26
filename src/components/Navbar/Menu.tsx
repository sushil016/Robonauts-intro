import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import AnimatedButton from './Buttons/AnimatedButton';
import Indextwo from './Nav';

const menu = {
  open: {
    width: "380px",
    height: "550px",
    top: "-13px",
    right: "-15px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {isActive && (
          <div className="block">
            <Indextwo />
          </div>
        )}
      </motion.div>
      <AnimatedButton isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
    </div>
  );
}