// Lesson navigation utilities

/**
 * Lesson navigation structure organized by questionnaire groups
 * Each group contains lessons in sequential order with their routes and questionnaire
 */
export const LESSON_GROUPS = {
  // MAHAT - Technological Preparatory Course
  'mahat': {
    questionnairePath: '/mahat-menu',
    questionnaireTitle: 'MAHAT - מכינה טכנולוגית',
    lessons: [
      // Topic 1: Algebraic Techniques (30 hours)
      {
        id: 'mahat-1-1-basics',
        title: '1.1 יסודות החשבון',
        path: '/lessons/mahat-1-1-basics'
      },
      {
        id: 'mahat-1-2-fractions',
        title: '1.2 שברים ושימוש במחשבון',
        path: '/lessons/mahat-1-2-fractions'
      },
      {
        id: 'mahat-1-3-powers-basic',
        title: '1.3 חוקי חזקות ושורשים (בסיסי)',
        path: '/lessons/mahat-1-3-powers-basic'
      },
      {
        id: 'mahat-1-4-algebraic-expressions',
        title: '1.4 ביטויים אלגבריים וכינוס איברים',
        path: '/lessons/mahat-1-4-algebraic-expressions'
      },
      {
        id: 'mahat-1-5-multiplication-formulas',
        title: '1.5 נוסחאות הכפל המקוצר ופירוק לגורמים',
        path: '/lessons/mahat-1-5-multiplication-formulas'
      },
      {
        id: 'mahat-1-6-algebraic-fractions',
        title: '1.6 שברים אלגבריים',
        path: '/lessons/mahat-1-6-algebraic-fractions'
      },
      // Topic 2: Powers and Roots (25 hours)
      {
        id: 'mahat-2-1-advanced-powers',
        title: '2.1 חוקי חזקות מתקדמים',
        path: '/lessons/mahat-2-1-advanced-powers'
      },
      {
        id: 'mahat-2-2-roots-rational',
        title: '2.2 שורשים וחזקות עם מעריך רציונלי',
        path: '/lessons/mahat-2-2-roots-rational'
      },
      {
        id: 'mahat-2-3-scientific-notation',
        title: '2.3 כתיבה מדעית והמרת מידות',
        path: '/lessons/mahat-2-3-scientific-notation'
      },
      // Topic 3: Graph Reading (20 hours)
      {
        id: 'mahat-3-1-graph-reading',
        title: '3.1 הבנת מידע מגרפים',
        path: '/lessons/mahat-3-1-graph-reading'
      },
      // Topic 4: Equations and Systems (25 hours)
      {
        id: 'mahat-4-1-linear-equations',
        title: '4.1 משוואות ממעלה ראשונה',
        path: '/lessons/mahat-4-1-linear-equations'
      },
      {
        id: 'mahat-4-2-linear-systems',
        title: '4.2 מערכת משוואות לינאריות',
        path: '/lessons/mahat-4-2-linear-systems'
      },
      {
        id: 'mahat-4-3-quadratic-equations',
        title: '4.3 משוואות ריבועיות',
        path: '/lessons/mahat-4-3-quadratic-equations'
      },
      {
        id: 'mahat-4-4-mixed-systems',
        title: '4.4 מערכת משוואות ריבועית ולינארית',
        path: '/lessons/mahat-4-4-mixed-systems'
      },
      // Topic 5: Formula Subject Change (20 hours)
      {
        id: 'mahat-5-1-formula-subject',
        title: '5.1 בידוד משתנים',
        path: '/lessons/mahat-5-1-formula-subject'
      },
      // Topic 6: Introduction to Engineering (20 hours)
      {
        id: 'mahat-6-1-plane-shapes',
        title: '6.1 צורות הנדסיות במישור',
        path: '/lessons/mahat-6-1-plane-shapes'
      },
      {
        id: 'mahat-6-2-coordinate-geometry',
        title: '6.2 הנדסה במערכת צירים',
        path: '/lessons/mahat-6-2-coordinate-geometry'
      },
      // Topic 7: Analytic Engineering (40 hours)
      {
        id: 'mahat-7-1-function-line',
        title: '7.1 מושג הפונקציה והקו הישר',
        path: '/lessons/mahat-7-1-function-line'
      },
      {
        id: 'mahat-7-2-slope-parallel',
        title: '7.2 שיפוע וישרים מקבילים/ניצבים',
        path: '/lessons/mahat-7-2-slope-parallel'
      },
      {
        id: 'mahat-7-3-midpoint-distance',
        title: '7.3 אמצע קטע ומרחק בין נקודות',
        path: '/lessons/mahat-7-3-midpoint-distance'
      },
      {
        id: 'mahat-7-4-implicit-function',
        title: '7.4 פונקציה סתומה ופתרון גרפי',
        path: '/lessons/mahat-7-4-implicit-function'
      },
      {
        id: 'mahat-7-5-complex-geometry',
        title: '7.5 הנדסה אנליטית בצורות מורכבות',
        path: '/lessons/mahat-7-5-complex-geometry'
      },
      // Topic 8: Parabolas (30 hours)
      {
        id: 'mahat-8-1-quadratic-intro',
        title: '8.1 מבוא לפונקציה הריבועית',
        path: '/lessons/mahat-8-1-quadratic-intro'
      },
      {
        id: 'mahat-8-2-parabola-analysis',
        title: '8.2 חקירת פרבולה',
        path: '/lessons/mahat-8-2-parabola-analysis'
      },
      {
        id: 'mahat-8-3-line-parabola',
        title: '8.3 חיתוך בין ישר לפרבולה',
        path: '/lessons/mahat-8-3-line-parabola'
      },
      // Topic 9: Word Problems (30 hours)
      {
        id: 'mahat-9-1-purchase-problems',
        title: '9.1 בעיות קנייה ומכירה',
        path: '/lessons/mahat-9-1-purchase-problems'
      },
      {
        id: 'mahat-9-2-geometry-problems',
        title: '9.2 בעיות גיאומטריות',
        path: '/lessons/mahat-9-2-geometry-problems'
      },
      // Topic 10: Trigonometry (30 hours)
      {
        id: 'mahat-10-1-trig-basics',
        title: '10.1 יסודות הטריגונומטריה',
        path: '/lessons/mahat-10-1-trig-basics'
      },
      {
        id: 'mahat-10-2-trig-functions',
        title: '10.2 שימוש בפונקציות הטריגונומטריות',
        path: '/lessons/mahat-10-2-trig-functions'
      },
      {
        id: 'mahat-10-3-complex-shapes',
        title: '10.3 פתרון צורות מורכבות',
        path: '/lessons/mahat-10-3-complex-shapes'
      }
    ]
  },
  '35182': {
    questionnairePath: '/questionnaire/35182',
    questionnaireTitle: 'שאלון מתמטיקה בסיסית',
    lessons: [
      {
        id: 'algebra-linear-equation-one-variable',
        title: 'משוואות ליניאריות במשתנה אחד',
        path: '/lessons/algebra-linear-equation-one-variable'
      },
      {
        id: 'algebra-percentages',
        title: 'אחוזים',
        path: '/lessons/algebra-percentages'
      },
      {
        id: 'algebra-inequalities',
        title: 'אי-שוויונים',
        path: '/lessons/algebra-inequalities'
      },
      {
        id: 'algebra-quadratic-equations',
        title: 'משוואות ריבועיות',
        path: '/lessons/algebra-quadratic-equations'
      },
      {
        id: 'algebra-word-problems',
        title: 'בעיות מילוליות באלגברה',
        path: '/lessons/algebra-word-problems'
      },
      {
        id: 'algebra-linear-equations-two-variables',
        title: 'משוואות ליניאריות בשני משתנים',
        path: '/lessons/algebra-linear-equations-two-variables'
      },
      {
        id: 'analytic-geometry-points',
        title: 'נקודות במישור',
        path: '/lessons/analytic-geometry-points'
      },
      {
        id: 'analytic-geometry-slope',
        title: 'שיפוע קו',
        path: '/lessons/analytic-geometry-slope'
      },
      {
        id: 'analytic-geometry-distance',
        title: 'מרחק בין נקודות',
        path: '/lessons/analytic-geometry-distance'
      },
      {
        id: 'analytic-geometry-midpoint',
        title: 'נקודת אמצע',
        path: '/lessons/analytic-geometry-midpoint'
      },      {
        id: 'geometry-area-perimeter',
        title: 'שטח והיקף',
        path: '/lessons/geometry-area-perimeter'
      },
      {
        id: 'geometry-shapes-properties',
        title: 'תכונות צורות גיאומטריות',
        path: '/lessons/geometry-shapes-properties'
      },
      {
        id: 'statistics-intro',
        title: 'מבוא לסטטיסטיקה',
        path: '/lessons/statistics-intro'      },
      {
        id: 'probability-intro',
        title: 'מבוא להסתברות',
        path: '/lessons/probability-intro'
      },
      {
        id: 'trigonometry-right-triangle',
        title: 'טריגונומטריה במשולש ישר-זווית',
        path: '/lessons/trigonometry-right-triangle'
      },      {
        id: 'sequences-arithmetic-intro',
        title: 'מבוא לסדרות חשבוניות',
        path: '/lessons/sequences-arithmetic-intro'
      }
    ]
  },
  '35381': {
    questionnairePath: '/questionnaire/35381',
    questionnaireTitle: 'שאלון מתמטיקה בינונית',
    lessons: [
      {
        id: 'functions-parabola-investigation',
        title: 'חקירת פרבולה',
        path: '/lessons/functions-parabola-investigation'
      },
      {
        id: 'sequences-arithmetic-sum',
        title: 'סכום סדרה חשבונית',
        path: '/lessons/sequences-arithmetic-sum'
      },
      {
        id: 'growth-decay',
        title: 'גידול ודעיכה',
        path: '/lessons/growth-decay'
      },
      {
        id: 'statistics-dispersion',
        title: 'פיזור בסטטיסטיקה',
        path: '/lessons/statistics-dispersion'
      },
      {
        id: 'probability-tree-conditional',
        title: 'הסתברות מותנית ועץ הסתברות',
        path: '/lessons/probability-tree-conditional'
      },      {
        id: 'normal-distribution',
        title: 'ההתפלגות הנורמלית',
        path: '/lessons/normal-distribution'
      },
      {
        id: 'geometry-shapes',
        title: 'צורות גיאומטריות',
        path: '/lesson/geometry-shapes'
      }
    ]
  },
  '35382': {
    questionnairePath: '/questionnaire/35382',
    questionnaireTitle: 'שאלון מתמטיקה מתקדמת',
    lessons: [
      {
        id: 'problems-work-rate',
        title: 'בעיות קצב עבודה',
        path: '/lesson/problems-work-rate'
      },
      {
        id: 'problems-motion',
        title: 'בעיות תנועה',
        path: '/lesson/problems-motion'
      },
      {
        id: 'problems-geometric-algebraic',
        title: 'בעיות גיאומטריות-אלגבריות',
        path: '/lesson/problems-geometric-algebraic'
      },
      {
        id: 'problems-buy-sell',
        title: 'בעיות קנייה ומכירה',
        path: '/lesson/problems-buy-sell'
      },
      {
        id: 'analytic-geometry-circle',
        title: 'מעגל בגיאומטריה אנליטית',
        path: '/lesson/analytic-geometry-circle'
      },
      {
        id: 'analytic-geometry-circle-tangent',
        title: 'משיק למעגל',
        path: '/lesson/analytic-geometry-circle-tangent'
      },
      {
        id: 'analytic-geometry-circle-line-intersection',
        title: 'חיתוך מעגל וישר',
        path: '/lesson/analytic-geometry-circle-line-intersection'
      },
      {
        id: 'analytic-geometry-line-continued',
        title: 'ישר - המשך',
        path: '/lesson/analytic-geometry-line-continued'
      },
      {
        id: 'calculus-polynomial',
        title: 'חשבון דיפרנציאלי - פולינומים',
        path: '/lesson/calculus-polynomial'
      },
      {
        id: 'calculus-rational',
        title: 'חשבון דיפרנציאלי - פונקציות רציונליות',
        path: '/lesson/calculus-rational'
      },
      {
        id: 'calculus-square-root',
        title: 'חשבון דיפרנציאלי - שורש ריבועי',
        path: '/lesson/calculus-square-root'
      },
      {
        id: 'calculus-optimization',
        title: 'אופטימיזציה',
        path: '/lesson/calculus-optimization'
      },
      {
        id: 'calculus-integral-polynomial',
        title: 'אינטגרל של פולינום',
        path: '/lesson/calculus-integral-polynomial'
      }
    ]
  }
};

