import React, { useState, useEffect } from 'react';

const Analytics = ({ devData }) => {
  const [timeRange, setTimeRange] = useState('7days');
  const [selectedMetric, setSelectedMetric] = useState('overview');
  const [analyticsData, setAnalyticsData] = useState({});

  // Mock data
  useEffect(() => {
    const mockData = {
      overview: {
        totalUsers: 20456,
        activeUsers: 8234,
        newUsers: 456,
        userGrowth: 12.5,
        lessonsCompleted: 15678,
        averageScore: 78.5,
        systemUptime: 99.9
      },
      engagement: {
        dailyActiveUsers: [120, 145, 178, 134, 189, 201, 167],
        weeklyRetention: 72,
        averageSessionTime: 24.5,
        lessonsPerUser: 3.4,
        bounceRate: 18.2
      },
      performance: {
        averageLoadTime: 1.2,
        errorRate: 0.3,
        apiResponseTime: 145,
        databaseQueries: 234,
        serverLoad: 45
      },
      schools: [
        {
          name: 'תיכון הרצל תל אביב',
          students: 1247,
          teachers: 45,
          engagement: 85,
          avgScore: 82,
          lessonsCompleted: 4567
        },
        {
          name: 'אורט ירושלים',
          students: 892,
          teachers: 32,
          engagement: 78,
          avgScore: 79,
          lessonsCompleted: 3241
        },
        {
          name: 'תיכון מקיף חיפה',
          students: 623,
          teachers: 28,
          engagement: 71,
          avgScore: 75,
          lessonsCompleted: 2145
        },
        {
          name: 'תיכון טכנולוגי באר שבע',
          students: 1456,
          teachers: 52,
          engagement: 89,
          avgScore: 84,
          lessonsCompleted: 5890
        }
      ],
      lessons: [
        {
          title: 'אלגברה בסיסית',
          completions: 2345,
          avgScore: 82,
          rating: 4.6,
          timeSpent: 18.5
        },
        {
          title: 'גיאומטריה',
          completions: 1876,
          avgScore: 75,
          rating: 4.2,
          timeSpent: 22.1
        },
        {
          title: 'טריגונומטריה',
          completions: 1654,
          avgScore: 78,
          rating: 4.4,
          timeSpent: 25.3
        },
        {
          title: 'סטטיסטיקה',
          completions: 1234,
          avgScore: 80,
          rating: 4.5,
          timeSpent: 19.7
        }
      ]
    };
    setAnalyticsData(mockData);
  }, [timeRange]);

  const MetricCard = ({ title, value, change, icon, color = 'indigo' }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-3xl font-bold text-${color}-600 mt-2`}>{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '↗️' : '↘️'} {Math.abs(change)}%
            </p>
          )}
        </div>
        <div className={`p-3 bg-${color}-100 rounded-full`}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );

  const ChartPlaceholder = ({ title, height = "200px" }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div 
        className="bg-gray-100 rounded-lg flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">📊</div>
          <p className="text-gray-600">גרף {title}</p>
          <p className="text-sm text-gray-500 mt-1">נתונים מתעדכנים</p>
        </div>
      </div>
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="סה״כ משתמשים"
          value={analyticsData.overview?.totalUsers.toLocaleString()}
          change={12.5}
          icon="👥"
          color="blue"
        />
        <MetricCard
          title="משתמשים פעילים"
          value={analyticsData.overview?.activeUsers.toLocaleString()}
          change={8.3}
          icon="🟢"
          color="green"
        />
        <MetricCard
          title="משתמשים חדשים"
          value={analyticsData.overview?.newUsers.toLocaleString()}
          change={15.2}
          icon="🆕"
          color="purple"
        />
        <MetricCard
          title="ממוצע ציונים"
          value={`${analyticsData.overview?.averageScore}%`}
          change={3.1}
          icon="📈"
          color="yellow"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder title="משתמשים פעילים יומית" />
        <ChartPlaceholder title="התפלגות ציונים" />
        <ChartPlaceholder title="שיעורים הושלמו" />
        <ChartPlaceholder title="זמן שהיה במערכת" />
      </div>

      {/* Top Schools */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">בתי ספר מובילים</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-medium text-gray-900">בית ספר</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">תלמידים</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">מורים</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">מעורבות</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">ממוצע ציונים</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">שיעורים הושלמו</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.schools?.map((school, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-900">{school.name}</td>
                  <td className="text-center py-3 px-4 text-gray-600">{school.students}</td>
                  <td className="text-center py-3 px-4 text-gray-600">{school.teachers}</td>
                  <td className="text-center py-3 px-4">
                    <div className="flex items-center justify-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${school.engagement}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{school.engagement}%</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4 text-gray-600">{school.avgScore}%</td>
                  <td className="text-center py-3 px-4 text-gray-600">{school.lessonsCompleted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const EngagementTab = () => (
    <div className="space-y-6">
      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <MetricCard
          title="שימור שבועי"
          value={`${analyticsData.engagement?.weeklyRetention}%`}
          change={5.2}
          icon="🔄"
          color="green"
        />
        <MetricCard
          title="זמן סשן ממוצע"
          value={`${analyticsData.engagement?.averageSessionTime} דק׳`}
          change={-2.1}
          icon="⏱️"
          color="blue"
        />
        <MetricCard
          title="שיעורים למשתמש"
          value={analyticsData.engagement?.lessonsPerUser}
          change={8.7}
          icon="📚"
          color="purple"
        />
        <MetricCard
          title="קצב יציאה"
          value={`${analyticsData.engagement?.bounceRate}%`}
          change={-3.4}
          icon="🚪"
          color="yellow"
        />
        <MetricCard
          title="משתמשים פעילים יומית"
          value="2,340"
          change={12.1}
          icon="📅"
          color="indigo"
        />
      </div>

      {/* Engagement Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder title="מעורבות יומית" />
        <ChartPlaceholder title="זמן שהיה במערכת" />
        <ChartPlaceholder title="התפלגות פעילות" />
        <ChartPlaceholder title="שימור משתמשים" />
      </div>

      {/* Top Lessons */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">שיעורים פופולריים</h3>
        <div className="space-y-4">
          {analyticsData.lessons?.map((lesson, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                <p className="text-sm text-gray-600">{lesson.completions} השלמות</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">{lesson.avgScore}%</p>
                  <p className="text-xs text-gray-500">ממוצע</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">{lesson.rating}</p>
                  <p className="text-xs text-gray-500">דירוג</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">{lesson.timeSpent} דק׳</p>
                  <p className="text-xs text-gray-500">זמן ממוצע</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PerformanceTab = () => (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <MetricCard
          title="זמן טעינה ממוצע"
          value={`${analyticsData.performance?.averageLoadTime}s`}
          change={-8.3}
          icon="⚡"
          color="green"
        />
        <MetricCard
          title="שיעור שגיאות"
          value={`${analyticsData.performance?.errorRate}%`}
          change={-15.2}
          icon="❌"
          color="red"
        />
        <MetricCard
          title="זמן תגובת API"
          value={`${analyticsData.performance?.apiResponseTime}ms`}
          change={-5.7}
          icon="🔄"
          color="blue"
        />
        <MetricCard
          title="עומס שרת"
          value={`${analyticsData.performance?.serverLoad}%`}
          change={12.1}
          icon="🖥️"
          color="yellow"
        />
        <MetricCard
          title="זמן פעילות"
          value={`${analyticsData.overview?.systemUptime}%`}
          change={0.1}
          icon="⏰"
          color="purple"
        />
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder title="זמני תגובה" />
        <ChartPlaceholder title="עומס מערכת" />
        <ChartPlaceholder title="שגיאות ברשת" />
        <ChartPlaceholder title="שימוש במשאבים" />
      </div>

      {/* System Health */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">בריאות המערכת</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🟢</span>
              <div>
                <h4 className="font-medium text-gray-900">שרת אפליקציה</h4>
                <p className="text-sm text-gray-600">פועל תקין</p>
              </div>
            </div>
            <span className="text-green-600 font-medium">99.9%</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🗄️</span>
              <div>
                <h4 className="font-medium text-gray-900">מסד נתונים</h4>
                <p className="text-sm text-gray-600">פועל תקין</p>
              </div>
            </div>
            <span className="text-green-600 font-medium">99.8%</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="font-medium text-gray-900">שירות גיבוי</h4>
                <p className="text-sm text-gray-600">עומס גבוה</p>
              </div>
            </div>
            <span className="text-yellow-600 font-medium">85.2%</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📡</span>
              <div>
                <h4 className="font-medium text-gray-900">CDN</h4>
                <p className="text-sm text-gray-600">פועל תקין</p>
              </div>
            </div>
            <span className="text-green-600 font-medium">99.9%</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">אנליטיקה ודוחות</h2>
          <p className="mt-1 text-sm text-gray-600">
            נתונים סטטיסטיים ותובנות על המערכת
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="7days">7 ימים אחרונים</option>
            <option value="30days">30 ימים אחרונים</option>
            <option value="90days">90 ימים אחרונים</option>
            <option value="1year">שנה אחרונה</option>
          </select>
          <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
            📊 יצא דוח
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', name: 'סקירה כללית', icon: '📊' },
            { id: 'engagement', name: 'מעורבות', icon: '💡' },
            { id: 'performance', name: 'ביצועים', icon: '⚡' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedMetric(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                selectedMetric === tab.id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {selectedMetric === 'overview' && <OverviewTab />}
      {selectedMetric === 'engagement' && <EngagementTab />}
      {selectedMetric === 'performance' && <PerformanceTab />}
    </div>
  );
};

export default Analytics;
