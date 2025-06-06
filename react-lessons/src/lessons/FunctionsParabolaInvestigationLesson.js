import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';
import ProgressSection from '../components/ProgressSection';

const FunctionsParabolaInvestigationLesson = () => {
  const lessonId = 'functions_parabola_investigation_35381';
  const nextLessonPath = '/growth-decay';

  const exercises = [
    {
      id: 'ex1',
      question: 'נתונה הפונקציה y = -x² + 6x - 5. מצא את שיעורי קודקוד הפרבולה.',
      correctAnswer: '(3,4)',
      placeholder: 'הכנס תשובה (לדוגמה: (3,4))',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>בפונקציה <FormulaBox inline>y = -x^2 + 6x - 5</FormulaBox>, המקדמים הם: <FormulaBox inline>a=-1, b=6, c=-5</FormulaBox>.</p>
          <p>שיעור ה-X של הקודקוד: <FormulaBox inline>{"x_k = -\\frac{b}{2a} = -\\frac{6}{2 \\cdot (-1)} = -\\frac{6}{-2} = 3"}</FormulaBox>.</p>
          <p>שיעור ה-Y של הקודקוד: <FormulaBox inline>y_k = -(3)^2 + 6(3) - 5 = -9 + 18 - 5 = 4</FormulaBox>.</p>
          <p>לכן, קודקוד הפרבולה הוא <FormulaBox inline>(3,4)</FormulaBox>.</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'נתונה הפונקציה y = 2x² - 4x + 3. מצא את נקודת החיתוך עם ציר Y.',
      correctAnswer: '(0,3)',
      placeholder: 'הכנס תשובה (לדוגמה: (0,3))',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>חיתוך עם ציר Y מתקבל כאשר <FormulaBox inline>x = 0</FormulaBox>.</p>
          <p>נציב <FormulaBox inline>x = 0</FormulaBox> בפונקציה:</p>
          <p><FormulaBox inline>y = 2(0)^2 - 4(0) + 3 = 0 - 0 + 3 = 3</FormulaBox></p>
          <p>לכן, נקודת החיתוך עם ציר Y היא <FormulaBox inline>(0,3)</FormulaBox>.</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'בפונקציה y = 2x² - 8x + 1, האם לקודקוד הפרבולה יש נקודת מינימום או מקסימום?',
      options: [
        { value: 'min', label: 'מינימום' },
        { value: 'max', label: 'מקסימום' }
      ],
      correctAnswer: 'min'
    },
    {
      id: 'q2',
      question: 'מהי נקודת החיתוך עם ציר ה-Y של הפונקציה y = x² + 3x - 7?',
      options: [
        { value: 'a', label: '(0,7)' },
        { value: 'b', label: '(0,-7)' },
        { value: 'c', label: '(7,0)' },
        { value: 'd', label: '(-7,0)' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q3',
      question: 'מה קורה כאשר הדיסקרימיננטה Δ < 0 בפונקציה ריבועית עם a > 0?',
      options: [
        { value: 'a', label: 'שתי נקודות חיתוך עם ציר X' },
        { value: 'b', label: 'נקודת חיתוך אחת עם ציר X' },
        { value: 'c', label: 'אין נקודות חיתוך עם ציר X' },
        { value: 'd', label: 'הפרבולה הופכת למעלה' }
      ],
      correctAnswer: 'c'
    }
  ];

  return (
    <LessonLayout 
      title="חקירת פונקציה ריבועית (פרבולה) - שאלון 35381"
      lessonId={lessonId}
      nextLessonPath={nextLessonPath}
    >
      {/* Learning Section */}
      <section id="learn" aria-labelledby="learn-heading" className="mb-12">
        <h2 id="learn-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: חקירת פונקציה ריבועית 📊
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>בשיעור זה נלמד לחקור פונקציה ריבועית, הידועה גם בשם פרבולה. נכיר את התכונות המרכזיות של הפרבולה וכיצד לשרטט אותה.</p>
          <p>הצורה הכללית של פונקציה ריבועית היא <FormulaBox inline>y = ax^2 + bx + c</FormulaBox>, כאשר <FormulaBox inline>a \\neq 0</FormulaBox>.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. נקודת קודקוד הפרבולה וציר הסימטריה</h3>
          <p>לקודקוד הפרבולה יש שיעור <FormulaBox inline>{"x_k = -\\frac{b}{2a}"}</FormulaBox>. כדי למצוא את שיעור ה-<FormulaBox inline>y_k</FormulaBox> של הקודקוד, מציבים את <FormulaBox inline>x_k</FormulaBox> בפונקציה.</p>
          <p>ציר הסימטריה של הפרבולה הוא ישר אנכי העובר דרך הקודקוד, ומשוואתו <FormulaBox inline>x = x_k</FormulaBox>.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-4 border rounded-md bg-gray-50">
              <p className="text-center font-medium mb-2">פרבולה "צוחקת" (<FormulaBox inline>{"a > 0"}</FormulaBox>) - נקודת מינימום</p>
              <div className="bg-white p-4 rounded border text-center">
                <p className="text-sm text-gray-600">📈 פתח כלפי מעלה</p>
                <p className="text-sm">הקודקוד הוא נקודת המינימום</p>
              </div>
            </div>            <div className="p-4 border rounded-md bg-gray-50">
              <p className="text-center font-medium mb-2">פרבולה "בוכה" (<FormulaBox inline>{"a < 0"}</FormulaBox>) - נקודת מקסימום</p>
              <div className="bg-white p-4 rounded border text-center">
                <p className="text-sm text-gray-600">📉 פתח כלפי מטה</p>
                <p className="text-sm">הקודקוד הוא נקודת המקסימום</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. נקודות חיתוך עם הצירים</h3>
          <ul className="list-disc pr-5 space-y-2">
            <li>
              <strong>חיתוך עם ציר Y:</strong> מתקבל כאשר <FormulaBox inline>x = 0</FormulaBox>. 
              מציבים <FormulaBox inline>x = 0</FormulaBox> בפונקציה ומקבלים <FormulaBox inline>y = c</FormulaBox>. 
              נקודת החיתוך היא <FormulaBox inline>(0,c)</FormulaBox>.
            </li>
            <li>
              <strong>חיתוך עם ציר X:</strong> מתקבל כאשר <FormulaBox inline>y = 0</FormulaBox>. 
              מציבים <FormulaBox inline>y = 0</FormulaBox> ופותרים את המשוואה הריבועית <FormulaBox inline>ax^2 + bx + c = 0</FormulaBox>.
              מספר הפתרונות (נקודות החיתוך) נקבע לפי הדיסקרימיננטה <FormulaBox inline>\\Delta = b^2 - 4ac</FormulaBox>:
              <ul className="list-[circle] pr-5 space-y-1 mt-2">
                <li>אם <FormulaBox inline>{"\\Delta > 0"}</FormulaBox>: שתי נקודות חיתוך שונות עם ציר X.</li>
                <li>אם <FormulaBox inline>\\Delta = 0</FormulaBox>: נקודת חיתוך אחת עם ציר X (הקודקוד מונח על ציר X).</li>
                <li>אם <FormulaBox inline>{"\\Delta < 0"}</FormulaBox>: אין נקודות חיתוך עם ציר X (הפרבולה "מרחפת" כולה מעל או מתחת לציר X).</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">3. השפעת הדיסקרימיננטה על גרף הפרבולה</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 border rounded-md bg-blue-50">
              <p className="text-center font-medium mb-2"><FormulaBox inline>{"\\Delta > 0"}</FormulaBox></p>
              <p className="text-sm text-center">שני פתרונות - שתי נקודות חיתוך עם ציר X</p>
            </div>
            <div className="p-4 border rounded-md bg-yellow-50">
              <p className="text-center font-medium mb-2"><FormulaBox inline>\\Delta = 0</FormulaBox></p>
              <p className="text-sm text-center">פתרון אחד - הקודקוד על ציר X</p>
            </div>
            <div className="p-4 border rounded-md bg-red-50">
              <p className="text-center font-medium mb-2"><FormulaBox inline>{"\\Delta < 0"}</FormulaBox></p>
              <p className="text-sm text-center">אין פתרונות - הפרבולה לא חותכת את ציר X</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה מפורטה</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium"><strong>בעיה:</strong> חקור את הפונקציה <FormulaBox inline>y = -x^2 + 4x - 3</FormulaBox></p>
            <p><strong>פתרון:</strong></p>
            
            <p><strong>א. זיהוי מקדמים:</strong> <FormulaBox inline>a = -1, b = 4, c = -3</FormulaBox></p>
            
            <p><strong>ב. קודקוד הפרבולה:</strong></p>
            <p>שיעור X של הקודקוד: <FormulaBox inline>{"x_k = -\\frac{b}{2a} = -\\frac{4}{2(-1)} = 2"}</FormulaBox></p>
            <p>שיעור Y של הקודקוד: <FormulaBox inline>y_k = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1</FormulaBox></p>
            <p>הקודקוד: <FormulaBox inline>(2,1)</FormulaBox></p>
            
            <p><strong>ג. נקודות חיתוך:</strong></p>
            <p>עם ציר Y: כאשר <FormulaBox inline>x = 0</FormulaBox> ← <FormulaBox inline>y = -3</FormulaBox> ← נקודה: <FormulaBox inline>(0,-3)</FormulaBox></p>
            <p>עם ציר X: פותרים <FormulaBox inline>-x^2 + 4x - 3 = 0</FormulaBox></p>
            <p>דיסקרימיננטה: <FormulaBox inline>{"\\Delta = 16 - 12 = 4 > 0"}</FormulaBox> ← שתי נקודות חיתוך</p>
            
            <p><strong>ד. סוג הפרבולה:</strong> מאחר ש-<FormulaBox inline>{"a = -1 < 0"}</FormulaBox>, הפרבולה "בוכה" והקודקוד הוא נקודת מקסימום.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">טיפים לחקירה</h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>תמיד התחל בזיהוי המקדמים a, b, c</li>
            <li>זכור: a קובע את כיוון הפתיחה (מעלה/מטה)</li>
            <li>המקדם a גם משפיע על "רוחב" הפרבולה</li>
            <li>הדיסקרימיננטה קובעת כמה פתרונות יש למשוואה</li>
            <li>ציר הסימטריה תמיד עובר דרך הקודקוד</li>
          </ul>
        </div>
      </section>

      {/* Practice Section */}
      <section id="practice" aria-labelledby="practice-heading" className="mb-12">
        <h2 id="practice-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} {...exercise} />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" aria-labelledby="quiz-heading" className="mb-12">
        <h2 id="quiz-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          בחן את עצמך 🧠
        </h2>
        <Quiz questions={quizQuestions} lessonId={lessonId} />
      </section>

      {/* Progress Section */}
      <ProgressSection lessonId={lessonId} />
    </LessonLayout>
  );
};

export default FunctionsParabolaInvestigationLesson;
