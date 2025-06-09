import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const UserHeader = () => {
  const { currentUser, logout, isTeacher, isStudent } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  if (!currentUser) return null;

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  const getUserInitials = () => {
    if (currentUser.name) {
      return currentUser.name.charAt(0).toUpperCase();
    }
    return currentUser.email.charAt(0).toUpperCase();
  };

  const getRoleIcon = () => {
    return isTeacher() ? '👨‍🏫' : '🎓';
  };

  const getRoleText = () => {
    return isTeacher() ? 'מורה' : 'תלמיד';
  };

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">📚</span>
              <span className="text-xl font-bold text-gray-800">מערכת לימוד מתמטיקה</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {isStudent() && (
              <>
                <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">
                  דף הבית
                </Link>
                <Link to="/lessons" className="text-gray-600 hover:text-blue-600 font-medium">
                  שיעורים
                </Link>
                <Link to="/progress" className="text-gray-600 hover:text-blue-600 font-medium">
                  התקדמות
                </Link>
              </>
            )}
            
            {isTeacher() && (
              <>
                <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">
                  דף הבית
                </Link>
                <Link to="/teachers" className="text-gray-600 hover:text-blue-600 font-medium">
                  מרכז המורים
                </Link>
              </>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            >
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 font-medium hidden sm:block">
                  {currentUser.name || currentUser.email.split('@')[0]}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  isTeacher() ? 'bg-green-500' : 'bg-blue-500'
                }`}>
                  {getUserInitials()}
                </div>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getRoleIcon()}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {currentUser.name || currentUser.email.split('@')[0]}
                      </p>
                      <p className="text-xs text-gray-500">{currentUser.email}</p>
                      <p className="text-xs text-blue-600 font-medium">{getRoleText()}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-right px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center space-x-2"
                  >
                    <span>🚪</span>
                    <span>יציאה מהמערכת</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t bg-gray-50">
        <div className="px-4 py-2 space-y-1">
          {isStudent() && (
            <>
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                דף הבית
              </Link>
              <Link to="/lessons" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                שיעורים
              </Link>
              <Link to="/progress" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                התקדמות
              </Link>
            </>
          )}
          
          {isTeacher() && (
            <>
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                דף הבית
              </Link>
              <Link to="/teachers" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                מרכז המורים
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
