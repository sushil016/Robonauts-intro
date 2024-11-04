import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminLogin = () => {
  const [secretKey, setSecretKey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretKey === 'aspirantop') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else if (secretKey === 'aspirant') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/member');
    } else {
      setError('Invalid secret key');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-orange-500/10 rounded-full"
              style={{
                width: Math.random() * 1000 + 50,
                height: Math.random() * 3000 + 50,
                left: `${Math.random() * 1000}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Circuit board pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,165,0,0.1) 0%, transparent 10%),
            linear-gradient(90deg, transparent 95%, rgba(255,165,0,0.1) 95%),
            linear-gradient(transparent 95%, rgba(255,165,0,0.1) 95%)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-black/40 p-8 rounded-2xl backdrop-blur-xl w-96 border border-orange-500/20 shadow-2xl shadow-orange-500/10"
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-500/20">
          <svg 
            className="w-10 h-10 text-orange-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center text-white mt-4">Admin Access</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="password"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 text-white border border-orange-500/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder-white/30"
              placeholder="Enter secret key"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/10 to-purple-500/10 -z-10 blur-xl" />
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-medium shadow-lg shadow-orange-500/25"
          >
            Access Control Panel
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin; 