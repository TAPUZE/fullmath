import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const AnalyticGeometryCircleLesson = () => {
  const lessonId = 'analytic-geometry-circle';
  const nextLessonPath = '/lesson/analytic-geometry-circle-tangent';

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהי משוואת המעגל שמרכזו בנקודה (2, 3) ורדיוסו 5?',
      options: [
        { value: 'a', label: '(x-2)² + (y-3)² = 25' },
        { value: 'b', label: '(x+2)² + (y+3)² = 25' },
        { value: 'c', label: '(x-2)² + (y-3)² = 5' },
        { value: 'd', label: 'x² + y² = 25' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q2',
      question: 'מהו מרכז המעגל שמשוואתו (x+1)² + (y-4)² = 9?',
      options: [
        { value: 'a', label: '(1, -4)' },
        { value: 'b', label: '(-1, 4)' },
        { value: 'c', label: '(1, 4)' },
        { value: 'd', label: '(-1, -4)' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q3',
      question: 'מהו רדיוס המעגל שמשוואתו x² + y² - 6x + 8y = 0?',
      options: [
        { value: 'a', label: '3' },
        { value: 'b', label: '4' },
        { value: 'c', label: '5' },
        { value: 'd', label: '25' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q4',
      question: 'איזה מהביטויים הבאים מייצג את המרחק מנקודה (x,y) למרכז המעגל?',
      options: [
        { value: 'a', label: 'x² + y²' },
        { value: 'b', label: '√(x² + y²)' },
        { value: 'c', label: '(x-h)² + (y-k)²' },
        { value: 'd', label: '√((x-h)² + (y-k)²)' }
      ],
      correctAnswer: 'd'
    }
  ];

  const exercises = [
    {
      id: 'ex1',
      question: (        <>
          כתוב את משוואת המעגל שמרכזו בנקודה <FormulaBox inline>(3, -2)</FormulaBox> ורדיוסו 4.
        </>
      ),
      correctAnswer: '(x-3)²+(y+2)²=16',
      placeholder: 'הכנס משוואת המעגל',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>          <p>נוסחת המעגל הכללית: <FormulaBox inline>(x-a)^2 + (y-b)^2 = R^2</FormulaBox></p>
          <p>כאשר <FormulaBox inline>(a,b)</FormulaBox> הוא המרכז ו-<FormulaBox inline>R</FormulaBox> הוא הרדיוס.</p>
          <p>מהנתונים: <FormulaBox inline>a = 3, b = -2, R = 4</FormulaBox></p>
          <p>נציב בנוסחה:</p>
          <FormulaBox>(x-3)^2 + (y-(-2))^2 = 4^2</FormulaBox>
          <FormulaBox>(x-3)^2 + (y+2)^2 = 16</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: (        <>
          מצא את מרכז ורדיוס המעגל שמשוואתו <FormulaBox inline>x^2 + y^2 - 6x + 4y - 12 = 0</FormulaBox>.
        </>
      ),
      correctAnswer: '(3,-2),5',
      placeholder: 'הכנס מרכז ורדיוס (פורמט: (x,y),r)',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>
          <p>נשלים את הריבוע עבור x ו-y:</p>
          <FormulaBox>x^2 - 6x + y^2 + 4y = 12</FormulaBox>
          <p>השלמת ריבוע עבור x: <FormulaBox inline>x^2 - 6x = (x-3)^2 - 9</FormulaBox></p>
          <p>השלמת ריבוע עבור y: <FormulaBox inline>y^2 + 4y = (y+2)^2 - 4</FormulaBox></p>
          <p>נציב:</p>
          <FormulaBox>(x-3)^2 - 9 + (y+2)^2 - 4 = 12</FormulaBox>
          <FormulaBox>(x-3)^2 + (y+2)^2 = 12 + 9 + 4 = 25</FormulaBox>
          <p>המרכז: <FormulaBox inline>(3, -2)</FormulaBox></p>
          <p>הרדיוס: <FormulaBox inline>R = \sqrt{25} = 5</FormulaBox></p>
        </div>
      )
    }
  ];
  return (
    <LessonLayout 
      title="המעגל"
      lessonId={lessonId}
      nextLessonPath={nextLessonPath}
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: המעגל בגיאומטריה אנליטית 🔵📐
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            המעגל הוא אוסף כל הנקודות שמרחקן ממרכז נתון שווה לרדיוס נתון. 
            בגיאומטריה אנליטית אנו מתמודדים עם משוואות של מעגלים.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            1. משוואת המעגל - צורה סטנדרטית
          </h3>
            <p>
            משוואת המעגל שמרכזו בנקודה <FormulaBox inline>(a, b)</FormulaBox> ורדיוסו <FormulaBox inline>R</FormulaBox> היא:
          </p>
          <FormulaBox>(x-a)^2 + (y-b)^2 = R^2</FormulaBox>
          
          <p>
            גם משוואה זו נובעת מנוסחת המרחק בין שתי נקודות: המרחק בין כל נקודה{' '}
            <FormulaBox inline>(x,y)</FormulaBox> על המעגל לבין המרכז <FormulaBox inline>(a,b)</FormulaBox> הוא{' '}
            <FormulaBox inline>R</FormulaBox>.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            2. משוואת המעגל - צורה כללית
          </h3>
            <p>
            לעיתים משוואת המעגל נתונה בצורה הכללית:
          </p>
          <FormulaBox>x^2 + y^2 + Dx + Ey + F = 0</FormulaBox>
          
          <p>
            כדי למצוא את המרכז והרדיוס מהצורה הכללית, אנו משלימים את הריבוע.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            3. דוגמה מפורטת
          </h3>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium">
              <strong>דוגמה:</strong> מצא את משוואת המעגל שמרכזו בנקודה (2, -3) ורדיוסו 5.
            </p>
            
            <p><strong>פתרון:</strong></p>            <p>1. נזהה את הנתונים: מרכז <FormulaBox inline>(a, b) = (2, -3)</FormulaBox>, רדיוס <FormulaBox inline>R = 5</FormulaBox>.</p>
            <p>2. נתון רדיוס המעגל <FormulaBox inline>R=5</FormulaBox>.</p>
            <p>3. נציב בנוסחה הכללית של משוואת המעגל <FormulaBox inline>(x-a)^2 + (y-b)^2 = R^2</FormulaBox>:</p>
            <FormulaBox>(x-2)^2 + (y-(-3))^2 = 5^2</FormulaBox>
            <FormulaBox>(x-2)^2 + (y+3)^2 = 25</FormulaBox>
            <p><strong>תשובה:</strong> משוואת המעגל היא <FormulaBox inline>(x-2)^2 + (y+3)^2 = 25</FormulaBox>.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            4. השלמת ריבוע
          </h3>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">            <p className="font-medium">
              <strong>דוגמה:</strong> מצא את מרכז ורדיוס המעגל <FormulaBox inline>x^2 + y^2 - 4x + 6y - 3 = 0</FormulaBox>.
            </p>
            
            <p><strong>פתרון:</strong></p>
            <p>1. נארגן את המשוואה:</p>
            <FormulaBox>x^2 - 4x + y^2 + 6y = 3</FormulaBox>
            <p>2. נשלים ריבוע עבור x:</p>
            <FormulaBox>x^2 - 4x = (x-2)^2 - 4</FormulaBox>
            <p>3. נשלים ריבוע עבור y:</p>
            <FormulaBox>y^2 + 6y = (y+3)^2 - 9</FormulaBox>
            <p>4. נציב חזרה:</p>
            <FormulaBox>(x-2)^2 - 4 + (y+3)^2 - 9 = 3</FormulaBox>
            <FormulaBox>(x-2)^2 + (y+3)^2 = 3 + 4 + 9 = 16</FormulaBox>
            <p>5. נזהה את המרכז והרדיוס:</p>
            <ul className="list-disc pr-4">
              <li>המרכז הוא <FormulaBox inline>(2, -3)</FormulaBox>.</li>
              <li>הרדיוס הוא <FormulaBox inline>R = \sqrt{16} = 4</FormulaBox>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} {...exercise} />
          ))}
        </div>
      </section>      {/* Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">בחן את עצמך 🧐</h2>
        <Quiz questions={quizQuestions} />
      </section>
    </LessonLayout>
  );
};

export default AnalyticGeometryCircleLesson;
