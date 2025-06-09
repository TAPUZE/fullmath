import React from 'react';

/**
 * StatusIndicator - Reusable status display component
 * Used across questionnaire pages and progress displays
 */
const StatusIndicator = ({ 
  status, 
  size = "sm", // "sm", "md", "lg"
  showIcon = true,
  customLabels = {},
  className = ""
}) => {
  const labels = {
    completed: 'הושלם',
    started: 'החל',
    'not-started': 'לא החל',
    ...customLabels
  };

  const sizeClasses = {
    sm: { dot: 'w-2 h-2', text: 'text-sm' },
    md: { dot: 'w-3 h-3', text: 'text-base' },
    lg: { dot: 'w-4 h-4', text: 'text-lg' }
  };

  const currentSize = sizeClasses[size] || sizeClasses.sm;

  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return {
          containerClass: 'text-green-600 font-semibold',
          dotClass: 'bg-green-500'
        };
      case 'started':
        return {
          containerClass: 'text-yellow-600 font-semibold',
          dotClass: 'bg-yellow-500'
        };
      default: // 'not-started'
        return {
          containerClass: 'text-gray-500',
          dotClass: 'bg-gray-300'
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className={`status-indicator flex items-center ${styles.containerClass} ${currentSize.text} ${className}`}>
      {showIcon && (
        <span className={`${currentSize.dot} ${styles.dotClass} rounded-full ml-2`}></span>
      )}
      {labels[status] || labels['not-started']}
    </div>
  );
};

export default StatusIndicator;
