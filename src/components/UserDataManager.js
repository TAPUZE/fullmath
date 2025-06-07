import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useUserData } from '../contexts/UserDataContext';
import { migrateLegacyProgressData, getMigrationSummary, clearLegacyData } from '../utils/migrationUtils';

const UserDataManager = () => {
  const { currentUser } = useAuth();
  const { userData } = useUserData();
  const [migrationResult, setMigrationResult] = useState(null);
  const [summary, setSummary] = useState(null);

  const handleMigration = () => {
    if (currentUser?.email) {
      const result = migrateLegacyProgressData(currentUser.email);
      setMigrationResult(result);
    }
  };

  const handleGetSummary = () => {
    if (currentUser?.email) {
      const summaryData = getMigrationSummary(currentUser.email);
      setSummary(summaryData);
    }
  };

  const handleClearLegacy = () => {
    const confirmed = window.confirm(
      'Are you sure you want to clear all legacy localStorage data? This action cannot be undone!'
    );
    if (confirmed) {
      const result = clearLegacyData(true);
      alert(result.message);
    }
  };

  const currentUserData = currentUser?.email ? userData[currentUser.email] : null;

  if (!currentUser) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">User Data Manager</h2>
        <p className="text-gray-600">Please log in to manage your user data.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">User Data Manager</h2>
      <p className="text-gray-600 mb-4">Current User: {currentUser.email}</p>

      <div className="space-y-4">
        {/* Current User Data Summary */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Current User Data</h3>
          {currentUserData ? (
            <div className="text-sm text-gray-600">
              <p>Completed Lessons: {currentUserData.progress?.completedLessons?.length || 0}</p>
              <p>Started Lessons: {currentUserData.progress?.lessonsStarted?.length || 0}</p>
              <p>Exercise Data: {Object.keys(currentUserData.exercises || {}).length} items</p>
              <p>Quiz Data: {Object.keys(currentUserData.quizzes || {}).length} items</p>
              <p>Last Updated: {currentUserData.lastUpdated ? new Date(currentUserData.lastUpdated).toLocaleString() : 'N/A'}</p>
            </div>
          ) : (
            <p className="text-sm text-gray-600">No user data found</p>
          )}
        </div>

        {/* Migration Controls */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleMigration}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
          >
            Migrate Legacy Data
          </button>
          <button
            onClick={handleGetSummary}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            Get Migration Summary
          </button>
          <button
            onClick={handleClearLegacy}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
          >
            Clear Legacy Data
          </button>
        </div>

        {/* Migration Result */}
        {migrationResult && (
          <div className={`p-4 rounded-lg ${migrationResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <h4 className="font-semibold mb-2">Migration Result</h4>
            <p className="text-sm">{migrationResult.message}</p>
            {migrationResult.success && migrationResult.migrationResults && (
              <div className="mt-2 text-xs text-gray-600">
                <p>Completed Lessons: {migrationResult.migrationResults.completedLessons.length}</p>
                <p>Started Lessons: {migrationResult.migrationResults.startedLessons.length}</p>
                <p>Exercise Data: {Object.keys(migrationResult.migrationResults.exerciseData).length}</p>
                <p>Quiz Data: {Object.keys(migrationResult.migrationResults.quizData).length}</p>
              </div>
            )}
          </div>
        )}

        {/* Summary Result */}
        {summary && (
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
            <h4 className="font-semibold mb-2">Migration Summary</h4>
            {summary.error ? (
              <p className="text-sm text-red-600">{summary.error}</p>
            ) : (
              <div className="text-sm text-gray-600">
                <p>User Has Data: {summary.userHasData ? 'Yes' : 'No'}</p>
                {summary.userHasData && (
                  <>
                    <p>Completed Lessons: {summary.completedLessons}</p>
                    <p>Started Lessons: {summary.startedLessons}</p>
                    <p>Exercise Data: {summary.exerciseData}</p>
                    <p>Quiz Data: {summary.quizData}</p>
                    <p>Last Updated: {summary.lastUpdated ? new Date(summary.lastUpdated).toLocaleString() : 'N/A'}</p>
                  </>
                )}
                <p>Legacy Data Available: {summary.legacyDataAvailable ? 'Yes' : 'No'}</p>
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">Instructions</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• <strong>Migrate Legacy Data:</strong> Convert old localStorage progress to user-specific format</li>
            <li>• <strong>Get Migration Summary:</strong> View current user data status and availability of legacy data</li>
            <li>• <strong>Clear Legacy Data:</strong> Remove old localStorage entries (use after migration)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDataManager;
