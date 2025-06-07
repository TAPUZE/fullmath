// Lesson navigation utilities

/**
 * Lesson navigation structure organized by questionnaire groups
 * Each group contains lessons in sequential order with their routes and questionnaire
 */
export const LESSON_GROUPS = {
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
        path: '/lessons/statistics-intro'
      },
      {
        id: 'probability-intro',
        title: 'מבוא להסתברות',
        path: '/lessons/probability-intro'
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
    '35182-geometry-shapes-properties': 'geometry-shapes-properties',
    '35182-statistics-intro': 'statistics-intro',    '35182-probability-intro': 'probability-intro',
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
    'analytic_geometry_line_continued_he': 'analytic-geometry-line-continued',
    'calculus-polynomial': 'calculus-polynomial',
    'calculus-rational': 'calculus-rational',
    'calculus_square_root_he': 'calculus-square-root',
    'calculus_optimization_he': 'calculus-optimization',
    'calculus-integral-polynomial': 'calculus-integral-polynomial'
  };
  
  return reverseMapping[actualLessonId] || actualLessonId;
};

/**
 * Get all lessons from all groups in a flat array
 * @returns {Array} - Array of all lesson objects with group info
 */
export const getAllLessons = () => {
  const allLessons = [];
  
  Object.keys(LESSON_GROUPS).forEach(groupId => {
    const group = LESSON_GROUPS[groupId];
    group.lessons.forEach(lesson => {
      allLessons.push({
        ...lesson,
        groupId: groupId,
        groupTitle: group.questionnaireTitle
      });
    });
  });
  
  return allLessons;
};
