import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavigation from './admin/AdminNavigation';
import AdminOverview from './admin/AdminOverview';
import TeachersManagement from './admin/TeachersManagement';
import ClassesManagement from './admin/ClassesManagement';
import LessonsManagement from './admin/LessonsManagement';
import SchoolSettings from './admin/SchoolSettings';
import AdminHeader from './admin/AdminHeader';

const SchoolAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [adminData, setAdminData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const savedAdmin = localStorage.getItem('schoolAdmin');
    if (savedAdmin) {
      try {
        const admin = JSON.parse(savedAdmin);
        setAdminData(admin);
      } catch (error) {
        console.error('Error parsing admin data:', error);
        navigate('/admin/login');
      }
    } else {
      navigate('/admin/login');
    }
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('schoolAdmin');
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">טוען פאנל ניהול...</p>
        </div>
      </div>
    );
  }

  if (!adminData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <AdminHeader adminData={adminData} onLogout={handleLogout} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ברוך הבא, {adminData.name}
          </h1>
          <p className="text-gray-600">
            מערכת ניהול {adminData.schoolName} | קוד: {adminData.schoolCode}
          </p>
        </div>

        {/* Navigation Tabs */}
        <AdminNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'overview' && (
            <AdminOverview adminData={adminData} />
          )}
          
          {activeTab === 'teachers' && (
            <TeachersManagement adminData={adminData} />
          )}
          
          {activeTab === 'classes' && (
            <ClassesManagement adminData={adminData} />
          )}
          
          {activeTab === 'lessons' && (
            <LessonsManagement adminData={adminData} />
          )}
          
          {activeTab === 'settings' && (
            <SchoolSettings adminData={adminData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolAdminDashboard;
