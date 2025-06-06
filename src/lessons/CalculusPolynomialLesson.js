import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const CalculusPolynomialLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: 'נתונה הפונקציה',
      formula: 'f(x) = x^3 - 6x^2 + 5',
      description: 'מצא את שיעורי נקודות הקיצון של הפונקציה וקבע את סוגן.',
      fields: [
        { id: 'max', label: 'נקודת מקסימום (לדוגמה: (1,5))', placeholder: 'הכנס שיעורי מקסימום' },
        { id: 'min', label: 'נקודת מינימום (לדוגמה: (3,-2))', placeholder: 'הכנס שיעורי מינימום' }
      ],
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>1. <FormulaBox inline>f(x) = x^3 - 6x^2 + 5</FormulaBox></p>
          <p>2. <FormulaBox inline>f'(x) = 3x^2 - 12x</FormulaBox></p>
          <p>3. נשווה נגזרת ל-0: <FormulaBox inline>3x^2 - 12x = 0 \\Rightarrow 3x(x-4) = 0</FormulaBox>.</p>
          <p>הפתרונות: <FormulaBox inline>x_1=0, x_2=4</FormulaBox>.</p>
          <p>4. נגזרת שנייה: <FormulaBox inline>f''(x) = 6x - 12</FormulaBox>.</p>
          <ul className="list-disc pr-4 space-y-2">
            <li>עבור <FormulaBox inline>x=0</FormulaBox>: <FormulaBox inline>f''(0) = -12 &lt; 0</FormulaBox> (מקסימום).<br/>
                <FormulaBox inline>f(0) = 0^3 - 6(0)^2 + 5 = 5</FormulaBox>. נקודת מקסימום: <FormulaBox inline>(0,5)</FormulaBox>.</li>
            <li>עבור <FormulaBox inline>x=4</FormulaBox>: <FormulaBox inline>f''(4) = 6(4) - 12 = 24 - 12 = 12 &gt; 0</FormulaBox> (מינימום).<br/>
                <FormulaBox inline>f(4) = 4^3 - 6(4)^2 + 5 = 64 - 96 + 5 = -27</FormulaBox>. נקודת מינימום: <FormulaBox inline>(4,-27)</FormulaBox>.</li>
          </ul>
          <p><strong>תשובה:</strong> מקסימום ב-<FormulaBox inline>(0,5)</FormulaBox>, מינימום ב-<FormulaBox inline>(4,-27)</FormulaBox>.</p>
        </div>
      ),
      checkAnswer: (answers) => {
        const max = answers.max?.toLowerCase().replace(/\s/g, '');
        const min = answers.min?.toLowerCase().replace(/\s/g, '');
        
        const maxCorrect = max.includes('(0,5)') || max.includes('0,5');
        const minCorrect = min.includes('(4,-27)') || min.includes('4,-27');
        
        if (maxCorrect && minCorrect) {
          return { correct: true, message: 'כל הכבוד! כל התשובות נכונות.' };
        } else {
          let feedback = 'בדוק שוב. ';
          if (!maxCorrect) feedback += 'נקודת המקסימום אינה נכונה. זכור לבדוק עם נגזרת שנייה. ';
          if (!minCorrect) feedback += 'נקודת המינימום אינה נכונה. חשב שוב את ערך הפונקציה. ';
          return { correct: false, message: feedback };
        }
      }
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהי הנגזרת של הפונקציה',
      formula: 'f(x) = 3x^4 - 2x^3 + x',      options: [
        { value: 'a', label: '12x³ - 6x² + 1' },
        { value: 'b', label: '12x³ - 6x² + x' },
        { value: 'c', label: '3x³ - 2x² + 1' }
      ],
      correctAnswer: 'a',
      explanation: 'הנגזרת: (3x⁴)′ = 12x³, (-2x³)′ = -6x², (x)′ = 1. לכן f′(x) = 12x³ - 6x² + 1.'
    },
    {
      id: 'q2', 
      question: 'בנקודה חשודה לקיצון, אם הנגזרת השנייה חיובית, מה סוג הנקודה?',      options: [
        { value: 'a', label: 'נקודת מינימום' },
        { value: 'b', label: 'נקודת מקסימום' },
        { value: 'c', label: 'נקודת פיתול' }
      ],
      correctAnswer: 'a',
      explanation: 'כאשר f″(x₀) > 0 בנקודה חשודה, הפונקציה קעורה כלפי מעלה ולכן זו נקודת מינימום מקומי.'
    },
    {
      id: 'q3',
      question: 'עבור הפונקציה f(x) = x² - 4x + 3, מהי נקודת החיתוך עם ציר y?',      options: [
        { value: 'a', label: '(0, 3)' },
        { value: 'b', label: '(0, -4)' },
        { value: 'c', label: '(3, 0)' }
      ],
      correctAnswer: 'a',
      explanation: 'נקודת החיתוך עם ציר y מתקבלת כאשר x=0. f(0) = 0² - 4(0) + 3 = 3. הנקודה היא (0,3).'
    }
  ];

  return (
    <LessonLayout
      title="פונקציית פולינום (חדו״א) 📈"
      breadcrumbs={[
        { label: 'דף ראשי', href: '/' },
        { label: 'שאלון 35382', href: '/lessons' },
        { label: 'חשבון דיפרנציאלי ואינטגרלי (חדו״א)' },
        { label: 'פונקציית פולינום' }
      ]}
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: חקירת פונקציית פולינום
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            פונקציית פולינום היא פונקציה מהצורה <FormulaBox inline>f(x) = a_n x^n + a_{'{n-1}'}x^{'{n-1}'} + \\dots + a_1 x + a_0</FormulaBox>, 
            כאשר <FormulaBox inline>n</FormulaBox> הוא מספר שלם אי-שלילי והמקדמים <FormulaBox inline>a_i</FormulaBox> הם מספרים ממשיים. 
            בשיעור זה נתמקד בחקירת פונקציות פולינום באמצעות חשבון דיפרנציאלי.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. תחום הגדרה ונקודות חיתוך עם הצירים</h3>
          <ul className="list-disc pr-6 space-y-1">
            <li><strong>תחום הגדרה:</strong> תחום ההגדרה של כל פונקציית פולינום הוא כל המספרים הממשיים (<FormulaBox inline>\\mathbb{'{R}'}</FormulaBox>), כלומר, "כל <FormulaBox inline>x</FormulaBox>".</li>
            <li><strong>חיתוך עם ציר ה-y:</strong> מתקבל כאשר <FormulaBox inline>x=0</FormulaBox>. ערך הפונקציה הוא <FormulaBox inline>f(0) = a_0</FormulaBox> (האיבר החופשי). הנקודה היא <FormulaBox inline>(0, a_0)</FormulaBox>.</li>
            <li><strong>חיתוך עם ציר ה-x:</strong> מתקבל כאשר <FormulaBox inline>y=0</FormulaBox> (או <FormulaBox inline>f(x)=0</FormulaBox>). זה דורש פתרון של המשוואה הפולינומיאלית <FormulaBox inline>a_n x^n + \\dots + a_0 = 0</FormulaBox>.</li>
          </ul>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-4">
            <p className="font-medium">
              <strong>דוגמה (ממסמך המחקר):</strong> עבור הפונקציה <FormulaBox inline>y = x^2 - 4x + 3</FormulaBox>, מצא את נקודות החיתוך עם הצירים.
            </p>
            <p><strong>פתרון:</strong></p>
            <p>חיתוך עם ציר y (נציב <FormulaBox inline>x=0</FormulaBox>): <FormulaBox inline>y = 0^2 - 4(0) + 3 = 3</FormulaBox>. נקודה: <FormulaBox inline>(0,3)</FormulaBox>.</p>
            <p>חיתוך עם ציר x (נציב <FormulaBox inline>y=0</FormulaBox>): <FormulaBox inline>x^2 - 4x + 3 = 0</FormulaBox>.</p>
            <p>נפתור (למשל, פירוק לגורמים): <FormulaBox inline>(x-1)(x-3) = 0</FormulaBox>.</p>
            <p>לכן, <FormulaBox inline>x_1 = 1, x_2 = 3</FormulaBox>. נקודות: <FormulaBox inline>(1,0), (3,0)</FormulaBox>.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. נגזרת של פונקציית פולינום</h3>
          <p>הנגזרת של פונקציה, <FormulaBox inline>f'(x)</FormulaBox>, מייצגת את שיפוע המשיק לגרף הפונקציה בנקודה <FormulaBox inline>x</FormulaBox>.</p>
          <p><strong>כללי גזירה בסיסיים לפולינום:</strong></p>
          <ul className="list-disc pr-6 space-y-1">
            <li>נגזרת של חזקה: <FormulaBox inline>(x^n)' = nx^{'{n-1}'}</FormulaBox></li>
            <li>נגזרת של קבוע: <FormulaBox inline>(c)' = 0</FormulaBox></li>
            <li>נגזרת של קבוע כפול פונקציה: <FormulaBox inline>(c \\cdot f(x))' = c \\cdot f'(x)</FormulaBox></li>
            <li>נגזרת של סכום/הפרש פונקציות: <FormulaBox inline>(f(x) \\pm g(x))' = f'(x) \\pm g'(x)</FormulaBox></li>
          </ul>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-4">
            <p className="font-medium">
              <strong>דוגמה (ממסמך המחקר):</strong> גזור את הפונקציה <FormulaBox inline>f(x) = 2x^3 - 5x^2 + 7x - 1</FormulaBox>.
            </p>
            <p><strong>פתרון:</strong></p>
            <FormulaBox>f'(x) = (2x^3)' - (5x^2)' + (7x)' - (1)'</FormulaBox>
            <FormulaBox>f'(x) = 2 \\cdot 3x^{'{3-1}'} - 5 \\cdot 2x^{'{2-1}'} + 7 \\cdot 1x^{'{1-1}'} - 0</FormulaBox>
            <FormulaBox>f'(x) = 6x^2 - 10x + 7</FormulaBox>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. משוואת משיק לגרף הפונקציה</h3>
          <p>כדי למצוא את משוואת המשיק לגרף הפונקציה <FormulaBox inline>f(x)</FormulaBox> בנקודה ששיעור ה-<FormulaBox inline>x</FormulaBox> שלה הוא <FormulaBox inline>x_0</FormulaBox>:</p>
          <ol className="list-decimal pr-6 space-y-1">
            <li>מצא את שיעור ה-<FormulaBox inline>y</FormulaBox> של נקודת ההשקה: <FormulaBox inline>y_0 = f(x_0)</FormulaBox>. נקודת ההשקה היא <FormulaBox inline>(x_0, y_0)</FormulaBox>.</li>
            <li>חשב את הנגזרת <FormulaBox inline>f'(x)</FormulaBox>.</li>
            <li>חשב את שיפוע המשיק בנקודה <FormulaBox inline>x_0</FormulaBox>: <FormulaBox inline>m = f'(x_0)</FormulaBox>.</li>
            <li>הצב את הנקודה <FormulaBox inline>(x_0, y_0)</FormulaBox> והשיפוע <FormulaBox inline>m</FormulaBox> בנוסחה למשוואת ישר: <FormulaBox inline>y - y_0 = m(x - x_0)</FormulaBox>.</li>
          </ol>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-4">
            <p className="font-medium">
              <strong>דוגמה (ממסמך המחקר):</strong> מצא את משוואת המשיק לגרף הפונקציה <FormulaBox inline>f(x) = x^2 - 3x + 5</FormulaBox> בנקודה שבה <FormulaBox inline>x=2</FormulaBox>.
            </p>
            <p><strong>פתרון:</strong></p>
            <p>1. <FormulaBox inline>y_0 = f(2) = 2^2 - 3(2) + 5 = 4 - 6 + 5 = 3</FormulaBox>. נקודת ההשקה: <FormulaBox inline>(2,3)</FormulaBox>.</p>
            <p>2. <FormulaBox inline>f'(x) = (x^2)' - (3x)' + (5)' = 2x - 3</FormulaBox>.</p>
            <p>3. <FormulaBox inline>m = f'(2) = 2(2) - 3 = 4 - 3 = 1</FormulaBox>.</p>
            <p>4. משוואת המשיק: <FormulaBox inline>y - 3 = 1(x - 2) \\Rightarrow y - 3 = x - 2 \\Rightarrow y = x + 1</FormulaBox>.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">4. חקירת פונקציה: נקודות קיצון ותחומי עלייה וירידה</h3>
          <ul className="list-disc pr-6 space-y-1">
            <li><strong>נקודות חשודות לקיצון (נקודות קריטיות):</strong> הנקודות שבהן הנגזרת הראשונה מתאפסת (<FormulaBox inline>f'(x) = 0</FormulaBox>).</li>
            <li><strong>סיווג נקודות קיצון (מינימום/מקסימום מקומי):</strong>
              <ul className="list-circle pr-6 space-y-1 mt-1">
                <li><strong>בעזרת טבלת ערכים (שיטת השכנים):</strong> בודקים את סימן הנגזרת משני צידי הנקודה החשודה. אם הנגזרת משנה סימן מחיובי לשלילי - נקודת מקסימום. אם משלילי לחיובי - נקודת מינימום.</li>
                <li><strong>בעזרת נגזרת שנייה <FormulaBox inline>f''(x)</FormulaBox>:</strong>
                  <ul className="list-disc pr-6 space-y-1 mt-1">
                    <li>אם <FormulaBox inline>f''(x_0) &gt; 0</FormulaBox> בנקודה חשודה <FormulaBox inline>x_0</FormulaBox>, זו נקודת מינימום.</li>
                    <li>אם <FormulaBox inline>f''(x_0) &lt; 0</FormulaBox>, זו נקודת מקסימום.</li>
                    <li>אם <FormulaBox inline>f''(x_0) = 0</FormulaBox>, יש לבדוק בשיטה אחרת (למשל, טבלת ערכים).</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><strong>תחומי עלייה וירידה:</strong>
              <ul className="list-disc pr-6 space-y-1 mt-1">
                <li>הפונקציה <strong>עולה</strong> בתחום שבו <FormulaBox inline>f'(x) &gt; 0</FormulaBox>.</li>
                <li>הפונקציה <strong>יורדת</strong> בתחום שבו <FormulaBox inline>f'(x) &lt; 0</FormulaBox>.</li>
              </ul>
            </li>
          </ul>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-4">
            <p className="font-medium">
              <strong>דוגמה (ממסמך המחקר):</strong> חקור את הפונקציה <FormulaBox inline>f(x) = x^3 - 3x^2</FormulaBox> ומצא את נקודות הקיצון שלה ואת תחומי העלייה והירידה.
            </p>
            <p><strong>פתרון:</strong></p>
            <p>1. נגזור את הפונקציה: <FormulaBox inline>f'(x) = 3x^2 - 6x</FormulaBox>.</p>
            <p>2. נמצא נקודות חשודות לקיצון (נשווה נגזרת ל-0):</p>
            <FormulaBox>3x^2 - 6x = 0 \\Rightarrow 3x(x - 2) = 0</FormulaBox>
            <p>הפתרונות הם <FormulaBox inline>x_1 = 0</FormulaBox>, <FormulaBox inline>x_2 = 2</FormulaBox>.</p>
            <p>3. נסווג את הנקודות בעזרת נגזרת שנייה: <FormulaBox inline>f''(x) = (3x^2 - 6x)' = 6x - 6</FormulaBox>.</p>
            <ul className="list-disc pr-4 space-y-2">
              <li>עבור <FormulaBox inline>x=0</FormulaBox>: <FormulaBox inline>f''(0) = 6(0) - 6 = -6 &lt; 0</FormulaBox>. לכן, ב-<FormulaBox inline>x=0</FormulaBox> יש נקודת <strong>מקסימום</strong>.<br/>
                  ערך ה-y: <FormulaBox inline>f(0) = 0^3 - 3(0^2) = 0</FormulaBox>. נקודת מקסימום: <FormulaBox inline>(0,0)</FormulaBox>.</li>
              <li>עבור <FormulaBox inline>x=2</FormulaBox>: <FormulaBox inline>f''(2) = 6(2) - 6 = 12 - 6 = 6 &gt; 0</FormulaBox>. לכן, ב-<FormulaBox inline>x=2</FormulaBox> יש נקודת <strong>מינימום</strong>.<br/>
                  ערך ה-y: <FormulaBox inline>f(2) = 2^3 - 3(2^2) = 8 - 12 = -4</FormulaBox>. נקודת מינימום: <FormulaBox inline>(2,-4)</FormulaBox>.</li>
            </ul>
            <p>4. תחומי עלייה וירידה (לפי סימן הנגזרת הראשונה <FormulaBox inline>f'(x) = 3x(x-2)</FormulaBox>, שהיא פרבולה "צוחקת"):</p>
            
            <div className="overflow-x-auto">
              <table className="w-full mt-4 mb-4 border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-3 py-2 bg-purple-100">תחום</th>
                    <th className="border border-gray-300 px-3 py-2 bg-purple-100">נציג</th>
                    <th className="border border-gray-300 px-3 py-2 bg-purple-100">סימן f'(x)</th>
                    <th className="border border-gray-300 px-3 py-2 bg-purple-100">מגמה</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 text-center"><FormulaBox inline>x &lt; 0</FormulaBox></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">-1</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><FormulaBox inline>3(-1)(-1-2) = (+)</FormulaBox></td>
                    <td className="border border-gray-300 px-3 py-2 text-center text-green-600">↗ עלייה</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 text-center"><FormulaBox inline>0 &lt; x &lt; 2</FormulaBox></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">1</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><FormulaBox inline>3(1)(1-2) = (-)</FormulaBox></td>
                    <td className="border border-gray-300 px-3 py-2 text-center text-red-600">↘ ירידה</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 text-center"><FormulaBox inline>x &gt; 2</FormulaBox></td>
                    <td className="border border-gray-300 px-3 py-2 text-center">3</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><FormulaBox inline>3(3)(3-2) = (+)</FormulaBox></td>
                    <td className="border border-gray-300 px-3 py-2 text-center text-green-600">↗ עלייה</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p><strong>תשובה:</strong> נקודת מקסימום <FormulaBox inline>(0,0)</FormulaBox>, נקודת מינימום <FormulaBox inline>(2,-4)</FormulaBox>.</p>
            <p>תחומי עלייה: <FormulaBox inline>x &lt; 0</FormulaBox> או <FormulaBox inline>x &gt; 2</FormulaBox>.</p>
            <p>תחומי ירידה: <FormulaBox inline>0 &lt; x &lt; 2</FormulaBox>.</p>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz questions={quizQuestions} />
    </LessonLayout>
  );
};

export default CalculusPolynomialLesson;
