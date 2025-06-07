import React, { useState, useEffect } from 'react';

const ClassesManagement = ({ adminData }) => {
  const [classes, setClasses] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newClass, setNewClass] = useState({
    name: '',
    grade: '',
    teacher: '',
    students: [],
    capacity: 30,
    room: ''
  });

  useEffect(() => {
    loadClasses();
  }, []);

  const loadClasses = () => {
    // Mock classes data
    const mockClasses = [
      {
        id: 1,
        name: 'י"א 1',
        grade: 'י"א',
        teacher: 'רחל כהן',
        teacherEmail: 'rachel.cohen@school.edu.il',
        students: ['אליה דוד', 'שרה לוי', 'יוסף כהן', 'מרים אברהם'],
        capacity: 30,
        room: 'כיתה 101',
        activeStudents: 25,
        createdDate: '2023-09-01',
        status: 'active'
      },
      {
        id: 2,
        name: 'י"א 2',
        grade: 'י"א',
        teacher: 'רחל כהן',
        teacherEmail: 'rachel.cohen@school.edu.il',
        students: ['דן רוזן', 'נועה ישראל', 'עמית בן דוד'],
        capacity: 30,
        room: 'כיתה 102',
        activeStudents: 28,
        createdDate: '2023-09-01',
        status: 'active'
      },
      {
        id: 3,
        name: 'י"ב 1',
        grade: 'י"ב',
        teacher: 'דוד לוי',
        teacherEmail: 'david.levi@school.edu.il',
        students: ['תמר כהן', 'יואב לוי'],
        capacity: 25,
        room: 'כיתה 201',
        activeStudents: 22,
        createdDate: '2022-09-01',
        status: 'active'
      }
    ];
    setClasses(mockClasses);
  };

  const handleAddClass = () => {
    if (!newClass.name || !newClass.grade || !newClass.teacher) {
      alert('נא למלא את כל השדות הנדרשים');
      return;
    }

    const classData = {
      id: Date.now(),
      ...newClass,
      students: [],
      activeStudents: 0,
      createdDate: new Date().toISOString().split('T')[0],
      status: 'active'
    };

    setClasses([...classes, classData]);
    setNewClass({ name: '', grade: '', teacher: '', students: [], capacity: 30, room: '' });
    setShowAddModal(false);
  };

  const handleEditClass = (classData) => {
    setSelectedClass(classData);
    setNewClass(classData);
    setShowEditModal(true);
  };

  const handleUpdateClass = () => {
    const updatedClasses = classes.map(cls =>
      cls.id === selectedClass.id ? { ...cls, ...newClass } : cls
    );
    setClasses(updatedClasses);
    setShowEditModal(false);
    setSelectedClass(null);
    setNewClass({ name: '', grade: '', teacher: '', students: [], capacity: 30, room: '' });
  };

  const handleDeleteClass = (classId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק את הכיתה?')) {
      setClasses(classes.filter(cls => cls.id !== classId));
    }
  };

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getOccupancyColor = (activeStudents, capacity) => {
    const percentage = (activeStudents / capacity) * 100;
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

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
        <h2 className="text-2xl font-bold text-gray-900">ניהול כיתות</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          ➕ הוסף כיתה חדשה
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="חפש כיתה (שם, מורה, שכבה)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">כל השכבות</option>
              <option value="tenth">י'</option>
              <option value="eleventh">י"א</option>
              <option value="twelfth">י"ב</option>
            </select>
          </div>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((classData) => (
          <div key={classData.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            {/* Class Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{classData.name}</h3>
                <p className="text-sm text-gray-600">חדר {classData.room}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditClass(classData)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDeleteClass(classData.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  🗑️
                </button>
              </div>
            </div>

            {/* Teacher Info */}
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg">👨‍🏫</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{classData.teacher}</p>
                  <p className="text-xs text-gray-500">{classData.teacherEmail}</p>
                </div>
              </div>
            </div>

            {/* Students Count */}
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">תלמידים</span>
                <span className={`text-sm font-medium ${getOccupancyColor(classData.activeStudents, classData.capacity)}`}>
                  {classData.activeStudents} / {classData.capacity}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    (classData.activeStudents / classData.capacity) * 100 >= 90
                      ? 'bg-red-500'
                      : (classData.activeStudents / classData.capacity) * 100 >= 75
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                  }`}
                  style={{ width: `${(classData.activeStudents / classData.capacity) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Sample Students */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">תלמידים (דוגמה):</p>
              <div className="space-y-1">
                {classData.students.slice(0, 3).map((student, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xs text-blue-600">{student.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-gray-700">{student}</span>
                  </div>
                ))}
                {classData.students.length > 3 && (
                  <p className="text-xs text-gray-500">+{classData.students.length - 3} תלמידים נוספים</p>
                )}
              </div>
            </div>

            {/* Status */}
            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                classData.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {classData.status === 'active' ? 'פעילה' : 'לא פעילה'}
              </span>
              <span className="text-xs text-gray-500">נוצרה: {classData.createdDate}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Class Modal */}
      <Modal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="הוספת כיתה חדשה"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="שם הכיתה (למשל: י'א 1)"
            value={newClass.name}
            onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={newClass.grade}
            onChange={(e) => setNewClass({ ...newClass, grade: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="">בחר שכבה</option>
            <option value="י'">י'</option>
            <option value="י'א">י"א</option>
            <option value="י'ב">י"ב</option>
          </select>
          <input
            type="text"
            placeholder="מורה אחראי"
            value={newClass.teacher}
            onChange={(e) => setNewClass({ ...newClass, teacher: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="חדר (למשל: כיתה 101)"
            value={newClass.room}
            onChange={(e) => setNewClass({ ...newClass, room: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="number"
            placeholder="קיבולת מקסימלית"
            value={newClass.capacity}
            onChange={(e) => setNewClass({ ...newClass, capacity: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex gap-2 pt-4">
            <button
              onClick={handleAddClass}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium"
            >
              הוסף כיתה
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

      {/* Edit Class Modal */}
      <Modal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="עריכת כיתה"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="שם הכיתה"
            value={newClass.name}
            onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={newClass.grade}
            onChange={(e) => setNewClass({ ...newClass, grade: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="">בחר שכבה</option>
            <option value="י'">י'</option>
            <option value="י'א">י"א</option>
            <option value="י'ב">י"ב</option>
          </select>
          <input
            type="text"
            placeholder="מורה אחראי"
            value={newClass.teacher}
            onChange={(e) => setNewClass({ ...newClass, teacher: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="חדר"
            value={newClass.room}
            onChange={(e) => setNewClass({ ...newClass, room: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="number"
            placeholder="קיבולת מקסימלית"
            value={newClass.capacity}
            onChange={(e) => setNewClass({ ...newClass, capacity: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex gap-2 pt-4">
            <button
              onClick={handleUpdateClass}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium"
            >
              עדכן כיתה
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

export default ClassesManagement;
