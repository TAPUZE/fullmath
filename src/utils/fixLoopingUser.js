/**
 * Fix for looping user data issue
 * This utility helps fix corrupted user data that's causing infinite loops
 */

export const fixUserDataLoop = (email) => {
  try {
    const storageKey = `userData_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
    const userData = localStorage.getItem(storageKey);
    
    if (!userData) {
      console.log('No user data found for', email);
      return false;
    }
    
    const parsedData = JSON.parse(userData);
    
    // Fix the login count if it's extremely high (indicates a loop)
    if (parsedData.profile && parsedData.profile.loginCount > 100) {
      console.log(`Fixing high login count: ${parsedData.profile.loginCount} -> 1`);
      parsedData.profile.loginCount = 1;
    }
    
    // Fix any other potential issues
    if (!parsedData.exercises) {
      parsedData.exercises = {};
    }
    
    if (!parsedData.quizzes) {
      parsedData.quizzes = {};
    }
    
    // Update with current timestamp
    parsedData.lastUpdated = new Date().toISOString();
    
    // Save the fixed data
    localStorage.setItem(storageKey, JSON.stringify(parsedData));
    
    console.log('User data fixed successfully for', email);
    return true;
    
  } catch (error) {
    console.error('Error fixing user data:', error);
    return false;
  }
};

export const resetUserLoginCount = (email) => {
  try {
    const storageKey = `userData_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
    const userData = localStorage.getItem(storageKey);
    
    if (userData) {
      const parsedData = JSON.parse(userData);
      parsedData.profile.loginCount = 1;
      parsedData.lastUpdated = new Date().toISOString();
      localStorage.setItem(storageKey, JSON.stringify(parsedData));
      console.log('Login count reset to 1 for', email);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error resetting login count:', error);
    return false;
  }
};

// Make it available globally for debugging
if (typeof window !== 'undefined') {
  window.fixUserData = fixUserDataLoop;
  window.resetLoginCount = resetUserLoginCount;
}
