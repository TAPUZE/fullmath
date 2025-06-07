import React, { useState, useEffect } from 'react';

const SystemSettings = ({ devData }) => {
  const [settings, setSettings] = useState({
    system: {
      maintenanceMode: false,
      allowNewRegistrations: true,
      maxStudentsPerSchool: 1000,
      maxTeachersPerSchool: 50,
      sessionTimeout: 30, // minutes
      backupFrequency: 'daily',
      logLevel: 'info'
    },
    features: {
      globalAIEnabled: true,
      globalChatbotEnabled: true,
      globalProgressTrackingEnabled: true,
      globalReportsEnabled: true,
      betaFeaturesEnabled: false,
      advancedAnalyticsEnabled: true
    },
    security: {
      passwordMinLength: 8,
      requireSpecialChars: true,
      requireNumbers: true,
      sessionSecurityLevel: 'high',
      twoFactorRequired: false,
      ipWhitelisting: false,
      bruteForceProtection: true
    },
    notifications: {
      emailNotifications: true,
      systemAlerts: true,
      performanceAlerts: true,
      securityAlerts: true,
      dailyReports: true,
      weeklyReports: true
    },
    api: {
      rateLimit: 1000, // requests per hour
      apiVersion: 'v1',
      debugMode: false,
      corsEnabled: true,
      webhooksEnabled: true
    },    storage: {
      maxFileSize: 10, // MB
      allowedFileTypes: ['pdf', 'doc', 'docx', 'jpg', 'png'],
      storageQuotaPerSchool: 5000, // MB
      autoCleanup: true,
      backupRetention: 30 // days
    },
    chatbot: {
      enabled: true,
      maxWarningsBeforeBlock: 3,
      blockDurationMinutes: 30,
      harassmentDetectionEnabled: true,
      mathOnlyMode: true,
      responseDelay: 1000, // milliseconds
      maxQuestionsPerHour: 50,
      aiModel: 'mock' // 'openai', 'gemini', 'mock'
    }
  });

  const [activeSection, setActiveSection] = useState('system');
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // Load system settings from API
    loadSystemSettings();
  }, []);

  const loadSystemSettings = async () => {
    try {
      // Mock API call - replace with actual API
      console.log('Loading system settings...');
      // const response = await fetch('/api/admin/system-settings');
      // const data = await response.json();
      // setSettings(data);
    } catch (error) {
      console.error('Error loading system settings:', error);
    }
  };

  const handleSettingChange = (section, key, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Mock API call - replace with actual API
      console.log('Saving system settings:', settings);
      // await fetch('/api/admin/system-settings', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(settings)
      // });
      
      setHasChanges(false);
      alert('הגדרות המערכת נשמרו בהצלחה!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('שגיאה בשמירת ההגדרות');
    } finally {
      setIsSaving(false);
    }
  };
  const handleReset = () => {
    if (window.confirm('האם אתה בטוח שברצונך לאפס את כל ההגדרות לברירות המחדל?')) {
      loadSystemSettings();
      setHasChanges(false);
    }
  };
  const sections = [
    { id: 'system', label: 'הגדרות כלליות', icon: '⚙️' },
    { id: 'features', label: 'תכונות גלובליות', icon: '🎯' },
    { id: 'security', label: 'אבטחה', icon: '🔒' },
    { id: 'notifications', label: 'התראות', icon: '🔔' },
    { id: 'api', label: 'API', icon: '🔌' },
    { id: 'storage', label: 'אחסון', icon: '💾' },
    { id: 'chatbot', label: 'בוט מתמטיקה', icon: '🤖' }
  ];

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">הגדרות בסיסיות</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">מצב תחזוקה</label>
              <button
                onClick={() => handleSettingChange('system', 'maintenanceMode', !settings.system.maintenanceMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.system.maintenanceMode ? 'bg-red-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.system.maintenanceMode ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">אפשר הרשמות חדשות</label>
              <button
                onClick={() => handleSettingChange('system', 'allowNewRegistrations', !settings.system.allowNewRegistrations)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.system.allowNewRegistrations ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.system.allowNewRegistrations ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">מקס' תלמידים לבי"ס</label>
              <input
                type="number"
                value={settings.system.maxStudentsPerSchool}
                onChange={(e) => handleSettingChange('system', 'maxStudentsPerSchool', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">מקס' מורים לבי"ס</label>
              <input
                type="number"
                value={settings.system.maxTeachersPerSchool}
                onChange={(e) => handleSettingChange('system', 'maxTeachersPerSchool', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">הגדרות מתקדמות</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">זמן פקיעת session (דקות)</label>
              <input
                type="number"
                value={settings.system.sessionTimeout}
                onChange={(e) => handleSettingChange('system', 'sessionTimeout', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">תדירות גיבויים</label>
              <select
                value={settings.system.backupFrequency}
                onChange={(e) => handleSettingChange('system', 'backupFrequency', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="hourly">כל שעה</option>
                <option value="daily">יומי</option>
                <option value="weekly">שבועי</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">רמת לוגים</label>
              <select
                value={settings.system.logLevel}
                onChange={(e) => handleSettingChange('system', 'logLevel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="debug">Debug</option>
                <option value="info">Info</option>
                <option value="warn">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeaturesSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">תכונות גלובליות</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(settings.features).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-sm font-medium">
                  {key === 'globalAIEnabled' && 'בינה מלאכותית גלובלית'}
                  {key === 'globalChatbotEnabled' && 'צ\'אטבוט גלובלי'}
                  {key === 'globalProgressTrackingEnabled' && 'מעקב התקדמות גלובלי'}
                  {key === 'globalReportsEnabled' && 'דוחות גלובליים'}
                  {key === 'betaFeaturesEnabled' && 'תכונות בטא'}
                  {key === 'advancedAnalyticsEnabled' && 'אנליטיקס מתקדם'}
                </label>
                <p className="text-xs text-gray-600 mt-1">
                  {key === 'globalAIEnabled' && 'הפעלה/כיבוי של תכונות AI לכל המערכת'}
                  {key === 'globalChatbotEnabled' && 'הפעלה/כיבוי של הצ\'אטבוט לכל המערכת'}
                  {key === 'globalProgressTrackingEnabled' && 'מעקב התקדמות עבור כל המשתמשים'}
                  {key === 'globalReportsEnabled' && 'יכולת יצירת דוחות לכל בתי הספר'}
                  {key === 'betaFeaturesEnabled' && 'גישה לתכונות בשלבי פיתוח'}
                  {key === 'advancedAnalyticsEnabled' && 'אנליטיקס מתקדם ודוחות מפורטים'}
                </p>
              </div>
              <button
                onClick={() => handleSettingChange('features', key, !value)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  value ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">הגדרות סיסמה</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">אורך מינימלי לסיסמה</label>
              <input
                type="number"
                min="6"
                max="20"
                value={settings.security.passwordMinLength}
                onChange={(e) => handleSettingChange('security', 'passwordMinLength', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">דרוש תווים מיוחדים</label>
              <button
                onClick={() => handleSettingChange('security', 'requireSpecialChars', !settings.security.requireSpecialChars)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.security.requireSpecialChars ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.security.requireSpecialChars ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">דרוש מספרים</label>
              <button
                onClick={() => handleSettingChange('security', 'requireNumbers', !settings.security.requireNumbers)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.security.requireNumbers ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.security.requireNumbers ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">הגדרות אבטחה מתקדמות</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">רמת אבטחת session</label>
              <select
                value={settings.security.sessionSecurityLevel}
                onChange={(e) => handleSettingChange('security', 'sessionSecurityLevel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">נמוכה</option>
                <option value="medium">בינונית</option>
                <option value="high">גבוהה</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">אימות דו-שלבי חובה</label>
              <button
                onClick={() => handleSettingChange('security', 'twoFactorRequired', !settings.security.twoFactorRequired)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.security.twoFactorRequired ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.security.twoFactorRequired ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">הגבלת IP</label>
              <button
                onClick={() => handleSettingChange('security', 'ipWhitelisting', !settings.security.ipWhitelisting)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.security.ipWhitelisting ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.security.ipWhitelisting ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">הגנה מפני Brute Force</label>
              <button
                onClick={() => handleSettingChange('security', 'bruteForceProtection', !settings.security.bruteForceProtection)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.security.bruteForceProtection ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.security.bruteForceProtection ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">הגדרות התראות</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(settings.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-sm font-medium">
                  {key === 'emailNotifications' && 'התראות אימייל'}
                  {key === 'systemAlerts' && 'התראות מערכת'}
                  {key === 'performanceAlerts' && 'התראות ביצועים'}
                  {key === 'securityAlerts' && 'התראות אבטחה'}
                  {key === 'dailyReports' && 'דוחות יומיים'}
                  {key === 'weeklyReports' && 'דוחות שבועיים'}
                </label>
                <p className="text-xs text-gray-600 mt-1">
                  {key === 'emailNotifications' && 'שליחת התראות באימייל למנהלים'}
                  {key === 'systemAlerts' && 'התראות על שגיאות וסטטוס המערכת'}
                  {key === 'performanceAlerts' && 'התראות על ביצועים נמוכים'}
                  {key === 'securityAlerts' && 'התראות על איומי אבטחה'}
                  {key === 'dailyReports' && 'דוחות סיכום יומיים'}
                  {key === 'weeklyReports' && 'דוחות סיכום שבועיים'}
                </p>
              </div>
              <button
                onClick={() => handleSettingChange('notifications', key, !value)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  value ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderApiSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">הגדרות API</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">הגבלת קצב (בקשות לשעה)</label>
              <input
                type="number"
                value={settings.api.rateLimit}
                onChange={(e) => handleSettingChange('api', 'rateLimit', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">גרסת API</label>
              <select
                value={settings.api.apiVersion}
                onChange={(e) => handleSettingChange('api', 'apiVersion', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="v1">V1</option>
                <option value="v2">V2 (Beta)</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">מצב Debug</label>
              <button
                onClick={() => handleSettingChange('api', 'debugMode', !settings.api.debugMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.api.debugMode ? 'bg-yellow-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.api.debugMode ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">הגדרות מתקדמות</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">CORS מופעל</label>
              <button
                onClick={() => handleSettingChange('api', 'corsEnabled', !settings.api.corsEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.api.corsEnabled ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.api.corsEnabled ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Webhooks מופעלים</label>
              <button
                onClick={() => handleSettingChange('api', 'webhooksEnabled', !settings.api.webhooksEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.api.webhooksEnabled ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.api.webhooksEnabled ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStorageSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">הגדרות אחסון</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">גודל קובץ מקסימלי (MB)</label>
              <input
                type="number"
                value={settings.storage.maxFileSize}
                onChange={(e) => handleSettingChange('storage', 'maxFileSize', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">קוטת אחסון לבי"ס (MB)</label>
              <input
                type="number"
                value={settings.storage.storageQuotaPerSchool}
                onChange={(e) => handleSettingChange('storage', 'storageQuotaPerSchool', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">שמירת גיבויים (ימים)</label>
              <input
                type="number"
                value={settings.storage.backupRetention}
                onChange={(e) => handleSettingChange('storage', 'backupRetention', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">סוגי קבצים מותרים</h3>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {settings.storage.allowedFileTypes.map((type, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                >
                  {type}
                  <button
                    onClick={() => {
                      const newTypes = settings.storage.allowedFileTypes.filter((_, i) => i !== index);
                      handleSettingChange('storage', 'allowedFileTypes', newTypes);
                    }}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">ניקוי אוטומטי</label>
              <button
                onClick={() => handleSettingChange('storage', 'autoCleanup', !settings.storage.autoCleanup)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.storage.autoCleanup ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.storage.autoCleanup ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>    </div>
  );

  const renderChatbotSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">הגדרות בוט מתמטיקה</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">בוט מופעל</label>
              <button
                onClick={() => handleSettingChange('chatbot', 'enabled', !settings.chatbot.enabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.chatbot.enabled ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.chatbot.enabled ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">מקס' אזהרות לפני חסימה</label>
              <input
                type="number"
                min="1"
                max="10"
                value={settings.chatbot.maxWarningsBeforeBlock}
                onChange={(e) => handleSettingChange('chatbot', 'maxWarningsBeforeBlock', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">משך חסימה (דקות)</label>
              <input
                type="number"
                min="5"
                max="180"
                value={settings.chatbot.blockDurationMinutes}
                onChange={(e) => handleSettingChange('chatbot', 'blockDurationMinutes', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">זיהוי הטרדות מופעל</label>
              <button
                onClick={() => handleSettingChange('chatbot', 'harassmentDetectionEnabled', !settings.chatbot.harassmentDetectionEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.chatbot.harassmentDetectionEnabled ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.chatbot.harassmentDetectionEnabled ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">מצב מתמטיקה בלבד</label>
              <button
                onClick={() => handleSettingChange('chatbot', 'mathOnlyMode', !settings.chatbot.mathOnlyMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.chatbot.mathOnlyMode ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.chatbot.mathOnlyMode ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">הגדרות מתקדמות</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">עיכוב תשובה (מילישניות)</label>
              <input
                type="number"
                min="500"
                max="5000"
                step="500"
                value={settings.chatbot.responseDelay}
                onChange={(e) => handleSettingChange('chatbot', 'responseDelay', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">מקס' שאלות לשעה</label>
              <input
                type="number"
                min="10"
                max="200"
                value={settings.chatbot.maxQuestionsPerHour}
                onChange={(e) => handleSettingChange('chatbot', 'maxQuestionsPerHour', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">מודל AI</label>
              <select
                value={settings.chatbot.aiModel}
                onChange={(e) => handleSettingChange('chatbot', 'aiModel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="mock">Mock (Demo)</option>
                <option value="openai">OpenAI GPT</option>
                <option value="gemini">Google Gemini</option>
                <option value="claude">Anthropic Claude</option>
              </select>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-yellow-800 mb-2">📊 סטטיסטיקות בוט</h4>
              <div className="text-xs text-yellow-700 space-y-1">
                <p>• משתמשים פעילים: 42</p>
                <p>• שאלות היום: 156</p>
                <p>• משתמשים חסומים: 3</p>
                <p>• זמן תגובה ממוצע: 1.2 שניות</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {    switch (activeSection) {
      case 'system':
        return renderSystemSettings();
      case 'features':
        return renderFeaturesSettings();
      case 'security':
        return renderSecuritySettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'api':
        return renderApiSettings();
      case 'storage':
        return renderStorageSettings();
      case 'chatbot':
        return renderChatbotSettings();
      default:
        return renderSystemSettings();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">הגדרות מערכת</h1>
            <p className="text-gray-600 mt-1">ניהול הגדרות גלובליות של המערכת</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              איפוס
            </button>
            <button
              onClick={handleSave}
              disabled={!hasChanges || isSaving}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                hasChanges && !isSaving
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSaving ? 'שומר...' : 'שמור שינויים'}
            </button>
          </div>
        </div>

        {hasChanges && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center">
              <span className="text-yellow-800 text-sm">
                ⚠️ יש לך שינויים שלא נשמרו
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="flex overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeSection === section.id
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default SystemSettings;
