import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';

const AnalyticGeometryCircleTangentLesson = () => {
  const exercises = [
    {
      id: 1,
      question: "מצאו את משוואת המשיק למעגל x² + y² = 25 בנקודה (3, 4)",
      solution: "נחשב את הנגזרת: 2x + 2y(dy/dx) = 0, לכן dy/dx = -x/y. בנקודה (3, 4): שיפוע = -3/4. משוואת המשיק: y - 4 = -3/4(x - 3) → 3x + 4y = 25"
    },
    {
      id: 2,
      question: "מצאו את משוואת המשיק למעגל (x-2)² + (y+1)² = 9 בנקודה (5, -1)",
      solution: "המעגל ממורכז ב-(2, -1) ורדיוס 3. הרדיוס לנקודה (5, -1) הוא אופקי. לכן המשיק אנכי: x = 5"
    }
  ];

  return (
    <LessonLayout 
      title="גיאומטריה אנליטית - משיק למעגל"
      lessonId="analytic-geometry-circle-tangent"
    >
      <div className="space-y-6">
        {/* כותרת */}
        <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">משיק למעגל</h2>
          <p className="text-gray-700">
            נלמד כיצד למצוא את משוואת המשיק למעגל בנקודה נתונה על המעגל.
          </p>
        </div>

        {/* משיק למעגל - הגדרה */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">הגדרה</h3>
          <p className="mb-4">
            <strong>משיק למעגל</strong> בנקודה נתונה הוא הישר הנוגע למעגל בנקודה זו בלבד.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">תכונות חשובות:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>המשיק למעגל בנקודה נתונה הוא אנכי לרדיוס העובר באותה נקודה</li>
              <li>קיים משיק יחיד למעגל בכל נקודה על המעגל</li>
              <li>המרחק ממרכז המעגל למשיק שווה לרדיוס המעגל</li>
            </ul>
          </div>
        </div>

        {/* דרכים למציאת משוואת המשיק */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">דרכים למציאת משוואת המשיק</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">שיטה 1: באמצעות הנגזרת</h4>
              <p className="mb-3">
                עבור מעגל <FormulaBox type="inline">x^2 + y^2 = r^2</FormulaBox>:
              </p>
              <FormulaBox type="block">{`2x + 2y \\\\frac{dy}{dx} = 0 \\\\Rightarrow \\\\frac{dy}{dx} = -\\\\frac{x}{y}`}</FormulaBox>
              <p className="mt-3">השיפוע של המשיק בנקודה <FormulaBox type="inline">{`(x_0, y_0)`}</FormulaBox> הוא:</p>
              <FormulaBox type="block">{`m = -\\\\frac{x_0}{y_0}`}</FormulaBox>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">שיטה 2: הנוסחה הישירה</h4>
              <p className="mb-3">
                עבור מעגל <FormulaBox type="inline">x^2 + y^2 = r^2</FormulaBox> ונקודה <FormulaBox type="inline">(x_0, y_0)</FormulaBox> על המעגל:
              </p>
              <FormulaBox type="block">
                x_0 x + y_0 y = r^2
              </FormulaBox>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">שיטה 3: עבור מעגל כללי</h4>
              <p className="mb-3">
                עבור מעגל <FormulaBox type="inline">(x-h)^2 + (y-k)^2 = r^2</FormulaBox> ונקודה <FormulaBox type="inline">(x_0, y_0)</FormulaBox>:
              </p>
              <FormulaBox type="block">
                (x_0-h)(x-h) + (y_0-k)(y-k) = r^2
              </FormulaBox>
            </div>
          </div>
        </div>

        {/* דוגמאות */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">דוגמאות</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">דוגמה 1: מעגל במרכז הראשית</h4>
              <p className="mb-3">
                מצאו את משוואת המשיק למעגל <FormulaBox type="inline">x^2 + y^2 = 25</FormulaBox> בנקודה <FormulaBox type="inline">(3, 4)</FormulaBox>.
              </p>
              
              <div className="mr-4">
                <p className="font-medium mb-2">פתרון:</p>
                <p className="mb-2">באמצעות הנוסחה הישירה:</p>
                <FormulaBox type="block">
                  3x + 4y = 25
                </FormulaBox>
                
                <p className="mt-3 mb-2">נבדוק: הנקודה (3, 4) על המעגל?</p>
                <FormulaBox type="block">
                  3^2 + 4^2 = 9 + 16 = 25 ✓
                </FormulaBox>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">דוגמה 2: מעגל כללי</h4>
              <p className="mb-3">
                מצאו את משוואת המשיק למעגל <FormulaBox type="inline">(x-1)^2 + (y+2)^2 = 9</FormulaBox> בנקודה <FormulaBox type="inline">(4, -2)</FormulaBox>.
              </p>
              
              <div className="mr-4">
                <p className="font-medium mb-2">פתרון:</p>
                <p className="mb-2">המעגל ממורכז ב-(1, -2) ורדיוס 3.</p>
                <p className="mb-2">באמצעות הנוסחה:</p>
                <FormulaBox type="block">
                  (4-1)(x-1) + (-2-(-2))(y-(-2)) = 9
                </FormulaBox>
                <FormulaBox type="block">
                  3(x-1) + 0(y+2) = 9
                </FormulaBox>
                <FormulaBox type="block">
                  3(x-1) = 9 \Rightarrow x = 4
                </FormulaBox>
                <p className="mt-2">המשיק הוא הישר האנכי x = 4.</p>
              </div>
            </div>
          </div>
        </div>

        {/* תרגילים */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">תרגילים</h3>
          <div className="space-y-4">
            {exercises.map((exercise) => (
              <Exercise key={exercise.id} {...exercise} />
            ))}
          </div>
        </div>

        {/* משיקים מנקודה חיצונית */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">משיקים מנקודה חיצונית למעגל</h3>
          
          <p className="mb-4">
            מנקודה חיצונית למעגל ניתן להעביר בדיוק שני משיקים למעגל.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">שיטה למציאת המשיקים:</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>נסמן את נקודת המגע הלא ידועה כ-<FormulaBox type="inline">(x_0, y_0)</FormulaBox></li>
              <li>הנקודה על המעגל, לכן מקיימת את משוואת המעגל</li>
              <li>המשיק עובר דרך הנקודה החיצונית הנתונה</li>
              <li>נפתור את מערכת המשוואות למציאת נקודות המגע</li>
            </ol>
          </div>
        </div>

        {/* מקרים מיוחדים */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">מקרים מיוחדים</h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">משיק אנכי:</h4>
              <p>כאשר <FormulaBox type="inline">y_0 = 0</FormulaBox>, המשיק הוא <FormulaBox type="inline">x = x_0</FormulaBox></p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">משיק אופקי:</h4>
              <p>כאשר <FormulaBox type="inline">x_0 = 0</FormulaBox>, המשיק הוא <FormulaBox type="inline">y = y_0</FormulaBox></p>
            </div>
          </div>
        </div>

        {/* סיכום */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">סיכום</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>המשיק למעגל בנקודה נתונה אנכי לרדיוס העובר באותה נקודה</li>
            <li>עבור מעגל <FormulaBox type="inline">x^2 + y^2 = r^2</FormulaBox> ונקודה <FormulaBox type="inline">(x_0, y_0)</FormulaBox>: <FormulaBox type="inline">x_0 x + y_0 y = r^2</FormulaBox></li>
            <li>ניתן להשתמש בנגזרת או בנוסחה הישירה</li>
            <li>מנקודה חיצונית עוברים בדיוק שני משיקים למעגל</li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
};

export default AnalyticGeometryCircleTangentLesson;
