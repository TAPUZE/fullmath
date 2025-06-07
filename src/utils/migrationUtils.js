// Migration utilities for converting legacy localStorage data to per-user format

/**
 * Migrate legacy localStorage lesson progress to user-specific format
 * @param {string} userEmail - The user's email address
 * @returns {Object} - Migration results
 */
export const migrateLegacyProgressData = (userEmail) => {
  if (!userEmail) {
    console.warn('User email is required for migration');
    return { success: false, message: 'User email is required' };
  }

  try {
    const migrationResults = {
      completedLessons: [],
      startedLessons: [],
      exerciseData: {},
      quizData: {},
      migratedItems: 0
    };

    // Get all localStorage keys
    const allKeys = Object.keys(localStorage);
    
    // Migrate completed lessons
    const completedLessonKeys = allKeys.filter(key => key.startsWith('lesson_completed_'));
    completedLessonKeys.forEach(key => {
      if (localStorage.getItem(key) === 'true') {
        const lessonId = key.replace('lesson_completed_', '');
        migrationResults.completedLessons.push({
          id: lessonId,
          completedDate: new Date().toISOString(),
          score: null,
          timeSpent: 0
        });
        migrationResults.migratedItems++;
      }
    });

    // Migrate started lessons
    const startedLessonKeys = allKeys.filter(key => key.startsWith('lesson_visited_'));
    startedLessonKeys.forEach(key => {
      if (localStorage.getItem(key) === 'true') {
        const lessonId = key.replace('lesson_visited_', '');
        if (!migrationResults.completedLessons.find(lesson => lesson.id === lessonId)) {
          migrationResults.startedLessons.push(lessonId);
          migrationResults.migratedItems++;
        }
      }
    });

    // Migrate exercise data
    const exerciseKeys = allKeys.filter(key => key.startsWith('exercise_'));
    exerciseKeys.forEach(key => {
      try {
        const exerciseData = JSON.parse(localStorage.getItem(key) || '{}');
        migrationResults.exerciseData[key] = exerciseData;
        migrationResults.migratedItems++;
      } catch (error) {
        console.warn(`Failed to migrate exercise data for key: ${key}`, error);
      }
    });

    // Migrate quiz data
    const quizKeys = allKeys.filter(key => key.startsWith('lesson_quiz_score_'));
    quizKeys.forEach(key => {
      try {
        const quizData = JSON.parse(localStorage.getItem(key) || '{}');
        migrationResults.quizData[key] = quizData;
        migrationResults.migratedItems++;
      } catch (error) {
        console.warn(`Failed to migrate quiz data for key: ${key}`, error);
      }
    });

    // Create user data structure
    const userData = {
      email: userEmail,
      profile: {
        name: userEmail.split('@')[0],
        joinDate: new Date().toISOString(),
        lastLoginDate: new Date().toISOString(),
        loginCount: 1
      },
      progress: {
        completedLessons: migrationResults.completedLessons,
        currentLesson: null,
        totalTimeSpent: 0,
        lessonsStarted: migrationResults.startedLessons,
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
        totalExercisesSolved: migrationResults.completedLessons.length,
        averageScore: 0,
        bestScore: 0,
        totalSessionTime: 0,
        favoriteTopics: [],
        weakAreas: [],
        strongAreas: []
      },
      exercises: migrationResults.exerciseData,
      quizzes: migrationResults.quizData,
      customData: {},
      lastUpdated: new Date().toISOString()
    };

    // Save to user-specific localStorage
    const userStorageKey = `userData_${userEmail.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
    localStorage.setItem(userStorageKey, JSON.stringify(userData));

    console.log(`Migration completed for ${userEmail}:`, {
      completedLessons: migrationResults.completedLessons.length,
      startedLessons: migrationResults.startedLessons.length,
      exerciseData: Object.keys(migrationResults.exerciseData).length,
      quizData: Object.keys(migrationResults.quizData).length,
      totalMigratedItems: migrationResults.migratedItems
    });

    return {
      success: true,
      message: `Successfully migrated ${migrationResults.migratedItems} items`,
      userData: userData,
      migrationResults: migrationResults
    };

  } catch (error) {
    console.error('Migration failed:', error);
    return {
      success: false,
      message: `Migration failed: ${error.message}`,
      error: error
    };
  }
};

/**
 * Clear legacy localStorage data (use with caution!)
 * @param {boolean} confirm - Must be true to actually clear data
 * @returns {Object} - Clearing results
 */
export const clearLegacyData = (confirm = false) => {
  if (!confirm) {
    return {
      success: false,
      message: 'Confirmation required to clear legacy data'
    };
  }

  try {
    const clearedKeys = [];
    const allKeys = Object.keys(localStorage);
    
    // Clear lesson completion data
    const legacyKeys = allKeys.filter(key => 
      key.startsWith('lesson_completed_') ||
      key.startsWith('lesson_visited_') ||
      key.startsWith('exercise_') ||
      key.startsWith('lesson_quiz_score_')
    );

    legacyKeys.forEach(key => {
      localStorage.removeItem(key);
      clearedKeys.push(key);
    });

    console.log(`Cleared ${clearedKeys.length} legacy localStorage items`);
    
    return {
      success: true,
      message: `Cleared ${clearedKeys.length} legacy items`,
      clearedKeys: clearedKeys
    };

  } catch (error) {
    console.error('Failed to clear legacy data:', error);
    return {
      success: false,
      message: `Failed to clear legacy data: ${error.message}`,
      error: error
    };
  }
};

/**
 * Get migration summary for debugging
 * @param {string} userEmail - The user's email address
 * @returns {Object} - Migration summary
 */
export const getMigrationSummary = (userEmail) => {
  if (!userEmail) {
    return { error: 'User email is required' };
  }

  try {
    const userStorageKey = `userData_${userEmail.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
    const userData = localStorage.getItem(userStorageKey);
    
    if (!userData) {
      return { 
        userHasData: false,
        message: 'No user data found',
        legacyDataAvailable: checkLegacyDataExists()
      };
    }

    const parsedUserData = JSON.parse(userData);
    
    return {
      userHasData: true,
      completedLessons: parsedUserData.progress?.completedLessons?.length || 0,
      startedLessons: parsedUserData.progress?.lessonsStarted?.length || 0,
      exerciseData: Object.keys(parsedUserData.exercises || {}).length,
      quizData: Object.keys(parsedUserData.quizzes || {}).length,
      lastUpdated: parsedUserData.lastUpdated,
      legacyDataAvailable: checkLegacyDataExists()
    };

  } catch (error) {
    return {
      error: `Failed to get migration summary: ${error.message}`
    };
  }
};

/**
 * Check if legacy data exists in localStorage
 * @returns {boolean} - True if legacy data exists
 */
const checkLegacyDataExists = () => {
  const allKeys = Object.keys(localStorage);
  return allKeys.some(key => 
    key.startsWith('lesson_completed_') ||
    key.startsWith('lesson_visited_') ||
    key.startsWith('exercise_') ||
    key.startsWith('lesson_quiz_score_')
  );
};
