import React, { useState, useEffect } from 'react';

const SchoolSettings = () => {
  const [settings, setSettings] = useState({
    schoolName: 'בית ספר תיכון המדעים',
    schoolCode: 'SCH001',
    schoolAddress: 'רחוב החינוך 123, תל אביב',
    schoolPhone: '03-1234567',
    schoolEmail: 'info@school.edu.il',
    principalName: 'ד"ר יוסי כהן',
    principalEmail: 'principal@school.edu.il',
    academicYear: '2024-2025',
    semester: 'סמסטר ב',
    gradingSystem: 'points',
    passingGrade: 55,
    enableNotifications: true,
    enableParentPortal: false,
    enableAIAnalysis: true,
    maxStudentsPerClass: 35,
    lessonDuration: 45,
    enableAttendanceTracking: true,
    enableHomeworkSubmission: true,
    backupFrequency: 'daily',
    dataRetentionPeriod: 7
  });

  const [activeTab, setActiveTab] = useState('general');
  const [isModified, setIsModified] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
    setIsModified(true);
  };

  const handleSave = () => {
    // Simulate saving to backend
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
      setIsModified(false);
      setTimeout(() => setSaveStatus(''), 2000);
    }, 1000);
  };

  const handleReset = () => {
    // Reset to default values
    setIsModified(false);
    setSaveStatus('');
  };

  const exportData = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'school_settings.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const tabs = [
    { id: 'general', label: 'הגדרות כלליות' },
    { id: 'academic', label: 'הגדרות אקדמיות' },
    { id: 'system', label: 'הגדרות מערכת' },
    { id: 'security', label: 'אבטחה וגיבוי' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">הגדרות בית הספר</h1>
        <div className="flex gap-3">
          <button
            onClick={exportData}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            ייצוא הגדרות
          </button>
          <button
            onClick={handleReset}
            disabled={!isModified}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            איפוס
          </button>
          <button
            onClick={handleSave}
            disabled={!isModified}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            {saveStatus === 'saving' && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            )}
            {saveStatus === 'saved' ? 'נשמר!' : 'שמור'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow p-6">
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">פרטי בית הספר</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  שם בית הספר
                </label>
                <input
                  type="text"
                  value={settings.schoolName}
                  onChange={(e) => handleInputChange('schoolName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  קוד בית הספר
                </label>
                <input
                  type="text"
                  value={settings.schoolCode}
                  onChange={(e) => handleInputChange('schoolCode', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  כתובת
                </label>
                <input
                  type="text"
                  value={settings.schoolAddress}
                  onChange={(e) => handleInputChange('schoolAddress', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  טלפון
                </label>
                <input
                  type="text"
                  value={settings.schoolPhone}
                  onChange={(e) => handleInputChange('schoolPhone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  אימייל
                </label>
                <input
                  type="email"
                  value={settings.schoolEmail}
                  onChange={(e) => handleInputChange('schoolEmail', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-md font-medium text-gray-900 mb-4">פרטי מנהל</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    שם המנהל
                  </label>
                  <input
                    type="text"
                    value={settings.principalName}
                    onChange={(e) => handleInputChange('principalName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    אימייל מנהל
                  </label>
                  <input
                    type="email"
                    value={settings.principalEmail}
                    onChange={(e) => handleInputChange('principalEmail', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'academic' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">הגדרות אקדמיות</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  שנת לימודים
                </label>
                <input
                  type="text"
                  value={settings.academicYear}
                  onChange={(e) => handleInputChange('academicYear', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  סמסטר נוכחי
                </label>
                <select
                  value={settings.semester}
                  onChange={(e) => handleInputChange('semester', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="סמסטר א">סמסטר א</option>
                  <option value="סמסטר ב">סמסטר ב</option>
                  <option value="סמסטר קיץ">סמסטר קיץ</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  מערכת ציונים
                </label>
                <select
                  value={settings.gradingSystem}
                  onChange={(e) => handleInputChange('gradingSystem', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="points">ציונים (0-100)</option>
                  <option value="letters">ציוני אותיות</option>
                  <option value="pass-fail">עבר/נכשל</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ציון מעבר
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={settings.passingGrade}
                  onChange={(e) => handleInputChange('passingGrade', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  מספר תלמידים מקסימלי בכיתה
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={settings.maxStudentsPerClass}
                  onChange={(e) => handleInputChange('maxStudentsPerClass', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  משך שיעור (דקות)
                </label>
                <input
                  type="number"
                  min="30"
                  max="90"
                  value={settings.lessonDuration}
                  onChange={(e) => handleInputChange('lessonDuration', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">הגדרות מערכת</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    הפעלת התראות
                  </label>
                  <p className="text-sm text-gray-500">שליחת התראות למורים ותלמידים</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.enableNotifications}
                  onChange={(e) => handleInputChange('enableNotifications', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    פורטל הורים
                  </label>
                  <p className="text-sm text-gray-500">גישה להורים לצפייה בציוני ילדיהם</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.enableParentPortal}
                  onChange={(e) => handleInputChange('enableParentPortal', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    ניתוח AI
                  </label>
                  <p className="text-sm text-gray-500">הפעלת ניתוח בינה מלאכותית לביצועים</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.enableAIAnalysis}
                  onChange={(e) => handleInputChange('enableAIAnalysis', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    מעקב נוכחות
                  </label>
                  <p className="text-sm text-gray-500">רישום נוכחות אוטומטי</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.enableAttendanceTracking}
                  onChange={(e) => handleInputChange('enableAttendanceTracking', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    הגשת עבודות בית
                  </label>
                  <p className="text-sm text-gray-500">אפשרות להגשת עבודות דיגיטליות</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.enableHomeworkSubmission}
                  onChange={(e) => handleInputChange('enableHomeworkSubmission', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">אבטחה וגיבוי</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  תדירות גיבוי
                </label>
                <select
                  value={settings.backupFrequency}
                  onChange={(e) => handleInputChange('backupFrequency', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="hourly">כל שעה</option>
                  <option value="daily">יומי</option>
                  <option value="weekly">שבועי</option>
                  <option value="monthly">חודשי</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  תקופת שמירת נתונים (שנים)
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={settings.dataRetentionPeriod}
                  onChange={(e) => handleInputChange('dataRetentionPeriod', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-md font-medium text-gray-900 mb-4">פעולות גיבוי</h3>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  גיבוי מיידי
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  שחזור נתונים
                </button>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  בדיקת תקינות
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Save Status */}
      {isModified && (
        <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg shadow-lg">
          <div className="flex items-center">
            <span className="text-sm">יש שינויים שלא נשמרו</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolSettings;
