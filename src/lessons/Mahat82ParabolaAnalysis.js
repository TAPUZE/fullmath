import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat82ParabolaAnalysis = () => {
  const lessonId = 'mahat-8-2-parabola-analysis';
  const nextLessonPath = '/lessons/mahat-8-3-line-parabola';

  const exercises = [
    {
      id: 'ex1',
      question: 'לפונקציה f(x) = x² - 6x + 8, מצא את תחומי העלייה והירידה.',
      correctAnswer: 'ירידה: (-∞, 3), עלייה: (3, ∞)',
      placeholder: 'הזן את תחומי העלייה והירידה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - מציאת הקודקוד:</strong></p>
          <p>x = -b/(2a) = -(-6)/(2×1) = 6/2 = 3</p>
          <p><strong>שלב 2 - קביעת כיוון הפתיחה:</strong></p>
          <p>a = 1 &gt; 0 → פתיחה כלפי מעלה</p>
          <p><strong>שלב 3 - תחומי עלייה/ירידה:</strong></p>
          <p>פרבולה פתוחה כלפי מעלה עם קודקוד ב-x = 3:</p>
          <p><strong>תחום ירידה:</strong> (-∞, 3)</p>
          <p><strong>תחום עלייה:</strong> (3, ∞)</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'לפונקציה f(x) = -2x² + 8x - 6, מצא את תחום החיוביות.',
      correctAnswer: '(1, 3)',
      placeholder: 'הזן את תחום החיוביות',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - מציאת השורשים:</strong></p>
          <p>-2x² + 8x - 6 = 0</p>
          <p>חלוקה ב-(-2): x² - 4x + 3 = 0</p>
          <p>פירוק: (x - 1)(x - 3) = 0</p>
          <p>שורשים: x = 1, x = 3</p>
          <p><strong>שלב 2 - קביעת סימן:</strong></p>
          <p>a = -2 &lt; 0 → פרבולה פתוחה כלפי מטה</p>
          <p>הפונקציה חיובית בין השורשים</p>
          <p><strong>תחום חיוביות:</strong> (1, 3)</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'מצא את הערך המקסימלי של f(x) = -x² + 4x + 5.',
      correctAnswer: '9',
      placeholder: 'הזן את הערך המקסימלי',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - זיהוי סוג הקיצון:</strong></p>
          <p>a = -1 &lt; 0 → פרבולה פתוחה כלפי מטה → יש מקסימום</p>
          <p><strong>שלב 2 - מציאת הקודקוד:</strong></p>
          <p>x = -b/(2a) = -4/(2×(-1)) = 4/2 = 2</p>
          <p>y = f(2) = -(2)² + 4(2) + 5 = -4 + 8 + 5 = 9</p>
          <p><strong>הערך המקסימלי:</strong> 9</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מתי פרבולה עולה ומתי יורדת?',
      options: [
        'תלוי בסימן המקדם החופשי',
        'תלוי בסימן המקדם של x',
        'תלוי במיקום הקודקוד וכיוון הפתיחה',
        'תלוי בדיסקרימיננטה'
      ],
      correctAnswer: 2,
      explanation: 'עלייה וירידה תלויות במיקום הקודקוד וכיוון הפתיחה: פרבולה פתוחה כלפי מעלה יורדת עד הקודקוד ועולה אחריו.'
    },
    {
      id: 'q2',
      question: 'מה קובע את תחום החיוביות של פרבולה?',
      options: [
        'מיקום הקודקוד בלבד',
        'מיקום השורשים וכיוון הפתיחה',
        'רק השורשים',
        'רק כיוון הפתיחה'
      ],
      correctAnswer: 1,
      explanation: 'תחום החיוביות נקבע על ידי מיקום השורשים (חיתוכים עם ציר x) וכיוון הפתיחה.'
    },
    {
      id: 'q3',
      question: 'מתי לפרבולה יש ערך מינימלי?',
      options: [
        'כשהיא פתוחה כלפי מטה',
        'כשהיא פתוחה כלפי מעלה',
        'כשיש לה שני שורשים',
        'כשהקודקוד על ציר x'
      ],
      correctAnswer: 1,
      explanation: 'פרבולה פתוחה כלפי מעלה (a > 0) יש לה ערך מינימלי בקודקוד.'
    },
    {
      id: 'q4',
      question: 'איך מוצאים את תחום השליליות של פרבולה?',
      options: [
        'מחפשים איפה הפונקציה קטנה מאפס',
        'מחפשים איפה הפונקציה גדולה מאפס',
        'מחפשים את הקודקוד',
        'מחפשים את השורשים'
      ],
      correctAnswer: 0,
      explanation: 'תחום השליליות הוא כל הערכים של x שבהם f(x) < 0.'
    }
  ];

  return (
    <LessonLayout
      lessonId={lessonId}
      title="8.2 חקירת פרבולה"
      description="תחומי עלייה/ירידה, חיוביות/שליליות וערכי קיצון"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>חקירת תחומי עלייה וירידה של פרבולה</li>
          <li>מציאת תחומי חיוביות ושליליות</li>
          <li>קביעת ערכי מקסימום ומינימום</li>
          <li>קריאת מידע מגרף הפרבולה</li>
          <li>יישום חקירה לפתרון בעיות מילוליות</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">תחומי עלייה וירידה</h3>
          
          <p className="mb-4">תחומי עלייה וירידה של פרבולה נקבעים על ידי הקודקוד וכיוון הפתיחה:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border-l-4 border-green-400">
              <h4 className="font-semibold mb-2 text-green-600">פרבולה פתוחה כלפי מעלה (a &gt; 0):</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>ירידה:</strong> (-∞, x₀) כאשר x₀ הוא x של הקודקוד</li>
                <li><strong>עלייה:</strong> (x₀, ∞)</li>
                <li><strong>נקודת מינימום:</strong> הקודקוד</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-red-400">
              <h4 className="font-semibold mb-2 text-red-600">פרבולה פתוחה כלפי מטה (a &lt; 0):</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>עלייה:</strong> (-∞, x₀) כאשר x₀ הוא x של הקודקוד</li>
                <li><strong>ירידה:</strong> (x₀, ∞)</li>
                <li><strong>נקודת מקסימום:</strong> הקודקוד</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-green-700">תחומי חיוביות ושליליות</h3>
          
          <p className="mb-4">תחומי חיוביות ושליליות נקבעים על ידי השורשים וכיוון הפתיחה:</p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded">
              <h4 className="font-semibold mb-2">שלב 1: מציאת השורשים</h4>
              <p className="text-sm">פתרון המשוואה ax² + bx + c = 0</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li><strong>שני שורשים:</strong> x₁, x₂ (נניח x₁ &lt; x₂)</li>
                <li><strong>שורש יחיד:</strong> x₀ (שורש כפול)</li>
                <li><strong>אין שורשים:</strong> הפונקציה לא מחליפה סימן</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded">
              <h4 className="font-semibold mb-2">שלב 2: קביעת סימן לפי כיוון הפתיחה</h4>
              
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="border-l-4 border-blue-400 pl-3">
                  <p className="font-semibold text-blue-600">פתיחה כלפי מעלה (a &gt; 0):</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>חיובי: (-∞, x₁) ∪ (x₂, ∞)</li>
                    <li>שלילי: (x₁, x₂)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-3">
                  <p className="font-semibold text-purple-600">פתיחה כלפי מטה (a &lt; 0):</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>שלילי: (-∞, x₁) ∪ (x₂, ∞)</li>
                    <li>חיובי: (x₁, x₂)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">ערכי קיצון</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-purple-400">
              <h4 className="font-semibold mb-2">מציאת ערכי קיצון:</h4>
              <p className="mb-2">הקודקוד הוא תמיד נקודת הקיצון של הפרבולה:</p>
              <FormulaBox formula="x_{vertex} = -\frac{b}{2a}, \quad y_{vertex} = f(x_{vertex})" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <h5 className="font-semibold text-green-600 mb-2">ערך מינימום:</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>קיים כאשר a &gt; 0</li>
                  <li>הערך: y של הקודकוד</li>
                  <li>מתקבל ב-x של הקודקוד</li>
                  <li>הפונקציה לא יורדת מתחת לערך זה</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h5 className="font-semibold text-red-600 mb-2">ערך מקסימום:</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>קיים כאשר a &lt; 0</li>
                  <li>הערך: y של הקודקוד</li>
                  <li>מתקבל ב-x של הקודקוד</li>
                  <li>הפונקציה לא עולה מעל הערך זה</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-yellow-700">סיכום שיטת החקירה</h3>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded">
              <h4 className="font-semibold mb-2">שלבי חקירה מלאה של פרבולה:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>זיהוי מקדמים:</strong> a, b, c מהצורה ax² + bx + c</li>
                <li><strong>כיוון פתיחה:</strong> לפי סימן a</li>
                <li><strong>מציאת קודקוד:</strong> x = -b/(2a), y = f(x)</li>
                <li><strong>נקודות חיתוך עם צירים:</strong> (0,c) ופתרון ax² + bx + c = 0</li>
                <li><strong>תחומי עלייה/ירידה:</strong> לפי מיקום הقודקוד</li>
                <li><strong>תחומי חיוביות/שליליות:</strong> לפי השורשים וכיוון הפתיחה</li>
                <li><strong>ערכי קיצון:</strong> y של הקודקוד (מינימום/מקסימום)</li>
              </ol>
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
            <li><strong>עלייה וירידה:</strong> נקבעות על ידי הקודקוד - פרבולה "משנה כיוון" בקודקוד</li>
            <li><strong>חיוביות ושליליות:</strong> נקבעות על ידי השורשים וכיוון הפתיחה</li>
            <li><strong>ערכי קיצון:</strong> תמיד בקודקוד - מינימום אם a &gt; 0, מקסימום אם a &lt; 0</li>
            <li><strong>קריאה גרפית:</strong> ניתן לקרוא את כל המידע מהגרף</li>
            <li><strong>יישומים:</strong> אופטימיזציה, בעיות מקסימום/מינימום במציאות</li>
            <li><strong>קשר לפיזיקה:</strong> מסלולים, תנועה פרבולית, אנרגיה</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat82ParabolaAnalysis;
