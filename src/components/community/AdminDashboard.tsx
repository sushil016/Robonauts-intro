import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download,  User, Mail, Wrench, Clock } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Define TypeScript interfaces
interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: Department;
  experience: ExperienceLevel;
  previousProject?: string;
  interests: string;
  why: string;
  createdAt: string;
}

type Department = 'Computer Science' | 'IT' | 'EXTC' | 'MECH' | 'IS' | 'Chemical';
type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

interface Stats {
  total: number;
  byDepartment: Record<Department, number>;
  byExperience: Record<ExperienceLevel, number>;
}

const departments: Department[] = ['Computer Science', 'IT', 'EXTC', 'MECH', 'IS', 'Chemical'];
const experienceLevels: ExperienceLevel[] = ['beginner', 'intermediate', 'advanced'];

const AdminDashboard: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterDepartment, setFilterDepartment] = useState<'all' | Department>('all');
  const [filterExperience, setFilterExperience] = useState<'all' | ExperienceLevel>('all');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    byDepartment: {} as Record<Department, number>,
    byExperience: {} as Record<ExperienceLevel, number>
  });

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3000/api/applications');
      const data: Application[] = await response.json();
      setApplications(data);
      calculateStats(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching applications:', error);
      setLoading(false);
    }
  };

  const calculateStats = (data: Application[]): void => {
    const newStats: Stats = {
      total: data.length,
      byDepartment: {} as Record<Department, number>,
      byExperience: {} as Record<ExperienceLevel, number>
    };

    departments.forEach(dept => {
      newStats.byDepartment[dept] = 0;
    });

    experienceLevels.forEach(exp => {
      newStats.byExperience[exp] = 0;
    });

    data.forEach(app => {
      newStats.byDepartment[app.department]++;
      newStats.byExperience[app.experience]++;
    });

    setStats(newStats);
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filterDepartment === 'all' || app.department === filterDepartment;
    const matchesExperience = filterExperience === 'all' || app.experience === filterExperience;

    return matchesSearch && matchesDepartment && matchesExperience;
  });

  const exportToCSV = (): void => {
    const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Department', 'Experience'];
    const csvData = filteredApplications.map(app => 
      [app.firstName, app.lastName, app.email, app.phone, app.department, app.experience].join(',')
    );
    
    const csv = [headers.join(','), ...csvData].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'applications.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bgPrimary">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6" style={{ background: 'linear-gradient(to bottom, #2c003e, #000000)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 mt-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Applications Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  Total Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
              </CardContent>
            </Card>
            {/* Add department and experience stats cards */}
            {departments.slice(0, 3).map(dept => (
              <Card key={dept}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">
                    {dept}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.byDepartment[dept] || 0}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#1E1E2E] text-white border border-zinc-700 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <Select
            value={filterDepartment}
            onValueChange={(value) => setFilterDepartment(value as 'all' | Department)}
          >
            <SelectTrigger className="bg-secondary border-zinc-700 text-white">
              <SelectValue placeholder="Filter by Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map(dept => (
                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filterExperience}
            onValueChange={(value) => setFilterExperience(value as 'all' | ExperienceLevel)}
          >
            <SelectTrigger className="bg-secondary border-zinc-700 text-white">
              <SelectValue placeholder="Filter by Experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Experience Levels</SelectItem>
              {experienceLevels.map(exp => (
                <SelectItem key={exp} value={exp}>{exp}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <button
            onClick={exportToCSV}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            Export to CSV
          </button>
        </motion.div>

        {/* Applications List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <AnimatePresence>
            {filteredApplications.map((application) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-zinc-900/60 rounded-lg p-6 hover:bg-zinc-800/50 transition-colors cursor-pointer"
                onClick={() => setSelectedApplication(application)}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-cyan-500" />
                    <div>
                      <div className="font-medium text-white">
                        {application.firstName} {application.lastName}
                      </div>
                      <div className="text-sm text-gray-400">
                        {application.department}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-500" />
                    <div className="text-gray-300">{application.email}</div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-cyan-500" />
                    <div className="text-gray-300 capitalize">{application.experience}</div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan-500" />
                    <div className="text-gray-300">
                      {new Date(application.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Application Detail Modal */}
        <AnimatePresence>
          {selectedApplication && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedApplication(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-zinc-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Application Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400">Name</label>
                    <div className="text-white">
                      {selectedApplication.firstName} {selectedApplication.lastName}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-400">Contact</label>
                    <div className="text-white">{selectedApplication.email}</div>
                    <div className="text-white">{selectedApplication.phone}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-400">Department</label>
                    <div className="text-white">{selectedApplication.department}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-400">Experience Level</label>
                    <div className="text-white capitalize">{selectedApplication.experience}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-400">Previous Projects</label>
                    <div className="text-white whitespace-pre-wrap">
                      {selectedApplication.previousProject || 'None specified'}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-400">Areas of Interest</label>
                    <div className="text-white">{selectedApplication.interests}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-400">Motivation</label>
                    <div className="text-white whitespace-pre-wrap">{selectedApplication.why}</div>
                  </div>
                </div>
                
                <button
                  className="mt-6 w-full py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors"
                  onClick={() => setSelectedApplication(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;