import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: 'Computer Science', // default value
    experience: 'beginner', // default value
    previousProject: '',
    interests: '',
    why: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        department: 'Computer Science',
        experience: 'beginner',
        previousProject: '',
        interests: '',
        why: ''
      });
    } catch (error) {
      setSubmitStatus((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zin py-20 px-4"  style={{ background: 'linear-gradient(to bottom, #2c003e, #000000)' }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/10"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Join Robonauts</h2>
          <p className="text-gray-400 mb-8">
            Fill out the form below to apply for membership in our robotics community.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700/50 border border-cyan-500/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Aspirant"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700/50 border border-cyan-500/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="OP"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700/50 border border-cyan-500/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="robonauts@info.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700/50 border border-cyan-500/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="1234555555"
                />
              </div>
            </div>

            {/* Department and Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Department *
                </label>
                <select
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700/50 border border-cyan-500/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="IT">IT</option>
                  <option value="EXTC">EXTC</option>
                  <option value="MECH">MECH</option>
                  <option value="IS">IS</option>
                  <option value="Chemical">Chemical</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Robotics Experience *
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700/50 border border-cyan-500/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Previous Project */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Previous Projects
              </label>
              <textarea
                name="previousProject"
                value={formData.previousProject}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-zinc-700/50 border border-cyan-500/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Describe any previous projects you've worked on..."
              />
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Areas of Interest *
              </label>
              <input
                type="text"
                name="interests"
                required
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-zinc-700/50 border border-cyan-500/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="e.g. Robotics , AI , Programming , Web Devlopment , Mechanical Design."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Why do you want to join? 
              </label>
              <textarea
                name="why"
                required
                value={formData.why}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-zinc-700/50 border border-cyan-500/10 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Tell us about your motivation to join Robonauts..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-green-400"
              >
                <CheckCircle className="w-5 h-5" />
                Application submitted successfully!
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-red-400"
              >
                <AlertCircle className="w-5 h-5" />
                Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationForm;