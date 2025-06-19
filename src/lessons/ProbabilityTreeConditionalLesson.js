import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const ProbabilityTreeConditionalLesson = () => {

  const exercises = [
    {
      id: 'ex1',
      question: 'בכד 3 כדורים אדומים ו-2 כדורים כחולים. מוציאים באקראי כדור אחד, רושמים את צבעו ומחזירים אותו לכד. לאחר מכן, מוציאים באקראי כדור נוסף. מה ההסתברות שבשתי הפעמים הוצא כדור אדום?',
      correctAnswer: '9/25',
      tolerance: 0.001,
      allowFractions: true,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>          <p>סה"כ כדורים בכד: 3 (אדומים) + 2 (כחולים) = 5 כדורים.</p>          <p>הסתברות להוציא כדור אדום בהוצאה ראשונה: <FormulaBox inline>{"P(\\text{Red}_1) = \\frac{3}{5}"}</FormulaBox>.</p>
          <p>מכיוון שמחזירים את הכדור, ההסתברות להוציא כדור אדום בהוצאה שנייה זהה: <FormulaBox inline>{"P(\\text{Red}_2) = \\frac{3}{5}"}</FormulaBox>.</p>
          <p>ההסתברות להוציא אדום בשתי הפעמים (מאורעות בלתי תלויים):</p>
          <FormulaBox>{"P(\\text{Red}_1 \\text{ and Red}_2) = P(\\text{Red}_1) \\cdot P(\\text{Red}_2) = \\frac{3}{5} \\cdot \\frac{3}{5} = \\frac{9}{25}"}</FormulaBox>
          <p>או בחישוב עשרוני: 0.36</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מתוך חפיסת קלפים רגילה מוציאים באקראי קלף אחד ללא החזרה, ולאחר מכן מוציאים קלף נוסף. מה ההסתברות שהקלף הראשון יהיה אס וגם הקלף השני יהיה אס?',
      correctAnswer: '12/663',
      tolerance: 0.001,
      allowFractions: true,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>בחפיסת קלפים רגילה יש 52 קלפים ו-4 אסים.</p>          <p>הסתברות שהקלף הראשון יהיה אס: <FormulaBox inline>{"P(\\text{Ace}_1) = \\frac{4}{52} = \\frac{1}{13}"}</FormulaBox></p>
          <p>לאחר הוצאת האס הראשון, נותרו 51 קלפים ו-3 אסים.</p>
          <p>הסתברות שהקלף השני יהיה אס (בתנאי שהראשון היה אס): <FormulaBox inline>{"P(\\text{Ace}_2|\\text{Ace}_1) = \\frac{3}{51} = \\frac{1}{17}"}</FormulaBox></p>
          <p>ההסתברות לשני אסים רצופים:</p>
          <FormulaBox>{"P(\\text{Ace}_1 \\text{ and Ace}_2) = \\frac{1}{13} \\cdot \\frac{1}{17} = \\frac{1}{221}"}</FormulaBox>
        </div>
      )
    }
  ];
  const quizQuestions = [
    {
      id: 'q1',
      question: 'מה ההסתברות לקבל בדיוק פעם אחת "עץ" בהטלת מטבע פעמיים?',
      options: [
        { value: "a", label: '0.25' },
        { value: "b", label: '0.5' },
        { value: "c", label: '0.75' },
        { value: "d", label: '1' }
      ],
      correctAnswer: "b",
      explanation: 'ישנם שני מקרים: עץ-פלי או פלי-עץ. כל אחד מהם מתרחש בהסתברות 0.25, ולכן סה"כ 0.5.'
    },
    {
      id: 'q2',
      question: 'בדיאגרמת עץ, כיצד מחשבים את ההסתברות של מסלול מסוים?',
      options: [
        { value: "a", label: 'מחברים את ההסתברויות לאורך המסלול' },
        { value: "b", label: 'מכפילים את ההסתברויות לאורך המסלול' },
        { value: "c", label: 'לוקחים את הממוצע של ההסתברויות' },
        { value: "d", label: 'לוקחים את הערך המרבי' }
      ],
      correctAnswer: "b",
      explanation: 'בדיאגרמת עץ, הסתברות של מסלול מסוים מתקבלת על ידי כפל ההסתברויות לאורך המסלול.'
    }
  ];

  // Tree diagram component
  const TreeDiagram = () => (
    <div className="flex justify-center items-center my-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <svg width="300" height="200" className="font-sans">
        <circle cx="30" cy="100" r="3" fill="black"/>
        <line x1="30" y1="100" x2="100" y2="50" stroke="black"/>
        <text x="60" y="70" className="text-xs fill-blue-700">0.5 (ע)</text>
        <circle cx="100" cy="50" r="3" fill="black"/>
        <line x1="30" y1="100" x2="100" y2="150" stroke="black"/>
        <text x="60" y="130" className="text-xs fill-blue-700">0.5 (פ)</text>
        <circle cx="100" cy="150" r="3" fill="black"/>
        <line x1="100" y1="50" x2="170" y2="25" stroke="black"/>
        <text x="130" y="32" className="text-xs fill-blue-700">0.5 (ע)</text>
        <text x="185" y="28" className="text-sm font-semibold fill-green-600">עע (0.25)</text>
        <line x1="100" y1="50" x2="170" y2="75" stroke="black"/>
        <text x="130" y="68" className="text-xs fill-blue-700">0.5 (פ)</text>
        <text x="185" y="78" className="text-sm font-semibold fill-green-600">עפ (0.25)</text>
        <line x1="100" y1="150" x2="170" y2="125" stroke="black"/>
        <text x="130" y="132" className="text-xs fill-blue-700">0.5 (ע)</text>
        <text x="185" y="128" className="text-sm font-semibold fill-green-600">פע (0.25)</text>
        <line x1="100" y1="150" x2="170" y2="175" stroke="black"/>
        <text x="130" y="168" className="text-xs fill-blue-700">0.5 (פ)</text>
        <text x="185" y="178" className="text-sm font-semibold fill-green-600">פפ (0.25)</text>
      </svg>
    </div>
  );

  return (
    <LessonLayout
      title="הסתברות (המשך) - דיאגרמת עץ והסתברות מותנית"
      lessonId="35381-probability-tree-conditional"
      nextLessonPath="/lesson/35382-functions-parabola-investigation"
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">לומדים 📚</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>כאשר אנו עוסקים בניסויים המורכבים ממספר שלבים (ניסויים רב-שלביים), דיאגרמת עץ היא כלי ויזואלי יעיל מאוד לתיאור כל התוצאות האפשריות ולחישוב ההסתברויות שלהן.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. מהי דיאגרמת עץ?</h3>
          <p>דיאגרמת עץ מורכבת מ"ענפים" המייצגים את התוצאות האפשריות בכל שלב של הניסוי. על כל ענף רושמים את ההסתברות של אותה תוצאה.</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>הדיאגרמה מתחילה מנקודה אחת (ה"שורש").</li>
            <li>מנקודה זו יוצאים ענפים כמספר התוצאות האפשריות בשלב הראשון של הניסוי.</li>
            <li>מכל קצה של ענף מהשלב הראשון, יוצאים ענפים נוספים כמספר התוצאות האפשריות בשלב השני, וכן הלאה.</li>
            <li>סכום ההסתברויות על כל הענפים היוצאים מאותה נקודה (צומת) חייב להיות 1.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. חישוב הסתברויות באמצעות דיאגרמת עץ</h3>
          <ul className="list-disc pr-6 space-y-1">
            <li><strong>הסתברות של מסלול מסוים (מאורע "וגם"):</strong> כדי לחשב את ההסתברות של רצף מסוים של תוצאות (מסלול מהשורש עד לקצה ענף סופי), מכפילים את ההסתברויות הרשומות על כל הענפים לאורך אותו מסלול.</li>
            <li><strong>הסתברות של מאורע המורכב ממספר מסלולים (מאורע "או"):</strong> אם מאורע מסוים יכול להתקבל באמצעות מספר מסלולים שונים בדיאגרמה, מחשבים את ההסתברות של כל מסלול בנפרד (על ידי כפל, כפי שתואר לעיל), ולאחר מכן מחברים את ההסתברויות של כל המסלולים הרלוונטיים.</li>
          </ul>
          <p className="text-sm text-gray-600">חשוב לשים לב: המיקוד לשנת תשפ"ה הסיר את הנושא "הסתברות של מאורעות תלויים (הוצאה בלי החזרה)" באופן גורף. לכן, רוב השאלות יתמקדו בהוצאה עם החזרה, או בתרחישים בהם ההסתברויות בכל שלב אינן משתנות באופן מורכב מדי.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. הסתברות מותנית (ברמה בסיסית)</h3>
          <p>הסתברות מותנית היא ההסתברות שמאורע A יתרחש, בהינתן שמאורע B כבר התרחש. היא מסומנת <FormulaBox inline>P(A|B)</FormulaBox> (קרי: ההסתברות של A בתנאי B).</p>
          <p>במקרים פשוטים, ניתן לחשב הסתברות מותנית ישירות מדיאגרמת עץ או מטבלה דו-ממדית (כפי שנראה בדוגמאות).</p>          <p>הנוסחה הכללית להסתברות מותנית (שחשוב להכיר גם אם לא תמיד נשתמש בה ישירות לחישוב ברמה זו):</p>          <FormulaBox>{"P(A|B) = \\frac{P(A \\cap B)}{P(B)}"}</FormulaBox>
          <p>כאשר <FormulaBox inline>P(A \\cap B)</FormulaBox> היא ההסתברות שגם A וגם B יתרחשו (חיתוך המאורעות).</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה פתורה: הטלת מטבע פעמיים</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 mb-6">
            <p className="font-medium"><strong>דוגמה:</strong> מטילים מטבע הוגן פעמיים. ("עץ" - ע, "פלי" - פ)</p>
            <p>א. שרטט דיאגרמת עץ המתארת את הניסוי.</p>
            <p>ב. מה ההסתברות לקבל "עץ" בשתי ההטלות?</p>
            <p>ג. מה ההסתברות לקבל בדיוק "עץ" אחד?</p>
            <p>ד. מה ההסתברות לקבל "עץ" בהטלה השנייה, אם ידוע שבהטלה הראשונה התקבל "פלי"?</p>

            <p><strong>פתרון:</strong></p>
            <p>א. דיאגרמת עץ:</p>
            <TreeDiagram />
            
            <p>ב. הסתברות לקבל "עץ" בשתי ההטלות (מסלול ע-ע):</p>
            <FormulaBox>{"P(\\text{HH}) = 0.5 \\cdot 0.5 = 0.25"}</FormulaBox>
            
            <p>ג. הסתברות לקבל בדיוק "עץ" אחד (מסלולים ע-פ או פ-ע):</p>
            <FormulaBox>{"P(\\text{HT}) = 0.5 \\cdot 0.5 = 0.25"}</FormulaBox>
            <FormulaBox>{"P(\\text{TH}) = 0.5 \\cdot 0.5 = 0.25"}</FormulaBox>
            <FormulaBox>{"P(\\text{exactly one head}) = P(\\text{HT}) + P(\\text{TH}) = 0.25 + 0.25 = 0.5"}</FormulaBox>
            
            <p>ד. הסתברות לקבל "עץ" בהטלה השנייה, אם ידוע שבהטלה הראשונה התקבל "פלי":</p>
            <p>במקרה זה, אנו מסתכלים רק על הענפים שיוצאים מהתוצאה "פלי" בהטלה הראשונה. ההסתברות לקבל "עץ" בשלב זה היא ההסתברות הרשומה על הענף המתאים:</p>
            <FormulaBox>{"P(\\text{Head second | Tail first}) = 0.5"}</FormulaBox>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">מתרגלים ✍️</h2>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Exercise key={exercise.id} {...exercise} />
          ))}
        </div>
      </section>

      {/* Quiz Section */}      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">בוחן ידע 🧪</h2>
        <Quiz questions={quizQuestions} />
      </section>
    </LessonLayout>
  );
};

export default ProbabilityTreeConditionalLesson;
