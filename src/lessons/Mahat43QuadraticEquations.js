import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat43QuadraticEquations = () => {
  const lessonId = 'mahat-4-3-quadratic-equations';
  const nextLessonPath = '/lessons/mahat-4-4-mixed-systems';
  
  const exercises = [
    {
      id: 'ex1',
      question: 'פתור: 5x² - 10x = 0',
      correctAnswer: 'x=0, x=2',
      placeholder: 'הזן את התשובה (x=..., x=...)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>זיהוי:</strong> זוהי משוואה ריבועית חלקית (c=0)</p>
          <p><strong>שיטה:</strong> הוצאת גורם משותף</p>
          <p>5x² - 10x = 0</p>
          <p>5x(x - 2) = 0</p>
          <p><strong>שלב 2:</strong> מכפלה שווה לאפס כאשר אחד הגורמים שווה לאפס</p>
          <p>5x = 0 → x₁ = 0</p>
          <p>x - 2 = 0 → x₂ = 2</p>
          <p><strong>בדיקה:</strong></p>
          <p>עבור x=0: 5(0)² - 10(0) = 0 ✓</p>
          <p>עבור x=2: 5(2)² - 10(2) = 20 - 20 = 0 ✓</p>
          <p><strong>התשובה: x = 0, x = 2</strong></p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'פתור: x² = 81',
      correctAnswer: 'x=9, x=-9',
      placeholder: 'הזן את התשובה (x=..., x=...)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>זיהוי:</strong> משוואה ריבועית חלקית (b=0)</p>
          <p><strong>שיטה:</strong> בידוד x² והוצאת שורש ריבועי</p>
          <p>x² = 81</p>
          <p>x = ±√81</p>
          <p>x = ±9</p>
          <p><strong>התשובה:</strong> x₁ = 9, x₂ = -9</p>
          <p><strong>חשוב לזכור:</strong> כאשר מוציאים שורש ריבועי, תמיד יש שני פתרונות (חיובי ושלילי)</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פתור באמצעות נוסחת השורשים: x² + 4x - 5 = 0',
      correctAnswer: 'x=1, x=-5',
      placeholder: 'הזן את התשובה (x=..., x=...)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>זיהוי המקדמים:</strong> a=1, b=4, c=-5</p>
          <p><strong>נוסחת השורשים:</strong></p>
          <div className="bg-white p-2 rounded border">
            <p className="text-center font-mono text-lg">x = (-b ± √(b² - 4ac)) / 2a</p>
          </div>
          <p><strong>הצבה:</strong></p>
          <p>x = (-4 ± √(4² - 4·1·(-5))) / (2·1)</p>
          <p>x = (-4 ± √(16 + 20)) / 2</p>
          <p>x = (-4 ± √36) / 2</p>
          <p>x = (-4 ± 6) / 2</p>
          <p><strong>חישוב שני הפתרונות:</strong></p>
          <p>x₁ = (-4 + 6) / 2 = 2 / 2 = 1</p>
          <p>x₂ = (-4 - 6) / 2 = -10 / 2 = -5</p>
          <p><strong>התשובה: x = 1, x = -5</strong></p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'פתור: 2x² - 3x - 2 = 0',
      correctAnswer: 'x=2, x=-0.5',
      placeholder: 'הזן את התשובה (x=..., x=...)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>זיהוי המקדמים:</strong> a=2, b=-3, c=-2</p>
          <p><strong>נוסחת השורשים:</strong></p>
          <p>x = (-(-3) ± √((-3)² - 4·2·(-2))) / (2·2)</p>
          <p>x = (3 ± √(9 + 16)) / 4</p>
          <p>x = (3 ± √25) / 4</p>
          <p>x = (3 ± 5) / 4</p>
          <p><strong>חישוב שני הפתרונות:</strong></p>
          <p>x₁ = (3 + 5) / 4 = 8 / 4 = 2</p>
          <p>x₂ = (3 - 5) / 4 = -2 / 4 = -0.5</p>
          <p><strong>התשובה: x = 2, x = -0.5</strong></p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'כמה פתרונות יש למשוואה x² + 2x + 3 = 0?',
      correctAnswer: 'אין פתרונות ממשיים',
      placeholder: 'הזן את התשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>זיהוי המקדמים:</strong> a=1, b=2, c=3</p>
          <p><strong>חישוב הדיסקרימיננטה:</strong></p>
          <p>Δ = b² - 4ac = 2² - 4·1·3 = 4 - 12 = -8</p>
          <p><strong>ניתוח הדיסקרימיננטה:</strong></p>
          <p>מכיוון ש-Δ = -8 &lt; 0, אין פתרונות ממשיים</p>
          <p><strong>משמעות גיאומטרית:</strong></p>
          <p>הגרף של הפרבולה "מרחף" מעל ציר ה-X ולא חותך אותו</p>
          <p><strong>התשובה: אין פתרונות ממשיים</strong></p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - משוואות ריבועיות',
    questions: [
      {
        question: 'במשוואה 3x² - 7 = 0, מהם המקדמים a, b, c?',
        options: ['a=3, b=-7, c=0', 'a=3, b=0, c=-7', 'a=3, b=1, c=-7', 'a=3, b=0, c=7'],
        correctAnswer: 1,
        explanation: 'המשוואה בצורה הסטנדרטית היא 3x² + 0x + (-7) = 0. אין איבר עם x, לכן b=0.'
      },
      {
        question: 'מה השלב הראשון בפתרון המשוואה (x+1)(x-2) = 5?',
        options: ['להשוות כל גורם ל-5', 'להציב x=0', 'לפתוח סוגריים ולהעביר הכל לאגף אחד', 'להוציא שורש משני האגפים'],
        correctAnswer: 2,
        explanation: 'כדי להשתמש בנוסחת השורשים, המשוואה חייבת להיות בצורה הסטנדרטית השווה לאפס.'
      },
      {
        question: 'למשוואה ריבועית יש פתרון יחיד. מה ניתן לומר על הדיסקרימיננטה שלה?',
        options: ['גדולה מאפס', 'שווה לאפס', 'קטנה מאפס', 'לא ניתן לדעת'],
        correctAnswer: 1,
        explanation: 'כאשר Δ = b² - 4ac = 0, הביטוי ±√Δ מתאפס, ונותר פתרון יחיד x = -b/2a.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="פתרון משוואות ריבועיות"
      description="נוסחת השורשים, דיסקרימיננטה ומקרים מיוחדים"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מבוא לשיעור</h2>
        <p className="text-lg mb-4">
          עד כה עסקנו במשוואות לינאריות, שבהן הנעלם מופיע בחזקת 1. כעת נעלה שלב למשוואות ריבועיות, 
          שבהן הנעלם מופיע בחזקה שנייה (x²). משוואות אלו מופיעות בתחומים רבים, מפיזיקה (תנועת גופים) 
          ועד לכלכלה, והגרף שלהן הוא פרבולה. בשיעור זה נלמד את הדרכים לפתור אותן, החל ממקרים פשוטים 
          ועד לנוסחה הכללית.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>זיהוי הצורה הסטנדרטית: נלמד לסדר כל משוואה ריבועית לצורה ax² + bx + c = 0</li>
          <li>פתרון משוואות ריבועיות חלקיות: נטפל במקרים שבהם b=0 או c=0</li>
          <li>שליטה בנוסחת השורשים: נלמד להשתמש בנוסחה הכללית לפתרון כל משוואה ריבועית</li>
          <li>הבנת הדיסקרימיננטה: נבין כיצד ניתן לדעת מראש כמה פתרונות יש למשוואה</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">הצורה הסטנדרטית</h3>
          <p className="mb-3">הצעד הראשון בפתרון כל משוואה ריבועית הוא להעביר את כל האיברים לאגף אחד, כך שהמשוואה תהיה שווה לאפס:</p>
          <FormulaBox>ax^2 + bx + c = 0</FormulaBox>
          <p className="mt-2">כאשר a, b, ו-c הם מספרים (מקדמים), ו-a אינו יכול להיות 0.</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">משוואות ריבועיות חלקיות</h3>
          <p className="mb-3">זהו מקרה קל יותר, שלא דורש את הנוסחה המלאה:</p>
          
          <div className="bg-white p-3 rounded border-r-4 border-green-400 mb-3">
            <h4 className="font-semibold mb-2">כאשר c = 0 (אין איבר חופשי):</h4>
            <p><strong>דוגמה:</strong> 3x² - 12x = 0</p>
            <p><strong>שיטה:</strong> הוצאת גורם משותף → 3x(x - 4) = 0</p>
            <p><strong>פתרונות:</strong> 3x = 0 → x₁ = 0 או x - 4 = 0 → x₂ = 4</p>
          </div>
          
          <div className="bg-white p-3 rounded border-r-4 border-green-400">
            <h4 className="font-semibold mb-2">כאשר b = 0 (אין איבר עם x):</h4>
            <p><strong>דוגמה:</strong> 2x² - 50 = 0</p>
            <p><strong>שיטה:</strong> בידוד x² והוצאת שורש ריבועי</p>
            <p>2x² = 50 → x² = 25 → x = ±√25 → x = ±5</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">נוסחת השורשים</h3>
          <p className="mb-3">זוהי הנוסחה האוניברסלית שעובדת עבור כל משוואה ריבועית מהצורה ax² + bx + c = 0:</p>
          <div className="bg-white p-3 rounded border">
            <p className="text-center font-mono text-lg">x₁,₂ = (-b ± √(b² - 4ac)) / 2a</p>
          </div>
          
          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mt-3">
            <p><strong>שלבי עבודה:</strong></p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>סדר את המשוואה בצורה הסטנדרטית</li>
              <li>זהה בבירור את ערכי a, b, ו-c (כולל הסימנים שלהם!)</li>
              <li>הצב את הערכים בנוסחה בזהירות</li>
              <li>חשב תחילה את הביטוי שבתוך השורש (הדיסקרימיננטה)</li>
              <li>חשב את שני הפתרונות: פעם אחת עם + ופעם אחת עם -</li>
            </ol>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">הדיסקרימיננטה - כמה פתרונות יש?</h3>
          <p className="mb-3">הביטוי Δ = b² - 4ac, שנמצא בתוך השורש, נקרא דיסקרימיננטה. הערך שלו מגלה לנו מראש כמה פתרונות (ממשיים) יש למשוואה:</p>
          
          <div className="space-y-2">
            <div className="bg-white p-2 rounded border-r-4 border-green-400">
              <strong>אם Δ &gt; 0:</strong> יש שני פתרונות שונים (הגרף חותך את ציר x בשתי נקודות)
            </div>
            <div className="bg-white p-2 rounded border-r-4 border-yellow-400">
              <strong>אם Δ = 0:</strong> יש פתרון יחיד "כפול" (הגרף נוגע בציר x בנקודה אחת - הקודקוד)
            </div>
            <div className="bg-white p-2 rounded border-r-4 border-red-400">
              <strong>אם Δ &lt; 0:</strong> אין פתרונות ממשיים (הגרף "מרחף" מעל או מתחת לציר x)
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תרגילים</h2>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Exercise
              key={exercise.id}
              exerciseId={exercise.id}
              question={exercise.question}
              correctAnswer={exercise.correctAnswer}
              placeholder={exercise.placeholder}
              solution={exercise.solution}
              lessonId={lessonId}
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <Quiz
          quizId={`${lessonId}_quiz`}
          title={quizData.title}
          questions={quizData.questions}
          lessonId={lessonId}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">סיכום</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>הצורה הסטנדרטית ax² + bx + c = 0 היא נקודת המוצא לפתרון כל משוואה ריבועית</li>
            <li>משוואות חלקיות (כאשר b=0 או c=0) ניתנות לפתרון בשיטות פשוטות יותר</li>
            <li>נוסחת השורשים עובדת תמיד ומספקת את כל הפתרונות האפשריים</li>
            <li>הדיסקרימיננטה מאפשרת לחזות מראש את מספר הפתרונות</li>
            <li>חשוב לזכור את הפלוס-מינוס בשורש הריבועי ולחשב שני פתרונות נפרדים</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat43QuadraticEquations;
