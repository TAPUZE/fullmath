import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';

const CalculusIntegralPolynomialLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: 'מצא את האינטגרל הלא מסוים של הפונקציה',
      formula: 'f(x) = 4x^3 - 6x + 2',
      fields: [
        { id: 'answer', label: 'פונקציה קדומה', placeholder: 'הכנס פונקציה קדומה (עם C)' }
      ],
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <FormulaBox>{"\\int (4x^3 - 6x + 2) dx = 4\\frac{x^4}{4} - 6\\frac{x^2}{2} + 2x + C"}</FormulaBox>
          <FormulaBox>= x^4 - 3x^2 + 2x + C</FormulaBox>
          <p><strong>תשובה:</strong> <FormulaBox inline>x^4 - 3x^2 + 2x + C</FormulaBox>.</p>
        </div>
      ),
      checkAnswer: (answers) => {
        const answer = answers.answer?.toLowerCase().replace(/\s/g, '');
        const correctAnswer = answer.includes('x^4-3x^2+2x+c') || 
                             answer.includes('x^4-3x²+2x+c') ||
                             answer.includes('x⁴-3x²+2x+c');
        
        if (correctAnswer) {
          return { correct: true, message: 'כל הכבוד! התשובה נכונה.' };
        } else {
          return { correct: false, message: 'בדוק שוב. זכור להשתמש בכלל האינטגרציה לחזקות ואל תשכח את קבוע האינטגרציה C.' };
        }
      }
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהי הפונקציה הקדומה של',
      formula: 'f(x) = 2x',
      options: [
        { value: 'a', label: '2x² + C' },
        { value: 'b', label: 'x² + C' },
        { value: 'c', label: '2 + C' }
      ],
      correct: 'b',
      explanation: 'לפי כלל האינטגרציה: ∫2x dx = 2∫x dx = 2(x²/2) + C = x² + C.'
    },
    {
      id: 'q2',
      question: 'האינטגרל המסוים שווה ל:',
      formula: '∫₀¹ x² dx',
      options: [
        { value: 'a', label: '1' },
        { value: 'b', label: '1/3' },
        { value: 'c', label: '3' }
      ],
      correct: 'b',
      explanation: 'הפונקציה הקדומה של x² היא x³/3. לכן: [x³/3]₀¹ = (1³/3) - (0³/3) = 1/3 - 0 = 1/3.'
    },
    {
      id: 'q3',
      question: 'מהו האינטגרל הלא מסוים של הפונקציה הקבועה f(x) = 5?',
      options: [
        { value: 'a', label: '5x + C' },
        { value: 'b', label: '5 + C' },
        { value: 'c', label: 'x + C' }
      ],
      correct: 'a',
      explanation: 'האינטגרל של קבוע k הוא kx + C. לכן ∫5 dx = 5x + C.'
    }
  ];

  return (
    <LessonLayout
      title="חשבון אינטגרלי (פולינומים) ∫"
      lessonId="calculus-integral-polynomial"
    >
      <div className="space-y-6">
        {/* כותרת */}
        <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-800 mb-4">חשבון אינטגרלי - פולינומים ∫</h2>
          <p className="text-gray-700">
            נלמד על אינטגרלים של פונקציות פולינום וחישוב שטחים.
          </p>
        </div>

        {/* פונקציה קדומה */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">פונקציה קדומה (אינטגרל לא מסוים)</h3>
          <p className="mb-4">
            פונקציה קדומה של פונקציה <FormulaBox inline>f(x)</FormulaBox> היא פונקציה <FormulaBox inline>F(x)</FormulaBox> שהנגזרת שלה שווה ל-<FormulaBox inline>f(x)</FormulaBox>, 
            כלומר <FormulaBox inline>F'(x) = f(x)</FormulaBox>.
          </p>
          <p className="mb-4">
            האינטגרל הלא מסוים של <FormulaBox inline>f(x)</FormulaBox> מסומן <FormulaBox inline>\\int f(x) dx</FormulaBox> והוא מייצג את כל הפונקציות הקדומות של <FormulaBox inline>f(x)</FormulaBox>. 
            אם <FormulaBox inline>F(x)</FormulaBox> היא פונקציה קדומה אחת, אז כל פונקציה קדומה אחרת היא מהצורה <FormulaBox inline>F(x) + C</FormulaBox>, 
            כאשר <FormulaBox inline>C</FormulaBox> הוא קבוע אינטגרציה.
          </p>
          
          <h4 className="text-lg font-semibold mt-4 mb-1 text-gray-800">כללי אינטגרציה בסיסיים לפולינומים:</h4>
          <ul className="list-disc pr-6 space-y-2">
            <li><FormulaBox>{"\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)"}</FormulaBox></li>
            <li><FormulaBox>{"\\int k dx = kx + C \\quad (k \\text{ constant})"}</FormulaBox></li>            <li><FormulaBox>{"\\int k \\cdot f(x) dx = k \\int f(x) dx"}</FormulaBox></li>
            <li><FormulaBox>{"\\int (f(x) \\pm g(x)) dx = \\int f(x) dx \\pm \\int g(x) dx"}</FormulaBox></li>
          </ul>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-4">
            <p className="font-medium">
              <strong>דוגמה:</strong> מצא את האינטגרל של <FormulaBox inline>f(x) = 3x^2 - 2x + 5</FormulaBox>.
            </p>
            <p><strong>פתרון:</strong></p>            <FormulaBox>{"\\int (3x^2 - 2x + 5) dx = 3 \\int x^2 dx - 2 \\int x dx + \\int 5 dx"}</FormulaBox>
            <FormulaBox>{"= 3 \\left(\\frac{x^{3}}{3}\\right) - 2 \\left(\\frac{x^{2}}{2}\\right) + 5x + C"}</FormulaBox>
            <FormulaBox>{"= x^3 - x^2 + 5x + C"}</FormulaBox>
          </div>
        </div>

        {/* האינטגרל המסוים */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">האינטגרל המסוים וחישוב שטחים</h3>
          <p className="mb-4">
            האינטגרל המסוים של פונקציה <FormulaBox inline>f(x)</FormulaBox> מהנקודה <FormulaBox inline>a</FormulaBox> עד הנקודה <FormulaBox inline>b</FormulaBox> מסומן <FormulaBox inline>\\int_a^b f(x) dx</FormulaBox> ומחושב כך:
          </p>
          <FormulaBox>\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)</FormulaBox>
          <p className="mb-4">
            כאשר <FormulaBox inline>F(x)</FormulaBox> היא פונקציה קדומה כלשהי של <FormulaBox inline>f(x)</FormulaBox> (אין צורך להוסיף <FormulaBox inline>C</FormulaBox> כי הוא מתבטל בחיסור).
          </p>
          
          <h4 className="text-lg font-semibold mt-4 mb-1 text-gray-800">חישוב שטח המוגבל בין גרף פונקציה לציר ה-x:</h4>
          <p className="mb-4">
            אם הפונקציה <FormulaBox inline>f(x)</FormulaBox> היא אי-שלילית (<FormulaBox inline>f(x) \\ge 0</FormulaBox>) בקטע <FormulaBox inline>[a,b]</FormulaBox>, 
            השטח <FormulaBox inline>S</FormulaBox> המוגבל בין גרף הפונקציה, ציר ה-x, והישרים <FormulaBox inline>x=a</FormulaBox> ו-<FormulaBox inline>x=b</FormulaBox> הוא:
          </p>
          <FormulaBox>S = \int_a^b f(x) dx</FormulaBox>
          <p className="mb-4">
            אם הפונקציה שלילית (<FormulaBox inline>f(x) \\le 0</FormulaBox>) בקטע, השטח הוא <FormulaBox inline>S = \\int_a^b (-f(x)) dx = -\\int_a^b f(x) dx</FormulaBox>, 
            או פשוט <FormulaBox inline>|\\int_a^b f(x) dx|</FormulaBox>.
          </p>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-4">
            <p className="font-medium">
              <strong>דוגמה:</strong> חשב את השטח המוגבל על ידי גרף הפונקציה <FormulaBox inline>y = -x^2 + 4x</FormulaBox>, 
              ציר ה-x, והישרים <FormulaBox inline>x=1</FormulaBox> ו-<FormulaBox inline>x=3</FormulaBox>.
            </p>
            <p><strong>פתרון:</strong></p>
            <p>
              1. נבדוק אם הפונקציה חיובית בתחום <FormulaBox inline>[1,3]</FormulaBox>. נקודות חיתוך עם ציר x: <FormulaBox inline>-x^2+4x=0 \\Rightarrow x(-x+4)=0 \\Rightarrow x=0, x=4</FormulaBox>.
            </p>
            <p>
              הפונקציה היא פרבולה "בוכה". בין 0 ל-4 היא חיובית. הקטע <FormulaBox inline>[1,3]</FormulaBox> נמצא כולו בתחום זה, 
              לכן <FormulaBox inline>f(x) \\ge 0</FormulaBox> בקטע הנתון.
            </p>            <p>2. השטח <FormulaBox inline>{"S = \\int_1^3 (-x^2 + 4x) dx"}</FormulaBox>.</p>
            <p>3. נמצא פונקציה קדומה: <FormulaBox inline>{"F(x) = \\int (-x^2 + 4x) dx = -\\frac{x^3}{3} + 2x^2"}</FormulaBox>.</p>
            <p>4. נחשב את האינטגרל המסוים:</p>
            <FormulaBox>{"S = [-\\frac{x^3}{3} + 2x^2]_1^3"}</FormulaBox>
            <FormulaBox>{"= \\left(-\\frac{27}{3} + 2 \\cdot 9\\right) - \\left(-\\frac{1}{3} + 2\\right)"}</FormulaBox>
            <FormulaBox>{"= (-9 + 18) - (-\\frac{1}{3} + \\frac{6}{3}) = 9 - \\frac{5}{3} = \\frac{22}{3}"}</FormulaBox>
            <p><strong>תשובה:</strong> השטח הוא <FormulaBox inline>\\frac{22}{3}</FormulaBox> יחידות שטח.</p>
          </div>

          <h4 className="text-lg font-semibold mt-4 mb-1 text-gray-800">חישוב שטח הכלוא בין שני גרפים:</h4>
          <p className="mb-4">
            השטח <FormulaBox inline>S</FormulaBox> הכלוא בין שני גרפים של פונקציות <FormulaBox inline>f(x)</FormulaBox> ו-<FormulaBox inline>g(x)</FormulaBox> בתחום <FormulaBox inline>[a,b]</FormulaBox>, 
            כאשר <FormulaBox inline>f(x) \\ge g(x)</FormulaBox> בכל הקטע, הוא:
          </p>
          <FormulaBox>S = \int_a^b (f(x) - g(x)) dx</FormulaBox>
          <p>הגבולות <FormulaBox inline>a,b</FormulaBox> הם לרוב שיעורי ה-x של נקודות החיתוך בין שתי הפונקציות.</p>
        </div>

        {/* תרגילים */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">תרגילים</h3>
          <div className="space-y-4">            {exercises.map((exercise) => (
              <InteractiveExercise 
                key={exercise.id}
                id={exercise.id}
                question={exercise.question}
                correctAnswer={exercise.correctAnswer}
                placeholder={exercise.placeholder}
                solution={exercise.solution}
                lessonId="calculus_integral_polynomial_he"
              />
            ))}
          </div>
        </div>

        {/* בחן את עצמך */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">בחן את עצמך 🧐</h3>
          <Quiz questions={quizQuestions} />
        </div>

        {/* סיכום */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">סיכום</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>האינטגרל הלא מסוים מייצג את כל הפונקציות הקדומות</li>
            <li>לפולינומים יש כללי אינטגרציה פשוטים</li>
            <li>האינטגרל המסוים מחשב שטחים מתחת לגרף</li>
            <li>יש לשים לב לסימן הפונקציה בחישוב שטחים</li>
            <li>שטח בין שני גרפים מחושב כאינטגרל של ההפרש</li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
};

export default CalculusIntegralPolynomialLesson;
