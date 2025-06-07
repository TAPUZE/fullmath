import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const AnalyticGeometryLineContinuedLesson = () => {
  const lessonId = 'analytic_geometry_line_continued_he';
  const nextLessonPath = '/analytic-geometry-circle';

  const exercises = [
    {
      id: 'ex1',
      question: 'מצא את משוואת הישר העובר דרך הנקודה (2, 1) והמאונך לישר y = 3x + 7.',
      correctAnswer: 'y=-1/3x+5/3',
      isEquation: true,
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>השיפוע של הישר הנתון: <FormulaBox inline>m_1 = 3</FormulaBox></p>
          <p>השיפוע של הישר המאונך: <FormulaBox inline>m_2 = -\frac{1}{3}</FormulaBox></p>
          <p>נוסחת נקודה-שיפוע:</p>
          <FormulaBox>y - 1 = -\frac{1}{3}(x - 2)</FormulaBox>
          <FormulaBox>y - 1 = -\frac{1}{3}x + \frac{2}{3}</FormulaBox>
          <FormulaBox>y = -\frac{1}{3}x + \frac{2}{3} + 1</FormulaBox>
          <FormulaBox>y = -\frac{1}{3}x + \frac{5}{3}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'האם הישרים y = 2x + 3 ו-y = 2x - 5 מקבילים, מאונכים או אף אחד מהמקרים?',
      correctAnswer: 'מקבילים',
      placeholder: 'הכנס: מקבילים/מאונכים/אף אחד',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>שני השיפועים שווים: <FormulaBox inline>m_1 = m_2 = 2</FormulaBox></p>
          <p>לכן הישרים <strong>מקבילים</strong>.</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'אם שיפועו של ישר הוא 4, מהו שיפועו של ישר המקביל לו?',
      options: [
        { value: 'a', label: '4' },
        { value: 'b', label: '-4' },
        { value: 'c', label: '1/4' },
        { value: 'd', label: '-1/4' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q2',
      question: 'אם שיפועו של ישר הוא -2/3, מהו שיפועו של ישר המאונך לו?',
      options: [
        { value: 'a', label: <FormulaBox inline>-\frac{2}{3}</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>\frac{2}{3}</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>\frac{3}{2}</FormulaBox> },
        { value: 'd', label: <FormulaBox inline>-\frac{3}{2}</FormulaBox> }
      ],
      correctAnswer: 'c'
    }
  ];

  return (
    <LessonLayout 
      title="הישר (המשך) - ישרים מקבילים ומאונכים"
      lessonId={lessonId}
      nextLessonPath={nextLessonPath}
    >
      {/* Learning Section */}
      <section id="learn" aria-labelledby="learn-heading" className="mb-12">
        <h2 id="learn-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: תכונות מתקדמות של משוואת הישר 📈
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>בשיעור זה נעמיק בתכונות נוספות של ישרים במישור הקרטזי, ובמיוחד נתמקד ביחסי הקבלה ואונכות בין ישרים.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. תנאי הקבלה בין ישרים</h3>
          <p>שני ישרים הם <strong>מקבילים</strong> אם ורק אם השיפוע שלהם שווה:</p>
          <FormulaBox>{`m_1 = m_2`}</FormulaBox>
          <p>לדוגמה: הישר <FormulaBox inline>y = 3x + 5</FormulaBox> מקביל לישר <FormulaBox inline>y = 3x - 2</FormulaBox> כיוון ששני השיפועים שווים ל-3.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. תנאי אונכות בין ישרים</h3>
          <p>שני ישרים הם <strong>מאונכים</strong> (נפגשים בזווית ישרה) אם ורק אם מכפלת השיפועים שלהם שווה ל-(-1):</p>
          <FormulaBox>{`m_1 \\\\cdot m_2 = -1`}</FormulaBox>
          <p>במילים אחרות: <FormulaBox inline>{`m_2 = -\\\\frac{1}{m_1}`}</FormulaBox></p>
          <p>לדוגמה: הישר <FormulaBox inline>y = 2x + 1</FormulaBox> מאונך לישר <FormulaBox inline>y = -\frac{1}{2}x + 3</FormulaBox> כיוון ש-<FormulaBox inline>{`2 \\\\cdot (-\\\\frac{1}{2}) = -1`}</FormulaBox>.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. אסטרטגיית פתרון</h3>
          <ol className="list-decimal pr-6 space-y-2">
            <li><strong>זהה את השיפועים:</strong> מתוך משוואות הישרים בצורה <FormulaBox inline>y = mx + n</FormulaBox>, זהה את השיפוע <FormulaBox inline>m</FormulaBox>.</li>
            <li><strong>להקבלה:</strong> בדוק אם השיפועים שווים.</li>
            <li><strong>לאונכות:</strong> בדוק אם מכפלת השיפועים שווה ל-(-1).</li>
            <li><strong>מציאת ישר מקביל/מאונך:</strong> השתמש בנוסחאות הנתונות והנקודה הנתונה.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה פתורה</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium"><strong>דוגמה:</strong> מצא את משוואת הישר העובר דרך הנקודה <FormulaBox inline>(1, -5)</FormulaBox> והמאונך לישר <FormulaBox inline>y = -\frac{2}{3}x + 4</FormulaBox>.</p>
            <p><strong>פתרון:</strong></p>
            <p>1. השיפוע של הישר הנתון הוא <FormulaBox inline>m_1 = -\frac{2}{3}</FormulaBox>.</p>
            <p>2. השיפוע של הישר המאונך הוא: <FormulaBox inline>{"m_2 = -\\frac{1}{m_1} = -\\frac{1}{-\\frac{2}{3}} = \\frac{3}{2}"}</FormulaBox></p>
            <p>3. נשתמש בנוסחת נקודה-שיפוע: <FormulaBox inline>y - y_1 = m(x - x_1)</FormulaBox></p>
            <FormulaBox>y - (-5) = \frac{3}{2}(x - 1)</FormulaBox>
            <FormulaBox>y + 5 = \frac{3}{2}x - \frac{3}{2}</FormulaBox>
            <FormulaBox>y = \frac{3}{2}x - \frac{3}{2} - 5</FormulaBox>
            <FormulaBox>y = \frac{3}{2}x - \frac{13}{2}</FormulaBox>
            <p><strong>תשובה:</strong> משוואת הישר המאונך היא <FormulaBox inline>y = \frac{3}{2}x - \frac{13}{2}</FormulaBox>.</p>
          </div>
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
        </h2>        <Quiz questions={quizQuestions} lessonId={lessonId} />
      </section>
    </LessonLayout>
  );
};

export default AnalyticGeometryLineContinuedLesson;
