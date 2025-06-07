import React from 'react';
import { useNavigate } from 'react-router-dom';

const DevHeader = ({ devData, onLogout }) => {
  const navigate = useNavigate();

  const getAccessLevelColor = (level) => {
    switch (level) {
      case 'super-admin':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'admin':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'content-manager':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getEnvironmentColor = (env) => {
    return env === 'production' 
      ? 'bg-red-100 text-red-800 border-red-200' 
      : 'bg-yellow-100 text-yellow-800 border-yellow-200';
  };

  return (
    <header className="bg-white shadow-sm border-b-2 border-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo and title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🛠️</span>
              </div>
              <div className="mr-4">
                <h1 className="text-xl font-bold text-gray-900">מערכת ניהול מפתחים</h1>
                <p className="text-sm text-gray-500">Master Control Panel</p>
              </div>
            </div>

            {/* Status badges */}
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getAccessLevelColor(devData.accessLevel)}`}>
                {devData.accessLevel.replace('-', ' ').toUpperCase()}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getEnvironmentColor(devData.environment)}`}>
                {devData.environment.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Right side - User info and actions */}
          <div className="flex items-center space-x-4">            {/* Quick navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => navigate('/teachers')}
                className="px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
              >
                👨‍🏫 מערכת מורים
              </button>
              <button
                onClick={() => navigate('/admin')}
                className="px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
              >
                👨‍💼 מערכת מנהלים
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
              >
                🏠 מערכת תלמידים
              </button>
            </div>

            {/* User info */}
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{devData.name}</p>
                <p className="text-xs text-gray-500">{devData.email}</p>
              </div>
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-medium text-sm">
                  {devData.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            {/* Logout button */}
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <span>🚪</span>
              <span>התנתק</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DevHeader;
