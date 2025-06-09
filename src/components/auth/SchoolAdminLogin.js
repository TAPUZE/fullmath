import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SchoolAdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    schoolCode: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!credentials.email.trim()) {
      setError('נא להזין כתובת אימייל');
      return false;
    }
    if (!credentials.password.trim()) {
      setError('נא להזין סיסמה');
      return false;
    }
    if (!credentials.schoolCode.trim()) {
      setError('נא להזין קוד בית הספר');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      setError('נא להזין כתובת אימייל תקנית');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call with hardcoded admin credentials
    setTimeout(() => {
      // Check against predefined admin credentials
      const validAdmins = [
        { email: 'admin@school.edu.il', password: 'admin123', schoolCode: 'SCH001' },
        { email: 'principal@school.edu.il', password: 'principal123', schoolCode: 'SCH001' },
        { email: 'manager@school.edu.il', password: 'manager123', schoolCode: 'SCH001' }
      ];

      const validAdmin = validAdmins.find(admin => 
        admin.email === credentials.email.trim() && 
        admin.password === credentials.password.trim() && 
        admin.schoolCode === credentials.schoolCode.trim()
      );

      if (validAdmin) {
        const adminData = {
          email: validAdmin.email,
          role: 'school_admin',
          name: validAdmin.email.split('@')[0],
          schoolCode: validAdmin.schoolCode,
          schoolName: 'בית ספר תיכון הרצל',
          id: Date.now(),
          loginTime: new Date().toISOString()
        };
        
        // Store admin data in localStorage
        localStorage.setItem('schoolAdmin', JSON.stringify(adminData));
        
        setIsLoading(false);
        navigate('/admin/dashboard');
      } else {
        setError('פרטי התחברות שגויים');
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    setCredentials(prev => ({
      ...prev,
      [field]: value
    }));
    if (error) setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl text-white">🏫</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">ניהול בית הספר</h1>
          <p className="text-gray-600">כניסה למערכת הניהול</p>
          <div className="mt-3 text-sm text-purple-600 bg-purple-50 rounded-lg p-2">
            💡 זמין גם דרך פאנל המורים
          </div>
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
              value={credentials.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-right"
              placeholder="admin@school.edu.il"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-right"
              placeholder="הזן סיסמה"
            />
          </div>

          {/* School Code Input */}
          <div>
            <label htmlFor="schoolCode" className="block text-sm font-medium text-gray-700 text-right mb-2">
              קוד בית הספר
            </label>
            <input
              type="text"
              id="schoolCode"
              value={credentials.schoolCode}
              onChange={(e) => handleInputChange('schoolCode', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-right"
              placeholder="SCH001"
            />
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
                : 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
            } text-white focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                מתחבר למערכת...
              </div>
            ) : (
              'כניסה למערכת ניהול'
            )}
          </button>
        </form>

        {/* Info Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-3">🔐 כניסה מאובטחת למנהלי בית ספר</p>
            <div className="space-y-1 text-xs">
              <p>👨‍💼 ניהול מורים וכיתות</p>
              <p>📊 דוחות ומעקב התקדמות</p>
              <p>⚙️ הגדרות מערכת</p>
            </div>
          </div>
          
          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 text-center mb-2 font-medium">פרטי התחברות לדוגמה:</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p><strong>אימייל:</strong> admin@school.edu.il</p>
              <p><strong>סיסמה:</strong> admin123</p>
              <p><strong>קוד בית ספר:</strong> SCH001</p>
            </div>
          </div>
        </div>        {/* Navigation Links */}
        <div className="mt-6 text-center space-y-2">
          <button
            onClick={() => navigate('/teachers')}
            className="text-purple-600 hover:text-purple-800 text-sm font-medium block w-full"
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

export default SchoolAdminLogin;
