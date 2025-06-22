import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';


const Mahat13PowersBasic = () => {
  const lessonId = 'mahat-1-3-powers-basic';
  const nextLessonPath = '/lessons/mahat-1-4-algebraic-expressions';  const exercises = [
    {
      id: 'ex1',
      question: (
        <div>
          חשב: <FormulaBox inline>{"3^4"}</FormulaBox>
        </div>
      ),
      correctAnswer: '81',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>3⁴ אומר 3 כפול עצמו 4 פעמים:</p>
          <FormulaBox>{"3^4 = 3 \\times 3 \\times 3 \\times 3"}</FormulaBox>
          <FormulaBox>{"= 9 \\times 3 \\times 3"}</FormulaBox>
          <FormulaBox>{"= 27 \\times 3 = 81"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex2',
      question: (
        <div>
          חשב: <FormulaBox inline>{"\\sqrt{64}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '8',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>√64 זה המספר שכאשר מעלים אותו בריבוע מקבלים 64:</p>
          <FormulaBox>{"\\sqrt{64} = 8 \\text{ כי } 8^2 = 8 \\times 8 = 64"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex3',
      question: (
        <div>
          חשב: <FormulaBox inline>{"2^3 \\times 2^2"}</FormulaBox>
        </div>
      ),
      correctAnswer: '32',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>כשמכפילים חזקות עם אותו בסיס, מחברים את המעריכים:</p>
          <FormulaBox>{"2^3 \\times 2^2 = 2^{3+2} = 2^5"}</FormulaBox>
          <FormulaBox>{"2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex4',
      question: (
        <div>
          חשב: <FormulaBox inline>{"5^0"}</FormulaBox>
        </div>
      ),
      correctAnswer: '1',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>כל מספר שונה מאפס בחזקה אפס שווה ל-1:</p>
          <FormulaBox>{"5^0 = 1"}</FormulaBox>
          <p>זה כלל יסודי בחזקות!</p>
        </div>
      )
    },    {
      id: 'ex5',
      question: (
        <div>
          חשב: <FormulaBox inline>{"6^2 \\div 6^1"}</FormulaBox>
        </div>
      ),
      correctAnswer: '6',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>כשמחלקים חזקות עם אותו בסיס, מחסרים את המעריכים:</p>
          <FormulaBox>{"6^2 \\div 6^1 = 6^{2-1} = 6^1 = 6"}</FormulaBox>
          <p>או בדרך הישירה:</p>
          <FormulaBox>{"\\frac{6^2}{6^1} = \\frac{36}{6} = 6"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex6',
      question: (
        <div>
          חשב: <FormulaBox inline>{"(\\sqrt{9})^2"}</FormulaBox>
        </div>
      ),
      correctAnswer: '9',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>שורש ריבועי וחזקה שנייה מבטלים אחד את השני:</p>
          <FormulaBox>{"(\\sqrt{9})^2 = 9"}</FormulaBox>
          <p>או בפירוט:</p>
          <FormulaBox>{"\\sqrt{9} = 3, \\text{ אז } (\\sqrt{9})^2 = 3^2 = 9"}</FormulaBox>
        </div>
      )
    }
  ];
  const quizData = {
    title: 'בחן את עצמך - חוקי חזקות ושורשים',
    questions: [      {
        id: 'q1',
        question: (
          <div>
            מה התוצאה של <FormulaBox inline>{"4^3"}</FormulaBox>?
          </div>
        ),
        options: [
          { label: <FormulaBox inline>{"12"}</FormulaBox>, value: '12' },
          { label: <FormulaBox inline>{"16"}</FormulaBox>, value: '16' },
          { label: <FormulaBox inline>{"64"}</FormulaBox>, value: '64' },
          { label: <FormulaBox inline>{"81"}</FormulaBox>, value: '81' }
        ],
        correctAnswer: '64',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>4³ אומר 4 כפול עצמו 3 פעמים:</p>
            <FormulaBox>{"4^3 = 4 \\times 4 \\times 4 = 16 \\times 4 = 64"}</FormulaBox>
          </div>
        )
      },      {
        id: 'q2',
        question: (
          <div>
            מה השורש הריבועי של <FormulaBox inline>{"49"}</FormulaBox>?
          </div>
        ),
        options: [
          { label: <FormulaBox inline>{"6"}</FormulaBox>, value: '6' },
          { label: <FormulaBox inline>{"7"}</FormulaBox>, value: '7' },
          { label: <FormulaBox inline>{"8"}</FormulaBox>, value: '8' },
          { label: <FormulaBox inline>{"9"}</FormulaBox>, value: '9' }
        ],
        correctAnswer: '7',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>השורש הריבועי של 49 הוא המספר שכאשר מעלים אותו בריבוע מקבלים 49:</p>
            <FormulaBox>{"\\sqrt{49} = 7 \\text{ כי } 7^2 = 7 \\times 7 = 49"}</FormulaBox>
          </div>
        )
      },      {
        id: 'q3',
        question: (
          <div>
            מה התוצאה של <FormulaBox inline>{"3^2 \\times 3^3"}</FormulaBox>?
          </div>
        ),
        options: [
          { label: <FormulaBox inline>{"3^5"}</FormulaBox>, value: '3⁵' },
          { label: <FormulaBox inline>{"3^6"}</FormulaBox>, value: '3⁶' },
          { label: <FormulaBox inline>{"6^5"}</FormulaBox>, value: '6⁵' },
          { label: <FormulaBox inline>{"9^5"}</FormulaBox>, value: '9⁵' }
        ],
        correctAnswer: '3⁵',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>כשמכפילים חזקות עם אותו בסיס, מחברים את המעריכים:</p>
            <FormulaBox>{"3^2 \\times 3^3 = 3^{2+3} = 3^5"}</FormulaBox>
            <p>אם נרצה לחשב: 3⁵ = 243</p>
          </div>
        )
      }
    ]
  };

  return (    <LessonLayout
      lessonId={lessonId}
      title="חוקי חזקות ושורשים - כלים חזקים לחישוב"
      description="הכרת חוקי חזקות בסיסיים, שורשים ריבועיים, וקשרים ביניהם"
      nextLessonPath={nextLessonPath}
    >
      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">חוקי חזקות ושורשים - כלים חזקים שיפשטו לנו חישובים רבים</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">ברוכים הבאים לשיעור 1.3!</h3>
          <p className="text-gray-700 leading-relaxed">
            אחרי שלמדנו את סדר הפעולות ושברים, הגיע הזמן להכיר כלים מתקדמים יותר - חזקות ושורשים. 
            אלה הם "מקצרי דרך" מתמטיים שחוסכים לנו זמן רב ומאפשרים לנו לפתור בעיות מורכבות בקלות. 
            בנוסף, הם הבסיס לנוסחאות חשובות שנפגוש בהמשך הקורס.
          </p>
        </div>

      {/* מטרות השיעור */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li><strong>הבנת מושג החזקה:</strong> נלמד מה זה בסיס, מעריך, ואיך לחשב חזקות</li>
          <li><strong>שליטה בחוקי חזקות בסיסיים:</strong> כפל, חילוק וחזקה של חזקה</li>
          <li><strong>הכרת השורש הריבועי:</strong> מהו שורש ואיך הוא קשור לחזקות</li>
          <li><strong>יישום מעשי:</strong> פתרון תרגילים שיבססו את הידע</li>
        </ul>
      </section>

      {/* חלק 1: מושג החזקה */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: מהי חזקה? - קיצור דרך לכפל חוזר</h3>
        
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">חזקה היא כפל חוזר של מספר בעצמו</h4>
          <p className="text-gray-700 mb-3">במקום לכתוב 3×3×3×3, נכתוב 3⁴. זה חוסך מקום וזמן!</p>
          
          <div className="mt-3 space-y-2">
            <FormulaBox>{"a^n = \\underbrace{a \\times a \\times a \\times \\ldots \\times a}_{n \\text{ פעמים}}"}</FormulaBox>
            <ul className="list-disc list-inside space-y-1 mr-4 text-sm">
              <li><strong>a</strong> נקרא <strong>הבסיס</strong> - המספר שאנחנו כופלים</li>
              <li><strong>n</strong> נקרא <strong>המעריך</strong> - כמה פעמים נכפיל</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-r-4 border-green-300 pr-4">
            <p><strong>דוגמאות פשוטות:</strong></p>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><FormulaBox inline>{"2^3 = 2 \\times 2 \\times 2 = 8"}</FormulaBox></li>
              <li><FormulaBox inline>{"5^2 = 5 \\times 5 = 25"}</FormulaBox></li>
              <li><FormulaBox inline>{"4^1 = 4"}</FormulaBox> (כל מספר בחזקה 1 הוא עצמו)</li>
              <li><FormulaBox inline>{"7^0 = 1"}</FormulaBox> (כל מספר שונה מאפס בחזקה 0 הוא 1)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* חלק 2: חוקי חזקות */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: חוקי חזקות בסיסיים - חוקי המשחק</h3>
        
        <div className="space-y-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-red-700">כלל 1: כפל חזקות עם אותו בסיס</h4>
            <FormulaBox>{"a^m \\times a^n = a^{m+n}"}</FormulaBox>
            <p className="text-gray-700 mt-2">כשמכפילים חזקות עם אותו בסיס, <strong>מחברים</strong> את המעריכים.</p>
            
            <div className="mt-3 p-3 bg-white rounded border-r-4 border-red-300">
              <p><strong>דוגמה:</strong> <FormulaBox inline>{"3^2 \\times 3^4 = 3^{2+4} = 3^6"}</FormulaBox></p>
              <p className="text-sm text-gray-600">למה זה עובד? <FormulaBox inline>{"3^2 \\times 3^4 = (3 \\times 3) \\times (3 \\times 3 \\times 3 \\times 3) = 3^6"}</FormulaBox></p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-700">כלל 2: חילוק חזקות עם אותו בסיס</h4>
            <FormulaBox>{"\\frac{a^m}{a^n} = a^{m-n}"}</FormulaBox>
            <p className="text-gray-700 mt-2">כשמחלקים חזקות עם אותו בסיס, <strong>מחסרים</strong> את המעריכים.</p>
            
            <div className="mt-3 p-3 bg-white rounded border-r-4 border-blue-300">
              <p><strong>דוגמה:</strong> <FormulaBox inline>{"\\frac{5^6}{5^2} = 5^{6-2} = 5^4"}</FormulaBox></p>
              <p className="text-sm text-gray-600">למה זה עובד? אנחנו בעצם מבטלים 2 חמישיות מהמונה והמכנה</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-yellow-700">כלל 3: חזקה של חזקה</h4>
            <FormulaBox>{"(a^m)^n = a^{m \\times n}"}</FormulaBox>
            <p className="text-gray-700 mt-2">כשמעלים חזקה לחזקה, <strong>מכפילים</strong> את המעריכים.</p>
            
            <div className="mt-3 p-3 bg-white rounded border-r-4 border-yellow-300">
              <p><strong>דוגמה:</strong> <FormulaBox inline>{"(2^3)^2 = 2^{3 \\times 2} = 2^6"}</FormulaBox></p>
              <p className="text-sm text-gray-600">למה זה עובד? <FormulaBox inline>{"(2^3)^2 = 2^3 \\times 2^3 = 2^{3+3} = 2^6"}</FormulaBox></p>
            </div>
          </div>
        </div>
      </section>

      {/* חלק 3: שורש ריבועי */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 3: שורש ריבועי - הפעולה ההפוכה לחזקה שנייה</h3>
        
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">מהו שורש ריבועי?</h4>
          <p className="text-gray-700 mb-3">
            השורש הריבועי של מספר a הוא המספר החיובי שכאשר מעלים אותו בריבוע מקבלים את a.
          </p>
          
          <FormulaBox>{"\\sqrt{a} = b \\text{ אם ורק אם } b^2 = a \\text{ (כאשר } b \\geq 0 \\text{)}"}</FormulaBox>
          
          <div className="mt-4 space-y-2">
            <p><strong>דוגמאות נפוצות לשינון:</strong></p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><FormulaBox inline>{"\\sqrt{1} = 1"}</FormulaBox></div>
              <div><FormulaBox inline>{"\\sqrt{4} = 2"}</FormulaBox></div>
              <div><FormulaBox inline>{"\\sqrt{9} = 3"}</FormulaBox></div>
              <div><FormulaBox inline>{"\\sqrt{16} = 4"}</FormulaBox></div>
              <div><FormulaBox inline>{"\\sqrt{25} = 5"}</FormulaBox></div>
              <div><FormulaBox inline>{"\\sqrt{36} = 6"}</FormulaBox></div>
              <div><FormulaBox inline>{"\\sqrt{49} = 7"}</FormulaBox></div>
              <div><FormulaBox inline>{"\\sqrt{64} = 8"}</FormulaBox></div>
              <div><FormulaBox inline>{"\\sqrt{81} = 9"}</FormulaBox></div>
              <div><FormulaBox inline>{"\\sqrt{100} = 10"}</FormulaBox></div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">קשר בין שורש לחזקה</h4>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><FormulaBox inline>{"(\\sqrt{a})^2 = a"}</FormulaBox> (שורש וחזקה שנייה מבטלים אחד את השני)</li>
            <li><FormulaBox inline>{"\\sqrt{a^2} = |a|"}</FormulaBox> (הערך המוחלט של a)</li>
            <li><strong>תמיד זכרו:</strong> השורש הריבועי של מספר חיובי הוא תמיד חיובי!</li>
          </ul>
        </div>
      </section>      {/* תרגילים */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">תרגול מעשי</h3>
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

      {/* בחן את עצמך */}
      <section className="mb-8">
        <Quiz
          quizId={`${lessonId}_quiz`}
          title={quizData.title}
          questions={quizData.questions}
          lessonId={lessonId}
        />
      </section>

      {/* סיכום */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום שיעור 1.3</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold mb-2">מצוין! התוודענו לחוקי החזקות והשורשים.</h4>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>חזקות מקצרות כתיבה</strong> של כפל חוזר ומאפשרות חישובים מהירים יותר</li>
            <li><strong>חוקי החזקות:</strong> כפל = חיבור מעריכים, חילוק = חיסור מעריכים, חזקה של חזקה = כפל מעריכים</li>
            <li><strong>השורש הריבועי</strong> הוא הפעולה ההפוכה להעלאה בריבוע</li>
            <li><strong>שינון השורשים הבסיסיים</strong> (1-10) יחסוך זמן במבחנים</li>
            <li><strong>קשר בין שורש לחזקה:</strong> <FormulaBox inline>{"(\\sqrt{a})^2 = a"}</FormulaBox></li>
          </ul>
          
          <div className="mt-4 p-3 bg-blue-50 rounded">
            <p className="text-sm font-medium text-blue-800">
              <strong>הכנה לשיעור הבא:</strong> בשיעור 1.4 נלמד על ביטויים אלגבריים - איך להשתמש באותיות במתמטיקה ולבצע פעולות עליהן.
            </p>
          </div>        </div>
      </section>
      </div>
    </LessonLayout>
  );
};

export default Mahat13PowersBasic;
