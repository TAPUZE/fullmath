import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import HtmlMathBox from '../../components/math/HtmlMathBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';

const ProblemsBuySellLesson = () => {

  const lessonId = 'problems_buy_sell_he';
  const nextLessonPath = '/calculus-optimization';

  const exercises = [
    {
      id: 'ex1',
      question: 'סוחר קנה סחורה ב-100 ש״ח ומכר אותה ברווח של 20%. באיזה מחיר מכר את הסחורה?',
      correctAnswer: '120',
      placeholder: 'הכנס מחיר ב-ש״ח',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>          <p>מחיר קנייה: 100 ש״ח</p>
          <p>רווח: 20% מ-100 = <FormulaBox inline>0.2 \times 100 = 20</FormulaBox> ש״ח</p>
          <p>מחיר מכירה = מחיר קנייה + רווח = <FormulaBox inline>100 + 20 = 120</FormulaBox> ש״ח</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'חנווני מכר פריט ב-90 ש״ח והפסיד 10% מהמחיר שקנה בו. מהו המחיר שבו קנה את הפריט?',
      correctAnswer: '100',
      placeholder: 'הכנס מחיר ב-ש״ח',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נסמן את מחיר הקנייה ב-x ש״ח</p>
          <p>הפסד של 10% פירושו שמכר ב-90% מהמחיר המקורי</p>
          <p>מחיר מכירה = <FormulaBox inline>0.9x = 90</FormulaBox></p>
          <p>לכן: <FormulaBox inline>x = \frac{90}{0.9} = 100</FormulaBox> ש״ח</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'סוחר קנה מוצר ב-80 ש״ח ומכר אותו ברווח של 25%. מהו מחיר המכירה?',
      options: [
        { value: 'a', label: '100 ש״ח' },
        { value: 'b', label: '105 ש״ח' },
        { value: 'c', label: '120 ש״ח' },
        { value: 'd', label: '125 ש״ח' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q2',
      question: 'אם מכירה ב-75 ש״ח מהווה הפסד של 25%, מהו מחיר הקנייה המקורי?',
      options: [
        { value: 'a', label: '90 ש״ח' },
        { value: 'b', label: '95 ש״ח' },
        { value: 'c', label: '100 ש״ח' },
        { value: 'd', label: '110 ש״ח' }
      ],
      correctAnswer: 'c'
    }
  ];

  return (
    <LessonLayout 
      title="בעיות קנייה ומכירה"
      lessonId={lessonId}
      nextLessonPath={nextLessonPath}
    >
      {/* Learning Section */}
      <section id="learn" aria-labelledby="learn-heading" className="mb-12">
        <h2 id="learn-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: בעיות רווח והפסד 💰
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>בעיות קנייה ומכירה עוסקות בחישוב רווח או הפסד של סוחר. נכיר את המושגים הבסיסיים ונלמד כיצד לפתור בעיות מסוג זה.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">מושגים בסיסיים</h3>
          <ul className="list-disc pr-6 space-y-2">
            <li><strong>מחיר קנייה (עלות):</strong> הסכום ששילם הסוחר כדי לרכוש את הסחורה</li>
            <li><strong>מחיר מכירה:</strong> הסכום שקיבל הסוחר עבור מכירת הסחורה</li>
            <li><strong>רווח:</strong> מחיר מכירה {'>'} מחיר קנייה</li>
            <li><strong>הפסד:</strong> מחיר מכירה {'<'} מחיר קנייה</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">נוסחאות עיקריות</h3>          <div className="space-y-3">
            <p><strong>רווח/הפסד באחוזים:</strong></p>            <p className="text-center my-4">
              <span className="text-lg font-semibold">אחוז רווח = </span>              <HtmlMathBox inline>
                {"\\frac{\\text{רווח}}{\\text{מחיר קנייה}} \\times 100\\%"}
              </HtmlMathBox>
            </p>
            <p className="text-center my-4">
              <span className="text-lg font-semibold">אחוז הפסד = </span>              <HtmlMathBox inline>
                {"\\frac{\\text{הפסד}}{\\text{מחיר קנייה}} \\times 100\\%"}
              </HtmlMathBox>
            </p>
              <p><strong>מחיר מכירה עם רווח:</strong></p>            <p className="text-center my-4">
              <span className="text-lg font-semibold">מחיר מכירה = </span>              <HtmlMathBox inline>
                {"\\text{מחיר קנייה} \\times \\left(1 + \\frac{\\text{אחוז רווח}}{100}\\right)"}
              </HtmlMathBox>
            </p>
            
            <p><strong>מחיר מכירה עם הפסד:</strong></p>
            <p className="text-center my-4">
              <span className="text-lg font-semibold">מחיר מכירה = </span>              <HtmlMathBox inline>
                {"\\text{מחיר קנייה} \\times \\left(1 - \\frac{\\text{אחוז הפסד}}{100}\\right)"}
              </HtmlMathBox>
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה פתורה</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium"><strong>דוגמה:</strong> סוחר קנה חולצה ב-50 ש״ח. הוא רוצה למכור אותה ברווח של 30%. במה יהיה המחיר החדש?</p>
            <p><strong>פתרון:</strong></p>
            <p>1. מחיר קנייה: 50 ש״ח</p>
            <p>2. אחוז רווח: 30%</p>
            <p>3. רווח בש״ח: <FormulaBox inline>50 \times 0.3 = 15</FormulaBox> ש״ח</p>
            <p>4. מחיר מכירה: <FormulaBox inline>50 + 15 = 65</FormulaBox> ש״ח</p>
            <p>או ישירות: <FormulaBox inline>50 \times 1.3 = 65</FormulaBox> ש״ח</p>
            <p><strong>תשובה:</strong> המחיר החדש יהיה 65 ש״ח.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">טיפים לפתרון</h3>
          <ol className="list-decimal pr-6 space-y-2">
            <li>זהה מה נתון ומה צריך למצוא</li>
            <li>קבע אם מדובר ברווח או הפסד</li>
            <li>השתמש בנוסחאות המתאימות</li>
            <li>בדוק שהתשובה הגיונית</li>
          </ol>
        </div>
      </section>

      {/* Practice Section */}
      <section id="practice" aria-labelledby="practice-heading" className="mb-12">
        <h2 id="practice-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        <div className="space-y-6">          {exercises.map((exercise) => (
            <InteractiveExercise 
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              correctAnswer={exercise.correctAnswer}
              placeholder={exercise.placeholder}
              solution={exercise.solution}
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" aria-labelledby="quiz-heading" className="mb-12">
        <h2 id="quiz-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          בחן את עצמך 🧠        </h2>
        <Quiz questions={quizQuestions} lessonId={lessonId} />
      </section>
    </LessonLayout>
  );
};

export default ProblemsBuySellLesson;
