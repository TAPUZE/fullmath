import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DevNavigation from './dev/DevNavigation';
import SystemOverview from './dev/SystemOverview';
import SchoolsManagement from './dev/SchoolsManagement';
import UsersManagement from './dev/UsersManagement';
import FeaturesManagement from './dev/FeaturesManagement';
import LessonsManagement from './dev/LessonsManagement';
import SystemSettings from './dev/SystemSettings';
import Analytics from './dev/Analytics';
import DevHeader from './dev/DevHeader';

const DevDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [devData, setDevData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if dev is logged in
    const savedDev = localStorage.getItem('devUser');
    if (savedDev) {
      try {
        const dev = JSON.parse(savedDev);
        setDevData(dev);
      } catch (error) {
        console.error('Error parsing dev data:', error);
        navigate('/dev/login');
      }
    } else {
      navigate('/dev/login');
    }
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('devUser');
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">טוען פאנל פיתוח...</p>
        </div>
      </div>
    );
  }

  if (!devData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dev Header */}
      <DevHeader devData={devData} onLogout={handleLogout} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🚀 פאנל פיתוח - ברוך הבא, {devData.name}
          </h1>
          <p className="text-gray-600">
            מערכת ניהול כללית | רמת גישה: {devData.accessLevel} | סביבה: {devData.environment}
          </p>
        </div>

        {/* Navigation Tabs */}
        <DevNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'overview' && (
            <SystemOverview devData={devData} />
          )}
          
          {activeTab === 'schools' && (
            <SchoolsManagement devData={devData} />
          )}
          
          {activeTab === 'users' && (
            <UsersManagement devData={devData} />
          )}
          
          {activeTab === 'features' && (
            <FeaturesManagement devData={devData} />
          )}
          
          {activeTab === 'lessons' && (
            <LessonsManagement devData={devData} />
          )}
          
          {activeTab === 'analytics' && (
            <Analytics devData={devData} />
          )}
          
          {activeTab === 'settings' && (
            <SystemSettings devData={devData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DevDashboard;
