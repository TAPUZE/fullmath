import React from 'react';
import { ProgressLayout, useProgressData, useCompletionStatus, useProgressNotification } from './progress';

const ProgressSection = ({ lessonId, nextLessonUrl, menuUrl }) => {
  const { progressData, loadProgressData, resetProgressData, saveCompletionData } = useProgressData(lessonId);
  const { isCompleted, markAsCompleted, markAsNotCompleted, setIsCompleted } = useCompletionStatus(lessonId);
  const { showSuccess, showError, showInfo, NotificationElement } = useProgressNotification();

  const handleMarkAsCompleted = () => {
    try {
      const success = saveCompletionData(progressData);
      if (success) {
        markAsCompleted();
        showSuccess('השיעור סומן כהושלם! נתוני התקדמות נשמרו.');
      } else {
        showError('שגיאה בשמירת ההתקדמות');
      }
    } catch (error) {
      showError('שגיאה בשמירת ההתקדמות');
    }
  };

  const handleMarkAsNotCompleted = () => {
    try {
      markAsNotCompleted();
      showInfo('השיעור סומן כלא הושלם');
    } catch (error) {
      showError('שגיאה בעדכון ההתקדמות');
    }
  };

  const handleResetProgressData = () => {
    try {
      const success = resetProgressData();
      if (success) {
        setIsCompleted(false);
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
      onMarkAsCompleted={handleMarkAsCompleted}
      onMarkAsNotCompleted={handleMarkAsNotCompleted}
      onResetProgressData={handleResetProgressData}
      nextLessonUrl={nextLessonUrl}
      menuUrl={menuUrl}
      notification={<NotificationElement />}
    />
  );
};

export default ProgressSection;
