import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat101TrigBasics = () => {
  const lessonId = 'mahat-10-1-trig-basics';
  const nextLessonPath = '/lessons/mahat-10-2-trig-functions';

  const exercises = [
    {
      id: 'ex1',
      question: 'במשולש ישר זווית, אורכי הניצבים הם 6 ו-8. מה אורך היתר?',
      correctAnswer: '10',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשתמש במשפט פיתגורס: ניצב² + ניצב² = יתר²</p>
          <FormulaBox>{"6^2 + 8^2 = \\text{יתר}^2"}</FormulaBox>
          <FormulaBox>{"36 + 64 = 100 \\Rightarrow \\text{יתר} = \\sqrt{100} = 10"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'במשולש ישר זווית, אורך היתר הוא 13 ואורך אחד הניצבים הוא 5. מה אורך הניצב השני?',
      correctAnswer: '12',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשתמש במשפט פיתגורס: 5² + x² = 13²</p>
          <FormulaBox>{"25 + x^2 = 169"}</FormulaBox>
          <FormulaBox>{"x^2 = 144 \\Rightarrow x = 12"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'במשולש ישר זווית ΔKLM, זווית L=90°. ביחס לזווית K, מי הניצב שמול?',
      correctAnswer: 'LM',
      placeholder: 'הכנס שם הצלע',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>הניצב שמול הזווית הוא הצלע שנמצאת מול הזווית ולא נוגעת בה.</p>
          <p>הניצב שמול זווית K הוא הצלע LM.</p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'במשולש ישר זווית, היתר הוא 15 והניצב השני הוא 9. מהו אורך הניצב החסר?',
      correctAnswer: '12',
      placeholder: 'הכנס תשובה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשתמש במשפט פיתגורס: 9² + x² = 15²</p>
          <FormulaBox>{"81 + x^2 = 225"}</FormulaBox>
          <FormulaBox>{"x^2 = 144 \\Rightarrow x = 12"}</FormulaBox>
        </div>
      )
    }
  ];

  const quizData = {
    title: 'בחן את עצמך - יסודות הטריגונומטריה',
    questions: [
      {
        question: 'באיזה סוג משולש תקף משפט פיתגורס?',
        options: ['כל משולש', 'משולש שווה שוקיים בלבד', 'משולש ישר זווית בלבד', 'משולש חד זווית'],
        correctAnswer: 2,
        explanation: 'המשפט מגדיר את הקשר בין הצלעות אך ורק במשולש שיש בו זווית של 90 מעלות.'
      },      {
        question: 'במשולש ישר זווית, הצלע הארוכה ביותר נקראת תמיד...',
        options: ['ניצב', 'בסיס', 'גובה', 'יתר'],
        correctAnswer: 3,
        explanation: 'היתר, הנמצא מול הזווית הישרה (הגדולה ביותר), הוא תמיד הצלע הארוכה ביותר.'
      }
    ]
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      title="שיעור 10.1: היכרות עם משולש ישר זווית"
      nextLessonPath={nextLessonPath}
    >
      {/* מבוא */}
      <section className="lesson-intro">
        <h2>מבוא לשיעור</h2>
        <p>
          טריגונומטריה היא ענף מרתק במתמטיקה העוסק בקשר שבין הזוויות והצלעות במשולשים. 
          היא מהווה כלי בסיסי וחיוני בתחומים כמו פיזיקה, הנדסה, ניווט ואסטרונומיה. 
          הכל מתחיל ממשולש ישר זווית. בשיעור זה נלמד את "שמות השחקנים" במשולש - 
          הניצבים והיתר - ונבין את תפקידם ביחס לזוויות החדות.
        </p>
      </section>

      {/* מטרות השיעור */}
      <section className="lesson-objectives">
        <h2>מטרות השיעור</h2>
        <ul>
          <li><strong>זיהוי רכיבי המשולש:</strong> נלמד להבדיל בין היתר לשני הניצבים</li>
          <li><strong>הבנת היחסיות של הניצבים:</strong> נבין את המושגים "ניצב מול הזווית" ו"ניצב ליד הזווית"</li>
          <li><strong>הכרת משפט פיתגורס:</strong> נחזור על הקשר הבסיסי בין שלוש הצלעות במשולש ישר זווית</li>
        </ul>
      </section>

      {/* חלק 1: שמות הצלעות */}
      <section className="theory-section">
        <h2>חלק 1: שמות הצלעות במשולש ישר זווית</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>בכל משולש ישר זווית, ישנה זווית אחת של 90 מעלות ושתי זוויות חדות (שסכומן תמיד 90 מעלות).</p>
          
          <p><strong>לצלעות יש שמות מיוחדים:</strong></p>
          <ul>
            <li><strong>יתר (Hypotenuse):</strong> זוהי הצלע הארוכה ביותר במשולש, והיא תמיד נמצאת מול הזווית הישרה (90°)</li>
            <li><strong>ניצבים (Legs):</strong> אלו שתי הצלעות שיוצרות את הזווית הישרה</li>
          </ul>
        </div>
      </section>

      {/* חלק 2: יחסיות הניצבים */}
      <section className="theory-section">
        <h2>חלק 2: יחסיות הניצבים לזווית החדה</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>כאן נמצא לב הטריגונומטריה. ההגדרה של הניצבים משתנה בהתאם לזווית החדה (α) שבה אנו מתבוננים:</p>
          
          <ul>
            <li><strong>הניצב שמול הזווית (Opposite):</strong> הניצב שנמצא "מעבר לזווית", בצד השני של המשולש, ואינו נוגע בה</li>
            <li><strong>הניצב שליד הזווית (Adjacent):</strong> הניצב שהוא חלק מהזווית, "נוגע" בה, אך אינו היתר</li>
          </ul>

          <h3>דוגמה</h3>
          <p>במשולש ABC, שבו C היא הזווית הישרה:</p>
          
          <p><strong>אם נתבונן בזווית A:</strong></p>
          <ul>
            <li>הניצב מול זווית A הוא הצלע BC</li>
            <li>הניצב ליד זווית A הוא הצלע AC</li>
            <li>היתר הוא תמיד AB</li>
          </ul>

          <p><strong>אם נתבונן בזווית B:</strong></p>
          <ul>
            <li>הניצב מול זווית B הוא הצלע AC</li>
            <li>הניצב ליד זווית B הוא הצלע BC</li>
            <li>היתר נשאר AB</li>
          </ul>
        </div>
      </section>

      {/* חלק 3: משפט פיתגורס */}
      <section className="theory-section">
        <h2>חלק 3: חזרה על משפט פיתגורס</h2>
        <div className="theory-content">
          <h3>הסבר</h3>
          <p>משפט פיתגורס קובע את הקשר האלגברי בין אורכי הצלעות במשולש ישר זווית.</p>
          
          <FormulaBox>{"\\text{ניצב}^2 + \\text{ניצב}^2 = \\text{יתר}^2"}</FormulaBox>
          <FormulaBox>{"a^2 + b^2 = c^2"}</FormulaBox>

          <p><strong>מסקנה:</strong> אם ידועים אורכים של שתי צלעות במשולש ישר זווית, תמיד אפשר למצוא את אורך הצלע השלישית.</p>
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
          <p>בשיעור זה למדנו את היסודות של הטריגונומטריה:</p>
          <ul>
            <li>זיהינו את שמות הצלעות במשולש ישר זווית: יתר וניצבים</li>
            <li>הבנו שהגדרת "ניצב מול" ו"ניצב ליד" תלויה בזווית שבוחרים</li>
            <li>חזרנו על משפט פיתגורס כבסיס לחישובים במשולש ישר זווית</li>
          </ul>
          <p>
            בשיעור הבא נלמד על הפונקציות הטריגונומטריות - סינוס, קוסינוס וטנגנס - 
            שמאפשרות לנו לקשר בין זוויות וצלעות בצורה מדויקת.
          </p>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat101TrigBasics;
