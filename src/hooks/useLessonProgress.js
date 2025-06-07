import { useAuth } from '../contexts/AuthContext';
import { useUserData } from '../contexts/UserDataContext';

/**
 * Custom hook for tracking lesson progress per user
 * This integrates authentication with user data tracking
 */
export const useLessonProgress = (lessonId) => {
  const { currentUser } = useAuth();  const { 
    isLessonCompleted, 
    addCompletedLesson,
    removeCompletedLesson,
    getCompletedLessons,
    updateUserProgress 
  } = useUserData();

  // Check if current lesson is completed for the logged-in user
  const isCompleted = currentUser?.email ? isLessonCompleted(currentUser.email, lessonId) : false;

  // Mark lesson as completed with optional score and time
  const markAsCompleted = (score = null, timeSpent = 0) => {
    if (!currentUser?.email) {
      console.warn('Cannot mark lesson as completed: no user logged in');
      return false;
    }

    try {
      addCompletedLesson(currentUser.email, lessonId, score, timeSpent);
      console.log(`Lesson ${lessonId} marked as completed for user: ${currentUser.email}`);
      return true;
    } catch (error) {
      console.error('Error marking lesson as completed:', error);
      return false;
    }
  };

  // Mark lesson as not completed (remove from completed list)
  const markAsNotCompleted = () => {
    if (!currentUser?.email) {
      console.warn('Cannot mark lesson as not completed: no user logged in');
      return false;
    }

    try {
      removeCompletedLesson(currentUser.email, lessonId);
      console.log(`Lesson ${lessonId} marked as not completed for user: ${currentUser.email}`);
      return true;
    } catch (error) {
      console.error('Error marking lesson as not completed:', error);
      return false;
    }
  };

  // Get all completed lessons for current user
  const getAllCompletedLessons = () => {
    if (!currentUser?.email) return [];
    return getCompletedLessons(currentUser.email);
  };

  // Update user progress with additional data
  const updateProgress = (progressData) => {
    if (!currentUser?.email) {
      console.warn('Cannot update progress: no user logged in');
      return false;
    }

    try {
      updateUserProgress(currentUser.email, progressData);
      return true;
    } catch (error) {
      console.error('Error updating user progress:', error);
      return false;
    }
  };
  return {
    isCompleted,
    markAsCompleted,
    markAsNotCompleted,
    getAllCompletedLessons,
    updateProgress,
    currentUser: currentUser?.email || null
  };
};

export default useLessonProgress;
