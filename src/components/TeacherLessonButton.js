import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getNextUnpreparedLesson, getTeacherProgressStats } from '../utils/teacherProgressUtils';

const TeacherLessonButton = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handlePrepareLesson = () => {
    if (!currentUser?.email) {
      console.error('No user email found');
      return;
    }

    const nextLesson = getNextUnpreparedLesson(currentUser.email);
    if (nextLesson) {
      // Navigate to the lesson for preparation
      navigate(nextLesson.path);
    } else {
      // If no unprepared lessons, show teacher dashboard
      navigate('/teachers-dashboard');
    }
  };

  const progressStats = currentUser?.email ? getTeacherProgressStats(currentUser.email) : null;

  return (
    <div className="teacher-lesson-section">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-purple-700 mb-2">
            אזור המורים - הכנת שיעורים
          </h2>
          <p className="text-gray-600">
            התחילו להכין את השיעור הבא או המשיכו מהמקום שעצרתם
          </p>
        </div>

        {progressStats && (
          <div className="bg-purple-50 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-purple-700">
                התקדמות הכנת שיעורים
              </span>
              <span className="text-sm font-bold text-purple-700">
                {progressStats.prepared}/{progressStats.total} ({progressStats.percentage}%)
              </span>
            </div>
            <div className="w-full bg-purple-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressStats.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-purple-600 mt-1">
              נותרו {progressStats.remaining} שיעורים להכנה
            </p>
          </div>
        )}

        <button
          onClick={handlePrepareLesson}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" 
            />
          </svg>
          הכן שיעור
        </button>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/teachers-dashboard')}
            className="text-purple-600 hover:text-purple-800 text-sm font-medium transition duration-150"
          >
            מעבר לדשבורד המורים →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherLessonButton;
