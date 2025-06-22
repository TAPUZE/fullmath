import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat15MultiplicationFormulas = () => {
  const lessonId = 'mahat-1-5-multiplication-formulas';
  const nextLessonPath = '/lessons/mahat-1-6-algebraic-fractions';
  const exercises = [    {
      id: 'ex1',
      question: (
        <div>
          פתח את הביטוי: <FormulaBox inline>{"(x + 3)^2"}</FormulaBox>
        </div>
      ),
      correctAnswer: 'x² + 6x + 9',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>משתמשים בנוסחת הבינום בריבוע: (a + b)² = a² + 2ab + b²</p>
          <FormulaBox>{"(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex2',
      question: (
        <div>
          פרק לגורמים: <FormulaBox inline>{"x^2 - 25"}</FormulaBox>
        </div>
      ),
      correctAnswer: '(x + 5)(x - 5)',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>זיהינו הפרש ריבועים: a² - b² = (a + b)(a - b)</p>
          <FormulaBox>{"x^2 - 25 = x^2 - 5^2 = (x + 5)(x - 5)"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex3',
      question: (
        <div>
          פתח את הביטוי: <FormulaBox inline>{"(2a - 5)^2"}</FormulaBox>
        </div>
      ),
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
    },    {
      id: 'ex4',
      question: (
        <div>
          חשב: <FormulaBox inline>{"(3x + 2)(3x - 2)"}</FormulaBox>
        </div>
      ),
      correctAnswer: '9x² - 4',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>זיהינו נוסחת הפרש ריבועים: (a + b)(a - b) = a² - b²</p>
          <FormulaBox>{"(3x + 2)(3x - 2) = (3x)^2 - 2^2 = 9x^2 - 4"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex5',
      question: (
        <div>
          פרק לגורמים: <FormulaBox inline>{"6x^2 + 15x"}</FormulaBox>
        </div>
      ),
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
    {      id: 'ex6',
      question: (
        <div>
          פרק לגורמים: <FormulaBox inline>{"y^2 + 10y + 25"}</FormulaBox>
        </div>
      ),
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
    questions: [      {
        question: (
          <div>
            מה התוצאה של <FormulaBox inline>{"(a + b)^2"}</FormulaBox>?
          </div>
        ),
        options: [
          { label: <FormulaBox inline>{"a^2 + b^2"}</FormulaBox>, value: 'a² + b²' },
          { label: <FormulaBox inline>{"a^2 + 2ab + b^2"}</FormulaBox>, value: 'a² + 2ab + b²' },
          { label: <FormulaBox inline>{"a^2 - 2ab + b^2"}</FormulaBox>, value: 'a² - 2ab + b²' },
          { label: <FormulaBox inline>{"2a^2 + 2b^2"}</FormulaBox>, value: '2a² + 2b²' }
        ],
        correctAnswer: 'a² + 2ab + b²',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>נוסחת הבינום בריבוע:</p>
            <FormulaBox>{"(a + b)^2 = a^2 + 2ab + b^2"}</FormulaBox>
          </div>
        )
      },      {
        question: (
          <div>
            איך מפרקים את הביטוי <FormulaBox inline>{"a^2 - b^2"}</FormulaBox>?
          </div>
        ),
        options: [
          { label: <FormulaBox inline>{"(a + b)^2"}</FormulaBox>, value: '(a + b)²' },
          { label: <FormulaBox inline>{"(a - b)^2"}</FormulaBox>, value: '(a - b)²' },
          { label: <FormulaBox inline>{"(a + b)(a - b)"}</FormulaBox>, value: '(a + b)(a - b)' },
          { label: 'לא ניתן לפרק', value: 'לא ניתן לפרק' }
        ],
        correctAnswer: '(a + b)(a - b)',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>זוהי נוסחת הפרש ריבועים:</p>
            <FormulaBox>{"a^2 - b^2 = (a + b)(a - b)"}</FormulaBox>
          </div>
        )
      },      {
        question: (
          <div>
            מה התוצאה של <FormulaBox inline>{"(x - 4)^2"}</FormulaBox>?
          </div>
        ),
        options: [
          { label: <FormulaBox inline>{"x^2 - 16"}</FormulaBox>, value: 'x² - 16' },
          { label: <FormulaBox inline>{"x^2 + 8x + 16"}</FormulaBox>, value: 'x² + 8x + 16' },
          { label: <FormulaBox inline>{"x^2 - 8x + 16"}</FormulaBox>, value: 'x² - 8x + 16' },
          { label: <FormulaBox inline>{"x^2 - 4x + 16"}</FormulaBox>, value: 'x² - 4x + 16' }
        ],
        correctAnswer: 'x² - 8x + 16',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <FormulaBox>{"(x - 4)^2 = x^2 - 2 \\cdot x \\cdot 4 + 4^2 = x^2 - 8x + 16"}</FormulaBox>
          </div>
        )
      },      {
        question: (
          <div>
            איך מפרקים את הביטוי <FormulaBox inline>{"4x^2 - 9"}</FormulaBox>?
          </div>
        ),
        options: [
          { label: <FormulaBox inline>{"(2x + 3)^2"}</FormulaBox>, value: '(2x + 3)²' },
          { label: <FormulaBox inline>{"(2x - 3)^2"}</FormulaBox>, value: '(2x - 3)²' },
          { label: <FormulaBox inline>{"(2x + 3)(2x - 3)"}</FormulaBox>, value: '(2x + 3)(2x - 3)' },
          { label: <FormulaBox inline>{"(4x + 9)(4x - 9)"}</FormulaBox>, value: '(4x + 9)(4x - 9)' }
        ],
        correctAnswer: '(2x + 3)(2x - 3)',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <FormulaBox>{"4x^2 - 9 = (2x)^2 - 3^2 = (2x + 3)(2x - 3)"}</FormulaBox>
          </div>
        )
      },      {
        question: (
          <div>
            מה הגורם המשותף ב-<FormulaBox inline>{"6ab + 9a"}</FormulaBox>?
          </div>
        ),
        options: [
          { label: <FormulaBox inline>{"3"}</FormulaBox>, value: '3' },
          { label: <FormulaBox inline>{"3a"}</FormulaBox>, value: '3a' },
          { label: <FormulaBox inline>{"6a"}</FormulaBox>, value: '6a' },
          { label: <FormulaBox inline>{"9a"}</FormulaBox>, value: '9a' }
        ],
        correctAnswer: '3a',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <FormulaBox>{"6ab + 9a = 3a \\cdot 2b + 3a \\cdot 3 = 3a(2b + 3)"}</FormulaBox>
          </div>
        )
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
