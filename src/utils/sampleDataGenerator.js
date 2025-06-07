/**
 * Sample Data Generator for Testing Teacher Dashboard
 * This utility creates realistic sample student data for testing purposes
 */

// Helper function to get storage key for a user
const getUserStorageKey = (email) => {
  return `userData_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
};

// Generate sample student data
export const generateSampleStudentData = () => {
  const sampleStudents = [
    {
      email: 'sarah.cohen@student.school.il',
      name: 'שרה כהן',
      class: 'י"א 1',
      completedLessons: ['algebra-linear-equation-one-variable', 'geometry-shapes', 'algebra-percentages'],
      averageScore: 87,
      timeSpent: 145 * 60 * 1000, // in milliseconds
      strengths: ['גיאומטריה', 'אלגברה'],
      weaknesses: ['סטטיסטיקה']
    },
    {
      email: 'david.levy@student.school.il',
      name: 'דוד לוי',
      class: 'י"א 1',
      completedLessons: ['algebra-linear-equation-one-variable', 'algebra-quadratic-equations'],
      averageScore: 75,
      timeSpent: 98 * 60 * 1000,
      strengths: ['אלגברה'],
      weaknesses: ['גיאומטריה', 'הסתברות']
    },
    {
      email: 'rotem.avni@student.school.il',
      name: 'רותם אבני',
      class: 'י"א 2',
      completedLessons: [
        'algebra-linear-equation-one-variable',
        'algebra-quadratic-equations',
        'geometry-shapes',
        'calculus-optimization',
        'trigonometry-right-triangle'
      ],
      averageScore: 92,
      timeSpent: 187 * 60 * 1000,
      strengths: ['חשבון דיפרנציאלי', 'גיאומטריה', 'אלגברה'],
      weaknesses: []
    },
    {
      email: 'yosef.mizrahi@student.school.il',
      name: 'יוסף מזרחי',
      class: 'י"א 2',
      completedLessons: ['algebra-linear-equation-one-variable'],
      averageScore: 68,
      timeSpent: 76 * 60 * 1000,
      strengths: ['חשבון בסיסי'],
      weaknesses: ['משוואות מורכבות', 'בעיות מילוליות']
    },
    {
      email: 'maya.israeli@student.school.il',
      name: 'מיה ישראלי',
      class: 'י"ב 1',
      completedLessons: [
        'algebra-linear-equation-one-variable',
        'algebra-quadratic-equations',
        'geometry-shapes',
        'statistics-intro',
        'probability-intro',
        'calculus-polynomial'
      ],
      averageScore: 94,
      timeSpent: 220 * 60 * 1000,
      strengths: ['סטטיסטיקה', 'הסתברות', 'חשבון דיפרנציאלי'],
      weaknesses: ['גיאומטריה אנליטית']
    }
  ];

  sampleStudents.forEach(student => {
    const userData = {
      email: student.email,
      profile: {
        name: student.name,
        joinDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(), // Random date in last 30 days
        lastLoginDate: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(), // Random date in last week
        loginCount: Math.floor(Math.random() * 50) + 5 // 5-55 logins
      },
      progress: {
        completedLessons: student.completedLessons.map(lessonId => ({
          id: lessonId,
          completedDate: new Date(Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000).toISOString(),
          score: Math.floor(Math.random() * 30) + 70, // 70-100 score
          timeSpent: Math.floor(Math.random() * 3600000) + 1800000 // 30-90 minutes
        })),
        currentLesson: student.completedLessons[student.completedLessons.length - 1] || null,
        totalTimeSpent: student.timeSpent,
        lessonsStarted: [...student.completedLessons, 'next-lesson-' + Math.random()],
        achievements: [
          'first_lesson_completed',
          'week_streak',
          ...(student.averageScore > 85 ? ['high_achiever'] : []),
          ...(student.completedLessons.length > 3 ? ['dedicated_learner'] : [])
        ],
        streakDays: Math.floor(Math.random() * 10) + 1,
        lastActivityDate: new Date(Date.now() - Math.random() * 3 * 24 * 60 * 60 * 1000).toISOString()
      },
      settings: {
        theme: 'light',
        language: 'he',
        notifications: true,
        soundEnabled: true,
        autoSave: true
      },
      statistics: {
        totalExercisesSolved: Math.floor(Math.random() * 100) + 20,
        averageScore: student.averageScore,
        bestScore: Math.min(100, student.averageScore + Math.floor(Math.random() * 10)),
        totalSessionTime: student.timeSpent,
        favoriteTopics: student.strengths,
        weakAreas: student.weaknesses,
        strongAreas: student.strengths
      },
      customData: {},
      lastUpdated: new Date().toISOString()
    };

    // Save to localStorage
    const storageKey = getUserStorageKey(student.email);
    localStorage.setItem(storageKey, JSON.stringify(userData));
    console.log(`Generated sample data for: ${student.name} (${student.email})`);
  });

  console.log(`✅ Generated sample data for ${sampleStudents.length} students`);
  return sampleStudents.length;
};

// Clear all sample data
export const clearSampleData = () => {
  const keys = Object.keys(localStorage);
  const userDataKeys = keys.filter(key => key.startsWith('userData_'));
  
  userDataKeys.forEach(key => {
    localStorage.removeItem(key);
  });
  
  console.log(`🗑️ Cleared ${userDataKeys.length} student data entries`);
  return userDataKeys.length;
};

// Make functions available globally for browser console
if (typeof window !== 'undefined') {
  window.generateSampleStudentData = generateSampleStudentData;
  window.clearSampleData = clearSampleData;
  
  // Convenient function to reset and populate with fresh data
  window.resetWithSampleData = () => {
    clearSampleData();
    generateSampleStudentData();
    console.log('🔄 Reset complete! Refresh the teachers dashboard to see new data.');
  };
}
