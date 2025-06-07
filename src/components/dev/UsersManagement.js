import React, { useState, useEffect } from 'react';

const UsersManagement = ({ devData }) => {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('teachers');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSchool, setFilterSchool] = useState('all');
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Mock data
  useEffect(() => {
    const mockUsers = {
      teachers: [
        {
          id: 1,
          name: 'דר\' שרה כהן',
          email: 'sarah.cohen@school1.edu',
          school: 'תיכון הרצל תל אביב',
          subjects: ['מתמטיקה', 'פיזיקה'],
          status: 'active',
          lastLogin: '2024-01-15 14:30',
          totalStudents: 156,
          lessonsCreated: 23
        },
        {
          id: 2,
          name: 'מר יוסי לוי',
          email: 'yossi.levy@school2.edu',
          school: 'אורט ירושלים',
          subjects: ['מתמטיקה'],
          status: 'active',
          lastLogin: '2024-01-15 13:15',
          totalStudents: 89,
          lessonsCreated: 15
        },
        {
          id: 3,
          name: 'גב\' רחל דוד',
          email: 'rachel.david@school3.edu',
          school: 'תיכון מקיף חיפה',
          subjects: ['אלגברה', 'גיאומטריה'],
          status: 'inactive',
          lastLogin: '2024-01-10 09:20',
          totalStudents: 67,
          lessonsCreated: 8
        }
      ],
      students: [
        {
          id: 1,
          name: 'דני שמיר',
          email: 'dani.shamir@student.edu',
          school: 'תיכון הרצל תל אביב',
          grade: 'י',
          status: 'active',
          lastLogin: '2024-01-15 15:45',
          completedLessons: 34,
          avgScore: 87
        },
        {
          id: 2,
          name: 'מיכל אברהם',
          email: 'michal.abraham@student.edu',
          school: 'אורט ירושלים',
          grade: 'יא',
          status: 'active',
          lastLogin: '2024-01-15 14:20',
          completedLessons: 28,
          avgScore: 92
        },
        {
          id: 3,
          name: 'עמית גולן',
          email: 'amit.golan@student.edu',
          school: 'תיכון מקיף חיפה',
          grade: 'יב',
          status: 'inactive',
          lastLogin: '2024-01-12 11:30',
          completedLessons: 45,
          avgScore: 78
        }
      ],
      admins: [
        {
          id: 1,
          name: 'ד"ר אילנה רוזן',
          email: 'ilana.rosen@admin.edu',
          school: 'תיכון הרצל תל אביב',
          role: 'מנהלת בית ספר',
          status: 'active',
          lastLogin: '2024-01-15 16:00',
          permissions: ['view_reports', 'manage_teachers', 'manage_students']
        },
        {
          id: 2,
          name: 'מר דוד אדלר',
          email: 'david.adler@admin.edu',
          school: 'אורט ירושלים',
          role: 'רכז מתמטיקה',
          status: 'active',
          lastLogin: '2024-01-15 12:45',
          permissions: ['view_reports', 'manage_content']
        }
      ]
    };
    setUsers(mockUsers);
  }, []);

  const currentUsers = users[activeTab] || [];
  const schools = ['תיכון הרצל תל אביב', 'אורט ירושלים', 'תיכון מקיף חיפה', 'תיכון טכנולוגי באר שבע'];

  const filteredUsers = currentUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSchool = filterSchool === 'all' || user.school === filterSchool;
    return matchesSearch && matchesSchool;
  });

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

  const toggleUserStatus = (userId) => {
    setUsers(prevUsers => ({
      ...prevUsers,
      [activeTab]: prevUsers[activeTab].map(user =>
        user.id === userId
          ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
          : user
      )
    }));
  };

  const UserCard = ({ user, type }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-indigo-600 font-medium text-lg">
              {user.name.split(' ')[0].charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-600">{user.school}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
          {user.status === 'active' ? 'פעיל' : user.status === 'inactive' ? 'לא פעיל' : 'מושעה'}
        </span>
      </div>

      {type === 'teachers' && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-lg font-bold text-blue-600">{user.totalStudents}</p>
            <p className="text-xs text-blue-600">תלמידים</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-lg font-bold text-green-600">{user.lessonsCreated}</p>
            <p className="text-xs text-green-600">שיעורים</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <p className="text-lg font-bold text-purple-600">{user.subjects.length}</p>
            <p className="text-xs text-purple-600">מקצועות</p>
          </div>
        </div>
      )}

      {type === 'students' && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-lg font-bold text-blue-600">{user.grade}</p>
            <p className="text-xs text-blue-600">כיתה</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-lg font-bold text-green-600">{user.completedLessons}</p>
            <p className="text-xs text-green-600">שיעורים</p>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <p className="text-lg font-bold text-yellow-600">{user.avgScore}%</p>
            <p className="text-xs text-yellow-600">ממוצע</p>
          </div>
        </div>
      )}

      {type === 'admins' && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">תפקיד:</span>
            <span className="text-sm text-gray-900">{user.role}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {user.permissions.map((permission, index) => (
              <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                {permission === 'view_reports' ? 'צפייה בדוחות' :
                 permission === 'manage_teachers' ? 'ניהול מורים' :
                 permission === 'manage_students' ? 'ניהול תלמידים' :
                 permission === 'manage_content' ? 'ניהול תוכן' : permission}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>כניסה אחרונה: {new Date(user.lastLogin).toLocaleString('he-IL')}</span>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => {
            setSelectedUser(user);
            setShowUserModal(true);
          }}
          className="flex-1 px-3 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
        >
          ✏️ עריכה
        </button>
        <button
          onClick={() => toggleUserStatus(user.id)}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            user.status === 'active'
              ? 'bg-red-100 text-red-700 hover:bg-red-200'
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
          disabled={devData.accessLevel === 'content-manager'}
        >
          {user.status === 'active' ? '🚫 השעה' : '✅ הפעל'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">ניהול משתמשים</h2>
          <p className="mt-1 text-sm text-gray-600">
            ניהול מורים, תלמידים ומנהלים במערכת
          </p>
        </div>
        <button
          onClick={() => setShowUserModal(true)}
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors flex items-center space-x-2"
          disabled={devData.accessLevel === 'content-manager'}
        >
          <span>➕</span>
          <span>הוסף משתמש</span>
        </button>
      </div>

      {/* User Type Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'teachers', name: 'מורים', icon: '👨‍🏫', count: users.teachers?.length || 0 },
            { id: 'students', name: 'תלמידים', icon: '👨‍🎓', count: users.students?.length || 0 },
            { id: 'admins', name: 'מנהלים', icon: '👨‍💼', count: users.admins?.length || 0 }
          ].map((tab) => (
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
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex-1 md:w-64">
              <input
                type="text"
                placeholder="חפש משתמשים..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <select
              value={filterSchool}
              onChange={(e) => setFilterSchool(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">כל בתי הספר</option>
              {schools.map((school) => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-500">
            מציג {filteredUsers.length} מתוך {currentUsers.length} משתמשים
          </div>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} type={activeTab} />
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">
            {activeTab === 'teachers' ? '👨‍🏫' : activeTab === 'students' ? '👨‍🎓' : '👨‍💼'}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">לא נמצאו משתמשים</h3>
          <p className="text-gray-600">נסה לשנות את קריטריוני החיפוש</p>
        </div>
      )}

      {/* User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {selectedUser ? `עריכת משתמש - ${selectedUser.name}` : 'הוסף משתמש חדש'}
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                  <input
                    type="text"
                    defaultValue={selectedUser?.name || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="הכנס שם מלא"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
                  <input
                    type="email"
                    defaultValue={selectedUser?.email || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="הכנס אימייל"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">בית ספר</label>
                  <select
                    defaultValue={selectedUser?.school || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">בחר בית ספר</option>
                    {schools.map((school) => (
                      <option key={school} value={school}>{school}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">סטטוס</label>
                  <select
                    defaultValue={selectedUser?.status || 'active'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="active">פעיל</option>
                    <option value="inactive">לא פעיל</option>
                    <option value="suspended">מושעה</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => {
                  setShowUserModal(false);
                  setSelectedUser(null);
                }}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 transition-colors"
              >
                ביטול
              </button>
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
                {selectedUser ? 'שמור שינויים' : 'הוסף משתמש'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersManagement;
