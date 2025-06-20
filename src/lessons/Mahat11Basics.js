import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';


const Mahat11Basics = () => {
  const lessonId = 'mahat-1-1-basics';
  const nextLessonPath = '/lessons/mahat-1-2-fractions';
  const exercises = [
    {
      id: 'ex1',
      question: 'חשב: 12 + 8 ÷ 4',
      correctAnswer: '14',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>לפי סדר פעולות החשבון - חילוק קודם לחיבור:</p>
          <FormulaBox>{"8 \\div 4 = 2"}</FormulaBox>
          <FormulaBox>{"12 + 2 = 14"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'חשב: (12 + 8) ÷ 4',
      correctAnswer: '5',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>כאן יש סוגריים, לכן מתחילים בחישוב מה שבתוכם:</p>
          <FormulaBox>{"12 + 8 = 20"}</FormulaBox>
          <FormulaBox>{"20 \\div 4 = 5"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'חשב: 4 - (-10)',
      correctAnswer: '14',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>חיסור מספר שלילי זה בעצם חיבור:</p>
          <FormulaBox>{"4 - (-10) = 4 + 10 = 14"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'חשב: (-7) × (-3)',
      correctAnswer: '21',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>כפל שני מספרים שליליים נותן תוצאה חיובית:</p>
          <FormulaBox>{"(-7) \\times (-3) = 21"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'חשב: 18 ÷ ((-2) - 4) + 5',
      correctAnswer: '2',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נתחיל בסוגריים:</p>
          <FormulaBox>{"(-2) - 4 = -6"}</FormulaBox>
          <p>עכשיו החילוק:</p>
          <FormulaBox>{"18 \\div (-6) = -3"}</FormulaBox>
          <p>ולבסוף החיבור:</p>
          <FormulaBox>{"-3 + 5 = 2"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex6',
      question: 'חשב: -2 × ((-5) + 3)² - 7',
      correctAnswer: '-15',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נתחיל בסוגריים:</p>
          <FormulaBox>{"(-5) + 3 = -2"}</FormulaBox>
          <p>עכשיו החזקה:</p>
          <FormulaBox>{"(-2)^2 = 4"}</FormulaBox>
          <p>הכפל:</p>
          <FormulaBox>{"-2 \\times 4 = -8"}</FormulaBox>
          <p>ולבסוף החיסור:</p>
          <FormulaBox>{"-8 - 7 = -15"}</FormulaBox>
        </div>
      )
    }
  ];
  // שאלות בחירה מרובה - להשלמה עם תוכן אמיתי
  const quizQuestions = [
    {
      id: 'q1',
      question: 'מה התוצאה של: 7 + 3 × 2',
      options: [
        '20',
        '13',
        '16',
        '10'
      ],
      correctAnswer: '13',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <p>לפי סדר פעולות החשבון, כפל קודם לחיבור:</p>
          <FormulaBox>{"3 \\times 2 = 6"}</FormulaBox>
          <FormulaBox>{"7 + 6 = 13"}</FormulaBox>
          <p>אם היינו מחברים קודם (טעות!): 7 + 3 = 10, 10 × 2 = 20</p>
        </div>
      )
    },
    {
      id: 'q2',
      question: 'מה התוצאה של: 20 - (4 + 6 ÷ 2) × 3',
      options: [
        '-1',
        '7',
        '1',
        '14'
      ],
      correctAnswer: '-1',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <p>נפתור שלב אחר שלב:</p>
          <p>1. בתוך הסוגריים: 6 ÷ 2 = 3</p>
          <p>2. עכשיו הסוגריים: (4 + 3) = 7</p>
          <p>3. הכפל: 7 × 3 = 21</p>
          <p>4. החיסור: 20 - 21 = -1</p>
        </div>
      )
    },
    {
      id: 'q3',
      question: 'מה ההבדל בין (-3)² ל-3²?',
      options: [
        'אין הבדל, שניהם שווים 9',
        '(-3)² = 9, -3² = -9',
        '(-3)² = -9, -3² = 9',
        'שניהם שווים -9'
      ],
      correctAnswer: '(-3)² = 9, -3² = -9',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <p>השוני הוא בסוגריים:</p>
          <FormulaBox>{"(-3)^2 = (-3) \\times (-3) = 9"}</FormulaBox>
          <p>החזקה פועלת על כל מה שבסוגריים, כולל המינוס.</p>
          <FormulaBox>{"-3^2 = -(3 \\times 3) = -9"}</FormulaBox>
          <p>החזקה פועלת רק על ה-3, המינוס "מחכה" בחוץ.</p>
        </div>
      )
    }
  ];

  return (
    <LessonLayout 
      lessonId={lessonId} 
      lessonTitle="MAHAT - נושא 1.1: יסודות החשבון" 
      nextLessonPath={nextLessonPath}
    >      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">יסודות החשבון - חוקי התנועה של המתמטיקה</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">ברוכים הבאים לשיעור הראשון!</h3>
          <p className="text-gray-700 leading-relaxed">
            בשיעור זה נניח את היסודות החשובים ביותר להצלחה בקורס. נלמד את "חוקי התנועה" של המתמטיקה - 
            סדר פעולות החשבון, וכיצד לעבוד בביטחון עם מספרים חיוביים ושליליים. שליטה מלאה בנושאים אלה 
            תהפוך את הנושאים הבאים להרבה יותר פשוטים. בואו נתחיל!
          </p>
        </div>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>שליטה מלאה בסדר פעולות החשבון:</strong> נלמד את סדר העדיפויות בין חיבור, חיסור, כפל, חילוק, חזקות וסוגריים</li>
            <li><strong>עבודה עם מספרים מכוונים:</strong> נבין איך לחבר, לחסר, להכפיל ולחלק מספרים חיוביים ושליליים ללא טעויות</li>
            <li><strong>בניית ביטחון:</strong> נפתור מגוון רחב של תרגילים כדי לבסס את ההבנה ולצבור ביטחון</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: סדר פעולות החשבון - חוקי המשחק של המתמטיקה</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">למה חשוב סדר פעולות?</h4>
            <p className="text-gray-700 mb-3">
              דמיינו שאתם בונים משהו מלגו לפי הוראות. אם לא תעקבו אחרי הסדר הנכון, תקבלו תוצאה שונה לגמרי. 
              במתמטיקה זה בדיוק אותו הדבר. סדר פעולות החשבון מבטיח שכולם, בכל מקום בעולם, יגיעו לאותה תשובה 
              עבור אותו תרגיל.
            </p>
            <h4 className="font-semibold mb-2">הסדר המוסכם הוא:</h4>
            <ol className="list-decimal list-inside space-y-2 mr-4">
              <li><strong>סוגריים ( ) [ ] { }</strong> - העדיפות הגבוהה ביותר. תמיד מתחילים בחישוב מה שנמצא <em>בתוך</em> הסוגריים</li>
              <li><strong>חזקות ושורשים (^, √)</strong> - מיד אחרי הסוגריים, מטפלים בכל החזקות והשורשים בתרגיל</li>
              <li><strong>כפל וחילוק (×, ÷)</strong> - לשתי הפעולות האלה יש <strong>אותה רמת עדיפות</strong>. מבצעים אותן לפי הסדר שבו הן מופיעות בתרגיל, <strong>משמאל לימין</strong></li>
              <li><strong>חיבור וחיסור (+, -)</strong> - העדיפות הנמוכה ביותר. גם להן יש אותה רמת עדיפות. מבצעים אותן לפי הסדר, משמאל לימין</li>
            </ol>
            <p className="mt-2 text-sm text-gray-600">זכרו: <strong>פסחוס</strong> - פ-ס-ח-ו-ס (פסוק, ס-וגריים, ח-זקות, ו-כפל חילוק, ס-חיבור חיסור)</p>
          </div>

          <div className="space-y-4">
            <div className="border-r-4 border-green-300 pr-4">
              <p><strong>דוגמה 1: תרגיל פשוט</strong></p>
              <FormulaBox>{"7 + 3 \\times 2"}</FormulaBox>
              <p className="text-red-600"><strong>טעות נפוצה:</strong> לחבר 7+3 קודם. 10 × 2 = 20. לא נכון!</p>
              <p className="text-green-600"><strong>הדרך הנכונה:</strong> כפל קודם לחיבור.</p>
              <p>1. <FormulaBox inline>{"3 \\times 2 = 6"}</FormulaBox></p>
              <p>2. <FormulaBox inline>{"7 + 6 = 13"}</FormulaBox></p>
              <p><strong>התשובה הנכונה היא 13.</strong></p>
            </div>

            <div className="border-r-4 border-green-300 pr-4">
              <p><strong>דוגמה 2: תרגיל משולב</strong></p>
              <FormulaBox>{"20 - (4 + 6 \\div 2) \\times 3"}</FormulaBox>
              <p className="text-gray-700">ניגש לזה צעד אחר צעד:</p>
              <p>1. <strong>סוגריים:</strong> בתוך הסוגריים, יש חיבור וחילוק. חילוק קודם!</p>
              <p className="mr-4"><FormulaBox inline>{"6 \\div 2 = 3"}</FormulaBox></p>
              <p className="mr-4">עכשיו הסוגריים נראים כך: <FormulaBox inline>{"(4 + 3) = 7"}</FormulaBox></p>
              <p>2. התרגיל המעודכן הוא: <FormulaBox inline>{"20 - 7 \\times 3"}</FormulaBox></p>
              <p>3. <strong>כפל:</strong> <FormulaBox inline>{"7 \\times 3 = 21"}</FormulaBox></p>
              <p>4. התרגיל המעודכן הוא: <FormulaBox inline>{"20 - 21"}</FormulaBox></p>
              <p>5. <strong>חיסור:</strong> <FormulaBox inline>{"20 - 21 = -1"}</FormulaBox></p>
              <p><strong>התשובה הנכונה היא -1.</strong></p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="text-sm"><strong>טיפ של מקצוענים:</strong> כשאתם רואים תרגיל ארוך, אל תנסו לפתור אותו בראש. כתבו כל שלב על דף חדש. זה מונע טעויות של חוסר תשומת לב.</p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: עבודה עם מספרים שליליים</h3>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">מספרים שליליים הם חלק בלתי נפרד מאלגברה</h4>
            <p className="text-gray-700 mb-3">הכללים פשוטים, אבל דורשים תרגול.</p>
            
            <h5 className="font-semibold mb-2">כללי חיבור וחיסור:</h5>
            <ul className="list-disc list-inside space-y-2 mr-4 mb-4">
              <li><strong>חיבור מספר שלילי</strong> זה פשוט <strong>חיסור</strong>. חשבו על זה כ"להוסיף חוב".</li>
              <li className="mr-4"><FormulaBox inline>{"10 + (-4) = 10 - 4 = 6"}</FormulaBox></li>
              <li><strong>חיסור מספר שלילי</strong> זה בעצם <strong>חיבור</strong>. חשבו על זה כ"לבטל חוב".</li>
              <li className="mr-4"><FormulaBox inline>{"8 - (-5) = 8 + 5 = 13"}</FormulaBox></li>
            </ul>

            <h5 className="font-semibold mb-2">כללי כפל וחילוק ("חוקי הסימנים"):</h5>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>אם הסימנים <strong>זהים</strong> (שניהם + או שניהם -), התוצאה תמיד <strong>חיובית (+)</strong>.</li>
              <li className="mr-4"><FormulaBox inline>{"(-5) \\times (-3) = 15"}</FormulaBox></li>
              <li>אם הסימנים <strong>שונים</strong> (אחד + ואחד -), התוצאה תמיד <strong>שלילית (-)</strong>.</li>
              <li className="mr-4"><FormulaBox inline>{"(-5) \\times 3 = -15"}</FormulaBox></li>
            </ul>
          </div>

          <div className="bg-red-100 p-4 rounded-lg border-r-4 border-red-500">
            <h4 className="font-semibold text-red-700 mb-2">אזהרה - טעות נפוצה:</h4>
            <p>ההבדל בין <FormulaBox inline>{"(-3)^2"}</FormulaBox> ל-<FormulaBox inline>{"-3^2"}</FormulaBox>:</p>
            <ul className="list-disc list-inside space-y-2 mr-4 mt-2">
              <li><FormulaBox inline>{"(-3)^2 = (-3) \\times (-3) = 9"}</FormulaBox> (החזקה פועלת על כל מה שבסוגריים, כולל המינוס)</li>
              <li><FormulaBox inline>{"-3^2 = -(3 \\times 3) = -9"}</FormulaBox> (החזקה פועלת רק על ה-3, המינוס "מחכה" בחוץ)</li>
            </ul>
            <p className="font-semibold mt-2 text-red-700">הסוגריים הם קריטיים!</p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">תרגול מעשי</h3>
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <Exercise key={exercise.id} {...exercise} />
            ))}
          </div>
        </section>        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">נקודות מפתח לזכירה:</h4>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>סדר פעולות:</strong> סוגריים → חזקות → כפל/חילוק → חיבור/חיסור (זכרו: פסחוס)</li>
              <li><strong>כפל וחילוק:</strong> מבצעים משמאל לימין לפי הסדר שבו הם מופיעים</li>
              <li><strong>חיבור וחיסור:</strong> גם כן מבצעים משמאל לימין</li>
              <li><strong>מספרים שליליים:</strong> חיבור מספר שלילי = חיסור, חיסור מספר שלילי = חיבור</li>
              <li><strong>כפל וחילוק בסימנים:</strong> סימנים זהים = חיובי, סימנים שונים = שלילי</li>
              <li><strong>חזקות:</strong> שימו לב להבדל בין (-3)² ל-3²</li>
              <li><strong>תמיד כתבו כל שלב:</strong> זה מונע טעויות ומבהיר את החשיבה</li>
            </ul>
            
            <div className="mt-4 p-3 bg-blue-50 rounded">
              <p className="text-sm font-medium text-blue-800">
                <strong>זכרו:</strong> המטרה היא לא לזכור את התשובות בעל פה, אלא להבין את הכללים ולהחיל אותם בביטחון. 
                תרגול קבוע יהפוך את הכללים האלה לטבעיים.
              </p>
            </div>
          </div>
        </section>        <Quiz 
          questions={quizQuestions} 
          lessonId={lessonId}
          title="בחן את עצמך - יסודות החשבון"        />
      </div>
    </LessonLayout>
  );
};

export default Mahat11Basics;
