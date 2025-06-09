import React from 'react';

/**
 * LessonSection - Reusable section wrapper for lessons
 * Provides consistent styling and structure for lesson sections
 */
const LessonSection = ({ 
  title, 
  titleColor = 'purple', 
  icon = '', 
  children, 
  className = '',
  containerClassName = 'mb-12'
}) => {
  // Color mapping for different section types
  const colorClasses = {
    purple: 'text-purple-600 border-purple-200',
    blue: 'text-blue-600 border-blue-200',
    green: 'text-green-600 border-green-200',
    orange: 'text-orange-600 border-orange-200',
    red: 'text-red-600 border-red-200',
    indigo: 'text-indigo-600 border-indigo-200'
  };

  const selectedColors = colorClasses[titleColor] || colorClasses.purple;

  return (
    <section className={containerClassName}>
      <h2 className={`text-2xl font-semibold ${selectedColors} mb-4 border-b-2 pb-2 ${className}`}>
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h2>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default LessonSection;
