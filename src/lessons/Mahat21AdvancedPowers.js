import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat21AdvancedPowers = () => {
  const lessonId = 'mahat-2-1-advanced-powers';
  const nextLessonPath = '/lessons/mahat-2-2-roots-rational';

  const exercises = [    {
      id: 'ex1',
      question: (
        <div>
          פשט: <FormulaBox inline>{"x^3 \\times x^7"}</FormulaBox>
        </div>
      ),
      correctAnswer: 'x¹⁰',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>מכפלת חזקות עם בסיס זהה - מחברים מעריכים:</p>
          <FormulaBox>{"x^3 \\times x^7 = x^{3+7} = x^{10}"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'פשט: (y⁴)³',
      correctAnswer: 'y¹²',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>חזקה של חזקה - מכפילים מעריכים:</p>
          <FormulaBox>{"(y^4)^3 = y^{4 \\times 3} = y^{12}"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פשט: (2a³)⁴',
      correctAnswer: '16a¹²',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>חזקה של מכפלה - מעלים כל גורם בחזקה:</p>
          <FormulaBox>{"(2a^3)^4 = 2^4 \\times (a^3)^4 = 16 \\times a^{3 \\times 4} = 16a^{12}"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'פשט: a⁸ / a³',
      correctAnswer: 'a⁵',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>מנת חזקות עם בסיס זהה - מחסרים מעריכים:</p>
          <FormulaBox>{"\\frac{a^8}{a^3} = a^{8-3} = a^5"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'פשט: (3x²y⁴) * (2x³y)',
      correctAnswer: '6x⁵y⁵',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>כופלים מקדמים ומחברים מעריכים של כל משתנה:</p>
          <FormulaBox>{"(3x^2y^4) \\times (2x^3y) = 3 \\times 2 \\times x^{2+3} \\times y^{4+1}"}</FormulaBox>
          <FormulaBox>{"= 6x^5y^5"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex6',
      question: 'פשט: x⁻³ * x⁵',
      correctAnswer: 'x²',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>מכפלת חזקות עם מעריך שלילי:</p>
          <FormulaBox>{"x^{-3} \\times x^5 = x^{-3+5} = x^2"}</FormulaBox>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - חוקי חזקות מתקדמים',
    questions: [
      {
        id: 'q1',
        question: 'מהו פישוט הביטוי (x⁴ * y) * (x⁻² * y³)?',
        options: ['x²y⁴', 'x⁶y⁴', 'x²y³', 'x⁻⁸y³'],
        correctAnswer: 'x²y⁴',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <FormulaBox>{"(x^4 \\times y) \\times (x^{-2} \\times y^3) = x^{4+(-2)} \\times y^{1+3} = x^2y^4"}</FormulaBox>
          </div>
        )
      },
      {
        id: 'q2',
        question: 'מה התוצאה של (a³b²)⁴?',
        options: ['a⁷b⁶', 'a¹²b⁸', 'a³⁴b²⁴', 'a¹²b⁶'],
        correctAnswer: 'a¹²b⁸',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>חזקה של מכפלה:</p>
            <FormulaBox>{"(a^3b^2)^4 = (a^3)^4 \\times (b^2)^4 = a^{3 \\times 4} \\times b^{2 \\times 4} = a^{12}b^8"}</FormulaBox>
          </div>
        )
      },
      {
        id: 'q3',
        question: 'מה הערך של כל מספר בחזקת אפס?',
        options: ['0', '1', 'אותו המספר', 'לא מוגדר'],
        correctAnswer: '1',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>כל מספר שונה מאפס בחזקת אפס שווה ל-1:</p>
            <FormulaBox>{"a^0 = 1 \\text{ (כאשר } a \\neq 0 \\text{)}"}</FormulaBox>
          </div>
        )
      },
      {
        id: 'q4',
        question: 'מה משמעות x⁻³?',
        options: ['-3x', '1/x³', '-x³', '3/x'],
        correctAnswer: '1/x³',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>חזקה שלילית מציינת הופכי:</p>
            <FormulaBox>{"x^{-3} = \\frac{1}{x^3}"}</FormulaBox>
          </div>
        )
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="חוקי חזקות מתקדמים"
      description="הגדרת חוקי חזקות, שילוב אותיות ומספרים, פישוט ביטויים מורכבים"
      nextLessonPath={nextLessonPath}
    >
      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">חוקי חזקות מתקדמים</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">מבוא לשיעור</h3>
          <p className="text-gray-700 leading-relaxed">
            לאחר שביססנו את הטכניקה האלגברית, הגיע הזמן להעמיק באחד הכלים החזקים ביותר במתמטיקה: 
            חזקות. חזקות מאפשרות לנו לכתוב כפל חוזר בצורה קומפקטית, וחוקי החזקות הם קיצורי דרך 
            רבי עוצמה לפתרון בעיות מורכבות.
          </p>
        </div>

        {/* מטרות השיעור */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>שליטה מלאה בחוקי החזקות:</strong> נלמד ונבין את כללי הכפל, החילוק, חזקה של חזקה, חזקת אפס וחזקה שלילית</li>
            <li><strong>יישום על ביטויים אלגבריים:</strong> נתרגל את החוקים לא רק על מספרים, אלא גם על ביטויים המשלבים אותיות</li>
            <li><strong>פישוט ביטויים מורכבים:</strong> נלמד כיצד לשלב מספר חוקים יחד כדי לפשט ביטויים מורכבים</li>
          </ul>
        </section>

        {/* חלק 1: חוקי החזקות המרכזיים */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: חוקי החזקות המרכזיים</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-3">חוקי החזקות חלים כאשר יש לנו בסיסים זהים או מעריכים זהים:</h4>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded border-r-4 border-green-300">
                <h5 className="font-semibold mb-2">1. מכפלת חזקות עם בסיס זהה - מחברים מעריכים</h5>
                <FormulaBox>{"a^m \\times a^n = a^{m+n}"}</FormulaBox>
                <div className="mt-3 space-y-1">
                  <p><strong>דוגמה מספרית:</strong> 2⁴ × 2³ = 2⁷ = 128</p>
                  <p><strong>דוגמה אלגברית:</strong> x⁵ × x² = x⁷</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-r-4 border-green-300">
                <h5 className="font-semibold mb-2">2. מנת חזקות עם בסיס זהה - מחסרים מעריכים</h5>
                <FormulaBox>{"\\frac{a^m}{a^n} = a^{m-n}"}</FormulaBox>
                <div className="mt-3 space-y-1">
                  <p><strong>דוגמה מספרית:</strong> 3⁶ ÷ 3² = 3⁴ = 81</p>
                  <p><strong>דוגמה אלגברית:</strong> y⁸ ÷ y³ = y⁵</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-r-4 border-green-300">
                <h5 className="font-semibold mb-2">3. חזקה של חזקה - מכפילים מעריכים</h5>
                <FormulaBox>{"(a^m)^n = a^{m \\times n}"}</FormulaBox>
                <div className="mt-3 space-y-1">
                  <p><strong>דוגמה מספרית:</strong> (5²)³ = 5⁶ = 15,625</p>
                  <p><strong>דוגמה אלגברית:</strong> (z³)⁴ = z¹²</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-r-4 border-green-300">
                <h5 className="font-semibold mb-2">4. חזקה של מכפלה - מעלים כל גורם בחזקה</h5>
                <FormulaBox>{"(ab)^n = a^n \\times b^n"}</FormulaBox>
                <div className="mt-3 space-y-1">
                  <p><strong>דוגמה מספרית:</strong> (2×3)⁴ = 2⁴ × 3⁴ = 16 × 81 = 1,296</p>
                  <p><strong>דוגמה אלגברית:</strong> (xy)³ = x³y³</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* חלק 2: חזקות מיוחדות */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: חזקות מיוחדות</h3>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-yellow-700">חזקת אפס</h4>
              <p className="mb-3">כל מספר שונה מאפס בחזקת אפס שווה ל-1:</p>
              <FormulaBox>{"a^0 = 1 \\text{ (כאשר } a \\neq 0 \\text{)}"}</FormulaBox>
              <div className="mt-3">
                <p><strong>דוגמאות:</strong> 5⁰ = 1, (-7)⁰ = 1, (xy)⁰ = 1</p>
                <p className="text-sm text-gray-600 mt-2"><strong>הערה:</strong> 0⁰ לא מוגדר במתמטיקה</p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-red-700">חזקה שלילית</h4>
              <p className="mb-3">חזקה שלילית מציינת הופכי:</p>
              <FormulaBox>{"a^{-n} = \\frac{1}{a^n}"}</FormulaBox>
              <div className="mt-3 space-y-2">
                <p><strong>דוגמאות מספריות:</strong></p>
                <p>2⁻³ = 1/2³ = 1/8</p>
                <p>5⁻² = 1/5² = 1/25</p>
                <p><strong>דוגמאות אלגבריות:</strong></p>
                <p>x⁻⁴ = 1/x⁴</p>
                <p>(ab)⁻² = 1/(ab)² = 1/(a²b²)</p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-purple-700">חזקה של שבר</h4>
              <p className="mb-3">חזקה של שבר מתפלגת על המונה והמכנה:</p>
              <FormulaBox>{"\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}"}</FormulaBox>
              <div className="mt-3">
                <p><strong>דוגמה:</strong></p>
                <FormulaBox>{"\\left(\\frac{2}{3}\\right)^3 = \\frac{2^3}{3^3} = \\frac{8}{27}"}</FormulaBox>
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
          <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום שיעור 2.1</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">מעולה! התמחנו בחוקי החזקות המתקדמים.</h4>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>חוקי הבסיס:</strong> כפל = חיבור מעריכים, חילוק = חיסור מעריכים</li>
              <li><strong>חזקה של חזקה:</strong> מכפילים את המעריכים</li>
              <li><strong>חזקות מיוחדות:</strong> a⁰ = 1, a⁻ⁿ = 1/aⁿ</li>
              <li><strong>בביטויים מורכבים:</strong> עבדו שלב אחר שלב ובסדר הנכון</li>
              <li><strong>תמיד בדקו</strong> אם ניתן לפשט את התוצאה הסופית</li>
            </ul>
            
            <div className="mt-4 p-3 bg-blue-50 rounded">
              <p className="text-sm font-medium text-blue-800">
                <strong>הכנה לשיעור הבא:</strong> בשיעור 2.2 נכיר שורשים וביטויים רציונליים - הכלים שיעזרו לנו לעבוד עם מספרים שאינם שלמים.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Mahat21AdvancedPowers;
