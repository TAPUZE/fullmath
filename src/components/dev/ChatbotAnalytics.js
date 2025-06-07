import React, { useState, useEffect } from 'react';

const ChatbotAnalytics = ({ devData }) => {
  const [chatbotStats, setChatbotStats] = useState({
    totalQuestions: 0,
    mathQuestions: 0,
    nonMathQuestions: 0,
    blockedUsers: [],
    activeUsers: [],
    popularTopics: [],
    averageResponseTime: 0,
    questionsToday: 0,
    questionsThisWeek: 0
  });

  const [selectedTimeRange, setSelectedTimeRange] = useState('today');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadChatbotAnalytics();
  }, [selectedTimeRange]);

  const loadChatbotAnalytics = async () => {
    setIsLoading(true);
    try {
      // Mock data - replace with real API call
      const mockStats = {
        totalQuestions: 1247,
        mathQuestions: 1156,
        nonMathQuestions: 91,
        blockedUsers: [
          { 
            email: 'student1@school.com', 
            blockedAt: new Date(Date.now() - 25 * 60 * 1000), 
            reason: 'הטרדה',
            blockUntil: new Date(Date.now() + 5 * 60 * 1000)
          },
          { 
            email: 'student2@school.com', 
            blockedAt: new Date(Date.now() - 10 * 60 * 1000), 
            reason: 'שאלות לא מתמטיות',
            blockUntil: new Date(Date.now() + 20 * 60 * 1000)
          }
        ],
        activeUsers: [
          { email: 'student3@school.com', questionsToday: 12, lastActive: new Date() },
          { email: 'student4@school.com', questionsToday: 8, lastActive: new Date() },
          { email: 'student5@school.com', questionsToday: 15, lastActive: new Date() }
        ],
        popularTopics: [
          { topic: 'משוואות ליניאריות', count: 45 },
          { topic: 'גיאומטריה', count: 38 },
          { topic: 'אלגברה', count: 32 },
          { topic: 'חדו״א', count: 28 },
          { topic: 'סטטיסטיקה', count: 21 }
        ],
        averageResponseTime: 1.2,
        questionsToday: 156,
        questionsThisWeek: 892
      };

      // Simulate API delay
      setTimeout(() => {
        setChatbotStats(mockStats);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error loading chatbot analytics:', error);
      setIsLoading(false);
    }
  };

  const unblockUser = async (userEmail) => {
    if (window.confirm(`האם אתה בטוח שברצונך לבטל את החסימה של ${userEmail}?`)) {
      try {
        // Mock API call - replace with real implementation
        console.log('Unblocking user:', userEmail);
        
        // Update local state
        setChatbotStats(prev => ({
          ...prev,
          blockedUsers: prev.blockedUsers.filter(user => user.email !== userEmail)
        }));
        
        alert(`החסימה של ${userEmail} בוטלה בהצלחה!`);
      } catch (error) {
        console.error('Error unblocking user:', error);
        alert('שגיאה בביטול החסימה');
      }
    }
  };

  const formatTimeRemaining = (blockUntil) => {
    const now = new Date();
    const remaining = blockUntil - now;
    
    if (remaining <= 0) {
      return 'פג תוקף';
    }
    
    const minutes = Math.floor(remaining / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3">טוען נתוני אנליטיקס...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">🤖 אנליטיקס בוט מתמטיקה</h2>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">היום</option>
            <option value="week">השבוע</option>
            <option value="month">החודש</option>
            <option value="all">כל הזמן</option>
          </select>
          <button
            onClick={loadChatbotAnalytics}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            רענן
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-green-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="mr-4">
              <p className="text-2xl font-bold text-green-900">{chatbotStats.questionsToday}</p>
              <p className="text-green-700 text-sm">שאלות היום</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-blue-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="mr-4">
              <p className="text-2xl font-bold text-blue-900">{chatbotStats.mathQuestions}</p>
              <p className="text-blue-700 text-sm">שאלות מתמטיות</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-yellow-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.18 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="mr-4">
              <p className="text-2xl font-bold text-yellow-900">{chatbotStats.nonMathQuestions}</p>
              <p className="text-yellow-700 text-sm">שאלות לא מתמטיות</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="text-red-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
              </svg>
            </div>
            <div className="mr-4">
              <p className="text-2xl font-bold text-red-900">{chatbotStats.blockedUsers.length}</p>
              <p className="text-red-700 text-sm">משתמשים חסומים</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blocked Users */}
      {chatbotStats.blockedUsers.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-red-700">🚫 משתמשים חסומים</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    משתמש
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    סיבת חסימה
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    נחסם בזמן
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    זמן נותר
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    פעולות
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {chatbotStats.blockedUsers.map((user, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.reason}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.blockedAt.toLocaleString('he-IL')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {formatTimeRemaining(user.blockUntil)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => unblockUser(user.email)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        בטל חסימה
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Popular Topics & Active Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Topics */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">📊 נושאים פופולריים</h3>
          <div className="space-y-3">
            {chatbotStats.popularTopics.map((topic, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{topic.topic}</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(topic.count / chatbotStats.popularTopics[0].count) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{topic.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">👥 משתמשים פעילים</h3>
          <div className="space-y-3">
            {chatbotStats.activeUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">{user.email}</p>
                  <p className="text-xs text-gray-600">
                    פעיל לאחרונה: {user.lastActive.toLocaleTimeString('he-IL')}
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {user.questionsToday} שאלות
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">⚡ ביצועים</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">{chatbotStats.averageResponseTime}s</p>
            <p className="text-sm text-gray-600">זמן תגובה ממוצע</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">
              {((chatbotStats.mathQuestions / chatbotStats.totalQuestions) * 100).toFixed(1)}%
            </p>
            <p className="text-sm text-gray-600">שאלות מתמטיות</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">{chatbotStats.activeUsers.length}</p>
            <p className="text-sm text-gray-600">משתמשים פעילים כעת</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotAnalytics;
