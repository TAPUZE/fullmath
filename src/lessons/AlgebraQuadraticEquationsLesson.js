import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';
import ProgressSection from '../components/ProgressSection';

const AlgebraQuadraticEquationsLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: 'פתור את המשוואה \\(2x^2 + 5x - 3 = 0\\). רשום את הפתרונות מופרדים בפסיק (לדוגמה: 1,-2).',
      correctAnswer: '0.5,-3',
      tolerance: 0.01,
      allowFractions: true,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>נתונה המשוואה: <FormulaBox inline>2x^2 + 5x - 3 = 0</FormulaBox></p>
          <p>המקדמים הם: <FormulaBox inline>a = 2, b = 5, c = -3</FormulaBox></p>
          <p>נציב בנוסחת השורשים:</p>
          <FormulaBox>{"x_{1,2} = \\frac{-5 \\pm \\sqrt{5^2 - 4 \\cdot 2 \\cdot (-3)}}{2 \\cdot 2}"}</FormulaBox>
          <FormulaBox>{"x_{1,2} = \\frac{-5 \\pm \\sqrt{25 + 24}}{4} = \\frac{-5 \\pm \\sqrt{49}}{4} = \\frac{-5 \\pm 7}{4}"}</FormulaBox>
          <p>שני הפתרונות:</p>
          <FormulaBox>{"x_1 = \\frac{-5 + 7}{4} = \\frac{2}{4} = 0.5"}</FormulaBox>
          <FormulaBox>{"x_2 = \\frac{-5 - 7}{4} = \\frac{-12}{4} = -3"}</FormulaBox>
          <p>אם נבדוק: <FormulaBox inline>2(0.5)^2 + 5(0.5) - 3 = 0.5 + 2.5 - 3 = 0 ✓</FormulaBox></p>
          <p>ו-<FormulaBox inline>2(-3)^2 + 5(-3) - 3 = 18 - 15 - 3 = 0 ✓</FormulaBox></p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'חשב את הדיסקרימיננטה של המשוואה \\(x^2 - 4x + 1 = 0\\) וקבע כמה פתרונות יש למשוואה.',
      correctAnswer: '12',
      tolerance: 0.01,
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נתונה המשוואה: <FormulaBox inline>x^2 - 4x + 1 = 0</FormulaBox></p>
          <p>המקדמים הם: <FormulaBox inline>a = 1, b = -4, c = 1</FormulaBox></p>
          <p>הדיסקרימיננטה:</p>
          <FormulaBox>\Delta = b^2 - 4ac = (-4)^2 - 4 \cdot 1 \cdot 1 = 16 - 4 = 12</FormulaBox>
          <p>מכיוון ש-<FormulaBox inline>\Delta = 12 &gt; 0</FormulaBox>, למשוואה יש שני פתרונות ממשיים שונים.</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פתור את המשוואה החסרה \\(3x^2 - 12 = 0\\). הכנס את הפתרון החיובי.',
      correctAnswer: '2',
      tolerance: 0.01,
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נתונה המשוואה: <FormulaBox inline>3x^2 - 12 = 0</FormulaBox></p>
          <p>זוהי משוואה חסרה (ללא מקדם x). נפתור על ידי בידוד:</p>          <FormulaBox>3x^2 = 12</FormulaBox>
          <FormulaBox>x^2 = 4</FormulaBox>
          <FormulaBox>x = \pm 2</FormulaBox>
          <p>הפתרונות הם <FormulaBox inline>x = 2</FormulaBox> ו-<FormulaBox inline>x = -2</FormulaBox>.</p>
          <p>הפתרון החיובי הוא 2.</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מה קובעת הדיסקרימיננטה של משוואה ריבועית?',
      options: [
        'את ערך הפתרונות',
        'את מספר הפתרונות הממשיים',
        'את סוג המשוואה',
        'את המקדמים'
      ],
      correctAnswer: 'את מספר הפתרונות הממשיים',
      explanation: 'הדיסקרימיננטה קובעת כמה פתרונות ממשיים יש למשוואה: אם היא חיובית - שני פתרונות, אם אפס - פתרון אחד, אם שלילית - אין פתרונות ממשיים.'
    },
    {
      id: 'q2',
      question: 'איך פותרים משוואה מהצורה ax² + c = 0?',
      options: [
        'רק בנוסחת השורשים',
        'הוצאת גורם משותף',
        'בידוד x² והוצאת שורש',
        'אי אפשר לפתור'
      ],
      correctAnswer: 'בידוד x² והוצאת שורש',
      explanation: 'משוואה חסרה מהצורה ax² + c = 0 נפתרת על ידי בידוד x²: x² = -c/a, ולאחר מכן x = ±√(-c/a).'
    },
    {
      id: 'q3',
      question: 'מה תהיה התוצאה אם הדיסקרימיננטה שווה לאפס?',
      options: [
        'שני פתרונות שונים',
        'פתרון יחיד (או שני פתרונות זהים)',
        'אין פתרונות ממשיים',
        'אינסוף פתרונות'
      ],
      correctAnswer: 'פתרון יחיד (או שני פתרונות זהים)',
      explanation: 'כאשר הדיסקרימיננטה שווה לאפס, השורש יוצא אפס ולכן יש פתרון יחיד (או שני פתרונות זהים).'
    }
  ];

  return (
    <LessonLayout
      title="משוואות ריבועיות"
      lessonId="35182-algebra-quadratic-equations"
      nextLessonPath="/lesson/35182-algebra-inequalities"
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">לומדים 📚</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>משוואה ריבועית היא משוואה ממעלה שנייה, כלומר, משוואה שבה הנעלם מופיע בחזקה שנייה כחזקה הגבוהה ביותר. הצורה הכללית של משוואה ריבועית היא:</p>
          <FormulaBox>ax^2 + bx + c = 0</FormulaBox>
          <p>כאשר <FormulaBox inline>a, b, c</FormulaBox> הם מספרים ממשיים (הנקראים מקדמים), וחשוב מאוד שיתקיים <FormulaBox inline>a \\neq 0</FormulaBox> (אחרת המשוואה אינה ריבועית).</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">פתרון משוואה ריבועית באמצעות נוסחת השורשים</h3>
          <p>הדרך הנפוצה ביותר לפתור משוואה ריבועית היא באמצעות <strong>נוסחת השורשים</strong>. נוסחה זו מאפשרת למצוא את ערכי <FormulaBox inline>x</FormulaBox> (השורשים או הפתרונות) המקיימים את המשוואה:</p>
          <FormulaBox>{"x_{1,2} = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}"}</FormulaBox>
          <p>הסימן <FormulaBox inline>\\pm</FormulaBox> מציין שיכולים להיות שני פתרונות (אחד עם חיבור ואחד עם חיסור), פתרון אחד, או אף פתרון ממשי.</p>

          <h4 className="text-lg font-semibold mt-4 mb-1">דוגמה פתורה:</h4>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <p className="font-medium">שאלה: פתור את המשוואה <FormulaBox inline>x^2 - 5x + 6 = 0</FormulaBox>.</p>
            <p className="mt-2"><strong>פתרון:</strong></p>
            <p>במשוואה זו, המקדמים הם: <FormulaBox inline>a=1, b=-5, c=6</FormulaBox>.</p>
            <p>נציב את המקדמים בנוסחת השורשים:</p>
            <FormulaBox>{"x_{1,2} = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4 \\cdot 1 \\cdot 6}}{2 \\cdot 1}"}</FormulaBox>
            <FormulaBox>{"x_{1,2} = \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm \\sqrt{1}}{2} = \\frac{5 \\pm 1}{2}"}</FormulaBox>
            <p>מכאן נקבל את שני הפתרונות:</p>
            <p><FormulaBox inline>x_1 = \\frac{5+1}{2} = \\frac{6}{2} = 3</FormulaBox></p>
            <p><FormulaBox inline>x_2 = \\frac{5-1}{2} = \\frac{4}{2} = 2</FormulaBox></p>
            <p className="mt-2">לכן, פתרונות המשוואה הם <FormulaBox inline>x=3</FormulaBox> ו-<FormulaBox inline>x=2</FormulaBox>.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">הדיסקרימיננטה וקביעת מספר הפתרונות</h3>
          <p>הביטוי הנמצא מתחת לשורש בנוסחת השורשים, <FormulaBox inline>b^2-4ac</FormulaBox>, נקרא <strong>דיסקרימיננטה</strong> ומסומן באות היוונית דלתא <FormulaBox inline>\\Delta</FormulaBox>.</p>
          <FormulaBox>\Delta = b^2-4ac</FormulaBox>
          <p>הדיסקרימיננטה קובעת את מספר הפתרונות הממשיים של המשוואה הריבועית:</p>
          <ul className="list-disc list-inside space-y-2 pr-5">            <li>אם <FormulaBox inline>\Delta &gt; 0</FormulaBox>: למשוואה שני פתרונות ממשיים שונים.</li>
            <li>אם <FormulaBox inline>\Delta = 0</FormulaBox>: למשוואה פתרון ממשי יחיד (או שני פתרונות ממשיים זהים).</li>
            <li>אם <FormulaBox inline>\Delta &lt; 0</FormulaBox>: למשוואה אין פתרונות ממשיים.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-1">דוגמאות לדיסקרימיננטה:</h4>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3">
            <p><strong>1. שני פתרונות:</strong> עבור <FormulaBox inline>x^2 - 5x + 6 = 0</FormulaBox> (מהדוגמה הקודמת):</p>
            <p><FormulaBox inline>\Delta = (-5)^2 - 4 \cdot 1 \cdot 6 = 25 - 24 = 1</FormulaBox>. מאחר ו-<FormulaBox inline>\Delta &gt; 0</FormulaBox>, יש שני פתרונות.</p>
            
            <p><strong>2. פתרון יחיד:</strong> עבור <FormulaBox inline>x^2 - 6x + 9 = 0</FormulaBox>:</p>
            <p><FormulaBox inline>\\Delta = (-6)^2 - 4 \\cdot 1 \\cdot 9 = 36 - 36 = 0</FormulaBox>. מאחר ו-<FormulaBox inline>\\Delta = 0</FormulaBox>, יש פתרון יחיד (<FormulaBox inline>x=3</FormulaBox>).</p>

            <p><strong>3. אין פתרונות ממשיים:</strong> עבור <FormulaBox inline>x^2 + 2x + 5 = 0</FormulaBox>:</p>
            <p><FormulaBox inline>\Delta = (2)^2 - 4 \cdot 1 \cdot 5 = 4 - 20 = -16</FormulaBox>. מאחר ו-<FormulaBox inline>\Delta &lt; 0</FormulaBox>, אין פתרונות ממשיים.</p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">משוואות ריבועיות חסרות</h3>
          <p>אלו משוואות ריבועיות שבהן אחד המקדמים <FormulaBox inline>b</FormulaBox> או <FormulaBox inline>c</FormulaBox> (או שניהם, אך אז <FormulaBox inline>x=0</FormulaBox>) הוא אפס.</p>
          <ul className="list-disc list-inside space-y-2 pr-5">
            <li><strong>כאשר <FormulaBox inline>b=0</FormulaBox>:</strong> המשוואה מהצורה <FormulaBox inline>ax^2+c=0</FormulaBox>. פותרים על ידי בידוד <FormulaBox inline>x^2</FormulaBox> והוצאת שורש.
              <br />דוגמה: <FormulaBox inline>2x^2 - 18 = 0 \\Rightarrow 2x^2 = 18 \\Rightarrow x^2 = 9 \\Rightarrow x = \\pm 3</FormulaBox>.
            </li>
            <li><strong>כאשר <FormulaBox inline>c=0</FormulaBox>:</strong> המשוואה מהצורה <FormulaBox inline>ax^2+bx=0</FormulaBox>. פותרים על ידי הוצאת גורם משותף <FormulaBox inline>x</FormulaBox>.
              <br />דוגמה: <FormulaBox inline>3x^2 - 6x = 0 \\Rightarrow x(3x - 6) = 0</FormulaBox>. מכאן <FormulaBox inline>x=0</FormulaBox> או <FormulaBox inline>3x-6=0 \\Rightarrow 3x=6 \\Rightarrow x=2</FormulaBox>.
            </li>
          </ul>
          <p>חשוב לזכור שגם במשוואות חסרות ניתן להשתמש בנוסחת השורשים על ידי הצבת <FormulaBox inline>b=0</FormulaBox> או <FormulaBox inline>c=0</FormulaBox> בהתאמה.</p>
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
        <Quiz questions={quizQuestions} />
      </section>

      {/* Progress Section */}
      <ProgressSection lessonId="35182-algebra-quadratic-equations" />
    </LessonLayout>
  );
};

export default AlgebraQuadraticEquationsLesson;
