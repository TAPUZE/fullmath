import React, { useState } from 'react';
import Notification from '../Notification';

export const useProgressNotification = () => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
  };

  const showSuccess = (message) => showNotification(message, 'success');
  const showError = (message) => showNotification(message, 'error');
  const showInfo = (message) => showNotification(message, 'info');

  const closeNotification = () => {
    setNotification(null);
  };

  const NotificationElement = () => (
    notification && (
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={closeNotification}
      />
    )
  );

  return {
    notification,
    showNotification,
    showSuccess,
    showError,
    showInfo,
    closeNotification,
    NotificationElement
  };
};
