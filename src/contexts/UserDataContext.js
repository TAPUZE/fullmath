import React, { createContext, useContext, useState, useEffect } from 'react';

const UserDataContext = createContext();

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  // Generate a unique storage key for each user based on email
  const getUserStorageKey = (email) => {
    return `userData_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
  };

  // Load user-specific data
  const loadUserData = (email) => {
    if (!email) return {};
    
    const storageKey = getUserStorageKey(email);
    const savedData = localStorage.getItem(storageKey);
    
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        return getDefaultUserData(email);
      }
    }
    
    return getDefaultUserData(email);
  };

  // Get default user data structure
  const getDefaultUserData = (email) => {
    return {
      email: email,
      profile: {
        name: email.split('@')[0],
        joinDate: new Date().toISOString(),
        lastLoginDate: new Date().toISOString(),
        loginCount: 1
      },
      progress: {
        completedLessons: [],
        currentLesson: null,
        totalTimeSpent: 0,
        lessonsStarted: [],
        achievements: [],
        streakDays: 0,
        lastActivityDate: new Date().toISOString()
      },
      settings: {
        theme: 'light',
        language: 'he',
        notifications: true,
        soundEnabled: true,
        autoSave: true
      },
      statistics: {
        totalExercisesSolved: 0,
        averageScore: 0,
        bestScore: 0,
        totalSessionTime: 0,
        favoriteTopics: [],
        weakAreas: [],
        strongAreas: []
      },
      customData: {}
    };
  };

  // Save user-specific data
  const saveUserData = (email, data) => {
    if (!email) return;
    
    const storageKey = getUserStorageKey(email);
    const dataToSave = {
      ...data,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    setUserData(prev => ({
      ...prev,
      [email]: dataToSave
    }));
  };

  // Initialize user data when they log in
  const initializeUserData = (email) => {
    const existingData = loadUserData(email);
    
    // Update login statistics
    const updatedData = {
      ...existingData,
      profile: {
        ...existingData.profile,
        lastLoginDate: new Date().toISOString(),
        loginCount: (existingData.profile.loginCount || 0) + 1
      }
    };
    
    saveUserData(email, updatedData);
    return updatedData;
  };

  // Update specific user data sections
  const updateUserProgress = (email, progressData) => {
    const currentData = userData[email] || loadUserData(email);
    const updatedData = {
      ...currentData,
      progress: {
        ...currentData.progress,
        ...progressData,
        lastActivityDate: new Date().toISOString()
      }
    };
    saveUserData(email, updatedData);
  };

  const updateUserSettings = (email, settingsData) => {
    const currentData = userData[email] || loadUserData(email);
    const updatedData = {
      ...currentData,
      settings: {
        ...currentData.settings,
        ...settingsData
      }
    };
    saveUserData(email, updatedData);
  };

  const updateUserStatistics = (email, statisticsData) => {
    const currentData = userData[email] || loadUserData(email);
    const updatedData = {
      ...currentData,
      statistics: {
        ...currentData.statistics,
        ...statisticsData
      }
    };
    saveUserData(email, updatedData);
  };

  // Add completed lesson
  const addCompletedLesson = (email, lessonId, score = null, timeSpent = 0) => {
    const currentData = userData[email] || loadUserData(email);
    const completedLessons = currentData.progress.completedLessons || [];
    
    // Check if lesson already completed
    const existingLesson = completedLessons.find(lesson => lesson.id === lessonId);
    
    if (existingLesson) {
      // Update existing lesson record if score is better
      if (score !== null && (!existingLesson.score || score > existingLesson.score)) {
        existingLesson.score = score;
        existingLesson.completedDate = new Date().toISOString();
      }
    } else {
      // Add new lesson completion
      completedLessons.push({
        id: lessonId,
        completedDate: new Date().toISOString(),
        score: score,
        timeSpent: timeSpent
      });
    }

    const updatedProgress = {
      ...currentData.progress,
      completedLessons: completedLessons,
      totalTimeSpent: (currentData.progress.totalTimeSpent || 0) + timeSpent
    };

    updateUserProgress(email, updatedProgress);
  };

  // Remove completed lesson
  const removeCompletedLesson = (email, lessonId) => {
    const currentData = userData[email] || loadUserData(email);
    const completedLessons = currentData.progress.completedLessons || [];
    
    // Remove lesson from completed list
    const updatedCompletedLessons = completedLessons.filter(lesson => lesson.id !== lessonId);
    
    const updatedProgress = {
      ...currentData.progress,
      completedLessons: updatedCompletedLessons
    };

    updateUserProgress(email, updatedProgress);
    console.log(`Lesson ${lessonId} removed from completed lessons for user: ${email}`);
  };

  // Get user's completed lessons
  const getCompletedLessons = (email) => {
    const currentData = userData[email] || loadUserData(email);
    return currentData.progress.completedLessons || [];
  };

  // Check if lesson is completed
  const isLessonCompleted = (email, lessonId) => {
    const completedLessons = getCompletedLessons(email);
    return completedLessons.some(lesson => lesson.id === lessonId);
  };

  // Get user's overall progress percentage
  const getOverallProgress = (email, totalLessonsCount = 100) => {
    const completedLessons = getCompletedLessons(email);
    return Math.round((completedLessons.length / totalLessonsCount) * 100);
  };

  // Export/Import user data (for backup/restore)
  const exportUserData = (email) => {
    const currentData = userData[email] || loadUserData(email);
    return JSON.stringify(currentData, null, 2);
  };

  const importUserData = (email, dataString) => {
    try {
      const importedData = JSON.parse(dataString);
      saveUserData(email, importedData);
      return true;
    } catch (error) {
      console.error('Error importing user data:', error);
      return false;
    }
  };

  // Clear all data for a specific user
  const clearUserData = (email) => {
    const storageKey = getUserStorageKey(email);
    localStorage.removeItem(storageKey);
    setUserData(prev => {
      const newData = { ...prev };
      delete newData[email];
      return newData;
    });
  };

  // Get all users that have data stored
  const getAllUserEmails = () => {
    const allKeys = Object.keys(localStorage);
    return allKeys
      .filter(key => key.startsWith('userData_'))
      .map(key => {
        const data = localStorage.getItem(key);
        try {
          const parsed = JSON.parse(data);
          return parsed.email;
        } catch {
          return null;
        }
      })
      .filter(email => email !== null);
  };

  const value = {
    // Data management
    loadUserData,
    saveUserData,
    initializeUserData,
    
    // Progress tracking
    updateUserProgress,
    addCompletedLesson,
    removeCompletedLesson,
    getCompletedLessons,
    isLessonCompleted,
    getOverallProgress,
    
    // Settings and statistics
    updateUserSettings,
    updateUserStatistics,
    
    // Utility functions
    exportUserData,
    importUserData,
    clearUserData,
    getAllUserEmails,
    
    // Current user data
    userData
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
