import React, { useState, useEffect } from 'react';

const SystemOverview = ({ devData }) => {
  const [systemStats, setSystemStats] = useState({
    totalSchools: 0,
    totalTeachers: 0,
    totalStudents: 0,
    totalLessons: 0,
    activeUsers: 0,
    systemHealth: 'excellent'
  });

  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // Simulate fetching system statistics
    const fetchSystemStats = () => {
      // In a real implementation, this would be an API call
      setSystemStats({
        totalSchools: 156,
        totalTeachers: 1247,
        totalStudents: 18923,
        totalLessons: 342,
        activeUsers: 2143,
        systemHealth: 'excellent'
      });

      setRecentActivity([
        {
          id: 1,
          type: 'school_added',
          description: 'בית ספר "תיכון הרצל" נוסף למערכת',
          timestamp: '2024-01-15 14:30',
          icon: '🏫'
        },
        {
          id: 2,
          type: 'feature_enabled',
          description: 'תכונת AI הופעלה עבור בית ספר "אורט ירושלים"',
          timestamp: '2024-01-15 13:15',
          icon: '🤖'
        },
        {
          id: 3,
          type: 'user_registered',
          description: '25 תלמידים חדשים נרשמו היום',
          timestamp: '2024-01-15 12:45',
          icon: '👥'
        },
        {
          id: 4,
          type: 'lesson_updated',
          description: 'שיעור "אלגברה בסיסית" עודכן',
          timestamp: '2024-01-15 11:20',
          icon: '📚'
        },
        {
          id: 5,
          type: 'system_maintenance',
          description: 'תחזוקת מערכת הושלמה בהצלחה',
          timestamp: '2024-01-15 10:00',
          icon: '🔧'
        }
      ]);
    };

    fetchSystemStats();
  }, []);

  const getHealthColor = (health) => {
    switch (health) {
      case 'excellent':
        return 'text-green-600 bg-green-100';
      case 'good':
        return 'text-blue-600 bg-blue-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'critical':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getHealthText = (health) => {
    switch (health) {
      case 'excellent':
        return 'מצוין';
      case 'good':
        return 'טוב';
      case 'warning':
        return 'אזהרה';
      case 'critical':
        return 'קריטי';
      default:
        return 'לא ידוע';
    }
  };

  const StatCard = ({ title, value, icon, color = 'indigo' }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-3xl font-bold text-${color}-600 mt-2`}>{value.toLocaleString()}</p>
        </div>
        <div className={`p-3 bg-${color}-100 rounded-full`}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">סקירה כללית של המערכת</h2>
          <p className="mt-1 text-sm text-gray-600">
            מצב המערכת נכון ל{new Date().toLocaleDateString('he-IL')} בשעה {new Date().toLocaleTimeString('he-IL')}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600">מצב המערכת:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getHealthColor(systemStats.systemHealth)}`}>
            🟢 {getHealthText(systemStats.systemHealth)}
          </span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="בתי ספר רשומים"
          value={systemStats.totalSchools}
          icon="🏫"
          color="blue"
        />
        <StatCard
          title="מורים פעילים"
          value={systemStats.totalTeachers}
          icon="👨‍🏫"
          color="green"
        />
        <StatCard
          title="תלמידים רשומים"
          value={systemStats.totalStudents}
          icon="👨‍🎓"
          color="purple"
        />
        <StatCard
          title="שיעורים במערכת"
          value={systemStats.totalLessons}
          icon="📚"
          color="yellow"
        />
        <StatCard
          title="משתמשים פעילים כעת"
          value={systemStats.activeUsers}
          icon="🟢"
          color="indigo"
        />
        <StatCard
          title="זמן פעילות המערכת"
          value="99.9%"
          icon="⏱️"
          color="red"
        />
      </div>

      {/* System Health Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">פעילות אחרונה</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <span className="text-lg">{activity.icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-900">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">ביצועי המערכת</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">שימוש בשרת</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">45%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">שימוש בזיכרון</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">62%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">שימוש במסד נתונים</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">78%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">זמן תגובה ממוצע</span>
              <span className="text-sm font-medium text-green-600">142ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">פעולות מהירות</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 text-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <span className="block text-2xl mb-2">🚨</span>
            <span className="text-sm font-medium text-gray-900">אזעקות</span>
          </button>
          <button className="p-4 text-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <span className="block text-2xl mb-2">📊</span>
            <span className="text-sm font-medium text-gray-900">דוחות</span>
          </button>
          <button className="p-4 text-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <span className="block text-2xl mb-2">🔄</span>
            <span className="text-sm font-medium text-gray-900">עדכון מערכת</span>
          </button>
          <button className="p-4 text-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <span className="block text-2xl mb-2">💾</span>
            <span className="text-sm font-medium text-gray-900">גיבוי</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemOverview;
