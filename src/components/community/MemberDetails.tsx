import React, { useState } from 'react';
import { AlertCircle, Check } from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '../ui/card';
import { 
  Alert, 
  AlertDescription 
} from '../ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ClubMembershipForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    department: '',
    domain: '',
    subgroup: '',
    name: '',
    email: '',
    phone: '',
    yearOfStudy: ''
  });

  // Error and success state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Domain options mapping
  const subgroupOptions: Record<string, string[]> = {
    Programming: ['Robotic Programming', 'Battlebots', 'DSA'],
    Designing: ['SolidWorks', 'CAD'],
    Electronics: ['Robotic Electronics', 'BattleBots Electronics', 'Drone'],
    Development: ['Web Development', 'App Development', 'UI/UX'],
    'Social Media': ['Social Media Handling', 'Video Editing', 'Graphic Design']
  };

  // Validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.domain) newErrors.domain = 'Domain is required';
    if (!formData.subgroup) newErrors.subgroup = 'Subgroup is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.yearOfStudy) newErrors.yearOfStudy = 'Year of study is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitSuccess(true);
      setFormData({
        department: '',
        domain: '',
        subgroup: '',
        name: '',
        email: '',
        phone: '',
        yearOfStudy: ''
      });
    } catch {
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto my-32 bg-secondary ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Club Membership Application
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Department Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Department</label>
            <Select
              value={formData.department}
              onValueChange={(value) => setFormData({...formData, department: value})}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                {['CS', 'IT', 'ExTC', 'MECH', 'IS', 'Chemical'].map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.department && (
              <p className="text-red-500 text-sm">{errors.department}</p>
            )}
          </div>

          {/* Domain Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Domain</label>
            <Select
              value={formData.domain}
              onValueChange={(value) => {
                setFormData({...formData, domain: value, subgroup: ''});
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Domain" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(subgroupOptions).map((domain) => (
                  <SelectItem key={domain} value={domain}>
                    {domain}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.domain && (
              <p className="text-red-500 text-sm">{errors.domain}</p>
            )}
          </div>

          {/* Subgroup Selection */}
          {formData.domain && (
            <div className="space-y-2">
              <label className="block text-sm font-medium">Subgroup</label>
              <Select
                value={formData.subgroup}
                onValueChange={(value) => setFormData({...formData, subgroup: value})}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Subgroup" />
                </SelectTrigger>
                <SelectContent>
                  {subgroupOptions[formData.domain]?.map((subgroup) => (
                    <SelectItem key={subgroup} value={subgroup}>
                      {subgroup}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.subgroup && (
                <p className="text-red-500 text-sm">{errors.subgroup}</p>
              )}
            </div>
          )}

          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 block w-full rounded-md border border-neutral-400 px-3 py-2 bg-secondary"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 bg-secondary"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 bg-secondary"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Year of Study</label>
              <Select
                value={formData.yearOfStudy}
                onValueChange={(value) => setFormData({...formData, yearOfStudy: value})}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.yearOfStudy && (
                <p className="text-red-500 text-sm">{errors.yearOfStudy}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          {/* Success Message */}
          {submitSuccess && (
            <Alert className="bg-green-50 border-green-200">
              <Check className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700">
                Your application has been submitted successfully!
              </AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {errors.submit && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {errors.submit}
              </AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ClubMembershipForm;