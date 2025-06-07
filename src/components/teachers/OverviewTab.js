import React from 'react';
import StatisticsCard from './StatisticsCard';
import ClassCard from './ClassCard';

const OverviewTab = ({ 
  overallStats, 
  classesData, 
  studentsData,
  aiAnalysisLoading,
  onGenerateReport,
  onAnalyzeClass
}) => {
  return (
    <div>
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <StatisticsCard 
          title="סה״כ תלמידים"
          value={overallStats.totalStudents}
          icon="👥"
          color="blue"
        />
        <StatisticsCard 
          title="כיתות פעילות"
          value={overallStats.totalClasses}
          icon="🏫"
          color="green"
        />
        <StatisticsCard 
          title="השלמת שיעורים"
          value={`${overallStats.averageCompletion}%`}
          icon="📚"
          color="purple"
        />
        <StatisticsCard 
          title="ציון ממוצע"
          value={`${overallStats.averageScore}%`}
          icon="📊"
          color="orange"
        />
        <StatisticsCard 
          title="פעילים היום"
          value={overallStats.activeToday}
          icon="⚡"
          color="red"
        />
      </div>

      {/* Classes Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">סקירת כיתות</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">          {classesData.map((classData) => (
            <ClassCard 
              key={classData.id}
              classData={classData}
              studentsData={studentsData}
              aiAnalysisLoading={aiAnalysisLoading}
              onGenerateReport={onGenerateReport}
              onAnalyzeClass={onAnalyzeClass}
            />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">פעילות אחרונה</h2>
        <div className="space-y-3">
          {studentsData
            .filter(student => student.lastActivity === '2024-01-15')
            .slice(0, 5)
            .map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold ml-3">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-600">{student.class}</p>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">{student.lastActivity}</p>
                  <p className="text-sm font-medium text-green-600">{student.timeSpent} דקות</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
