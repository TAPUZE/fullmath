import { useState, useEffect } from 'react';

export const useProgressData = (lessonId) => {
  const [progressData, setProgressData] = useState({
    exerciseStats: [],
    quizResults: null,
    totalTimeSpent: 0,
    lessonStartTime: null,
    allTasksCompleted: false
  });

  const loadProgressData = () => {
    // Load exercise statistics
    const exerciseStats = [];
    const keys = Object.keys(localStorage);
    const exerciseKeys = keys.filter(key => key.startsWith(`exercise_${lessonId}_`));
    
    exerciseKeys.forEach(key => {
      try {
        const data = JSON.parse(localStorage.getItem(key));
        exerciseStats.push(data);
      } catch (error) {
        console.error('Error loading exercise data:', error);
      }
    });
    
    // Load quiz results
    let quizResults = null;
    try {
      const quizData = localStorage.getItem(`lesson_quiz_score_${lessonId}`);
      if (quizData) {
        quizResults = JSON.parse(quizData);
      }
    } catch (error) {
      console.error('Error loading quiz data:', error);
    }
    
    // Calculate total time spent
    let totalTimeSpent = 0;
    exerciseStats.forEach(stat => {
      totalTimeSpent += stat.timeSpent || 0;
    });
    if (quizResults) {
      totalTimeSpent += quizResults.timeSpent || 0;
    }
    
    const lessonStartTime = localStorage.getItem(`lesson_start_time_${lessonId}`);
    
    // Check if all tasks are completed
    const allTasksCompleted = checkAllTasksCompleted(exerciseStats, quizResults);
    
    setProgressData({
      exerciseStats,
      quizResults,
      totalTimeSpent,
      lessonStartTime,
      allTasksCompleted
    });
  };

  const checkAllTasksCompleted = (exerciseStats, quizResults) => {
    // Get expected tasks count from lesson metadata or reasonable defaults
    const expectedExerciseCount = getExpectedExerciseCount(lessonId);
    const hasQuiz = getHasQuiz(lessonId);
    
    // Check if we have the expected number of exercises completed
    const exercisesCompleted = exerciseStats.length >= expectedExerciseCount;
    
    // Check if quiz is completed (if expected)
    const quizCompleted = !hasQuiz || (quizResults && quizResults.score !== undefined);
    
    return exercisesCompleted && quizCompleted;
  };
  const getExpectedExerciseCount = (lessonId) => {
    // Define expected exercise counts per lesson
    const lessonExerciseCounts = {
      'geometry-shapes': 3,
      'algebra-linear-equation-one-variable': 4,
      'algebra-quadratic-equations': 5,
      'trigonometry-right-triangle': 4,
      'statistics-intro': 3,
      'functions-parabola-investigation': 4,
      'sequences-arithmetic-sum': 3,
      'growth-decay': 4,
      'statistics-dispersion': 3,
      'probability-tree-conditional': 4,
      'normal-distribution': 3,
      'problems_buy_sell_he': 2, // Problems Buy/Sell lesson has 2 exercises
      // Add more lessons as needed
    };
    
    return lessonExerciseCounts[lessonId] || 3; // Default to 3 exercises
  };
  const getHasQuiz = (lessonId) => {
    // Define which lessons have quizzes
    const lessonsWithQuizzes = [
      'geometry-shapes',
      'algebra-linear-equation-one-variable',
      'algebra-quadratic-equations',
      'trigonometry-right-triangle',
      'statistics-intro',
      'functions-parabola-investigation',
      'sequences-arithmetic-sum',
      'growth-decay',
      'statistics-dispersion',
      'probability-tree-conditional',
      'normal-distribution',
      'problems_buy_sell_he' // Problems Buy/Sell lesson has quiz
    ];
    
    return lessonsWithQuizzes.includes(lessonId);
  };

  const resetProgressData = () => {
    try {
      // Remove all exercise and quiz data for this lesson
      const keys = Object.keys(localStorage);
      const keysToRemove = keys.filter(key => 
        key.startsWith(`exercise_${lessonId}_`) || 
        key === `lesson_quiz_score_${lessonId}` ||
        key === `lesson_start_time_${lessonId}` ||
        key === `lesson_completion_data_${lessonId}`
      );
      
      keysToRemove.forEach(key => localStorage.removeItem(key));
      
      // Reload data
      loadProgressData();
      
      return true;
    } catch (error) {
      console.error('Error resetting progress data:', error);
      return false;
    }
  };

  const saveCompletionData = (progressData) => {
    try {
      const completionData = {
        completed: true,
        completionTime: new Date().toISOString(),
        progressSummary: {
          exerciseCount: progressData.exerciseStats.length,
          totalAttempts: progressData.exerciseStats.reduce((sum, stat) => sum + (stat.attempts || 0), 0),
          totalWrongAnswers: progressData.exerciseStats.reduce((sum, stat) => sum + (stat.wrongAnswers?.length || 0), 0),
          totalTimeSpent: progressData.totalTimeSpent,
          quizScore: progressData.quizResults ? `${progressData.quizResults.score}/${progressData.quizResults.total}` : null,
          quizTimeSpent: progressData.quizResults?.timeSpent || 0
        }
      };
      
      localStorage.setItem(`lesson_completed_${lessonId}`, 'true');
      localStorage.setItem(`lesson_completion_data_${lessonId}`, JSON.stringify(completionData));
      
      return true;
    } catch (error) {
      console.error('Error saving completion data:', error);
      return false;
    }
  };

  useEffect(() => {
    // Set lesson start time if not exists
    const startTimeKey = `lesson_start_time_${lessonId}`;
    let startTime = localStorage.getItem(startTimeKey);
    if (!startTime) {
      startTime = new Date().toISOString();
      localStorage.setItem(startTimeKey, startTime);
    }
    
    // Load initial progress data
    loadProgressData();
  }, [lessonId]);

  return {
    progressData,
    loadProgressData,
    resetProgressData,
    saveCompletionData
  };
};

export const useCompletionStatus = (lessonId, allTasksCompleted = false, progressData = null, saveCompletionData = null) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [autoCompleted, setAutoCompleted] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem(`lesson_completed_${lessonId}`) === 'true';
    setIsCompleted(completed);
  }, [lessonId]);
  
  const markAsCompleted = () => {
    localStorage.setItem(`lesson_completed_${lessonId}`, 'true');
    setIsCompleted(true);
    return true;
  };

  // Auto-complete when all tasks are done
  useEffect(() => {
    if (allTasksCompleted && !isCompleted && !autoCompleted) {
      // Save detailed completion data if available
      if (progressData && saveCompletionData) {
        saveCompletionData(progressData);
      }
      markAsCompleted();
      setAutoCompleted(true);
    }
  }, [allTasksCompleted, isCompleted, lessonId, progressData, saveCompletionData, autoCompleted]);
  const markAsNotCompleted = () => {
    localStorage.removeItem(`lesson_completed_${lessonId}`);
    localStorage.removeItem(`lesson_completion_data_${lessonId}`);
    setIsCompleted(false);
    setAutoCompleted(false);
    return true;
  };

  const toggleCompletion = () => {
    if (isCompleted) {
      return markAsNotCompleted();
    } else {
      return markAsCompleted();
    }
  };
  return {
    isCompleted,
    markAsCompleted,
    markAsNotCompleted,
    toggleCompletion,
    setIsCompleted,
    autoCompleted
  };
};

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
