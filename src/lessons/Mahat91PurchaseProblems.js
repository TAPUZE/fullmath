import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat91PurchaseProblems = () => {
  const lessonId = 'mahat-9-1-purchase-problems';
  const nextLessonPath = '/lessons/mahat-9-2-geometry-problems';
  
  const exercises = [
    {
      id: 'ex1',
      question: 'דנה קנתה 3 חולצות ו-5 זוגות מכנסיים. מחיר זוג מכנסיים יקר ב-20 ש"ח ממחיר חולצה. בסך הכל שילמה דנה 300 ש"ח. מה מחיר חולצה ומה מחיר זוג מכנסיים?',
      correctAnswer: 'חולצה: 25 ש"ח, מכנסיים: 45 ש"ח',
      placeholder: 'הזן את המחירים',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - הגדרת משתנים:</strong></p>
          <p>נגדיר: x = מחיר חולצה</p>
          <p>מכאן: x + 20 = מחיר זוג מכנסיים</p>
          <p><strong>שלב 2 - בניית משוואה:</strong></p>
          <p>עלות החולצות: 3 × x = 3x</p>
          <p>עלות המכנסיים: 5 × (x + 20) = 5x + 100</p>
          <p>משוואה כוללת: 3x + 5x + 100 = 300</p>
          <p><strong>שלב 3 - פתרון:</strong></p>
          <p>8x + 100 = 300</p>
          <p>8x = 200</p>
          <p>x = 25</p>
          <p><strong>שלב 4 - בדיקה ותשובה:</strong></p>
          <p>מחיר חולצה: 25 ש"ח</p>
          <p>מחיר מכנסיים: 25 + 20 = 45 ש"ח</p>
          <p>בדיקה: 3×25 + 5×45 = 75 + 225 = 300 ✓</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מחיר מחשב היה x שקלים. הוא הוזל ב-20%. מחירו החדש הוא 2400 ש"ח. מה היה מחירו המקורי?',
      correctAnswer: '3000 ש"ח',
      placeholder: 'הזן את המחיר המקורי',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - הבנת הבעיה:</strong></p>
          <p>הוזלה של 20% משאירה 80% מהמחיר המקורי</p>
          <p><strong>שלב 2 - הגדרת משתנים:</strong></p>
          <p>x = מחיר מקורי</p>
          <p><strong>שלב 3 - בניית משוואה:</strong></p>
          <p>מחיר לאחר הוזלה = 80% מהמחיר המקורי</p>
          <p>x × (1 - 20/100) = 2400</p>
          <p>x × 0.8 = 2400</p>
          <p><strong>שלב 4 - פתרון:</strong></p>
          <p>x = 2400 ÷ 0.8 = 3000</p>
          <p><strong>שלב 5 - בדיקה:</strong></p>
          <p>הוזלה של 20% מ-3000: 3000 × 0.2 = 600</p>
          <p>מחיר חדש: 3000 - 600 = 2400 ✓</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'סכום שני מספרים הוא 30. מספר אחד גדול מהשני ב-4. מצא את שני המספרים.',
      correctAnswer: '13 ו-17',
      placeholder: 'הזן את שני המספרים',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - הגדרת משתנים:</strong></p>
          <p>נגדיר: x = המספר הקטן</p>
          <p>מכאן: x + 4 = המספר הגדול</p>
          <p><strong>שלב 2 - בניית משוואה:</strong></p>
          <p>סכום המספרים: x + (x + 4) = 30</p>
          <p><strong>שלב 3 - פתרון:</strong></p>
          <p>2x + 4 = 30</p>
          <p>2x = 26</p>
          <p>x = 13</p>
          <p><strong>שלב 4 - מציאת שני המספרים:</strong></p>
          <p>המספר הקטן: 13</p>
          <p>המספר הגדול: 13 + 4 = 17</p>
          <p><strong>בדיקה:</strong> 13 + 17 = 30 ✓</p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'לאחר הנחה של 30%, מחיר שמלה הוא 210 ש"ח. מה היה מחירה המקורי?',
      correctAnswer: '300 ש"ח',
      placeholder: 'הזן את המחיר המקורי',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - הבנת הבעיה:</strong></p>
          <p>הנחה של 30% משאירה 70% מהמחיר המקורי</p>
          <p><strong>שלב 2 - הגדרת משתנים:</strong></p>
          <p>x = מחיר מקורי</p>
          <p><strong>שלב 3 - בניית משוואה:</strong></p>
          <p>מחיר לאחר הנחה = 70% מהמחיר המקורי</p>
          <p>x × 0.7 = 210</p>
          <p><strong>שלב 4 - פתרון:</strong></p>
          <p>x = 210 ÷ 0.7 = 300</p>
          <p><strong>שלב 5 - בדיקה:</strong></p>
          <p>הנחה של 30% מ-300: 300 × 0.3 = 90</p>
          <p>מחיר חדש: 300 - 90 = 210 ✓</p>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'בכיתה 35 תלמידים. מספר הבנים גדול ב-5 ממספר הבנות. כמה בנים וכמה בנות בכיתה?',
      correctAnswer: '15 בנות, 20 בנים',
      placeholder: 'הזן את מספר הבנים והבנות',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p><strong>שלב 1 - הגדרת משתנים:</strong></p>
          <p>נגדיר: x = מספר הבנות</p>
          <p>מכאן: x + 5 = מספר הבנים</p>
          <p><strong>שלב 2 - בניית משוואה:</strong></p>
          <p>סך התלמידים: x + (x + 5) = 35</p>
          <p><strong>שלב 3 - פתרון:</strong></p>
          <p>2x + 5 = 35</p>
          <p>2x = 30</p>
          <p>x = 15</p>
          <p><strong>שלב 4 - מציאת התשובה:</strong></p>
          <p>מספר הבנות: 15</p>
          <p>מספר הבנים: 15 + 5 = 20</p>
          <p><strong>בדיקה:</strong> 15 + 20 = 35 ✓</p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - בעיות קנייה ומכירה',
    questions: [
      {
        question: 'מוצר שמחירו x התייקר ב-10%. מהו הביטוי למחירו החדש?',
        options: ['1.1x', '0.9x', 'x + 10', '10x'],
        correctAnswer: 0,
        explanation: 'המחיר החדש הוא 110% מהמחיר המקורי, כלומר x × (1 + 10/100) = 1.1x.'
      },
      {
        question: 'גילי קנתה 5 עפרונות ו-3 מחברות. מחיר מחברת הוא y. מחיר עיפרון הוא חצי ממחיר מחברת. מהי העלות הכוללת?',
        options: ['5y + 1.5y', '2.5y + 3y', '8y', '5.5y'],
        correctAnswer: 3,
        explanation: 'עלות העפרונות: 5×(y/2) = 2.5y. עלות המחברות: 3y. הסכום: 2.5y + 3y = 5.5y.'
      },
      {
        question: 'פתרת בעיה ומצאת שמספר הכיסאות בחדר הוא x = -4. מהי המסקנה ההגיונית ביותר?',
        options: ['יש בחדר 4 כיסאות', 'אין כיסאות בחדר', 'יש טעות חישוב בפתרון המשוואה', 'צריך להוסיף כיסאות'],
        correctAnswer: 2,
        explanation: 'כמות פיזית לא יכולה להיות שלילית. תשובה כזו מעידה כמעט בוודאות על טעות בבניית המשוואה או בפתרונה.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="בעיות מילוליות - קנייה ומכירה"
      description="אסטרטגיית פתרון בעיות מילוליות, בניית משוואות מתוך טקסט וחישובי אחוזים"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מבוא לשיעור</h2>
        <p className="text-lg mb-4">
          בעיות מילוליות הן המקום שבו המתמטיקה פוגשת את העולם האמיתי. היכולת לקרוא סיפור, 
          לזהות את הנתונים, לבנות מודל מתמטי (משוואה) ולפתור אותו היא מיומנות חיונית. 
          בשיעור זה נתמקד בסוג נפוץ של בעיות - בעיות קנייה ומכירה. נלמד כיצד לבנות משוואות 
          המתארות עסקאות, ונראה כיצד להתמודד עם אחוזים, שהם חלק בלתי נפרד מעולם המסחר.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>פיתוח אסטרטגיה לפתרון בעיות: נלמד תהליך עבודה מסודר בן 5 שלבים לפתרון כל בעיה מילולית</li>
          <li>בניית משוואות מתוך טקסט: נתרגם נתונים על מחירים, כמויות, הנחות והתייקרויות למשוואות אלגבריות</li>
          <li>שליטה בבעיות אחוזים: נלמד לחשב התייקרות, הוזלה, ומחיר לפני/אחרי שינוי באחוזים</li>
          <li>פיתוח חשיבה לוגית: נתרגל בדיקת הגיון התשובות במצבים מעשיים</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">אסטרטגיה בת 5 שלבים לפתרון בעיות מילוליות</h3>
          <p className="mb-3">אל תיגשו לבעיה מילולית בבת אחת. פעלו תמיד לפי השלבים הבאים:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>קריאה והבנה:</strong> קראו את השאלה לאט ובעיון. זהו את הנתונים הידועים וסמנו במדויק מה מבקשים מכם למצוא (הנעלם)</li>
            <li><strong>הגדרת משתנים:</strong> הגדירו את הנעלם המרכזי באמצעות x. אם יש נעלמים נוספים, נסו לבטא גם אותם באמצעות x</li>
            <li><strong>בניית משוואה:</strong> זהו השלב המרכזי. מצאו את הקשר או השוויון המתואר בבעיה וכתבו אותו כמשוואה</li>
            <li><strong>פתרון המשוואה:</strong> פתרו את המשוואה האלגברית שבניתם באמצעות הכלים שלמדנו</li>
            <li><strong>בדיקה וכתיבת תשובה מילולית:</strong> בדקו שהפתרון שמצאתם הגיוני בהקשר של הסיפור וכתבו תשובה ברורה במילים</li>
          </ol>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">בעיות קנייה ומכירה ללא אחוזים</h3>
          <p className="mb-3">הקשר הבסיסי הוא:</p>
          <FormulaBox>מחיר כולל = כמות × מחיר ליחידה</FormulaBox>
          <p className="mt-3">מכאן ניתן לבנות את רוב המשוואות. חשוב לטפל בנפרד במקדמים המספריים (המספרים שלפני המשתנים) ובנפרד במשתנים עצמם.</p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">בעיות קנייה ומכירה עם אחוזים</h3>
          <p className="mb-3">אחוז הוא פשוט דרך אחרת לכתוב שבר. P% הוא P/100.</p>
          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <p><strong>חישוב אחוז ממספר:</strong> כדי למצוא P% מתוך X, מחשבים (P/100) × X</p>
          </div>
          <div className="bg-white p-3 rounded border-r-4 border-yellow-400 mb-3">
            <p><strong>התייקרות (עלייה באחוזים):</strong> אם מוצר שמחירו x התייקר ב-P%, מחירו החדש הוא:</p>
            <FormulaBox>x × (1 + P/100)</FormulaBox>
          </div>
          <div className="bg-white p-3 rounded border-r-4 border-yellow-400">
            <p><strong>הוזלה/הנחה (ירידה באחוזים):</strong> אם מוצר שמחירו x הוזל ב-P%, מחירו החדש הוא:</p>
            <FormulaBox>x × (1 - P/100)</FormulaBox>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">טיפים חשובים</h3>
          <div className="bg-white p-3 rounded border-r-4 border-purple-400">
            <ul className="space-y-2">
              <li><strong>בדיקת הגיון:</strong> תמיד בדקו שהתשובה הגיונית - מחירים חייבים להיות חיוביים, מספר אנשים חייב להיות מספר שלם</li>
              <li><strong>תרגום נכון:</strong> "גדול ב-5" משמעו +5, "גדול פי 5" משמעו ×5</li>
              <li><strong>סדר פעולות:</strong> שימו לב לסדר הפעולות כשיש סוגריים</li>
              <li><strong>יחידות:</strong> וודאו שכל המספרים באותן יחידות</li>
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
            <li>אסטרטגיית 5 השלבים היא המפתח להצלחה בפתרון בעיות מילוליות</li>
            <li>הגדרת משתנים נכונה וברורה חוסכת טעויות בהמשך</li>
            <li>בעיות אחוזים דורשות זהירות בתרגום המילים למשוואות</li>
            <li>בדיקת הגיון התשובה היא חלק חיוני מהפתרון</li>
            <li>תרגול רב של בעיות מסוגים שונים מפתח גמישות מחשבתית</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat91PurchaseProblems;
