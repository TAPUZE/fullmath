import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';


const Mahat14AlgebraicExpressions = () => {
  const lessonId = 'mahat-1-4-algebraic-expressions';
  const nextLessonPath = '/lessons/mahat-1-5-multiplication-formulas';
  
  const exercises = [
    {
      id: 'ex1',
      question: 'כנס את האיברים הדומים: 3x + 5x - 2x',
      correctAnswer: '6x',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>איברים דומים הם איברים שיש להם אותו חלק משתנה:</p>
          <FormulaBox>{"3x + 5x - 2x = (3 + 5 - 2)x = 6x"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'חשב: 2(3x + 4)',
      correctAnswer: '6x + 8',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>משתמשים בחוק הפילוג - מכפילים כל איבר בסוגריים:</p>
          <FormulaBox>{"2(3x + 4) = 2 \\cdot 3x + 2 \\cdot 4 = 6x + 8"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פשט: 5a + 3b - 2a + 7b',
      correctAnswer: '3a + 10b',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נקבץ איברים דומים:</p>
          <FormulaBox>{"5a + 3b - 2a + 7b = 5a - 2a + 3b + 7b"}</FormulaBox>
          <FormulaBox>{"= (5 - 2)a + (3 + 7)b = 3a + 10b"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'פתח סוגריים: -3(2x - 5)',
      correctAnswer: '-6x + 15',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>כאשר מכפילים במספר שלילי:</p>
          <FormulaBox>{"-3(2x - 5) = -3 \\cdot 2x - 3 \\cdot (-5)"}</FormulaBox>
          <FormulaBox>{"= -6x + 15"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex5',
      question: 'הוצא גורם משותף: 12x + 8',
      correctAnswer: '4(3x + 2)',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>הגורם המשותף הגדול ביותר של 12 ו-8 הוא 4:</p>
          <FormulaBox>{"12x + 8 = 4 \\cdot 3x + 4 \\cdot 2 = 4(3x + 2)"}</FormulaBox>
          <p>בדיקה: <FormulaBox inline>{"4(3x + 2) = 12x + 8"}</FormulaBox> ✓</p>
        </div>
      )
    },
    {
      id: 'ex6',
      question: 'הוצא גורם משותף: x² + 3x',
      correctAnswer: 'x(x + 3)',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>הוצאת גורם משותף - x הוא הגורם המשותף:</p>
          <FormulaBox>{"x^2 + 3x = x(x + 3)"}</FormulaBox>
          <p>בדיקה: <FormulaBox inline>{"x(x + 3) = x \\cdot x + x \\cdot 3 = x^2 + 3x"}</FormulaBox> ✓</p>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - ביטויים אלגבריים',
    questions: [
      {
        question: 'מה התוצאה של כינוס האיברים הדומים: 7x - 3x + 2x?',
        options: ['6x', '5x', '4x', '8x'],
        correctAnswer: 0,
        explanation: 'איברים דומים הם איברים עם אותו חלק משתנה. 7x - 3x + 2x = (7 - 3 + 2)x = 6x'
      },
      {
        question: 'מה התוצאה של פתיחת הסוגריים: 4(2x - 3)?',
        options: ['8x - 12', '8x - 3', '2x - 12', '6x - 7'],
        correctAnswer: 0,
        explanation: 'לפי חוק הפילוג: 4(2x - 3) = 4 · 2x - 4 · 3 = 8x - 12'
      },
      {
        question: 'איך מוציאים גורם משותף מהביטוי 6x + 9?',
        options: ['3(2x + 3)', '6(x + 9)', '9(6x + 1)', '(6x)(9)'],
        correctAnswer: 0,
        explanation: 'הגורם המשותף הגדול ביותר של 6 ו-9 הוא 3, לכן: 6x + 9 = 3(2x + 3)'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="שיעור 1.4: ביטויים אלגבריים"
      nextLessonPath={nextLessonPath}
    >
      {/* מבוא */}
      <section className="lesson-intro">
        <h2>מבוא לשיעור</h2>
        <p>
          עד כה עבדנו עם מספרים בלבד. הגיע הזמן להכיר את אחד הכלים החזקים ביותר במתמטיקה - 
          <strong> האלגברה</strong>. נלמד להשתמש באותיות כדי לייצג מספרים לא ידועים, ונבין איך לבצע 
          פעולות על ביטויים אלגבריים. זה הבסיס לפתרון משוואות ולבעיות מתמטיות מורכבות.
        </p>
      </section>

      {/* מטרות השיעור */}
      <section className="lesson-objectives">
        <h2>מטרות השיעור</h2>
        <ul>
          <li><strong>הבנת מושג המשתנה:</strong> נלמד מה זה משתנה ואיך משתמשים בו</li>
          <li><strong>זיהוי איברים דומים:</strong> נלמד לזהות ולכנס איברים דומים</li>
          <li><strong>פתיחת סוגריים:</strong> נלמד את חוק הפילוג</li>
          <li><strong>הוצאת גורם משותף:</strong> נלמד את הפעולה ההפוכה לפתיחת סוגריים</li>
        </ul>
      </section>

      {/* חלק 1: מושג המשתנה */}
      <section className="theory-section">
        <h2>חלק 1: מושג המשתנה</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>משתנה הוא סמל (בדרך כלל אות) המייצג מספר לא ידוע או משתנה.</p>
          
          <p><strong>דוגמאות למשתנים:</strong></p>
          <ul>
            <li>x, y, z - האותיות הנפוצות ביותר</li>
            <li>a, b, c - נפוצות בנוסחאות כלליות</li>
            <li>n, m - נפוצות לייצוג מספרים שלמים</li>
          </ul>

          <p><strong>ביטוי אלגברי</strong> הוא ביטוי המכיל מספרים, משתנים ופעולות מתמטיות.</p>
          
          <h3>דוגמאות לביטויים אלגבריים</h3>
          <ul>
            <li><FormulaBox inline>{"3x + 5"}</FormulaBox> - ביטוי לינארי</li>
            <li><FormulaBox inline>{"x^2 - 4x + 3"}</FormulaBox> - ביטוי ריבועי</li>
            <li><FormulaBox inline>{"2a + 3b - c"}</FormulaBox> - ביטוי עם מספר משתנים</li>
          </ul>
        </div>
      </section>

      {/* חלק 2: איברים דומים */}
      <section className="theory-section">
        <h2>חלק 2: איברים דומים וכינוסם</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p><strong>איברים דומים</strong> הם איברים שיש להם אותו חלק משתנה (כולל אותה חזקה).</p>
          
          <h3>דוגמאות לאיברים דומים</h3>
          <ul>
            <li><FormulaBox inline>{"3x, 5x, -2x"}</FormulaBox> - כולם מכילים x</li>
            <li><FormulaBox inline>{"4y^2, -7y^2, y^2"}</FormulaBox> - כולם מכילים y²</li>
            <li><FormulaBox inline>{"2ab, -3ab, 8ab"}</FormulaBox> - כולם מכילים ab</li>
          </ul>

          <h3>כלל הכינוס</h3>
          <p>לכינוס איברים דומים מחברים או מחסרים את המקדמים:</p>
          <FormulaBox>{"ax + bx = (a + b)x"}</FormulaBox>
          
          <h3>דוגמה</h3>
          <FormulaBox>{"5x + 3x - 2x = (5 + 3 - 2)x = 6x"}</FormulaBox>
        </div>
      </section>

      {/* חלק 3: חוק הפילוג */}
      <section className="theory-section">
        <h2>חלק 3: חוק הפילוג (פתיחת סוגריים)</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>חוק הפילוג מאפשר לנו לפתוח סוגריים על ידי הכפלת כל איבר בסוגריים במספר שמחוץ לסוגריים.</p>
          
          <h3>הנוסחה הכללית</h3>
          <FormulaBox>{"a(b + c) = ab + ac"}</FormulaBox>
          <FormulaBox>{"a(b - c) = ab - ac"}</FormulaBox>
          
          <h3>מקרים מיוחדים</h3>
          <ul>
            <li>כאשר המקדם הוא 1: <FormulaBox inline>{"(x + y) = x + y"}</FormulaBox></li>
            <li>כאשר המקדם הוא -1: <FormulaBox inline>{"-(x + y) = -x - y"}</FormulaBox></li>
          </ul>

          <h3>דוגמאות</h3>
          <ul>
            <li><FormulaBox>{"3(2x + 4) = 6x + 12"}</FormulaBox></li>
            <li><FormulaBox>{"-2(x - 3) = -2x + 6"}</FormulaBox></li>
            <li><FormulaBox>{"x(x + 5) = x^2 + 5x"}</FormulaBox></li>
          </ul>
        </div>
      </section>

      {/* חלק 4: הוצאת גורם משותף */}
      <section className="theory-section">
        <h2>חלק 4: הוצאת גורם משותף</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>הוצאת גורם משותף היא הפעולה ההפוכה לפתיחת סוגריים. אנו מחפשים את הגורם המשותף הגדול ביותר ומוציאים אותו מחוץ לסוגריים.</p>
          
          <h3>השלבים</h3>
          <ol>
            <li>מוצאים את הגורם המשותף הגדול ביותר של כל המקדמים</li>
            <li>מוצאים את הגורם המשותף הגדול ביותר של כל המשתנים</li>
            <li>מוציאים את המכפלה של הגורמים מחוץ לסוגריים</li>
            <li>בודקים את התוצאה על ידי פתיחת הסוגריים</li>
          </ol>

          <h3>דוגמאות</h3>
          <ul>
            <li><FormulaBox>{"6x + 9 = 3(2x + 3)"}</FormulaBox> - הגורם המשותף הוא 3</li>
            <li><FormulaBox>{"x^2 + 4x = x(x + 4)"}</FormulaBox> - הגורם המשותף הוא x</li>
            <li><FormulaBox>{"12a^2 - 8a = 4a(3a - 2)"}</FormulaBox> - הגורם המשותף הוא 4a</li>
          </ul>
        </div>
      </section>

      {/* תרגילים */}
      <section className="exercises-section">
        <h2>תרגילים</h2>
        {exercises.map((exercise, index) => (
          <Exercise key={exercise.id} {...exercise} />
        ))}
      </section>

      {/* בחן את עצמך */}
      <section className="quiz-section">
        <Quiz {...quizData} />
      </section>

      {/* סיכום */}
      <section className="lesson-summary">
        <h2>סיכום השיעור</h2>
        <div className="summary-content">
          <p>בשיעור זה למדנו את היסודות של האלגברה:</p>
          <ul>
            <li>הכרנו את מושג המשתנה והביטוי האלגברי</li>
            <li>למדנו לזהות ולכנס איברים דומים</li>
            <li>הכרנו את חוק הפילוג לפתיחת סוגריים</li>
            <li>למדנו להוציא גורם משותף - הפעולה ההפוכה</li>
          </ul>
          <p>
            בשיעור הבא נלמד על נוסחאות הכפל המקוצר - כלים מתקדמים יותר לעבודה עם ביטויים אלגבריים.
          </p>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat14AlgebraicExpressions;
