import React, { useState, useEffect } from 'react';

const AdminOverview = ({ adminData }) => {
  const [stats, setStats] = useState({
    totalTeachers: 0,
    totalClasses: 0,
    totalStudents: 0,
    activeLessons: 0,
    systemHealth: 'good'
  });

  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // Load school statistics
    loadSchoolStats();
    loadRecentActivity();
  }, []);

  const loadSchoolStats = () => {
    // In a real app, this would come from an API
    const mockStats = {
      totalTeachers: 25,
      totalClasses: 18,
      totalStudents: 450,
      activeLessons: 12,
      systemHealth: 'good'
    };
    setStats(mockStats);
  };

  const loadRecentActivity = () => {
    // Mock recent activity data
    const mockActivity = [
      {
        id: 1,
        type: 'teacher_login',
        user: 'רחל כהן',
        action: 'התחברה למערכת',
        time: '10:30',
        icon: '👨‍🏫'
      },
      {
        id: 2,
        type: 'lesson_completed',
        user: 'כיתה י"א 2',
        action: 'השלימה שיעור אלגברה',
        time: '09:45',
        icon: '📚'
      },
      {
        id: 3,
        type: 'new_student',
        user: 'דוד לוי',
        action: 'הצטרף לכיתה י"ב 1',
        time: '08:20',
        icon: '🎓'
      },
      {
        id: 4,
        type: 'system',
        user: 'מערכת',
        action: 'גיבוי אוטומטי הושלם',
        time: '07:00',
        icon: '💾'
      }
    ];
    setRecentActivity(mockActivity);
  };

  const getHealthColor = (health) => {
    switch (health) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getHealthText = (health) => {
    switch (health) {
      case 'excellent': return 'מצוין';
      case 'good': return 'טוב';
      case 'warning': return 'זהירות';
      case 'error': return 'שגיאה';
      default: return 'לא ידוע';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">
          ברוך הבא למערכת ניהול {adminData.schoolName}
        </h2>
        <p className="text-purple-100">
          כאן תוכל לנהל את כל היבטי בית הספר - מורים, תלמידים, כיתות ושיעורים
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-blue-500">
          <div className="flex items-center">
            <div className="text-3xl text-blue-500 ml-4">👨‍🏫</div>
            <div>
              <p className="text-sm font-medium text-gray-600">מורים</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalTeachers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-green-500">
          <div className="flex items-center">
            <div className="text-3xl text-green-500 ml-4">🏛️</div>
            <div>
              <p className="text-sm font-medium text-gray-600">כיתות</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalClasses}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-yellow-500">
          <div className="flex items-center">
            <div className="text-3xl text-yellow-500 ml-4">🎓</div>
            <div>
              <p className="text-sm font-medium text-gray-600">תלמידים</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-purple-500">
          <div className="flex items-center">
            <div className="text-3xl text-purple-500 ml-4">📚</div>
            <div>
              <p className="text-sm font-medium text-gray-600">שיעורים פעילים</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeLessons}</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Status and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Health */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">מצב המערכת</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">בריאות המערכת</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getHealthColor(stats.systemHealth)}`}>
                {getHealthText(stats.systemHealth)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">שרת</span>
              <span className="text-sm text-green-600">🟢 פעיל</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">בסיס נתונים</span>
              <span className="text-sm text-green-600">🟢 מחובר</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">גיבוי אחרון</span>
              <span className="text-sm text-gray-600">היום 07:00</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">פעילות אחרונה</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-lg">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.user} {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">פעולות מהירות</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200">
            <div className="text-center">
              <div className="text-2xl mb-2">➕</div>
              <p className="text-sm font-medium text-blue-800">הוסף מורה חדש</p>
            </div>
          </button>
          
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors duration-200">
            <div className="text-center">
              <div className="text-2xl mb-2">🏗️</div>
              <p className="text-sm font-medium text-green-800">צור כיתה חדשה</p>
            </div>
          </button>
          
          <button className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg border border-yellow-200 transition-colors duration-200">
            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <p className="text-sm font-medium text-yellow-800">דוח התקדמות</p>
            </div>
          </button>
          
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors duration-200">
            <div className="text-center">
              <div className="text-2xl mb-2">💾</div>
              <p className="text-sm font-medium text-purple-800">גיבוי מערכת</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
