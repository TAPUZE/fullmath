// Teacher-specific progress tracking utilities

import { LESSON_GROUPS, getAllLessons } from './lessonNavigation';
import { getActualLessonId } from './progressUtils';

/**
 * Get teacher-specific user data structure
 * Teachers have separate progress tracking from students
 */
export const getDefaultTeacherData = (email) => {
  return {
    email: email,
    role: 'teacher',
    profile: {
      name: email.split('@')[0],
      joinDate: new Date().toISOString(),
      lastLoginDate: new Date().toISOString(),
      loginCount: 1
    },
    teacherProgress: {
      preparedLessons: [], // Lessons the teacher has prepared/reviewed
      currentLesson: null,
      totalTimeSpent: 0,
      lessonsStarted: [],
      lastActivityDate: new Date().toISOString(),
      preparationNotes: {} // Store teacher notes for each lesson
    },
    settings: {
      theme: 'light',
      language: 'he',
      notifications: true,
      soundEnabled: true,
      autoSave: true,
      teacherMode: true
    },
    customData: {}
  };
};

/**
 * Get teacher storage key
 */
const getTeacherStorageKey = (email) => {
  return `teacherData_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
};

/**
 * Load teacher-specific data
 */
export const loadTeacherData = (email) => {
  if (!email) return getDefaultTeacherData('');
  
  const storageKey = getTeacherStorageKey(email);
  const savedData = localStorage.getItem(storageKey);
  
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      // Ensure we have the teacher progress structure
      if (!parsedData.teacherProgress) {
        parsedData.teacherProgress = getDefaultTeacherData(email).teacherProgress;
      }
      return parsedData;
    } catch (error) {
      console.error('Error parsing teacher data:', error);
      return getDefaultTeacherData(email);
    }
  }
  
  return getDefaultTeacherData(email);
};

/**
 * Save teacher-specific data
 */
export const saveTeacherData = (email, data) => {
  if (!email) return;
  
  try {
    const storageKey = getTeacherStorageKey(email);
    const dataToSave = {
      ...data,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(storageKey, JSON.stringify(dataToSave));
  } catch (error) {
    console.error('Error saving teacher data:', error);
  }
};

/**
 * Check if a teacher has prepared a lesson
 */
export const isLessonPrepared = (lessonId, teacherEmail) => {
  try {
    const actualId = getActualLessonId(lessonId);
    const teacherData = loadTeacherData(teacherEmail);
    const preparedLessons = teacherData.teacherProgress?.preparedLessons || [];
    return preparedLessons.some(lesson => lesson.id === actualId);
  } catch (error) {
    console.warn('Error checking lesson preparation status:', error);
    return false;
  }
};

/**
 * Mark a lesson as prepared by teacher
 */
export const markLessonAsPrepared = (lessonId, teacherEmail, notes = '') => {
  try {
    const actualId = getActualLessonId(lessonId);
    const teacherData = loadTeacherData(teacherEmail);
    
    const preparedLessons = teacherData.teacherProgress?.preparedLessons || [];
    
    // Check if already prepared
    if (!preparedLessons.some(lesson => lesson.id === actualId)) {
      preparedLessons.push({
        id: actualId,
        originalId: lessonId,
        preparedAt: new Date().toISOString(),
        notes: notes
      });
    }
    
    // Update preparation notes if provided
    if (notes) {
      teacherData.teacherProgress.preparationNotes[actualId] = notes;
    }
    
    // Update teacher progress
    teacherData.teacherProgress = {
      ...teacherData.teacherProgress,
      preparedLessons,
      lastActivityDate: new Date().toISOString()
    };
    
    saveTeacherData(teacherEmail, teacherData);
    return true;
  } catch (error) {
    console.error('Error marking lesson as prepared:', error);
    return false;
  }
};

/**
 * Get the next lesson that hasn't been prepared by the teacher
 */
export const getNextUnpreparedLesson = (teacherEmail) => {
  try {
    const teacherData = loadTeacherData(teacherEmail);
    const preparedLessons = teacherData.teacherProgress?.preparedLessons || [];
    const preparedIds = preparedLessons.map(lesson => lesson.originalId);
    
    // Get all lessons across all groups
    const allLessons = getAllLessons();
    
    // Find the first lesson that hasn't been prepared
    for (const lesson of allLessons) {
      if (!preparedIds.includes(lesson.id)) {
        return lesson;
      }
    }
    
    // If all lessons are prepared, return the first lesson for review
    return allLessons.length > 0 ? allLessons[0] : null;
  } catch (error) {
    console.error('Error getting next unprepared lesson:', error);
    return null;
  }
};

/**
 * Get teacher progress statistics
 */
export const getTeacherProgressStats = (teacherEmail) => {
  try {
    const teacherData = loadTeacherData(teacherEmail);
    const preparedLessons = teacherData.teacherProgress?.preparedLessons || [];
    const allLessons = getAllLessons();
    
    return {
      total: allLessons.length,
      prepared: preparedLessons.length,
      remaining: allLessons.length - preparedLessons.length,
      percentage: allLessons.length > 0 ? Math.round((preparedLessons.length / allLessons.length) * 100) : 0
    };
  } catch (error) {
    console.error('Error getting teacher progress stats:', error);
    return {
      total: 0,
      prepared: 0,
      remaining: 0,
      percentage: 0
    };
  }
};

/**
 * Initialize teacher data when they log in
 */
export const initializeTeacherData = (email) => {
  try {
    const existingData = loadTeacherData(email);
    
    // Update login statistics
    const updatedData = {
      ...existingData,
      profile: {
        ...existingData.profile,
        lastLoginDate: new Date().toISOString(),
        loginCount: (existingData.profile.loginCount || 0) + 1
      }
    };
    
    saveTeacherData(email, updatedData);
    return updatedData;
  } catch (error) {
    console.error('Error initializing teacher data:', error);
    return getDefaultTeacherData(email);
  }
};
