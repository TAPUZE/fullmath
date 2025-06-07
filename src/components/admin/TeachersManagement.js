import React, { useState, useEffect } from 'react';

const TeachersManagement = ({ adminData }) => {
  const [teachers, setTeachers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    subject: '',
    classes: [],
    phone: ''
  });

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = () => {
    // Mock teachers data
    const mockTeachers = [
      {
        id: 1,
        name: 'רחל כהן',
        email: 'rachel.cohen@school.edu.il',
        subject: 'מתמטיקה',
        classes: ['י"א 1', 'י"א 2', 'י"ב 1'],
        phone: '050-1234567',
        joinDate: '2022-09-01',
        status: 'active',
        lessonsCount: 45
      },
      {
        id: 2,
        name: 'דוד לוי',
        email: 'david.levi@school.edu.il',
        subject: 'פיזיקה',
        classes: ['י"ב 1', 'י"ב 2'],
        phone: '052-7654321',
        joinDate: '2021-08-15',
        status: 'active',
        lessonsCount: 32
      },
      {
        id: 3,
        name: 'מירי אברהם',
        email: 'miri.abraham@school.edu.il',
        subject: 'כימיה',
        classes: ['י"א 3', 'י"ב 3'],
        phone: '054-9876543',
        joinDate: '2023-02-01',
        status: 'active',
        lessonsCount: 28
      }
    ];
    setTeachers(mockTeachers);
  };

  const handleAddTeacher = () => {
    if (!newTeacher.name || !newTeacher.email || !newTeacher.subject) {
      alert('נא למלא את כל השדות הנדרשים');
      return;
    }

    const teacher = {
      id: Date.now(),
      ...newTeacher,
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active',
      lessonsCount: 0
    };

    setTeachers([...teachers, teacher]);
    setNewTeacher({ name: '', email: '', subject: '', classes: [], phone: '' });
    setShowAddModal(false);
  };

  const handleEditTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setNewTeacher(teacher);
    setShowEditModal(true);
  };

  const handleUpdateTeacher = () => {
    const updatedTeachers = teachers.map(teacher =>
      teacher.id === selectedTeacher.id ? { ...teacher, ...newTeacher } : teacher
    );
    setTeachers(updatedTeachers);
    setShowEditModal(false);
    setSelectedTeacher(null);
    setNewTeacher({ name: '', email: '', subject: '', classes: [], phone: '' });
  };

  const handleDeleteTeacher = (teacherId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק את המורה?')) {
      setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
    }
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">ניהול מורים</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          ➕ הוסף מורה חדש
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="חפש מורה (שם, אימייל, מקצוע)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">כל המקצועות</option>
              <option value="math">מתמטיקה</option>
              <option value="physics">פיזיקה</option>
              <option value="chemistry">כימיה</option>
              <option value="biology">ביולוגיה</option>
            </select>
          </div>
        </div>
      </div>

      {/* Teachers List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  מורה
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  מקצוע
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  כיתות
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  שיעורים
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  סטטוס
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  פעולות
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-medium">
                          {teacher.name.charAt(0)}
                        </span>
                      </div>
                      <div className="mr-4">
                        <div className="text-sm font-medium text-gray-900">
                          {teacher.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {teacher.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {teacher.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex flex-wrap gap-1">
                      {teacher.classes.map((className, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {className}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {teacher.lessonsCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      teacher.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {teacher.status === 'active' ? 'פעיל' : 'לא פעיל'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditTeacher(teacher)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDeleteTeacher(teacher.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Teacher Modal */}
      <Modal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="הוספת מורה חדש"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="שם מלא"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="כתובת אימייל"
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="מקצוע"
            value={newTeacher.subject}
            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="tel"
            placeholder="מספר טלפון"
            value={newTeacher.phone}
            onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex gap-2 pt-4">
            <button
              onClick={handleAddTeacher}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium"
            >
              הוסף מורה
            </button>
            <button
              onClick={() => setShowAddModal(false)}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium"
            >
              ביטול
            </button>
          </div>
        </div>
      </Modal>

      {/* Edit Teacher Modal */}
      <Modal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="עריכת מורה"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="שם מלא"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="כתובת אימייל"
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="מקצוע"
            value={newTeacher.subject}
            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="tel"
            placeholder="מספר טלפון"
            value={newTeacher.phone}
            onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex gap-2 pt-4">
            <button
              onClick={handleUpdateTeacher}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium"
            >
              עדכן מורה
            </button>
            <button
              onClick={() => setShowEditModal(false)}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium"
            >
              ביטול
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeachersManagement;
