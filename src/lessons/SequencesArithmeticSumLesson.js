import React, { useEffect } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import ProgressSection from '../components/ProgressSection';

const initializeMathJax = () => {
  window.MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
    svg: { fontCache: 'global' },
  };
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
};

const SequencesArithmeticSumLesson = () => {
  useEffect(() => {
    initializeMathJax();
  }, []);

  const title = "סדרות חשבוניות (המשך) - סכום";
  const lessonId = "35381_sequences_arithmetic_sum";
  const nextLessonPath = "/lessons/growth-decay";

  const exercises = [
    {
      id: 'ex1',
      question: 'בסדרה חשבונית האיבר הראשון הוא 7 והפרש הסדרה הוא 4. חשב את סכום 15 האיברים הראשונים.',
      correctAnswer: '525',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>נתונים: <FormulaBox inline>a_1=7, d=4, n=15</FormulaBox>.</p>          <p>נשתמש בנוסחה: <FormulaBox inline>{"S_n = \\frac{n}{2}[2a_1 + (n-1)d]"}</FormulaBox>.</p>
          <p><FormulaBox inline>{"S_{15} = \\frac{15}{2}[2 \\cdot 7 + (15-1) \\cdot 4] = 7.5[14 + 14 \\cdot 4] = 7.5[14 + 56] = 7.5 \\cdot 70 = 525"}</FormulaBox>.</p>
          <p>סכום 15 האיברים הראשונים הוא 525.</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'בסדרה חשבונית האיבר הראשון הוא 10, האיבר האחרון (בסכום מסוים) הוא 70, וסכום האיברים הוא 400. כמה איברים בסדרה זו?',
      correctAnswer: '10',
      solution: (
        <div>          <p><strong>פתרון מלא:</strong></p>
          <p>נתונים: <FormulaBox inline>a_1=10, a_n=70, S_n=400</FormulaBox>.</p>
          <p>נשתמש בנוסחה השנייה: <FormulaBox inline>S_n = \\frac{n}{2}(a_1 + a_n)</FormulaBox>.</p>
          <p>נציב את הנתונים:</p>          <div className="my-2 text-center">
            <FormulaBox>{"S_{n} = \\frac{n}{2}(10 + 70)"}</FormulaBox>
          </div>
          <div className="my-2 text-center">
            <FormulaBox>{"400 = \\frac{n}{2} \\cdot 80"}</FormulaBox>
          </div>          <div className="my-2 text-center">
            <FormulaBox>{"n = \\frac{400 \\cdot 2}{80} = 10"}</FormulaBox>
          </div>
          <p>לכן, יש בסדרה זו 10 איברים.</p>
        </div>
      )
    }
  ];

  return (
    <LessonLayout title={title} lessonId={lessonId} nextLessonPath={nextLessonPath}>
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">לומדים 📚</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">          <p>בשיעורים קודמים למדנו על סדרה חשבונית, האיבר הראשון (<FormulaBox inline>a_1</FormulaBox>), הפרש הסדרה (<FormulaBox inline>d</FormulaBox>) ונוסחת האיבר הכללי (<FormulaBox inline>a_n = a_1 + (n-1)d</FormulaBox>).</p>
          <p>לעתים קרובות, אנו נדרשים לחשב את הסכום של מספר מסוים של איברים ראשונים בסדרה. סכום זה מסומן ב-<FormulaBox inline>S_n</FormulaBox>, כלומר סכום <FormulaBox inline>n</FormulaBox> האיברים הראשונים.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">נוסחאות לחישוב סכום סדרה חשבונית</h3>
          <p>קיימות שתי נוסחאות עיקריות לחישוב <FormulaBox inline>S_n</FormulaBox>:</p>
          <ol className="list-decimal pr-6 space-y-3 mt-2">
            <li>
              <strong>נוסחה לפי האיבר הראשון, הפרש הסדרה ומספר האיברים:</strong>              <div className="my-2 text-center">
                <FormulaBox>{"S_n = \\frac{n}{2}[2a_1 + (n-1)d]"}</FormulaBox>
              </div>
              <p className="text-sm text-gray-600">נוסחה זו שימושית כאשר ידועים לנו האיבר הראשון (<FormulaBox inline>a_1</FormulaBox>), הפרש הסדרה (<FormulaBox inline>d</FormulaBox>) ומספר האיברים (<FormulaBox inline>n</FormulaBox>) שאנו רוצים לסכום.</p>
            </li>            <li>
              <strong>נוסחה לפי האיבר הראשון, האיבר האחרון ומספר האיברים:</strong>
              <div className="my-2 text-center">
                <FormulaBox>{"S_n = \\frac{n}{2}(a_1 + a_n)"}</FormulaBox>
              </div>
              <p className="text-sm text-gray-600">נוסחה זו שימושית כאשר ידועים לנו האיבר הראשון (<FormulaBox inline>a_1</FormulaBox>), האיבר האחרון בסכום (<FormulaBox inline>a_n</FormulaBox>) ומספר האיברים (<FormulaBox inline>n</FormulaBox>).</p>
            </li>
          </ol>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמאות פתורות</h3>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 mb-6">
            <p className="font-medium"><strong>דוגמה 1:</strong> בסדרה חשבונית נתון <FormulaBox inline>a_1 = 2</FormulaBox>, <FormulaBox inline>d = 3</FormulaBox>. חשב את סכום 10 האיברים הראשונים (<FormulaBox inline>S_{10}</FormulaBox>).</p>
            <p><strong>פתרון:</strong></p>
            <p>נתונים: <FormulaBox inline>a_1=2, d=3, n=10</FormulaBox>.</p>            <p>נשתמש בנוסחה הראשונה: <FormulaBox inline>{"S_n = \\frac{n}{2}[2a_1 + (n-1)d]"}</FormulaBox>.</p>
            <p>נציב את הנתונים:</p>
            <div className="my-2 text-center">
              <FormulaBox>{"S_{10} = \\frac{10}{2}[2 \\cdot 2 + (10-1) \\cdot 3]"}</FormulaBox>
            </div>
            <div className="my-2 text-center">
              <FormulaBox>{"S_{10} = 5[4 + 9 \\cdot 3] = 5[4 + 27] = 5 \\cdot 31 = 155"}</FormulaBox>
            </div>
            <p>לכן, סכום 10 האיברים הראשונים הוא 155.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3">
            <p className="font-medium"><strong>דוגמה 2:</strong> בסדרה חשבונית האיבר הראשון הוא 5 (<FormulaBox inline>a_1=5</FormulaBox>) והאיבר ה-12 הוא 38 (<FormulaBox inline>a_{12}=38</FormulaBox>). חשב את סכום 12 האיברים הראשונים (<FormulaBox inline>S_{12}</FormulaBox>).</p>
            <p><strong>פתרון:</strong></p>
            <p>נתונים: <FormulaBox inline>a_1=5, a_{12}=38, n=12</FormulaBox>.</p>            <p>נשתמש בנוסחה השנייה: <FormulaBox inline>{"S_n = \\frac{n}{2}(a_1 + a_n)"}</FormulaBox>.</p>
            <p>נציב את הנתונים:</p>
            <div className="my-2 text-center">
              <FormulaBox>{"S_{12} = \\frac{12}{2}(5 + 38)"}</FormulaBox>
            </div>
            <div className="my-2 text-center">
              <FormulaBox>{"S_{12} = 6 \\cdot 43 = 258"}</FormulaBox>
            </div>
            <p>לכן, סכום 12 האיברים הראשונים הוא 258.</p>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">מתרגלים ✍️</h2>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Exercise
              key={exercise.id}
              id={exercise.id}
              question={`תרגיל ${index + 1}: ${exercise.question}`}
              correctAnswer={exercise.correctAnswer}
              solution={exercise.solution}
            />
          ))}
        </div>
      </section>

      {/* Progress Section */}
      <ProgressSection lessonId={lessonId} nextLessonPath={nextLessonPath} />
    </LessonLayout>
  );
};

export default SequencesArithmeticSumLesson;
