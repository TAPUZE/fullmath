import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat51FormulaSubject = () => {
  const lessonId = 'mahat-5-1-formula-subject';
  const nextLessonPath = '/lessons/mahat-6-1-plane-shapes';
  
  const exercises = [
    {
      id: 'ex1',
      question: 'מהנוסחה להיקף מלבן P = 2L + 2W, בדד את W.',
      correctAnswer: 'W = (P - 2L) / 2',
      placeholder: 'הזן את הביטוי עבור W',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחה מקורית:</strong> P = 2L + 2W</p>
          <p><strong>שלב 1:</strong> נחסר 2L משני האגפים</p>
          <p>P - 2L = 2W</p>
          <p><strong>שלב 2:</strong> נחלק את שני האגפים ב-2</p>
          <p>(P - 2L) / 2 = W</p>
          <p><strong>תשובה סופית:</strong> W = (P - 2L) / 2</p>
          <p><strong>ניתן לכתוב גם:</strong> W = P/2 - L</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מהנוסחה לאנרגיה קינטית E = (mv²)/2, בדד את v.',
      correctAnswer: 'v = √(2E/m)',
      placeholder: 'הזן את הביטוי עבור v',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחה מקורית:</strong> E = (mv²)/2</p>
          <p><strong>שלב 1:</strong> נכפול את שני האגפים ב-2</p>
          <p>2E = mv²</p>
          <p><strong>שלב 2:</strong> נחלק את שני האגפים ב-m</p>
          <p>2E/m = v²</p>
          <p><strong>שלב 3:</strong> נוציא שורש ריבועי משני האגפים</p>
          <p>v = √(2E/m)</p>
          <p><strong>הערה:</strong> בהקשר פיזיקלי, בדרך כלל לוקחים רק את התשובה החיובית</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'בנוסחה להמרת טמפרטורה F = 1.8C + 32, בדד את C.',
      correctAnswer: 'C = (F - 32) / 1.8',
      placeholder: 'הזן את הביטוי עבור C',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחה מקורית:</strong> F = 1.8C + 32</p>
          <p><strong>שלב 1:</strong> נחסר 32 משני האגפים</p>
          <p>F - 32 = 1.8C</p>
          <p><strong>שלב 2:</strong> נחלק את שני האגפים ב-1.8</p>
          <p>(F - 32) / 1.8 = C</p>
          <p><strong>תשובה סופית:</strong> C = (F - 32) / 1.8</p>
          <p><strong>בדיקה:</strong> אם F = 32, אז C = (32-32)/1.8 = 0 (נקודת הקפאה של מים)</p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'בנוסחה x = y² - z, בדד את y.',
      correctAnswer: 'y = √(x + z)',
      placeholder: 'הזן את הביטוי עבור y',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחה מקורית:</strong> x = y² - z</p>
          <p><strong>שלב 1:</strong> נחבר z לשני האגפים</p>
          <p>x + z = y²</p>
          <p><strong>שלב 2:</strong> נוציא שורש ריבועי משני האגפים</p>
          <p>y = ±√(x + z)</p>
          <p><strong>הערה:</strong> בהקשר מתמטי כללי, יש שני פתרונות אפשריים</p>
          <p><strong>בהקשר פיזיקלי:</strong> לעיתים לוקחים רק את התשובה החיובית</p>
          <p><strong>תשובה:</strong> y = √(x + z) (או ±√(x + z) לפי ההקשר)</p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'נתונה הנוסחה a = (b+c)/d. אם a=5, b=7, d=2, מהו ערכו של c?',
      correctAnswer: 'c = 3',
      placeholder: 'הזן את ערך c',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחה מקורית:</strong> a = (b+c)/d</p>
          <p><strong>הצבת הערכים הידועים:</strong> 5 = (7+c)/2</p>
          <p><strong>שלב 1:</strong> נכפול את שני האגפים ב-2</p>
          <p>10 = 7 + c</p>
          <p><strong>שלב 2:</strong> נחסר 7 משני האגפים</p>
          <p>3 = c</p>
          <p><strong>תשובה:</strong> c = 3</p>
          <p><strong>בדיקה:</strong> a = (7+3)/2 = 10/2 = 5 ✓</p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - שינוי נושא הנוסחה',
    questions: [
      {
        question: 'בנוסחה להמרת טמפרטורה F = 1.8C + 32, מהו הביטוי הנכון עבור C?',
        options: ['C = (F - 32) / 1.8', 'C = F / 1.8 - 32', 'C = (F + 32) / 1.8', 'C = 1.8F - 32'],
        correctAnswer: 0,
        explanation: 'ראשית מחסרים 32 משני האגפים, ואז מחלקים ב-1.8.'
      },
      {
        question: 'בנוסחה x = y² - z, מהו הביטוי הנכון עבור y?',
        options: ['y = √(x) + z', 'y = x+z', 'y = √(x-z)', 'y = √(x+z)'],
        correctAnswer: 3,
        explanation: 'ראשית מחברים z לשני האגפים (x+z = y²), ואז מוציאים שורש.'
      },
      {
        question: 'במעגל חשמלי, R_total = R₁ + R₂. אם R_total = 100 ו-R₁ = 45, מהי הפעולה הנדרשת כדי למצוא את R₂?',
        options: ['חיבור', 'חיסור', 'כפל', 'חילוק'],
        correctAnswer: 1,
        explanation: 'יש לבודד את R₂ על ידי חיסור R₁ משני האגפים: R₂ = R_total - R₁.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="שינוי נושא הנוסחה"
      description="בידוד משתנים בנוסחאות והצבת ערכים מספריים"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מבוא לשיעור</h2>
        <p className="text-lg mb-4">
          במדעים ובהנדסה, אנו משתמשים כל הזמן בנוסחאות כדי לתאר קשרים פיזיקליים. נוסחאות כמו 
          F=ma (החוק השני של ניוטון) או P=VI (הספק חשמלי) הן כלים בסיסיים. לעיתים קרובות, הנוסחה 
          נתונה לנו בצורה אחת, אך אנו צריכים למצוא את הערך של משתנה אחר. "שינוי נושא הנוסחה" הוא 
          התהליך האלגברי של בידוד משתנה אחר בנוסחה. זוהי למעשה אותה טכניקה של פתרון משוואות, 
          רק עם יותר אותיות.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>הבנת המטרה: נבין מדוע וכיצד אנו צריכים לסדר מחדש נוסחאות</li>
          <li>יישום טכניקות אלגבריות: נשתמש בכלים שלמדנו (ביצוע פעולות זהות על שני אגפים) כדי לבודד כל משתנה רצוי</li>
          <li>הצבת מספרים בנוסחאות: לאחר בידוד המשתנה, נתרגל הצבת ערכים מספריים כדי לחשב את התוצאה</li>
          <li>חיבור לשאלות מילוליות: נראה כיצד מיומנות זו חיונית לפתרון בעיות מעשיות</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">העיקרון המנחה</h3>
          <p className="mb-3">
            העיקרון זהה לפתרון משוואה עם נעלם אחד. ההבדל היחיד הוא שכעת יש לנו מספר נעלמים. 
            אנו מתייחסים למשתנה שאותו אנו רוצים לבודד כאל "ה-x שלנו", ולכל שאר האותיות והמשתנים 
            אנו מתייחסים כאילו היו מספרים.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">שלבי עבודה</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>זהה את המשתנה הרצוי:</strong> קרא את השאלה והבן איזה משתנה צריך לבודד</li>
            <li><strong>השתמש בפעולות הפוכות:</strong>
              <ul className="list-disc list-inside mt-2 mr-4 space-y-1">
                <li>אם המשתנה מחובר למשהו, חסר את הדבר משני האגפים</li>
                <li>אם משהו מחוסר מהמשתנה, חבר אותו לשני האגפים</li>
                <li>אם המשתנה כפול במשהו, חלק את שני האגפים באותו משהו</li>
                <li>אם המשתנה מחולק במשהו, הכפל את שני האגפים באותו משהו</li>
                <li>אם המשתנה נמצא תחת שורש, העלה בריבוע את שני האגפים</li>
                <li>אם המשתנה מועלה בריבוע, הוצא שורש משני האגפים</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">דוגמאות מפורטות</h3>
          
          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <h4 className="font-semibold mb-2">דוגמה 1: נוסחת המהירות</h4>
            <p><strong>נתונה הנוסחה:</strong> v = v₀ + at. בודד את t.</p>
            <p><strong>פתרון:</strong></p>
            <p>• נתייחס ל-t כנעלם</p>
            <p>• נחסר v₀ משני האגפים: v - v₀ = at</p>
            <p>• נחלק את שני האגפים ב-a: t = (v - v₀) / a</p>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <h4 className="font-semibold mb-2">דוגמה 2: נוסחת השטח של טרפז</h4>
            <p><strong>נתונה הנוסחה:</strong> A = (a+b)h / 2. בודד את h.</p>
            <p><strong>פתרון:</strong></p>
            <p>• נכפיל את שני האגפים ב-2: 2A = (a+b)h</p>
            <p>• נחלק את שני האגפים ב-(a+b): h = 2A / (a+b)</p>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-yellow-400">
            <h4 className="font-semibold mb-2">דוגמה 3: משפט פיתגורס</h4>
            <p><strong>נתונה הנוסחה:</strong> a² + b² = c². בודד את b.</p>
            <p><strong>פתרון:</strong></p>
            <p>• נחסר a² משני האגפים: b² = c² - a²</p>
            <p>• נוציא שורש ריבועי: b = √(c² - a²)</p>
            <p>(בהקשר גיאומטרי, בדרך כלל לוקחים רק את התשובה החיובית)</p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">הצבת מספרים בנוסחאות</h3>
          <p className="mb-3">
            לאחר שבודדנו את המשתנה הרצוי, או אפילו לפני כן, אנו יכולים להציב ערכים מספריים 
            ידועים כדי למצוא את ערכו של משתנה לא ידוע.
          </p>
          
          <div className="bg-white p-3 rounded border-r-4 border-purple-400">
            <p><strong>דוגמה:</strong> בנוסחה F=ma, נתון F=50 ו-a=10. מצא את m.</p>
            <p><strong>דרך א' - בידוד ואז הצבה:</strong></p>
            <p>• בודד את m: m = F/a</p>
            <p>• הצב את הערכים: m = 50 / 10 = 5</p>
            <p><strong>דרך ב' - הצבה ואז פתרון:</strong></p>
            <p>• הצב את הערכים בנוסחה המקורית: 50 = m × 10</p>
            <p>• פתור את המשוואה: m = 5</p>
            <p><strong>שתי הדרכים נכונות ונותנות אותה תוצאה!</strong></p>
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
            <li>שינוי נושא הנוסחה הוא בעצם פתרון משוואה עם כמה משתנים - אנו מבודדים את המשתנה הרצוי</li>
            <li>השתמשו בפעולות הפוכות: אם משתנה מחובר - חסרו, אם כפול - חלקו, אם בריבוע - הוציאו שורש</li>
            <li>ניתן להציב ערכים לפני או אחרי הבידוד - שתי הדרכים יעילות</li>
            <li>מיומנות זו חיונית לפתרון בעיות מעשיות במדעים ובהנדסה</li>
            <li>תמיד בדקו את התשובה על ידי הצבה חזרה בנוסחה המקורית</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat51FormulaSubject;
