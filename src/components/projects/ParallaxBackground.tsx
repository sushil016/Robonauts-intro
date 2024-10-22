import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  type: 'security' | 'battle' | 'content';
  progress: MotionValue<number>;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ type, progress }) => {
  const x = useTransform(progress, [0, 1], ['10%', '-0%']);

  const getBackgroundImage = () => {
    switch (type) {
      case 'security':
        return 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80';
      case 'battle':
        return 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80';
      case 'content':
        return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80';
      default:
        return '';
    }
  };

  return (
    <motion.div 
      className="absolute inset-0 z-0"
      style={{
        x,
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.4)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
    </motion.div>
  );
};

export default ParallaxBackground;