import React from 'react';
import { ProgressLayout, useProgressData, useCompletionStatus, useProgressNotification } from './progress';

const ProgressSection = ({ lessonId, nextLessonUrl, menuUrl }) => {
  const { progressData, loadProgressData, resetProgressData, saveCompletionData } = useProgressData(lessonId);
  const { isCompleted, toggleCompletion, setIsCompleted, autoCompleted } = useCompletionStatus(
    lessonId, 
    progressData.allTasksCompleted, 
    progressData, 
    saveCompletionData
  );
  const { showSuccess, showError, showInfo, NotificationElement } = useProgressNotification();

  // Show notification when auto-completed
  React.useEffect(() => {
    if (autoCompleted && isCompleted) {
      showSuccess('🎉 מצוין! כל המשימות הושלמו והשיעור סומן כהושלם אוטומטית!');
    }
  }, [autoCompleted, isCompleted, showSuccess]);

  const handleToggleCompletion = () => {
    try {
      if (isCompleted) {
        // Mark as not completed
        toggleCompletion();
        showInfo('השיעור סומן כלא הושלם');
      } else {
        // Mark as completed and save completion data
        const success = saveCompletionData(progressData);
        if (success) {
          toggleCompletion();
          showSuccess('השיעור סומן כהושלם! נתוני התקדמות נשמרו.');
        } else {
          showError('שגיאה בשמירת ההתקדמות');
        }
      }
    } catch (error) {
      showError('שגיאה בעדכון ההתקדמות');
    }
  };
  const handleResetProgressData = () => {
    try {
      const success = resetProgressData();
      if (success) {
        setIsCompleted(false);
        // Reset auto-completed state by calling markAsNotCompleted
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