/**
 * Get navigation information for a lesson
 * @param {string} lessonId - The lesson ID (questionnaire format)
 * @returns {Object} Navigation information including previous/next lessons and questionnaire
 */
export const getLessonNavigation = (lessonId) => {
  // Find which group this lesson belongs to
  for (const [groupId, group] of Object.entries(LESSON_GROUPS)) {
    const lessonIndex = group.lessons.findIndex(lesson => lesson.id === lessonId);
    
    if (lessonIndex !== -1) {
      const currentLesson = group.lessons[lessonIndex];
      const previousLesson = lessonIndex > 0 ? group.lessons[lessonIndex - 1] : null;
      const nextLesson = lessonIndex < group.lessons.length - 1 ? group.lessons[lessonIndex + 1] : null;
      
      return {
        current: currentLesson,
        previous: previousLesson,
        next: nextLesson,
        questionnaire: {
          path: group.questionnairePath,
          title: group.questionnaireTitle
        },
        group: {
          id: groupId,
          totalLessons: group.lessons.length,
          currentIndex: lessonIndex + 1
        }
      };
    }
  }
  
  return null;
};

/**
 * Get the questionnaire group ID for a lesson
 * @param {string} lessonId - The lesson ID (questionnaire format)
 * @returns {string|null} The questionnaire group ID (35182, 35381, or 35382)
 */
