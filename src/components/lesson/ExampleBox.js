import React from 'react';

/**
 * ExampleBox - Reusable component for examples, problems, and solutions
 * Provides consistent styling and structure for different types of content boxes
 */
const ExampleBox = ({ 
  title, 
  type = 'example', 
  variant = 'default',
  children, 
  className = '',
  titleClassName = ''
}) => {
  // Type configurations
  const typeConfigs = {
    example: {
      defaultTitle: 'דוגמה:',
      icon: '💡',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      titleColor: 'text-blue-700'
    },
    problem: {
      defaultTitle: 'בעיה:',
      icon: '❓',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      titleColor: 'text-yellow-700'
    },
    solution: {
      defaultTitle: 'פתרון:',
      icon: '✅',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      titleColor: 'text-green-700'
    },
    exercise: {
      defaultTitle: 'תרגיל:',
      icon: '📝',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      titleColor: 'text-purple-700'
    },
    note: {
      defaultTitle: 'הערה:',
      icon: '💭',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      titleColor: 'text-gray-700'
    },
    important: {
      defaultTitle: 'חשוב:',
      icon: '⚠️',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      titleColor: 'text-red-700'
    }
  };

  // Variant configurations
  const variantConfigs = {
    default: 'p-4',
    highlighted: 'p-6 shadow-md',
    compact: 'p-3',
    large: 'p-8'
  };

  const config = typeConfigs[type] || typeConfigs.example;
  const displayTitle = title || config.defaultTitle;
  const variantClass = variantConfigs[variant] || variantConfigs.default;

  return (
    <div className={`
      border rounded-lg 
      ${config.bgColor} 
      ${config.borderColor} 
      ${variantClass}
      ${className}
    `}>
      <h4 className={`
        text-lg font-semibold mb-3 flex items-center
        ${config.titleColor}
        ${titleClassName}
      `}>
        <span className="mr-2">{config.icon}</span>
        {displayTitle}
      </h4>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};

export default ExampleBox;
