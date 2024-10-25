import { motion } from 'framer-motion';
import styles from './AnimatedButton.module.scss';

interface AnimatedButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
}

interface PerspectiveTextProps {
  label: string;
}

function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

export default function AnimatedButton({ isActive, toggleMenu }: AnimatedButtonProps) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el} onClick={toggleMenu}>
          <PerspectiveText label="Menu" />
        </div>
        <div className={styles.el} onClick={toggleMenu}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}