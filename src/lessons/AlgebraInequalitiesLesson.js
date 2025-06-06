import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const AlgebraInequalitiesLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: 'פתור את האי-שוויון \\(3(x-1) \\leq 2x+5\\). רשום את הפתרון (למשל: x<=8).',
      correctAnswer: 'x<=8',
      tolerance: 0.01,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>          <FormulaBox>3(x-1) \leq 2x+5</FormulaBox>
          <p>פתיחת סוגריים:</p>
          <FormulaBox>3x - 3 \leq 2x+5</FormulaBox>
          <p>העברת אגפים:</p>
          <FormulaBox>3x - 2x \leq 5 + 3</FormulaBox>
          <p>כינוס איברים:</p>
          <FormulaBox>x \leq 8</FormulaBox>
          <p>הפתרון הוא: <FormulaBox inline>x \leq 8</FormulaBox>.</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'פתור את האי-שוויון \\(x^2 - 3x - 4 > 0\\). רשום את הפתרון (למשל: x<-1 or x>4).',
      correctAnswer: 'x<-1 or x>4',
      tolerance: 0.01,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>          <p>1. נמצא שורשי <FormulaBox inline>x^2 - 3x - 4 = 0</FormulaBox>.</p>
          <p>פירוק לגורמים: <FormulaBox inline>(x-4)(x+1)=0</FormulaBox>.</p>
          <p>השורשים הם <FormulaBox inline>x_1=4, x_2=-1</FormulaBox>.</p>
          <p>2. הפרבולה "צוחקת" (<FormulaBox inline>a=1 &gt; 0</FormulaBox>).</p>
          <p>3. אנו מחפשים <FormulaBox inline>&gt; 0</FormulaBox> (מעל ציר ה-x). זה קורה מחוץ לשורשים.</p>
          <p>הפתרון הוא: <FormulaBox inline>x &lt; -1</FormulaBox> או <FormulaBox inline>x &gt; 4</FormulaBox>.</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פתור את האי-שוויון \\(-2x + 6 > 10\\). רשום את הפתרון.',
      correctAnswer: 'x<-2',
      tolerance: 0.01,
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>          <FormulaBox>-2x + 6 &gt; 10</FormulaBox>
          <p>העברת אגפים:</p>
          <FormulaBox>-2x &gt; 10 - 6</FormulaBox>
          <FormulaBox>-2x &gt; 4</FormulaBox>
          <p>חילוק ב-2- (מספר שלילי - הופכים את כיוון האי-שוויון):</p>
          <FormulaBox>x &lt; \frac{4}{-2}</FormulaBox>
          <FormulaBox>x &lt; -2</FormulaBox>
        </div>
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
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">לומדים 📚</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>אי-שוויון הוא ביטוי מתמטי הקובע כי שני ערכים אינם שווים זה לזה. במקום סימן השוויון (=), אנו משתמשים בסימני אי-שוויון: <FormulaBox inline>&lt;</FormulaBox> (קטן מ-), <FormulaBox inline>&gt;</FormulaBox> (גדול מ-), <FormulaBox inline>\leq</FormulaBox> (קטן או שווה ל-), <FormulaBox inline>\geq</FormulaBox> (גדול או שווה ל-).</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">אי-שוויונות ממעלה ראשונה (אי-שוויונות קוויים)</h3>
          <p>אלו אי-שוויונות שבהם הנעלם מופיע בחזקה ראשונה בלבד. פותרים אותם באופן דומה למשוואות ממעלה ראשונה (פתיחת סוגריים, כינוס איברים, העברת אגפים), אך עם כלל חשוב אחד:</p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
            <p className="font-semibold text-red-600">כאשר כופלים או מחלקים את שני אגפי האי-שוויון במספר שלילי, יש להפוך את כיוון סימן האי-שוויון.</p>
          </div>

          <h4 className="text-lg font-semibold mt-4 mb-1">דוגמה פתורה:</h4>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">            <p className="font-medium">שאלה: פתור את האי-שוויון <FormulaBox inline>2x-7 &gt; 5x+2</FormulaBox>.</p>
            <p className="mt-2"><strong>פתרון:</strong></p>
            <p>1. העברת אגפים (נעלמים שמאלה, מספרים ימינה):</p>
            <FormulaBox>2x - 5x &gt; 2 + 7</FormulaBox>
            <p>2. כינוס איברים:</p>
            <FormulaBox>-3x &gt; 9</FormulaBox>
            <p>3. חילוק במקדם של <FormulaBox inline>x</FormulaBox> (שהוא <FormulaBox inline>-3</FormulaBox>, מספר שלילי). נחלק ב-<FormulaBox inline>-3</FormulaBox> ונהפוך את סימן האי-שוויון:</p>
            <FormulaBox>x &lt; \frac{9}{-3}</FormulaBox>
            <FormulaBox>x &lt; -3</FormulaBox>
            <p className="mt-2">פתרון האי-שוויון הוא <FormulaBox inline>x &lt; -3</FormulaBox>.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">אי-שוויונות ממעלה שנייה (אי-שוויונות ריבועיים)</h3>
          <p>אלו אי-שוויונות מהצורה <FormulaBox inline>ax^2+bx+c &gt; 0</FormulaBox> (או <FormulaBox inline>&lt;, \leq, \geq</FormulaBox>), כאשר <FormulaBox inline>a \neq 0</FormulaBox>.</p>
          <p>שלבי פתרון נפוצים:</p>
          <ol className="list-decimal list-inside space-y-2 pr-5">
            <li>מעבירים את כל האיברים לאגף אחד כך שבאגף השני יישאר 0.</li>            <li>מוצאים את שורשי המשוואה הריבועית המתאימה (כלומר, פותרים <FormulaBox inline>ax^2+bx+c = 0</FormulaBox>). שורשים אלו נקראים "נקודות האפס" של הביטוי הריבועי.</li>
            <li>משרטטים סקיצה של פרבולה:
              <ul className="list-disc list-inside space-y-1 pr-5 mt-1">
                <li>אם <FormulaBox inline>a &gt; 0</FormulaBox>, הפרבולה "צוחקת" (קעורה כלפי מעלה, ∪).</li>
                <li>אם <FormulaBox inline>a &lt; 0</FormulaBox>, הפרבולה "בוכה" (קעורה כלפי מטה, ∩).</li>
              </ul>
              מסמנים על ציר ה-<FormulaBox inline>x</FormulaBox> את נקודות האפס שמצאנו.
            </li>
            <li>קובעים את התחומים שבהם האי-שוויון מתקיים על פי הסקיצה:
              <ul className="list-disc list-inside space-y-1 pr-5 mt-1">                <li>אם מחפשים <FormulaBox inline>&gt; 0</FormulaBox>, בוחרים את התחומים שבהם הפרבולה מעל ציר ה-<FormulaBox inline>x</FormulaBox>.</li>
                <li>אם מחפשים <FormulaBox inline>&lt; 0</FormulaBox>, בוחרים את התחומים שבהם הפרבולה מתחת לציר ה-<FormulaBox inline>x</FormulaBox>.</li>
              </ul>
              (אם האי-שוויון כולל "שווה ל-", יש לכלול גם את נקודות האפס בפתרון).
            </li>
          </ol>

          <h4 className="text-lg font-semibold mt-4 mb-1">דוגמה פתורה:</h4>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">            <p className="font-medium">שאלה: פתור את האי-שוויון <FormulaBox inline>x^2-7x+10 &lt; 0</FormulaBox>.</p>
            <p className="mt-2"><strong>פתרון:</strong></p>
            <p>1. האי-שוויון כבר מסודר עם 0 באגף ימין.</p>
            <p>2. נמצא את שורשי המשוואה <FormulaBox inline>x^2-7x+10 = 0</FormulaBox>:</p>
            <p>באמצעות פירוק לגורמים: <FormulaBox inline>(x-2)(x-5)=0</FormulaBox>. השורשים הם <FormulaBox inline>x_1=2, x_2=5</FormulaBox>.</p>
            <p>3. סקיצה של פרבולה: כאן <FormulaBox inline>a=1</FormulaBox> (המקדם של <FormulaBox inline>x^2</FormulaBox>), שהוא חיובי (<FormulaBox inline>a&gt;0</FormulaBox>), לכן הפרבולה "צוחקת". היא חותכת את ציר ה-<FormulaBox inline>x</FormulaBox> בנקודות 2 ו-5.</p>
            
            <ParabolaSketch roots={[2, 5]} direction="up" highlight="between" />
            <p className="text-sm text-gray-600 text-center">(סקיצה של פרבולה צוחקת החותכת ב-2 וב-5, אדום מסמן את הפתרון)</p>
              <p>4. קביעת התחום: אנו מחפשים <FormulaBox inline>x^2-7x+10 &lt; 0</FormulaBox>, כלומר, מתי הפרבולה נמצאת <strong>מתחת</strong> לציר ה-<FormulaBox inline>x</FormulaBox>. על פי הסקיצה, זה קורה בין השורשים.</p>
            <p className="mt-2">לכן, הפתרון הוא <FormulaBox inline>2 &lt; x &lt; 5</FormulaBox>.</p>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">מתרגלים ✍️</h2>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Exercise key={exercise.id} {...exercise} />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">בוחן ידע 🧪</h2>
        <Quiz questions={quizQuestions} />      </section>
    </LessonLayout>
  );
};

export default AlgebraInequalitiesLesson;
