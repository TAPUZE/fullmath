import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import StepByStepSolution from '../../components/math/StepByStepSolution';
import { CoordinateSystem, Point } from '../../components/ui/GraphComponents';

const AnalyticGeometryPointsLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: (
        <div>
          <p>תרגיל 1: באיזה רביע נמצאת הנקודה <FormulaBox inline>{`Q(5, -3)`}</FormulaBox>?</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'רביע',
        type: 'text',
        placeholder: 'הכנס מספר רביע (1, 2, 3, או 4)'
      }],
      correctAnswers: { answer: '4' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "נקודה <FormulaBox inline>{`Q(5, -3)`}</FormulaBox> יש שיעור X חיובי:", formula: "5 > 0" },
            { step: "שיעור Y שלילי:", formula: "-3 < 0" },
            { step: "לכן, הנקודה נמצאת ברביע הרביעי (IV)", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: (
        <div>
          <p>תרגיל 2: תאר במילים כיצד היית מסמן את הנקודה <FormulaBox inline>{`M(-1, -4)`}</FormulaBox> במערכת צירים, החל מראשית הצירים.</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תיאור',
        type: 'textarea',
        placeholder: 'לדוגמה: זזים X יחידות ימינה/שמאלה, ואז Y יחידות למעלה/למטה.'
      }],
      correctAnswers: { answer: 'שמאלה,למטה,1,4' },
      correctAnswerKeywords: ['שמאלה', 'למטה', '1', '4'],
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "מתחילים בראשית הצירים (0,0)" },
            { step: "זזים יחידה אחת שמאלה (בגלל ה-1-)" },
            { step: "זזים 4 יחידות למטה (בגלל ה-4-)" },
            { step: "הנקודה M(-1,-4) נמצאת ברביע השלישי", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex3',
      question: (
        <div>
          <p>תרגיל 3: בהתייחס לתרשים מערכת הצירים הראשית למעלה, איזו אות מייצגת את הנקודה <FormulaBox inline>{`(4, -1)`}</FormulaBox>?</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'אות',
        type: 'text',
        placeholder: 'הכנס אות (A, B, C, או D)'
      }],
      correctAnswers: { answer: 'D' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "הנקודה <FormulaBox inline>{`(4, -1)`}</FormulaBox> נמצאת 4 יחידות ימינה" },
            { step: "ו-1 יחידה למטה" },
            { step: "בתרשים, זוהי הנקודה D", highlight: true }
          ]}
        />
      )
    }
  ];

  return (
    <LessonLayout
      title="מערכת צירים ונקודות"
      lessonId="35182-analytic-geometry-points"
      nextLessonPath="/lessons/analytic-geometry-distance"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            מערכת צירים קרטזית (דו-ממדית) מאפשרת לנו למקם נקודות במישור באמצעות זוג סדור של מספרים הנקראים קואורדינטות.
          </p>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">מרכיבי מערכת הצירים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5 mt-2">
              <li><strong>ציר ה-X (ציר אופקי):</strong> הציר המאוזן. ערכים חיוביים נמצאים מימין לראשית הצירים, וערכים שליליים משמאלה.</li>
              <li><strong>ציר ה-Y (ציר אנכי):</strong> הציר המאונך. ערכים חיוביים נמצאים מעל לראשית הצירים, וערכים שליליים מתחתיה.</li>
              <li><strong>ראשית הצירים:</strong> הנקודה שבה שני הצירים נחתכים. הקואורדינטות שלה הן <FormulaBox inline>{`(0,0)`}</FormulaBox>.</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה:</h4>
            <p className="font-medium">מצא את הקואורדינטות של נקודה P במערכת הצירים.</p>
            
            <div className="text-center my-4">
              <CoordinateSystem 
                width={200} 
                height={200} 
                viewBox="-55 -55 110 110"
                showGrid={true}
                gridPattern="lines"
              >
                <Point x={-40} y={-20} label="P" color="#059669" labelOffset={{ dx: 5, dy: -3 }} />
              </CoordinateSystem>
            </div>
            
            <StepByStepSolution
              title="פתרון מלא:"
              steps={[
                { step: "הנקודה P נמצאת 4 יחידות שמאלה מציר ה-Y:", formula: "x = -4" },
                { step: "ו-2 יחידות מעל ציר ה-X:", formula: "y = 2" },
                { step: "התשובה:", formula: "P(-4,2)", highlight: true }
              ]}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">טיפים חשובים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5">
              <li>תמיד לזכור שציר ה-X הוא אופקי וציר ה-Y הוא אנכי.</li>
              <li>לזכור את סדר הקואורדינטות: (x,y) - קודם x ואז y.</li>
              <li>לשים לב לסימנים של הקואורדינטות (חיוביים או שליליים).</li>
              <li>לבדוק באיזה רביע נמצאת הנקודה לפי הסימנים של הקואורדינטות.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        
        <div className="space-y-8">
          {exercises.map((exercise) => (
            <InteractiveExercise
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              inputs={exercise.inputs}
              correctAnswers={exercise.correctAnswers}
              solution={exercise.solution}
              correctAnswerKeywords={exercise.correctAnswerKeywords}
              lessonId="analytic-geometry-points"
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz
        title="בחן את עצמך 🧐"
        questions={[
          {
            id: 'q1',
            question: 'איזו מהנקודות הבאות נמצאת ברביע השני?',
            options: [
              '(3,4)',
              '(-3,4)',
              '(-3,-4)',
              '(3,-4)'
            ],
            correctAnswer: '(-3,4)',
            explanation: 'ברביע השני, שיעור ה-X שלילי ושיעור ה-Y חיובי.'
          },
          {
            id: 'q2',
            question: 'מהן הקואורדינטות של נקודה שנמצאת 2 יחידות ימינה ו-3 יחידות למטה מראשית הצירים?',
            options: [
              '(2,3)',
              '(2,-3)',
              '(-2,3)',
              '(-2,-3)'
            ],
            correctAnswer: '(2,-3)',
            explanation: 'ימינה = x חיובי, למטה = y שלילי. לכן הקואורדינטות הן (2,-3).'
          },
          {
            id: 'q3',
            question: 'איזו מהנקודות הבאות נמצאת על ציר ה-Y?',
            options: [
              '(0,5)',
              '(5,0)',
              '(5,5)',
              '(0,0)'
            ],
            correctAnswer: '(0,5)',
            explanation: 'נקודה על ציר ה-Y חייבת להיות עם שיעור x=0.'
          }
        ]}
      />
    </LessonLayout>
  );
};

export default AnalyticGeometryPointsLesson;
