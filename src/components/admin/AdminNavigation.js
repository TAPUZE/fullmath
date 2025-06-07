import React from 'react';

const AdminNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: 'overview',
      name: 'סקירה כללית',
      icon: '📊',
      description: 'דוח מצב כללי של בית הספר'
    },
    {
      id: 'teachers',
      name: 'ניהול מורים',
      icon: '👨‍🏫',
      description: 'הוספה, עריכה ומחיקה של מורים'
    },
    {
      id: 'classes',
      name: 'ניהול כיתות',
      icon: '🏛️',
      description: 'ניהול כיתות ושיוך תלמידים'
    },
    {
      id: 'lessons',
      name: 'ניהול שיעורים',
      icon: '📚',
      description: 'מעקב אחר שיעורים פעילים'
    },
    {
      id: 'settings',
      name: 'הגדרות',
      icon: '⚙️',
      description: 'הגדרות מערכת וביה"ס'
    }
  ];

  return (
    <div className="mb-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Description */}
      <div className="mt-4 px-1">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <p key={tab.id} className="text-sm text-gray-600">
              {tab.description}
            </p>
          )
        ))}
      </div>
    </div>
  );
};

export default AdminNavigation;
