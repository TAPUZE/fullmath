import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim()) {
      setError('נא להזין כתובת אימייל');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('נא להזין כתובת אימייל תקנית');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const userData = {
        email: email.trim(),
        role: role,
        name: email.split('@')[0], // Use email prefix as name
        id: Date.now(), // Simple ID generation
        loginTime: new Date().toISOString()
      };
      
      // Store user data in localStorage
      localStorage.setItem('currentUser', JSON.stringify(userData));
      
      setIsLoading(false);
      onLogin(userData);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl text-white">📚</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">מערכת לימוד מתמטיקה</h1>
          <p className="text-gray-600">כניסה למערכת</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right mb-2">
              כתובת אימייל
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="example@school.co.il"
              dir="ltr"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 text-right mb-3">
              סוג החשבון
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  role === 'student'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🎓</div>
                  <div className="font-medium">תלמיד</div>
                  <div className="text-xs text-gray-500 mt-1">לומד שיעורים ופותר תרגילים</div>
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  role === 'teacher'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">👨‍🏫</div>
                  <div className="font-medium">מורה</div>
                  <div className="text-xs text-gray-500 mt-1">מנהל כיתות ועוקב אחר התקדמות</div>
                </div>
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-right">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : role === 'teacher'
                ? 'bg-green-500 hover:bg-green-600 focus:ring-green-500'
                : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500'
            } text-white focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                נכנס למערכת...
              </div>
            ) : (
              `כניסה כ${role === 'teacher' ? 'מורה' : 'תלמיד'}`
            )}
          </button>
        </form>

        {/* Info Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">✨ כניסה ללא סיסמה - פשוט והיגיני</p>
            <div className="flex justify-center space-x-6 text-xs">
              <span>🎓 תלמידים: גישה לשיעורים ותרגילים</span>
              <span>👨‍🏫 מורים: ניהול כיתות ודוחות</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
