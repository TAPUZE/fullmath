import React, { useState, useEffect } from 'react';

const FeaturesManagement = ({ devData }) => {
  const [features, setFeatures] = useState([]);
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState('all');
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Mock data
  useEffect(() => {
    const mockFeatures = [
      {
        id: 'ai_assistant',
        name: 'מסייע בינה מלאכותית',
        description: 'עזרה חכמה לתלמידים בפתרון תרגילים ובהסבר קונצפטים',
        category: 'AI',
        status: 'stable',
        requiredSubscription: 'premium',
        schoolSettings: {
          'תיכון הרצל תל אביב': { enabled: true, customSettings: { maxQuestionsPerDay: 50 } },
          'אורט ירושלים': { enabled: false, customSettings: {} },
          'תיכון מקיף חיפה': { enabled: false, customSettings: {} },
          'תיכון טכנולוגי באר שבע': { enabled: true, customSettings: { maxQuestionsPerDay: 100 } }
        }
      },
      {
        id: 'chatbot',
        name: 'צ\'אטבוט אוטומטי',
        description: 'בוט למענה אוטומטי על שאלות נפוצות של תלמידים',
        category: 'Communication',
        status: 'stable',
        requiredSubscription: 'standard',
        schoolSettings: {
          'תיכון הרצל תל אביב': { enabled: true, customSettings: { responseTime: 'fast' } },
          'אורט ירושלים': { enabled: true, customSettings: { responseTime: 'normal' } },
          'תיכון מקיף חיפה': { enabled: false, customSettings: {} },
          'תיכון טכנולוגי באר שבע': { enabled: true, customSettings: { responseTime: 'fast' } }
        }
      },
      {
        id: 'advanced_analytics',
        name: 'אנליטיקה מתקדמת',
        description: 'דוחות מפורטים ותובנות על ביצועי תלמידים',
        category: 'Analytics',
        status: 'stable',
        requiredSubscription: 'standard',
        schoolSettings: {
          'תיכון הרצל תל אביב': { enabled: true, customSettings: { reportFrequency: 'weekly' } },
          'אורט ירושלים': { enabled: true, customSettings: { reportFrequency: 'monthly' } },
          'תיכון מקיף חיפה': { enabled: true, customSettings: { reportFrequency: 'monthly' } },
          'תיכון טכנולוגי באר שבע': { enabled: true, customSettings: { reportFrequency: 'weekly' } }
        }
      },
      {
        id: 'custom_branding',
        name: 'עיצוב מותאם אישית',
        description: 'התאמת הממשק לעיצוב הגרפי של בית הספר',
        category: 'Customization',
        status: 'beta',
        requiredSubscription: 'premium',
        schoolSettings: {
          'תיכון הרצל תל אביב': { enabled: false, customSettings: {} },
          'אורט ירושלים': { enabled: true, customSettings: { theme: 'blue' } },
          'תיכון מקיף חיפה': { enabled: false, customSettings: {} },
          'תיכון טכנולוגי באר שבע': { enabled: true, customSettings: { theme: 'green' } }
        }
      },
      {
        id: 'gamification',
        name: 'גיימיפיקציה',
        description: 'מערכת נקודות, רמות והישגים להגברת המוטיבציה',
        category: 'Engagement',
        status: 'experimental',
        requiredSubscription: 'standard',
        schoolSettings: {
          'תיכון הרצל תל אביב': { enabled: true, customSettings: { pointsSystem: 'standard' } },
          'אורט ירושלים': { enabled: false, customSettings: {} },
          'תיכון מקיף חיפה': { enabled: false, customSettings: {} },
          'תיכון טכנולוגי באר שבע': { enabled: false, customSettings: {} }
        }
      },
      {
        id: 'offline_mode',
        name: 'מצב לא מקוון',
        description: 'אפשרות לעבוד עם השיעורים ללא חיבור לאינטרנט',
        category: 'Accessibility',
        status: 'development',
        requiredSubscription: 'basic',
        schoolSettings: {
          'תיכון הרצל תל אביב': { enabled: false, customSettings: {} },
          'אורט ירושלים': { enabled: false, customSettings: {} },
          'תיכון מקיף חיפה': { enabled: false, customSettings: {} },
          'תיכון טכנולוגי באר שבע': { enabled: false, customSettings: {} }
        }
      }
    ];

    const mockSchools = [
      { name: 'תיכון הרצל תל אביב', subscription: 'premium' },
      { name: 'אורט ירושלים', subscription: 'standard' },
      { name: 'תיכון מקיף חיפה', subscription: 'basic' },
      { name: 'תיכון טכנולוגי באר שבע', subscription: 'premium' }
    ];

    setFeatures(mockFeatures);
    setSchools(mockSchools);
  }, []);

  const toggleFeatureForSchool = (featureId, schoolName) => {
    setFeatures(prevFeatures =>
      prevFeatures.map(feature =>
        feature.id === featureId
          ? {
              ...feature,
              schoolSettings: {
                ...feature.schoolSettings,
                [schoolName]: {
                  ...feature.schoolSettings[schoolName],
                  enabled: !feature.schoolSettings[schoolName]?.enabled
                }
              }
            }
          : feature
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'stable':
        return 'bg-green-100 text-green-800';
      case 'beta':
        return 'bg-blue-100 text-blue-800';
      case 'experimental':
        return 'bg-yellow-100 text-yellow-800';
      case 'development':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI':
        return '🤖';
      case 'Communication':
        return '💬';
      case 'Analytics':
        return '📊';
      case 'Customization':
        return '🎨';
      case 'Engagement':
        return '🎮';
      case 'Accessibility':
        return '♿';
      default:
        return '⚙️';
    }
  };

  const getSubscriptionColor = (subscription) => {
    switch (subscription) {
      case 'premium':
        return 'text-purple-600';
      case 'standard':
        return 'text-blue-600';
      case 'basic':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  const filteredFeatures = selectedSchool === 'all' 
    ? features 
    : features;

  const FeatureCard = ({ feature }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{getCategoryIcon(feature.category)}</div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
            {feature.status === 'stable' ? 'יציב' :
             feature.status === 'beta' ? 'בטא' :
             feature.status === 'experimental' ? 'ניסיונית' :
             feature.status === 'development' ? 'בפיתוח' : feature.status}
          </span>
          <span className={`text-sm font-medium ${getSubscriptionColor(feature.requiredSubscription)}`}>
            {feature.requiredSubscription === 'premium' ? 'פרימיום' :
             feature.requiredSubscription === 'standard' ? 'רגיל' :
             feature.requiredSubscription === 'basic' ? 'בסיסי' : feature.requiredSubscription}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700">סטטוס בבתי ספר:</h4>
        <div className="space-y-2">
          {schools.map(school => {
            const schoolSetting = feature.schoolSettings[school.name];
            const isEnabled = schoolSetting?.enabled || false;
            const canEnable = school.subscription === feature.requiredSubscription || 
                           (feature.requiredSubscription === 'basic') ||
                           (feature.requiredSubscription === 'standard' && school.subscription === 'premium');
            
            return (
              <div key={school.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-900">{school.name}</span>
                  {!canEnable && (
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                      דרוש שדרוג מנוי
                    </span>
                  )}
                </div>
                <button
                  onClick={() => toggleFeatureForSchool(feature.id, school.name)}
                  disabled={!canEnable || devData.accessLevel === 'content-manager'}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    isEnabled ? 'bg-green-500' : 'bg-gray-300'
                  } ${!canEnable ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    isEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}></div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={() => {
            setSelectedFeature(feature);
            setShowFeatureModal(true);
          }}
          className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
        >
          🔧 הגדרות מתקדמות
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">ניהול תכונות</h2>
          <p className="mt-1 text-sm text-gray-600">
            הפעלה וכיבוי תכונות לבתי ספר שונים במערכת
          </p>
        </div>
        <button
          onClick={() => setShowFeatureModal(true)}
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors flex items-center space-x-2"
          disabled={devData.accessLevel !== 'super-admin'}
        >
          <span>➕</span>
          <span>הוסף תכונה</span>
        </button>
      </div>

      {/* Filter */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">סינון לפי בית ספר:</label>
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">כל בתי הספר</option>
              {schools.map((school) => (
                <option key={school.name} value={school.name}>{school.name}</option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-500">
            {features.length} תכונות זמינות
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">תכונות יציבות</p>
              <p className="text-2xl font-bold text-green-600">
                {features.filter(f => f.status === 'stable').length}
              </p>
            </div>
            <div className="text-2xl">✅</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">תכונות בטא</p>
              <p className="text-2xl font-bold text-blue-600">
                {features.filter(f => f.status === 'beta').length}
              </p>
            </div>
            <div className="text-2xl">🧪</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">תכונות ניסיוניות</p>
              <p className="text-2xl font-bold text-yellow-600">
                {features.filter(f => f.status === 'experimental').length}
              </p>
            </div>
            <div className="text-2xl">⚠️</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">בפיתוח</p>
              <p className="text-2xl font-bold text-gray-600">
                {features.filter(f => f.status === 'development').length}
              </p>
            </div>
            <div className="text-2xl">🚧</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFeatures.map(feature => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>

      {/* Feature Modal */}
      {showFeatureModal && selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              הגדרות מתקדמות - {selectedFeature.name}
            </h3>
            
            <div className="space-y-6">
              {/* Feature Info */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{getCategoryIcon(selectedFeature.category)}</span>
                  <div>
                    <h4 className="font-medium text-gray-900">{selectedFeature.name}</h4>
                    <p className="text-sm text-gray-600">{selectedFeature.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedFeature.status)}`}>
                    {selectedFeature.status}
                  </span>
                  <span className={`text-sm font-medium ${getSubscriptionColor(selectedFeature.requiredSubscription)}`}>
                    דרוש מנוי: {selectedFeature.requiredSubscription}
                  </span>
                </div>
              </div>

              {/* School-specific settings */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">הגדרות לפי בית ספר</h4>
                <div className="space-y-4">
                  {schools.map(school => {
                    const schoolSetting = selectedFeature.schoolSettings[school.name];
                    const isEnabled = schoolSetting?.enabled || false;
                    
                    return (
                      <div key={school.name} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h5 className="font-medium text-gray-900">{school.name}</h5>
                            <p className="text-sm text-gray-600">מנוי: {school.subscription}</p>
                          </div>
                          <button
                            onClick={() => toggleFeatureForSchool(selectedFeature.id, school.name)}
                            className={`w-12 h-6 rounded-full transition-colors relative ${
                              isEnabled ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                          >
                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                              isEnabled ? 'translate-x-7' : 'translate-x-1'
                            }`}></div>
                          </button>
                        </div>
                        
                        {isEnabled && schoolSetting?.customSettings && (
                          <div className="space-y-2">
                            <h6 className="text-sm font-medium text-gray-700">הגדרות מותאמות:</h6>
                            {Object.entries(schoolSetting.customSettings).map(([key, value]) => (
                              <div key={key} className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">{key}:</span>
                                <span className="text-sm font-medium text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => {
                  setShowFeatureModal(false);
                  setSelectedFeature(null);
                }}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 transition-colors"
              >
                סגור
              </button>
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
                שמור שינויים
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Feature Modal */}
      {showFeatureModal && !selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">הוסף תכונה חדשה</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">שם התכונה</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="הכנס שם תכונה"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">תיאור</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="הכנס תיאור התכונה"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">קטגוריה</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="AI">בינה מלאכותית</option>
                  <option value="Communication">תקשורת</option>
                  <option value="Analytics">אנליטיקה</option>
                  <option value="Customization">התאמה אישית</option>
                  <option value="Engagement">מעורבות</option>
                  <option value="Accessibility">נגישות</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">מנוי נדרש</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="basic">בסיסי</option>
                  <option value="standard">רגיל</option>
                  <option value="premium">פרימיום</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => setShowFeatureModal(false)}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 transition-colors"
              >
                ביטול
              </button>
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
                הוסף תכונה
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturesManagement;
