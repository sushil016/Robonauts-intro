import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '../ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import Input from '../ui/input';

interface Member {
  id: number;
  name: string;
  department: string;
  domain: string;
  subgroup: string;
  yearOfStudy: string;
  email: string;
  phone: string;
}

interface Statistics {
  totalMembers: number;
  departmentStats: { department: string; _count: number }[];
  domainStats: { domain: string; _count: number }[];
  yearStats: { yearOfStudy: string; _count: number }[];
}

interface Filters {
  department: string;
  domain: string;
  subgroup: string;
  yearOfStudy: string;
  search: string;
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: string;
}

interface Pagination {
  total: number;
  pages: number;
  currentPage: number;
}

const AdminDashboardMember: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<Filters>({
    department: '',
    domain: '',
    subgroup: '',
    yearOfStudy: '',
    search: '',
    page: 1,
    limit: 10,
    sortBy: 'createdAt',
    sortOrder: 'desc'
  });
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    pages: 0,
    currentPage: 1
  });

  // Fetch members based on filters
  const fetchMembers = async () => {
    try {
      const queryParams = new URLSearchParams({
        ...filters,
        page: filters.page.toString(),
        limit: filters.limit.toString()
      });

      const response = await fetch(`http://localhost:3000/api/admin/members?${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch members');

      const data = await response.json();
      setMembers(data.members);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  // Fetch statistics
  const fetchStatistics = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/statistics', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch statistics');

      const data = await response.json();
      setStatistics(data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  useEffect(() => {
    console.log(loading);
    
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchMembers(), fetchStatistics()]);
      setLoading(false);
    };

    loadData();
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: 1 // Reset page when filters change
    }));
  };

  return (
    <div className="p-6 space-y-6 py-20 " style={{ background: 'linear-gradient(to bottom, #2c003e, #000000)' }}>
      {/* Statistics Cards */}
      {statistics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Members</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{statistics.totalMembers}</p>
            </CardContent>
          </Card>
          
          {/* Department Distribution Chart */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Department Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statistics.departmentStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="_count" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Select
              value={filters.department}
              onValueChange={(value) => handleFilterChange('department', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {['CS', 'IT', 'ExTC', 'MECH', 'IS', 'Chemical'].map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.domain}
              onValueChange={(value) => handleFilterChange('domain', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Domain" />
              </SelectTrigger>
              <SelectContent>
                {['Programming', 'Designing', 'Electronics', 'Development', 'Social Media'].map(domain => (
                  <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.yearOfStudy}
              onValueChange={(value) => handleFilterChange('yearOfStudy', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Year of Study" />
              </SelectTrigger>
              <SelectContent>
                {['1st Year', '2nd Year', '3rd Year', '4th Year'].map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search members..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Members Table */}
      <Card>
        <CardHeader>
          <CardTitle>Members List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-zinc-700">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium">Name</th>
                  <th scope="col" className="px-6 py-3 font-medium">Department</th>
                  <th scope="col" className="px-6 py-3 font-medium">Domain</th>
                  <th scope="col" className="px-6 py-3 font-medium">Subgroup</th>
                  <th scope="col" className="px-6 py-3 font-medium">Year</th>
                  <th scope="col" className="px-6 py-3 font-medium">Email</th>
                  <th scope="col" className="px-6 py-3 font-medium">Phone</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="bg-zinc-950/10 border-b hover:bg-zinc-900">
                    <td className="px-6 py-4">{member.name}</td>
                    <td className="px-6 py-4">{member.department}</td>
                    <td className="px-6 py-4">{member.domain}</td>
                    <td className="px-6 py-4">{member.subgroup}</td>
                    <td className="px-6 py-4">{member.yearOfStudy}</td>
                    <td className="px-6 py-4">{member.email}</td>
                    <td className="px-6 py-4">{member.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-500">
              Showing {((pagination.currentPage - 1) * filters.limit) + 1} to {Math.min(pagination.currentPage * filters.limit, pagination.total)} of {pagination.total} members
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleFilterChange('page', filters.page - 1)}
                disabled={filters.page === 1}
                className="p-2 rounded-md hover:bg-black disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleFilterChange('page', filters.page + 1)}
                disabled={filters.page === pagination.pages}
                className="p-2 rounded-md hover:bg-black disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardMember;