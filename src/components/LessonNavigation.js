import React from 'react';
import { getLessonNavigation } from '../utils/lessonNavigation';

const LessonNavigation = ({ lessonId }) => {
  const navigation = getLessonNavigation(lessonId);

  if (!navigation) {
    return null;
  }

  const { previous, next, questionnaire, group } = navigation;

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow">
      <div className="flex flex-col gap-4">
        {/* Progress indicator */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">
            שיעור {group.currentIndex} מתוך {group.totalLessons} ב{questionnaire.title}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(group.currentIndex / group.totalLessons) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          {/* Previous lesson button */}
          <div className="flex-1">
            {previous ? (
              <a
                href={previous.path}
                className="w-full block text-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
              >
                <span className="block text-xs opacity-75">השיעור הקודם</span>
                <span className="block truncate">&larr; {previous.title}</span>
              </a>
            ) : (
              <div className="w-full text-center py-3 px-4 text-gray-400 bg-gray-200 rounded-md">
                <span className="block text-xs">השיעור הקודם</span>
                <span className="block">אין שיעור קודם</span>
              </div>
            )}
          </div>

          {/* Questionnaire link */}
          <div className="flex-shrink-0">
            <a
              href={questionnaire.path}
              className="block text-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
            >
              <span className="block text-xs opacity-75">שאלון</span>
              <span className="block">📋 מבחן סיכום</span>
            </a>
          </div>

          {/* Next lesson button */}
          <div className="flex-1">
            {next ? (
              <a
                href={next.path}
                className="w-full block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                <span className="block text-xs opacity-75">השיעור הבא</span>
                <span className="block truncate">{next.title} &rarr;</span>
              </a>
            ) : (
              <div className="w-full text-center py-3 px-4 text-gray-400 bg-gray-200 rounded-md">
                <span className="block text-xs">השיעור הבא</span>
                <span className="block">הושלמו כל השיעורים!</span>
              </div>
            )}
          </div>
        </div>

        {/* Completion notice */}
        {!next && (
          <div className="text-center p-4 bg-green-100 rounded-lg border border-green-300">
            <p className="text-green-800 font-semibold">
              🎉 מזל טוב! סיימת את כל השיעורים בקבוצה זו
            </p>
            <p className="text-green-700 text-sm mt-1">
              כעת תוכל לגשת לשאלון הסיכום ולבחון את הידע שלך
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonNavigation;
