import React, { useState } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const AnalyticGeometryCircleLesson = () => {
  const [completionStatus, setCompletionStatus] = useState(false);

  const breadcrumbItems = [
    { label: 'דף ראשי', href: '/' },
    { label: 'שאלון 35382', href: '/lessons' },
    { label: 'המעגל', href: '#' }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: (
        <>
          מהי משוואת המעגל שמרכזו בנקודה <FormulaBox formula="(2, 3)" /> ורדיוסו 5?
        </>
      ),
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
      question: (
        <>
          מהו מרכז המעגל שמשוואתו <FormulaBox formula="(x+1)^2 + (y-4)^2 = 9" />?
        </>
      ),
      options: [
        { value: 'a', label: '(1, -4)' },
        { value: 'b', label: '(-1, 4)' },
        { value: 'c', label: '(1, 4)' },
        { value: 'd', label: '(-1, -4)' }
      ],
      correctAnswer: 'b'
    }
  ];

  const exercises = [
    {
      id: 'ex1',
      question: (
        <>
          כתוב את משוואת המעגל שמרכזו בנקודה <FormulaBox formula="(3, -2)" /> ורדיוסו 4.
        </>
      ),
      correctAnswer: '(x-3)²+(y+2)²=16',
      placeholder: 'הכנס משוואת המעגל',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>
          <p>נוסחת המעגל הכללית: <FormulaBox formula="(x-a)^2 + (y-b)^2 = R^2" /></p>
          <p>כאשר <FormulaBox formula="(a,b)" /> הוא המרכז ו-<FormulaBox formula="R" /> הוא הרדיוס.</p>
          <p>מהנתונים: <FormulaBox formula="a = 3, b = -2, R = 4" /></p>
          <p>נציב בנוסחה:</p>
          <FormulaBox formula="(x-3)^2 + (y-(-2))^2 = 4^2" block />
          <FormulaBox formula="(x-3)^2 + (y+2)^2 = 16" block />
        </div>
      )
    },
    {
      id: 'ex2',
      question: (
        <>
          מצא את מרכז ורדיוס המעגל שמשוואתו <FormulaBox formula="x^2 + y^2 - 6x + 4y - 12 = 0" />.
        </>
      ),
      correctAnswer: '(3,-2),5',
      placeholder: 'הכנס מרכז ורדיוס (פורמט: (x,y),r)',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>
          <p>נשלים את הריבוע עבור x ו-y:</p>
          <FormulaBox formula="x^2 - 6x + y^2 + 4y = 12" block />
          <p>השלמת ריבוע עבור x: <FormulaBox formula="x^2 - 6x = (x-3)^2 - 9" /></p>
          <p>השלמת ריבוע עבור y: <FormulaBox formula="y^2 + 4y = (y+2)^2 - 4" /></p>
          <p>נציב:</p>
          <FormulaBox formula="(x-3)^2 - 9 + (y+2)^2 - 4 = 12" block />
          <FormulaBox formula="(x-3)^2 + (y+2)^2 = 12 + 9 + 4 = 25" block />
          <p>המרכז: <FormulaBox formula="(3, -2)" /></p>
          <p>הרדיוס: <FormulaBox formula="R = \sqrt{25} = 5" /></p>
        </div>
      )
    }
  ];

  return (
    <LessonLayout 
      title="המעגל"
      breadcrumbItems={breadcrumbItems}
      nextLessonUrl="/lessons/problems-work-rate"
      lessonMenuUrl="/lessons"
      completionStatus={completionStatus}
      onCompletionChange={setCompletionStatus}
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
            משוואת המעגל שמרכזו בנקודה <FormulaBox formula="(a, b)" /> ורדיוסו <FormulaBox formula="R" /> היא:
          </p>
          <FormulaBox formula="(x-a)^2 + (y-b)^2 = R^2" block />
          
          <p>
            גם משוואה זו נובעת מנוסחת המרחק בין שתי נקודות: המרחק בין כל נקודה{' '}
            <FormulaBox formula="(x,y)" /> על המעגל לבין המרכז <FormulaBox formula="(a,b)" /> הוא{' '}
            <FormulaBox formula="R" />.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            2. משוואת המעגל - צורה כללית
          </h3>
          
          <p>
            לעיתים משוואת המעגל נתונה בצורה הכללית:
          </p>
          <FormulaBox formula="x^2 + y^2 + Dx + Ey + F = 0" block />
          
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
            
            <p><strong>פתרון:</strong></p>
            <p>1. נזהה את הנתונים: מרכז <FormulaBox formula="(a, b) = (2, -3)" />, רדיוס <FormulaBox formula="R = 5" />.</p>
            <p>2. נתון רדיוס המעגל <FormulaBox formula="R=5" />.</p>
            <p>3. נציב בנוסחה הכללית של משוואת המעגל <FormulaBox formula="(x-a)^2 + (y-b)^2 = R^2" />:</p>
            <FormulaBox formula="(x-2)^2 + (y-(-3))^2 = 5^2" block />
            <FormulaBox formula="(x-2)^2 + (y+3)^2 = 25" block />
            <p><strong>תשובה:</strong> משוואת המעגל היא <FormulaBox formula="(x-2)^2 + (y+3)^2 = 25" />.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            4. השלמת ריבוע
          </h3>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium">
              <strong>דוגמה:</strong> מצא את מרכז ורדיוס המעגל <FormulaBox formula="x^2 + y^2 - 4x + 6y - 3 = 0" />.
            </p>
            
            <p><strong>פתרון:</strong></p>
            <p>1. נארגן את המשוואה:</p>
            <FormulaBox formula="x^2 - 4x + y^2 + 6y = 3" block />
            <p>2. נשלים ריבוע עבור x:</p>
            <FormulaBox formula="x^2 - 4x = (x-2)^2 - 4" block />
            <p>3. נשלים ריבוע עבור y:</p>
            <FormulaBox formula="y^2 + 6y = (y+3)^2 - 9" block />
            <p>4. נציב חזרה:</p>
            <FormulaBox formula="(x-2)^2 - 4 + (y+3)^2 - 9 = 3" block />
            <FormulaBox formula="(x-2)^2 + (y+3)^2 = 3 + 4 + 9 = 16" block />
            <p>5. נזהה את המרכז והרדיוס:</p>
            <ul className="list-disc pr-4">
              <li>המרכז הוא <FormulaBox formula="(2, -3)" />.</li>
              <li>הרדיוס הוא <FormulaBox formula="R = \sqrt{16} = 4" />.</li>
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
      </section>

      {/* Quiz Section */}
      <Quiz questions={quizQuestions} />
    </LessonLayout>
  );
};

export default AnalyticGeometryCircleLesson;
