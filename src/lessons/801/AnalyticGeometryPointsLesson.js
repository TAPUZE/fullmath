import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import Breadcrumb from '../../components/layout/Breadcrumb';
import { CoordinateSystem, Point } from '../../components/ui/GraphComponents';

const AnalyticGeometryPointsLesson = () => {
  // Exercise definitions
  const exercises = [
    {
      id: 'quadrant-identification',
      question: (
        <span>
          באיזה רביע נמצאת הנקודה <FormulaBox inline>{`Q(5, -3)`}</FormulaBox>?
        </span>
      ),
      type: 'input',
      correctAnswer: '4',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>לנקודה <FormulaBox inline>{`Q(5, -3)`}</FormulaBox> יש שיעור X חיובי (<FormulaBox inline>{`5 > 0`}</FormulaBox>) ושיעור Y שלילי (<FormulaBox inline>{`-3 < 0`}</FormulaBox>).</p>
          <p>לכן, הנקודה נמצאת ברביע הרביעי (IV).</p>
        </div>
      ),
      placeholder: 'הכנס מספר רביע (1, 2, 3, או 4)'
    },
    {
      id: 'movement-description',
      question: (
        <span>
          תאר במילים כיצד היית מסמן את הנקודה <FormulaBox inline>{`M(-1, -4)`}</FormulaBox> במערכת צירים, החל מראשית הצירים.
        </span>
      ),
      type: 'textarea',
      correctAnswerKeywords: ['שמאלה', 'למטה', '1', '4'],
      solution: (
        <div>
          <p><strong>פתרון לדוגמה:</strong></p>
          <p>מתחילים בראשית הצירים (0,0). זזים יחידה אחת שמאלה (בגלל ה-1-), ולאחר מכן זזים 4 יחידות למטה (בגלל ה-4-).</p>
        </div>
      ),
      placeholder: 'לדוגמה: זזים X יחידות ימינה/שמאלה, ואז Y יחידות למעלה/למטה.'
    },
    {
      id: 'point-identification',
      question: (
        <span>
          בהתייחס לתרשים מערכת הצירים הראשית למעלה, איזו אות מייצגת את הנקודה <FormulaBox inline>{`(4, -1)`}</FormulaBox>?
        </span>
      ),
      type: 'input',
      correctAnswer: 'D',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>הנקודה <FormulaBox inline>{`(4, -1)`}</FormulaBox> נמצאת 4 יחידות ימינה ו-1 יחידה למטה. בתרשים, זוהי הנקודה D.</p>
        </div>
      ),
      placeholder: 'הכנס אות (A, B, C, או D)'
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      id: 'origin-coordinates',
      question: 'מהן הקואורדינטות של ראשית הצירים?',
      options: [        { id: 'a', text: <FormulaBox inline>{`(1,1)`}</FormulaBox> },
        { id: 'b', text: <FormulaBox inline>{`(0,0)`}</FormulaBox> },
        { id: 'c', text: <FormulaBox inline>{`(0,1)`}</FormulaBox> },
        { id: 'd', text: <FormulaBox inline>{`(1,0)`}</FormulaBox> }
      ],
      correctAnswer: 'b',
      explanation: (
        <div>
          <p>ראשית הצירים היא הנקודה שבה שני הצירים נחתכים.</p>
          <p>הקואורדינטות שלה הן <FormulaBox inline>{`(0,0)`}</FormulaBox> - אפס ציר X ואפס ציר Y.</p>
        </div>
      )
    },
    {
      id: 'quadrant-negative',
      question: (
        <span>
          נקודה <FormulaBox inline>{`(-2, -5)`}</FormulaBox> נמצאת באיזה רביע?
        </span>
      ),
      options: [
        { id: 'a', text: 'רביע I' },
        { id: 'b', text: 'רביע II' },
        { id: 'c', text: 'רביע III' },
        { id: 'd', text: 'רביע IV' }
      ],
      correctAnswer: 'c',
      explanation: (
        <div>
          <p>נקודה <FormulaBox inline>{`(-2, -5)`}</FormulaBox> יש לה שני קואורדינטות שליליות.</p>
          <p>רביע III הוא האזור שבו גם ציר X וגם ציר Y שליליים.</p>
        </div>
      )
    }
  ];

  return (
    <LessonLayout
      title="מערכת צירים ונקודות"
      lessonId="35182-analytic-geometry-points"
      nextLessonPath="/lessons/analytic-geometry-distance"
    >
      <Breadcrumb
        links={[
          { label: 'דף ראשי', path: '/' },
          { label: 'שאלון 35182', path: '/questionnaire_35182_lessons_he' },
          { label: 'גיאומטריה אנליטית', path: '/analytic-geometry' },
          { label: 'מערכת צירים ונקודות', path: '#' },
        ]}
      />

      <section id="learn" className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">
          לומדים 📚
        </h2>        <div className="space-y-6 text-gray-700 leading-relaxed" dir="rtl">
          <p>מערכת צירים קרטזית (דו-ממדית) מאפשרת לנו למקם נקודות במישור באמצעות זוג סדור של מספרים הנקראים קואורדינטות.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">מרכיבי מערכת הצירים:</h3>
          <ul className="list-disc list-inside space-y-1 pr-5">
            <li><strong>ציר ה-X (ציר אופקי):</strong> הציר המאוזן. ערכים חיוביים נמצאים מימין לראשית הצירים, וערכים שליליים משמאלה.</li>
            <li><strong>ציר ה-Y (ציר אנכי):</strong> הציר המאונך. ערכים חיוביים נמצאים מעל לראשית הצירים, וערכים שליליים מתחתיה.</li>
            <li><strong>ראשית הצירים:</strong> הנקודה שבה שני הצירים נחתכים. הקואורדינטות שלה הן <FormulaBox inline>{`(0,0)`}</FormulaBox>.</li>
          </ul>          <div className="text-center my-6">
            <CoordinateSystem 
              width={320} 
              height={320} 
              viewBox="-160 -160 320 320"
              showGrid={true}
              gridPattern="lines"
            >
              {/* Sample points for demonstration */}
              <Point x={80} y={-60} label="A(4,3)" color="#3B82F6" labelOffset={{ dx: 8, dy: -5 }} />
              <Point x={-60} y={40} label="B(-3,-2)" color="#EF4444" labelOffset={{ dx: -25, dy: 5 }} />
              <Point x={40} y={80} label="C(2,-4)" color="#10B981" labelOffset={{ dx: 8, dy: 5 }} />
              <Point x={-80} y={-40} label="D(-4,2)" color="#F59E0B" labelOffset={{ dx: -25, dy: -5 }} />
            </CoordinateSystem>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">רביעים (Quadrants)</h3>
          <p>שני הצירים מחלקים את המישור לארבעה אזורים הנקראים רביעים, הממוספרים נגד כיוון השעון.</p>
          <ul className="list-disc list-inside space-y-1 pr-5">
            <li><strong>רביע I (ראשון):</strong> <span dir="ltr" className="formula-box inline-block bg-gray-200 px-2 py-1 rounded mx-1">x &gt; 0, y &gt; 0</span> (ימין למעלה)</li>
            <li><strong>רביע II (שני):</strong> <span dir="ltr" className="formula-box inline-block bg-gray-200 px-2 py-1 rounded mx-1">x &lt; 0, y &gt; 0</span> (שמאל למעלה)</li>
            <li><strong>רביע III (שלישי):</strong> <span dir="ltr" className="formula-box inline-block bg-gray-200 px-2 py-1 rounded mx-1">x &lt; 0, y &lt; 0</span> (שמאל למטה)</li>
            <li><strong>רביע IV (רביעי):</strong> <span dir="ltr" className="formula-box inline-block bg-gray-200 px-2 py-1 rounded mx-1">x &gt; 0, y &lt; 0</span> (ימין למטה)</li>
          </ul>
        </div>
      </section>      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
          מתרגלים ✍️
        </h2>
          <div className="space-y-8 mt-6" dir="rtl">
          <div className="bg-gray-50 p-4 border border-gray-300 rounded-lg">
            <p className="font-medium mb-4" dir="rtl">תרגיל 1: התבונן במערכת הצירים למטה. מהן הקואורדינטות של נקודה P?</p>
            
            <div className="text-center my-4">
              <CoordinateSystem 
                width={200} 
                height={200} 
                viewBox="-55 -55 110 110"
                showGrid={true}
                gridPattern="lines"
              >
                {/* Point P for exercise */}
                <Point x={-40} y={-20} label="P" color="#059669" labelOffset={{ dx: 5, dy: -3 }} />
              </CoordinateSystem>
            </div>
            
            <InteractiveExercise
              id="coordinate-identification"
              question="הכנס את הקואורדינטות של נקודה P"
              type="input"
              correctAnswer="-4,2"
              solution={
                <div>
                  <p><strong>פתרון מלא:</strong></p>
                  <p>הנקודה P נמצאת 4 יחידות שמאלה מציר ה-Y (ולכן שיעור ה-X הוא -4) ו-2 יחידות מעל ציר ה-X (ולכן שיעור ה-Y הוא 2). הקואורדינטות של P הן (-4,2).</p>
                </div>
              }
              placeholder="הכנס קואורדינטות (למשל: 3,2 או (-4,2))"
            />
          </div>
          
          {exercises.map((exercise, index) => (
            <InteractiveExercise
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              type={exercise.type}
              correctAnswer={exercise.correctAnswer}
              correctAnswerKeywords={exercise.correctAnswerKeywords}
              solution={exercise.solution}
              placeholder={exercise.placeholder}
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          בחן את עצמך 🧐
        </h2>
        <div dir="rtl">
          <Quiz questions={quizQuestions} />
        </div>
      </section>
    </LessonLayout>
  );
};

export default AnalyticGeometryPointsLesson;
