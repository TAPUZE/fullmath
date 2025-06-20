import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat75ComplexGeometry = () => {
  const lessonId = 'mahat-7-5-complex-geometry';
  const nextLessonPath = '/lessons/mahat-8-1-quadratic-intro';

  const exercises = [
    {
      id: 'ex1',
      question: 'נתונות הנקודות A(1,2), B(5,4), C(3,6), D(−1,4). הוכח שABCD הוא מקבילית.',
      correctAnswer: 'מקבילית - צלעות נגדיות שוות ומקבילות',
      placeholder: 'הזן את ההוכחה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נחשב את וקטורי הצלעות:</strong></p>
          <p>AB⃗ = (5-1, 4-2) = (4, 2)</p>
          <p>DC⃗ = (3-(-1), 6-4) = (4, 2)</p>
          <p>AD⃗ = (-1-1, 4-2) = (-2, 2)</p>
          <p>BC⃗ = (3-5, 6-4) = (-2, 2)</p>
          <p><strong>מסקנה:</strong> AB⃗ = DC⃗ ו-AD⃗ = BC⃗</p>
          <p>צלעות נגדיות שוות ומקבילות → ABCD מקבילית</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'נתון משולש עם קודקודים A(0,0), B(6,0), C(3,4). מצא את מרכז המעגל החוסם.',
      correctAnswer: '(3, 1.5)',
      placeholder: 'הזן את קואורדינטות המרכז',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>מרכז המעגל החוסם נמצא בחיתוך האנכים האמצעיים:</strong></p>
          <p><strong>אמצע AB:</strong> (3, 0)</p>
          <p><strong>אנך אמצעי AB:</strong> x = 3 (אנכי לציר x)</p>
          <p><strong>אמצע AC:</strong> (1.5, 2)</p>
          <p><strong>שיפוע AC:</strong> m = 4/3</p>
          <p><strong>שיפוע אנך אמצעי AC:</strong> -3/4</p>
          <p><strong>משוואת אנך אמצעי AC:</strong> y - 2 = (-3/4)(x - 1.5)</p>
          <p><strong>פתרון:</strong> x = 3 → y = 2 - (3/4)(1.5) = 1.5</p>
          <p><strong>מרכז המעגל החוסם:</strong> (3, 1.5)</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'הוכח שהנקודות A(2,1), B(6,3), C(4,7) יוצרות משולש ישר זווית.',
      correctAnswer: 'זווית ישרה בB - AB⊥BC',
      placeholder: 'הזן את ההוכחה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נחשב את וקטורי הצלעות:</strong></p>
          <p>AB⃗ = (6-2, 3-1) = (4, 2)</p>
          <p>BC⃗ = (4-6, 7-3) = (-2, 4)</p>
          <p>AC⃗ = (4-2, 7-1) = (2, 6)</p>
          <p><strong>נבדוק מכפלות סקלריות:</strong></p>
          <p>AB⃗ · BC⃗ = 4×(-2) + 2×4 = -8 + 8 = 0</p>
          <p><strong>מסקנה:</strong> AB ⊥ BC → זווית ישרה בנקודה B</p>
          <p>המשולש ABC הוא משולש ישר זווית</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'איך מוכיחים שמרובע הוא מקבילית באמצעות קואורדינטות?',
      options: [
        'מראים שכל הצלעות שוות',
        'מראים שהאלכסונים שוים',
        'מראים שצלעות נגדיות שוות ומקבילות',
        'מראים שכל הזוויות ישרות'
      ],
      correctAnswer: 2,
      explanation: 'מקבילית היא מרובע שבו צלעות נגדיות שוות ומקבילות. זה נבדק על ידי השוואת וקטורי הצלעות.'
    },
    {
      id: 'q2',
      question: 'מהי התנאי לכך ששני וקטורים יהיו ניצבים?',
      options: [
        'יש להם אותו אורך',
        'המכפלה הסקלרית שלהם אפס',
        'יש להם אותו כיוון',
        'הם מקבילים לצירים'
      ],
      correctAnswer: 1,
      explanation: 'שני וקטורים ניצבים אם ורק אם המכפלה הסקלרית שלהם שווה לאפס.'
    },
    {
      id: 'q3',
      question: 'איפה נמצא מרכז המעגל החוסם של משולש?',
      options: [
        'בחיתוך הגבהים',
        'בחיתוך החציונים',
        'בחיתוך האנכים האמצעיים',
        'בחיתוך חוצי הזוויות'
      ],
      correctAnswer: 2,
      explanation: 'מרכז המעגל החוסם נמצא בחיתוך האנכים האמצעיים של צלעות המשולש.'
    },
    {
      id: 'q4',
      question: 'איך בודקים שמשולש הוא שווה שוקיים באמצעות קואורדינטות?',
      options: [
        'מחשבים את כל הזוויות',
        'מחשבים את השטח',
        'בודקים ששתי צלעות שוות באורך',
        'בודקים שהחציון הוא גם גובה'
      ],
      correctAnswer: 2,
      explanation: 'משולש שווה שוקיים הוא משולש שבו שתי צלעות שוות באורך.'
    }
  ];

  return (
    <LessonLayout
      lessonId={lessonId}
      title="7.5 הנדסה אנליטית בצורות מורכבות"
      description="הוכחת תכונות של מרובעים ומשולשים במערכת צירים"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>הוכחת תכונות גיאומטריות באמצעות קואורדינטות</li>
          <li>זיהוי סוגי מרובעים על פי תכונותיהם</li>
          <li>חישוב מרכזי עיגולים חוסמים וחסומים</li>
          <li>שימוש במכפלה סקלרית לבדיקת ניצבים</li>
          <li>פתרון בעיות גיאומטריות מורכבות</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">כלים בסיסיים בהנדסה אנליטית</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">מרחק בין נקודות:</h4>
              <FormulaBox formula="|AB| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}" />
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">אמצע קטע:</h4>
              <FormulaBox formula="M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)" />
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">שיפוע:</h4>
              <FormulaBox formula="m = \frac{y_2-y_1}{x_2-x_1}" />
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">מכפלה סקלרית:</h4>
              <FormulaBox formula="\vec{u} \cdot \vec{v} = u_x v_x + u_y v_y" />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded border-l-4 border-blue-400">
            <p><strong>תכונות חשובות:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>שני ישרים מקבילים ⟺ שיפועים שווים</li>
              <li>שני ישרים ניצבים ⟺ מכפלת השיפועים = -1</li>
              <li>שני וקטורים ניצבים ⟺ מכפלה סקלרית = 0</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-green-700">זיהוי מרובעים</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">מקבילית:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>צלעות נגדיות מקבילות ושוות</li>
                <li>אלכסונים חוצים זה את זה</li>
                <li>זוויות נגדיות שוות</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">מלבן:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>מקבילית + כל הזוויות ישרות</li>
                <li>אלכסונים שוים באורך</li>
                <li>צלעות סמוכות ניצבות</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">ריבוע:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>מלבן + כל הצלעות שוות</li>
                <li>אלכסונים שוים וניצבים</li>
                <li>אלכסונים חוצים זה את זה בזווית ישרה</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">מעוין:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>מקבילית + כל הצלעות שוות</li>
                <li>אלכסונים ניצבים וחוצים זה את זה</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">תכונות משולשים</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">סוגי משולשים לפי צלעות:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>שווה צלעות:</strong> שלוש צלעות שוות</li>
                <li><strong>שווה שוקיים:</strong> שתי צלעות שוות</li>
                <li><strong>שונה צלעות:</strong> כל הצלעות שונות</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">סוגי משולשים לפי זוויות:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>חד זווית:</strong> כל הזוויות חדות</li>
                <li><strong>ישר זווית:</strong> זווית אחת ישרה</li>
                <li><strong>קהה זווית:</strong> זווית אחת קהה</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-yellow-700">מעגלים חוסמים וחסומים</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">מעגל חוסם (Circumcircle):</h4>
              <ul className="list-disc list-inside text-sm space-y-1 mb-2">
                <li>עובר דרך כל קודקודי המשולש</li>
                <li>מרכזו בחיתוך האנכים האמצעיים</li>
                <li>רדיוסו המרחק מהמרכז לכל קודקוד</li>
              </ul>
              <FormulaBox formula="R = \frac{abc}{4S}" />
              <p className="text-xs text-gray-600 mt-1">כאשר a,b,c הם אורכי הצלעות ו-S השטח</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">מעגל חסום (Incircle):</h4>
              <ul className="list-disc list-inside text-sm space-y-1 mb-2">
                <li>נוגע לכל צלעות המשולש מבפנים</li>
                <li>מרכזו בחיתוך חוצי הזוויות</li>
                <li>רדיוסו המרחק מהמרכז לכל צלע</li>
              </ul>
              <FormulaBox formula="r = \frac{S}{s}" />
              <p className="text-xs text-gray-600 mt-1">כאשר S השטח ו-s החצי-היקף</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תרגילים</h2>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Exercise key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">בוחן</h2>
        <Quiz questions={quizQuestions} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">סיכום</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>הוכחות גיאומטריות:</strong> שימוש בכלים אנליטיים למקום הוכחות סינתטיות</li>
            <li><strong>זיהוי מרובעים:</strong> על פי תכונות הצלעות, האלכסונים והזוויות</li>
            <li><strong>מכפלה סקלרית:</strong> כלי חשוב לבדיקת ניצבים וחישוב זוויות</li>
            <li><strong>מעגלים מיוחדים:</strong> חוסם (דרך הקודקודים) וחסום (נוגע לצלעות)</li>
            <li><strong>שיטת עבודה:</strong> תרגום הבעיה הגיאומטרית לחישובים אלגבריים</li>
            <li><strong>יתרונות:</strong> דיוק רב, אפשרות לטיפול בבעיות מורכבות</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat75ComplexGeometry;
