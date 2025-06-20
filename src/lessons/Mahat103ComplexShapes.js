import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat103ComplexShapes = () => {
  const lessonId = 'mahat-10-3-complex-shapes';
  const nextLessonPath = '/lessons/mahat-11-1-basics';

  const exercises = [
    {
      id: 'ex1',
      question: 'במשולש ישר זווית, הניצב שליד זווית α הוא 8 והיתר הוא 16. מצא את α.',
      correctAnswer: '60',
      placeholder: 'הכנס תשובה במעלות',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשתמש בפונקציית הקוסינוס: cos(α) = 8 / 16 = 0.5</p>
          <FormulaBox>{"α = \\cos^{-1}(0.5) = 60°"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'במשולש ישר זווית, הניצב שמול זווית α הוא 7 והניצב שלידה הוא 10. מצא את α (עד מעלה שלמה).',
      correctAnswer: '35',
      placeholder: 'הכנס תשובה במעלות',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשתמש בפונקציית הטנגנס: tan(α) = 7 / 10 = 0.7</p>
          <FormulaBox>{"α = \\tan^{-1}(0.7) ≈ 35°"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'במשולש שווה שוקיים, אורך הבסיס הוא 10 וזווית הראש (הזווית בין השוקיים) היא 40°. מצא את אורך השוק (עד שתי ספרות אחרי הנקודה).',
      correctAnswer: '14.62',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נוריד גובה מהקודקוד לבסיס. זה יוצר משולש ישר זווית שבו:</p>
          <p>זווית אחת היא 40°/2 = 20°</p>
          <p>הניצב מול הזווית הוא 10/2 = 5</p>
          <p>השוק הוא היתר</p>
          <FormulaBox>{"\\sin(20°) = \\frac{5}{\\text{שוק}} \\Rightarrow \\text{שוק} = \\frac{5}{\\sin(20°)} ≈ \\frac{5}{0.342} ≈ 14.62"}</FormulaBox>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - מציאת זוויות וצורות מורכבות',
    questions: [
      {
        question: 'ידוע שבמשולש ישר זווית cos(α) = 0.5. מהי הזווית α?',
        options: ['30°', '45°', '60°', '90°'],
        correctAnswer: 2,
        explanation: 'יש ללחוץ במחשבון cos⁻¹(0.5) = 60°.'
      },
      {
        question: 'במשולש שווה שוקיים, הורדנו גובה לבסיס. איזה מהבאים אינו נכון בהכרח לגבי הגובה?',
        options: ['הוא חוצה את הבסיס', 'הוא חוצה את זווית הראש', 'הוא מאונך לבסיס', 'הוא שווה באורכו לבסיס'],
        correctAnswer: 3,
        explanation: 'שלוש התכונות הראשונות נכונות תמיד לגובה לבסיס במשולש שווה שוקיים. אין סיבה שהוא יהיה שווה באורכו לבסיס.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="שיעורים 10.4 ו-10.5: מציאת זוויות וצורות מורכבות"
      nextLessonPath={nextLessonPath}
    >
      {/* מבוא לשיעור 10.4 */}
      <section className="lesson-intro">
        <h2>מבוא לשיעור</h2>
        <p>
          לאחר שלמדנו כיצד למצוא צלע חסרה, כעת נעשה את הפעולה ההפוכה: בהינתן אורכים של שתי צלעות 
          במשולש ישר זווית, נמצא את גודל הזוויות החדות. לשם כך, נשתמש בפעולות ההפוכות לסינוס, 
          קוסינוס וטנגנס, שנקראות ארקסינוס, ארקקוסינוס וארקטנגנס. 
          בנוסף, נלמד כיצד ליישם את הטריגונומטריה על צורות מורכבות יותר.
        </p>
      </section>

      {/* מטרות השיעור */}
      <section className="lesson-objectives">
        <h2>מטרות השיעור</h2>
        <ul>
          <li><strong>הכרת הפונקציות ההפוכות:</strong> נבין את תפקידן של sin⁻¹, cos⁻¹, tan⁻¹ במחשבון</li>
          <li><strong>מציאת זוויות חסרות:</strong> נתרגל את התהליך למציאת גודל זווית חסרה</li>
          <li><strong>פיתוח חשיבה אסטרטגית:</strong> נלמד היכן להוריד גבהים בצורות שונות כדי ליצור משולשים ישרי זווית</li>
          <li><strong>יישום על צורות מורכבות:</strong> נפתור בעיות במשולשים שווי שוקיים, טרפזים ומעוינים</li>
        </ul>
      </section>

      {/* חלק 1: הפונקציות ההפוכות */}
      <section className="theory-section">
        <h2>חלק 1: הפונקציות ההפוכות</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>אם sin(α) = y, אז α = arcsin(y).</p>
          <p>ברוב המחשבונים, כדי להפעיל את הפונקציה ההפוכה, לוחצים על כפתור shift או 2nd ואז על כפתור הפונקציה הרגילה (sin, cos, tan). הכיתוב מעל הכפתור יראה בדרך כלל sin⁻¹.</p>
          
          <div className="formulas-grid">
            <div className="formula-item">
              <h4>sin⁻¹(יחס)</h4>
              <p>נותן את הזווית שהסינוס שלה הוא היחס הנתון</p>
            </div>
            
            <div className="formula-item">
              <h4>cos⁻¹(יחס)</h4>
              <p>נותן את הזווית שהקוסינוס שלה הוא היחס הנתון</p>
            </div>
            
            <div className="formula-item">
              <h4>tan⁻¹(יחס)</h4>
              <p>נותן את הזווית שהטנגנס שלה הוא היחס הנתון</p>
            </div>
          </div>
        </div>
      </section>

      {/* חלק 2: מציאת זווית חסרה */}
      <section className="theory-section">
        <h2>חלק 2: מציאת זווית חסרה - דוגמאות</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>התהליך דומה מאוד למציאת צלע, אך השלב האחרון שונה.</p>
          
          <h4>שלבי עבודה:</h4>
          <ol>
            <li>זהה את הזווית הנעלמת (נקרא לה α)</li>
            <li>זהה את שתי הצלעות הנתונות ביחס לזווית α (מול, ליד, יתר)</li>
            <li>בחר את הפונקציה שמקשרת בין שתי הצלעות הללו</li>
            <li>כתוב את המשוואה (לדוגמה: sin(α) = מול / יתר)</li>
            <li>חשב את היחס המספרי</li>
            <li>השתמש בפונקציה ההפוכה במחשבון כדי למצוא את α</li>
          </ol>

          <div className="example-box">
            <h4>דוגמה 1</h4>
            <p><strong>נתון:</strong> במשולש ישר זווית, הניצב שמול זווית α הוא 6, והיתר הוא 10. מצא את α.</p>
            
            <div className="solution-steps">
              <p><strong>זווית:</strong> α</p>
              <p><strong>צלעות:</strong> נתונים מול (6) ויתר (10)</p>
              <p><strong>בחירת פונקציה:</strong> מול ויתר → sin</p>
              <p><strong>משוואה:</strong> sin(α) = 6 / 10</p>
              <p><strong>חישוב היחס:</strong> sin(α) = 0.6</p>
              <p><strong>שימוש בפונקציה הפוכה:</strong> α = sin⁻¹(0.6)</p>
              <p><strong>במחשבון:</strong> shift → sin → 0.6 → =</p>
              <p><strong>תשובה:</strong> α ≈ 36.87°</p>
            </div>
          </div>

          <div className="example-box">
            <h4>דוגמה 2</h4>
            <p><strong>נתון:</strong> במשולש ישר זווית, הניצב שליד זווית β הוא 5, והניצב שמול β הוא 12. מצא את β.</p>
            
            <div className="solution-steps">
              <p><strong>זווית:</strong> β</p>
              <p><strong>צלעות:</strong> נתונים מול (12) וליד (5)</p>
              <p><strong>בחירת פונקציה:</strong> מול וליד → tan</p>
              <p><strong>משוואה:</strong> tan(β) = 12 / 5</p>
              <p><strong>חישוב היחס:</strong> tan(β) = 2.4</p>
              <p><strong>שימוש בפונקציה הפוכה:</strong> β = tan⁻¹(2.4)</p>
              <p><strong>במחשבון:</strong> shift → tan → 2.4 → =</p>
              <p><strong>תשובה:</strong> β ≈ 67.38°</p>
            </div>
          </div>
        </div>
      </section>

      {/* חלק 3: צורות מורכבות */}
      <section className="theory-section">
        <h2>חלק 3: התרת צורות הניתנות לפירוק למשולשים ישרי זווית</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>
            העוצמה האמיתית של הטריגונומטריה מתגלה כאשר אנו משתמשים בה לפתרון בעיות בצורות 
            מורכבות יותר ממשולש ישר זווית. צורות רבות, כמו משולש שווה שוקיים, טרפז או מעוין, 
            ניתנות לפירוק למשולשים ישרי זווית. על ידי "הורדת גובה" במקום הנכון, אנו יוצרים 
            משולש עזר שבו נוכל להשתמש בכל הכלים הטריגונומטריים שלמדנו.
          </p>

          <h4>אסטרטגיית "הורדת גובה"</h4>
          <p>הטכניקה המרכזית בשיעור זה היא יצירת משולש ישר זווית בתוך הצורה הנתונה. כמעט תמיד, נעשה זאת על ידי הורדת גובה מאחד הקודקודים לצלע שמולו.</p>

          <h4>בצורות שונות:</h4>
          <ul>
            <li><strong>במשולש שווה שוקיים:</strong> הגובה לבסיס הוא קו קסום! הוא גם תיכון (חוצה את הבסיס לשני חלקים שווים) וגם חוצה זווית הראש</li>
            <li><strong>בטרפז שווה שוקיים:</strong> הורדת שני גבהים משני הקודקודים של הבסיס העליון יוצרת מלבן באמצע ושני משולשים ישרי זווית זהים בצדדים</li>
            <li><strong>במעוין:</strong> האלכסונים מאונכים זה לזה וחוצים זה את זה. הם מחלקים את המעוין לארבעה משולשים ישרי זווית זהים</li>
          </ul>

          <div className="example-box">
            <h4>דוגמה: משולש שווה שוקיים</h4>
            <p><strong>נתון:</strong> במשולש שווה שוקיים, אורך השוק הוא 12 ס"מ, וזווית הבסיס היא 70°. מצא את אורך הבסיס.</p>
            
            <div className="solution-steps">
              <p><strong>שרטוט והורדת גובה:</strong> נוריד גובה מהקודקוד שבין השוקיים אל הבסיס. הגובה יוצר משולש ישר זווית שבו:</p>
              <ul>
                <li>היתר הוא השוק (12 ס"מ)</li>
                <li>זווית אחת היא 70°</li>
                <li>הניצב שליד זווית ה-70° הוא חצי מהבסיס (נקרא לו x)</li>
              </ul>
              
              <p><strong>בחירת פונקציה:</strong> יש לנו ליד (x) ויתר (12) ביחס לזווית 70°. נשתמש ב-cos.</p>
              
              <div className="calculation">
                <p><strong>פתרון:</strong></p>
                <FormulaBox>{"\\cos(70°) = \\frac{x}{12}"}</FormulaBox>
                <FormulaBox>{"x = 12 × \\cos(70°) ≈ 12 × 0.342 ≈ 4.1 \\text{ ס''מ}"}</FormulaBox>
                <p><strong>מציאת הבסיס כולו:</strong> x הוא רק חצי מהבסיס. הבסיס כולו הוא 2 × 4.1 = 8.2 ס"מ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* תרגילים */}
      <section className="exercises-section">
        <h2>תרגילים</h2>
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
          <p>בשיעור זה השלמנו את הלימוד הבסיסי של הטריגונומטריה:</p>
          <ul>
            <li>למדנו כיצד להשתמש בפונקציות ההפוכות (sin⁻¹, cos⁻¹, tan⁻¹) למציאת זוויות</li>
            <li>תרגלנו את התהליך השלם ממציאת היחס ועד לחישוב הזווית במחשבון</li>
            <li>פיתחנו אסטרטגיות לפירוק צורות מורכבות למשולשים ישרי זווית</li>
            <li>יישמנו טריגונומטריה על משולשים שווי שוקיים, טרפזים ומעוינים</li>
          </ul>
          <p>
            עם השלמת נושא הטריגונומטריה, יש לכם כלים חזקים לפתרון בעיות גיאומטריות מורכבות. 
            הטריגונומטריה משמשת בתחומים רבים כמו פיזיקה, הנדסה, אדריכלות וניווט.
          </p>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat103ComplexShapes;
