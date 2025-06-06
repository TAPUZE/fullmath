import React, { useEffect } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';
import ProgressSection from '../components/ProgressSection';

// Example box component for probability examples
const ExampleBox = ({ title, children, isGreen = false }) => {
  const bgColor = isGreen ? 'bg-green-50' : 'bg-blue-50';
  const borderColor = isGreen ? 'border-green-200' : 'border-blue-200';
  
  return (
    <div className={`${bgColor} ${borderColor} border p-4 rounded-lg mt-4`}>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      {children}
    </div>
  );
};

// Important note component
const ImportantNote = ({ children }) => (
  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md text-yellow-800">
    <h4 className="font-semibold mb-2">חשוב לזכור:</h4>
    {children}
  </div>
);

// Probability visualization component
const ProbabilityVisual = ({ title, favorable, total, color = "blue" }) => {
  const circles = [];
  for (let i = 0; i < total; i++) {
    const isFavorable = i < favorable;
    circles.push(
      <div
        key={i}
        className={`w-8 h-8 rounded-full border-2 mx-1 my-1 flex items-center justify-center text-xs font-semibold ${
          isFavorable 
            ? `bg-${color}-500 border-${color}-600 text-white` 
            : 'bg-gray-200 border-gray-300 text-gray-600'
        }`}
      >
        {i + 1}
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h5 className="font-semibold mb-2">{title}</h5>
      <div className="flex flex-wrap items-center justify-center">
        {circles}
      </div>
      <p className="text-sm text-gray-600 mt-2 text-center">
        תוצאות רצויות: {favorable} | סה"כ תוצאות: {total} | הסתברות: {favorable}/{total}
      </p>
    </div>
  );
};

const initializeMathJax = () => {
  window.MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
    svg: { fontCache: 'global' },
  };
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
};