export const getLessonGroup = (lessonId) => {
  for (const [groupId, group] of Object.entries(LESSON_GROUPS)) {
    if (group.lessons.some(lesson => lesson.id === lessonId)) {
      return groupId;
    }
  }
  return null;
};

/**
 * Convert actual lesson ID to questionnaire format lesson ID
 * @param {string} actualLessonId - The actual lesson ID used in files
 * @returns {string} The questionnaire format lesson ID
 */
export const getQuestionnaireLessonId = (actualLessonId) => {
  // This is the reverse mapping of the progressUtils LESSON_ID_MAPPING
  const reverseMapping = {
    'algebra_linear_equation_one_variable_35182': 'algebra-linear-equation-one-variable',
    '35182-algebra-percentages': 'algebra-percentages',
    '35182-algebra-inequalities': 'algebra-inequalities',
    '35182-algebra-quadratic-equations': 'algebra-quadratic-equations',
    '35182-algebra-word-problems': 'algebra-word-problems',
    '35182-algebra-linear-equations-two-variables': 'algebra-linear-equations-two-variables',
    '35182-analytic-geometry-distance': 'analytic-geometry-distance',
    '35182-analytic-geometry-midpoint': 'analytic-geometry-midpoint',
    '35182-analytic-geometry-points': 'analytic-geometry-points',    '35182-analytic-geometry-slope': 'analytic-geometry-slope',    '35182-geometry-area-perimeter': 'geometry-area-perimeter',
    '35182-geometry-shapes-properties': 'geometry-shapes-properties',    '35182-statistics-intro': 'statistics-intro',    '35182-probability-intro': 'probability-intro',
    '35182-trigonometry-right-triangle': 'trigonometry-right-triangle',
    'trigonometry-right-triangle': 'trigonometry-right-triangle',
    '35182-sequences-arithmetic-intro': 'sequences-arithmetic-intro',
    'functions_parabola_investigation_35381': 'functions-parabola-investigation',
    '35381_sequences_arithmetic_sum': 'sequences-arithmetic-sum',
    '35381_growth_decay': 'growth-decay',
    '35381_statistics_dispersion': 'statistics-dispersion',    '35381-probability-tree-conditional': 'probability-tree-conditional',
    '35381-normal-distribution': 'normal-distribution',
    '35381-geometry-shapes': 'geometry-shapes',
    'problems-work-rate': 'problems-work-rate',
    'problems-motion': 'problems-motion',
    'problems-geometric-algebraic': 'problems-geometric-algebraic',
    'problems_buy_sell_he': 'problems-buy-sell',
    'analytic-geometry-circle': 'analytic-geometry-circle',
    'analytic-geometry-circle-tangent': 'analytic-geometry-circle-tangent',
    'analytic-geometry-circle-line-intersection': 'analytic-geometry-circle-line-intersection',
    'analytic_geometry_line_continued_he': 'analytic-geometry-line-continued',    'calculus-polynomial': 'calculus-polynomial',
    'calculus-rational': 'calculus-rational',
    'calculus_square_root_he': 'calculus-square-root',
    'calculus_optimization_he': 'calculus-optimization',
    'calculus-integral-polynomial': 'calculus-integral-polynomial'
  };
  
  return reverseMapping[actualLessonId] || actualLessonId;
};
