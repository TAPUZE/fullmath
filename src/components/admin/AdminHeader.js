import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = ({ adminData, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const getAdminInitials = () => {
    if (adminData.name) {
      return adminData.name.charAt(0).toUpperCase();
    }
    return adminData.email.charAt(0).toUpperCase();
  };

  return (
    <header className="bg-white shadow-md border-b-2 border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏫</span>
              <span className="text-xl font-bold text-gray-800">ניהול בית ספר</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium">
              אתר הספר
            </Link>
            <Link to="/teachers" className="text-gray-600 hover:text-purple-600 font-medium">
              פורטל מורים
            </Link>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 p-2"
            >
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 font-medium hidden sm:block">
                  {adminData.name || adminData.email.split('@')[0]}
                </span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-purple-600">
                  {getAdminInitials()}
                </div>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👨‍💼</span>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {adminData.name || adminData.email.split('@')[0]}
                      </p>
                      <p className="text-xs text-gray-500">{adminData.email}</p>
                      <p className="text-xs text-purple-600 font-medium">מנהל בית ספר</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t">
                    <p className="text-xs text-gray-500">
                      <strong>בית ספר:</strong> {adminData.schoolName}
                    </p>
                    <p className="text-xs text-gray-500">
                      <strong>קוד:</strong> {adminData.schoolCode}
                    </p>
                  </div>
                </div>
                
                <div className="p-2">
                  <button
                    onClick={() => {
                      onLogout();
                      setShowDropdown(false);
                    }}
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
          <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-purple-600">
            אתר הספר
          </Link>
          <Link to="/teachers" className="block px-3 py-2 text-gray-600 hover:text-purple-600">
            פורטל מורים
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
