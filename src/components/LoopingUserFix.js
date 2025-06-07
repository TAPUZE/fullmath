import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { fixUserDataLoop, resetUserLoginCount } from '../utils/fixLoopingUser';

const LoopingUserFix = () => {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState('');
  const [isFixed, setIsFixed] = useState(false);

  const handleFixData = () => {
    if (!currentUser?.email) {
      setMessage('No user logged in');
      return;
    }

    const success = fixUserDataLoop(currentUser.email);
    if (success) {
      setMessage('✅ User data fixed successfully! Please refresh the page.');
      setIsFixed(true);
    } else {
      setMessage('❌ Failed to fix user data');
    }
  };

  const handleResetLoginCount = () => {
    if (!currentUser?.email) {
      setMessage('No user logged in');
      return;
    }

    const success = resetUserLoginCount(currentUser.email);
    if (success) {
      setMessage('✅ Login count reset to 1! Please refresh the page.');
      setIsFixed(true);
    } else {
      setMessage('❌ Failed to reset login count');
    }
  };

  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-lg z-50 max-w-md">
      <h3 className="font-bold text-lg mb-2">🔄 User Data Loop Detected</h3>
      <p className="text-sm mb-4">
        Your user data appears to be in a loop. Click below to fix it:
      </p>
      
      {currentUser?.email && (
        <p className="text-xs mb-3 font-mono bg-gray-100 p-2 rounded">
          User: {currentUser.email}
        </p>
      )}
      
      <div className="space-y-2">
        <button
          onClick={handleFixData}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-sm"
          disabled={isFixed}
        >
          Fix User Data
        </button>
        
        <button
          onClick={handleResetLoginCount}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-sm"
          disabled={isFixed}
        >
          Reset Login Count Only
        </button>
        
        {isFixed && (
          <button
            onClick={handleRefreshPage}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-sm"
          >
            Refresh Page
          </button>
        )}
      </div>
      
      {message && (
        <div className="mt-3 p-2 bg-white rounded text-xs">
          {message}
        </div>
      )}
    </div>
  );
};

export default LoopingUserFix;
