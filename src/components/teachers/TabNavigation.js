import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  // Define tabs array with Hebrew labels and icons
  const tabs = [
    { id: 'overview', name: 'סקירה כללית', icon: '📊' },
    { id: 'students', name: 'תלמידים', icon: '👥' },
    { id: 'reports', name: 'דוחות', icon: '📈' },
    { id: 'settings', name: 'הגדרות', icon: '⚙️' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg mb-6">
      <div className="border-b border-gray-200">
        <nav className="flex justify-between items-center px-6" aria-label="Tabs">
          <div className="flex space-x-8">
            {tabs && tabs.length > 0 && tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
              >
                <span>{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
          
          {/* Admin Access Quick Link */}
          <div className="py-4">
            <a
              href="/admin/login"
              className="bg-purple-50 hover:bg-purple-100 text-purple-700 hover:text-purple-800 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors border border-purple-200"
              title="גישה לפאנל ניהול בית הספר"
            >
              <span>🏫</span>
              <span className="hidden md:inline">פאנל ניהול</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;
