import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const CalculusRationalLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: 'מצא את תחום ההגדרה והאסימפטוטות (אם יש) של הפונקציה',
      formula: 'f(x) = \\frac{3x}{x^2-4}',
      fields: [
        { id: 'domain', label: 'תחום הגדרה', placeholder: 'לדוגמה: x≠1, x≠-2' },
        { id: 'vertical', label: 'אסימפטוטות אנכיות', placeholder: 'לדוגמה: x=1, x=-2 (אם אין, רשום "אין")' },
        { id: 'horizontal', label: 'אסימפטוטה אופקית', placeholder: 'לדוגמה: y=0 (אם אין, רשום "אין")' }
      ],
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>הפונקציה: <FormulaBox inline>{`f(x) = \\frac{3x}{x^2-4}`}</FormulaBox>.</p>
          <p>1. <strong>תחום הגדרה:</strong> המכנה שונה מאפס. <FormulaBox inline>{`x^2-4 \\neq 0 \\Rightarrow x^2 \\neq 4 \\Rightarrow x \\neq \\pm 2`}</FormulaBox>.</p>
          <p>תחום ההגדרה: <FormulaBox inline>{`x \\neq 2`}</FormulaBox> וגם <FormulaBox inline>{`x \\neq -2`}</FormulaBox>.</p>
          <p>2. <strong>אסימפטוטות אנכיות:</strong> נבדוק את מאפסי המכנה: <FormulaBox inline>{`x=2, x=-2`}</FormulaBox>.</p>
          <p>המונה <FormulaBox inline>{`3x`}</FormulaBox> אינו מתאפס עבור ערכים אלו (<FormulaBox inline>{`3(2)=6 \\neq 0`}</FormulaBox>, <FormulaBox inline>{`3(-2)=-6 \\neq 0`}</FormulaBox>).</p>
          <p>לכן, האסימפטוטות האנכיות הן <FormulaBox inline>{`x=2`}</FormulaBox> ו-<FormulaBox inline>{`x=-2`}</FormulaBox>.</p>
          <p>3. <strong>אסימפטוטה אופקית:</strong> החזקה הגבוהה במונה היא 1 (<FormulaBox inline>{`3x^1`}</FormulaBox>). החזקה הגבוהה במכנה היא 2 (<FormulaBox inline>{`x^2`}</FormulaBox>).</p>
          <p>מכיוון שחזקת המונה (1) קטנה מחזקת המכנה (2), האסימפטוטה האופקית היא <FormulaBox inline>{`y=0`}</FormulaBox>.</p>
          <p><strong>תשובה:</strong> תחום הגדרה: <FormulaBox inline>{`x \\neq 2, x \\neq -2`}</FormulaBox>. אסימפטוטות אנכיות: <FormulaBox inline>{`x=2, x=-2`}</FormulaBox>. אסימפטוטה אופקית: <FormulaBox inline>{`y=0`}</FormulaBox>.</p>
        </div>
      ),
      checkAnswer: (answers) => {
        const domain = answers.domain?.toLowerCase().trim();
        const vertical = answers.vertical?.toLowerCase().trim();
        const horizontal = answers.horizontal?.toLowerCase().trim();
        
        const domainCorrect = domain.includes('x≠2') || domain.includes('x≠-2') || domain.includes('x!=2') || domain.includes('x!=-2');
        const verticalCorrect = (vertical.includes('x=2') && vertical.includes('x=-2')) || (vertical.includes('x=-2') && vertical.includes('x=2'));
        const horizontalCorrect = horizontal.includes('y=0') || horizontal.includes('y = 0');
        
        if (domainCorrect && verticalCorrect && horizontalCorrect) {
          return { correct: true, message: 'כל הכבוד! כל התשובות נכונות.' };
        } else {
          let feedback = 'בדוק שוב. ';
          if (!domainCorrect) feedback += 'תחום ההגדרה: המכנה לא יכול להיות אפס. ';
          if (!verticalCorrect) feedback += 'אסימפטוטות אנכיות: בנקודות שבהן המכנה מתאפס אך המונה לא. ';
          if (!horizontalCorrect) feedback += 'אסימפטוטה אופקית: השווה חזקות המונה והמכנה. ';
          return { correct: false, message: feedback };
        }
      }
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהו תחום ההגדרה של הפונקציה',
      formula: 'f(x) = \\frac{5}{x-7}',
      options: [
        { value: 'a', label: 'כל x' },
        { value: 'b', label: 'x ≠ 7' },
        { value: 'c', label: 'x ≠ 5' }
      ],
      correct: 'b',
      explanation: 'תחום ההגדרה הוא כל הערכים שבהם המכנה שונה מאפס. x-7≠0 לכן x≠7.'
    },
    {
      id: 'q2',
      question: 'מהי האסימפטוטה האופקית של הפונקציה',
      formula: 'f(x) = \\frac{6x^2+1}{2x^2-x}',
      options: [
        { value: 'a', label: 'y=0' },
        { value: 'b', label: 'y=3' },
        { value: 'c', label: 'אין אסימפטוטה אופקית' }
      ],
      correct: 'b',
      explanation: 'החזקות הגבוהות במונה ובמכנה שוות (x²), לכן האסימפטוטה האופקית היא יחס המקדמים: 6/2 = 3, כלומר y=3.'
    }
  ];

  return (
    <LessonLayout
      title="פונקציה רציונלית (חדו״א)"
      breadcrumbs={[
        { label: 'דף ראשי', href: '/' },
        { label: 'שאלון 35382', href: '/lessons' },
        { label: 'חשבון דיפרנציאלי ואינטגרלי (חדו״א)' },
        { label: 'פונקציה רציונלית' }
      ]}
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: חקירת פונקציה רציונלית
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">          <p>
            פונקציה רציונלית היא פונקציה מהצורה <FormulaBox inline>{`f(x) = \\frac{P(x)}{Q(x)}`}</FormulaBox>, 
            כאשר <FormulaBox inline>{`P(x)`}</FormulaBox> ו-<FormulaBox inline>{`Q(x)`}</FormulaBox> הם פולינומים, 
            ו-<FormulaBox inline>{`Q(x) \\neq 0`}</FormulaBox>.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. תחום הגדרה</h3>
          <p>
            תחום ההגדרה כולל את כל הערכים שבהם המכנה שונה מאפס: <FormulaBox inline>{`Q(x) \\neq 0`}</FormulaBox>
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. אסימפטוטות אנכיות</h3>
          <p>
            אסימפטוטות אנכיות נמצאות בנקודות שבהן <FormulaBox inline>{`Q(x) = 0`}</FormulaBox> אך <FormulaBox inline>{`P(x) \\neq 0`}</FormulaBox>
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. אסימפטוטות אופקיות</h3>
          <ul className="space-y-2 mr-4">
            <li>• אם חזקת המכנה גדולה מחזקת המונה: <FormulaBox inline>{`y = 0`}</FormulaBox></li>
            <li>• אם החזקות שוות: <FormulaBox inline>{`y = \\frac{a}{b}`}</FormulaBox> (יחס המקדמים המובילים)</li>
            <li>• אם חזקת המונה גדולה: אין אסימפטוטה אופקית</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">4. נגזרת של פונקציה רציונלית</h3>
          <p>
            נשתמש בכלל המנה:
          </p>
          <FormulaBox>{`\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}`}</FormulaBox>
          
          <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-400">
            <p className="font-medium">דוגמה: נגזרת של <FormulaBox inline>{`f(x) = \\frac{2x+1}{x-3}`}</FormulaBox></p>
            <p>נסמן: <FormulaBox inline>{`u = 2x+1`}</FormulaBox>, <FormulaBox inline>{`v = x-3`}</FormulaBox></p>
            <p><FormulaBox inline>{`u' = 2`}</FormulaBox>, <FormulaBox inline>{`v' = 1`}</FormulaBox></p>
            <p>לכן:</p>
            <FormulaBox>{`f'(x) = \\frac{2(x-3) - (2x+1) \\cdot 1}{(x-3)^2} = \\frac{2x-6-2x-1}{(x-3)^2} = \\frac{-7}{(x-3)^2}`}</FormulaBox>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4 border-b-2 border-green-200 pb-2">
          מתרגלים
        </h2>
        {exercises.map((exercise) => (
          <Exercise key={exercise.id} {...exercise} />
        ))}
      </section>

      {/* Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
          בוחן
        </h2>
        <Quiz questions={quizQuestions} />
      </section>
    </LessonLayout>
  );
};

export default CalculusRationalLesson;
