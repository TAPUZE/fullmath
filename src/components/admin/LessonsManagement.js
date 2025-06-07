import React, { useState, useEffect } from 'react';

const LessonsManagement = ({ adminData }) => {
  const [lessons, setLessons] = useState([]);
  const [activeLessons, setActiveLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    loadLessons();
    loadActiveLessons();
  }, []);

  const loadLessons = () => {
    // Mock lessons data
    const mockLessons = [
      {
        id: 1,
        title: 'אלגברה לינארית - משוואות במשתנה אחד',
        subject: 'מתמטיקה',
        teacher: 'רחל כהן',
        class: 'י"א 1',
        students: 25,
        completedStudents: 18,
        averageScore: 85,
        status: 'completed',
        startTime: '2024-01-15 08:00',
        endTime: '2024-01-15 08:45',
        duration: 45,
        lessonType: 'live'
      },
      {
        id: 2,
        title: 'גיאומטריה - שטח ונפח',
        subject: 'מתמטיקה',
        teacher: 'רחל כהן',
        class: 'י"א 2',
        students: 28,
        completedStudents: 0,
        averageScore: 0,
        status: 'active',
        startTime: '2024-01-15 09:00',
        endTime: null,
        duration: 45,
        lessonType: 'live'
      },
      {
        id: 3,
        title: 'פיזיקה - חוקי ניוטון',
        subject: 'פיזיקה',
        teacher: 'דוד לוי',
        class: 'י"ב 1',
        students: 22,
        completedStudents: 22,
        averageScore: 78,
        status: 'completed',
        startTime: '2024-01-14 10:00',
        endTime: '2024-01-14 10:45',
        duration: 45,
        lessonType: 'self_study'
      },
      {
        id: 4,
        title: 'טריגונומטריה - משולש ישר זווית',
        subject: 'מתמטיקה',
        teacher: 'מירי אברהם',
        class: 'י"ב 2',
        students: 20,
        completedStudents: 0,
        averageScore: 0,
        status: 'scheduled',
        startTime: '2024-01-16 11:00',
        endTime: null,
        duration: 45,
        lessonType: 'live'
      }
    ];
    setLessons(mockLessons);
  };

  const loadActiveLessons = () => {
    // Mock active lessons - real-time lessons currently happening
    const mockActiveLessons = [
      {
        id: 2,
        title: 'גיאומטריה - שטח ונפח',
        teacher: 'רחל כהן',
        class: 'י"א 2',
        startTime: '09:00',
        connectedStudents: 24,
        totalStudents: 28,
        status: 'live'
      }
    ];
    setActiveLessons(mockActiveLessons);
  };

  const handleViewDetails = (lesson) => {
    setSelectedLesson(lesson);
    setShowDetailsModal(true);
  };

  const handleEndLesson = (lessonId) => {
    if (window.confirm('האם אתה בטוח שברצונך לסיים את השיעור?')) {
      const updatedLessons = lessons.map(lesson =>
        lesson.id === lessonId
          ? { ...lesson, status: 'completed', endTime: new Date().toISOString() }
          : lesson
      );
      setLessons(updatedLessons);
      setActiveLessons(activeLessons.filter(lesson => lesson.id !== lessonId));
    }
  };

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.class.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || lesson.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'פעיל כעת';
      case 'completed': return 'הושלם';
      case 'scheduled': return 'מתוכנן';
      case 'cancelled': return 'בוטל';
      default: return 'לא ידוע';
    }
  };

  const formatDateTime = (dateTime) => {
    if (!dateTime) return 'לא זמין';
    const date = new Date(dateTime);
    return date.toLocaleString('he-IL');
  };

  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-screen overflow-y-auto">
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
        <h2 className="text-2xl font-bold text-gray-900">ניהול שיעורים</h2>
        <div className="flex space-x-2">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            📊 דוח שיעורים
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            ➕ שיעור חדש
          </button>
        </div>
      </div>

      {/* Active Lessons Alert */}
      {activeLessons.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-800 mb-3">🔴 שיעורים פעילים כעת</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeLessons.map((lesson) => (
              <div key={lesson.id} className="bg-white p-4 rounded-lg border border-green-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                    🔴 LIVE
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {lesson.teacher} • {lesson.class}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {lesson.connectedStudents}/{lesson.totalStudents} תלמידים מחוברים
                  </span>
                  <button
                    onClick={() => handleEndLesson(lesson.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    סיים שיעור
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="חפש שיעור (כותרת, מורה, כיתה)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">כל הסטטוסים</option>
              <option value="active">פעיל כעת</option>
              <option value="completed">הושלם</option>
              <option value="scheduled">מתוכנן</option>
              <option value="cancelled">בוטל</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lessons Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  שיעור
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  מורה וכיתה
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  זמן
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  תלמידים
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
              {filteredLessons.map((lesson) => (
                <tr key={lesson.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {lesson.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {lesson.subject} • {lesson.lessonType === 'live' ? 'שיעור חי' : 'למידה עצמית'}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {lesson.teacher}
                      </div>
                      <div className="text-sm text-gray-500">
                        {lesson.class}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div>
                      <div>{formatDateTime(lesson.startTime)}</div>
                      {lesson.endTime && (
                        <div className="text-xs text-gray-500">
                          עד: {formatDateTime(lesson.endTime)}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div>
                      <div>סה"כ: {lesson.students}</div>
                      <div className="text-xs text-gray-500">
                        השלימו: {lesson.completedStudents}
                      </div>
                      {lesson.averageScore > 0 && (
                        <div className="text-xs text-blue-600">
                          ציון ממוצע: {lesson.averageScore}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lesson.status)}`}>
                      {getStatusText(lesson.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetails(lesson)}
                        className="text-blue-600 hover:text-blue-900"
                        title="הצג פרטים"
                      >
                        👁️
                      </button>
                      {lesson.status === 'active' && (
                        <button
                          onClick={() => handleEndLesson(lesson.id)}
                          className="text-red-600 hover:text-red-900"
                          title="סיים שיעור"
                        >
                          ⏹️
                        </button>
                      )}
                      <button
                        className="text-green-600 hover:text-green-900"
                        title="דוח השיעור"
                      >
                        📊
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lesson Details Modal */}
      <Modal
        show={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        title="פרטי השיעור"
      >
        {selectedLesson && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">שם השיעור</label>
                <p className="text-sm text-gray-900">{selectedLesson.title}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">מקצוע</label>
                <p className="text-sm text-gray-900">{selectedLesson.subject}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">מורה</label>
                <p className="text-sm text-gray-900">{selectedLesson.teacher}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">כיתה</label>
                <p className="text-sm text-gray-900">{selectedLesson.class}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">זמן התחלה</label>
                <p className="text-sm text-gray-900">{formatDateTime(selectedLesson.startTime)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">זמן סיום</label>
                <p className="text-sm text-gray-900">{formatDateTime(selectedLesson.endTime)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">סה"כ תלמידים</label>
                <p className="text-sm text-gray-900">{selectedLesson.students}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">השלימו שיעור</label>
                <p className="text-sm text-gray-900">{selectedLesson.completedStudents}</p>
              </div>
            </div>
            
            {selectedLesson.averageScore > 0 && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">סטטיסטיקות</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-blue-600">ציון ממוצע:</span>
                    <span className="text-sm font-bold text-blue-800 mr-2">{selectedLesson.averageScore}</span>
                  </div>
                  <div>
                    <span className="text-sm text-blue-600">אחוז השלמה:</span>
                    <span className="text-sm font-bold text-blue-800 mr-2">
                      {Math.round((selectedLesson.completedStudents / selectedLesson.students) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
                📊 דוח מפصל
              </button>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium"
              >
                סגור
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LessonsManagement;
