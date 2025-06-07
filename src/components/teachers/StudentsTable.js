import React from 'react';

const StudentsTable = ({ 
  students, 
  lessonNames, 
  onAnalyzeStudent, 
  searchTerm, 
  setSearchTerm, 
  selectedClass, 
  setSelectedClass, 
  classesData 
}) => {
  // Filter students based on search term and selected class
  const filteredStudents = students ? students.filter(student => {
    const matchesSearch = searchTerm === '' || 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    
    return matchesSearch && matchesClass;
  }) : [];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">ניהול תלמידים</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          הוסף תלמיד חדש
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="חפש תלמיד..."
            value={searchTerm || ''}
            onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={selectedClass || 'all'}
          onChange={(e) => setSelectedClass && setSelectedClass(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">כל הכיתות</option>
          {classesData && classesData.map((classData) => (
            <option key={classData.id} value={classData.name}>
              {classData.name}
            </option>
          ))}
        </select>
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">תלמיד</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">כיתה</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">התקדמות</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">ממוצע</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">שיעור נוכחי</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">פעילות אחרונה</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">פעולות</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.class}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 ml-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(student.completedLessons / student.totalLessons) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {student.completedLessons}/{student.totalLessons}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      student.averageScore >= 85 ? 'bg-green-100 text-green-800' :
                      student.averageScore >= 70 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {student.averageScore}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {lessonNames && lessonNames[student.currentLesson] ? 
                      lessonNames[student.currentLesson] : 
                      student.currentLesson
                    }
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{student.lastActivity}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => onAnalyzeStudent && onAnalyzeStudent(student)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium px-2 py-1 rounded border border-blue-200 hover:bg-blue-50"
                      >
                        נתח
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm">ערוך</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                  {searchTerm || selectedClass !== 'all' ? 
                    'לא נמצאו תלמידים העונים על הקריטריונים' : 
                    'אין תלמידים רשומים במערכת'
                  }
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;
