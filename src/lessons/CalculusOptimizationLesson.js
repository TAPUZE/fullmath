import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const CalculusOptimizationLesson = () => {
  const lessonId = 'calculus_optimization_he';
  const nextLessonPath = '/lesson/calculus-integral-polynomial';

  const exercises = [
    {
      id: 'ex1',
      question: 'מצא את המקסימום של הפונקציה f(x) = -x² + 4x + 5 בתחום הממשיים.',
      correctAnswer: '9',
      placeholder: 'הכנס ערך מקסימלי',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>          <p>1. נגזרת: <FormulaBox inline>f'(x) = -2x + 4</FormulaBox></p>
          <p>2. נקודת קיצון: <FormulaBox inline>{"-2x + 4 = 0 \\Rightarrow x = 2"}</FormulaBox></p>
          <p>3. ערך הפונקציה: <FormulaBox inline>f(2) = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9</FormulaBox></p>
          <p>4. מאחר שמקדם <FormulaBox inline>x^2</FormulaBox> שלילי, זהו מקסימום.</p>
        </div>
      )
    }
  ];  const quizQuestions = [
    {
      id: 'q1',
      question: 'מתי פונקציה f(x) = ax² + bx + c (כאשר a < 0) מגיעה למקסימום?',
      options: [
        { value: 'a', label: <FormulaBox inline>{"x = -\\frac{b}{2a}"}</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>{"x = \\frac{b}{2a}"}</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>{"x = -\\frac{a}{2b}"}</FormulaBox> },
        { value: 'd', label: <FormulaBox inline>{"x = \\frac{a}{2b}"}</FormulaBox> }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q2',
      question: 'מהו תנאי הכרחי לקיום נקודת קיצון פנימית?',
      options: [
        { value: 'a', label: <FormulaBox inline>f(x) = 0</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>f'(x) = 0</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>f''(x) = 0</FormulaBox> },
        { value: 'd', label: <FormulaBox inline>f''(x) &gt; 0</FormulaBox> }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q3',
      question: 'עבור הפונקציה f(x) = x³ - 3x² + 2, מהן נקודות החשד לקיצון?',
      options: [
        { value: 'a', label: 'x = 0, x = 2' },
        { value: 'b', label: 'x = 1, x = 3' },
        { value: 'c', label: 'x = -1, x = 2' },
        { value: 'd', label: 'x = 0, x = 3' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q4',
      question: 'במבחן הנגזרת השנייה, אם f\'\'(x₀) > 0 ו-f\'(x₀) = 0, אז x₀ הוא:',
      options: [
        { value: 'a', label: 'נקודת מקסימום מקומי' },
        { value: 'b', label: 'נקודת מינימום מקומי' },
        { value: 'c', label: 'נקודת פיתול' },
        { value: 'd', label: 'לא ניתן לקבוע' }
      ],
      correctAnswer: 'b'
    }
  ];

  return (
    <LessonLayout 
      title="בעיות אופטימיזציה (חדו״א)"
      lessonId={lessonId}
      nextLessonPath={nextLessonPath}
    >
      {/* Learning Section */}
      <section id="learn" aria-labelledby="learn-heading" className="mb-12">
        <h2 id="learn-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: מציאת נקודות קיצון ואופטימיזציה 📊
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>בעיות אופטימיזציה עוסקות במציאת ערכים מקסימליים או מינימליים של פונקציות. נושא זה חיוני ביישומים רבים במתמטיקה, פיזיקה וכלכלה.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. תנאים לקיום נקודות קיצון</h3>
          <p><strong>תנאי הכרחי:</strong> בנקודת קיצון פנימית, הנגזרת הראשונה שווה לאפס:</p>
          <FormulaBox>f'(x) = 0</FormulaBox>
          
          <p><strong>תנאי מספיק:</strong> הנגזרת השנייה קובעת את סוג הקיצון:</p>          <ul className="list-disc pr-6 space-y-1">
            <li>אם <FormulaBox inline>{"f''(x) > 0"}</FormulaBox> - מינימום מקומי</li>
            <li>אם <FormulaBox inline>{"f''(x) < 0"}</FormulaBox> - מקסימום מקומי</li>
            <li>אם <FormulaBox inline>f''(x) = 0</FormulaBox> - הבדיקה לא חד-משמעית</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. שלבי פתרון בעיית אופטימיזציה</h3>
          <ol className="list-decimal pr-6 space-y-2">
            <li><strong>הגדר משתנים:</strong> קבע מה המשתנה הבלתי תלוי ומה הפונקציה לאופטימיזציה</li>
            <li><strong>כתב אילוצים:</strong> זהה את התחום והתנאים</li>
            <li><strong>בטא פונקציה אחת במשתנה אחד:</strong> השתמש באילוצים לצמצום משתנים</li>
            <li><strong>גזור ומצא נקודות חשודות:</strong> פתור <FormulaBox inline>f'(x) = 0</FormulaBox></li>
            <li><strong>בדוק נקודות קצה:</strong> אם קיים תחום מוגבל</li>
            <li><strong>קבע מינימום/מקסימום:</strong> השתמש בנגזרת שנייה או בהשוואת ערכים</li>
          </ol>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה פתורה - בעיה גיאומטרית</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium"><strong>בעיה:</strong> מלבן שהיקפו 20 מטר. מצא את הממדים שנותנים שטח מקסימלי.</p>
            <p><strong>פתרון:</strong></p>
            <p>1. <strong>משתנים:</strong> אורך = x, רוחב = y</p>            <p>2. <strong>אילוץ:</strong> היקף = <FormulaBox inline>{"2x + 2y = 20 \\Rightarrow y = 10 - x"}</FormulaBox></p>
            <p>3. <strong>פונקציית מטרה:</strong> שטח = <FormulaBox inline>{"S(x) = x \\cdot y = x(10-x) = 10x - x^2"}</FormulaBox></p>
            <p>4. <strong>תחום:</strong> <FormulaBox inline>{"0 < x < 10"}</FormulaBox> (כדי שהמלבן יהיה חוקי)</p>
            <p>5. <strong>נגזרת:</strong> <FormulaBox inline>{"S'(x) = 10 - 2x"}</FormulaBox></p>
            <p>6. <strong>נקודת קיצון:</strong> <FormulaBox inline>{"10 - 2x = 0 \\Rightarrow x = 5"}</FormulaBox></p>
            <p>7. <strong>נגזרת שנייה:</strong> <FormulaBox inline>{"S''(x) = -2 < 0"}</FormulaBox> ← מקסימום</p>
            <p>8. <strong>תשובה:</strong> כאשר x = 5, y = 5. השטח המקסימלי הוא 25 מ״ר (ריבוע!).</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">טיפים חשובים</h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>תמיד בדוק שהתחום הגיוני בהקשר הבעיה</li>
            <li>זכור לבדוק גם נקודות קצה של התחום</li>
            <li>וודא שהפתרון עונה על השאלה המקורית</li>
            <li>בבעיות מעשיות, ערכים שליליים לרוב לא הגיוניים</li>
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
    </LessonLayout>
  );
};

export default CalculusOptimizationLesson;
