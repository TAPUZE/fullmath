/**
 * Test script to check for corrupted user data
 * Run this in the browser console to diagnose user data issues
 */

// Function to test if there's corrupted user data
export const testUserDataIntegrity = () => {
  console.log('=== USER DATA INTEGRITY TEST ===');
  
  // Get all localStorage keys that start with userData_
  const allKeys = Object.keys(localStorage);
  const userDataKeys = allKeys.filter(key => key.startsWith('userData_'));
  
  console.log(`Found ${userDataKeys.length} user data entries:`, userDataKeys);
  
  if (userDataKeys.length === 0) {
    console.log('✅ No user data found - clean slate');
    return { status: 'clean', corruptedKeys: [] };
  }
  
  const corruptedKeys = [];
  const validKeys = [];
  
  userDataKeys.forEach(key => {
    try {
      const data = localStorage.getItem(key);
      const parsed = JSON.parse(data);
      
      // Basic validation
      if (typeof parsed === 'object' && parsed !== null) {
        console.log(`✅ ${key}: Valid JSON object`);
        validKeys.push(key);
      } else {
        console.log(`❌ ${key}: Invalid data structure`);
        corruptedKeys.push(key);
      }
    } catch (error) {
      console.log(`❌ ${key}: JSON parse error -`, error.message);
      corruptedKeys.push(key);
    }
  });
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Valid entries: ${validKeys.length}`);
  console.log(`Corrupted entries: ${corruptedKeys.length}`);
  
  if (corruptedKeys.length > 0) {
    console.log(`\n🚨 CORRUPTED DATA FOUND:`);
    corruptedKeys.forEach(key => {
      console.log(`  - ${key}`);
    });
    console.log(`\nTo fix: Run cleanCorruptedData() or manually remove these keys`);
  }
  
  return {
    status: corruptedKeys.length > 0 ? 'corrupted' : 'clean',
    corruptedKeys,
    validKeys
  };
};

// Function to clean corrupted data
export const cleanCorruptedData = () => {
  const result = testUserDataIntegrity();
  
  if (result.corruptedKeys.length > 0) {
    console.log('\n=== CLEANING CORRUPTED DATA ===');
    result.corruptedKeys.forEach(key => {
      localStorage.removeItem(key);
      console.log(`🗑️ Removed: ${key}`);
    });
    console.log(`\n✅ Cleaned ${result.corruptedKeys.length} corrupted entries`);
    console.log('Please refresh the page to test again.');
  } else {
    console.log('✅ No corrupted data to clean');
  }
};

// Make functions available globally for browser console
if (typeof window !== 'undefined') {
  window.testUserData = testUserDataIntegrity;
  window.cleanCorruptedData = cleanCorruptedData;
}
