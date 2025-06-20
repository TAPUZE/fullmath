import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat62CoordinateGeometry = () => {
  const lessonId = 'mahat-6-2-area-calculations';
  const nextLessonPath = '/lessons/mahat-7-1-function-line';
  
  const exercises = [
    {
      id: 'ex1',
      question: 'מהו שטח מלבן שאורכו 15 ס"מ ורוחבו 8 ס"מ?',
      correctAnswer: '120 ס"ר',
      placeholder: 'הזן את השטח בס"ר',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחת שטח מלבן:</strong> A = אורך × רוחב</p>
          <p><strong>הצבת הנתונים:</strong> A = 15 × 8</p>
          <p><strong>חישוב:</strong> A = 120 ס"ר</p>
          <p><strong>תשובה:</strong> שטח המלבן הוא 120 ס"ר</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מהו שטח מעגל שרדיוסו 5 ס"מ? (השתמש ב-π ≈ 3.14)',
      correctAnswer: '78.5 ס"ר',
      placeholder: 'הזן את השטח בס"ר',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחת שטח מעגל:</strong> A = πr²</p>
          <p><strong>הצבת הנתונים:</strong> A = 3.14 × 5²</p>
          <p><strong>חישוב:</strong> A = 3.14 × 25 = 78.5 ס"ר</p>
          <p><strong>תשובה:</strong> שטח המעגל הוא 78.5 ס"ר</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'משולש שבסיסו 12 ס"מ וגובהו 8 ס"מ. מהו שטחו?',
      correctAnswer: '48 ס"ר',
      placeholder: 'הזן את השטח בס"ר',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נוסחת שטח משולש:</strong> A = (בסיס × גובה) / 2</p>
          <p><strong>הצבת הנתונים:</strong> A = (12 × 8) / 2</p>
          <p><strong>חישוב:</strong> A = 96 / 2 = 48 ס"ר</p>
          <p><strong>תשובה:</strong> שטח המשולש הוא 48 ס"ר</p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'שטח מלבן הוא 48 ס"ר. היקפו 28 ס"מ. מה אורכי צלעותיו?',
      correctAnswer: '6 ס"מ ו-8 ס"מ',
      placeholder: 'הזן את אורכי הצלעות',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>נתונים:</strong> שטח = 48, היקף = 28</p>
          <p><strong>נסמן:</strong> אורך = a, רוחב = b</p>
          <p><strong>משוואות:</strong></p>
          <p>• a × b = 48 (שטח)</p>
          <p>• 2(a + b) = 28 → a + b = 14 (היקף)</p>
          <p><strong>פתרון:</strong> נחפש זוג מספרים שמכפלתם 48 וסכומם 14</p>
          <p>• 6 × 8 = 48 ✓</p>
          <p>• 6 + 8 = 14 ✓</p>
          <p><strong>תשובה:</strong> הצלעות הן 6 ס"מ ו-8 ס"מ</p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'כיצד משתנה שטח ריבוע אם מגדילים את אורך צלעו פי 3?',
      correctAnswer: 'גדל פי 9',
      placeholder: 'הזן איך משתנה השטח',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שטח ריבוע מקורי:</strong> A₁ = a²</p>
          <p><strong>אורך צלע חדש:</strong> 3a</p>
          <p><strong>שטח ריבוע חדש:</strong> A₂ = (3a)² = 9a²</p>
          <p><strong>יחס השטחים:</strong> A₂/A₁ = 9a²/a² = 9</p>
          <p><strong>תשובה:</strong> השטח גדל פי 9</p>
          <p><strong>כלל כללי:</strong> כאשר מגדילים ממד ליניארי פי k, השטח גדל פי k²</p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - חישוב שטחים',
    questions: [
      {
        question: 'במשולש, כדי לחשב שטח יש צורך:',
        options: ['רק בשלוש הצלעות', 'בבסיס ובגובה לצלע הנתונה', 'רק בגובה', 'בצלע השנייה'],
        correctAnswer: 1,
        explanation: 'נוסחת השטח מחייבת שימוש בצלע (בסיס) ובגובה היורד אליה בניצב.'
      },
      {
        question: 'שטח מלבן הוא 48 ס"ר. היקפו 28 ס"מ. מה אורכי צלעותיו?',
        options: ['4 ו-12', '3 ו-16', '5 ו-9.6', '6 ו-8'],
        correctAnswer: 3,
        explanation: 'יש לחפש זוג מספרים שמכפלתם 48 וסכומם 14 (חצי מההיקף).'
      },
      {
        question: 'כיצד משתנה שטח ריבוע אם מגדילים את אורך צלעו פי 3?',
        options: ['גדל פי 3', 'גדל פי 6', 'גדל פי 9', 'גדל פי 1.5'],
        correctAnswer: 2,
        explanation: 'השטח תלוי בצלע בריבוע. אם הצלע גדלה פי 3, השטח גדל פי 3², כלומר פי 9.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="חישוב שטחים של צורות הנדסיות"
      description="נוסחאות שטח, יישומים מעשיים וחישוב שטחים מורכבים"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מבוא לשיעור</h2>
        <p className="text-lg mb-4">
          בעוד שהיקף מודד את "אורך הגדר" של צורה, שטח מודד את המרחב הדו-ממדי שהצורה תופסת, 
          או "כמה צבע צריך כדי למלא אותה". בשיעור זה נסקור את הנוסחאות החשובות לחישוב שטח 
          של כל הצורות המישוריות שלמדנו, ונתרגל חישוב שטחים של צורות מורכבות.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>שליטה בנוסחאות השטח: נלמד ונשנן את נוסחאות השטח של כל הצורות הבסיסיות</li>
          <li>הבנת הקשר בין גובה לבסיס: נבין את החשיבות של שימוש בגובה המתאים לבסיס בחישובי שטח</li>
          <li>חישוב שטחים מורכבים: נלמד לפרק צורות מורכבות לחלקים, לחשב את שטח כל חלק ולסכום אותם</li>
          <li>יישומים מעשיים: נפתור בעיות שטח הקשורות למצבים יומיומיים כמו חישוב כמות צבע או שטח דירה</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">מושג השטח</h3>
          <p className="mb-3">
            <strong>שטח</strong> הוא המרחב הדו-ממדי שצורה תופסת. יחידות המדידה הן יחידות ריבועיות: 
            ס"ר (סנטימטר רבוע), מ"ר (מטר רבוע), ק"מ (קילומטר רבוע) וכו'.
          </p>
          <p>
            דמיינו שאתם רוצים לצבוע קיר - השטח יגיד לכם כמה צבע אתם צריכים.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">נוסחאות שטח - צורות בסיסיות</h3>
          
          <div className="bg-white p-3 rounded border-r-4 border-green-400 mb-3">
            <h4 className="font-semibold mb-2">ריבוע</h4>
            <FormulaBox>שטח = צלע²</FormulaBox>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-green-400 mb-3">
            <h4 className="font-semibold mb-2">מלבן</h4>
            <FormulaBox>שטח = אורך × רוחב</FormulaBox>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-green-400 mb-3">
            <h4 className="font-semibold mb-2">משולש</h4>
            <FormulaBox>שטח = (בסיס × גובה) / 2</FormulaBox>
            <p className="text-sm mt-2"><strong>חשוב:</strong> הגובה חייב להיות ניצב לבסיס!</p>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-green-400">
            <h4 className="font-semibold mb-2">מעגל</h4>
            <FormulaBox>שטח = πr²</FormulaBox>
            <p className="text-sm mt-2">כאשר r הוא הרדיוס</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">נוסחאות שטח - צורות מתקדמות</h3>
          
          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <h4 className="font-semibold mb-2">מקבילית</h4>
            <FormulaBox>שטח = בסיס × גובה</FormulaBox>
            <p className="text-sm mt-2">הגובה הוא המרחק הניצב בין הבסיסים המקבילים</p>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <h4 className="font-semibold mb-2">טרפז</h4>
            <FormulaBox>שטח = [(בסיס עליון + בסיס תחתון) × גובה] / 2</FormulaBox>
            <p className="text-sm mt-2">הגובה הוא המרחק הניצב בין שני הבסיסים</p>
          </div>

          <div className="bg-white p-3 rounded border-r-4 border-yellow-400">
            <h4 className="font-semibold mb-2">מעוין</h4>
            <FormulaBox>שטח = (אלכסון 1 × אלכסון 2) / 2</FormulaBox>
            <p className="text-sm mt-2">או: שטח = בסיס × גובה (כמו מקבילית)</p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">עקרונות חשובים</h3>
          <div className="bg-white p-3 rounded border-r-4 border-purple-400">
            <ul className="space-y-2">
              <li><strong>גובה נכון:</strong> תמיד השתמשו בגובה הניצב לבסיס הנבחר</li>
              <li><strong>יחידות:</strong> וודאו שכל המידות באותן יחידות לפני החישוב</li>
              <li><strong>שטחים מורכבים:</strong> פרקו לצורות פשוטות, חשבו כל אחת בנפרד וסכמו</li>
              <li><strong>קנה מידה:</strong> אם מגדילים ממד ליניארי פי k, השטח גדל פי k²</li>
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
            <li>שטח מודד את המרחב הדו-ממדי שצורה תופסת</li>
            <li>כל צורה יש לה נוסחת שטח ייחודית שחשוב לזכור</li>
            <li>בחישובי שטח של משולש ומקבילית, הגובה חייב להיות ניצב לבסיס</li>
            <li>שטחים מורכבים ניתנים לפירוק לצורות פשוטות</li>
            <li>הבנת חישובי השטח חיונית ליישומים מעשיים כמו בנייה וצביעה</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat62CoordinateGeometry;
