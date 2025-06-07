import React, { useEffect } from 'react';
import ProgressSection from './ProgressSection';
import { markLessonAsStarted } from '../utils/progressUtils';

const LessonLayout = ({ children, lessonId, title, nextLessonUrl, nextLessonPath, menuUrl }) => {
  useEffect(() => {
    // Mark lesson as started when component mounts
    if (lessonId) {
      markLessonAsStarted(lessonId);
    }
  }, [lessonId]);
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      
      <div className="container mx-auto p-4 md:p-8 max-w-5xl">
        <header className="mb-8">
          {title && (
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
              {title}
            </h1>
          )}
        </header>

        <main className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          {children}
            {lessonId && (
            <ProgressSection 
              lessonId={lessonId}
              nextLessonUrl={nextLessonUrl || nextLessonPath}
              menuUrl={menuUrl}
            />
          )}
        </main>

        <footer className="bg-gray-800 text-white text-center p-6 mt-12">
          <div className="container mx-auto">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} כל הזכויות שמורות. פלטפורמת למידה במתמטיקה.
            </p>
            <p className="text-xs mt-1">פותח בסיוע GitHub Copilot.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LessonLayout;
