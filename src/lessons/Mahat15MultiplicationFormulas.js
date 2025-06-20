import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat15MultiplicationFormulas = () => {
  const lessonId = 'mahat-1-5-multiplication-formulas';
  const nextLessonPath = '/lessons/mahat-1-6-algebraic-fractions';
  const exercises = [
    {
      id: 'ex1',
      question: 'פתח את הביטוי: (x + 3)²',
      correctAnswer: 'x² + 6x + 9',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>משתמשים בנוסחת הבינום בריבוע: (a + b)² = a² + 2ab + b²</p>
          <FormulaBox>{"(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'פרק לגורמים: x² - 25',
      correctAnswer: '(x + 5)(x - 5)',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>זיהינו הפרש ריבועים: a² - b² = (a + b)(a - b)</p>
          <FormulaBox>{"x^2 - 25 = x^2 - 5^2 = (x + 5)(x - 5)"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פתח את הביטוי: (2a - 5)²',
      correctAnswer: '4a² - 20a + 25',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>משתמשים בנוסחת הבינום בריבוע: (a - b)² = a² - 2ab + b²</p>
          <FormulaBox>{"(2a - 5)^2 = (2a)^2 - 2 \\cdot 2a \\cdot 5 + 5^2"}</FormulaBox>
          <FormulaBox>{"= 4a^2 - 20a + 25"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'חשב: (3x + 2)(3x - 2)',
      correctAnswer: '9x² - 4',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>זיהינו נוסחת הפרש ריבועים: (a + b)(a - b) = a² - b²</p>
          <FormulaBox>{"(3x + 2)(3x - 2) = (3x)^2 - 2^2 = 9x^2 - 4"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'פרק לגורמים: 6x² + 15x',
      correctAnswer: '3x(2x + 5)',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>מוציאים גורם משותף:</p>
          <FormulaBox>{"6x^2 + 15x = 3x \\cdot 2x + 3x \\cdot 5 = 3x(2x + 5)"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex6',
      question: 'פרק לגורמים: y² + 10y + 25',
      correctAnswer: '(y + 5)²',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>זיהינו בינום מרובע: a² + 2ab + b² = (a + b)²</p>
          <FormulaBox>{"y^2 + 10y + 25 = y^2 + 2 \\cdot y \\cdot 5 + 5^2 = (y + 5)^2"}</FormulaBox>
        </div>
      )
    }
  ];
  const quizData = {
    title: 'בחן את עצמך - נוסחאות כפל מקוצר',
    questions: [
      {
        question: 'מה התוצאה של (a + b)²?',
        options: ['a² + b²', 'a² + 2ab + b²', 'a² - 2ab + b²', '2a² + 2b²'],
        correctAnswer: 1,
        explanation: 'נוסחת הבינום בריבוע: (a + b)² = a² + 2ab + b²'
      },
      {
        question: 'איך מפרקים את הביטוי a² - b²?',
        options: ['(a + b)²', '(a - b)²', '(a + b)(a - b)', 'לא ניתן לפרק'],
        correctAnswer: 2,
        explanation: 'זוהי נוסחת הפרש ריבועים: a² - b² = (a + b)(a - b)'
      },
      {
        question: 'מה התוצאה של (x - 4)²?',
        options: ['x² - 16', 'x² + 8x + 16', 'x² - 8x + 16', 'x² - 4x + 16'],
        correctAnswer: 2,
        explanation: '(x - 4)² = x² - 2·x·4 + 4² = x² - 8x + 16'
      },
      {
        question: 'איך מפרקים את הביטוי 4x² - 9?',
        options: ['(2x + 3)²', '(2x - 3)²', '(2x + 3)(2x - 3)', '(4x + 9)(4x - 9)'],
        correctAnswer: 2,
        explanation: '4x² - 9 = (2x)² - 3² = (2x + 3)(2x - 3)'
      },
      {
        question: 'מה הגורם המשותף ב-6ab + 9a?',
        options: ['3', '3a', '6a', '9a'],
        correctAnswer: 1,
        explanation: '6ab + 9a = 3a·2b + 3a·3 = 3a(2b + 3)'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="נוסחאות הכפל המקוצר ופירוק לגורמים"
      description="נוסחאות הכפל המקוצר ופירוק לגורמים בשיטות שונות"
      nextLessonPath={nextLessonPath}
    >
      {/* מטרות השיעור */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>הכרת נוסחאות הכפל המקוצר הבסיסיות</li>
          <li>יישום נוסחאות לפתיחת ביטויים</li>
          <li>פירוק ביטויים לגורמים</li>
          <li>זיהוי מתי להשתמש בכל שיטה</li>
        </ul>
      </section>

      {/* תיאוריה */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <h3 className="text-xl font-semibold mb-3">נוסחאות הכפל המקוצר</h3>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <ul className="list-disc list-inside space-y-3">
            <li><strong>בינום בריבוע (חיובי):</strong> <FormulaBox inline>{"(a + b)^2 = a^2 + 2ab + b^2"}</FormulaBox></li>
            <li><strong>בינום בריבוע (שלילי):</strong> <FormulaBox inline>{"(a - b)^2 = a^2 - 2ab + b^2"}</FormulaBox></li>
            <li><strong>הפרש ריבועים:</strong> <FormulaBox inline>{"(a + b)(a - b) = a^2 - b^2"}</FormulaBox></li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-3">שיטות פירוק לגורמים</h3>
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>הוצאת גורם משותף:</strong> <FormulaBox inline>{"ax + ay = a(x + y)"}</FormulaBox></li>
            <li><strong>פירוק בינום מרובע:</strong> <FormulaBox inline>{"a^2 + 2ab + b^2 = (a + b)^2"}</FormulaBox></li>
            <li><strong>פירוק הפרש ריבועים:</strong> <FormulaBox inline>{"a^2 - b^2 = (a + b)(a - b)"}</FormulaBox></li>
            <li><strong>פירוק טרינום:</strong> שיטת הניסוי והטעייה או שיטת הקבוצה</li>
          </ol>
        </div>
      </section>

      {/* דוגמאות */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">דוגמאות</h2>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">דוגמה 1: פתיחת בינום בריבוע</h4>
            <FormulaBox>{"(2x + 3)^2 = (2x)^2 + 2 \\cdot 2x \\cdot 3 + 3^2 = 4x^2 + 12x + 9"}</FormulaBox>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">דוגמה 2: פירוק הפרש ריבועים</h4>
            <FormulaBox>{"9x^2 - 16 = (3x)^2 - 4^2 = (3x + 4)(3x - 4)"}</FormulaBox>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">דוגמה 3: הוצאת גורם משותף</h4>
            <FormulaBox>{"6x^2 + 9x = 3x(2x + 3)"}</FormulaBox>
          </div>
        </div>
      </section>

      {/* תרגילים */}
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

      {/* בחן את עצמך */}
      <section className="mb-8">
        <Quiz
          quizId={`${lessonId}_quiz`}
          title={quizData.title}
          questions={quizData.questions}
          lessonId={lessonId}
        />
      </section>

      {/* סיכום */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">סיכום</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>נוסחאות הכפל המקוצר מאיצות חישובים ופותרות בעיות מורכבות</li>
            <li>פירוק לגורמים הוא כלי חשוב לפתרון משוואות ופישוט ביטויים</li>
            <li>זיהוי הדפוס הנכון חיוני לבחירת השיטה המתאימה</li>
            <li>תרגול רב יעזור להקנות זיהוי מהיר של הדפוסים</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat15MultiplicationFormulas;
