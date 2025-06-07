import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, requireRole = null, fallback = null }) => {
  const { currentUser, isAuthenticated } = useAuth();

  // Debug logging
  console.log('ProtectedRoute Debug:', {
    isAuthenticated,
    currentUser,
    requireRole,
    userRole: currentUser?.role
  });

  // If not authenticated, return null (will show login screen)
  if (!isAuthenticated) {
    return fallback || null;
  }

  // If specific role is required, check user role
  if (requireRole && currentUser.role !== requireRole) {
    console.log('Access denied:', {
      requireRole,
      userRole: currentUser.role,
      userEmail: currentUser.email
    });
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">אין הרשאה</h2>
          <p className="text-gray-600 mb-6">
            {requireRole === 'teacher' 
              ? 'עמוד זה מיועד למורים בלבד'
              : 'עמוד זה מיועד לתלמידים בלבד'
            }
          </p>
          <p className="text-sm text-gray-500">
            משתמש נוכחי: <span className="font-medium">{currentUser.email}</span> ({currentUser.role === 'teacher' ? 'מורה' : 'תלמיד'})
          </p>
        </div>
      </div>
    );
  }

  console.log('Access granted for:', currentUser.email);
  return children;
};

export default ProtectedRoute;
