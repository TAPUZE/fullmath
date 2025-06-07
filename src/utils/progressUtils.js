// Utility functions for lesson progress tracking

/**
 * Mapping between questionnaire lesson IDs and actual lesson file IDs
 * This resolves the mismatch between hyphenated IDs used in questionnaires 
 * and the various formats used in actual lesson files
 */
const LESSON_ID_MAPPING = {
  // 35182 lessons (Basic Math)
  'algebra-linear-equation-one-variable': 'algebra_linear_equation_one_variable_35182',
  'algebra-percentages': '35182-algebra-percentages',
  'algebra-inequalities': '35182-algebra-inequalities',
  'algebra-quadratic-equations': '35182-algebra-quadratic-equations',
  'algebra-word-problems': '35182-algebra-word-problems',
  'algebra-linear-equations-two-variables': '35182-algebra-linear-equations-two-variables',
  'analytic-geometry-distance': '35182-analytic-geometry-distance',
  'analytic-geometry-midpoint': '35182-analytic-geometry-midpoint',
  'analytic-geometry-points': '35182-analytic-geometry-points',
  'analytic-geometry-slope': '35182-analytic-geometry-slope',  'geometry-area-perimeter': '35182-geometry-area-perimeter',
  'geometry-shapes-properties': '35182-geometry-shapes-properties',
  'statistics-intro': '35182-statistics-intro',  'probability-intro': '35182-probability-intro',
  'sequences-arithmetic-intro': '35182-sequences-arithmetic-intro',

  // 35381 lessons (Intermediate Math)
  'functions-parabola-investigation': 'functions_parabola_investigation_35381',
  'sequences-arithmetic-sum': '35381_sequences_arithmetic_sum',
  'growth-decay': '35381_growth_decay',
  'statistics-dispersion': '35381_statistics_dispersion',  'probability-tree-conditional': '35381-probability-tree-conditional',
  'normal-distribution': '35381-normal-distribution',
  'geometry-shapes': '35381-geometry-shapes',

  // 35382 lessons (Advanced Math)
  'problems-work-rate': 'problems-work-rate',
  'problems-motion': 'problems-motion',
  'problems-geometric-algebraic': 'problems-geometric-algebraic',
  'problems-buy-sell': 'problems_buy_sell_he',
  'analytic-geometry-circle': 'analytic-geometry-circle',
  'analytic-geometry-circle-tangent': 'analytic-geometry-circle-tangent',
  'analytic-geometry-circle-line-intersection': 'analytic-geometry-circle-line-intersection',
  'analytic-geometry-line-continued': 'analytic_geometry_line_continued_he',
  'calculus-polynomial': 'calculus-polynomial',
  'calculus-rational': 'calculus-rational',
  'calculus-square-root': 'calculus_square_root_he',
  'calculus-optimization': 'calculus_optimization_he',
  'calculus-integral-polynomial': 'calculus-integral-polynomial'
};

/**
 * Get the actual lesson ID used in the lesson file from the questionnaire ID
 * @param {string} questionnaireId - The ID used in questionnaire components
 * @returns {string} - The actual lesson ID used in lesson files
 */
export const getActualLessonId = (questionnaireId) => {
  return LESSON_ID_MAPPING[questionnaireId] || questionnaireId;
};

/**
 * Check if a lesson is completed
 * @param {string} lessonId - The lesson ID (questionnaire format)
 * @param {string} userEmail - The user's email (optional, for per-user tracking)
 * @param {Object} userData - User data from context (optional)
 * @returns {boolean} - True if lesson is completed
 */
export const isLessonCompleted = (lessonId, userEmail = null, userData = null) => {
  try {
    const actualId = getActualLessonId(lessonId);
    
    // Check user data first if available
    if (userEmail && userData) {
      const completedLessons = userData.progress?.completedLessons || [];
      return completedLessons.some(lesson => lesson.id === actualId);
    }
    
    // Try to get user data from localStorage if email provided
    if (userEmail) {
      const userStorageKey = `userData_${userEmail.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
      const storedUserData = localStorage.getItem(userStorageKey);
      if (storedUserData) {
        const parsedData = JSON.parse(storedUserData);
        const completedLessons = parsedData.progress?.completedLessons || [];
        return completedLessons.some(lesson => lesson.id === actualId);
      }
    }
    
    // Fall back to legacy localStorage check
    return localStorage.getItem(`lesson_completed_${actualId}`) === 'true';
  } catch (error) {
    console.warn('Error accessing lesson completion status:', error);
    return false;
  }
};

/**
 * Check if a lesson has been started (visited)
 * @param {string} lessonId - The lesson ID (questionnaire format)
 * @param {string} userEmail - The user's email (optional, for per-user tracking)
 * @param {Object} userData - User data from context (optional)
 * @returns {boolean} - True if lesson has been started
 */
export const isLessonStarted = (lessonId, userEmail = null, userData = null) => {
  try {
    const actualId = getActualLessonId(lessonId);
    
    // Check user data first if available
    if (userEmail && userData) {
      const startedLessons = userData.progress?.lessonsStarted || [];
      return startedLessons.includes(actualId);
    }
    
    // Try to get user data from localStorage if email provided
    if (userEmail) {
      const userStorageKey = `userData_${userEmail.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
      const storedUserData = localStorage.getItem(userStorageKey);
      if (storedUserData) {
        const parsedData = JSON.parse(storedUserData);
        const startedLessons = parsedData.progress?.lessonsStarted || [];
        return startedLessons.includes(actualId);
      }
    }
    
    // Fall back to legacy localStorage check
    return localStorage.getItem(`lesson_visited_${actualId}`) === 'true';
  } catch (error) {
    console.warn('Error accessing lesson started status:', error);
    return false;
  }
};

/**
 * Mark a lesson as started (visited)
 * @param {string} lessonId - The lesson ID (actual lesson file format)
 */
export const markLessonAsStarted = (lessonId) => {
  try {
    localStorage.setItem(`lesson_visited_${lessonId}`, 'true');
  } catch (error) {
    console.warn('Error setting localStorage:', error);
  }
};

/**
 * Get the status of a lesson
 * @param {string} lessonId - The lesson ID (questionnaire format)
 * @param {string} userEmail - The user's email (optional, for per-user tracking)
 * @param {Object} userData - User data from context (optional)
 * @returns {string} - 'completed', 'started', or 'not-started'
 */
export const getLessonStatus = (lessonId, userEmail = null, userData = null) => {
  if (isLessonCompleted(lessonId, userEmail, userData)) {
    return 'completed';
  } else if (isLessonStarted(lessonId, userEmail, userData)) {
    return 'started';
  }
  return 'not-started';
};

/**
 * Get progress statistics for all lessons
 * @param {Array} lessonIds - Array of lesson IDs (questionnaire format)
 * @param {string} userEmail - The user's email (optional, for per-user tracking)
 * @param {Object} userData - User data from context (optional)
 * @returns {Object} - Object with completion statistics
 */
export const getProgressStats = (lessonIds, userEmail = null, userData = null) => {
  const stats = {
    total: lessonIds.length,
    completed: 0,
    started: 0,
    notStarted: 0
  };

  lessonIds.forEach(lessonId => {
    const status = getLessonStatus(lessonId, userEmail, userData);
    switch (status) {
      case 'completed':
        stats.completed++;
        break;
      case 'started':
        stats.started++;
        break;
      default:
        stats.notStarted++;
    }
  });

  return stats;
};
