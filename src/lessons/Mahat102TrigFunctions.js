import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat102TrigFunctions = () => {
  const lessonId = 'mahat-10-2-trig-functions';
  const nextLessonPath = '/lessons/mahat-10-3-complex-shapes';

  const exercises = [
    {
      id: 'ex1',
      question: 'במשולש ישר זווית, זווית חדה היא 50°. הניצב שמולה הוא באורך 12. מצא את אורך היתר.',
      correctAnswer: '15.66',
      placeholder: 'הכנס תשובה (עד שתי ספרות אחרי הנקודה)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשתמש בפונקציית הסינוס: sin(50°) = 12 / יתר</p>
          <FormulaBox>{"\\sin(50°) ≈ 0.766"}</FormulaBox>
          <FormulaBox>{"0.766 = \\frac{12}{\\text{יתר}} \\Rightarrow \\text{יתר} = \\frac{12}{0.766} ≈ 15.66"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'במשולש ישר זווית, זווית חדה היא 20°. הניצב שלידה הוא 15. מצא את אורך הניצב שמולה.',
      correctAnswer: '5.46',
      placeholder: 'הכנס תשובה (עד שתי ספרות אחרי הנקודה)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשתמש בפונקציית הטנגנס: tan(20°) = ניצב מול / 15</p>
          <FormulaBox>{"\\tan(20°) ≈ 0.364"}</FormulaBox>
          <FormulaBox>{"0.364 = \\frac{\\text{ניצב מול}}{15} \\Rightarrow \\text{ניצב מול} = 15 × 0.364 ≈ 5.46"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'במשולש ישר זווית, זווית חדה היא 65° והיתר הוא 20. מצא את אורך הניצב שליד הזווית.',
      correctAnswer: '8.45',
      placeholder: 'הכנס תשובה (עד שתי ספרות אחרי הנקודה)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשתמש בפונקציית הקוסינוס: cos(65°) = ניצב ליד / 20</p>
          <FormulaBox>{"\\cos(65°) ≈ 0.423"}</FormulaBox>
          <FormulaBox>{"0.423 = \\frac{\\text{ניצב ליד}}{20} \\Rightarrow \\text{ניצב ליד} = 20 × 0.423 ≈ 8.45"}</FormulaBox>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - פונקציות טריגונומטריות ומציאת צלע חסרה',
    questions: [
      {
        question: 'במשולש ישר זווית, ביחס לזווית חדה נתונים הניצב שלידה והיתר. באיזו פונקציה נשתמש כדי למצוא את הזווית?',
        options: ['sin', 'cos', 'tan', 'פיתגורס'],
        correctAnswer: 1,
        explanation: 'קוסינוס הוא היחס בין הניצב שליד ליתר.'
      },
      {
        question: 'במשולש ישר זווית עם זווית α=30°, ידוע שהניצב שמול הזווית הוא 5. מה אורך היתר?',
        options: ['2.5', '10', '8.66', '5'],
        correctAnswer: 1,
        explanation: 'sin(30°) = 5/יתר. מכיוון ש-sin(30°) = 0.5, נקבל 0.5 = 5/יתר, ולכן היתר הוא 10.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="שיעורים 10.2 ו-10.3: הפונקציות הטריגונומטריות ומציאת צלע חסרה"
      nextLessonPath={nextLessonPath}
    >
      {/* מבוא */}
      <section className="lesson-intro">
        <h2>מבוא לשיעור</h2>
        <p>
          לאחר שהכרנו את שמות השחקנים במשולש ישר זווית, נציג כעת את הכלים המרכזיים של הטריגונומטריה: 
          פונקציות הסינוס, הקוסינוס והטנגנס. פונקציות אלו מגדירות יחסים קבועים בין צלעות וזוויות, 
          ומאפשרות לנו למצוא אורך של צלע חסרה אם ידועים לנו אורך צלע אחת וגודל זווית אחת.
        </p>
      </section>

      {/* מטרות השיעור */}
      <section className="lesson-objectives">
        <h2>מטרות השיעור</h2>
        <ul>
          <li><strong>הגדרת הפונקציות:</strong> נלמד ונשנן את ההגדרות של sin, cos, ו-tan כיחסים בין צלעות</li>
          <li><strong>בחירת הפונקציה הנכונה:</strong> נלמד כיצד לבחור את הפונקציה המתאימה לשימוש בהתאם לנתונים שבשאלה</li>
          <li><strong>פתרון למציאת צלע:</strong> נתרגל את התהליך האלגברי למציאת אורך צלע חסרה</li>
        </ul>
      </section>

      {/* חלק 1: הגדרת הפונקציות */}
      <section className="theory-section">
        <h2>חלק 1: הגדרת הפונקציות הטריגונומטריות</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>עבור זווית חדה α במשולש ישר זווית, היחסים הבאים תמיד קבועים:</p>
          
          <div className="formulas-grid">
            <div className="formula-item">
              <h4>סינוס (sin)</h4>
              <p>היחס בין הניצב שמול הזווית ליתר</p>
              <FormulaBox>{"\\sin(α) = \\frac{\\text{מול}}{\\text{יתר}}"}</FormulaBox>
            </div>
            
            <div className="formula-item">
              <h4>קוסינוס (cos)</h4>
              <p>היחס בין הניצב שליד הזווית ליתר</p>
              <FormulaBox>{"\\cos(α) = \\frac{\\text{ליד}}{\\text{יתר}}"}</FormulaBox>
            </div>
            
            <div className="formula-item">
              <h4>טנגנס (tan)</h4>
              <p>היחס בין הניצב שמול הזווית לניצב שליד הזווית</p>
              <FormulaBox>{"\\tan(α) = \\frac{\\text{מול}}{\\text{ליד}}"}</FormulaBox>
            </div>
          </div>

          <div className="tip-box">
            <h4>טיפ לזכירה</h4>
            <p>יש כאלה שזוכרים את המשפט "מה ליד יתר?" כדי לזכור ש-cos הוא ליד/יתר ו-sin הוא מול/יתר.</p>
          </div>
        </div>
      </section>

      {/* חלק 2: בחירת הפונקציה הנכונה */}
      <section className="theory-section">
        <h2>חלק 2: איך לבחור את הפונקציה הנכונה?</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>בהינתן בעיה, בצעו את השלבים הבאים כדי להחליט באיזו פונקציה להשתמש:</p>
          
          <ol>
            <li><strong>זהה את הזווית:</strong> סמן את הזווית הנתונה (או זו שמחפשים)</li>
            <li><strong>זהה את הצלעות:</strong>
              <ul>
                <li>מהי הצלע הנתונה (האורך שלה ידוע)? האם היא מול, ליד, או יתר?</li>
                <li>מהי הצלע הנעלמת (שאותה מחפשים)? האם היא מול, ליד, או יתר?</li>
              </ul>
            </li>
            <li><strong>בחר את הפונקציה:</strong> בחר את הפונקציה היחידה שמקשרת בין שתי הצלעות שזיהית
              <ul>
                <li>אם מעורבים מול ויתר → השתמש ב-sin</li>
                <li>אם מעורבים ליד ויתר → השתמש ב-cos</li>
                <li>אם מעורבים מול וליד → השתמש ב-tan</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* חלק 3: דוגמאות מפורטות */}
      <section className="theory-section">
        <h2>חלק 3: מציאת צלע חסרה - דוגמאות</h2>
        <div className="theory-content">
          <div className="example-box">
            <h4>דוגמה 1</h4>
            <p><strong>נתון:</strong> במשולש ישר זווית, נתונה זווית של 40° והיתר הוא 10 ס"מ. מצא את אורך הניצב שמול הזווית.</p>
            
            <div className="solution-steps">
              <p><strong>זווית:</strong> 40°</p>
              <p><strong>צלעות:</strong> הנתונה היא יתר (10). הנעלמת היא מול (x)</p>
              <p><strong>בחירת פונקציה:</strong> מול ויתר → sin</p>
              <p><strong>בניית משוואה:</strong> sin(40°) = x / 10</p>
              
              <div className="calculation">
                <p><strong>פתרון:</strong></p>
                <p>נחשב במחשבון: sin(40°) ≈ 0.643</p>
                <FormulaBox>{"0.643 = \\frac{x}{10}"}</FormulaBox>
                <FormulaBox>{"x = 10 × 0.643 = 6.43"}</FormulaBox>
                <p><strong>תשובה:</strong> אורך הניצב הוא כ-6.43 ס"מ</p>
              </div>
            </div>
          </div>

          <div className="example-box">
            <h4>דוגמה 2</h4>
            <p><strong>נתון:</strong> במשולש ישר זווית, נתונה זווית של 25° והניצב שלידה הוא 8 ס"מ. מצא את אורך היתר.</p>
            
            <div className="solution-steps">
              <p><strong>זווית:</strong> 25°</p>
              <p><strong>צלעות:</strong> הנתונה היא ליד (8). הנעלמת היא יתר (x)</p>
              <p><strong>בחירת פונקציה:</strong> ליד ויתר → cos</p>
              <p><strong>בניית משוואה:</strong> cos(25°) = 8 / x</p>
              
              <div className="calculation">
                <p><strong>פתרון:</strong></p>
                <p>נחשב במחשבון: cos(25°) ≈ 0.906</p>
                <FormulaBox>{"0.906 = \\frac{8}{x}"}</FormulaBox>
                <FormulaBox>{"0.906 × x = 8"}</FormulaBox>
                <FormulaBox>{"x = \\frac{8}{0.906} ≈ 8.83"}</FormulaBox>
                <p><strong>תשובה:</strong> אורך היתר הוא כ-8.83 ס"מ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* תרגילים */}
      <section className="exercises-section">
        <h2>תרגילים לתרגול</h2>
        {exercises.map((exercise, index) => (
          <Exercise key={exercise.id} {...exercise} />
        ))}
      </section>

      {/* בחן את עצמך */}
      <section className="quiz-section">
        <Quiz {...quizData} />
      </section>

      {/* סיכום */}
      <section className="lesson-summary">
        <h2>סיכום השיעור</h2>
        <div className="summary-content">
          <p>בשיעור זה למדנו על הפונקציות הטריגונומטריות:</p>
          <ul>
            <li>הגדרנו את שלוש הפונקציות: sin, cos ו-tan כיחסים בין צלעות במשולש ישר זווית</li>
            <li>למדנו אסטרטגיה לבחירת הפונקציה הנכונה על פי הצלעות הנתונות והנעלמות</li>
            <li>תרגלנו מציאת צלעות חסרות באמצעות הפונקציות הטריגונומטריות</li>
            <li>ראינו דוגמאות מפורטות של התהליך המלא מזיהוי הבעיה ועד לפתרון</li>
          </ul>
          <p>
            בשיעור הבא נלמד את הפעולה ההפוכה - כיצד למצוא זווית חסרה כאשר נתונות צלעות במשולש.
          </p>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat102TrigFunctions;
