import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat22RootsRational = () => {
  const lessonId = 'mahat-2-2-roots-rational';
  const nextLessonPath = '/lessons/mahat-2-3-scientific-notation';

  const exercises = [
    {
      id: 'ex1',
      question: 'פשט: -2a³ * 4a',
      correctAnswer: '-8a⁴',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>כופלים מקדמים ומחברים מעריכים של בסיס זהה:</p>
          <FormulaBox>{"-2a^3 \\times 4a = (-2 \\times 4) \\times (a^3 \\times a^1) = -8a^{3+1} = -8a^4"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'פשט: (15b⁶c³) / (5b²c)',
      correctAnswer: '3b⁴c²',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>מחלקים מקדמים ומחסרים מעריכים של בסיסים זהים:</p>
          <FormulaBox>{"\\frac{15b^6c^3}{5b^2c} = \\frac{15}{5} \\times \\frac{b^6}{b^2} \\times \\frac{c^3}{c^1} = 3 \\times b^{6-2} \\times c^{3-1} = 3b^4c^2"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'כתוב כחזקה: √x⁷',
      correctAnswer: 'x^(7/2)',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>שורש ריבועי שווה לחזקה עם מעריך 1/2:</p>
          <FormulaBox>{"\\sqrt{x^7} = x^{7/2}"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'חשב את הערך של 27^(1/3)',
      correctAnswer: '3',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>חזקה עם מעריך 1/3 היא שורש שלישי:</p>
          <FormulaBox>{"27^{1/3} = \\sqrt[3]{27} = 3"}</FormulaBox>
          <p>כי 3³ = 27</p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'פשט: √50',
      correctAnswer: '5√2',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>פירוק השורש - מחפשים ריבוע מושלם:</p>
          <FormulaBox>{"\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex6',
      question: 'פשט: √a⁷b⁹',
      correctAnswer: 'a³b⁴√ab',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>מוציאים את החזקות הזוגיות הגבוהות ביותר:</p>
          <FormulaBox>{"\\sqrt{a^7b^9} = \\sqrt{a^6 \\times a \\times b^8 \\times b} = \\sqrt{a^6} \\times \\sqrt{b^8} \\times \\sqrt{ab}"}</FormulaBox>
          <FormulaBox>{"= a^3 \\times b^4 \\times \\sqrt{ab} = a^3b^4\\sqrt{ab}"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex7',
      question: 'חשב: 3√2 + 5√2',
      correctAnswer: '8√2',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>בסיסי שורש זהים - מחברים מקדמים:</p>
          <FormulaBox>{"3\\sqrt{2} + 5\\sqrt{2} = (3 + 5)\\sqrt{2} = 8\\sqrt{2}"}</FormulaBox>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - שורשים וחזקות רציונליות',
    questions: [
      {
        id: 'q1',
        question: 'מה הערך של √12 + √75?',
        options: ['√87', '7√3', '13√3', '7√6'],
        correctAnswer: '7√3',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>נפרק כל שורש:</p>
            <FormulaBox>{"\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}"}</FormulaBox>
            <FormulaBox>{"\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}"}</FormulaBox>
            <FormulaBox>{"2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}"}</FormulaBox>
          </div>
        )
      },
      {
        id: 'q2',
        question: 'מהו פישוט הביטוי (3x²y⁴) * (2x³y)?',
        options: ['5x⁵y⁵', '6x⁵y⁵', '6x⁶y⁴', '5x⁶y⁵'],
        correctAnswer: '6x⁵y⁵',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <FormulaBox>{"(3x^2y^4) \\times (2x^3y) = (3 \\times 2) \\times (x^2 \\times x^3) \\times (y^4 \\times y^1)"}</FormulaBox>
            <FormulaBox>{"= 6 \\times x^{2+3} \\times y^{4+1} = 6x^5y^5"}</FormulaBox>
          </div>
        )
      },
      {
        id: 'q3',
        question: 'מה משמעות הביטוי 8^(2/3)?',
        options: ['∛8²', '∛(8²)', '2∛8', 'כל התשובות נכונות'],
        correctAnswer: 'כל התשובות נכונות',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <FormulaBox>{"8^{2/3} = (\\sqrt[3]{8})^2 = (\\sqrt[3]{8^2}) = 2^2 = 4"}</FormulaBox>
            <p>גם ∛8² וגם 2∛8 אינם נכונים, אבל ∛8² = ∛64 ≠ 4</p>
            <p>התשובה הנכונה היא למעשה ∛8² = (∛8)² = 2² = 4</p>
          </div>
        )
      },
      {
        id: 'q4',
        question: 'איך מפשטים √x⁻⁶?',
        options: ['x⁻³', '1/x³', '-x³', '√x⁶'],
        correctAnswer: '1/x³',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <FormulaBox>{"\\sqrt{x^{-6}} = (x^{-6})^{1/2} = x^{-6 \\times 1/2} = x^{-3} = \\frac{1}{x^3}"}</FormulaBox>
          </div>
        )
      },
      {
        id: 'q5',
        question: 'מה התוצאה של (√5) * (√20)?',
        options: ['√25', '10', '5√2', '√100'],
        correctAnswer: '10',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <FormulaBox>{"\\sqrt{5} \\times \\sqrt{20} = \\sqrt{5 \\times 20} = \\sqrt{100} = 10"}</FormulaBox>
          </div>
        )
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="שורשים וחזקות עם מעריך רציונלי"
      description="בסיסי חזקות זהים, המעבר בין חזקה לשורש, פירוק שורשים ופעולות"
      nextLessonPath={nextLessonPath}
    >
      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">שורשים וחזקות עם מעריך רציונלי</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">מבוא לשיעור</h3>
          <p className="text-gray-700 leading-relaxed">
            בשיעור זה נעמיק בעבודה עם בסיסי חזקות זהים ונכיר את הקשר המיוחד בין חזקות לשורשים. 
            נלמד איך לעבור בין חזקות עם מעריכים רציונליים לשורשים ולהיפך, ונתמחה בפירוק שורשים 
            ובפעולות עליהם.
          </p>
        </div>

        {/* מטרות השיעור */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>שליטה בבסיסי חזקות זהים:</strong> נחזק את הכללים לכפל וחילוק של חזקות עם אותו בסיס</li>
            <li><strong>המעבר בין חזקה לשורש:</strong> נבין את הקשר ⁿ√xᵐ = x^(m/n) ונתרגל יישומו</li>
            <li><strong>פירוק שורשים:</strong> נלמד להוציא גורמים מתחת לשורש ולפשט ביטויים</li>
            <li><strong>פעולות עם שורשים:</strong> נתרגל חיבור, חיסור וכפל של שורשים</li>
          </ul>
        </section>

        {/* חלק 1: בסיסי חזקות זהים */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: בסיסי חזקות זהים (שילוב אותיות ומספרים)</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-3">כאשר הבסיסים זהים, החיים פשוטים!</h4>
            <p className="text-gray-700 mb-3">
              אנו משתמשים רק בשני חוקים עיקריים, וזה נכון גם כאשר הבסיס הוא מספר, אות, 
              או אפילו ביטוי שלם בסוגריים.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-r-4 border-green-300">
                <h5 className="font-semibold mb-2">כפל: מחברים מעריכים</h5>
                <FormulaBox>{"a^m \\times a^n = a^{m+n}"}</FormulaBox>
                <div className="mt-3 space-y-1">
                  <p><strong>דוגמאות:</strong></p>
                  <p>3x² × 5x⁶ = (3×5) × (x²×x⁶) = 15x⁸</p>
                  <p>(x+1)⁵ × (x+1)² = (x+1)⁷</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-r-4 border-green-300">
                <h5 className="font-semibold mb-2">חילוק: מחסרים מעריכים</h5>
                <FormulaBox>{"\\frac{a^m}{a^n} = a^{m-n}"}</FormulaBox>
                <div className="mt-3 space-y-1">
                  <p><strong>דוגמאות:</strong></p>
                  <p>(12y⁷) ÷ (4y²) = (12÷4) × (y⁷÷y²) = 3y⁵</p>
                  <p>x⁻⁵ × x¹⁰ × x⁻² = x^(-5+10-2) = x³</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* חלק 2: המעבר בין חזקה לשורש */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: המעבר בין חזקה לשורש</h3>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-3 text-purple-700">הקשר המהותי</h4>
            <p className="text-gray-700 mb-3">
              שורש הוא פשוט דרך אחרת לכתוב חזקה עם מעריך שברי. זהו קשר מהותי שמאפשר לנו 
              להשתמש בחוקי חזקות כדי לפתור בעיות שורשים.
            </p>
            
            <div className="bg-white p-4 rounded border-r-4 border-purple-300">
              <h5 className="font-semibold mb-2">הנוסחה הכללית</h5>
              <FormulaBox>{"\\sqrt[n]{x^m} = x^{m/n}"}</FormulaBox>
              
              <div className="mt-4 space-y-3">
                <div>
                  <h6 className="font-medium">מקרים פרטיים חשובים:</h6>
                  <ul className="list-disc list-inside space-y-1 mr-4 mt-2">
                    <li>שורש ריבועי: <FormulaBox inline>{"\\sqrt{x} = x^{1/2}"}</FormulaBox></li>
                    <li>שורש שלישי: <FormulaBox inline>{"\\sqrt[3]{x} = x^{1/3}"}</FormulaBox></li>
                    <li>שורש עם חזקה: <FormulaBox inline>{"\\sqrt{a^3} = a^{3/2}"}</FormulaBox></li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-3 rounded">
                  <p><strong>דוגמה מעשית:</strong></p>
                  <FormulaBox>{"8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4"}</FormulaBox>
                  <p className="text-sm text-gray-600 mt-1">או: 8^(2/3) = ∛(8²) = ∛64 = 4</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* חלק 3: פירוק שורשים */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 3: פירוק שורשים</h3>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-3">המטרה: "להוציא מהשורש" כמה שיותר</h4>
            <p className="text-gray-700 mb-3">
              אנו עושים זאת על ידי פירוק המספר שבתוך השורש למכפלה של ריבוע מושלם במספר אחר.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-r-4 border-blue-300">
                <h5 className="font-semibold mb-2">החוק הבסיסי</h5>
                <FormulaBox>{"\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}"}</FormulaBox>
              </div>

              <div className="bg-white p-4 rounded border-r-4 border-blue-300">
                <h5 className="font-semibold mb-2">דוגמאות מפורטות</h5>
                <div className="space-y-3">
                  <div>
                    <p><strong>עם מספרים:</strong></p>
                    <FormulaBox>{"\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}"}</FormulaBox>
                    <FormulaBox>{"\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}"}</FormulaBox>
                  </div>
                  
                  <div>
                    <p><strong>עם משתנים:</strong></p>
                    <FormulaBox>{"\\sqrt{x^5} = \\sqrt{x^4 \\times x} = \\sqrt{x^4} \\times \\sqrt{x} = x^2\\sqrt{x}"}</FormulaBox>
                    <p className="text-sm text-gray-600">מוציאים את החזקה הזוגית הגבוהה ביותר</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* חלק 4: פעולות עם שורשים */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 4: פעולות עם שורשים</h3>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-orange-700">בסיסי שורש זהים</h4>
              <p className="mb-3">ניתן לחבר ולחסר שורשים רק אם הביטוי שבתוך השורש זהה לחלוטין!</p>
              
              <div className="bg-white p-3 rounded border-r-4 border-orange-300">
                <FormulaBox>{"a\\sqrt{c} + b\\sqrt{c} = (a + b)\\sqrt{c}"}</FormulaBox>
                <div className="mt-2">
                  <p><strong>דוגמאות:</strong></p>
                  <p>3√2 + 5√2 = 8√2</p>
                  <p>7√x - 2√x = 5√x</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">כפל שורשים</h4>
              <p className="mb-3">בכפל שורשים, אפשר תמיד לשלב:</p>
              
              <div className="bg-white p-3 rounded border-r-4 border-gray-300">
                <FormulaBox>{"\\sqrt{a} \\times \\sqrt{b} = \\sqrt{a \\times b}"}</FormulaBox>
                <div className="mt-2">
                  <p><strong>דוגמאות:</strong></p>
                  <p>√5 × √20 = √(5×20) = √100 = 10</p>
                  <p>(5√6) × (2√3) = 10√18 = 10 × 3√2 = 30√2</p>
                </div>
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
          <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום שיעור 2.2</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">מצוין! התמחנו בשורשים וחזקות רציונליות.</h4>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>בסיסים זהים:</strong> כפל = חיבור מעריכים, חילוק = חיסור מעריכים</li>
              <li><strong>קשר חזקה-שורש:</strong> ⁿ√xᵐ = x^(m/n) - זה פותח אפשרויות אינסופיות</li>
              <li><strong>פירוק שורשים:</strong> תמיד חפשו ריבועים מושלמים להוצאה</li>
              <li><strong>פעולות שורשים:</strong> חיבור רק עם בסיסים זהים, כפל תמיד אפשרי</li>
              <li><strong>אסטרטגיה:</strong> פרקו, פשטו, ואז בצעו את הפעולה</li>
            </ul>
            
            <div className="mt-4 p-3 bg-blue-50 rounded">
              <p className="text-sm font-medium text-blue-800">
                <strong>הכנה לשיעור הבא:</strong> בשיעור 2.3 נלמד על כתיבה מדעית - כלי חשוב לעבודה עם מספרים גדולים וקטנים מאוד.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Mahat22RootsRational;
