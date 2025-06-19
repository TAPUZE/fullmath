import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';


const CalculusSquareRootLesson = () => {  const lessonId = 'calculus_square_root_he';
  const nextLessonPath = '/lesson/calculus-optimization';

  const exercises = [
    {
      id: 'ex1',
      question: 'מצא את תחום ההגדרה של הפונקציה f(x) = √(9-x²).',
      correctAnswer: '-3<=x<=3',
      isDomain: true,
      placeholder: 'לדוגמה: x>=0 או -1<=x<=1',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>נדרוש שהביטוי מתחת לשורש יהיה אי-שלילי:</p>
          <FormulaBox>{`9-x^2 \\ge 0`}</FormulaBox>
          <p>זוהי פרבולה "בוכה" (מקדם <FormulaBox inline>{`x^2`}</FormulaBox> שלילי). נמצא את שורשיה:</p>
          <FormulaBox>{`9-x^2 = 0 \\Rightarrow x^2 = 9 \\Rightarrow x = \\pm 3`}</FormulaBox>
          <p>הפרבולה חיובית או שווה לאפס בין השורשים (כולל).</p>
          <p><strong>תשובה:</strong> תחום ההגדרה הוא <FormulaBox inline>{`-3 \\le x \\le 3`}</FormulaBox>.</p>
        </div>
      )
    }
  ];
  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהו תחום ההגדרה של הפונקציה f(x) = √(x+5)?',
      options: [
        { value: 'a', label: <FormulaBox inline>{`x \\ge 5`}</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>{`x \\ge -5`}</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>{`x > -5`}</FormulaBox> }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q2',
      question: 'מהי הנגזרת של f(x) = √(3x)?',
      options: [
        { value: 'a', label: <FormulaBox inline>{`\\frac{3}{2\\sqrt{3x}}`}</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>{`\\frac{1}{2\\sqrt{3x}}`}</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>{`2\\sqrt{3x}`}</FormulaBox> }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q3',
      question: 'מהי הנגזרת של f(x) = (2x-1)^(1/2)?',
      options: [
        { value: 'a', label: <FormulaBox inline>{`\\frac{1}{\\sqrt{2x-1}}`}</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>{`\\frac{2}{\\sqrt{2x-1}}`}</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>{`\\frac{1}{2\\sqrt{2x-1}}`}</FormulaBox> }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q4',
      question: 'איזה מהביטויים הבאים שווה לאינטגרל ∫ x√x dx?',
      options: [
        { value: 'a', label: <FormulaBox inline>{`\\frac{2}{5}x^{5/2} + C`}</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>{`\\frac{2}{3}x^{3/2} + C`}</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>{`\\frac{3}{2}x^{3/2} + C`}</FormulaBox> }
      ],
      correctAnswer: 'a'
    }
  ];

  return (
    <LessonLayout 
      title="פונקציית שורש (חדו״א) √"
      lessonId={lessonId}
      nextLessonPath={nextLessonPath}
    >
      {/* Learning Section */}
      <section id="learn" aria-labelledby="learn-heading" className="mb-12">
        <h2 id="learn-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: חקירת פונקציית שורש ריבועי
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>פונקציית שורש ריבועי היא פונקציה הכוללת ביטוי עם שורש ריבועי, למשל <FormulaBox inline>{`f(x) = \\sqrt{ax+b}`}</FormulaBox> או <FormulaBox inline>{`f(x) = \\sqrt{ax^2+bx+c}`}</FormulaBox>, ולעיתים גם ביטויים נוספים מחוץ לשורש.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. תחום הגדרה</h3>
          <p>הכלל החשוב ביותר בפונקציות שורש הוא שהביטוי <strong>מתחת לשורש הריבועי חייב להיות אי-שלילי (גדול מאפס או שווה לאפס)</strong>.</p>
          <FormulaBox>{`\\text{If } f(x) = \\sqrt{g(x)}, \\text{ then domain is } g(x) \\ge 0`}</FormulaBox>
          <p>לכן, השלב הראשון בחקירת פונקציית שורש הוא פתרון האי-שוויון <FormulaBox inline>{`g(x) \\ge 0`}</FormulaBox>.</p>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-4">
            <p className="font-medium"><strong>דוגמה (ממסמך המחקר):</strong> מצא את תחום ההגדרה של הפונקציה <FormulaBox inline>{`f(x) = \\sqrt{x-2}`}</FormulaBox>.</p>
            <p><strong>פתרון:</strong></p>
            <p>נדרוש שהביטוי מתחת לשורש יהיה אי-שלילי:</p>
            <FormulaBox>{`x-2 \\ge 0`}</FormulaBox>
            <FormulaBox>{`x \\ge 2`}</FormulaBox>
            <p>תחום ההגדרה הוא <FormulaBox inline>{`x \\ge 2`}</FormulaBox>.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. נגזרת של פונקציית שורש</h3>
          <p>הנוסחה לגזירת פונקציית שורש ריבועי <FormulaBox inline>{`f(x) = \\sqrt{u(x)}`}</FormulaBox> (כאשר <FormulaBox inline>{`u(x)`}</FormulaBox> היא פונקציה גזירה) היא:</p>
          <FormulaBox>{`f'(x) = (\\sqrt{u(x)})' = \\frac{u'(x)}{2\\sqrt{u(x)}}`}</FormulaBox>
          <p>חשוב לשים לב שתחום ההגדרה של הנגזרת עשוי להיות קטן יותר מתחום ההגדרה של הפונקציה המקורית, מכיוון שהמכנה <FormulaBox inline>{`2\\sqrt{u(x)}`}</FormulaBox> אינו יכול להתאפס (כלומר, <FormulaBox inline>{`u(x) > 0`}</FormulaBox>).</p>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-4">
            <p className="font-medium"><strong>דוגמה (ממסמך המחקר):</strong> גזור את הפונקציה <FormulaBox inline>{`f(x) = \\sqrt{2x+3}`}</FormulaBox>.</p>
            <p><strong>פתרון:</strong></p>
            <p>נסמן <FormulaBox inline>{`u(x) = 2x+3`}</FormulaBox>. לכן, <FormulaBox inline>{`u'(x) = 2`}</FormulaBox>.</p>
            <p>נשתמש בנוסחת הנגזרת:</p>
            <FormulaBox>{`f'(x) = \\frac{u'(x)}{2\\sqrt{u(x)}} = \\frac{2}{2\\sqrt{2x+3}} = \\frac{1}{\\sqrt{2x+3}}`}</FormulaBox>
            <p>תחום ההגדרה של הפונקציה הוא <FormulaBox inline>{`2x+3 \\ge 0 \\Rightarrow x \\ge -1.5`}</FormulaBox>.</p>
            <p>תחום ההגדרה של הנגזרת הוא <FormulaBox inline>{`2x+3 > 0 \\Rightarrow x > -1.5`}</FormulaBox>.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. חקירת פונקציית שורש</h3>
          <p>החקירה כוללת:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>מציאת תחום ההגדרה</li>
            <li>חישוב הנגזרת</li>
            <li>מציאת נקודות חשודות לקיצון</li>
            <li>בדיקת התנהגות בקצוות התחום</li>
            <li>בדיקת עליה וירידה</li>
            <li>שרטוט גרף</li>
          </ul>

          <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 space-y-3 my-4">
            <p className="font-medium text-blue-800"><strong>דוגמה מלאה:</strong> חקור את הפונקציה <FormulaBox inline>{`f(x) = \\sqrt{x}`}</FormulaBox>.</p>
            <p><strong>פתרון:</strong></p>
            <p>1. <strong>תחום הגדרה:</strong> <FormulaBox inline>{`x \\ge 0`}</FormulaBox>.</p>
            <p>2. <strong>נגזרת:</strong> <FormulaBox inline>{`f'(x) = \\frac{1}{2\\sqrt{x}}`}</FormulaBox> עבור <FormulaBox inline>{`x > 0`}</FormulaBox>.</p>
            <p>3. <strong>נקודות חשודות לקיצון:</strong></p>
            <ul className="list-disc pr-4">
              <li><FormulaBox inline>{`f'(x) > 0`}</FormulaBox> לכל <FormulaBox inline>{`x > 0`}</FormulaBox> - הפונקציה עולה</li>
              <li>אין נקודות קיצון פנימיות</li>
            </ul>
            <p>4. <strong>התנהגות בקצוות:</strong></p>
            <ul className="list-disc pr-4">
              <li>כאשר <FormulaBox inline>{`x \\to 0^+`}</FormulaBox>: <FormulaBox inline>{`f(x) \\to 0`}</FormulaBox></li>
              <li>כאשר <FormulaBox inline>{`x \\to +\\infty`}</FormulaBox>: <FormulaBox inline>{`f(x) \\to +\\infty`}</FormulaBox></li>
            </ul>
            <p>הנקודה <FormulaBox inline>{`(0,0)`}</FormulaBox> היא נקודת קצה. מכיוון שהפונקציה יורדת ימינה ממנה, היא מהווה נקודת מקסימום קצה.</p>
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
        </h2>
        <Quiz questions={quizQuestions} lessonId={lessonId} />
      </section>
    </LessonLayout>
  );
};

export default CalculusSquareRootLesson;
