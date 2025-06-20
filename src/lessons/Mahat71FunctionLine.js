import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat71FunctionLine = () => {
  const lessonId = 'mahat-7-1-function-line';
  const nextLessonPath = '/lessons/mahat-7-2-slope-parallel';

  const exercises = [
    {
      id: 'ex1',
      question: 'האם הנקודה (2, -1) נמצאת על הישר y = -3x + 5?',
      correctAnswer: 'כן',
      placeholder: 'כן/לא',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נציב את שיעורי הנקודה (2, -1) במשוואת הישר:</p>
          <FormulaBox>{"y = -3x + 5"}</FormulaBox>
          <p>נציב x = 2:</p>
          <FormulaBox>{"y = -3(2) + 5 = -6 + 5 = -1"}</FormulaBox>
          <p>קיבלנו y = -1, וזה בדיוק שיעור ה-y של הנקודה.</p>
          <p><strong>התשובה: כן, הנקודה נמצאת על הישר.</strong></p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מצאו את נקודות החיתוך של הישר y = -4x + 8 עם הצירים.',
      correctAnswer: 'חיתוך עם Y: (0,8), חיתוך עם X: (2,0)',
      placeholder: 'הכניסו את הנקודות',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>חיתוך עם ציר Y:</strong> נציב x = 0</p>
          <FormulaBox>{"y = -4(0) + 8 = 8"}</FormulaBox>
          <p>נקודת החיתוך עם ציר Y: (0, 8)</p>
          
          <p><strong>חיתוך עם ציר X:</strong> נציב y = 0</p>
          <FormulaBox>{"0 = -4x + 8"}</FormulaBox>
          <FormulaBox>{"4x = 8"}</FormulaBox>
          <FormulaBox>{"x = 2"}</FormulaBox>
          <p>נקודת החיתוך עם ציר X: (2, 0)</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'שרטטו את הישר y = 2x - 4 באמצעות שיטת נקודות החיתוך.',
      correctAnswer: 'נקודות החיתוך: (0,-4) ו-(2,0)',
      placeholder: 'רשמו את נקודות החיתוך',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>חיתוך עם ציר Y:</strong> x = 0</p>
          <FormulaBox>{"y = 2(0) - 4 = -4"}</FormulaBox>
          <p>נקודה: (0, -4)</p>
          
          <p><strong>חיתוך עם ציר X:</strong> y = 0</p>
          <FormulaBox>{"0 = 2x - 4"}</FormulaBox>
          <FormulaBox>{"2x = 4"}</FormulaBox>
          <FormulaBox>{"x = 2"}</FormulaBox>
          <p>נקודה: (2, 0)</p>
          
          <p>מסמנים את שתי הנקודות ומעבירים ביניהן קו ישר.</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'איזו מהנקודות הבאות נמצאת על הישר y = 1 - 3x?',
      options: [
        '(1, -3)',
        '(-2, 7)',
        '(0, 0)',
        '(2, 5)'
      ],
      correctAnswer: '(-2, 7)',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <p>נבדוק כל נקודה:</p>
          <p>עבור (-2, 7): y = 1 - 3(-2) = 1 + 6 = 7 ✓</p>
          <p>זוהי הנקודה היחידה שמקיימת את המשוואה.</p>
        </div>
      )
    }
  ];

  return (
    <LessonLayout
      lessonId={lessonId}
      lessonTitle="MAHAT - נושא 7.1: מבוא לפונקציות והקו הישר"
      nextLessonPath={nextLessonPath}
    >
      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">מבוא לפונקציות והקו הישר</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">מבוא לשיעור</h3>
          <p className="text-gray-700 leading-relaxed">
            הנדסה אנליטית היא השילוב המופלא בין אלגברה לגיאומטריה. היא מאפשרת לנו לתאר צורות גיאומטריות 
            (כמו קווים, מעגלים ופרבולות) באמצעות משוואות, ולנתח אותן בעזרת כלים אלגבריים. בשיעור זה נתחיל 
            מהצורה הבסיסית ביותר - הקו הישר. נבין מהי פונקציה, כיצד משוואת הישר מתארת אותה, ואיך לשרטט 
            אותה במערכת הצירים.
          </p>
        </div>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>הבנת מושג הפונקציה:</strong> נבין שפונקציה היא "מכונה" שמקבלת קלט (x) ומוציאה פלט (y) לפי כלל קבוע</li>
            <li><strong>זיהוי פרמטרים:</strong> נכיר את הצורה הכללית של הקו הישר y = ax + b ונזהה את שני הפרמטרים הקבועים: השיפוע (a) ונקודת החיתוך (b)</li>
            <li><strong>מציאת נקודות חיתוך עם הצירים:</strong> נלמד את השיטה האלגברית למציאת הנקודות החשובות שבהן הישר פוגש את צירי ה-X וה-Y</li>
            <li><strong>שרטוט קו ישר:</strong> נלמד כיצד לשרטט ישר במערכת צירים באמצעות טבלת ערכים או בעזרת נקודות החיתוך</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: מושג הפונקציה</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">הסבר</h4>
            <p className="text-gray-700 mb-3">
              חשבו על פונקציה כמו על מכונת שתייה: אתם מכניסים קלט (כסף) והמכונה מוציאה פלט (פחית שתייה) 
              לפי כלל קבוע. במתמטיקה, הקלט הוא בדרך כלל משתנה בשם x, והפלט הוא משתנה בשם y. הקשר ביניהם מוגדר על ידי משוואה.
            </p>
            <p className="text-gray-700">
              פונקציה קווית היא הפונקציה הפשוטה ביותר, שבה הכלל הוא קבוע ויוצר קו ישר. לדוגמה, אם עלות שיחת 
              טלפון היא 2 שקלים לדקה, אז העלות (y) היא פונקציה של מספר הדקות (x), והכלל הוא y = 2x.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: תיאור גרפי ואלגברי של קו ישר וזיהוי פרמטרים</h3>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">הסבר</h4>
            <p className="text-gray-700 mb-3">
              כל קו ישר במישור (שאינו אנכי) ניתן לתאר באמצעות המשוואה:
            </p>
            <FormulaBox>{"y = ax + b"}</FormulaBox>
            <p className="text-gray-700 mb-3">זוהי ההצגה המפורשת של הישר.</p>
            
            <div className="space-y-3">
              <div className="border-r-4 border-blue-300 pr-4">
                <p><strong>הפרמטר a (המקדם של x):</strong> נקרא שיפוע הישר. הוא מתאר את "התלילות" של הישר.</p>
              </div>
              
              <div className="border-r-4 border-green-300 pr-4">
                <p><strong>הפרמטר b (האיבר החופשי):</strong> נקרא נקודת החיתוך עם ציר ה-y. זהו הערך של y כאשר x=0.</p>
              </div>
            </div>
            
            <h5 className="font-semibold mt-4 mb-2">זיהוי נקודות על הישר:</h5>
            <p className="text-gray-700">
              נקודה (x₀, y₀) נמצאת על הישר אם כאשר מציבים את שיעוריה במשוואת הישר, מקבלים פסוק אמת.
            </p>
            
            <div className="bg-white p-3 rounded border mt-3">
              <p><strong>דוגמה:</strong> האם הנקודה (3,7) נמצאת על הישר y = 2x + 1?</p>
              <p>נציב x=3 ו-y=7: 7 = 2*(3) + 1 → 7 = 6 + 1 → 7 = 7.</p>
              <p>קיבלנו פסוק אמת, לכן הנקודה נמצאת על הישר.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 3: נקודות חיתוך של הישר עם הצירים</h3>
          
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">הסבר</h4>
            <p className="text-gray-700 mb-3">אלו שתי הנקודות החשובות ביותר לשרטוט מהיר של ישר.</p>
            
            <div className="space-y-4">
              <div className="border-r-4 border-blue-300 pr-4">
                <h5 className="font-semibold text-blue-700">למציאת נקודת החיתוך עם ציר ה-Y:</h5>
                <p>כל הנקודות על ציר ה-Y מקיימות x=0.</p>
                <p>לכן, פשוט נציב x=0 במשוואת הישר.</p>
                <p><strong>דוגמה:</strong> עבור y = 3x - 6, נציב x=0 → y = -6. נקודת החיתוך היא (0, -6).</p>
              </div>
              
              <div className="border-r-4 border-green-300 pr-4">
                <h5 className="font-semibold text-green-700">למציאת נקודת החיתוך עם ציר ה-X:</h5>
                <p>כל הנקודות על ציר ה-X מקיימות y=0.</p>
                <p>לכן, פשוט נציב y=0 במשוואת הישר ונפתור את המשוואה.</p>
                <p><strong>דוגמה:</strong> עבור y = 3x - 6, נציב y=0 → 0 = 3x - 6 → x=2. נקודת החיתוך היא (2, 0).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 4: שרטוט קו ישר</h3>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">הסבר</h4>
            
            <div className="space-y-4">
              <div className="border-r-4 border-purple-300 pr-4">
                <h5 className="font-semibold text-purple-700">שיטת טבלת הערכים:</h5>
                <p>בוחרים כמה ערכי x נוחים, מציבים במשוואה ומוצאים את ה-y המתאים. מסמנים את הנקודות ומעבירים קו.</p>
              </div>
              
              <div className="border-r-4 border-orange-300 pr-4">
                <h5 className="font-semibold text-orange-700">שיטת נקודות החיתוך:</h5>
                <p>מוצאים את שתי נקודות החיתוך עם הצירים, מסמנים אותן ומעבירים ביניהן קו. 
                זוהי דרך מהירה ויעילה מאוד.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">תרגול מעשי</h3>
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <Exercise key={exercise.id} {...exercise} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">נקודות מפתח לזכירה:</h4>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>פונקציה קווית:</strong> y = ax + b, כאשר a הוא השיפוע ו-b הוא נקודת החיתוך עם ציר Y</li>
              <li><strong>זיהוי נקודות על הישר:</strong> הצבה במשוואה צריכה לתת פסוק אמת</li>
              <li><strong>חיתוך עם ציר Y:</strong> הציבו x = 0</li>
              <li><strong>חיתוך עם ציר X:</strong> הציבו y = 0 ופתרו</li>
              <li><strong>שרטוט מהיר:</strong> השתמשו בשתי נקודות החיתוך</li>
            </ul>
          </div>
        </section>

        <Quiz 
          questions={quizQuestions} 
          lessonId={lessonId}
          title="בחן את עצמך - מבוא לפונקציות והקו הישר"
        />
      </div>
    </LessonLayout>
  );
};

export default Mahat71FunctionLine;
