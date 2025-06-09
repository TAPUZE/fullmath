import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import LessonSection from '../../components/lesson/LessonSection';
import ExampleBox from '../../components/lesson/ExampleBox';
import FormulaDefinition from '../../components/lesson/FormulaDefinition';
import StepByStep from '../../components/lesson/StepByStep';

const AlgebraInequalitiesLesson = () => {
  // Exercise solutions using StepByStep component
  const exercise1Steps = [
    { step: "פתיחת סוגריים:", formula: "3x - 3 \\leq 2x+5" },
    { step: "העברת אגפים:", formula: "3x - 2x \\leq 5 + 3" },
    { step: "כינוס איברים:", formula: "x \\leq 8" },
    { step: "הפתרון הוא:", formula: "x \\leq 8", highlight: true }
  ];

  const exercise2Steps = [
    { step: "1. נמצא שורשי", formula: "x^2 - 3x - 4 = 0" },
    { step: "פירוק לגורמים:", formula: "(x-4)(x+1)=0" },
    { step: "השורשים הם:", formula: "x_1=4, x_2=-1" },
    { step: "2. הפרבולה \"צוחקת\"", formula: "a=1 > 0" },
    { step: "3. אנו מחפשים > 0 (מעל ציר ה-x). זה קורה מחוץ לשורשים." },
    { step: "הפתרון הוא:", formula: "x < -1 \\text{ או } x > 4", highlight: true }
  ];

  const exercise3Steps = [
    { step: "העברת אגפים:", formula: "-2x > 10 - 6" },
    { step: "פישוט:", formula: "-2x > 4" },
    { step: "חילוק ב-2- (מספר שלילי - הופכים את כיוון האי-שוויון):", formula: "x < \\frac{4}{-2}" },
    { step: "פתרון סופי:", formula: "x < -2", highlight: true }
  ];

  const exercises = [
    {
      id: 'ex1',
      question: 'פתור את האי-שוויון \\(3(x-1) \\leq 2x+5\\). רשום את הפתרון (למשל: x<=8).',
      correctAnswer: 'x<=8',
      tolerance: 0.01,
      solution: (
        <StepByStep 
          title="פתרון מלא:"
          initialFormula="3(x-1) \\leq 2x+5"
          steps={exercise1Steps}
          variant="solution"
        />
      )
    },
    {
      id: 'ex2',
      question: 'פתור את האי-שוויון \\(x^2 - 3x - 4 > 0\\). רשום את הפתרון (למשל: x<-1 or x>4).',
      correctAnswer: 'x<-1 or x>4',
      tolerance: 0.01,
      solution: (
        <StepByStep 
          title="פתרון מלא:"
          steps={exercise2Steps}
          variant="solution"
        />
      )
    },
    {
      id: 'ex3',
      question: 'פתור את האי-שוויון \\(-2x + 6 > 10\\). רשום את הפתרון.',
      correctAnswer: 'x<-2',
      tolerance: 0.01,
      solution: (
        <StepByStep 
          title="פתרון:"
          initialFormula="-2x + 6 > 10"
          steps={exercise3Steps}
          variant="solution"
        />
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מה קורה לכיוון האי-שוויון כאשר כופלים או מחלקים במספר שלילי?',
      options: [
        'הכיוון נשאר אותו דבר',
        'הכיוון מתהפך',
        'האי-שוויון הופך למשוואה',
        'האי-שוויון נעלם'
      ],
      correctAnswer: 'הכיוון מתהפך',
      explanation: 'כאשר כופלים או מחלקים את שני אגפי האי-שוויון במספר שלילי, יש להפוך את כיוון סימן האי-שוויון.'
    },
    {
      id: 'q2',
      question: 'איך פותרים אי-שוויון ריבועי מהצורה ax² + bx + c > 0?',
      options: [
        'רק בעזרת נוסחת השורשים',
        'מוצאים שורשים ובודקים סימן הפרבולה',
        'מציבים ערכים אקראיים',
        'אי אפשר לפתור'
      ],
      correctAnswer: 'מוצאים שורשים ובודקים סימן הפרבולה',
      explanation: 'פותרים על ידי מציאת שורשי המשוואה הריבועית, שרטוט סקיצה של הפרבולה, וקביעת התחומים לפי הסימן הנדרש.'
    },
    {
      id: 'q3',
      question: 'מהו הפתרון של האי-שוויון x² - 9 ≤ 0?',
      options: [
        'x ≤ -3 או x ≥ 3',
        '-3 ≤ x ≤ 3',
        'x ≤ 3',
        'x ≥ -3'
      ],
      correctAnswer: '-3 ≤ x ≤ 3',
      explanation: 'השורשים הם ±3. הפרבולה צוחקת, ואנו מחפשים ≤ 0 (מתחת לציר או עליו), כלומר בין השורשים כולל השורשים עצמם.'
    }
  ];

  // Parabola visualization component
  const ParabolaSketch = ({ roots, direction = "up", highlight = "between" }) => (
    <div className="flex justify-center my-4">
      <svg width="200" height="120" viewBox="0 0 200 120" className="border border-gray-300 rounded">
        {/* X-axis */}
        <line x1="0" y1="70" x2="200" y2="70" stroke="black" strokeWidth="1"/>
        
        {/* Parabola */}
        {direction === "up" ? (
          <path d="M50 70 Q100 100 150 70" stroke="blue" fill="none" strokeWidth="2"/>
        ) : (
          <path d="M50 70 Q100 40 150 70" stroke="blue" fill="none" strokeWidth="2"/>
        )}
        
        {/* Root points */}
        <circle cx="50" cy="70" r="3" fill="black"/>
        <text x="45" y="90" fontSize="12">{roots[0]}</text>
        <circle cx="150" cy="70" r="3" fill="black"/>
        <text x="145" y="90" fontSize="12">{roots[1]}</text>
        
        {/* Highlight regions */}
        {highlight === "between" && (
          <line x1="50" y1="60" x2="150" y2="60" stroke="red" strokeWidth="3"/>
        )}
        {highlight === "outside" && (
          <>
            <line x1="10" y1="60" x2="50" y2="60" stroke="red" strokeWidth="3"/>
            <line x1="150" y1="60" x2="190" y2="60" stroke="red" strokeWidth="3"/>
          </>
        )}
      </svg>
    </div>
  );

  return (
    <LessonLayout
      title="אי-שוויונות ממעלה ראשונה ושנייה"
      lessonId="35182-algebra-inequalities"
      nextLessonPath="/lesson/35182-algebra-percentages"
    >      {/* Learn Section */}
      <LessonSection title="לומדים" icon="📚" titleColor="purple">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>אי-שוויון הוא ביטוי מתמטי הקובע כי שני ערכים אינם שווים זה לזה. במקום סימן השוויון (=), אנו משתמשים בסימני אי-שוויון: <FormulaBox inline>&lt;</FormulaBox> (קטן מ-), <FormulaBox inline>&gt;</FormulaBox> (גדול מ-), <FormulaBox inline>\leq</FormulaBox> (קטן או שווה ל-), <FormulaBox inline>\geq</FormulaBox> (גדול או שווה ל-).</p>
          
          <FormulaDefinition
            title="אי-שוויונות ממעלה ראשונה (אי-שוויונות קוויים)"
            content="אלו אי-שוויונות שבהם הנעלם מופיע בחזקה ראשונה בלבד. פותרים אותם באופן דומה למשוואות ממעלה ראשונה (פתיחת סוגריים, כינוס איברים, העברת אגפים), אך עם כלל חשוב אחד:"
            highlight="כאשר כופלים או מחלקים את שני אגפי האי-שוויון במספר שלילי, יש להפוך את כיוון סימן האי-שוויון."
            highlightColor="red"
          />

          <ExampleBox
            title="דוגמה פתורה:"
            question="פתור את האי-שוויון 2x-7 > 5x+2"
            content={
              <StepByStep
                title="פתרון:"
                steps={[
                  { step: "1. העברת אגפים (נעלמים שמאלה, מספרים ימינה):", formula: "2x - 5x > 2 + 7" },
                  { step: "2. כינוס איברים:", formula: "-3x > 9" },
                  { step: "3. חילוק במקדם של x (שהוא -3, מספר שלילי). נחלק ב-3- ונהפוך את סימן האי-שוויון:", formula: "x < \\frac{9}{-3}" },
                  { step: "פתרון האי-שוויון הוא:", formula: "x < -3", highlight: true }
                ]}
                variant="example"
              />
            }
          />

          <FormulaDefinition
            title="אי-שוויונות ממעלה שנייה (אי-שוויונות ריבועיים)"
            content="אלו אי-שוויונות מהצורה ax²+bx+c > 0 (או <, ≤, ≥), כאשר a ≠ 0."
          />

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-3 text-blue-800">שלבי פתרון נפוצים:</h4>
            <ol className="list-decimal list-inside space-y-2 pr-5">
              <li>מעבירים את כל האיברים לאגף אחד כך שבאגף השני יישאר 0.</li>
              <li>מוצאים את שורשי המשוואה הריבועית המתאימה (כלומר, פותרים <FormulaBox inline>ax^2+bx+c = 0</FormulaBox>). שורשים אלו נקראים "נקודות האפס" של הביטוי הריבועי.</li>
              <li>משרטטים סקיצה של פרבולה:
                <ul className="list-disc list-inside space-y-1 pr-5 mt-1">
                  <li>אם <FormulaBox inline>a &gt; 0</FormulaBox>, הפרבולה "צוחקת" (קעורה כלפי מעלה, ∪).</li>
                  <li>אם <FormulaBox inline>a &lt; 0</FormulaBox>, הפרבולה "בוכה" (קעורה כלפי מטה, ∩).</li>
                </ul>
                מסמנים על ציר ה-<FormulaBox inline>x</FormulaBox> את נקודות האפס שמצאנו.
              </li>
              <li>קובעים את התחומים שבהם האי-שוויון מתקיים על פי הסקיצה:
                <ul className="list-disc list-inside space-y-1 pr-5 mt-1">
                  <li>אם מחפשים <FormulaBox inline>&gt; 0</FormulaBox>, בוחרים את התחומים שבהם הפרבולה מעל ציר ה-<FormulaBox inline>x</FormulaBox>.</li>
                  <li>אם מחפשים <FormulaBox inline>&lt; 0</FormulaBox>, בוחרים את התחומים שבהם הפרבולה מתחת לציר ה-<FormulaBox inline>x</FormulaBox>.</li>
                </ul>
                (אם האי-שוויון כולל "שווה ל-", יש לכלול גם את נקודות האפס בפתרון).
              </li>
            </ol>
          </div>

          <ExampleBox
            title="דוגמה פתורה:"
            question="פתור את האי-שוויון x²-7x+10 < 0"
            content={
              <div>
                <StepByStep
                  title="פתרון:"
                  steps={[
                    { step: "1. האי-שוויון כבר מסודר עם 0 באגף ימין." },
                    { step: "2. נמצא את שורשי המשוואה:", formula: "x^2-7x+10 = 0" },
                    { step: "באמצעות פירוק לגורמים:", formula: "(x-2)(x-5)=0" },
                    { step: "השורשים הם:", formula: "x_1=2, x_2=5" },
                    { step: "3. סקיצה של פרבולה: כאן a=1 (המקדם של x²), שהוא חיובי (a>0), לכן הפרבולה \"צוחקת\". היא חותכת את ציר ה-x בנקודות 2 ו-5." }
                  ]}
                  variant="example"
                />
                
                <ParabolaSketch roots={[2, 5]} direction="up" highlight="between" />
                <p className="text-sm text-gray-600 text-center mb-4">(סקיצה של פרבולה צוחקת החותכת ב-2 וב-5, אדום מסמן את הפתרון)</p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p><strong>4. קביעת התחום:</strong> אנו מחפשים x²-7x+10 &lt; 0, כלומר, מתי הפרבולה נמצאת <strong>מתחת</strong> לציר ה-x. על פי הסקיצה, זה קורה בין השורשים.</p>
                  <p className="mt-2">לכן, הפתרון הוא <FormulaBox inline>2 &lt; x &lt; 5</FormulaBox>.</p>
                </div>
              </div>
            }
          />
        </div>
      </LessonSection>      {/* Practice Section */}
      <LessonSection title="מתרגלים" icon="✍️" titleColor="purple">
        <div className="space-y-6">          {exercises.map((exercise, index) => (
            <InteractiveExercise 
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              correctAnswer={exercise.correctAnswer}
              tolerance={exercise.tolerance}
              solution={exercise.solution}
            />
          ))}
        </div>
      </LessonSection>

      {/* Quiz Section */}
      <LessonSection title="בוחן ידע" icon="🧪" titleColor="purple">
        <Quiz questions={quizQuestions} />
      </LessonSection>
    </LessonLayout>
  );
};

export default AlgebraInequalitiesLesson;
