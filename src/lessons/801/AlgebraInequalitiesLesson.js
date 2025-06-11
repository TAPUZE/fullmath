import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import StepByStepSolution from '../../components/math/StepByStepSolution';

const AlgebraInequalitiesLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: (
        <div>
          <p>תרגיל 1: פתור את האי-שוויון הבא:</p>
          <FormulaBox>3(x-1) \leq 2x+5</FormulaBox>
          <p>רשום את הפתרון (למשל: x&lt;=8).</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        type: 'text',
        placeholder: 'הכנס פתרון'
      }],
      correctAnswers: {
        answer: 'x<=8'
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "פתיחת סוגריים:", formula: "3x - 3 \\leq 2x+5" },
            { step: "העברת אגפים:", formula: "3x - 2x \\leq 5 + 3" },
            { step: "כינוס איברים:", formula: "x \\leq 8" },
            { step: "הפתרון הוא:", formula: "x \\leq 8", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: (
        <div>
          <p>תרגיל 2: פתור את האי-שוויון הבא:</p>
          <FormulaBox>x^2 - 3x - 4 &gt; 0</FormulaBox>
          <p>רשום את הפתרון (למשל: x&lt;-1 or x&gt;4).</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        type: 'text',
        placeholder: 'הכנס פתרון'
      }],
      correctAnswers: {
        answer: 'x<-1 or x>4'
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "1. נמצא שורשי", formula: "x^2 - 3x - 4 = 0" },
            { step: "פירוק לגורמים:", formula: "(x-4)(x+1)=0" },
            { step: "השורשים הם:", formula: "x_1=4, x_2=-1" },
            { step: "2. הפרבולה \"צוחקת\"", formula: "a=1 &gt; 0" },
            { step: "3. אנו מחפשים &gt; 0 (מעל ציר ה-x). זה קורה מחוץ לשורשים." },
            { step: "הפתרון הוא:", formula: "x &lt; -1 \\text{ או } x &gt; 4", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex3',
      question: (
        <div>
          <p>תרגיל 3: פתור את האי-שוויון הבא:</p>
          <FormulaBox>-2x + 6 &gt; 10</FormulaBox>
          <p>רשום את הפתרון.</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        type: 'text',
        placeholder: 'הכנס פתרון'
      }],
      correctAnswers: {
        answer: 'x<-2'
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "העברת אגפים:", formula: "-2x &gt; 10 - 6" },
            { step: "פישוט:", formula: "-2x &gt; 4" },
            { step: "חילוק ב-2- (מספר שלילי - הופכים את כיוון האי-שוויון):", formula: "x &lt; \\frac{4}{-2}" },
            { step: "פתרון סופי:", formula: "x &lt; -2", highlight: true }
          ]}
        />
      )
    }
  ];

  return (
    <LessonLayout
      title="אי-שוויונות ממעלה ראשונה ושנייה"
      lessonId="35182-algebra-inequalities"
      nextLessonPath="/lesson/35182-algebra-percentages"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            אי-שוויון הוא ביטוי מתמטי הקובע כי שני ערכים אינם שווים זה לזה. במקום סימן השוויון (=), 
            אנו משתמשים בסימני אי-שוויון: <FormulaBox inline>&lt;</FormulaBox> (קטן מ-), 
            <FormulaBox inline>&gt;</FormulaBox> (גדול מ-), <FormulaBox inline>\leq</FormulaBox> (קטן או שווה ל-), 
            <FormulaBox inline>\geq</FormulaBox> (גדול או שווה ל-).
          </p>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">אי-שוויונות ממעלה ראשונה (אי-שוויונות קוויים)</h4>
            <p>אלו אי-שוויונות שבהם הנעלם מופיע בחזקה ראשונה בלבד. פותרים אותם באופן דומה למשוואות ממעלה ראשונה, 
            אך עם כלל חשוב אחד:</p>
            <p className="font-semibold text-red-600 mt-2">
              כאשר כופלים או מחלקים את שני אגפי האי-שוויון במספר שלילי, יש להפוך את כיוון סימן האי-שוויון.
            </p>
          </div>

          <div className="bg-green-50 border-r-4 border-green-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">אי-שוויונות ממעלה שנייה (אי-שוויונות ריבועיים)</h4>
            <p>אלו אי-שוויונות מהצורה ax²+bx+c &gt; 0 (או &lt;, ≤, ≥), כאשר a ≠ 0.</p>
            <ol className="list-decimal list-inside space-y-2 pr-5 mt-2">
              <li>מעבירים את כל האיברים לאגף אחד כך שבאגף השני יישאר 0.</li>
              <li>מוצאים את שורשי המשוואה הריבועית המתאימה.</li>
              <li>משרטטים סקיצה של פרבולה לפי סימן a.</li>
              <li>קובעים את התחומים שבהם האי-שוויון מתקיים.</li>
            </ol>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה:</h4>
            <p className="font-medium">פתור את האי-שוויון 2x-7 &gt; 5x+2</p>
            
            <StepByStepSolution
              title="פתרון מלא:"
              steps={[
                { step: "1. העברת אגפים (נעלמים שמאלה, מספרים ימינה):", formula: "2x - 5x &gt; 2 + 7" },
                { step: "2. כינוס איברים:", formula: "-3x &gt; 9" },
                { step: "3. חילוק במקדם של x (שהוא -3, מספר שלילי). נחלק ב-3- ונהפוך את סימן האי-שוויון:", formula: "x &lt; \\frac{9}{-3}" },
                { step: "פתרון האי-שוויון הוא:", formula: "x &lt; -3", highlight: true }
              ]}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">טיפים חשובים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5">
              <li>תמיד לשים לב לסימן המקדם של x בעת חילוק או כפל.</li>
              <li>באי-שוויונות ריבועיים, חשוב לשרטט סקיצה של הפרבולה.</li>
              <li>לבדוק את הפתרון על ידי הצבה של מספרים מהתחום.</li>
              <li>לזכור שכאשר כופלים או מחלקים במספר שלילי, הופכים את סימן האי-שוויון.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        
        <div className="space-y-8">
          {exercises.map((exercise) => (
            <InteractiveExercise
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              inputs={exercise.inputs}
              correctAnswers={exercise.correctAnswers}
              solution={exercise.solution}
              lessonId="algebra-inequalities"
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz
        title="בחן את עצמך 🧐"
        questions={[
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
            question: 'איך פותרים אי-שוויון ריבועי מהצורה ax² + bx + c &gt; 0?',
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
        ]}
      />
    </LessonLayout>
  );
};

export default AlgebraInequalitiesLesson;
