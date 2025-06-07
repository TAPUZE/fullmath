import React from 'react';
import { ProgressLayout, useProgressData, useCompletionStatus, useProgressNotification } from './progress';
import { useLessonProgress } from '../hooks/useLessonProgress';

const ProgressSection = ({ lessonId, nextLessonUrl, menuUrl }) => {
  const { progressData, loadProgressData, resetProgressData, saveCompletionData } = useProgressData(lessonId);
  const { isCompleted: userCompleted, markAsCompleted: markUserCompleted, markAsNotCompleted: markUserNotCompleted, updateProgress } = useLessonProgress(lessonId);
  const { isCompleted: localCompleted, toggleCompletion: toggleLocalCompletion, setIsCompleted, autoCompleted } = useCompletionStatus(
    lessonId, 
    progressData.allTasksCompleted, 
    progressData, 
    saveCompletionData
  );
  const { showSuccess, showError, showInfo, NotificationElement } = useProgressNotification();

  // Use user completion status if available, otherwise fall back to local storage
  const isCompleted = userCompleted;
  // Show notification when auto-completed
  React.useEffect(() => {
    if (autoCompleted && localCompleted && !userCompleted) {
      // Auto-completion happened in localStorage, sync to user data
      markUserCompleted();
      showSuccess('🎉 מצוין! כל המשימות הושלמו והשיעור סומן כהושלם אוטומטית!');
    }
  }, [autoCompleted, localCompleted, userCompleted, markUserCompleted, showSuccess]);

  const handleToggleCompletion = () => {
    try {      if (isCompleted) {
        // Mark as not completed in both systems
        toggleLocalCompletion();
        markUserNotCompleted();
        showInfo('השיעור סומן כלא הושלם');
      } else {
        // Mark as completed and save completion data
        const success = saveCompletionData(progressData);
        if (success) {
          toggleLocalCompletion();
          // Also mark in user system with progress data
          const timeSpent = progressData.totalTimeSpent || 0;
          const score = progressData.quizResults ? progressData.quizResults.score : null;
          markUserCompleted(score, timeSpent);
          
          // Update detailed progress in user context
          updateProgress({
            lessonId,
            completionTime: new Date().toISOString(),
            progressSummary: {
              exerciseCount: progressData.exerciseStats.length,
              totalAttempts: progressData.exerciseStats.reduce((sum, stat) => sum + (stat.attempts || 0), 0),
              totalWrongAnswers: progressData.exerciseStats.reduce((sum, stat) => sum + (stat.wrongAnswers?.length || 0), 0),
              totalTimeSpent: timeSpent,
              quizScore: progressData.quizResults ? `${progressData.quizResults.score}/${progressData.quizResults.total}` : null,
              quizTimeSpent: progressData.quizResults?.timeSpent || 0
            }
          });
          
          showSuccess('השיעור סומן כהושלם! נתוני התקדמות נשמרו.');
        } else {
          showError('שגיאה בשמירת ההתקדמות');
        }
      }
    } catch (error) {
      showError('שגיאה בעדכון ההתקדמות');
    }
  };  const handleResetProgressData = () => {
    try {
      const success = resetProgressData();      if (success) {
        setIsCompleted(false);
        markUserNotCompleted();
        showInfo('כל נתוני ההתקדמות של השיעור נמחקו');
      } else {
        showError('שגיאה במחיקת נתוני ההתקדמות');
      }
    } catch (error) {
      showError('שגיאה במחיקת נתוני ההתקדמות');
    }
  };
  return (
    <ProgressLayout
      lessonId={lessonId}
      progressData={progressData}
      isCompleted={isCompleted}
      autoCompleted={autoCompleted}
      onToggleCompletion={handleToggleCompletion}
      onResetProgressData={handleResetProgressData}
      nextLessonUrl={nextLessonUrl}
      menuUrl={menuUrl}
      notification={<NotificationElement />}
    />
  );
};

export default ProgressSection;
