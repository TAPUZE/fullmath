import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat81QuadraticIntro = () => {
  const lessonId = 'mahat-8-1-quadratic-intro';
  const nextLessonPath = '/lessons/mahat-8-2-parabola-analysis';

  const exercises = [
    {
      id: 'ex1',
      question: 'לפונקציה f(x) = 2x² - 8x + 6, מצא את הקודקוד והצגה קונונית.',
      correctAnswer: 'קודקוד: (2, -2), צורה קונונית: f(x) = 2(x-2)² - 2',
      placeholder: 'הזן את הקודקוד והצורה הקונונית',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - מציאת הקודקוד:</strong></p>
          <p>x של הקודקוד: x = -b/(2a) = -(-8)/(2×2) = 8/4 = 2</p>
          <p>y של הקודקוד: f(2) = 2(2)² - 8(2) + 6 = 8 - 16 + 6 = -2</p>
          <p><strong>קודקוד:</strong> (2, -2)</p>
          <p><strong>שלב 2 - צורה קונונית:</strong></p>
          <p>f(x) = a(x - h)² + k = 2(x - 2)² - 2</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מצא את נקודות החיתוך עם הצירים של f(x) = x² - 5x + 6.',
      correctAnswer: 'ציר x: (2,0), (3,0); ציר y: (0,6)',
      placeholder: 'הזן את נקודות החיתוך',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>חיתוך עם ציר y (x = 0):</strong></p>
          <p>f(0) = 0² - 5(0) + 6 = 6 → נקודה (0, 6)</p>
          <p><strong>חיתוך עם ציר x (y = 0):</strong></p>
          <p>x² - 5x + 6 = 0</p>
          <p>פירוק לגורמים: (x - 2)(x - 3) = 0</p>
          <p>פתרונות: x = 2 או x = 3</p>
          <p><strong>נקודות:</strong> (2, 0) ו-(3, 0)</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'קבע את כיוון הפתיחה של הפרבולה f(x) = -3x² + 6x - 1.',
      correctAnswer: 'פתיחה כלפי מטה (a = -3 < 0)',
      placeholder: 'הזן את כיוון הפתיחה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>בפונקציה f(x) = ax² + bx + c:</strong></p>
          <p>a = -3</p>
          <p><strong>כלל:</strong></p>
          <ul className="list-disc list-inside mt-2">
            <li>אם a &gt; 0 → פתיחה כלפי מעלה</li>
            <li>אם a &lt; 0 → פתיחה כלפי מטה</li>
          </ul>
          <p><strong>מסקנה:</strong> a = -3 &lt; 0, לכן הפרבולה פתוחה כלפי מטה</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מה קובע את כיוון הפתיחה של פרבולה?',
      options: [
        'המקדם של x',
        'המקדם של x²',
        'האיבר החופשי',
        'הדיסקרימיננטה'
      ],
      correctAnswer: 1,
      explanation: 'המקדם של x² (a) קובע את כיוון הפתיחה: a > 0 פתיחה כלפי מעלה, a < 0 פתיחה כלפי מטה.'
    },
    {
      id: 'q2',
      question: 'איך מוצאים את הקודקוד של פרבולה f(x) = ax² + bx + c?',
      options: [
        'x = b/(2a), y = f(x)',
        'x = -b/(2a), y = f(x)',
        'x = c/a, y = b',
        'x = -c/b, y = a'
      ],
      correctAnswer: 1,
      explanation: 'הקודקוד נמצא ב-x = -b/(2a), ולאחר מכן מחשבים y = f(x).'
    },
    {
      id: 'q3',
      question: 'מה מציינת הצורה הקונונית f(x) = a(x-h)² + k?',
      options: [
        'h הוא השיפוע, k הוא החיתוך עם ציר y',
        'h ו-k הם קואורדינטות הקודקוד',
        'h הוא החיתוך עם ציר x, k הוא השיפוע',
        'h ו-k הם החיתוכים עם הצירים'
      ],
      correctAnswer: 1,
      explanation: 'בצורה הקונונית f(x) = a(x-h)² + k, הנקודה (h,k) היא קודקוד הפרבולה.'
    },
    {
      id: 'q4',
      question: 'כמה נקודות חיתוך עם ציר x יכולות להיות לפרבולה?',
      options: [
        'תמיד בדיוק שתיים',
        'תמיד בדיוק אחת',
        '0, 1, או 2',
        'רק אחת או שתיים'
      ],
      correctAnswer: 2,
      explanation: 'לפרבולה יכולות להיות 0, 1, או 2 נקודות חיתוך עם ציר x, תלוי בדיסקרימיננטה.'
    }
  ];

  return (
    <LessonLayout
      lessonId={lessonId}
      title="8.1 מבוא לפונקציה הריבועית"
      description="גרף הפרבולה, הצגה סטנדרטית, קודקוד ונקודות חיתוך"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>הכרת הפונקציה הריבועית והגרף שלה - הפרבולה</li>
          <li>הבנת ההצגות השונות של פונקציה ריבועית</li>
          <li>מציאת קודקוד הפרבולה</li>
          <li>מציאת נקודות החיתוך עם הצירים</li>
          <li>קביעת כיוון פתיחת הפרבולה</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">הפונקציה הריבועית</h3>
          
          <p className="mb-4">פונקציה ריבועית היא פונקציה מהצורה:</p>
          <FormulaBox formula="f(x) = ax^2 + bx + c" />
          <p className="text-sm text-gray-600 mt-2">כאשר a ≠ 0, ו-a, b, c הם מספרים ממשיים</p>
          
          <div className="bg-white p-4 rounded mt-4 border-l-4 border-blue-400">
            <p><strong>מאפיינים בסיסיים:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>תחום הגדרה:</strong> כל המספרים הממשיים (ℝ)</li>
              <li><strong>גרף:</strong> פרבולה</li>
              <li><strong>נקודה מיוחדת:</strong> קודקוד (vertex)</li>
              <li><strong>ציר סימטריה:</strong> ישר אנכי העובר דרך הקודקוד</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-green-700">הצגות של פונקציה ריבועית</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. הצגה סטנדרטית (Standard Form):</h4>
              <FormulaBox formula="f(x) = ax^2 + bx + c" />
              <p className="text-sm text-gray-600">נוחה לקריאת המקדמים ולמציאת חיתוך עם ציר y</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">2. הצגה קונונית (Vertex Form):</h4>
              <FormulaBox formula="f(x) = a(x - h)^2 + k" />
              <p className="text-sm text-gray-600">הקודקוד הוא (h, k) - נוחה לקריאת הקודקוד</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">3. הצגה עצרית (Factored Form):</h4>
              <FormulaBox formula="f(x) = a(x - r_1)(x - r_2)" />
              <p className="text-sm text-gray-600">r₁, r₂ הם השורשים - נוחה לקריאת חיתוכים עם ציר x</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">קודקוד הפרבולה</h3>
          
          <p className="mb-3">הקודקוד הוא הנקודה הנמוכה ביותר (אם a &gt; 0) או הגבוהה ביותר (אם a &lt; 0).</p>
          
          <div className="bg-white p-4 rounded border-l-4 border-purple-400 mb-4">
            <p><strong>נוסחאות מציאת הקודקוד:</strong></p>
            <FormulaBox formula="x_{vertex} = -\frac{b}{2a}" />
            <FormulaBox formula="y_{vertex} = f(x_{vertex}) = f\left(-\frac{b}{2a}\right)" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded">
              <p><strong>אם a &gt; 0:</strong></p>
              <ul className="list-disc list-inside text-sm">
                <li>פתיחה כלפי מעלה</li>
                <li>הקודקוד הוא נקודת מינימום</li>
                <li>ערך מינימלי של הפונקציה</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded">
              <p><strong>אם a &lt; 0:</strong></p>
              <ul className="list-disc list-inside text-sm">
                <li>פתיחה כלפי מטה</li>
                <li>הקודקוד הוא נקודת מקסימום</li>
                <li>ערך מקסימלי של הפונكציה</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-yellow-700">נקודות חיתוך</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">חיתוך עם ציר y:</h4>
              <p className="mb-2">מתקבל כאשר x = 0:</p>
              <FormulaBox formula="f(0) = c" />
              <p className="text-sm text-gray-600">נקודת החיתוך: (0, c)</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">חיתוך עם ציר x:</h4>
              <p className="mb-2">מתקבל כאשר f(x) = 0, כלומר פתרון המשוואה:</p>
              <FormulaBox formula="ax^2 + bx + c = 0" />
              
              <div className="bg-white p-3 rounded mt-3">
                <p><strong>מספר הפתרונות תלוי בדיסקרימיננטה:</strong></p>
                <FormulaBox formula="\Delta = b^2 - 4ac" />
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  <li>Δ &gt; 0: שני חיתוכים (שני שורשים שונים)</li>
                  <li>Δ = 0: חיתוך אחד (שורש כפול - הפרבולה נוגעת בציר)</li>
                  <li>Δ &lt; 0: אין חיתוכים (אין שורשים ממשיים)</li>
                </ul>
              </div>
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
            <li><strong>פונקציה ריבועית:</strong> f(x) = ax² + bx + c כאשר a ≠ 0</li>
            <li><strong>גרף:</strong> פרבולה עם קודקוד וציר סימטריה</li>
            <li><strong>כיוון פתיחה:</strong> נקבע על ידי סימן a (חיובי = מעלה, שלילי = מטה)</li>
            <li><strong>קודקוד:</strong> נקודת הקיצון, מתקבל ב-x = -b/(2a)</li>
            <li><strong>חיתוך עם ציר y:</strong> תמיד הנקודה (0, c)</li>
            <li><strong>חיתוך עם ציר x:</strong> 0, 1, או 2 נקודות לפי הדיסקרימיננטה</li>
            <li><strong>הצגות:</strong> סטנדרטית, קונונית ועצרית - כל אחת מדגישה מאפיין אחר</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat81QuadraticIntro;
