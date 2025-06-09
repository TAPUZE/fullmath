import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';

const AnalyticGeometryCircleLineIntersectionLesson = () => {
  const exercises = [
    {
      id: 1,
      question: "מצא את נקודות החיתוך של המעגל (x-2)² + y² = 5 והישר y = x-1",
      solution: "נציב y = x-1 במשוואת המעגל: (x-2)² + (x-1)² = 5. נפתח: x² - 4x + 4 + x² - 2x + 1 = 5. מסדרים: 2x² - 6x = 0. נוציא גורם משותף: 2x(x-3) = 0. לכן x = 0 או x = 3. עבור x = 0: y = -1. עבור x = 3: y = 2. נקודות החיתוך: (0, -1) ו-(3, 2)"
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "אם לאחר הצבת משוואת הישר במשוואת המעגל קיבלנו משוואה ריבועית עם דיסקרימיננטה Δ < 0, כמה נקודות חיתוך יש לישר ולמעגל?",
      options: [
        "0 (אין נקודות חיתוך)",
        "1 (הישר משיק למעגל)",
        "2 (הישר חותך את המעגל)"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "מהי הדרך הראשונה למצוא נקודות חיתוך בין מעגל x² + y² = R² לישר y = k (ישר אופקי)?",
      options: [
        "להציב x = k במשוואת המעגל",
        "להציב y = k במשוואת המעגל",
        "לחשב מרחק בין מרכז המעגל לישר"
      ],
      correctAnswer: 1
    }
  ];

  return (
    <LessonLayout 
      title="גיאומטריה אנליטית - חיתוך של מעגל וישר"
      lessonId="analytic-geometry-circle-line-intersection"
    >
      <div className="space-y-6">
        {/* כותרת */}
        <div className="bg-purple-50 p-6 rounded-lg border-r-4 border-purple-500">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">חיתוך של מעגל וישר ✂️</h2>
          <p className="text-gray-700">
            נלמד כיצד למצוא נקודות חיתוך בין מעגל לישר ולהבין את המצבים השונים האפשריים.
          </p>
        </div>

        {/* הגדרה */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">מציאת נקודות חיתוך בין מעגל לישר</h3>
          <p className="mb-4">
            נקודות החיתוך בין מעגל לישר הן הנקודות המשותפות לשתי הצורות, כלומר, הנקודות שמקיימות 
            גם את משוואת המעגל וגם את משוואת הישר.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">כדי למצוא אותן, עלינו לפתור מערכת של שתי משוואות:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>משוואת המעגל (משוואה ריבועית): <FormulaBox type="inline">(x-a)^2 + (y-b)^2 = R^2</FormulaBox> או <FormulaBox type="inline">x^2 + y^2 = R^2</FormulaBox></li>
              <li>משוואת הישר (משוואה לינארית): <FormulaBox type="inline">y = mx + n</FormulaBox> או <FormulaBox type="inline">Ax + By + C = 0</FormulaBox></li>
            </ul>
          </div>
        </div>

        {/* שיטת הפתרון */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">שיטת הפתרון: הצבה</h3>
          <p className="mb-4">הדרך הנפוצה לפתור מערכת כזו היא באמצעות הצבה:</p>
          
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>בטא משתנה אחד:</strong> בטא את אחד המשתנים (בדרך כלל <FormulaBox type="inline">y</FormulaBox>) 
              באמצעות המשתנה השני מתוך משוואת הישר. לדוגמה, אם משוואת הישר היא <FormulaBox type="inline">y = mx + n</FormulaBox>, 
              הביטוי עבור <FormulaBox type="inline">y</FormulaBox> מוכן.
            </li>
            <li>
              <strong>הצב במשוואת המעגל:</strong> הצב את הביטוי שמצאת בסעיף הקודם במקום המתאים במשוואת המעגל.
            </li>
            <li>
              <strong>פתור את המשוואה הריבועית:</strong> לאחר ההצבה, תקבל משוואה ריבועית בנעלם אחד 
              (בדרך כלל <FormulaBox type="inline">x</FormulaBox>). פתור אותה כדי למצוא את שיעורי ה-<FormulaBox type="inline">x</FormulaBox> 
              של נקודות החיתוך.
            </li>
            <li>
              <strong>מצא את שיעורי ה-<FormulaBox type="inline">y</FormulaBox>:</strong> הצב כל אחד מערכי ה-<FormulaBox type="inline">x</FormulaBox> 
              שמצאת בחזרה במשוואת הישר (הפשוטה יותר) כדי למצוא את שיעורי ה-<FormulaBox type="inline">y</FormulaBox> המתאימים.
            </li>
            <li><strong>רשום את נקודות החיתוך.</strong></li>
          </ol>
        </div>

        {/* מספר הפתרונות */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">מספר הפתרונות האפשרי (מצבים הדדיים)</h3>
          <p className="mb-4">
            לאחר ההצבה וקבלת משוואה ריבועית מהצורה <FormulaBox type="inline">Ax^2 + Bx + C = 0</FormulaBox>, 
            מספר הפתרונות (ולכן מספר נקודות החיתוך) תלוי בדיסקרימיננטה <FormulaBox type="inline">\Delta = B^2 - 4AC</FormulaBox>:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Δ &gt; 0</h4>
              <p className="text-sm">שני פתרונות שונים ל-x</p>
              <p className="font-medium text-green-700">שתי נקודות חיתוך</p>
              <p className="text-sm text-gray-600">(הישר חותך את המעגל)</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Δ = 0</h4>
              <p className="text-sm">פתרון יחיד ל-x (שורש כפול)</p>
              <p className="font-medium text-yellow-700">נקודת חיתוך אחת</p>
              <p className="text-sm text-gray-600">(הישר משיק למעגל)</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Δ &lt; 0</h4>
              <p className="text-sm">אין פתרונות ממשיים ל-x</p>
              <p className="font-medium text-red-700">אין נקודות חיתוך</p>
              <p className="text-sm text-gray-600">(הישר אינו פוגש את המעגל)</p>
            </div>
          </div>
        </div>

        {/* דוגמה פתורה */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">דוגמה פתורה</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-medium mb-4">
              <strong>דוגמה:</strong> מצא את נקודות החיתוך של המעגל <FormulaBox type="inline">x^2 + y^2 = 25</FormulaBox> 
              והישר <FormulaBox type="inline">y = x + 1</FormulaBox>.
            </p>
            
            <div className="space-y-3">
              <p><strong>פתרון:</strong></p>
              
              <div>
                <p>1. <strong>נציב</strong> את משוואת הישר במשוואת המעגל:</p>
                <FormulaBox type="block">x^2 + (x+1)^2 = 25</FormulaBox>
              </div>
              
              <div>
                <p>2. <strong>נפתח סוגריים ונסדר</strong> את המשוואה:</p>
                <FormulaBox type="block">x^2 + (x^2 + 2x + 1) = 25</FormulaBox>
                <FormulaBox type="block">2x^2 + 2x + 1 - 25 = 0</FormulaBox>
                <FormulaBox type="block">2x^2 + 2x - 24 = 0</FormulaBox>
                <p>נחלק את כל המשוואה ב-2 כדי לפשט:</p>
                <FormulaBox type="block">x^2 + x - 12 = 0</FormulaBox>
              </div>
              
              <div>
                <p>3. <strong>נפתור את המשוואה הריבועית:</strong></p>
                <p>פירוק לגורמים: <FormulaBox type="inline">(x+4)(x-3) = 0</FormulaBox></p>
                <p>מכאן, הפתרונות ל-<FormulaBox type="inline">x</FormulaBox> הם:</p>
                <FormulaBox type="block">{`x_1 = -4 \\\\quad \\\\text{or} \\\\quad x_2 = 3`}</FormulaBox>
              </div>
              
              <div>
                <p>4. <strong>נמצא את שיעורי ה-<FormulaBox type="inline">y</FormulaBox></strong> המתאימים:</p>
                <p>עבור <FormulaBox type="inline">{`x_1 = -4`}</FormulaBox>: <FormulaBox type="inline">{`y_1 = -4 + 1 = -3`}</FormulaBox></p>
                <p>עבור <FormulaBox type="inline">{`x_2 = 3`}</FormulaBox>: <FormulaBox type="inline">{`y_2 = 3 + 1 = 4`}</FormulaBox></p>
              </div>
              
              <div className="bg-blue-100 p-3 rounded">
                <p><strong>תשובה:</strong> נקודות החיתוך הן <FormulaBox type="inline">(-4, -3)</FormulaBox> ו-<FormulaBox type="inline">(3, 4)</FormulaBox>.</p>
              </div>
            </div>
          </div>
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
                lessonId="analytic-geometry-circle-line-intersection"
              />
            ))}
          </div>
        </div>

        {/* מקרים מיוחדים */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">מקרים מיוחדים</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">ישר אופקי y = k:</h4>
              <p>נציב ישירות במשוואת המעגל: <FormulaBox type="inline">{`x^2 + k^2 = R^2`}</FormulaBox></p>
              <p>נקבל: <FormulaBox type="inline">{`x = \\\\pm\\\\sqrt{R^2 - k^2}`}</FormulaBox> (אם <FormulaBox type="inline">{`|k| \\\\leq R`}</FormulaBox>)</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">ישר אנכי x = h:</h4>
              <p>נציב ישירות במשוואת המעגל: <FormulaBox type="inline">{`h^2 + y^2 = R^2`}</FormulaBox></p>
              <p>נקבל: <FormulaBox type="inline">{`y = \\\\pm\\\\sqrt{R^2 - h^2}`}</FormulaBox> (אם <FormulaBox type="inline">{`|h| \\\\leq R`}</FormulaBox>)</p>
            </div>
          </div>
        </div>

        {/* בחן את עצמך */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">בחן את עצמך 🧐</h3>
          <Quiz questions={quizQuestions} />
        </div>        {/* סיכום */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">סיכום</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>חיתוך מעגל וישר נמצא על ידי פתרון מערכת של שתי משוואות</li>
            <li>השיטה הנפוצה היא הצבת משוואת הישר במשוואת המעגל</li>
            <li>מספר נקודות החיתוך תלוי בדיסקרימיננטה של המשוואה הריבועית שנוצרת</li>
            <li>Δ &gt; 0: שתי נקודות חיתוך, Δ = 0: נקודה אחת (משיק), Δ &lt; 0: אין חיתוך</li>
            <li>עבור ישרים אופקיים ואנכיים, ההצבה פשוטה יותר</li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
};

export default AnalyticGeometryCircleLineIntersectionLesson;
