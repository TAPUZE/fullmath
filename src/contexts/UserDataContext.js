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
    console.log('UserDataContext: loadUserData called for:', email);
    if (!email) {
      console.log('UserDataContext: No email provided, returning empty object');
      return {};
    }
    
    const storageKey = getUserStorageKey(email);
    console.log('UserDataContext: Using storage key:', storageKey);
    const savedData = localStorage.getItem(storageKey);
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        console.log('UserDataContext: Successfully parsed saved data:', parsedData);
        return parsedData;
      } catch (error) {
        console.error('UserDataContext: Error parsing user data:', error);
        const defaultData = getDefaultUserData(email);
        console.log('UserDataContext: Returning default data due to parse error:', defaultData);
        return defaultData;
      }
    }
    
    const defaultData = getDefaultUserData(email);
    console.log('UserDataContext: No saved data found, returning default:', defaultData);
    return defaultData;
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
  };  // Save user-specific data
  const saveUserData = (email, data) => {
    if (!email) return;
    
    try {
      const storageKey = getUserStorageKey(email);
      const dataToSave = {
        ...data,
        lastUpdated: new Date().toISOString()
      };
      
      // Check if we're about to save the same data (prevent unnecessary writes)
      const existingData = localStorage.getItem(storageKey);
      if (existingData) {
        try {
          const parsed = JSON.parse(existingData);
          // If the data is essentially the same, don't save
          if (JSON.stringify(parsed) === JSON.stringify(dataToSave)) {
            console.log('UserDataContext: Data unchanged, skipping save');
            return;
          }
        } catch (e) {
          // Continue with save if we can't parse existing data
        }
      }
      
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
      setUserData(prev => ({
        ...prev,
        [email]: dataToSave
      }));
    } catch (error) {
      console.error('Error saving user data:', error);
      
      // Handle quota exceeded error
      if (error.name === 'QuotaExceededError') {
        console.warn('localStorage quota exceeded, trying to clear old data');
        // Could implement cleanup logic here
      }
    }
  };// Initialize user data when they log in
  const initializeUserData = (email) => {
    console.log('UserDataContext: initializeUserData called for:', email);
    try {
      console.log('UserDataContext: Loading existing data...');
      const existingData = loadUserData(email);
      console.log('UserDataContext: Existing data loaded:', existingData);
      
      // Check if we've already updated login count today to prevent loops
      const today = new Date().toDateString();
      const lastLoginDate = existingData.profile.lastLoginDate ? new Date(existingData.profile.lastLoginDate).toDateString() : null;
      
      // Only increment login count if it's a new day
      const shouldIncrementCount = lastLoginDate !== today;
      
      const updatedData = {
        ...existingData,
        profile: {
          ...existingData.profile,
          lastLoginDate: new Date().toISOString(),
          loginCount: shouldIncrementCount ? (existingData.profile.loginCount || 0) + 1 : existingData.profile.loginCount
        }
      };
      
      console.log('UserDataContext: About to save updated data:', updatedData);
      saveUserData(email, updatedData);
      console.log('UserDataContext: Data saved successfully');
      return updatedData;
    } catch (error) {
      console.error('UserDataContext: Error initializing user data:', error);
      // Return default data if initialization fails
      const defaultData = getDefaultUserData(email);
      console.log('UserDataContext: Returning default data:', defaultData);
      return defaultData;
    }
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
  };  // Update user data with specific fields
  const updateUserData = (email, updates) => {
    const currentData = userData[email] || loadUserData(email);
    
    // Deep merge nested objects like exercises and quizzes
    const updatedData = {
      ...currentData,
      ...updates,
      lastUpdated: new Date().toISOString()
    };
    
    // Handle nested objects correctly
    if (updates.exercises) {
      updatedData.exercises = {
        ...currentData.exercises,
        ...updates.exercises
      };
    }
    
    if (updates.quizzes) {
      updatedData.quizzes = {
        ...currentData.quizzes,
        ...updates.quizzes
      };
    }
    
    saveUserData(email, updatedData);
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
    updateUserData,
    
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
