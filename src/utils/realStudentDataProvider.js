/**
 * Real Student Data Provider for Teachers Dashboard
 * This utility extracts and processes real student data from localStorage
 */

// Helper function to get storage key for a user
const getUserStorageKey = (email) => {
  return `userData_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
};

// Get all real student data from localStorage
export const getAllRealStudentData = () => {
  const allKeys = Object.keys(localStorage);
  const userDataKeys = allKeys.filter(key => key.startsWith('userData_'));
  
  console.log('Found user data keys:', userDataKeys);
  
  const students = [];
  let studentId = 1;
  
  userDataKeys.forEach(key => {
    try {
      const dataString = localStorage.getItem(key);
      const userData = JSON.parse(dataString);
      
      // Extract email from key or data
      const emailFromKey = key.replace('userData_', '').replace(/_/g, '.');
      const email = userData.email || emailFromKey;
      
      // Skip if no email or if it's not a valid student email
      if (!email || !email.includes('@')) {
        console.log('Skipping invalid user data:', key);
        return;
      }
      
      // Convert userData to student format for dashboard
      const student = {
        id: studentId++,
        name: userData.profile?.name || email.split('@')[0],
        email: email,
        class: extractClassFromEmail(email),
        completedLessons: userData.progress?.completedLessons?.length || 0,
        totalLessons: 50, // Total available lessons (can be dynamic)
        averageScore: calculateAverageScore(userData),
        lastActivity: userData.progress?.lastActivityDate || userData.profile?.lastLoginDate,
        currentLesson: userData.progress?.currentLesson || 'None',
        timeSpent: Math.round((userData.progress?.totalTimeSpent || 0) / 60), // Convert to minutes
        strengths: userData.statistics?.strongAreas || [],
        weaknesses: userData.statistics?.weakAreas || [],
        totalExercisesSolved: userData.statistics?.totalExercisesSolved || 0,
        bestScore: userData.statistics?.bestScore || 0,
        joinDate: userData.profile?.joinDate,
        loginCount: userData.profile?.loginCount || 0,
        achievements: userData.progress?.achievements || [],
        lessonsStarted: userData.progress?.lessonsStarted || []
      };
      
      students.push(student);
      console.log('Processed student:', student.name, student.email);
      
    } catch (error) {
      console.error('Error processing user data for key:', key, error);
    }
  });
  
  console.log('Total students processed:', students.length);
  return students;
};

// Helper function to extract class from email (basic implementation)
const extractClassFromEmail = (email) => {
  // Try to extract class info from email domain or username
  if (email.includes('grade11') || email.includes('11')) return 'י"א 1';
  if (email.includes('grade12') || email.includes('12')) return 'י"ב 1';
  if (email.includes('student')) return 'י"א 2';
  
  // Default class assignment
  return 'י"א 1';
};

// Calculate average score from completed lessons
const calculateAverageScore = (userData) => {
  const completedLessons = userData.progress?.completedLessons || [];
  
  if (completedLessons.length === 0) {
    return userData.statistics?.averageScore || 0;
  }
  
  const totalScore = completedLessons.reduce((sum, lesson) => {
    return sum + (lesson.score || 0);
  }, 0);
  
  return Math.round(totalScore / completedLessons.length);
};

// Generate class statistics from real student data
export const generateRealClassData = (students) => {
  const classGroups = students.reduce((acc, student) => {
    const className = student.class;
    if (!acc[className]) {
      acc[className] = [];
    }
    acc[className].push(student);
    return acc;
  }, {});
  
  const classData = Object.entries(classGroups).map(([className, classStudents], index) => {
    const totalStudents = classStudents.length;
    const averageProgress = Math.round(
      classStudents.reduce((sum, student) => {
        return sum + ((student.completedLessons / student.totalLessons) * 100);
      }, 0) / totalStudents
    );
    
    const averageScore = Math.round(
      classStudents.reduce((sum, student) => sum + student.averageScore, 0) / totalStudents
    );
    
    // Count active students (those who logged in recently)
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const activeStudents = classStudents.filter(student => {
      if (!student.lastActivity) return false;
      const lastActivity = new Date(student.lastActivity);
      return lastActivity >= oneWeekAgo;
    }).length;
    
    return {
      id: index + 1,
      name: className,
      students: totalStudents,
      averageProgress: averageProgress,
      averageScore: averageScore,
      activeStudents: activeStudents,
      subject: 'math'
    };
  });
  
  return classData;
};

// Get overall statistics from real data
export const generateOverallStatistics = (students) => {
  if (students.length === 0) {
    return {
      totalStudents: 0,
      activeStudents: 0,
      averageProgress: 0,
      averageScore: 0,
      totalLessonsCompleted: 0
    };
  }
  
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  const activeStudents = students.filter(student => {
    if (!student.lastActivity) return false;
    const lastActivity = new Date(student.lastActivity);
    return lastActivity >= oneWeekAgo;
  }).length;
  
  const totalProgress = students.reduce((sum, student) => {
    return sum + ((student.completedLessons / student.totalLessons) * 100);
  }, 0);
  
  const totalScore = students.reduce((sum, student) => sum + student.averageScore, 0);
  const totalLessonsCompleted = students.reduce((sum, student) => sum + student.completedLessons, 0);
  
  return {
    totalStudents: students.length,
    activeStudents: activeStudents,
    averageProgress: Math.round(totalProgress / students.length),
    averageScore: Math.round(totalScore / students.length),
    totalLessonsCompleted: totalLessonsCompleted
  };
};

// Debug function to log all student data
export const debugStudentData = () => {
  const students = getAllRealStudentData();
  console.log('=== REAL STUDENT DATA DEBUG ===');
  console.log('Total students found:', students.length);
  
  students.forEach(student => {
    console.log(`Student: ${student.name} (${student.email})`);
    console.log(`  - Class: ${student.class}`);
    console.log(`  - Completed Lessons: ${student.completedLessons}/${student.totalLessons}`);
    console.log(`  - Average Score: ${student.averageScore}%`);
    console.log(`  - Last Activity: ${student.lastActivity}`);
    console.log(`  - Time Spent: ${student.timeSpent} minutes`);
    console.log('---');
  });
  
  const classData = generateRealClassData(students);
  console.log('Class Statistics:', classData);
  
  const overallStats = generateOverallStatistics(students);
  console.log('Overall Statistics:', overallStats);
};

// Make debug function available globally
if (typeof window !== 'undefined') {
  window.debugStudentData = debugStudentData;
}
