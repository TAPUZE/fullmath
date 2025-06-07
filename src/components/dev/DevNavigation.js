import React from 'react';

const DevNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: 'overview',
      name: 'סקירה כללית',
      icon: '📊',
      description: 'מצב המערכת והנתונים הכלליים'
    },
    {
      id: 'schools',
      name: 'ניהול בתי ספר',
      icon: '🏫',
      description: 'ניהול בתי ספר וההגדרות שלהם'
    },
    {
      id: 'users',
      name: 'ניהול משתמשים',
      icon: '👥',
      description: 'ניהול מורים, תלמידים ומנהלים'
    },
    {
      id: 'features',
      name: 'ניהול תכונות',
      icon: '⚙️',
      description: 'הפעלה וכיבוי תכונות לבתי ספר'
    },
    {
      id: 'lessons',
      name: 'ניהול שיעורים',
      icon: '📚',
      description: 'ניהול תוכן השיעורים והתרגילים'
    },
    {
      id: 'analytics',
      name: 'אנליטיקה',
      icon: '📈',
      description: 'דוחות ונתונים סטטיסטיים'
    },
    {
      id: 'settings',
      name: 'הגדרות מערכת',
      icon: '🔧',
      description: 'הגדרות כלליות של המערכת'
    }
  ];

  return (
    <div className="mb-6">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl mb-1">{tab.icon}</span>
              <span className="font-medium">{tab.name}</span>
              <span className="text-xs mt-1 opacity-75">{tab.description}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                  activeTab === tab.id
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
      </div>

      {/* Active tab description for mobile */}
      <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">
            {tabs.find(tab => tab.id === activeTab)?.icon}
          </span>
          <div>
            <h3 className="font-medium text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.name}
            </h3>
            <p className="text-sm text-gray-600">
              {tabs.find(tab => tab.id === activeTab)?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevNavigation;