const ProbabilityIntroLesson = () => {
  useEffect(() => {
    initializeMathJax();
  }, []);

  const exercises = [
    {
      id: 'ex1',
      question: 'מטילים קוביית משחק הוגנת (בעלת 6 פאות ממוספרות 1 עד 6). מה ההסתברות לקבל את המספר 4?',
      correctAnswer: '1/6',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>מספר כל התוצאות האפשריות: 6 (המספרים 1, 2, 3, 4, 5, 6).</p>
          <p>מספר התוצאות הרצויות (קבלת המספר 4): 1.</p>
          <p>הסתברות: <FormulaBox isInline>P(4) = 1/6</FormulaBox>.</p>
        </div>
      ),
      placeholder: 'הכנס הסתברות (כשבר פשוט, למשל 1/6)'
    },
    {
      id: 'ex2',
      question: 'בשקית 10 גולות: 3 אדומות, 2 כחולות והשאר ירוקות. מוציאים גולה אחת באקראי. מה ההסתברות להוציא גולה ירוקה?',
      correctAnswer: '5/10',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>מספר הגולות הירוקות: <FormulaBox isInline>10 - 3 - 2 = 5</FormulaBox>.</p>
          <p>סה"כ גולות: 10.</p>
          <p>הסתברות להוציא גולה ירוקה: <FormulaBox isInline>P(Green) = 5/10 = 1/2</FormulaBox>.</p>
        </div>
      ),
      placeholder: 'הכנס הסתברות (כשבר פשוט)',
      allowAlternateForms: true
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהי ההסתברות לקבל מספר זוגי בהטלת קובייה הוגנת?',
      options: [
        { value: 'a', label: <FormulaBox isInline>1/6</FormulaBox> },
        { value: 'b', label: <FormulaBox isInline>2/6</FormulaBox> },
        { value: 'c', label: <><FormulaBox isInline>3/6</FormulaBox> (או <FormulaBox isInline>1/2</FormulaBox>)</> },
        { value: 'd', label: <FormulaBox isInline>1</FormulaBox> }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q2',
      question: 'ההסתברות לרדת גשם מחר היא 0.3. מה ההסתברות שלא ירד גשם מחר?',
      options: [
        { value: 'a', label: '0.3' },
        { value: 'b', label: '0.7' },
        { value: 'c', label: '1' },
        { value: 'd', label: 'אי אפשר לדעת' }
      ],
      correctAnswer: 'b'
    }
  ];

  return (
    <LessonLayout
      title="הסתברויות (מבוא)"
      lessonId="35182-probability-intro"
      nextLessonPath="/lessons/sequences-arithmetic-intro"
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            הסתברויות היא מדד לסיכוי שמאורע (אירוע) מסוים יתרחש. היא נעה בין 0 ל-1 (או בין 0% ל-100%).
          </p>
          
          <ul className="list-disc list-inside space-y-1 pr-5">
            <li>הסתברות 0 פירושה שהמאורע בלתי אפשרי (לא יקרה לעולם).</li>
            <li>הסתברות 1 פירושה שהמאורע ודאי (יקרה בוודאות).</li>
            <li>ככל שההסתברות קרובה יותר ל-1, כך הסיכוי שהמאורע יתרחש גדול יותר.</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-600">
              חישוב הסתברות של מאורע בודד
            </h3>
            <p>
              כאשר כל התוצאות האפשריות בניסוי הן בעלות סיכוי שווה להתרחש, 
              ההסתברות של מאורע מסוים (נסמן אותו באות A) מחושבת כך:
            </p>
            
            <div className="my-4 text-center">
              <FormulaBox>
                P(A) = (מספר התוצאות הרצויות) / (מספר כל התוצאות האפשריות)
              </FormulaBox>
            </div>
            
            <p>כאשר <FormulaBox isInline>P(A)</FormulaBox> היא ההסתברות של המאורע A.</p>
          </div>

          <ExampleBox title="דוגמה פתורה (מתוך חומר הבחינה):">
            <p className="font-medium mb-2">
              בכד 5 כדורים אדומים ו-3 כדורים כחולים. מוציאים כדור אחד באקראי. 
              מה ההסתברות להוציא כדור אדום?
            </p>
            
            <div className="mt-4">
              <ProbabilityVisual 
                title="הדמיה של הכדורים בכד"
                favorable={5}
                total={8}
                color="red"
              />
            </div>
            
            <div className="mt-4">
              <p><strong>פתרון:</strong></p>
              <p>1. <strong>מספר כל התוצאות האפשריות:</strong> סך כל הכדורים בכד הוא <FormulaBox isInline>5 + 3 = 8</FormulaBox>. כלומר, יש 8 תוצאות אפשריות (ניתן להוציא כל אחד מ-8 הכדורים).</p>
              <p>2. <strong>מספר התוצאות הרצויות:</strong> המאורע הרצוי הוא "הוצאת כדור אדום". יש 5 כדורים אדומים, ולכן יש 5 תוצאות רצויות.</p>
              <p>3. <strong>חישוב ההסתברות:</strong></p>
              <p><FormulaBox>P(Red) = (מספר כדורים אדומים) / (סה"כ כדורים) = 5/8</FormulaBox></p>
              <p className="mt-2">ההסתברות להוציא כדור אדום היא <FormulaBox isInline>5/8</FormulaBox> (או 0.625, או 62.5%).</p>
            </div>
          </ExampleBox>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-600">
              המאורע המשלים
            </h3>
            <p>
              המאורע המשלים למאורע A (מסומן כ-<FormulaBox isInline>A'</FormulaBox> או <FormulaBox isInline>A̅</FormulaBox>) 
              הוא המאורע שבו A <strong>אינו</strong> מתרחש.
            </p>
            <p>סכום ההסתברויות של מאורע והמאורע המשלים לו הוא תמיד 1:</p>
            
            <div className="my-4 text-center">
              <FormulaBox>P(A) + P(A') = 1</FormulaBox>
            </div>
            
            <p>מכאן נובע שניתן לחשב את ההסתברות של המאורע המשלים כך:</p>
            
            <div className="my-4 text-center">
              <FormulaBox>P(A') = 1 - P(A)</FormulaBox>
            </div>
          </div>

          <ExampleBox title="דוגמה למאורע משלים:" isGreen>
            <p className="font-medium mb-2">
              בדוגמה הקודמת עם הכדורים, מה ההסתברות <strong>לא</strong> להוציא כדור אדום 
              (כלומר, להוציא כדור כחול)?
            </p>
            
            <div className="mt-4">
              <p><strong>פתרון:</strong></p>
              <p>המאורע "לא להוציא כדור אדום" הוא המאורע המשלים ל"הוצאת כדור אדום".</p>
              <p>ידוע לנו ש-<FormulaBox isInline>P(Red) = 5/8</FormulaBox>.</p>
              <p>לכן, <FormulaBox>P(Not Red) = 1 - P(Red) = 1 - 5/8 = 8/8 - 5/8 = 3/8</FormulaBox>.</p>
              <p className="mt-2">
                ההסתברות לא להוציא כדור אדום היא <FormulaBox isInline>3/8</FormulaBox>. 
                (זה תואם לחישוב ישיר: <FormulaBox isInline>(מספר כדורים כחולים) / (סה"כ כדורים) = 3/8</FormulaBox>).
              </p>
            </div>
          </ExampleBox>

          <ImportantNote>
            <p>
              ההסתברות היא תמיד מספר בין 0 ל-1 (כולל). 
              אם קיבלתם תוצאה גדולה מ-1 או קטנה מ-0, יש טעות בחישוב!
            </p>
          </ImportantNote>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        
        <div className="space-y-8">
          {exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              {...exercise}
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz questions={quizQuestions} />      {/* Progress Section */}
      <ProgressSection 
        lessonId="35182-probability-intro"
        nextLessonPath="/lessons/probability-tree-conditional"
        menuPath="/lessons"
      />
    </LessonLayout>
  );
};

export default ProbabilityIntroLesson;
