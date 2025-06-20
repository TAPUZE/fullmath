import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat83LineParabola = () => {
  const lessonId = 'mahat-8-3-line-parabola';
  const nextLessonPath = '/lessons/mahat-9-1-purchase-problems';

  const exercises = [
    {
      id: 'ex1',
      question: 'מצא את נקודות החיתוך בין הפרבולה y = x² - 4 לבין הישר y = 2x - 1.',
      correctAnswer: '(1, 1) ו-(-3, -7)',
      placeholder: 'רשום את נקודות החיתוך',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>בנקודות החיתוך, ערכי ה-y שווים:</p>
          <FormulaBox>{"x^2 - 4 = 2x - 1"}</FormulaBox>
          <p>נסדר את המשוואה:</p>
          <FormulaBox>{"x^2 - 2x - 3 = 0"}</FormulaBox>
          <p>נפתור באמצעות הנוסחה הריבועית או פירוק לגורמים:</p>
          <FormulaBox>{"(x - 3)(x + 1) = 0"}</FormulaBox>
          <p>פתרונות: x = 3 או x = -1</p>
          <p>נציב בישר למציאת ערכי y:</p>
          <p>עבור x = 3: y = 2(3) - 1 = 5 → נקודה (3, 5)</p>
          <p>עבור x = -1: y = 2(-1) - 1 = -3 → נקודה (-1, -3)</p>
          <p><strong>נקודות החיתוך: (3, 5) ו-(-1, -3)</strong></p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'קבע כמה נקודות חיתוך יש בין הפרבולה y = x² + 1 לבין הישר y = x + 2.',
      correctAnswer: 'שתי נקודות חיתוך',
      placeholder: 'רשום את מספר נקודות החיתוך',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשווה בין הפונקציות:</p>
          <FormulaBox>{"x^2 + 1 = x + 2"}</FormulaBox>
          <FormulaBox>{"x^2 - x - 1 = 0"}</FormulaBox>
          <p>נבדוק את הדיסקרימיננטה:</p>
          <FormulaBox>{"\\Delta = b^2 - 4ac = (-1)^2 - 4(1)(-1) = 1 + 4 = 5"}</FormulaBox>
          <p>מכיוון ש-Δ &gt; 0, יש שני פתרונות ממשיים שונים.</p>
          <p><strong>התשובה: שתי נקודות חיתוך</strong></p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'מצא את הערכים של k שעבורם הישר y = kx + 1 משיק לפרבולה y = x² - 2x + 3.',
      correctAnswer: 'k = 0 או k = -4',
      placeholder: 'רשום את ערכי k',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>במקרה של משיק, יש נקודת חיתוך יחידה, כלומר הדיסקרימיננטה = 0.</p>
          <p>נשווה: x² - 2x + 3 = kx + 1</p>
          <FormulaBox>{"x^2 - (2+k)x + 2 = 0"}</FormulaBox>
          <p>הדיסקרימיננטה:</p>
          <FormulaBox>{"\\Delta = (2+k)^2 - 4(1)(2) = 0"}</FormulaBox>
          <FormulaBox>{"(2+k)^2 = 8"}</FormulaBox>
          <FormulaBox>{"2+k = \\pm 2\\sqrt{2}"}</FormulaBox>
          <FormulaBox>{"k = -2 \\pm 2\\sqrt{2}"}</FormulaBox>
          <p><strong>ערכי k: k = -2 + 2√2 או k = -2 - 2√2</strong></p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מה קורה כאשר הדיסקרימיננטה של משוואת החיתוך שלילית?',
      options: [
        'יש שתי נקודות חיתוך',
        'יש נקודת חיתוך אחת',
        'אין נקודות חיתוך',
        'הישר משיק לפרבולה'
      ],
      correctAnswer: 'אין נקודות חיתוך',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <p>כאשר הדיסקרימיננטה שלילית, אין פתרונות ממשיים למשוואה הריבועית, ולכן אין נקודות חיתוך בין הישר לפרבולה.</p>
        </div>
      )
    },
    {
      id: 'q2',
      question: 'במקרה של משיק, מה הערך של הדיסקרימיננטה?',
      options: [
        'חיובי',
        'שלילי',
        'אפס',
        'לא קיים'
      ],
      correctAnswer: 'אפס',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <p>כאשר הישר משיק לפרבולה, יש נקודת חיתוך יחידה (כפולה), מה שאומר שהדיסקרימיננטה שווה לאפס.</p>
        </div>
      )
    }
  ];

  return (
    <LessonLayout
      lessonId={lessonId}
      lessonTitle="MAHAT - נושא 8.3: חיתוך קו ישר ופרבולה"
      nextLessonPath={nextLessonPath}
    >
      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">חיתוך קו ישר ופרבולה</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">מבוא לשיעור</h3>
          <p className="text-gray-700 leading-relaxed">
            בשיעור זה נלמד כיצד למצוא נקודות החיתוך בין קו ישר לפרבולה. זהו נושא מרכזי בגיאומטריה אנליטית 
            המשלב את הידע שלנו על פונקציות קוויות ופונקציות ריבועיות. נבין מתי יש חיתוך, מתי אין, ומתי 
            הישר משיק לפרבולה.
          </p>
        </div>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>מציאת נקודות חיתוך:</strong> נלמד לפתור מערכת משוואות של ישר ופרבולה</li>
            <li><strong>ניתוח מספר הפתרונות:</strong> נבין מתי יש 0, 1 או 2 נקודות חיתוך</li>
            <li><strong>זיהוי משיק:</strong> נלמד לזהות מתי ישר משיק לפרבולה</li>
            <li><strong>שימוש בדיסקרימיננטה:</strong> נבין כיצד הדיסקרימיננטה קובעת את מספר הפתרונות</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: שיטת הפתרון הכללית</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">השלבים למציאת נקודות החיתוך:</h4>
            
            <ol className="list-decimal list-inside space-y-3 mr-4">
              <li><strong>הגדרת המשוואות:</strong>
                <p>ישר: y = ax + b</p>
                <p>פרבולה: y = cx² + dx + e</p>
              </li>
              
              <li><strong>השוואה:</strong>
                <p>בנקודות החיתוך, ערכי ה-y שווים:</p>
                <FormulaBox>{"ax + b = cx^2 + dx + e"}</FormulaBox>
              </li>
              
              <li><strong>סידור למשוואה ריבועית:</strong>
                <FormulaBox>{"cx^2 + (d-a)x + (e-b) = 0"}</FormulaBox>
              </li>
              
              <li><strong>פתרון המשוואה הריבועית:</strong>
                <p>באמצעות הנוסחה הריבועית או פירוק לגורמים</p>
              </li>
              
              <li><strong>מציאת ערכי y:</strong>
                <p>הצבת ערכי x באחת המשוואות המקוריות</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: ניתוח מספר הפתרונות</h3>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">הדיסקרימיננטה קובעת את מספר נקודות החיתוך:</h4>
            
            <div className="space-y-4">
              <div className="border-r-4 border-green-300 pr-4">
                <h5 className="font-semibold text-green-700">Δ &gt; 0 (דיסקרימיננטה חיובית):</h5>
                <p>שתי נקודות חיתוך שונות</p>
                <p>הישר חותך את הפרבולה בשתי נקודות</p>
              </div>
              
              <div className="border-r-4 border-blue-300 pr-4">
                <h5 className="font-semibold text-blue-700">Δ = 0 (דיסקרימיננטה אפס):</h5>
                <p>נקודת חיתוך אחת (כפולה)</p>
                <p>הישר משיק לפרבולה</p>
              </div>
              
              <div className="border-r-4 border-red-300 pr-4">
                <h5 className="font-semibold text-red-700">Δ &lt; 0 (דיסקרימיננטה שלילית):</h5>
                <p>אין נקודות חיתוך</p>
                <p>הישר והפרבולה לא נפגשים</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 3: מקרה מיוחד - משיק לפרבולה</h3>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">מציאת משיק לפרבולה:</h4>
            
            <p className="text-gray-700 mb-3">
              כאשר רוצים למצוא ישר שמשיק לפרבולה בנקודה נתונה או עם שיפוע נתון, אנו דורשים 
              שהדיסקרימיננטה תהיה אפס.
            </p>
            
            <div className="bg-white p-3 rounded border">
              <p><strong>דוגמה:</strong></p>
              <p>מצא את ערכי k שעבורם הישר y = kx + 1 משיק לפרבולה y = x² - 2x + 3.</p>
              <p><strong>פתרון:</strong> נדרוש Δ = 0 ונפתור עבור k.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">תרגול מעשי</h3>
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <Exercise key={exercise.id} {...exercise} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">נקודות מפתח לזכירה:</h4>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>שיטת הפתרון:</strong> השוואה בין המשוואות ← משוואה ריבועית ← פתרון</li>
              <li><strong>דיסקרימיננטה חיובית:</strong> שתי נקודות חיתוך</li>
              <li><strong>דיסקרימיננטה אפס:</strong> משיק (נקודת חיתוך יחידה)</li>
              <li><strong>דיסקרימיננטה שלילית:</strong> אין חיתוך</li>
              <li><strong>הצבה:</strong> תמיד הציבו x בחזרה למציאת y</li>
              <li><strong>בדיקה:</strong> ודאו שהנקודות מקיימות את שתי המשוואות</li>
            </ul>
          </div>
        </section>

        <Quiz 
          questions={quizQuestions} 
          lessonId={lessonId}
          title="בחן את עצמך - חיתוך קו ישר ופרבולה"
        />
      </div>
    </LessonLayout>
  );
};

export default Mahat83LineParabola;
