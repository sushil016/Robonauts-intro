import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: string;
}

interface StatsOverlayProps {
  stats: Stat[];
}

const StatsOverlay: React.FC<StatsOverlayProps> = ({ stats }) => {
  return (
    <motion.div 
      className="grid grid-cols-3 gap-4"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={stat.label}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-sm text-gray-400">{stat.label}</div>
          <div className="text-xl font-semibold text-white mt-1">{stat.value}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsOverlay;