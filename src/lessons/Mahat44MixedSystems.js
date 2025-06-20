import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat44MixedSystems = () => {
  const lessonId = 'mahat-4-4-mixed-systems';
  const nextLessonPath = '/lessons/mahat-5-1-formula-subject';
  
  const exercises = [
    {
      id: 'ex1',
      question: 'פתור את המערכת: y = x ו-y = x²',
      correctAnswer: '(0,0), (1,1)',
      placeholder: 'הזן את התשובה ((x,y), (x,y))',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> בידוד במשוואה הלינארית (y כבר מבודד)</p>
          <p>y = x</p>
          <p><strong>שלב 2:</strong> הצבה במשוואה הריבועית</p>
          <p>x = x²</p>
          <p><strong>שלב 3:</strong> סידור המשוואה הריבועית</p>
          <p>x² - x = 0</p>
          <p>x(x - 1) = 0</p>
          <p><strong>שלב 4:</strong> פתרון המשוואה הריבועית</p>
          <p>x = 0 או x = 1</p>
          <p><strong>שלב 5:</strong> מציאת ערכי y</p>
          <p>עבור x = 0: y = 0 → (0,0)</p>
          <p>עבור x = 1: y = 1 → (1,1)</p>
          <p><strong>התשובה: (0,0), (1,1)</strong></p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'פתור את המערכת: y = 5 ו-y = x² - 4',
      correctAnswer: '(3,5), (-3,5)',
      placeholder: 'הזן את התשובה ((x,y), (x,y))',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> y כבר מבודד במשוואה הלינארית</p>
          <p>y = 5</p>
          <p><strong>שלב 2:</strong> הצבה במשוואה הריבועית</p>
          <p>5 = x² - 4</p>
          <p><strong>שלב 3:</strong> פתרון המשוואה הריבועית</p>
          <p>x² = 9</p>
          <p>x = ±3</p>
          <p><strong>שלב 4:</strong> כתיבת הפתרונות</p>
          <p>עבור x = 3: y = 5 → (3,5)</p>
          <p>עבור x = -3: y = 5 → (-3,5)</p>
          <p><strong>התשובה: (3,5), (-3,5)</strong></p>
          <p><strong>משמעות גיאומטרית:</strong> הישר האופקי y = 5 חותך את הפרבולה בשתי נקודות</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פתור את המערכת: x - y = 3 ו-xy = 10',
      correctAnswer: '(5,2), (-2,-5)',
      placeholder: 'הזן את התשובה ((x,y), (x,y))',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> בידוד y במשוואה הלינארית</p>
          <p>y = x - 3</p>
          <p><strong>שלב 2:</strong> הצבה במשוואה השנייה</p>
          <p>x(x - 3) = 10</p>
          <p><strong>שלב 3:</strong> פתיחה וסידור</p>
          <p>x² - 3x = 10</p>
          <p>x² - 3x - 10 = 0</p>
          <p><strong>שלב 4:</strong> פתרון באמצעות נוסחת השורשים</p>
          <p>a = 1, b = -3, c = -10</p>
          <p>x = (3 ± √(9 + 40)) / 2 = (3 ± √49) / 2 = (3 ± 7) / 2</p>
          <p>x₁ = 5, x₂ = -2</p>
          <p><strong>שלב 5:</strong> מציאת ערכי y</p>
          <p>עבור x = 5: y = 5 - 3 = 2 → (5,2)</p>
          <p>עבור x = -2: y = -2 - 3 = -5 → (-2,-5)</p>
          <p><strong>התשובה: (5,2), (-2,-5)</strong></p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'פתור את המערכת: y = 2x + 5 ו-y = x² + 2x + 6',
      correctAnswer: 'אין פתרון',
      placeholder: 'הזן את התשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> y כבר מבודד במשוואה הלינארית</p>
          <p>y = 2x + 5</p>
          <p><strong>שלב 2:</strong> הצבה במשוואה הריבועית</p>
          <p>2x + 5 = x² + 2x + 6</p>
          <p><strong>שלב 3:</strong> סידור המשוואה</p>
          <p>0 = x² + 2x + 6 - 2x - 5</p>
          <p>x² + 1 = 0</p>
          <p>x² = -1</p>
          <p><strong>שלב 4:</strong> ניתוח</p>
          <p>אין פתרון ממשי מכיוון שאין מספר ממשי שריבועו שלילי</p>
          <p><strong>משמעות גיאומטרית:</strong> הישר והפרבולה לא נפגשים - הישר "מרחף" מעל הפרבולה</p>
          <p><strong>התשובה: אין פתרון</strong></p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'פתור את המערכת: y - x = 1 ו-y = x² - 2x + 3',
      correctAnswer: '(1,2), (2,3)',
      placeholder: 'הזן את התשובה ((x,y), (x,y))',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> בידוד y במשוואה הלינארית</p>
          <p>y = x + 1</p>
          <p><strong>שלב 2:</strong> הצבה במשוואה הריבועית</p>
          <p>x + 1 = x² - 2x + 3</p>
          <p><strong>שלב 3:</strong> סידור המשוואה</p>
          <p>0 = x² - 2x - x + 3 - 1</p>
          <p>x² - 3x + 2 = 0</p>
          <p><strong>שלב 4:</strong> פירוק למכפלת גורמים</p>
          <p>(x - 1)(x - 2) = 0</p>
          <p>x = 1 או x = 2</p>
          <p><strong>שלב 5:</strong> מציאת ערכי y</p>
          <p>עבור x = 1: y = 1 + 1 = 2 → (1,2)</p>
          <p>עבור x = 2: y = 2 + 1 = 3 → (2,3)</p>
          <p><strong>התשובה: (1,2), (2,3)</strong></p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - מערכות מעורבות',
    questions: [
      {
        question: 'מהו השלב הראשון והנכון ביותר לפתרון המערכת: x+y=2 ו- x² + y² = 10?',
        options: ['לחבר את המשוואות', 'להעלות את המשוואה הראשונה בריבוע', 'לבודד את y במשוואה הראשונה ולהציב בשנייה', 'להוציא שורש מהמשוואה השנייה'],
        correctAnswer: 2,
        explanation: 'זוהי שיטת ההצבה, שהיא הדרך הסטנדרטית לפתרון מערכות מסוג זה.'
      },
      {
        question: 'פתרת מערכת של ישר ופרבולה, ובמשוואה הריבועית שקיבלת הדיסקרימיננטה יצאה Δ = 0. מהי המשמעות הגיאומטרית?',
        options: ['הישר חותך את הפרבולה בשתי נקודות', 'הישר לא נוגע בפרבולה כלל', 'הישר הוא ציר הסימטריה של הפרבולה', 'הישר משיק לפרבולה בנקודה אחת'],
        correctAnswer: 3,
        explanation: 'דיסקרימיננטה שווה לאפס משמעותה פתרון יחיד למשוואה הריבועית, כלומר נקודת מפגש אחת בלבד.'
      },
      {
        question: 'במערכת y = 3x - 5 ו-y = ax² + ..., ידוע שהפתרון היחיד הוא x=1. מה ניתן להסיק מכך?',
        options: ['a=0', 'הישר משיק לפרבולה בנקודה שבה x=1', 'יש טעות בשאלה', 'הקודקוד של הפרבולה הוא ב-x=1'],
        correctAnswer: 1,
        explanation: 'פתרון יחיד למערכת של ישר ופרבולה משמעו שהם נפגשים בנקודה אחת בלבד, כלומר הישר משיק לפרבולה.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="מערכות של משוואה ריבועית ולינארית"
      description="פתרון מערכות מעורבות - שילוב של קו ישר ופרבולה"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מבוא לשיעור</h2>
        <p className="text-lg mb-4">
          לאחר שלמדנו לפתור משוואות לינאריות וריבועיות בנפרד, כעת נשלב אותן. מערכת כזו מתארת מצבים 
          כמו חיתוך בין קו ישר לפרבולה. בניגוד למערכת לינארית, כאן יכולים להיות שני פתרונות, פתרון אחד, 
          או אף פתרון. בשיעור זה נלמד את שיטת הפתרון האלגברית שתמיד עובדת.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>להבין את הפתרון: פתרון המערכת הוא זוג סדור (x, y) או זוגות סדורים, המקיימים את שתי המשוואות בו-זמנית</li>
          <li>שליטה בשיטת ההצבה: נבין מדוע הצבה היא השיטה המתאימה ביותר למערכות מסוג זה</li>
          <li>פתרון מלא: נתרגל את כל השלבים, מהצבה ועד למציאת כל זוגות הפתרונות</li>
          <li>הבנה גיאומטרית: נבין את המשמעות החזותית של התוצאות השונות</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">שיטת הפתרון - הצבה בלבד</h3>
          <p className="mb-3">כאשר מערכת משלבת משוואה לינארית וריבועית, שיטת השוואת מקדמים אינה יעילה. הדרך לפתרון היא תמיד שיטת ההצבה.</p>
          
          <div className="bg-white p-3 rounded border-r-4 border-blue-400">
            <p><strong>שלבי העבודה:</strong></p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li><strong>בודד במשוואה הלינארית:</strong> קח את המשוואה הקווית (הפשוטה יותר) ובודד בה את אחד המשתנים (x או y). בדרך כלל קל יותר לבודד את y</li>
              <li><strong>הצב במשוואה הריבועית:</strong> קח את הביטוי שקיבלת והצב אותו במקום המשתנה המתאים במשוואה הריבועית</li>
              <li><strong>פתור את המשוואה הריבועית:</strong> לאחר ההצבה, תקבל משוואה ריבועית עם נעלם אחד בלבד. סדר אותה ופתור אותה (לרוב באמצעות נוסחת השורשים)</li>
              <li><strong>מצא את המשתנה השני:</strong> עבור כל פתרון שמצאת בשלב 3, הצב אותו בחזרה במשוואה המבודדת מהשלב הראשון</li>
              <li><strong>כתוב תשובות סופיות:</strong> כל פתרון הוא זוג סדור (x, y)</li>
            </ol>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">המשמעות הגיאומטרית</h3>
          <p className="mb-3">מערכת של משוואה לינארית וריבועית מייצגת חיתוך בין קו ישר לפרבולה. יכולים להיות שלושה מצבים:</p>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border-r-4 border-green-400">
              <h4 className="font-semibold mb-2">שני פתרונות (Δ &gt; 0):</h4>
              <p>הישר חותך את הפרבולה בשתי נקודות נפרדות. זהו המצב הנפוץ ביותר.</p>
            </div>
            
            <div className="bg-white p-3 rounded border-r-4 border-yellow-400">
              <h4 className="font-semibold mb-2">פתרון אחד (Δ = 0):</h4>
              <p>הישר משיק לפרבולה - נוגע בה בנקודה אחת בלבד. זהו מצב של "נגיעה".</p>
            </div>
            
            <div className="bg-white p-3 rounded border-r-4 border-red-400">
              <h4 className="font-semibold mb-2">אין פתרון (Δ &lt; 0):</h4>
              <p>הישר והפרבולה לא נפגשים כלל. הישר "מרחף" מעל או מתחת לפרבולה.</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">דוגמה מפורטת</h3>
          <p className="mb-3"><strong>פתור את המערכת:</strong> y - x = 1 (לינארית) ו-y = x² - 2x + 3 (ריבועית)</p>
          
          <div className="bg-white p-3 rounded border-r-4 border-yellow-400">
            <p><strong>שלב 1:</strong> בידוד במשוואה הלינארית</p>
            <p>מהמשוואה y - x = 1 נקבל: y = x + 1</p>
            
            <p className="mt-3"><strong>שלב 2:</strong> הצבה במשוואה הריבועית</p>
            <p>נציב y = x + 1 במשוואה y = x² - 2x + 3:</p>
            <p>x + 1 = x² - 2x + 3</p>
            
            <p className="mt-3"><strong>שלב 3:</strong> פתרון המשוואה הריבועית</p>
            <p>0 = x² - 2x - x + 3 - 1</p>
            <p>x² - 3x + 2 = 0</p>
            <p>(x - 1)(x - 2) = 0</p>
            <p>הפתרונות: x₁ = 1, x₂ = 2</p>
            
            <p className="mt-3"><strong>שלב 4:</strong> מציאת ערכי y</p>
            <p>עבור x = 1: y = 1 + 1 = 2 → הפתרון הראשון: (1, 2)</p>
            <p>עבור x = 2: y = 2 + 1 = 3 → הפתרון השני: (2, 3)</p>
            
            <p className="mt-3"><strong>תשובות סופיות:</strong> למערכת יש שני פתרונות: (1, 2) ו-(2, 3)</p>
            <p><strong>משמעות גיאומטרית:</strong> הישר y = x + 1 חותך את הפרבולה y = x² - 2x + 3 בשתי נקודות אלו.</p>
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
            <li>מערכת של משוואה לינארית וריבועית מתארת חיתוך בין ישר לפרבולה</li>
            <li>שיטת ההצבה היא השיטה היחידה היעילה לפתרון מערכות מסוג זה</li>
            <li>יכולים להיות עד שני פתרונות, פתרון אחד, או אין פתרון כלל</li>
            <li>הדיסקרימיננטה של המשוואה הריבועית הסופית קובעת את מספר הפתרונות</li>
            <li>תמיד יש לבדוק את הפתרונות בשתי המשוואות המקוריות</li>
            <li>המשמעות הגיאומטרית עוזרת להבין את התוצאות האלגבריות</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat44MixedSystems;
