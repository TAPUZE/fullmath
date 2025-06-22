import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';


const Mahat12Fractions = () => {
  const lessonId = 'mahat-1-2-fractions';
  const nextLessonPath = '/lessons/mahat-1-3-powers-basic';
  const exercises = [    {
      id: 'ex1',
      question: (
        <div>
          צמצם את השבר: <FormulaBox inline>{"\\frac{45}{60}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '3/4',
      placeholder: 'הכנס תשובה בצורה a/b',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נמצא את המחלק המשותף הגדול ביותר של 45 ו-60:</p>
          <p>45 = 3² × 5, 60 = 2² × 3 × 5</p>
          <p>המחלק המשותף הגדול ביותר הוא 15</p>
          <FormulaBox>{"\\frac{45}{60} = \\frac{45 \\div 15}{60 \\div 15} = \\frac{3}{4}"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex2',
      question: (
        <div>
          חשב: <FormulaBox inline>{"\\frac{5}{12} \\times \\frac{8}{15}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '2/9',
      placeholder: 'הכנס תשובה בצורה a/b',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נכפיל מונה במונה ומכנה במכנה:</p>
          <FormulaBox>{"\\frac{5}{12} \\times \\frac{8}{15} = \\frac{5 \\times 8}{12 \\times 15} = \\frac{40}{180}"}</FormulaBox>
          <p>נצמצם ב-20:</p>
          <FormulaBox>{"\\frac{40}{180} = \\frac{40 \\div 20}{180 \\div 20} = \\frac{2}{9}"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex3',
      question: (
        <div>
          חשב: <FormulaBox inline>{"\\frac{7}{9} \\div \\frac{14}{27}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '3/2',
      placeholder: 'הכנס תשובה בצורה a/b',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>חילוק שברים = כפל בהופכי:</p>
          <FormulaBox>{"\\frac{7}{9} \\div \\frac{14}{27} = \\frac{7}{9} \\times \\frac{27}{14}"}</FormulaBox>
          <FormulaBox>{"= \\frac{7 \\times 27}{9 \\times 14} = \\frac{189}{126}"}</FormulaBox>
          <p>נצמצם ב-63:</p>
          <FormulaBox>{"\\frac{189}{126} = \\frac{3}{2}"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex4',
      question: (
        <div>
          חשב: <FormulaBox inline>{"\\frac{5}{12} - \\frac{1}{8}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '7/24',
      placeholder: 'הכנס תשובה בצורה a/b',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נמצא מכנה משותף לביטוי 12 ו-8. המכנה המשותף הקטן ביותר הוא 24:</p>
          <FormulaBox>{"\\frac{5}{12} = \\frac{5 \\times 2}{12 \\times 2} = \\frac{10}{24}"}</FormulaBox>
          <FormulaBox>{"\\frac{1}{8} = \\frac{1 \\times 3}{8 \\times 3} = \\frac{3}{24}"}</FormulaBox>
          <FormulaBox>{"\\frac{10}{24} - \\frac{3}{24} = \\frac{7}{24}"}</FormulaBox>
        </div>
      )
    },    {
      id: 'ex5',
      question: (
        <div>
          חשב: <FormulaBox inline>{"2 + \\frac{1}{3} + \\frac{1}{4}"}</FormulaBox>
        </div>
      ),
      correctAnswer: '31/12',
      placeholder: 'הכנס תשובה בצורה a/b',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נמיר את 2 לשבר ונמצא מכנה משותף:</p>
          <FormulaBox>{"2 = \\frac{24}{12}, \\frac{1}{3} = \\frac{4}{12}, \\frac{1}{4} = \\frac{3}{12}"}</FormulaBox>
          <FormulaBox>{"\\frac{24}{12} + \\frac{4}{12} + \\frac{3}{12} = \\frac{31}{12}"}</FormulaBox>
        </div>
      )
    }
  ];
  const quizData = {
    title: 'בחן את עצמך - שברים ושימוש במחשבון',
    questions: [      {
        id: 'q1',
        question: (
          <div>
            מהו המכנה המשותף הקטן ביותר של <FormulaBox inline>{"\\frac{1}{8}"}</FormulaBox> ו-<FormulaBox inline>{"\\frac{5}{6}"}</FormulaBox>?
          </div>
        ),
        options: [
          {
            label: <FormulaBox inline>{"48"}</FormulaBox>,
            value: '48'
          },
          {
            label: <FormulaBox inline>{"14"}</FormulaBox>,
            value: '14'
          },
          {
            label: <FormulaBox inline>{"24"}</FormulaBox>,
            value: '24'
          },
          {
            label: <FormulaBox inline>{"6"}</FormulaBox>,
            value: '6'
          }
        ],
        correctAnswer: '24',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>נמצא את הכפולות של 8 ו-6:</p>
            <p>כפולות של 8: 8, 16, 24, 32...</p>
            <p>כפולות של 6: 6, 12, 18, 24, 30...</p>
            <p>המכנה המשותף הקטן ביותר הוא 24</p>
          </div>
        )
      },      {
        id: 'q2',
        question: (
          <div>
            התוצאה של <FormulaBox inline>{"4 \\times \\left(\\frac{1}{2} + \\frac{1}{4}\\right)"}</FormulaBox> היא:
          </div>
        ),
        options: [
          {
            label: <FormulaBox inline>{"3"}</FormulaBox>,
            value: '3'
          },
          {
            label: <FormulaBox inline>{"2.5"}</FormulaBox>,
            value: '2.5'
          },
          {
            label: <FormulaBox inline>{"4"}</FormulaBox>,
            value: '4'
          },
          {
            label: <FormulaBox inline>{"1"}</FormulaBox>,
            value: '1'
          }
        ],
        correctAnswer: '3',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>קודם נחשב את הסוגריים:</p>
            <FormulaBox>{"\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}"}</FormulaBox>
            <p>עכשיו נכפיל:</p>
            <FormulaBox>{"4 \\times \\frac{3}{4} = \\frac{4 \\times 3}{4} = \\frac{12}{4} = 3"}</FormulaBox>
          </div>
        )
      },      {
        id: 'q3',
        question: (
          <div>
            סוחר מכר <FormulaBox inline>{"\\frac{3}{5}"}</FormulaBox> מהסחורה שלו. איזה חלק מהסחורה נשאר לו?
          </div>
        ),
        options: [
          {
            label: <FormulaBox inline>{"\\frac{1}{5}"}</FormulaBox>,
            value: '1/5'
          },
          {
            label: <FormulaBox inline>{"\\frac{3}{5}"}</FormulaBox>,
            value: '3/5'
          },
          {
            label: <FormulaBox inline>{"\\frac{2}{5}"}</FormulaBox>,
            value: '2/5'
          },
          {
            label: <FormulaBox inline>{"\\frac{5}{3}"}</FormulaBox>,
            value: '5/3'
          }
        ],
        correctAnswer: '2/5',
        explanation: (
          <div>
            <p><strong>הסבר:</strong></p>
            <p>השלם הוא 5/5. אם מכר 3/5, נשאר לו:</p>
            <FormulaBox>{"\\frac{5}{5} - \\frac{3}{5} = \\frac{2}{5}"}</FormulaBox>
          </div>
        )
      }
    ]
  };

  return (    <LessonLayout
      lessonId={lessonId}
      title="שברים, עשרוניים ושימוש במחשבון"
      description="הבנת מבנה השבר, ביצוע פעולות בשברים, שימוש במחשבון לחישובי שברים ועיגול תוצאות"
      nextLessonPath={nextLessonPath}
    >
      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">שברים, עשרוניים ושימוש במחשבון</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">ברוכים הבאים לשיעור 1.2!</h3>
          <p className="text-gray-700 leading-relaxed">
            אחרי שביססנו את סדר הפעולות, הגיע הזמן להתמודד עם שברים. שברים נמצאים בכל מקום במתמטיקה ובהנדסה. 
            בשיעור זה נלמד איך לעבוד איתם ביעילות, איך להמיר אותם למספרים עשרוניים, וכיצד להשתמש במחשבון 
            ככלי עזר חכם.
          </p>
        </div>

      {/* מטרות השיעור */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
        <ul className="list-disc list-inside space-y-2 mr-4">
          <li><strong>הבנת מבנה השבר:</strong> נבין את המושגים מונה, מכנה, צמצום והרחבה</li>
          <li><strong>ביצוע פעולות בשברים:</strong> נלמד לחבר, לחסר, להכפיל ולחלק שברים פשוטים</li>
          <li><strong>שימוש במחשבון:</strong> נלמד כיצד להשתמש במחשבון לחישובי שברים ועיגול תוצאות</li>
        </ul>
      </section>

      {/* חלק 1: מהו שבר */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: מהו שבר? צמצום והרחבה</h3>
        
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">שבר הוא דרך לייצג חלק מתוך שלם</h4>
          <p className="text-gray-700 mb-3">הוא מורכב משני חלקים:</p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>מונה:</strong> המספר העליון, המציין כמה חלקים <em>לקחנו</em></li>
            <li><strong>מכנה:</strong> המספר התחתון, המציין לכמה חלקים <em>חילקנו את השלם</em>. המכנה לעולם לא יכול להיות אפס</li>
          </ul>
          <div className="mt-3">
            <FormulaBox>{"\\frac{\\text{מונה}}{\\text{מכנה}} = \\frac{a}{b} \\text{ כאשר } b \\neq 0"}</FormulaBox>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">צמצום והרחבה</h4>
          <p className="text-gray-700 mb-3">
            ערכו של שבר לא משתנה אם מכפילים או מחלקים את המונה והמכנה שלו באותו מספר.
          </p>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>הרחבה:</strong> הכפלת המונה והמכנה באותו מספר. שימושי כדי למצוא <strong>מכנה משותף</strong>.</li>
            <li className="mr-4">דוגמה: <FormulaBox inline>{"\\frac{2}{3} = \\frac{2 \\times 5}{3 \\times 5} = \\frac{10}{15}"}</FormulaBox></li>
            <li><strong>צמצום:</strong> חלוקת המונה והמכנה במחלק המשותף הגדול ביותר שלהם. זה מפשט את השבר.</li>
            <li className="mr-4">דוגמה: <FormulaBox inline>{"\\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}"}</FormulaBox> (המחלק המשותף הגדול ביותר הוא 6)</li>
          </ul>
        </div>
      </section>

      {/* חלק 2: פעולות בשברים */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: פעולות החשבון בשברים</h3>
        
        <div className="space-y-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-red-700">כפל וחילוק - הפעולות הקלות</h4>
            <ul className="list-disc list-inside space-y-3 mr-4">
              <li><strong>כפל שברים:</strong> פשוט מאוד - מכפילים מונה במונה, ומכנה במכנה.</li>
              <li className="mr-4"><FormulaBox inline>{"\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}"}</FormulaBox></li>
              <li className="mr-4">דוגמה: <FormulaBox inline>{"\\frac{2}{3} \\times \\frac{5}{7} = \\frac{2 \\times 5}{3 \\times 7} = \\frac{10}{21}"}</FormulaBox></li>
              <li><strong>חילוק שברים:</strong> הופכים את השבר השני (המחלק) ומבצעים כפל. "כפל בהופכי".</li>
              <li className="mr-4"><FormulaBox inline>{"\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}"}</FormulaBox></li>
              <li className="mr-4">דוגמה: <FormulaBox inline>{"\\frac{1}{2} \\div \\frac{3}{5} = \\frac{1}{2} \\times \\frac{5}{3} = \\frac{5}{6}"}</FormulaBox></li>
            </ul>
            
            <div className="bg-blue-50 p-3 rounded mt-3">
              <p className="text-sm font-medium text-blue-800">
                <strong>טיפ של מקצוענים:</strong> לפני שכופלים, בדקו אם אפשר לצמצם באלכסון! זה יחסוך לכם עבודה.
              </p>
              <p className="text-sm text-blue-700 mt-1">
                <FormulaBox inline>{"\\frac{4}{9} \\times \\frac{3}{8}"}</FormulaBox> אפשר לצמצם את 4 ו-8 ב-4, ואת 3 ו-9 ב-3. מקבלים: <FormulaBox inline>{"\\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}"}</FormulaBox>
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-green-700">חיבור וחיסור - צריך מכנה משותף!</h4>
            <p className="text-gray-700 mb-3">
              <strong>אי אפשר</strong> לחבר או לחסר שברים עם מכנים שונים. חייבים למצוא להם <strong>מכנה משותף</strong>, רצוי הקטן ביותר (LCM).
            </p>
            <ol className="list-decimal list-inside space-y-2 mr-4">
              <li><strong>מצא מכנה משותף:</strong> מצא את המספר הקטן ביותר שכל המכנים מתחלקים בו</li>
              <li><strong>הרחב את השברים:</strong> הרחב כל שבר כך שהמכנה שלו יהיה המכנה המשותף שמצאת</li>
              <li><strong>חבר/חסר את המונים:</strong> כעת, כשהמכנים זהים, פשוט חבר או חסר את המונים. המכנה נשאר כפי שהוא</li>
            </ol>
            
            <div className="mt-4 p-3 bg-white rounded border-r-4 border-green-300">
              <p><strong>דוגמה:</strong> <FormulaBox inline>{"\\frac{1}{6} + \\frac{3}{4}"}</FormulaBox></p>
              <p>1. <strong>מכנה משותף:</strong> המכנה המשותף הקטן ביותר של 6 ו-4 הוא 12</p>
              <p>2. <strong>הרחבה:</strong></p>
              <p className="mr-4">את <FormulaBox inline>{"\\frac{1}{6}"}</FormulaBox> נרחיב ב-2: <FormulaBox inline>{"\\frac{1 \\times 2}{6 \\times 2} = \\frac{2}{12}"}</FormulaBox></p>
              <p className="mr-4">את <FormulaBox inline>{"\\frac{3}{4}"}</FormulaBox> נרחיב ב-3: <FormulaBox inline>{"\\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}"}</FormulaBox></p>
              <p>3. <strong>חיבור:</strong> <FormulaBox inline>{"\\frac{2}{12} + \\frac{9}{12} = \\frac{11}{12}"}</FormulaBox></p>
            </div>
          </div>
        </div>
      </section>

      {/* חלק 3: שברים עשרוניים */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 3: שברים עשרוניים ושימוש במחשבון</h3>
        
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">הסבר</h4>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>שבר עשרוני:</strong> כל שבר פשוט ניתן להפוך לשבר עשרוני על ידי חילוק המונה במכנה. <FormulaBox inline>{"\\frac{3}{4} = 3 \\div 4 = 0.75"}</FormulaBox></li>
            <li><strong>ספרות משמעותיות ועיגול:</strong> במבחנים ובעבודה הנדסית, לרוב תתבקשו לעגל את התשובה. הכלל: אם הספרה הבאה היא 5 או יותר - מעגלים למעלה. אם היא 4 או פחות - משאירים כפי שהוא.</li>
            <li className="mr-4">דוגמה: עיגול 7.836 ל-2 ספרות אחרי הנקודה. מסתכלים על 6. מעגלים את 3 למעלה. התשובה: 7.84</li>
            <li><strong>שימוש במחשבון:</strong> למדו להשתמש בכפתור השברים במחשבון שלכם (לרוב נראה כמו a b/c). הוא יכול לחסוך זמן יקר</li>
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
      <section className="mb-8">        <Quiz
          quizId={`${lessonId}_quiz`}
          title={quizData.title}
          questions={quizData.questions}          lessonId={lessonId}
        />
      </section>

      {/* סיכום */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום שיעור 1.2</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold mb-2">מעולה! התמודדנו עם שברים בהצלחה.</h4>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>זכרו תמיד לחפש מכנה משותף</strong> בחיבור וחיסור שברים</li>
            <li><strong>השתמשו בטכניקת "כפל בהופכי"</strong> בחילוק שברים</li>
            <li><strong>צמצום שברים</strong> מפשט חישובים ונותן תוצאות יותר נקיות</li>
            <li><strong>תרגלו את השימוש במחשבון</strong> כדי שיהיה לכם נוח איתו בזמן אמת</li>
            <li><strong>עיגול נכון</strong> חשוב במבחנים ובעבודה מעשית</li>
          </ul>
          
          <div className="mt-4 p-3 bg-blue-50 rounded">
            <p className="text-sm font-medium text-blue-800">
              <strong>הכנה לשיעור הבא:</strong> בשיעור 1.3 נכיר את חוקי החזקות והשורשים - כלים חזקים שיפשטו לנו חישובים רבים.
            </p>
          </div>        </div>
      </section>
      </div>
    </LessonLayout>
  );
};

export default Mahat12Fractions;
