import React from 'react';
import ProgressStatistics from './ProgressStatistics';
import ProgressActions from './ProgressActions';
import LessonNavigation from '../lesson/LessonNavigation';
import { getQuestionnaireLessonId } from '../../utils/lessonNavigation';

const ProgressLayout = ({ 
  lessonId,
  progressData,
  isCompleted,
  autoCompleted,
  onToggleCompletion,
  onResetProgressData,
  nextLessonUrl,
  menuUrl,
  notification
}) => {
  return (
    <>
      <section className="mt-8 p-6 bg-gray-50 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">התקדמות השיעור</h3>
        
        {/* Progress Statistics */}
        <ProgressStatistics progressData={progressData} />
          {/* Progress Actions */}
        <ProgressActions
          isCompleted={isCompleted}
          toggleCompletion={onToggleCompletion}
          allTasksCompleted={progressData.allTasksCompleted}
          autoCompleted={autoCompleted}
          resetProgressData={onResetProgressData}
          menuUrl={menuUrl}
        />
        
        {/* Notification */}
        {notification}
      </section>
      
      {/* Add lesson navigation */}
      <LessonNavigation lessonId={getQuestionnaireLessonId(lessonId)} />
    </>
  );
};

export default ProgressLayout;
