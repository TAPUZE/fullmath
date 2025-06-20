import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat74ImplicitFunction = () => {
  const lessonId = 'mahat-7-4-implicit-function';
  const nextLessonPath = '/lessons/mahat-7-5-complex-geometry';

  const exercises = [
    {
      id: 'ex1',
      question: 'העבר את המשוואה 2x + 3y = 12 לצורה מפורשת (y = ...).',
      correctAnswer: 'y = 4 - (2/3)x',
      placeholder: 'הזן את הצورה המפורשת',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>משוואה סתומה:</strong> 2x + 3y = 12</p>
          <p><strong>שלב 1:</strong> נחסר 2x משני האגפים</p>
          <p>3y = 12 - 2x</p>
          <p><strong>שלב 2:</strong> נחלק את שני האגפים ב-3</p>
          <p>y = (12 - 2x)/3</p>
          <p><strong>שלב 3:</strong> נפשט</p>
          <p>y = 12/3 - 2x/3 = 4 - (2/3)x</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מצא את נקודות החיתוך של x² + y² = 25 עם הישר y = 3.',
      correctAnswer: '(4,3) ו-(-4,3)',
      placeholder: 'הזן את שתי הנקודות',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נציב y = 3 במשוואה:</strong></p>
          <p>x² + 3² = 25</p>
          <p>x² + 9 = 25</p>
          <p>x² = 16</p>
          <p>x = ±4</p>
          <p><strong>נקודות החיתוך:</strong> (4,3) ו-(-4,3)</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'בגרף של המשוואה x + 2y = 6, מהן נקודות החיתוך עם הצירים?',
      correctAnswer: '(6,0) ו-(0,3)',
      placeholder: 'הזן את הנקודות',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>חיתוך עם ציר x (y = 0):</strong></p>
          <p>x + 2(0) = 6 → x = 6 → נקודה (6,0)</p>
          <p><strong>חיתוך עם ציר y (x = 0):</strong></p>
          <p>0 + 2y = 6 → y = 3 → נקודה (0,3)</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'איזו מהמשוואות הבאות היא בצורה סתומה?',
      options: [
        'y = 2x + 5',
        'y = x²',
        '3x - 4y = 12',
        'y = √x'
      ],
      correctAnswer: 2,
      explanation: 'משוואה סתומה היא משוואה בה שני המשתנים x ו-y מופיעים באותו אגף, כמו 3x - 4y = 12.'
    },
    {
      id: 'q2',
      question: 'מה הצורה המפורשת של המשוואה 5x + 2y = 10?',
      options: [
        'y = 5 - 2.5x',
        'y = 5 - (5/2)x',
        'y = 2 - (5/2)x',
        'x = 2 - (2/5)y'
      ],
      correctAnswer: 1,
      explanation: '5x + 2y = 10 → 2y = 10 - 5x → y = 5 - (5/2)x'
    },
    {
      id: 'q3',
      question: 'איך פותרים גרפית מערכת של שתי משוואות?',
      options: [
        'מחפשים את נקודות החיתוך של הגרפים',
        'מחפשים את השיפוע של כל גרף',
        'מחפשים את נקודות החיתוך עם הצירים',
        'מחפשים את הקודקוד של כל גרף'
      ],
      correctAnswer: 0,
      explanation: 'פתרון גרפי של מערכת משוואות הוא נקודות החיתוך של הגרפים המתאימים.'
    },
    {
      id: 'q4',
      question: 'מהי נקודת החיתוך של הישרים y = x + 2 ו-y = -x + 4?',
      options: [
        '(1, 3)',
        '(2, 4)',
        '(0, 2)',
        '(3, 1)'
      ],
      correctAnswer: 0,
      explanation: 'נשווה: x + 2 = -x + 4 → 2x = 2 → x = 1, y = 1 + 2 = 3. הנקודה היא (1, 3).'
    }
  ];

  return (
    <LessonLayout
      lessonId={lessonId}
      title="7.4 פונקציה סתומה ופתרון גרפי"
      description="מעבר מצורה סתומה למפורשת ופתרון גרפי של מערכות משוואות"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>הבנת ההבדל בין פונקציה מפורשת לסתומה</li>
          <li>מעבר מצורה סתומה לצורה מפורשת</li>
          <li>פתרון גרפי של מערכות משוואות</li>
          <li>זיהוי נקודות חיתוך בין עקומות שונות</li>
          <li>הבנת הקשר בין פתרון אלגברי לגרפי</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">פונקציה מפורשת לעומת סתומה</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">פונקציה מפורשת:</h4>
            <p className="mb-2">פונקציה בה y מבודד בצד שמאל:</p>
            <FormulaBox formula="y = f(x)" />
            <p className="text-sm text-gray-600 mt-2">דוגמאות: y = 2x + 3, y = x², y = √x</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">פונקציה סתומה:</h4>
            <p className="mb-2">משוואה בה x ו-y מופיעים יחד באותו אגף:</p>
            <FormulaBox formula="F(x,y) = 0" />
            <p className="text-sm text-gray-600 mt-2">דוגמאות: 2x + 3y = 6, x² + y² = 25, xy = 12</p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-green-700">מעבר מצורה סתומה למפורשת</h3>
          
          <p className="mb-3"><strong>שלבי המעבר:</strong></p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>העבר את כל האיברים שמכילים y לצד שמאל</li>
            <li>העבר את השאר לצד ימין</li>
            <li>בודד את y (חלק או הוצא שורש לפי הצורך)</li>
          </ol>

          <div className="bg-white p-4 rounded border-l-4 border-green-400">
            <p><strong>דוגמה:</strong></p>
            <p>3x + 2y = 12 → 2y = 12 - 3x → y = 6 - (3/2)x</p>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">פתרון גרפי של מערכות</h3>
          
          <p className="mb-3">פתרון גרפי של מערכת משוואות מתבצע על ידי:</p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>שרטוט הגרף של כל משוואה בנפרד</li>
            <li>מציאת נקודות החיתוך של הגרפים</li>
            <li>קריאת הקואורדינטות של נקודות החיתוך</li>
          </ol>

          <div className="bg-white p-4 rounded border-l-4 border-purple-400">
            <p><strong>סוגי פתרונות:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>פתרון יחיד:</strong> הגרפים נחתכים בנקודה אחת</li>
              <li><strong>אין פתרון:</strong> הגרפים לא נחתכים (קווים מקבילים)</li>
              <li><strong>אינסוף פתרונות:</strong> הגרפים זהים (חופפים)</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-yellow-700">סוגי עקומות נפוצות</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">קו ישר:</h4>
              <FormulaBox formula="ax + by = c" />
              <p className="text-sm">או y = mx + n</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">מעגל:</h4>
              <FormulaBox formula="x^2 + y^2 = r^2" />
              <p className="text-sm">רדיוס r, מרכז בראשית</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">פרבולה:</h4>
              <FormulaBox formula="y = ax^2 + bx + c" />
              <p className="text-sm">או x² + y² + Dx + Ey = F</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">היפרבולה:</h4>
              <FormulaBox formula="xy = k" />
              <p className="text-sm">k קבוע</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תרגילים</h2>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Exercise key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">בוחן</h2>
        <Quiz questions={quizQuestions} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">סיכום</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>פונקציה מפורשת:</strong> y מבודד בצד אחד (y = f(x))</li>
            <li><strong>פונקציה סתומה:</strong> x ו-y מופיעים יחד באותו אגף</li>
            <li><strong>מעבר לצורה מפורשת:</strong> בידוד y על ידי פעולות אלגבריות</li>
            <li><strong>פתרון גרפי:</strong> נקודות חיתוך של גרפים הן פתרונות המערכת</li>
            <li><strong>אימות פתרון:</strong> הצבה של הנקודה בשתי המשוואות</li>
            <li><strong>יישומים:</strong> מציאת חיתוכים בין עקומות שונות בגיאומטריה אנליטית</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat74ImplicitFunction;
