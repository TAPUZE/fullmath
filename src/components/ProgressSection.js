import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import LessonNavigation from './LessonNavigation';
import { getQuestionnaireLessonId } from '../utils/lessonNavigation';

const ProgressSection = ({ lessonId, nextLessonUrl, menuUrl }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Check if lesson is already completed
    const completed = localStorage.getItem(`lesson_completed_${lessonId}`) === 'true';
    setIsCompleted(completed);
  }, [lessonId]);

  const markAsCompleted = () => {
    try {
      localStorage.setItem(`lesson_completed_${lessonId}`, 'true');
      setIsCompleted(true);
      setNotification({
        message: 'השיעור סומן כהושלם!',
        type: 'success'
      });
    } catch (error) {
      setNotification({
        message: 'שגיאה בשמירת ההתקדמות',
        type: 'error'
      });
    }
  };

  const markAsNotCompleted = () => {
    try {
      localStorage.removeItem(`lesson_completed_${lessonId}`);
      setIsCompleted(false);
      setNotification({
        message: 'השיעור סומן כלא הושלם',
        type: 'info'
      });
    } catch (error) {
      setNotification({
        message: 'שגיאה בעדכון ההתקדמות',
        type: 'error'
      });
    }
  };

  const closeNotification = () => {
    setNotification(null);
  };
  return (
    <>
      <section className="mt-8 p-6 bg-gray-50 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">התקדמות השיעור</h3>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <button
            onClick={markAsCompleted}
            className={`w-full sm:w-auto font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
              isCompleted 
                ? 'bg-green-600 text-white focus:ring-green-400' 
                : 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'
            }`}
          >
            {isCompleted ? '✓ הושלם' : 'סמן כהושלם'}
          </button>
          
          <button
            onClick={markAsNotCompleted}
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
          >
            סמן כלא הושלם
          </button>
          
          {nextLessonUrl && (
            <a
              href={nextLessonUrl}
              className="w-full sm:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              השיעור הבא &rarr;
            </a>
          )}
          
          <a
            href={menuUrl || '/'}
            className="w-full sm:w-auto text-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          >
            &larr; חזרה לתפריט השיעורים
          </a>
        </div>
        
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={closeNotification}
          />
        )}
      </section>
      
      {/* Add lesson navigation */}
      <LessonNavigation lessonId={getQuestionnaireLessonId(lessonId)} />
    </>
  );
};

export default ProgressSection;
