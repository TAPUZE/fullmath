import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavigationHeader from './NavigationHeader';

const ProgressDashboard = () => {
  const [progressData, setProgressData] = useState({
    completedLessons: [],
    quizScores: [],
    totalCompleted: 0,
    averageScore: 'לא זמין'
  });
  const [notification, setNotification] = useState({ show: false, message: '', type: 'info' });

  // Lesson ID to Display Name Mapping
  const lessonDisplayNames = useMemo(() => {
    return {
      // Shalon 35182
      '35182-algebra-linear-equation-one-variable': 'אלגברה (35182): משוואה ממעלה ראשונה עם נעלם אחד',
      '35182-algebra-linear-equations-two-variables': 'אלגברה (35182): מערכת משוואות בשני נעלמים',
      '35182-algebra-quadratic-equations': 'אלגברה (35182): משוואות ריבועיות',
      '35182-algebra-inequalities': 'אלגברה (35182): אי-שוויונות',
      '35182-algebra-percentages': 'אלגברה (35182): אחוזים',
      '35182-algebra-word-problems': 'אלגברה (35182): בעיות מילוליות',
      '35182-geometry-shapes-properties': 'גיאומטריה (35182): תכונות צורות',
      '35182-geometry-area-perimeter': 'גיאומטריה (35182): שטח והיקף',
      '35182-analytic-geometry-points': 'גיאומטריה אנליטית (35182): נקודות',
      '35182-analytic-geometry-distance': 'גיאומטריה אנליטית (35182): מרחק',
      '35182-analytic-geometry-midpoint': 'גיאומטריה אנליטית (35182): אמצע קטע',
      '35182-analytic-geometry-slope': 'גיאומטריה אנליטית (35182): שיפוע ומשוואת הישר',
      '35182-sequences-arithmetic-intro': 'סדרות (35182): סדרה חשבונית - מבוא',
      '35182-trigonometry-right-triangle': 'טריגונומטריה (35182): משולש ישר זווית',
      '35182-statistics-intro': 'סטטיסטיקה (35182): מבוא',
      '35182-probability-intro': 'הסתברות (35182): מבוא',
      
      // Shalon 35381
      '35381-functions-parabola-investigation': 'פונקציות (35381): חקירת פונקציה ריבועית (פרבולה)',
      '35381-sequences-arithmetic-sum': 'סדרות (35381): סכום סדרה חשבונית',
      '35381-growth-decay': 'פונקציות (35381): גדילה ודעיכה',
      '35381-statistics-dispersion': 'סטטיסטיקה (35381): מדדי פיזור',      '35381-probability-tree-conditional': 'הסתברות (35381): דיאגרמת עץ והסתברות מותנית',
      '35381-normal-distribution': 'סטטיסטיקה (35381): התפלגות נורמלית',
      '35381-geometry-shapes': 'צורות גיאומטריות (35381): לימוד תכונות צורות גיאומטריות בסיסיות',
      
      // Shalon 35382
      '35382-problems-buy-sell': 'בעיות מילוליות (35382): בעיות קנייה ומכירה',
      '35382-problems-motion': 'בעיות מילוליות (35382): בעיות תנועה',
      '35382-problems-work-rate': 'בעיות מילוליות (35382): בעיות הספק',
      '35382-problems-geometric-algebraic': 'בעיות מילוליות (35382): בעיות גיאומטריות-אלגבריות',
      '35382-analytic-geometry-line-continued': 'גיאומטריה אנליטית (35382): הישר (המשך)',
      '35382-analytic-geometry-circle': 'גיאומטריה אנליטית (35382): המעגל',
      '35382-analytic-geometry-circle-tangent': 'גיאומטריה אנליטית (35382): משיק למעגל',
      '35382-analytic-geometry-circle-line-intersection': 'גיאומטריה אנליטית (35382): חיתוך של מעגל וישר',
      '35382-calculus-polynomial': 'חדו"א (35382): פונקציית פולינום',
      '35382-calculus-rational': 'חדו"א (35382): פונקציה רציונלית',
      '35382-calculus-square-root': 'חדו"א (35382): פונקציית שורש',
      '35382-calculus-optimization': 'חדו"א (35382): בעיות קיצון',
      '35382-calculus-integral-polynomial': 'חדו"א (35382): חשבון אינטגרלי (פולינומים)',
      
      // Legacy lesson IDs (for backwards compatibility)
      'lesson_35382_problems_buy_sell': 'בעיות מילוליות (35382): בעיות קנייה ומכירה',
      'lesson_35382_problems_motion': 'בעיות מילוליות (35382): בעיות תנועה',
      'lesson_35382_problems_work_rate': 'בעיות מילוליות (35382): בעיות הספק',
      'lesson_35382_problems_geometric_algebraic': 'בעיות מילוליות (35382): בעיות גיאומטריות-אלגבריות',
      'lesson_35382_analytic_geometry_line_continued': 'גיאומטריה אנליטית (35382): הישר (המשך)',
      'lesson_35382_analytic_geometry_circle': 'גיאומטריה אנליטית (35382): המעגל',
      'lesson_35382_analytic_geometry_circle_tangent': 'גיאומטריה אנליטית (35382): משיק למעגל',
      'lesson_35382_analytic_geometry_circle_line_intersection': 'גיאומטריה אנליטית (35382): חיתוך של מעגל וישר',
      'lesson_35382_calculus_polynomial': 'חדו"א (35382): פונקציית פולינום',
      'lesson_35382_calculus_rational': 'חדו"א (35382): פונקציה רציונלית',
      'lesson_35382_calculus_square_root': 'חדו"א (35382): פונקציית שורש',
      'lesson_35382_calculus_optimization': 'חדו"א (35382): בעיות קיצון',
      'lesson_35382_calculus_integral_polynomial': 'חדו"א (35382): חשבון אינטגרלי (פולינומים)'
    };
  }, []);

  const formatLessonIdForDisplay = useCallback((lessonIdKey) => {
    // Remove prefixes like 'lesson_completed_' or 'lesson_quiz_score_'
    const idPart = lessonIdKey.replace(/^lesson_completed_|^lesson_quiz_score_/, '');
    return lessonDisplayNames[idPart] || idPart.replace(/_/g, ' ').replace(/^lesson /, ''); // Fallback
  }, [lessonDisplayNames]);

  const showNotification = (message, type = 'info', duration = 3000) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'info' });
    }, duration);
  };
  // Wrap loadProgressData in useCallback
  const loadProgressData = useCallback(() => {
    let completedLessons = [];
    let quizScores = [];
    let exerciseData = [];
    let completionData = [];

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('lesson_completed_')) {
          const lessonName = formatLessonIdForDisplay(key);
          completedLessons.push(lessonName);
        } else if (key.startsWith('lesson_quiz_score_')) {
          const lessonName = formatLessonIdForDisplay(key);
          const scoreDataString = localStorage.getItem(key);
          if (scoreDataString) {
            try {
              const scoreData = JSON.parse(scoreDataString);
              quizScores.push({
                name: lessonName,
                score: scoreData.score,
                total: scoreData.total,
                timeSpent: scoreData.timeSpent || 0,
                date: new Date(scoreData.date).toLocaleDateString('he-IL'),
                detailedResults: scoreData.detailedResults || []
              });
            } catch (parseError) {
              console.error(`Error parsing quiz score for ${key}:`, parseError);
            }
          }
        } else if (key.startsWith('exercise_')) {
          const exerciseDataString = localStorage.getItem(key);
          if (exerciseDataString) {
            try {
              const data = JSON.parse(exerciseDataString);
              exerciseData.push({
                key: key,
                lessonId: data.lessonId,
                exerciseId: data.exerciseId,
                attempts: data.attempts || 0,
                wrongAnswers: data.wrongAnswers || [],
                timeSpent: data.timeSpent || 0,
                lastAttempt: data.lastAttempt
              });
            } catch (parseError) {
              console.error(`Error parsing exercise data for ${key}:`, parseError);
            }
          }
        } else if (key.startsWith('lesson_completion_data_')) {
          const completionDataString = localStorage.getItem(key);
          if (completionDataString) {
            try {
              const data = JSON.parse(completionDataString);
              const lessonId = key.replace('lesson_completion_data_', '');
              completionData.push({
                lessonId: lessonId,
                lessonName: formatLessonIdForDisplay(`lesson_completed_${lessonId}`),
                ...data
              });
            } catch (parseError) {              console.error(`Error parsing completion data for ${key}:`, parseError);
            }
          }
        }
      }    } catch (error) {
      console.error("Error reading from localStorage:", error);
      showNotification("שגיאה בקריאת נתוני התקדמות.", "error");
      return;
    }

    // Sort data with proper null/undefined checks
    completedLessons.sort((a, b) => {
      if (!a || !b) return 0;
      return a.localeCompare(b, 'he');
    });
    
    quizScores.sort((a, b) => {
      if (!a?.name || !b?.name) return 0;
      return a.name.localeCompare(b.name, 'he');
    });
    
    exerciseData.sort((a, b) => {
      if (!a?.lessonId || !b?.lessonId) return 0;
      return a.lessonId.localeCompare(b.lessonId, 'he');
    });
    
    completionData.sort((a, b) => {
      if (!a?.completionTime || !b?.completionTime) return 0;
      return new Date(b.completionTime) - new Date(a.completionTime);
    });

    // Calculate average score
    let averageScore = 'לא זמין';
    if (quizScores.length > 0) {
      let totalScoreSum = 0;
      let totalPossibleSum = 0;
      
      quizScores.forEach(quiz => {
        if (typeof quiz.score === 'number' && typeof quiz.total === 'number' && quiz.total > 0) {
          totalScoreSum += quiz.score;
          totalPossibleSum += quiz.total;
        }
      });

      if (totalPossibleSum > 0) {
        const average = (totalScoreSum / totalPossibleSum) * 100;
        averageScore = `${average.toFixed(1)}%`;
      }
    }

    // Calculate total study time
    let totalStudyTime = 0;
    quizScores.forEach(quiz => totalStudyTime += quiz.timeSpent || 0);
    exerciseData.forEach(exercise => totalStudyTime += exercise.timeSpent || 0);

    setProgressData({
      completedLessons,
      quizScores,
      exerciseData,
      completionData,
      totalCompleted: completedLessons.length,
      averageScore,
      totalStudyTime
    });
  }, [formatLessonIdForDisplay]);

  const getProgressDataForExport = () => {
    let completedLessons = [];
    let quizScoresData = [];
    
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('lesson_completed_')) {
          completedLessons.push(formatLessonIdForDisplay(key));
        } else if (key.startsWith('lesson_quiz_score_')) {
          const scoreDataString = localStorage.getItem(key);
          if (scoreDataString) {
            try {
              const scoreData = JSON.parse(scoreDataString);
              quizScoresData.push({
                name: formatLessonIdForDisplay(key),
                score: scoreData.score,
                total: scoreData.total,
                date: new Date(scoreData.date).toLocaleDateString('he-IL')
              });
            } catch (parseError) {
              console.error(`Error parsing quiz score for export ${key}:`, parseError);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error reading from localStorage for export:", error);
      showNotification("שגיאה באיסוף נתונים לייצוא.", "error");
      return null;
    }
    
    completedLessons.sort((a, b) => a.localeCompare(b, 'he'));
    quizScoresData.sort((a, b) => a.name.localeCompare(b.name, 'he'));
    return { completedLessons, quizScoresData };
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
  };

  const exportToPdf = () => {
    showNotification('מכין PDF להדפסה...', 'info', 2000);
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const exportToCsv = () => {
    const data = getProgressDataForExport();
    if (!data) return;

    const { completedLessons, quizScoresData } = data;
    
    if (completedLessons.length === 0 && quizScoresData.length === 0) {
      showNotification('אין נתונים לייצוא.', 'info');
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "\uFEFF"; // BOM for UTF-8 Excel compatibility

    csvContent += "סוג,פרט,ציון,סך הכל שאלות,תאריך\r\n";

    completedLessons.forEach(lessonName => {
      csvContent += `שיעור הושלם,"${lessonName.replace(/"/g, '""')}",,, \r\n`;
    });

    quizScoresData.forEach(quiz => {
      csvContent += `ציון בוחן,"${quiz.name.replace(/"/g, '""')}",${quiz.score},${quiz.total},${quiz.date}\r\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "math_progress_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('דוח CSV ירד בהצלחה!', 'success');
  };

  useEffect(() => {
    loadProgressData();
  }, [loadProgressData]);
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen" dir="rtl">
      {/* Navigation Header */}
      <NavigationHeader />
      
      {/* Notification */}
      {notification.show && (
        <div 
          className={`fixed top-5 right-5 text-white p-4 rounded-lg shadow-xl z-50 max-w-sm text-right transition-opacity duration-500 ${
            notification.type === 'success' ? 'bg-green-500' : 
            notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="container mx-auto p-4 md:p-8">
        {/* Header */}
        <header className="mb-8 no-print">
          <nav aria-label="breadcrumb" className="text-sm text-gray-600 mb-2">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="hover:underline">דף ראשי</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
                </svg>
              </li>
              <li className="flex items-center">
                <span className="text-gray-500">ההתקדמות שלי</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">לוח התקדמות אישי</h1>
        </header>

        {/* Print Area */}
        <div id="print-area">
          <main className="bg-white p-6 md:p-8 rounded-lg shadow-lg">            {/* Summary Section */}
            <section aria-labelledby="summary-heading" className="mb-10">
              <h2 id="summary-heading" className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
                סיכום התקדמות
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-blue-800">שיעורים שהושלמו</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">{progressData.totalCompleted}</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-green-800">ממוצע ציוני בחנים</h3>
                  <p className="text-3xl font-bold text-green-600 mt-2">{progressData.averageScore}</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-purple-800">זמן לימוד כולל</h3>
                  <p className="text-3xl font-bold text-purple-600 mt-2">{formatTime(progressData.totalStudyTime || 0)}</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-yellow-800">כמות תרגילים</h3>
                  <p className="text-3xl font-bold text-yellow-600 mt-2">{progressData.exerciseData?.length || 0}</p>
                </div>
              </div>
            </section>

            {/* Completed Lessons Section */}
            <section aria-labelledby="completed-lessons-heading" className="mb-10">
              <h2 id="completed-lessons-heading" className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
                שיעורים שהושלמו ✅
              </h2>
              <div className="space-y-3">
                {progressData.completedLessons.length > 0 ? (
                  progressData.completedLessons.map((lessonName, index) => (
                    <div key={index} className="bg-gray-100 p-3 rounded-md shadow-sm flex items-center">
                      <span className="text-green-500 mr-2 ml-2">✔</span>
                      {lessonName}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">עדיין לא השלמת שיעורים.</p>
                )}
              </div>
            </section>            {/* Quiz Scores Section */}
            <section aria-labelledby="quiz-scores-heading" className="mb-10">
              <h2 id="quiz-scores-heading" className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
                ציוני בחנים 🎯
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 border-b text-right font-semibold text-gray-600">שם שיעור</th>
                      <th className="py-3 px-4 border-b text-right font-semibold text-gray-600">ציון</th>
                      <th className="py-3 px-4 border-b text-right font-semibold text-gray-600">זמן בוחן</th>
                      <th className="py-3 px-4 border-b text-right font-semibold text-gray-600">תאריך</th>
                    </tr>
                  </thead>
                  <tbody>
                    {progressData.quizScores.length > 0 ? (
                      progressData.quizScores.map((quiz, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="py-3 px-4 border-b text-right">{quiz.name}</td>
                          <td className="py-3 px-4 border-b text-right">
                            <span className={`font-semibold ${quiz.score / quiz.total >= 0.8 ? 'text-green-600' : quiz.score / quiz.total >= 0.6 ? 'text-yellow-600' : 'text-red-600'}`}>
                              {quiz.score} / {quiz.total}
                            </span>
                            <span className="text-gray-500 text-sm mr-2">
                              ({((quiz.score / quiz.total) * 100).toFixed(1)}%)
                            </span>
                          </td>
                          <td className="py-3 px-4 border-b text-right text-gray-600">
                            {formatTime(quiz.timeSpent || 0)}
                          </td>
                          <td className="py-3 px-4 border-b text-right">{quiz.date}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-4 text-gray-500">עדיין אין ציוני בחנים.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Exercise Statistics Section */}
            {progressData.exerciseData && progressData.exerciseData.length > 0 && (
              <section aria-labelledby="exercise-stats-heading" className="mb-10">
                <h2 id="exercise-stats-heading" className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
                  סטטיסטיקת תרגילים 📚
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {progressData.exerciseData.map((exercise, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        תרגיל {exercise.exerciseId} - {lessonDisplayNames[exercise.lessonId] || exercise.lessonId}
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p><span className="font-medium">ניסיונות:</span> {exercise.attempts}</p>
                        <p><span className="font-medium">תשובות שגויות:</span> {exercise.wrongAnswers.length}</p>
                        <p><span className="font-medium">זמן שהושקע:</span> {formatTime(exercise.timeSpent)}</p>
                        {exercise.lastAttempt && (
                          <p><span className="font-medium">ניסיון אחרון:</span> {new Date(exercise.lastAttempt).toLocaleDateString('he-IL')}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Detailed Completion Data Section */}
            {progressData.completionData && progressData.completionData.length > 0 && (
              <section aria-labelledby="completion-details-heading" className="mb-10">
                <h2 id="completion-details-heading" className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
                  פרטי השלמת שיעורים 🏆
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 border-b text-right font-semibold text-gray-600">שם שיעור</th>
                        <th className="py-3 px-4 border-b text-right font-semibold text-gray-600">זמן התחלה</th>
                        <th className="py-3 px-4 border-b text-right font-semibold text-gray-600">זמן סיום</th>
                        <th className="py-3 px-4 border-b text-right font-semibold text-gray-600">משך זמן</th>
                      </tr>
                    </thead>
                    <tbody>
                      {progressData.completionData.map((completion, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="py-3 px-4 border-b text-right">{completion.lessonName}</td>
                          <td className="py-3 px-4 border-b text-right text-gray-600">
                            {new Date(completion.startTime).toLocaleString('he-IL')}
                          </td>
                          <td className="py-3 px-4 border-b text-right text-gray-600">
                            {new Date(completion.completionTime).toLocaleString('he-IL')}
                          </td>
                          <td className="py-3 px-4 border-b text-right font-medium text-blue-600">
                            {formatTime(Math.floor((new Date(completion.completionTime) - new Date(completion.startTime)) / 1000))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </main>
        </div>

        {/* Export Options */}
        <section className="mt-8 mb-12 text-center no-print">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">אפשרויות ייצוא</h2>
          <div className="space-x-0 md:space-x-4 space-y-4 md:space-y-0 rtl:space-x-reverse">
            <button 
              onClick={exportToPdf}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-150 ease-in-out"
            >
              ייצא כ-PDF 📄
            </button>
            <button 
              onClick={exportToCsv}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-150 ease-in-out"
            >
              ייצא כ-CSV 📊
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-12 py-4 border-t border-gray-300 no-print">
          <p>&copy; {new Date().getFullYear()} פלטפורמת למידה במתמטיקה. כל הזכויות שמורות.</p>
        </footer>
      </div>      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressDashboard;
