import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import Quiz from '../../components/math/Quiz';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import DataTable from '../../components/math/DataTable';
import { CommonValidators } from '../../components/math/UnifiedAnswerChecker';

// Custom data display component
const DataDisplay = ({ data, label, className = "" }) => {
  return (
    <span className={`inline-block font-mono text-lg px-2 py-1 bg-indigo-100 border border-indigo-200 rounded ${className}`}>
      {label && `${label}: `}{data.join(', ')}
    </span>
  );
};

const StatisticsIntroLesson = () => {
  // Sample data for the frequency table example
  const frequencyTableData = [
    { value: 60, frequency: 3 },
    { value: 70, frequency: 5 },
    { value: 80, frequency: 8 },
    { value: 90, frequency: 4 },
    { value: 100, frequency: 2 }  ];

  // Quiz questions
  const quizQuestions = [
    {
      id: 'mean-calculation',
      question: 'מהו הממוצע של המספרים: 2, 4, 6, 8, 10?',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '6' },
        { id: 'c', text: '7' },
        { id: 'd', text: '30' }
      ],
      correctAnswer: 'b',
      explanation: (        <div>          <p>הממוצע מחושב על ידי סכום כל הערכים חלקי מספר הערכים:</p>
          <p className="text-center my-4">
            <span className="text-lg font-semibold">ממוצע = </span>
            <FormulaBox inline>{"\\frac{2+4+6+8+10}{5} = \\frac{30}{5} = 6"}</FormulaBox>
          </p>
        </div>
      )
    },
    {
      id: 'median-calculation',
      question: 'מהו החציון של רשימת הציונים: 60, 90, 70, 100, 80?',
      options: [
        { id: 'a', text: '70' },
        { id: 'b', text: '80' },
        { id: 'c', text: '85' },
        { id: 'd', text: '90' }
      ],
      correctAnswer: 'b',
      explanation: (
        <div>
          <p>תחילה נסדר את הנתונים לפי גודל: 60, 70, 80, 90, 100</p>
          <p>יש 5 ערכים (מספר אי-זוגי), אז החציון הוא הערך האמצעי (השלישי): 80</p>
        </div>
      )
    }
  ];

  return (
    <LessonLayout
      title="סטטיסטיקה (מבוא)"
      lessonId="35182-statistics-intro"
      nextLessonPath="/lessons/trigonometry-right-triangle"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>סטטיסטיקה היא תחום במתמטיקה העוסק באיסוף, ארגון, ניתוח, פירוש והצגה של נתונים. היא עוזרת לנו להבין תופעות, להסיק מסקנות ולקבל החלטות.</p>
          
          <div className="sub-section">
            <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-600">מדדי מרכז</h3>
            <p>מדדי מרכז הם ערכים המנסים לתאר את "מרכז" קבוצת הנתונים, כלומר, ערך טיפוסי או מייצג של הנתונים. המדדים הנפוצים שנלמד הם ממוצע, חציון ושכיח.</p>            <h4 className="text-lg font-semibold mt-3 mb-1">1. ממוצע חשבוני (Mean)</h4>
            <p>הממוצע הוא סכום כל ערכי הנתונים, מחולק במספר הנתונים.</p>            <p className="text-center my-4">
              <span className="text-lg font-semibold">ממוצע = </span>
              <FormulaBox inline>{"\\frac{\\text{sum of all data}}{\\text{number of data points}}"}</FormulaBox>
            </p>
            <p className="text-center text-sm text-gray-600 mt-2">
              (סכום כל הנתונים חלקי מספר הנתונים)
            </p>

            <h4 className="text-lg font-semibold mt-3 mb-1">2. חציון (Median)</h4>
            <p>החציון הוא הערך האמצעי בקבוצת נתונים המסודרת לפי גודל (מהקטן לגדול או מהגדול לקטן).</p>
            <ul className="list-disc list-inside space-y-1 pr-5">              <li>אם מספר הנתונים (<FormulaBox inline>N</FormulaBox>) הוא <strong>אי-זוגי</strong>, החציון הוא האיבר הנמצא בדיוק באמצע הרשימה המסודרת (האיבר במקום ה-<FormulaBox inline>{"\\frac{N+1}{2}"}</FormulaBox>).</li>
              <li>אם מספר הנתונים (<FormulaBox inline>N</FormulaBox>) הוא <strong>זוגי</strong>, החציון הוא הממוצע של שני האיברים האמצעיים ברשימה המסודרת (האיברים במקומות <FormulaBox inline>{"\\frac{N}{2}"}</FormulaBox> ו-<FormulaBox inline>{"\\frac{N}{2}+1"}</FormulaBox>).</li>
            </ul>

            <h4 className="text-lg font-semibold mt-3 mb-1">3. שכיח (Mode)</h4>
            <p>השכיח הוא הערך המופיע הכי הרבה פעמים בקבוצת הנתונים. ייתכן שלקבוצת נתונים יהיה יותר משכיח אחד (אם מספר ערכים מופיעים באותה תדירות מקסימלית), או שלא יהיה שכיח כלל (אם כל הערכים מופיעים פעם אחת).</p>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה (מתוך חומר הבחינה):</h4>
            <p className="font-medium">הציונים של 5 תלמידים הם: <DataDisplay data={[70, 80, 80, 90, 100]} />. מהו הממוצע, החציון והשכיח?</p>
            <p className="mt-2"><strong>פתרון:</strong></p>            <p><strong>ממוצע:</strong></p>
            <p className="text-center my-4">
              <span className="text-lg font-semibold">ממוצע = </span>
              <FormulaBox inline>{"\\frac{70+80+80+90+100}{5} = \\frac{420}{5} = 84"}</FormulaBox>
            </p>
            <p><strong>חציון:</strong></p>
            <p>הנתונים כבר מסודרים מהקטן לגדול: 70, 80, <strong>80</strong>, 90, 100.</p>
            <p>יש 5 נתונים (מספר אי-זוגי). האיבר האמצעי (השלישי) הוא 80. לכן, החציון הוא 80.</p>
            <p><strong>שכיח:</strong></p>
            <p>הציון המופיע הכי הרבה פעמים הוא 80 (מופיע פעמיים). לכן, השכיח הוא 80.</p>
          </div>

          <div className="sub-section">
            <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-600">חישוב מדדי מרכז מטבלת שכיחויות</h3>
            <p>טבלת שכיחויות מציגה כל ערך נתון וכמה פעמים הוא מופיע (השכיחות שלו).</p>
            
            <h4 className="text-lg font-semibold mt-3 mb-1">דוגמה עם טבלת שכיחויות:</h4>            <p>ציוני תלמידים בכיתה מוצגים בטבלה הבאה:</p>
            
            <DataTable 
              title="טבלת שכיחויות - ציוני תלמידים"
              headers={['ציון (ערך)', 'מספר תלמידים (שכיחות)']}
              data={frequencyTableData.map(row => [row.value, row.frequency])}
            />
            
            <p className="mt-2"><strong>ממוצע:</strong> כדי לחשב ממוצע מטבלת שכיחויות, כופלים כל ערך בשכיחות שלו, סוכמים את כל המכפלות, ומחלקים בסך כל השכיחויות (סה"כ התלמידים).</p>            <p>סה"כ תלמידים: <FormulaBox inline>3+5+8+4+2 = 22</FormulaBox>.</p>
            <p>סכום (ערך × שכיחות): <FormulaBox inline>(60 \cdot 3) + (70 \cdot 5) + (80 \cdot 8) + (90 \cdot 4) + (100 \cdot 2)</FormulaBox></p>
            <FormulaBox>= 180 + 350 + 640 + 360 + 200 = 1730</FormulaBox>
            <p>ממוצע: <FormulaBox inline>\frac{1730}{22} \approx 78.64</FormulaBox>.</p>
            
            <p className="mt-2"><strong>חציון:</strong> יש 22 תלמידים (מספר זוגי). האיברים האמצעיים הם במקומות <FormulaBox inline>\frac{22}{2}=11</FormulaBox> ו-<FormulaBox inline>11+1=12</FormulaBox>.</p>
            <ul className="list-disc list-inside pr-5">
              <li>3 תלמידים קיבלו 60.</li>              <li><FormulaBox inline>3+5=8</FormulaBox> תלמידים קיבלו 70 או פחות.</li>
              <li><FormulaBox inline>8+8=16</FormulaBox> תלמידים קיבלו 80 או פחות.</li>
            </ul>
            <p>התלמיד ה-11 והתלמיד ה-12 קיבלו שניהם ציון 80. לכן, החציון הוא <FormulaBox inline>\frac{80+80}{2} = 80</FormulaBox>.</p>
            
            <p className="mt-2"><strong>שכיח:</strong> הציון בעל השכיחות הגבוהה ביותר הוא 80 (8 תלמידים). לכן, השכיח הוא 80.</p>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
          <div className="space-y-8 mt-6">
          <InteractiveExercise
            id="statistics-exercise-1"
            question={
              <div>
                <p className="mb-2">תרגיל 1: נתונה רשימת ציונים:</p>
                <p className="font-mono bg-gray-100 p-2 rounded">70, 70, 70, 80, 90, 90, 100</p>
                <p className="mt-2">חשב את הממוצע, החציון והשכיח:</p>
              </div>
            }
            inputs={[
              {
                id: 'mean',
                label: 'ממוצע',
                type: 'number',
                placeholder: 'הכנס ממוצע'
              },
              {
                id: 'median', 
                label: 'חציון',
                type: 'number',
                placeholder: 'הכנס חציון'
              },
              {
                id: 'mode',
                label: 'שכיח',
                type: 'number', 
                placeholder: 'הכנס שכיח'
              }
            ]}
            correctAnswers={{ mean: '80', median: '80', mode: '70' }}
            solution={
              <div>
                <p><strong>פתרון מלא:</strong></p>
                <p>נתונים מסודרים: 70, 70, 70, 80, 90, 90, 100</p>
                <p><strong>ממוצע:</strong></p>
                <p className="text-center my-4">
                  <span className="text-lg font-semibold">ממוצע = </span>
                  <FormulaBox inline>{"\\frac{70+70+70+80+90+90+100}{7} = \\frac{560}{7} = 80"}</FormulaBox>
                </p>
                <p><strong>חציון:</strong></p>
                <p>יש 7 נתונים (מספר אי-זוגי). האיבר האמצעי (הרביעי) הוא 80.</p>
                <p><strong>שכיח:</strong></p>
                <p>הציון 70 מופיע 3 פעמים (הכי הרבה). השכיח הוא 70.</p>
              </div>
            }
          />
        </div>
      </section>

      {/* Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          בחן את עצמך 🧐
        </h2>        <Quiz questions={quizQuestions} />
      </section>
    </LessonLayout>
  );
};

export default StatisticsIntroLesson;
