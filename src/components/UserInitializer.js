import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useUserData } from '../contexts/UserDataContext';

/**
 * UserInitializer - Handles the integration between AuthContext and UserDataContext
 * This component initializes user-specific data when a user logs in
 */
const UserInitializer = ({ children }) => {
  const { currentUser } = useAuth();
  const { initializeUserData } = useUserData();

  useEffect(() => {
    if (currentUser && currentUser.email) {
      // Initialize user data tracking when user logs in
      initializeUserData(currentUser.email);
      console.log(`Initialized user data tracking for: ${currentUser.email}`);
    }
  }, [currentUser, initializeUserData]);

  return children;
};

export default UserInitializer;
