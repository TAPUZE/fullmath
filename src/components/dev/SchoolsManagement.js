import React, { useState, useEffect } from 'react';

const SchoolsManagement = ({ devData }) => {
  const [schools, setSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  // Mock data - in real implementation, this would come from API
  useEffect(() => {
    const mockSchools = [
      {
        id: 1,
        name: 'תיכון הרצל תל אביב',
        code: 'HERZL_TLV',
        status: 'active',
        students: 1247,
        teachers: 45,
        features: {
          ai: true,
          chatbot: true,
          analytics: true,
          customTheme: false
        },
        subscription: 'premium',
        createdAt: '2023-09-01',
        lastActive: '2024-01-15'
      },
      {
        id: 2,
        name: 'אורט ירושלים',
        code: 'ORT_JLM',
        status: 'active',
        students: 892,
        teachers: 32,
        features: {
          ai: false,
          chatbot: true,
          analytics: true,
          customTheme: true
        },
        subscription: 'standard',
        createdAt: '2023-10-15',
        lastActive: '2024-01-14'
      },
      {
        id: 3,
        name: 'תיכון מקיף חיפה',
        code: 'COMP_HFA',
        status: 'inactive',
        students: 623,
        teachers: 28,
        features: {
          ai: false,
          chatbot: false,
          analytics: true,
          customTheme: false
        },
        subscription: 'basic',
        createdAt: '2023-11-20',
        lastActive: '2024-01-10'
      },
      {
        id: 4,
        name: 'תיכון טכנולוגי באר שבע',
        code: 'TECH_BS',
        status: 'active',
        students: 1456,
        teachers: 52,
        features: {
          ai: true,
          chatbot: true,
          analytics: true,
          customTheme: true
        },
        subscription: 'premium',
        createdAt: '2023-08-10',
        lastActive: '2024-01-15'
      }
    ];
    setSchools(mockSchools);
  }, []);

  const filteredSchools = schools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || school.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const toggleFeature = (schoolId, feature) => {
    setSchools(schools.map(school => 
      school.id === schoolId 
        ? {
            ...school,
            features: {
              ...school.features,
              [feature]: !school.features[feature]
            }
          }
        : school
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'suspended':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSubscriptionColor = (subscription) => {
    switch (subscription) {
      case 'premium':
        return 'bg-purple-100 text-purple-800';
      case 'standard':
        return 'bg-blue-100 text-blue-800';
      case 'basic':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const SchoolCard = ({ school }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{school.name}</h3>
          <p className="text-sm text-gray-500">קוד: {school.code}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(school.status)}`}>
            {school.status === 'active' ? 'פעיל' : school.status === 'inactive' ? 'לא פעיל' : 'מושעה'}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSubscriptionColor(school.subscription)}`}>
            {school.subscription}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{school.students}</p>
          <p className="text-sm text-blue-600">תלמידים</p>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <p className="text-2xl font-bold text-green-600">{school.teachers}</p>
          <p className="text-sm text-green-600">מורים</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-medium text-gray-700">תכונות פעילות:</h4>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(school.features).map(([feature, enabled]) => (
            <div key={feature} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {feature === 'ai' ? 'בינה מלאכותית' :
                 feature === 'chatbot' ? 'צ\'אטבוט' :
                 feature === 'analytics' ? 'אנליטיקה' :
                 feature === 'customTheme' ? 'עיצוב מותאם' : feature}
              </span>
              <button
                onClick={() => toggleFeature(school.id, feature)}
                className={`w-8 h-4 rounded-full transition-colors ${
                  enabled ? 'bg-green-500' : 'bg-gray-300'
                } relative`}
                disabled={devData.accessLevel === 'content-manager'}
              >
                <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform ${
                  enabled ? 'translate-x-4' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>נוצר: {new Date(school.createdAt).toLocaleDateString('he-IL')}</span>
        <span>פעיל לאחרונה: {new Date(school.lastActive).toLocaleDateString('he-IL')}</span>
      </div>

      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => {
            setSelectedSchool(school);
            setShowConfigModal(true);
          }}
          className="flex-1 px-3 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
        >
          🔧 הגדרות מפורטות
        </button>
        <button className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition-colors">
          📊 דוח
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">ניהול בתי ספר</h2>
          <p className="mt-1 text-sm text-gray-600">
            ניהול כל בתי ספר במערכת והתכונות שלהם
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors flex items-center space-x-2"
          disabled={devData.accessLevel === 'content-manager'}
        >
          <span>➕</span>
          <span>הוסף בית ספר</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex-1 md:w-64">
              <input
                type="text"
                placeholder="חפש בתי ספר..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">כל הסטטוסים</option>
              <option value="active">פעיל</option>
              <option value="inactive">לא פעיל</option>
              <option value="suspended">מושעה</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">
            מציג {filteredSchools.length} מתוך {schools.length} בתי ספר
          </div>
        </div>
      </div>

      {/* Schools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredSchools.map(school => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>

      {filteredSchools.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🏫</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">לא נמצאו בתי ספר</h3>
          <p className="text-gray-600">נסה לשנות את קריטריוני החיפוש</p>
        </div>
      )}

      {/* Add School Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">הוסף בית ספר חדש</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">שם בית הספר</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="הכנס שם בית ספר"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">קוד בית ספר</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="SCHOOL_CODE"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">רמת מנוי</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="basic">בסיסי</option>
                  <option value="standard">רגיל</option>
                  <option value="premium">פרימיום</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 transition-colors"
              >
                ביטול
              </button>
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
                הוסף
              </button>
            </div>
          </div>
        </div>
      )}

      {/* School Config Modal */}
      {showConfigModal && selectedSchool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              הגדרות מפורטות - {selectedSchool.name}
            </h3>
            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">מידע בסיסי</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">שם בית ספר</label>
                    <input
                      type="text"
                      defaultValue={selectedSchool.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">קוד</label>
                    <input
                      type="text"
                      defaultValue={selectedSchool.code}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">ניהול תכונות</h4>
                <div className="space-y-3">
                  {Object.entries(selectedSchool.features).map(([feature, enabled]) => (
                    <div key={feature} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-900">
                          {feature === 'ai' ? 'בינה מלאכותית' :
                           feature === 'chatbot' ? 'צ\'אטבוט' :
                           feature === 'analytics' ? 'אנליטיקה' :
                           feature === 'customTheme' ? 'עיצוב מותאם' : feature}
                        </span>
                        <p className="text-sm text-gray-600">
                          {feature === 'ai' ? 'עזרה חכמה לתלמידים בפתרון תרגילים' :
                           feature === 'chatbot' ? 'בוט אוטומטי למענה על שאלות' :
                           feature === 'analytics' ? 'דוחות מפורטים על ביצועים' :
                           feature === 'customTheme' ? 'התאמה אישית של הממשק' : ''}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleFeature(selectedSchool.id, feature)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          enabled ? 'bg-green-500' : 'bg-gray-300'
                        } relative`}
                        disabled={devData.accessLevel === 'content-manager'}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                          enabled ? 'translate-x-7' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => setShowConfigModal(false)}
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
    </div>
  );
};

export default SchoolsManagement;
