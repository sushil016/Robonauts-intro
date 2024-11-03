import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import AnimatedButton from './Buttons/AnimatedButton';
import Indextwo from './Nav';

const getMenuDimensions = () => {
  // For mobile devices (width < 768px)
  if (window.innerWidth < 768) {
    return {
      open: {
        width: "100vw", // Full width on mobile
        height: "100vh", // Full height on mobile
        top: "-10px",
        right: "-15px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
      },
      closed: {
        width: "0px", // Smaller button on mobile
        height: "0px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
      }
    };
  }
  
  // For tablets (768px <= width < 1024px)
  if (window.innerWidth < 1024) {
    return {
      open: {
        width: "450px",
        height: "550px",
        top: "-10px",
        right: "-15px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
      },
      closed: {
        width: "90px",
        height: "38px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
      }
    };
  }
  
  // For desktop (width >= 1024px)
  return {
    open: {
      width: "380px",
      height: "550px",
      top: "-10px",
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
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const [menuVariants, setMenuVariants] = useState(getMenuDimensions());

  // Update menu dimensions when window is resized
  useEffect(() => {
    const handleResize = () => {
      setMenuVariants(getMenuDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${styles.header} ${isActive ? styles.menuActive : ''}`}>
      <motion.div
        className={styles.menu}
        variants={menuVariants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {isActive && (
          <div className={`block ${window.innerWidth < 768 ? 'w-screen h-screen' : ''}`}>
            <Indextwo />
          </div>
        )}
      </motion.div>
      <AnimatedButton 
        isActive={isActive} 
        toggleMenu={() => {
          setIsActive(!isActive);
          // Prevent body scroll when menu is open on mobile
          if (window.innerWidth < 768) {
            document.body.style.overflow = !isActive ? 'hidden' : 'auto';
          }
        }} 
      />
    </div>
  );
}