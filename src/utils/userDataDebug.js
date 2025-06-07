/**
 * User Data Debug Utility
 * This utility helps debug and clean up user data that might be causing issues
 */

// Clear all user data from localStorage
export const clearAllUserData = () => {
  const keys = Object.keys(localStorage);
  const userDataKeys = keys.filter(key => key.startsWith('userData_'));
  
  userDataKeys.forEach(key => {
    localStorage.removeItem(key);
    console.log(`Removed: ${key}`);
  });
  
  console.log(`Cleared ${userDataKeys.length} user data entries`);
  return userDataKeys.length;
};

// List all user data keys
export const listUserDataKeys = () => {
  const keys = Object.keys(localStorage);
  const userDataKeys = keys.filter(key => key.startsWith('userData_'));
  
  console.log('User data keys found:', userDataKeys);
  return userDataKeys;
};

// Check if user data is corrupted
export const checkUserDataIntegrity = (email) => {
  const storageKey = `userData_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
  const savedData = localStorage.getItem(storageKey);
  
  if (!savedData) {
    console.log(`No data found for ${email}`);
    return { isValid: false, error: 'No data found' };
  }
  
  try {
    const parsed = JSON.parse(savedData);
    console.log(`Data for ${email} is valid:`, parsed);
    return { isValid: true, data: parsed };
  } catch (error) {
    console.error(`Corrupted data for ${email}:`, error);
    return { isValid: false, error: error.message };
  }
};

// Clean corrupted user data for specific user
export const cleanUserData = (email) => {
  const storageKey = `userData_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
  localStorage.removeItem(storageKey);
  console.log(`Cleaned data for ${email}`);
};

// Debug function to run in browser console
window.debugUserData = {
  clearAll: clearAllUserData,
  list: listUserDataKeys,
  check: checkUserDataIntegrity,
  clean: cleanUserData
};
