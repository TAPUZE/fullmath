import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat42LinearSystems = () => {
  const lessonId = 'mahat-4-2-linear-systems';
  const nextLessonPath = '/lessons/mahat-4-3-quadratic-equations';
  
  const exercises = [
    {
      id: 'ex1',
      question: 'פתור באמצעות הצבה: y = 2x ו-3x + y = 10',
      correctAnswer: 'x=2, y=4',
      placeholder: 'הזן את התשובה (x=..., y=...)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> y כבר מבודד במשוואה הראשונה</p>
          <p><strong>שלב 2:</strong> נציב y = 2x במשוואה השנייה</p>
          <p>3x + 2x = 10</p>
          <p>5x = 10</p>
          <p>x = 2</p>
          <p><strong>שלב 3:</strong> נציב x = 2 במשוואה הראשונה</p>
          <p>y = 2(2) = 4</p>
          <p><strong>בדיקה:</strong> 3(2) + 4 = 6 + 4 = 10 ✓</p>
          <p><strong>התשובה: x = 2, y = 4</strong></p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'פתור באמצעות השוואת מקדמים: x + 2y = 7 ו-x - y = 1',
      correctAnswer: 'x=3, y=2',
      placeholder: 'הזן את התשובה (x=..., y=...)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> המקדמים של x הם 1 ו-1, נצטרך להפוך אחד מהם לשלילי</p>
          <p>נכפיל את המשוואה השנייה ב-(-1): -x + y = -1</p>
          <p><strong>שלב 2:</strong> נחבר את שתי המשוואות</p>
          <p>(x + 2y) + (-x + y) = 7 + (-1)</p>
          <p>3y = 6</p>
          <p>y = 2</p>
          <p><strong>שלב 3:</strong> נציב y = 2 במשוואה הראשונה</p>
          <p>x + 2(2) = 7</p>
          <p>x + 4 = 7</p>
          <p>x = 3</p>
          <p><strong>התשובה: x = 3, y = 2</strong></p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פתור באיזו שיטה שתרצה: 2x + 3y = 1 ו-3x + 5y = 3',
      correctAnswer: 'x=-4, y=3',
      placeholder: 'הזן את התשובה (x=..., y=...)',
      solution: (
        <div>
          <p><strong>פתרון בשיטת השוואת מקדמים:</strong></p>
          <p><strong>שלב 1:</strong> נכפיל את המשוואה הראשונה ב-3 ואת השנייה ב-(-2)</p>
          <p>6x + 9y = 3</p>
          <p>-6x - 10y = -6</p>
          <p><strong>שלב 2:</strong> נחבר</p>
          <p>-y = -3</p>
          <p>y = 3</p>
          <p><strong>שלב 3:</strong> נציב y = 3 במשוואה הראשונה</p>
          <p>2x + 3(3) = 1</p>
          <p>2x + 9 = 1</p>
          <p>2x = -8</p>
          <p>x = -4</p>
          <p><strong>התשובה: x = -4, y = 3</strong></p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'פתור: x = 5y + 1 ו-2x - 10y = 2',
      correctAnswer: 'אינסוף פתרונות',
      placeholder: 'הזן את התשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> נציב x = 5y + 1 במשוואה השנייה</p>
          <p>2(5y + 1) - 10y = 2</p>
          <p>10y + 2 - 10y = 2</p>
          <p>2 = 2</p>
          <p><strong>ניתוח:</strong> קיבלנו פסוק אמת (2 = 2)</p>
          <p>זה אומר שכל מספר שנציב ב-y יקיים את המערכת</p>
          <p><strong>התשובה: אינסוף פתרונות (זהות)</strong></p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'נתונה המערכת: 3x - y = 7 ו-6x - 2y = 10. מה הפתרון?',
      correctAnswer: 'אין פתרון',
      placeholder: 'הזן את התשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1:</strong> נכפיל את המשוואה הראשונה ב-2</p>
          <p>6x - 2y = 14</p>
          <p><strong>שלב 2:</strong> נחסר מהמשוואה השנייה</p>
          <p>(6x - 2y) - (6x - 2y) = 10 - 14</p>
          <p>0 = -4</p>
          <p><strong>ניתוח:</strong> קיבלנו פסוק שקר (0 ≠ -4)</p>
          <p>המשמעות הגיאומטרית: שני קווים מקבילים שלא נפגשים</p>
          <p><strong>התשובה: אין פתרון</strong></p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - מערכות משוואות',
    questions: [
      {
        question: 'במערכת המשוואות x = y + 1 ו-2x + 2y = 6, מהי השיטה היעילה ביותר להתחיל את הפתרון?',
        options: ['השוואת מקדמים', 'הצבה', 'לחלק את המשוואה השנייה ב-2', 'לצייר את הגרפים'],
        correctAnswer: 1,
        explanation: 'המשתנה x כבר מבודד במשוואה הראשונה, מה שהופך את ההצבה לצעד המיידי והפשוט ביותר.'
      },
      {
        question: 'פתור את מערכת המשוואות: a + b = 8 ו-a - b = 2.',
        options: ['a=3, b=5', 'a=5, b=3', 'a=6, b=2', 'a=4, b=4'],
        correctAnswer: 1,
        explanation: 'חיבור שתי המשוואות נותן 2a = 10, כלומר a=5. הצבה חזרה נותנת b=3.'
      },
      {
        question: 'פתרת מערכת משוואות והגעת לפסוק 0 = 5. מה המשמעות?',
        options: ['טעות בחישוב', 'יש אינסוף פתרונות', 'הפתרון הוא (0,5)', 'למערכת אין פתרון'],
        correctAnswer: 3,
        explanation: 'זהו פסוק שקר. המשמעות הגיאומטרית היא שהמשוואות מייצגות שני קווים ישרים מקבילים שלעולם לא נפגשים.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="מערכות של שתי משוואות עם שני נעלמים"
      description="פתרון מערכת משוואות לינאריות בשיטת ההצבה ושיטת השוואת מקדמים"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מבוא לשיעור</h2>
        <p className="text-lg mb-4">
          לפעמים, כדי לתאר מצב מסוים, משוואה אחת לא מספיקה. אנו נזקקים לשתי משוואות (או יותר) 
          עם שני נעלמים (או יותר). למערכת כזו קוראים "מערכת משוואות". בשיעור זה נלמד שתי 
          שיטות אלגבריות יעילות לפתרון מערכת של שתי משוואות לינאריות בשני נעלמים (x ו-y).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>הבנת הפתרון: נבין שפתרון של מערכת הוא זוג סדור של מספרים (x, y) שמקיים את שתי המשוואות בו-זמנית</li>
          <li>שליטה בשיטת ההצבה: נלמד כיצד לבודד משתנה ולהציב אותו במשוואה השנייה</li>
          <li>שליטה בשיטת השוואת מקדמים (חיסור/חיבור משוואות): נלמד כיצד "להעלים" את אחד המשתנים</li>
          <li>ביצוע בדיקה: נלמד כיצד לבדוק את הפתרון בשתי המשוואות המקוריות</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">שיטת ההצבה</h3>
          <p className="mb-3">שיטה זו יעילה במיוחד כאשר באחת המשוואות, אחד המשתנים כבר מבודד או קל לבודד אותו (כלומר, המקדם שלו הוא 1 או -1).</p>
          <div className="bg-white p-3 rounded border-r-4 border-blue-400">
            <p><strong>שלבי העבודה:</strong></p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li><strong>בודד:</strong> בחר אחת מהמשוואות ובודד בה את אחד המשתנים (x או y)</li>
              <li><strong>הצב:</strong> קח את הביטוי שקיבלת עבור המשתנה המבודד, והצב אותו במקום אותו משתנה במשוואה השנייה</li>
              <li><strong>פתור:</strong> כעת יש לך משוואה אחת עם נעלם אחד. פתור אותה</li>
              <li><strong>הצב חזרה:</strong> קח את הפתרון שמצאת, והצב אותו באחת המשוואות המקוריות כדי למצוא את ערך המשתנה השני</li>
              <li><strong>כתוב תשובה סופית:</strong> התשובה היא זוג סדור (x, y)</li>
            </ol>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">שיטת השוואת מקדמים (חיסור/חיבור משוואות)</h3>
          <p className="mb-3">שיטה זו יעילה כאשר המשתנים מסודרים באותה צורה בשתי המשוואות. המטרה היא לגרום לכך שהמקדם של אחד המשתנים יהיה מספר נגדי בשתי המשוואות, ואז לחבר את המשוואות.</p>
          <div className="bg-white p-3 rounded border-r-4 border-green-400">
            <p><strong>שלבי העבודה:</strong></p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li><strong>סדר:</strong> ודא שהמשוואות מסודרות באותו אופן (למשל, Ax + By = C)</li>
              <li><strong>הכפל (אם צריך):</strong> הכפל משוואה אחת (או את שתיהן) במספר כלשהו כך שהמקדם של x (או y) יהיה נגדי בשתיהן</li>
              <li><strong>חבר/חסר:</strong> חבר את שתי המשוואות. המשתנה עם המקדמים הנגדיים יתבטל</li>
              <li><strong>פתור:</strong> פתור את המשוואה עם הנעלם האחד שנותר</li>
              <li><strong>הצב חזרה:</strong> הצב את הפתרון שמצאת באחת המשוואות המקוריות כדי למצוא את המשתנה השני</li>
            </ol>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">מקרים מיוחדים</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>אינסוף פתרונות:</strong> אם בסוף הפתרון מתקבל פסוק אמת (כמו 0 = 0), למערכת יש אינסוף פתרונות</li>
            <li><strong>אין פתרון:</strong> אם בסוף הפתרון מתקבל פסוק שקר (כמו 0 = 5), למערכת אין פתרון</li>
            <li><strong>פתרון יחיד:</strong> אם מתקבל זוג ערכים (x, y), זהו הפתרון היחיד למערכת</li>
          </ul>
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
            <li>פתרון מערכת משוואות הוא זוג סדור (x, y) שמקיים את שתי המשוואות בו-זמנית</li>
            <li>שיטת ההצבה יעילה כאשר אחד המשתנים מבודד או קל לבידוד</li>
            <li>שיטת השוואת מקדמים יעילה כאשר המשתנים מסודרים בצורה דומה</li>
            <li>תמיד יש לבדוק את הפתרון בשתי המשוואות המקוריות</li>
            <li>יכולים להיות שלושה מקרים: פתרון יחיד, אינסוף פתרונות, או אין פתרון</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat42LinearSystems;
