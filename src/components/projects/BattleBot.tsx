import React from 'react';
import { motion } from 'framer-motion';

interface BattleBotProps {
  className?: string;
}

const BattleBot: React.FC<BattleBotProps> = ({ className = '' }) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="absolute inset-0 bg-red-500/20 blur-xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.img 
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80" 
        alt="Battle Robot"
        className="relative z-10 rounded-lg shadow-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 opacity-20 blur"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default BattleBot;