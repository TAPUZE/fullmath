import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useUserData } from '../../contexts/UserDataContext';

/**
 * UserInitializer - Handles the integration between AuthContext and UserDataContext
 * This component initializes user-specific data when a user logs in
 */
const UserInitializer = ({ children }) => {
  const { currentUser } = useAuth();
  const { initializeUserData } = useUserData();
  useEffect(() => {
    console.log('UserInitializer: useEffect triggered', { currentUser });
    
    if (currentUser && currentUser.email) {
      try {
        console.log(`UserInitializer: About to initialize user data for: ${currentUser.email}`);
        // Initialize user data tracking when user logs in
        const result = initializeUserData(currentUser.email);
        console.log(`UserInitializer: Successfully initialized user data tracking for: ${currentUser.email}`, result);
      } catch (error) {
        console.error('UserInitializer: Error initializing user data:', error);
      }
    } else {
      console.log('UserInitializer: No current user or email found', currentUser);
    }
  }, [currentUser, initializeUserData]);

  return children;
};

export default UserInitializer;
