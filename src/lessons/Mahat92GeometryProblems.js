import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat92GeometryProblems = () => {
  const lessonId = 'mahat-9-2-geometry-problems';
  const nextLessonPath = '/lessons/mahat-10-1-trig-basics';
  
  const exercises = [
    {
      id: 'ex1',
      question: 'אורכו של מלבן גדול ב-5 ס"מ מרוחבו. היקף המלבן הוא 50 ס"מ. מצאו את מידות המלבן.',
      correctAnswer: 'רוחב: 10 ס"מ, אורך: 15 ס"מ',
      placeholder: 'הזן את מידות המלבן',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - הגדרת משתנים:</strong></p>
          <p>נגדיר: x = רוחב המלבן</p>
          <p>מכאן: x + 5 = אורך המלבן</p>
          <p><strong>שלב 2 - בניית משוואה (לפי נוסחת ההיקף):</strong></p>
          <p>P = 2(אורך + רוחב)</p>
          <p>50 = 2[(x + 5) + x]</p>
          <p>50 = 2(2x + 5)</p>
          <p><strong>שלב 3 - פתרון:</strong></p>
          <p>50 = 4x + 10</p>
          <p>40 = 4x</p>
          <p>x = 10</p>
          <p><strong>שלב 4 - מציאת המידות ובדיקה:</strong></p>
          <p>רוחב = 10 ס"מ</p>
          <p>אורך = 10 + 5 = 15 ס"מ</p>
          <p>בדיקת היקף: 2(15 + 10) = 2(25) = 50 ✓</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'אורכו של מלבן גדול ב-3 מטר מרוחבו. שטחו 40 מ"ר. מצאו את מידותיו.',
      correctAnswer: 'רוחב: 5 מ", אורך: 8 מ"',
      placeholder: 'הזן את מידות המלבן',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - הגדרת משתנים:</strong></p>
          <p>נגדיר: x = רוחב המלבן</p>
          <p>מכאן: x + 3 = אורך המלבן</p>
          <p><strong>שלב 2 - בניית משוואה (לפי נוסחת השטח):</strong></p>
          <p>S = אורך × רוחב</p>
          <p>40 = (x + 3) × x</p>
          <p>40 = x² + 3x</p>
          <p><strong>שלב 3 - פתרון (משוואה ריבועית):</strong></p>
          <p>x² + 3x - 40 = 0</p>
          <p>נפתור עם נוסחת השורשים או פירוק:</p>
          <p>(x + 8)(x - 5) = 0</p>
          <p>הפתרונות: x₁ = 5, x₂ = -8</p>
          <p><strong>שלב 4 - בדיקת הגיון ותשובה:</strong></p>
          <p>x = -8 נפסל (רוחב לא יכול להיות שלילי)</p>
          <p>רוחב = 5 מ'</p>
          <p>אורך = 5 + 3 = 8 מ'</p>
          <p>בדיקת שטח: 5 × 8 = 40 ✓</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'היקפו של ריבוע הוא 36 ס"מ. מה שטחו?',
      correctAnswer: '81 ס"ר',
      placeholder: 'הזן את השטח בס"ר',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - מציאת אורך הצלע:</strong></p>
          <p>היקף ריבוע = 4 × צלע</p>
          <p>36 = 4 × צלע</p>
          <p>צלע = 36 ÷ 4 = 9 ס"מ</p>
          <p><strong>שלב 2 - חישוב השטח:</strong></p>
          <p>שטח ריבוע = צלע²</p>
          <p>שטח = 9² = 81 ס"ר</p>
          <p><strong>תשובה:</strong> שטח הריבוע הוא 81 ס"ר</p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'במשולש שווה שוקיים, אורך השוק גדול פי 2 מאורך הבסיס. היקף המשולש הוא 50 ס"מ. מצא את אורכי צלעות המשולש.',
      correctAnswer: 'בסיס: 10 ס"מ, שוקיים: 20 ס"מ',
      placeholder: 'הזן את אורכי הצלעות',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - הגדרת משתנים:</strong></p>
          <p>נגדיר: x = אורך הבסיס</p>
          <p>מכאן: 2x = אורך כל שוק</p>
          <p><strong>שלב 2 - בניית משוואה:</strong></p>
          <p>היקף = בסיס + שוק + שוק</p>
          <p>50 = x + 2x + 2x</p>
          <p>50 = 5x</p>
          <p><strong>שלב 3 - פתרון:</strong></p>
          <p>x = 50 ÷ 5 = 10</p>
          <p><strong>שלב 4 - מציאת כל הצלעות:</strong></p>
          <p>בסיס = 10 ס"מ</p>
          <p>כל שוק = 2 × 10 = 20 ס"מ</p>
          <p><strong>בדיקה:</strong> 10 + 20 + 20 = 50 ✓</p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'מגרש מלבני מוקף גדר שאורכה 100 מטר. שטח המגרש הוא 600 מ"ר. מצא את אורך ורוחב המגרש.',
      correctAnswer: 'אורך: 30 מ", רוחב: 20 מ"',
      placeholder: 'הזן את מידות המגרש',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - הגדרת משתנים:</strong></p>
          <p>נגדיר: x = רוחב המגרש, y = אורך המגרש</p>
          <p><strong>שלב 2 - בניית מערכת משוואות:</strong></p>
          <p>משוואה 1 (היקף): 2x + 2y = 100 → x + y = 50</p>
          <p>משוואה 2 (שטח): x × y = 600</p>
          <p><strong>שלב 3 - פתרון בשיטת הצבה:</strong></p>
          <p>מהמשוואה הראשונה: y = 50 - x</p>
          <p>הצבה במשוואה השנייה: x(50 - x) = 600</p>
          <p>50x - x² = 600</p>
          <p>x² - 50x + 600 = 0</p>
          <p><strong>שלב 4 - פתרון המשוואה הריבועית:</strong></p>
          <p>נחפש זוג מספרים שמכפלתם 600 וסכומם 50</p>
          <p>(x - 20)(x - 30) = 0</p>
          <p>x₁ = 20, x₂ = 30</p>
          <p><strong>שלב 5 - מציאת התשובה:</strong></p>
          <p>אם x = 20, אז y = 30</p>
          <p>אם x = 30, אז y = 20</p>
          <p>תשובה: רוחב 20 מ' ואורך 30 מ' (או להפך)</p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - בעיות גיאומטריות',
    questions: [
      {
        question: 'הגדילו את צלעו של ריבוע ב-2 ס"מ. כתוצאה מכך, היקפו גדל ב:',
        options: ['2 ס"מ', '4 ס"מ', '8 ס"מ', 'תלוי באורך הצלע המקורי'],
        correctAnswer: 2,
        explanation: 'כל אחת מ-4 הצלעות גדלה ב-2, ולכן התוספת הכוללת להיקף היא 4 × 2 = 8.'
      },
      {
        question: 'בבעיית שטח של מלבן, קיבלת שני פתרונות אפשריים לרוחב: x₁ = 4 ו- x₂ = -10. מהי התשובה הנכונה לרוחב המלבן?',
        options: ['4', '-10', 'גם וגם', 'אין פתרון'],
        correctAnswer: 0,
        explanation: 'מידה גיאומטרית (אורך/רוחב) חייבת להיות מספר חיובי, ולכן הפתרון השלילי נפסל.'
      },
      {
        question: 'היקפו של מלבן הוא P ואורכו L. מהו הביטוי המייצג את רוחבו W?',
        options: ['P - 2L', '(P - L)/2', 'P/2 - L', 'P - L'],
        correctAnswer: 2,
        explanation: 'מתוך P = 2L + 2W, נקבל P - 2L = 2W, ואז W = (P - 2L)/2 = P/2 - L.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="בעיות מילוליות גיאומטריות במישור"
      description="פתרון בעיות גיאומטריות, בניית משוואות מנתונים גיאומטריים ושימוש בנוסחאות היקף ושטח"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מבוא לשיעור</h2>
        <p className="text-lg mb-4">
          לאחר שעסקנו בבעיות קנייה ומכירה, כעת ניישם את אותה אסטרטגיית פתרון על בעיות העוסקות 
          בצורות הנדסיות. בבעיות אלו, המשוואות שלנו יתבססו על הנוסחאות לשטחים והיקפים שלמדנו 
          בנושא 6. המפתח להצלחה כאן הוא תרגום נכון של המידע הגיאומטרי לקשרים אלגבריים.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>בניית משוואות מתוך נתונים גיאומטריים: נלמד כיצד לבנות משוואות המבוססות על היקפים ושטחים של מלבנים וריבועים</li>
          <li>יישום אסטרטגיית הפתרון: נחזק את תהליך העבודה המסודר לפתרון בעיות מילוליות בהקשר גיאומטרי</li>
          <li>הדמיה חזותית: נבין את החשיבות של שרטוט סקיצה כחלק מתהליך הפתרון</li>
          <li>טיפול במשוואות ריבועיות: נתרגל פתרון בעיות שטח שמובילות למשוואות ריבועיות</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">אסטרטגיה לבעיות גיאומטריות</h3>
          <p className="mb-3">אסטרטגיית 5 השלבים נשארת זהה, עם דגש קטן על השלב הראשון:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>קריאה ושרטוט:</strong> קראו את השאלה ושרטטו סקיצה של הצורה המתוארת. רשמו על השרטוט את הנתונים הידועים והגדירו את מה שאתם מחפשים. סקיצה טובה שווה חצי פתרון!</li>
            <li><strong>הגדרת משתנים:</strong> הגדירו את אחת המידות הלא ידועות (למשל, רוחב מלבן) כ-x, ובטאו את שאר המידות באמצעות x</li>
            <li><strong>בניית משוואה:</strong> השתמשו בנוסחה הגיאומטרית הרלוונטית (היקף או שטח) כדי לבנות משוואה</li>
            <li><strong>פתרון המשוואה:</strong> פתרו את המשוואה. שימו לב שבבעיות שטח, ייתכן שתקבלו משוואה ריבועית</li>
            <li><strong>בדיקה ותשובה מילולית:</strong> בדקו שהפתרון הגיוני (מידות גיאומטריות חייבות להיות חיוביות) וענו במילים על השאלה</li>
          </ol>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">נוסחאות גיאומטריות מרכזיות</h3>
          
          <div className="bg-white p-3 rounded border-r-4 border-green-400 mb-3">
            <h4 className="font-semibold mb-2">מלבן</h4>
            <FormulaBox>היקף = 2(אורך + רוחב)</FormulaBox>
            <FormulaBox>שטח = אורך × רוחב</FormulaBox>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-green-400 mb-3">
            <h4 className="font-semibold mb-2">ריבוע</h4>
            <FormulaBox>היקף = 4 × צלע</FormulaBox>
            <FormulaBox>שטח = צלע²</FormulaBox>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-green-400">
            <h4 className="font-semibold mb-2">משולש</h4>
            <FormulaBox>היקף = צלע א' + צלע ב' + צלע ג'</FormulaBox>
            <FormulaBox>שטח = (בסיס × גובה) / 2</FormulaBox>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">סוגי בעיות נפוצות</h3>
          
          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <h4 className="font-semibold mb-2">בעיות היקף</h4>
            <p>בדרך כלל מובילות למשוואות ליניאריות. הפתרון יחיד וקל למציאה.</p>
            <p><strong>דוגמה:</strong> "אורך המלבן גדול ב-3 מרוחבו והיקף הוא 26"</p>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-yellow-400">
            <h4 className="font-semibold mb-2">בעיות שטח</h4>
            <p>בדרך כלל מובילות למשוואות ריבועיות. עלולים להיות שני פתרונות מתמטיים, אך רק אחד הגיוני גיאומטרית.</p>
            <p><strong>דוגמה:</strong> "אורך המלבן גדול ב-2 מרוחבו והשטח הוא 24"</p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">עקרונות חשובים</h3>
          <div className="bg-white p-3 rounded border-r-4 border-purple-400">
            <ul className="space-y-2">
              <li><strong>מידות חיוביות:</strong> אורך, רוחב, וצלע חייבים להיות מספרים חיוביים</li>
              <li><strong>בדיקת פתרונות:</strong> במשוואות ריבועיות, תמיד בדקו שני הפתרונות ופסלו את השלילי</li>
              <li><strong>יחידות מידה:</strong> וודאו שכל המידות באותן יחידות</li>
              <li><strong>שרטוט:</strong> סקיצה עוזרת לוודא שהתשובה הגיונית</li>
            </ul>
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
            <li>בעיות גיאומטריות דורשות שילוב של ידע אלגברי וגיאומטרי</li>
            <li>שרטוט סקיצה מסייע בהבנת הבעיה ובבדיקת התשובה</li>
            <li>בעיות היקף מובילות בדרך כלל למשוואות ליניאריות</li>
            <li>בעיות שטח מובילות לעיתים קרובות למשוואות ריבועיות</li>
            <li>תמיד יש לבדוק שהפתרונות המתמטיים הגיוניים גיאומטרית</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat92GeometryProblems;
