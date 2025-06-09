import React from 'react';
import { Link } from 'react-router-dom';
import StatusIndicator from './StatusIndicator';

/**
 * LessonCard - Reusable lesson card component for questionnaire pages
 * Eliminates redundant card HTML across all questionnaire components
 */
const LessonCard = ({ 
  lesson, 
  index, 
  status = 'not-started',
  accentColor = 'blue', // 'blue', 'green', 'purple'
  className = ""
}) => {
  const colorMap = {
    blue: {
      icon: 'bg-blue-100 text-blue-600',
      button: 'bg-blue-500 hover:bg-blue-600',
      border: 'hover:border-blue-300'
    },
    green: {
      icon: 'bg-green-100 text-green-600',
      button: 'bg-green-500 hover:bg-green-600',
      border: 'hover:border-green-300'
    },
    purple: {
      icon: 'bg-purple-100 text-purple-600',
      button: 'bg-purple-500 hover:bg-purple-600',
      border: 'hover:border-purple-300'
    }
  };

  const colors = colorMap[accentColor] || colorMap.blue;

  const getBorderColor = () => {
    switch (status) {
      case 'completed':
        return 'border-green-300 hover:border-green-400';
      case 'started':
        return 'border-yellow-300 hover:border-yellow-400';
      default:
        return `border-gray-200 ${colors.border}`;
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'completed':
        return 'צפה שוב';
      case 'started':
        return 'המשך ללמוד';
      default:
        return 'התחל שיעור';
    }
  };

  return (
    <div 
      className={`lesson-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${getBorderColor()} ${className}`}
    >
      <div className="p-6">
        {/* Header with lesson number and status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`${colors.icon} p-3 rounded-full ml-4`}>
              <span className="text-lg font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
          </div>
          <StatusIndicator status={status} />
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {lesson.description}
        </p>

        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <Link 
            to={lesson.path}
            className={`${colors.button} text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out`}
          >
            {getButtonText()}
          </Link>
          
          {status === 'completed' && (
            <div className="text-green-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
