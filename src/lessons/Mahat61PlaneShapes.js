import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat61PlaneShapes = () => {
  const lessonId = 'mahat-6-1-plane-shapes';
  const nextLessonPath = '/lessons/mahat-6-2-coordinate-geometry';
  
  const exercises = [
    {
      id: 'ex1',
      question: 'מהו היקף מלבן שאורכו 12 ס"מ ורוחבו 8 ס"מ?',
      correctAnswer: '40 ס"מ',
      placeholder: 'הזן את ההיקף בס"מ',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחת היקף מלבן:</strong> P = 2(אורך + רוחב)</p>
          <p><strong>הצבת הנתונים:</strong> P = 2(12 + 8)</p>
          <p><strong>חישוב:</strong> P = 2 × 20 = 40 ס"מ</p>
          <p><strong>תשובה:</strong> היקף המלבן הוא 40 ס"מ</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מהו היקף מעגל שרדיוסו 7 ס"מ? (השתמש ב-π ≈ 3.14)',
      correctAnswer: '43.96 ס"מ',
      placeholder: 'הזן את ההיקף בส"מ',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחת היקף מעגל:</strong> P = 2πr</p>
          <p><strong>הצבת הנתונים:</strong> P = 2 × 3.14 × 7</p>
          <p><strong>חישוב:</strong> P = 6.28 × 7 = 43.96 ס"מ</p>
          <p><strong>תשובה:</strong> היקף המעגל הוא 43.96 ס"מ</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'משולש שווה-צלעות שהיקפו 24 ס"מ. מהו אורך כל צלע?',
      correctAnswer: '8 ס"מ',
      placeholder: 'הזן את אורך הצלע בס"מ',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>במשולש שווה-צלעות:</strong> שלוש הצלעות שוות</p>
          <p><strong>היקף:</strong> P = 3 × אורך צלע</p>
          <p><strong>משוואה:</strong> 24 = 3 × אורך צלע</p>
          <p><strong>פתרון:</strong> אורך צלע = 24 ÷ 3 = 8 ס"מ</p>
          <p><strong>תשובה:</strong> כל צלע באורך 8 ס"מ</p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'מהו היקפו של ריבוע שהאלכסון שלו באורך √18 ס"מ?',
      correctAnswer: '12 ס"מ',
      placeholder: 'הזן את ההיקף בס"מ',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>במשפט פיתגורס בריבוע:</strong> a² + a² = אלכסון²</p>
          <p><strong>הצבה:</strong> 2a² = (√18)² = 18</p>
          <p><strong>פתרון:</strong> a² = 9, לכן a = 3 ס"מ</p>
          <p><strong>היקף הריבוע:</strong> P = 4a = 4 × 3 = 12 ס"מ</p>
          <p><strong>תשובה:</strong> היקף הריבוע הוא 12 ס"מ</p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'מסלול ריצה מורכב משני חצאי מעגל זהים המחוברים בשני קטעים ישרים באורך 100 מטר כל אחד. רדיוס חצאי המעגל הוא 30 מטר. מה היקף המסלול? (השתמש ב-π)',
      correctAnswer: '200 + 60π מטר',
      placeholder: 'הזן את ההיקף (כולל π)',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>ניתוח המסלול:</strong></p>
          <p>• שני קטעים ישרים: 2 × 100 = 200 מטר</p>
          <p>• שני חצאי מעגל = מעגל שלם</p>
          <p><strong>היקף המעגל:</strong> 2πr = 2π × 30 = 60π מטר</p>
          <p><strong>היקף כולל:</strong> 200 + 60π מטר</p>
          <p><strong>תשובה:</strong> היקף המסלול הוא 200 + 60π מטר</p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - צורות במישור',
    questions: [
      {
        question: 'איזו מהצורות הבאות יש לה בדיוק 4 צלעות שוות ו-4 זוויות ישרות?',
        options: ['מלבן', 'ריבוע', 'מעוין', 'טרפז'],
        correctAnswer: 1,
        explanation: 'ריבוע הוא הצורה היחידה עם 4 צלעות שוות ו-4 זוויות ישרות (90 מעלות כל אחת).'
      },
      {
        question: 'מהי הנוסחה הנכונה לחישוב היקף מעגל?',
        options: ['πr²', '2πr', 'πd²', '4πr'],
        correctAnswer: 1,
        explanation: 'היקף מעגל = 2πr, כאשר r הוא הרדיוס. ניתן גם לכתוב πd כאשר d הוא הקוטר.'
      },
      {
        question: 'במשולש, סכום כל הזוויות הפנימיות הוא:',
        options: ['90 מעלות', '180 מעלות', '270 מעלות', '360 מעלות'],
        correctAnswer: 1,
        explanation: 'זהו חוק בסיסי בגיאומטריה: סכום הזוויות הפנימיות בכל משולש הוא תמיד 180 מעלות.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="תכונות של צורות הנדסיות וחישוב היקפים"
      description="זיהוי צורות, הבנת תכונותיהן וחישוב היקפים"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מבוא לשיעור</h2>
        <p className="text-lg mb-4">
          הנדסה היא תחום במתמטיקה העוסק בצורות, גדלים ותכונות של המרחב. בעולם ההנדסי, 
          היכולת לזהות צורות, להבין את תכונותיהן ולחשב את ממדיהן היא בסיסית. בשיעור זה נסקור 
          את הצורות המישוריות המרכזיות, נלמד את התכונות המיוחדות של כל אחת מהן, ונתמקד בחישוב היקפים.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>זיהוי צורות: נלמד לזהות ולהבדיל בין משולש, ריבוע, מלבן, מעוין, מקבילית, טרפז, דלתון ומעגל</li>
          <li>הבנת תכונות: נבין את התכונות הייחודיות של כל צורה (שוויון צלעות, זוויות, אלכסונים וכו')</li>
          <li>חישוב היקפים: נלמד לחשב את ההיקף של כל צורה באמצעות הנוסחאות המתאימות</li>
          <li>יישומים מעשיים: נתרגל פתרון בעיות היקפים במצבים מעשיים ויומיומיים</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">מושגי יסוד</h3>
          <p className="mb-3">
            <strong>היקף:</strong> זהו סכום אורכי כל הצלעות של צורה. ניתן לחשוב על זה כעל "אורך הגדר" 
            שמקיפה את הצורה. במעגל, ההיקף נקרא "הקפה".
          </p>
          <p className="mb-3">
            <strong>זווית:</strong> המרחק בין שתי קרניים הנפגשות בנקודה. נמדדת במעלות.
          </p>
          <p>
            <strong>אלכסון:</strong> קטע המחבר בין שתי קודקודות לא סמוכות של מצולע.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">משולשים</h3>
          <div className="bg-white p-3 rounded border-r-4 border-green-400 mb-3">
            <p><strong>תכונות בסיסיות:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>3 צלעות, 3 קודקודות, 3 זוויות</li>
              <li>סכום הזוויות הפנימיות: 180°</li>
              <li>היקף = צלע א' + צלע ב' + צלע ג'</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border-r-4 border-green-400">
            <p><strong>סוגי משולשים לפי צלעות:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>שווה-צלעות:</strong> כל הצלעות שוות, כל הזוויות 60°</li>
              <li><strong>שווה-שוקיים:</strong> שתי צלעות שוות, שתי זוויות שוות</li>
              <li><strong>שונה-צלעות:</strong> כל הצלעות שונות</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">מרובעים</h3>
          
          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <h4 className="font-semibold mb-2">ריבוע</h4>
            <p>• 4 צלעות שוות, 4 זוויות ישרות (90°)</p>
            <p>• אלכסונים שווים ומאונכים</p>
            <FormulaBox>היקף = 4 × צלע</FormulaBox>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <h4 className="font-semibold mb-2">מלבן</h4>
            <p>• 2 זוגות צלעות מקבילות ושוות, 4 זוויות ישרות</p>
            <p>• אלכסונים שווים</p>
            <FormulaBox>היקף = 2(אורך + רוחב)</FormulaBox>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <h4 className="font-semibold mb-2">מעוין</h4>
            <p>• 4 צלעות שוות, צלעות מקבילות זוג לזוג</p>
            <p>• אלכסונים מאונכים (אך לא בהכרח שווים)</p>
            <FormulaBox>היקף = 4 × צלע</FormulaBox>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-yellow-400">
            <h4 className="font-semibold mb-2">טרפז</h4>
            <p>• זוג אחד של צלעות מקבילות (בסיסים)</p>
            <p>• הצלעות האחרות נקראות שוקיים</p>
            <FormulaBox>היקף = סכום כל הצלעות</FormulaBox>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">מעגל</h3>
          <div className="bg-white p-3 rounded border-r-4 border-purple-400">
            <p className="mb-3"><strong>מושגי יסוד:</strong></p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li><strong>רדיוס (r):</strong> המרחק ממרכז המעגל לכל נקודה על הקפתו</li>
              <li><strong>קוטר (d):</strong> קטע העובר דרך המרכז ומחבר שתי נקודות על הקפה (d = 2r)</li>
              <li><strong>הקפה:</strong> השם להיקף של מעגל</li>
            </ul>
            <FormulaBox>היקף = 2πr = πd</FormulaBox>
            <p className="mt-2 text-sm">
              <strong>שימו לב:</strong> π (פי) הוא קבוע מתמטי ≈ 3.14159
            </p>
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
            <li>זיהוי נכון של צורות הוא הבסיס לפתרון בעיות גיאומטריות</li>
            <li>כל צורה יש לה תכונות ייחודיות שחשוב להכיר</li>
            <li>נוסחאות ההיקף מאפשרות חישוב מדויק של "אורך הגדר" סביב כל צורה</li>
            <li>במעגל, ההיקף תלוי ברדיוס ובקבוע π</li>
            <li>הבנת תכונות הצורות תסייע בשיעורים הבאים על שטחים וגיאומטריה אנליטית</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat61PlaneShapes;
