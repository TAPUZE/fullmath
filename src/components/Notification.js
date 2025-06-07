import React, { useState, useEffect } from 'react';

const Notification = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const typeClasses = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-purple-500'
  };

  return (
    <div 
      className={`fixed top-5 right-5 text-white p-4 rounded-lg shadow-xl z-50 max-w-sm text-right transition-opacity duration-500 ${typeClasses[type]}`}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {message}
    </div>
  );
};

export default Notification;
