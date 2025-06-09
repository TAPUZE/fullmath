// Clear authentication utility
// Run this in browser console to force logout and show login screen

// Clear the currentUser from localStorage
localStorage.removeItem('currentUser');

// Also clear any other auth-related storage
localStorage.removeItem('userData');

// Reload the page to trigger re-authentication
window.location.reload();

console.log('Authentication cleared - you should now see the login screen');
