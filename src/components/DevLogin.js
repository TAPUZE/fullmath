import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DevLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    environment: 'production'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!credentials.username.trim()) {
      setError('נא להזין שם משתמש');
      return false;
    }
    if (!credentials.password.trim()) {
      setError('נא להזין סיסמה');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call with hardcoded dev credentials
    setTimeout(() => {
      // Check against predefined dev credentials
      const validDevs = [
        { 
          username: 'dev', 
          password: 'dev123', 
          name: 'מפתח ראשי',
          accessLevel: 'super-admin',
          permissions: ['all']
        },
        { 
          username: 'admin', 
          password: 'admin123', 
          name: 'מנהל מערכת',
          accessLevel: 'admin',
          permissions: ['schools', 'users', 'features', 'analytics']
        },
        { 
          username: 'manager', 
          password: 'manager123', 
          name: 'מנהל תוכן',
          accessLevel: 'content-manager',
          permissions: ['lessons', 'features', 'analytics']
        }
      ];

      const validDev = validDevs.find(dev =>
        dev.username === credentials.username && 
        dev.password === credentials.password
      );

      if (validDev) {
        const devSession = {
          ...validDev,
          environment: credentials.environment,
          loginTime: new Date().toISOString(),
          sessionId: `dev_${Date.now()}`
        };

        localStorage.setItem('devUser', JSON.stringify(devSession));
        navigate('/dev');
      } else {
        setError('פרטי התחברות שגויים');
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    setCredentials(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl text-white">🚀</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">פאנל פיתוח</h1>
          <p className="text-gray-600">כניסה למערכת הניהול הכללית</p>
          <div className="mt-3 text-sm bg-indigo-50 text-indigo-700 rounded-lg p-2">
            ⚠️ גישה מוגבלת למפתחים בלבד
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 text-right mb-2">
              שם משתמש
            </label>
            <input
              type="text"
              id="username"
              value={credentials.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-right"
              placeholder="dev / admin / manager"
              dir="ltr"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-right mb-2">
              סיסמה
            </label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-right"
              placeholder="••••••••"
            />
          </div>

          {/* Environment Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 text-right mb-3">
              סביבת עבודה
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleInputChange('environment', 'production')}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  credentials.environment === 'production'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className="text-xl mb-1">🟢</div>
                  <div className="font-medium text-sm">Production</div>
                  <div className="text-xs text-gray-500">מערכת פעילה</div>
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => handleInputChange('environment', 'development')}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  credentials.environment === 'development'
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className="text-xl mb-1">🟠</div>
                  <div className="font-medium text-sm">Development</div>
                  <div className="text-xs text-gray-500">סביבת פיתוח</div>
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
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
            } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                מתחבר למערכת...
              </div>
            ) : (
              'כניסה לפאנל פיתוח'
            )}
          </button>
        </form>

        {/* Credentials Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center text-xs text-gray-500">
            <p className="mb-2">🔐 פרטי התחברות לדמו:</p>
            <div className="space-y-1 text-left bg-gray-50 p-3 rounded-lg">
              <p><strong>מפתח ראשי:</strong> dev / dev123</p>
              <p><strong>מנהל מערכת:</strong> admin / admin123</p>
              <p><strong>מנהל תוכן:</strong> manager / manager123</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 text-center space-y-2">
          <button
            onClick={() => navigate('/teachers')}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium block w-full"
          >
            ← חזרה לפאנל המורים
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            חזרה לכניסה רגילה
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevLogin;
