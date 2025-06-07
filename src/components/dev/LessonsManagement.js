import React, { useState, useEffect } from 'react';

const LessonsManagement = ({ devData }) => {
  const [lessons, setLessons] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  // Mock data
  useEffect(() => {
    const mockLessons = [
      {
        id: 1,
        title: 'אלגברה בסיסית - משוואות ליניאריות',
        description: 'למידת פתרון משוואות ליניאריות בשלב אחד ושני שלבים',
        category: 'אלגברה',
        grade: 'ט',
        difficulty: 'קל',
        status: 'published',
        exercises: 45,
        averageScore: 82,
        completionRate: 67,
        createdBy: 'מערכת',
        lastModified: '2024-01-15',
        schools: ['תיכון הרצל תל אביב', 'אורט ירושלים'],
        tags: ['משוואות', 'אלגברה', 'בסיסי']
      },
      {
        id: 2,
        title: 'גיאומטריה - שטחים ונפחים',
        description: 'חישוב שטחים ונפחים של צורות גיאומטריות שונות',
        category: 'גיאומטריה',
        grade: 'י',
        difficulty: 'בינוני',
        status: 'published',
        exercises: 32,
        averageScore: 75,
        completionRate: 54,
        createdBy: 'דר\' שרה כהן',
        lastModified: '2024-01-14',
        schools: ['תיכון הרצל תל אביב', 'תיכון מקיף חיפה'],
        tags: ['גיאומטריה', 'שטח', 'נפח']
      },
      {
        id: 3,
        title: 'חשבון דיפרנציאלי - נגזרות',
        description: 'הבנת מושג הנגזרת וחישובים בסיסיים',
        category: 'חשבון דיפרנציאלי',
        grade: 'יב',
        difficulty: 'קשה',
        status: 'draft',
        exercises: 28,
        averageScore: 0,
        completionRate: 0,
        createdBy: 'מר יוסי לוי',
        lastModified: '2024-01-13',
        schools: [],
        tags: ['נגזרות', 'חשבון דיפרנציאלי', 'מתקדם']
      },
      {
        id: 4,
        title: 'סטטיסטיקה - הסתברות בסיסית',
        description: 'מבוא להסתברות ומושגים בסיסיים בסטטיסטיקה',
        category: 'סטטיסטיקה',
        grade: 'יא',
        difficulty: 'בינוני',
        status: 'review',
        exercises: 38,
        averageScore: 0,
        completionRate: 0,
        createdBy: 'גב\' רחל דוד',
        lastModified: '2024-01-12',
        schools: ['אורט ירושלים'],
        tags: ['הסתברות', 'סטטיסטיקה', 'נתונים']
      },
      {
        id: 5,
        title: 'טריגונומטריה - פונקציות טריגונומטריות',
        description: 'לימוד פונקציות הסינוס, קוסינוס וטנגנס',
        category: 'טריגונומטריה',
        grade: 'יא',
        difficulty: 'בינוני',
        status: 'published',
        exercises: 41,
        averageScore: 78,
        completionRate: 61,
        createdBy: 'מערכת',
        lastModified: '2024-01-11',
        schools: ['תיכון הרצל תל אביב', 'תיכון טכנולוגי באר שבע'],
        tags: ['טריגונומטריה', 'פונקציות', 'זוויות']
      }
    ];

    const mockCategories = [
      { name: 'אלגברה', count: 12, color: 'blue' },
      { name: 'גיאומטריה', count: 8, color: 'green' },
      { name: 'חשבון דיפרנציאלי', count: 6, color: 'purple' },
      { name: 'סטטיסטיקה', count: 5, color: 'yellow' },
      { name: 'טריגונומטריה', count: 7, color: 'red' }
    ];

    setLessons(mockLessons);
    setCategories(mockCategories);
  }, []);

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || lesson.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'review':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'קל':
        return 'bg-green-100 text-green-800';
      case 'בינוני':
        return 'bg-yellow-100 text-yellow-800';
      case 'קשה':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const updateLessonStatus = (lessonId, newStatus) => {
    setLessons(prevLessons =>
      prevLessons.map(lesson =>
        lesson.id === lessonId ? { ...lesson, status: newStatus } : lesson
      )
    );
  };

  const LessonCard = ({ lesson }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-2">{lesson.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {lesson.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lesson.status)}`}>
            {lesson.status === 'published' ? 'פורסם' :
             lesson.status === 'draft' ? 'טיוטה' :
             lesson.status === 'review' ? 'בבדיקה' :
             lesson.status === 'archived' ? 'בארכיון' : lesson.status}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}>
            {lesson.difficulty}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <p className="text-lg font-bold text-blue-600">{lesson.exercises}</p>
          <p className="text-xs text-blue-600">תרגילים</p>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <p className="text-lg font-bold text-green-600">{lesson.averageScore}%</p>
          <p className="text-xs text-green-600">ממוצע</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">שיעור השלמה:</span>
          <span className="font-medium text-gray-900">{lesson.completionRate}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full" 
            style={{ width: `${lesson.completionRate}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-2 mb-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">קטגוריה:</span>
          <span className="font-medium text-gray-900">{lesson.category}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">כיתה:</span>
          <span className="font-medium text-gray-900">{lesson.grade}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">נוצר על ידי:</span>
          <span className="font-medium text-gray-900">{lesson.createdBy}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">עודכן:</span>
          <span className="font-medium text-gray-900">
            {new Date(lesson.lastModified).toLocaleDateString('he-IL')}
          </span>
        </div>
      </div>

      {lesson.schools.length > 0 && (
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">בתי ספר פעילים:</p>
          <div className="flex flex-wrap gap-1">
            {lesson.schools.map((school, index) => (
              <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                {school}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex space-x-2">
        <button
          onClick={() => {
            setSelectedLesson(lesson);
            setShowLessonModal(true);
          }}
          className="flex-1 px-3 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
        >
          ✏️ עריכה
        </button>
        {lesson.status === 'draft' && (
          <button
            onClick={() => updateLessonStatus(lesson.id, 'review')}
            className="px-3 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 transition-colors"
            disabled={devData.accessLevel === 'content-manager'}
          >
            📋 לבדיקה
          </button>
        )}
        {lesson.status === 'review' && (
          <button
            onClick={() => updateLessonStatus(lesson.id, 'published')}
            className="px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
            disabled={devData.accessLevel === 'content-manager'}
          >
            ✅ פרסם
          </button>
        )}
      </div>
    </div>
  );

  const LessonRow = ({ lesson }) => (
    <div className="bg-white p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{lesson.title}</h3>
            <p className="text-sm text-gray-600">{lesson.category} - כיתה {lesson.grade}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-900">{lesson.exercises}</p>
            <p className="text-xs text-gray-500">תרגילים</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-900">{lesson.averageScore}%</p>
            <p className="text-xs text-gray-500">ממוצע</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-900">{lesson.completionRate}%</p>
            <p className="text-xs text-gray-500">השלמה</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lesson.status)}`}>
            {lesson.status === 'published' ? 'פורסם' :
             lesson.status === 'draft' ? 'טיוטה' :
             lesson.status === 'review' ? 'בבדיקה' :
             lesson.status === 'archived' ? 'בארכיון' : lesson.status}
          </span>
          <button
            onClick={() => {
              setSelectedLesson(lesson);
              setShowLessonModal(true);
            }}
            className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors"
          >
            עריכה
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">ניהול שיעורים</h2>
          <p className="mt-1 text-sm text-gray-600">
            ניהול תוכן השיעורים והתרגילים במערכת
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowLessonModal(true)}
            className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors flex items-center space-x-2"
            disabled={devData.accessLevel === 'content-manager'}
          >
            <span>➕</span>
            <span>שיעור חדש</span>
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">{lessons.length}</p>
            <p className="text-sm text-gray-600">סה"כ שיעורים</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {lessons.filter(l => l.status === 'published').length}
            </p>
            <p className="text-sm text-gray-600">פורסמו</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {lessons.filter(l => l.status === 'review').length}
            </p>
            <p className="text-sm text-gray-600">בבדיקה</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-600">
              {lessons.filter(l => l.status === 'draft').length}
            </p>
            <p className="text-sm text-gray-600">טיוטות</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">
              {lessons.reduce((sum, lesson) => sum + lesson.exercises, 0)}
            </p>
            <p className="text-sm text-gray-600">תרגילים</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex-1 md:w-64">
              <input
                type="text"
                placeholder="חפש שיעורים..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">כל הקטגוריות</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">
              מציג {filteredLessons.length} מתוך {lessons.length} שיעורים
            </span>
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 text-sm font-medium ${
                  viewMode === 'grid'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                🔲
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-sm font-medium ${
                  viewMode === 'list'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                📋
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredLessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredLessons.map(lesson => (
            <LessonRow key={lesson.id} lesson={lesson} />
          ))}
        </div>
      )}

      {filteredLessons.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📚</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">לא נמצאו שיעורים</h3>
          <p className="text-gray-600">נסה לשנות את קריטריוני החיפוש</p>
        </div>
      )}

      {/* Lesson Modal */}
      {showLessonModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {selectedLesson ? `עריכת שיעור - ${selectedLesson.title}` : 'שיעור חדש'}
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">כותרת השיעור</label>
                  <input
                    type="text"
                    defaultValue={selectedLesson?.title || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="הכנס כותרת השיעור"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">קטגוריה</label>
                  <select
                    defaultValue={selectedLesson?.category || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">בחר קטגוריה</option>
                    {categories.map((category) => (
                      <option key={category.name} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">תיאור השיעור</label>
                <textarea
                  defaultValue={selectedLesson?.description || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="הכנס תיאור השיעור"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">כיתה</label>
                  <select
                    defaultValue={selectedLesson?.grade || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">בחר כיתה</option>
                    <option value="ט">ט</option>
                    <option value="י">י</option>
                    <option value="יא">יא</option>
                    <option value="יב">יב</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">רמת קושי</label>
                  <select
                    defaultValue={selectedLesson?.difficulty || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">בחר רמת קושי</option>
                    <option value="קל">קל</option>
                    <option value="בינוני">בינוני</option>
                    <option value="קשה">קשה</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">סטטוס</label>
                  <select
                    defaultValue={selectedLesson?.status || 'draft'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="draft">טיוטה</option>
                    <option value="review">בבדיקה</option>
                    <option value="published">פורסם</option>
                    <option value="archived">בארכיון</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">תגיות (מופרדות בפסיקים)</label>
                <input
                  type="text"
                  defaultValue={selectedLesson?.tags.join(', ') || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="הכנס תגיות מופרדות בפסיקים"
                />
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => {
                  setShowLessonModal(false);
                  setSelectedLesson(null);
                }}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 transition-colors"
              >
                ביטול
              </button>
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
                {selectedLesson ? 'שמור שינויים' : 'צור שיעור'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonsManagement;
