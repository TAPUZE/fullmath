import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat41LinearEquations = () => {
  const lessonId = 'mahat-4-1-linear-equations';
  const nextLessonPath = '/lessons/mahat-4-2-linear-systems';
  const exercises = [
    {
      id: 'ex1',
      question: 'פתור את המשוואה: 7x + 3 = 31',
      correctAnswer: '4',
      placeholder: 'הזן את התשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> העברת מספרים חופשיים</p>
          <p>7x = 31 - 3</p>
          <p>7x = 28</p>
          <p><strong>שלב 2:</strong> חלוקה במקדם</p>
          <p>x = 28 ÷ 7 = 4</p>
          <p><strong>בדיקה:</strong> 7(4) + 3 = 28 + 3 = 31 ✓</p>
          <p><strong>התשובה: x = 4</strong></p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'פתור את המשוואה: 2(3x - 1) = 4(x + 5)',
      correctAnswer: '11',
      placeholder: 'הזן את התשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> פתיחת סוגריים</p>
          <p>6x - 2 = 4x + 20</p>
          <p><strong>שלב 2:</strong> העברת נעלמים לאגף אחד</p>
          <p>6x - 4x = 20 + 2</p>
          <p>2x = 22</p>
          <p><strong>שלב 3:</strong> חלוקה במקדם</p>
          <p>x = 22 ÷ 2 = 11</p>
          <p><strong>בדיקה:</strong> 2(3·11-1) = 2(32) = 64, 4(11+5) = 4(16) = 64 ✓</p>
          <p><strong>התשובה: x = 11</strong></p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פתור את המשוואה: (x+1)/2 - x/5 = 2',
      correctAnswer: '5',
      placeholder: 'הזן את התשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> מציאת מכנה משותף (10)</p>
          <p>הכפלת המשוואה ב-10:</p>
          <p>10 · (x+1)/2 - 10 · x/5 = 10 · 2</p>
          <p><strong>שלב 2:</strong> צמצום</p>
          <p>5(x+1) - 2x = 20</p>
          <p><strong>שלב 3:</strong> פתיחת סוגריים</p>
          <p>5x + 5 - 2x = 20</p>
          <p>3x + 5 = 20</p>
          <p><strong>שלב 4:</strong> פתרון</p>
          <p>3x = 15, x = 5</p>
          <p><strong>התשובה: x = 5</strong></p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'פתור את המשוואה: 5 - (2x - 3) = x',
      correctAnswer: '8/3',
      placeholder: 'הזן את התשובה (כשבר או עשרוני)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> פתיחת סוגריים (שים לב למינוס!)</p>
          <p>5 - 2x + 3 = x</p>
          <p><strong>שלב 2:</strong> כינוס איברים דומים</p>
          <p>8 - 2x = x</p>
          <p><strong>שלב 3:</strong> העברת נעלמים</p>
          <p>8 = x + 2x</p>
          <p>8 = 3x</p>
          <p><strong>שלב 4:</strong> חלוקה</p>
          <p>x = 8/3</p>
          <p><strong>התשובה: x = 8/3 או 2.67</strong></p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'קבע אם למשוואה 4x + 3 = 4x + 1 יש פתרון, אין פתרון, או אינסוף פתרונות.',
      correctAnswer: 'אין פתרון',
      placeholder: 'הזן את התשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> חיסור 4x משני האגפים</p>
          <p>3 = 1</p>
          <p><strong>ניתוח:</strong> קיבלנו פסוק שקר (3 לא שווה ל-1)</p>
          <p><strong>מסקנה:</strong> אין פתרון למשוואה</p>
          <p>זה אומר שלא קיים מספר שיקיים את המשוואה המקורית.</p>
          <p><strong>התשובה: אין פתרון</strong></p>
        </div>
      )
    }
  ];
  const quizData = {
    title: 'בחן את עצמך - משוואות ממעלה ראשונה',
    questions: [
      {
        question: 'מהו הצעד הראשון והיעיל ביותר לפתרון המשוואה x/2 + x/5 = 7?',
        options: ['לחבר את השברים באגף שמאל', 'להכפיל את כל המשוואה ב-10', 'להעביר את 7 אגף', 'לחלק את המשוואה ב-x'],
        correctAnswer: 1,
        explanation: 'הכפלה במכנה המשותף (10) מבטלת מיד את כל השברים והופכת את המשוואה לפשוטה.'
      },
      {
        question: 'מה הפתרון של המשוואה 6x - (x - 2) = 12?',
        options: ['x=2.8', 'x=10/7', 'x=2', 'x=14/5'],
        correctAnswer: 2,
        explanation: '6x - x + 2 = 12 → 5x + 2 = 12 → 5x = 10 → x=2'
      },
      {
        question: 'פתרת משוואה, ובשלב האחרון קיבלת 0 = 0. מהי המסקנה?',
        options: ['הפתרון הוא x=0', 'אין פתרון למשוואה', 'טעות בחישוב', 'יש אינסוף פתרונות'],
        correctAnswer: 3,
        explanation: '0=0 הוא פסוק אמת, מה שמעיד על זהות - כל מספר הוא פתרון.'
      },
      {
        question: 'לאחר הצבת הפתרון במשוואה המקורית, שני האגפים יצאו שווים. מה זה אומר?',
        options: ['שיש עוד פתרונות', 'שהפתרון שמצאנו נכון', 'שהמשוואה אינה תקינה', 'שצריך לבדוק שוב'],
        correctAnswer: 1,
        explanation: 'זו בדיוק המטרה של בדיקה - לוודא שהגענו לתשובה הנכונה.'      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="משוואות ממעלה ראשונה"
      description="פתרון משוואות עם נעלם אחד, סוגריים ושברים"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>פתרון משוואות ממעלה ראשונה עם נעלם אחד</li>
          <li>פתרון משוואות עם סוגריים</li>
          <li>פתרון משוואות עם מכנה מספרי</li>
          <li>זיהוי משוואות עם אינסוף פתרונות או ללא פתרון</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">משוואה ממעלה ראשונה</h3>
          <p>משוואה מהצורה ax + b = c כאשר a ≠ 0</p>
          <FormulaBox>{"ax + b = c \\Rightarrow x = \\frac{c - b}{a}"}</FormulaBox>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">שלבי הפתרון</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>פתיחת סוגריים (אם קיימים)</li>
            <li>כינוס איברים דומים</li>
            <li>העברת איברים בין אגפים</li>
            <li>בידוד המשתנה</li>
            <li>בדיקת הפתרון</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תרגילים</h2>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Exercise
              key={exercise.id}
              exerciseId={exercise.id}
              question={exercise.question}
              correctAnswer={exercise.correctAnswer}
              placeholder={exercise.placeholder}
              solution={exercise.solution}
              lessonId={lessonId}
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <Quiz
          quizId={`${lessonId}_quiz`}
          title={quizData.title}
          questions={quizData.questions}
          lessonId={lessonId}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">סיכום</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>משוואות ממעלה ראשונה הן הבסיס לפתרון בעיות רבות</li>
            <li>חשוב לבצע את השלבים בסדר הנכון</li>
            <li>תמיד יש לבדוק את הפתרון במשוואה המקורית</li>
            <li>יש משוואות עם פתרון יחיד, אינסוף פתרונות או ללא פתרון</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat41LinearEquations;
