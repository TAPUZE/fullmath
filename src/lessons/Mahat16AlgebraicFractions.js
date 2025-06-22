import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat16AlgebraicFractions = () => {
  const lessonId = 'mahat-1-6-algebraic-fractions';
  const nextLessonPath = '/lessons/mahat-2-1-advanced-powers';

  const exercises = [    {
      id: 'ex1',
      question: (
        <div>
          מהו תחום ההצבה של <FormulaBox inline>{"\\frac{x+1}{x^2-16}"}</FormulaBox>?
        </div>
      ),
      correctAnswer: 'x ≠ 4, x ≠ -4',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>המכנה לא יכול להיות אפס, לכן:</p>
          <FormulaBox>{"x^2 - 16 \\neq 0"}</FormulaBox>
          <FormulaBox>{"x^2 \\neq 16"}</FormulaBox>
          <FormulaBox>{"x \\neq \\pm 4"}</FormulaBox>
          <p>תחום ההצבה: x ≠ 4, x ≠ -4</p>
        </div>
      )
    },    {
      id: 'ex2',
      question: (
        <div>
          צמצם: <FormulaBox inline>{"\\frac{2x+4}{x^2+5x+6}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '2/(x+3)',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>פירוק המונה והמכנה לגורמים:</p>
          <FormulaBox>{"\\frac{2x + 4}{x^2 + 5x + 6} = \\frac{2(x + 2)}{(x + 2)(x + 3)}"}</FormulaBox>
          <p>צמצום הגורם המשותף (x + 2):</p>
          <FormulaBox>{"= \\frac{2}{x + 3}"}</FormulaBox>
          <p>תנאי: x ≠ -2, x ≠ -3</p>
        </div>
      )
    },    {
      id: 'ex3',
      question: (
        <div>
          חשב: <FormulaBox inline>{"\\frac{2}{x} + \\frac{3}{x+1}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '(5x+2)/(x(x+1))',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>מכנה משותף: x(x+1)</p>
          <FormulaBox>{"\\frac{2}{x} + \\frac{3}{x+1} = \\frac{2(x+1)}{x(x+1)} + \\frac{3x}{x(x+1)}"}</FormulaBox>
          <FormulaBox>{"= \\frac{2(x+1) + 3x}{x(x+1)} = \\frac{2x + 2 + 3x}{x(x+1)}"}</FormulaBox>
          <FormulaBox>{"= \\frac{5x + 2}{x(x+1)}"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex4',
      question: (
        <div>
          חשב: <FormulaBox inline>{"\\frac{x^2-25}{x+1} \\div \\frac{x+5}{x^2+2x+1}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '(x-5)(x+1)',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>חילוק שברים = כפל בהופכי:</p>
          <FormulaBox>{"\\frac{x^2-25}{x+1} \\div \\frac{x+5}{x^2+2x+1} = \\frac{x^2-25}{x+1} \\times \\frac{x^2+2x+1}{x+5}"}</FormulaBox>
          <p>פירוק לגורמים:</p>
          <FormulaBox>{"= \\frac{(x-5)(x+5)}{x+1} \\times \\frac{(x+1)^2}{x+5}"}</FormulaBox>
          <p>צמצום:</p>
          <FormulaBox>{"= \\frac{(x-5)(x+5)(x+1)^2}{(x+1)(x+5)} = (x-5)(x+1)"}</FormulaBox>
        </div>
      )
    },
    {      id: 'ex5',
      question: (
        <div>
          פשט: <FormulaBox inline>{"\\frac{x^2-9}{x^2-6x+9}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '(x+3)/(x-3)',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>פירוק המונה והמכנה:</p>
          <FormulaBox>{"\\frac{x^2-9}{x^2-6x+9} = \\frac{(x-3)(x+3)}{(x-3)^2}"}</FormulaBox>
          <p>צמצום:</p>
          <FormulaBox>{"= \\frac{x+3}{x-3}"}</FormulaBox>
          <p>תנאי: x ≠ 3</p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - שברים אלגבריים',
    questions: [
      {
        id: 'q1',
        question: 'מהו תחום ההצבה של (3x+1)/(x²-4)?',
        options: ['x ≠ 2', 'x ≠ -2', 'x ≠ 2, x ≠ -2', 'x ≠ 4'],
        correctAnswer: 'x ≠ 2, x ≠ -2',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>המכנה x² - 4 = (x-2)(x+2) מתאפס כאשר x = 2 או x = -2</p>
            <p>לכן תחום ההצבה הוא: x ≠ 2, x ≠ -2</p>
          </div>
        )
      },
      {
        id: 'q2',
        question: 'איך מחברים שברים אלגבריים?',
        options: ['מחברים מונים ומכנים בנפרד', 'מוצאים מכנה משותף ומחברים מונים', 'מכפילים צולבות', 'מחלקים'],
        correctAnswer: 'מוצאים מכנה משותף ומחברים מונים',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>כמו בשברים רגילים, גם בשברים אלגבריים צריך מכנה משותף לחיבור וחיסור</p>
          </div>
        )
      },
      {
        id: 'q3',
        question: 'מה התוצאה של צמצום (6x²)/(9x)?',
        options: ['6x/9', '2x/3', '6/9', '2x'],
        correctAnswer: '2x/3',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <FormulaBox>{"\\frac{6x^2}{9x} = \\frac{6x \\cdot x}{9x} = \\frac{6x}{9} = \\frac{2x}{3}"}</FormulaBox>
          </div>
        )
      },
      {
        id: 'q4',
        question: 'מה השלב הראשון בפתרון שברים אלגבריים?',
        options: ['מכנה משותף', 'פירוק לגורמים', 'צמצום', 'תחום הצבה'],
        correctAnswer: 'פירוק לגורמים',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>פירוק לגורמים הוא תמיד השלב הראשון - הוא מאפשר צמצום ומקל על כל הפעולות</p>
          </div>
        )
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="שברים אלגבריים"
      description="תחום הצבה, צמצום וארבע פעולות החשבון בשברים אלגבריים"
      nextLessonPath={nextLessonPath}
    >
      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">שברים אלגבריים</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">ברוכים הבאים לשיעור 1.9!</h3>
          <p className="text-gray-700 leading-relaxed">
            עכשיו אנחנו מגיעים לנושא מתקדם יותר - שברים אלגבריים. אלו שברים שבהם המונה או המכנה 
            (או שניהם) מכילים משתנים. נלמד איך לעבוד איתם בביטחון ולהימנע מטעויות נפוצות.
          </p>
        </div>

        {/* מטרות השיעור */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>קביעת תחום הצבה:</strong> נלמד למצוא את כל הערכים שמותרים למשתנה</li>
            <li><strong>צמצום שברים אלגבריים:</strong> נשתמש בפירוק לגורמים כדי לפשט שברים</li>
            <li><strong>ביצוע ארבע פעולות החשבון:</strong> נלמד לחבר, לחסר, להכפיל ולחלק שברים אלגבריים</li>
          </ul>
        </section>

        {/* חלק 1: תחום הצבה */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: תחום הצבה (תחום הגדרה)</h3>
          
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2 text-red-700">הכלל הזהב: אסור לחלק באפס!</h4>
            <p className="text-gray-700 mb-3">
              בשבר אלגברי, המכנה לא יכול להיות אפס. לכן עלינו למצוא את כל ערכי המשתנה 
              שמאפסים את המכנה ולהוציא אותם מהתחום.
            </p>
            
            <div className="mt-4">
              <p><strong>הדרך:</strong></p>
              <ol className="list-decimal list-inside space-y-2 mr-4">
                <li>משווים את המכנה ל-0</li>
                <li>פותרים את המשוואה</li>
                <li>הערכים שמקבלים הם הערכים שצריך להוציא מהתחום</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">דוגמה מפורטת</h4>
            <p className="mb-3">עבור השבר <FormulaBox inline>{"\\frac{x+5}{x-3}"}</FormulaBox>:</p>
            <p>1. המכנה הוא x - 3</p>
            <p>2. משווים לאפס: x - 3 = 0</p>
            <p>3. פותרים: x = 3</p>
            <p><strong>מסקנה:</strong> תחום ההצבה הוא x ≠ 3</p>
          </div>
        </section>

        {/* חלק 2: צמצום, כפל וחילוק */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: צמצום, כפל וחילוק</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2 text-green-700">מילת המפתח: פירוק לגורמים!</h4>
            <p className="text-gray-700 mb-3">
              זהו השלב הראשון והחשוב ביותר בכל פעולה עם שברים אלגבריים. 
              פרקו תמיד את המונה והמכנה לגורמים לפני שמתחילים לעבוד.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">צמצום שברים אלגבריים</h4>
              <p className="mb-3">פרקו את המונה והמכנה לגורמים, ואז צמצמו (בטלו) גורמים זהים.</p>
              
              <div className="mt-3 p-3 bg-white rounded border-r-4 border-blue-300">
                <p><strong>דוגמה:</strong></p>
                <FormulaBox>{"\\frac{x^2 - 4}{x^2 - x - 6}"}</FormulaBox>
                <p>פירוק לגורמים:</p>
                <FormulaBox>{"= \\frac{(x-2)(x+2)}{(x-3)(x+2)}"}</FormulaBox>
                <p>צמצום הגורם (x+2):</p>
                <FormulaBox>{"= \\frac{x-2}{x-3}"}</FormulaBox>
                <p className="text-sm text-gray-600 mt-2">תנאי: x ≠ 3, x ≠ -2</p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">כפל וחילוק שברים אלגבריים</h4>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>כפל:</strong> כופלים מונה במונה ומכנה במכנה (אחרי פירוק לגורמים)</li>
                <li><strong>חילוק:</strong> כופלים בהופכי של השבר השני</li>
                <li><strong>טיפ:</strong> פרקו לגורמים לפני הכפל - זה יאפשר צמצום מוקדם</li>
              </ul>
            </div>
          </div>
        </section>

        {/* חלק 3: חיבור וחיסור */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 3: חיבור וחיסור - הפעולה המורכבת ביותר</h3>
          
          <div className="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2 text-orange-700">זו הפעולה שדורשת הכי הרבה ריכוז!</h4>
            <p className="text-gray-700">
              חיבור וחיסור שברים אלגבריים דורש מכנה משותף, בדיוק כמו בשברים רגילים.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">השלבים בסדר הנכון:</h4>
              <ol className="list-decimal list-inside space-y-3 mr-4">
                <li><strong>פרקו את כל המכנים לגורמים</strong></li>
                <li><strong>מצאו מכנה משותף (LCD):</strong> בנו מכנה שמכיל כל גורם מהמכנים המפורקים, בחזקה הגבוהה ביותר שבה הוא מופיע</li>
                <li><strong>הרחיבו כל שבר:</strong> הכפילו את המונה של כל שבר בגורמים ש"חסרים" למכנה שלו</li>
                <li><strong>חברו/חסרו את המונים</strong> מעל המכנה המשותף</li>
                <li><strong>כנסו איברים במונה</strong> ופשטו ככל האפשר</li>
              </ol>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">דוגמה מפורטת</h4>
              <p><strong>חשבו:</strong> <FormulaBox inline>{"\\frac{2}{x} + \\frac{3}{x+1}"}</FormulaBox></p>
              
              <div className="mt-3 space-y-2">
                <p>1. <strong>המכנים כבר מפורקים:</strong> x ו-(x+1)</p>
                <p>2. <strong>מכנה משותף:</strong> x(x+1)</p>
                <p>3. <strong>הרחבה:</strong></p>
                <FormulaBox>{"\\frac{2}{x} = \\frac{2(x+1)}{x(x+1)}, \\quad \\frac{3}{x+1} = \\frac{3x}{x(x+1)}"}</FormulaBox>
                <p>4. <strong>חיבור:</strong></p>
                <FormulaBox>{"\\frac{2(x+1) + 3x}{x(x+1)} = \\frac{2x + 2 + 3x}{x(x+1)} = \\frac{5x + 2}{x(x+1)}"}</FormulaBox>
              </div>
            </div>
          </div>
        </section>

        {/* תרגילים */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">תרגול מעשי</h3>
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

        {/* בחן את עצמך */}
        <section className="mb-8">
          <Quiz
            quizId={`${lessonId}_quiz`}
            title={quizData.title}
            questions={quizData.questions}
            lessonId={lessonId}
          />
        </section>

        {/* סיכום */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום שיעור 1.9</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">מצוין! השתלטנו על שברים אלגבריים.</h4>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>תחום הצבה</strong> הוא הדבר הראשון שבודקים - אסור לחלק באפס!</li>
              <li><strong>פירוק לגורמים</strong> הוא המפתח להצלחה בכל הפעולות</li>
              <li><strong>צמצום מוקדם</strong> חוסך הרבה עבודה ומונע טעויות</li>
              <li><strong>בחיבור וחיסור</strong> - סבלנות! פעלו שלב אחר שלב</li>
              <li><strong>תמיד בדקו</strong> אם אפשר לפשט את התוצאה הסופית</li>
            </ul>
            
            <div className="mt-4 p-3 bg-blue-50 rounded">
              <p className="text-sm font-medium text-blue-800">
                <strong>הכנה לנושא הבא:</strong> סיימנו את נושא 1 - טכניקה אלגברית! בנושא 2 נכיר חזקות ושורשים מתקדמים, מידות והמרות.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Mahat16AlgebraicFractions;
