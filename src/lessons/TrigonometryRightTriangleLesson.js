import React, { useState } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import HtmlMathBox from '../components/HtmlMathBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

// Interactive Triangle Diagram Component
const TriangleDiagram = ({ showLabels = true, angle = 30, adjacentSide = 10, showValues = false }) => {
  const hypotenuse = adjacentSide / Math.cos(angle * Math.PI / 180);
  
  return (
    <div className="flex justify-center my-6">
      <svg viewBox="0 0 200 150" className="w-64 h-48 border border-gray-300 rounded-lg bg-blue-50">
        <title>משולש ישר-זווית עם סימונים טריגונומטריים</title>
        {/* Triangle */}
        <polygon 
          points="30,30 30,120 150,120" 
          fill="#F0F9FF" 
          stroke="#3B82F6" 
          strokeWidth="2"
        />
        
        {/* Right angle marker */}
        <polyline 
          points="30,105 45,105 45,120" 
          fill="none" 
          stroke="#3B82F6" 
          strokeWidth="2"
        />
        
        {/* Angle arc */}
        <path
          d={`M 50 30 A 20 20 0 0 0 ${30 + 20 * Math.cos(angle * Math.PI / 180)} ${30 + 20 * Math.sin(angle * Math.PI / 180)}`}
          fill="none"
          stroke="#EF4444"
          strokeWidth="2"
        />
        
        {/* Point labels */}
        {showLabels && (
          <>
            <text x="25" y="25" className="text-sm font-semibold" textAnchor="middle">A</text>
            <text x="25" y="135" className="text-sm font-semibold" textAnchor="middle">C</text>
            <text x="155" y="135" className="text-sm font-semibold" textAnchor="middle">B</text>
          </>
        )}
        
        {/* Angle label */}
        <text x="55" y="40" className="text-xs fill-red-600" textAnchor="middle">
          {angle}°
        </text>
        
        {/* Side labels */}
        {showValues ? (
          <>
            <text x="20" y="75" className="text-xs" textAnchor="middle" transform="rotate(-90 20 75)">
              {adjacentSide} ס"מ
            </text>
            <text x="90" y="135" className="text-xs" textAnchor="middle">
              {hypotenuse.toFixed(2)} ס"מ
            </text>
          </>
        ) : (
          <>
            <text x="15" y="75" className="text-xs" textAnchor="middle" transform="rotate(-90 15 75)">
              ניצב ליד α
            </text>
            <text x="90" y="135" className="text-xs" textAnchor="middle">
              ניצב מול α
            </text>
            <text x="90" y="65" className="text-xs" textAnchor="middle" transform="rotate(-35 90 65)">
              יתר
            </text>
          </>
        )}
      </svg>
    </div>
  );
};

// Trigonometric Functions Calculator Component
const TrigCalculator = () => {
  const [angle, setAngle] = useState(30);
  const [hypotenuse, setHypotenuse] = useState(10);
  
  const adjacent = hypotenuse * Math.cos(angle * Math.PI / 180);
  
  const sine = Math.sin(angle * Math.PI / 180);
  const cosine = Math.cos(angle * Math.PI / 180);
  const tangent = Math.tan(angle * Math.PI / 180);
  
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
      <h4 className="text-lg font-semibold mb-3 text-purple-700">מחשבון פונקציות טריגונומטריות</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">זווית (מעלות):</label>
          <input
            type="range"
            min="10"
            max="80"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{angle}°</span>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">אורך היתר:</label>
          <input
            type="range"
            min="5"
            max="20"
            value={hypotenuse}
            onChange={(e) => setHypotenuse(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{hypotenuse} ס"מ</span>
        </div>
      </div>
      
      <TriangleDiagram angle={angle} adjacentSide={adjacent} showValues={true} />      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="text-center">
          <FormulaBox>{`\\sin(${angle}°) = ${sine.toFixed(3)}`}</FormulaBox>
        </div>
        <div className="text-center">
          <FormulaBox>{`\\cos(${angle}°) = ${cosine.toFixed(3)}`}</FormulaBox>
        </div>
        <div className="text-center">
          <FormulaBox>{`\\tan(${angle}°) = ${tangent.toFixed(3)}`}</FormulaBox>
        </div>
      </div>
    </div>
  );
};

// Common trigonometric values table
const CommonTrigValues = () => {
  const values = [
    { angle: 30, sin: '1/2', cos: '√3/2', tan: '1/√3' },
    { angle: 45, sin: '√2/2', cos: '√2/2', tan: '1' },
    { angle: 60, sin: '√3/2', cos: '1/2', tan: '√3' }
  ];
  
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
      <h4 className="text-lg font-semibold mb-3 text-purple-700">ערכים נפוצים של פונקציות טריגונומטריות</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-3 py-2">זווית</th>
              <th className="border border-gray-300 px-3 py-2">sin</th>
              <th className="border border-gray-300 px-3 py-2">cos</th>
              <th className="border border-gray-300 px-3 py-2">tan</th>
            </tr>
          </thead>
          <tbody>
            {values.map(({ angle, sin, cos, tan }) => (
              <tr key={angle}>
                <td className="border border-gray-300 px-3 py-2 text-center">{angle}°</td>                <td className="border border-gray-300 px-3 py-2 text-center">
                  <HtmlMathBox inline>{sin}</HtmlMathBox>
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center">
                  <HtmlMathBox inline>{cos}</HtmlMathBox>
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center">
                  <HtmlMathBox inline>{tan}</HtmlMathBox>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TrigonometryRightTriangleLesson = () => {
  const [exercise1Answer, setExercise1Answer] = useState('');
  const [exercise1Feedback, setExercise1Feedback] = useState('');
  const [showSolution1, setShowSolution1] = useState(false);

  const checkExercise1 = () => {
    const correctAnswer = (10 * Math.sin(40 * Math.PI / 180)).toFixed(2);
    const userAnswer = parseFloat(exercise1Answer);
    const correct = Math.abs(userAnswer - parseFloat(correctAnswer)) < 0.1;
    
    if (correct) {
      setExercise1Feedback('כל הכבוד! התשובה נכונה. הניצב שמול זווית 40° הוא 6.43 ס"מ.');
    } else {
      setExercise1Feedback(`התשובה לא נכונה. התשובה הנכונה היא ${correctAnswer} ס"מ. נסה שוב או הצג את הפתרון.`);
    }
  };
  const quizQuestions = [
    {
      question: "במשולש ישר-זווית, הניצב שליד זווית α הוא 8 ס״מ והיתר הוא 10 ס״מ. מהו cos(α)?",
      options: [
        { value: 'a', text: '0.6' },
        { value: 'b', text: '0.8' },
        { value: 'c', text: '1.25' },
        { value: 'd', text: '0.5' }
      ],
      correct: 'b',
      explanation: 'cos(α) = ניצב ליד / יתר = 8/10 = 0.8'
    }
  ];

  return (
    <LessonLayout
      title="טריגונומטריה במשולש ישר-זווית"
      lessonId="35182-trigonometry-right-triangle"
      nextLessonPath="/lessons/questionnaire-35182-summary"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            טריגונומטריה היא ענף במתמטיקה העוסק בקשרים בין זוויות וצלעות במשולשים. 
            בשלב זה, נתמקד במשולשים ישרי זווית.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-3 text-purple-600">
              הגדרות במשולש ישר-זווית
            </h3>
            <p className="mb-3">
              במשולש ישר-זווית ABC, כאשר <FormulaBox>\angle C = 90^\circ</FormulaBox>:
            </p>
            
            <TriangleDiagram />
            
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>הצלע שמול הזווית הישרה (AB) נקראת <strong>יתר</strong>.</li>
              <li>שתי הצלעות האחרות (AC ו-BC) נקראות <strong>ניצבים</strong>.</li>
              <li>
                ביחס לזווית חדה <FormulaBox>\alpha</FormulaBox> (בסקיצה זו, <FormulaBox>\alpha = \angle A</FormulaBox>):
                <ul className="list-disc list-inside mr-6 mt-2 space-y-1">                  <li>הניצב שמול הזווית <FormulaBox>\alpha</FormulaBox> (הצלע BC) נקרא <strong>הניצב שמול הזווית</strong>.</li>
                  <li>הניצב שליד הזווית <FormulaBox>\alpha</FormulaBox> (הצלע AC) נקרא <strong>הניצב שליד הזווית</strong>.</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-3 text-purple-600">
              הפונקציות הטריגונומטריות הבסיסיות
            </h3>
            <p className="mb-3">
              עבור זווית חדה <FormulaBox>\alpha</FormulaBox> במשולש ישר-זווית, מוגדרות הפונקציות הבאות:
            </p>              <div className="space-y-3">                <div className="flex items-center space-x-4">
                  <strong>סינוס (Sine):</strong>
                  <HtmlMathBox inline>
                    {"sin(α) = \\frac{\\text{ניצב מול}}{\\text{יתר}}"}
                  </HtmlMathBox>
                </div>                <div className="flex items-center space-x-4">
                  <strong>קוסינוס (Cosine):</strong>
                  <HtmlMathBox inline>
                    {"cos(α) = \\frac{\\text{ניצב ליד}}{\\text{יתר}}"}
                  </HtmlMathBox>
                </div>                <div className="flex items-center space-x-4">
                  <strong>טנגנס (Tangent):</strong>
                  <HtmlMathBox inline>
                    {"tan(α) = \\frac{\\text{ניצב מול}}{\\text{ניצב ליד}}"}
                  </HtmlMathBox>
                </div>
              </div>
            
            <p className="mt-3">
              פונקציות אלו מאפשרות לנו למצוא אורכי צלעות או גדלי זוויות במשולש ישר-זווית.
            </p>
          </div>
          
          <TrigCalculator />
          
          <CommonTrigValues />
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-3 text-purple-700">
              דוגמה פתורה:
            </h4>
            <p className="font-medium mb-3">              במשולש ישר זווית ABC (<FormulaBox>\angle C=90^\circ</FormulaBox>), נתון: 
              <FormulaBox>\angle A=30^\circ</FormulaBox>, <FormulaBox>AC=10</FormulaBox> ס"מ.
              חשב את אורך הניצב BC.
            </p>
            
            <TriangleDiagram angle={30} adjacentSide={10} showValues={true} />
            
            <div className="mt-4 space-y-2">
              <p><strong>פתרון:</strong></p>
              <p>ביחס לזווית A (<FormulaBox inline>30^\\circ</FormulaBox>):</p>
              <ul className="list-disc list-inside mr-4">
                <li>הניצב שמול הזווית הוא BC (אותו אנו מחפשים).</li>
                <li>הניצב שליד הזווית הוא AC (שאורכו 10 ס"מ).</li>
              </ul>
                <p>הפונקציה המקשרת בין ניצב מול וניצב ליד היא טנגנס:</p>
              <FormulaBox>{"\\tan(A) = \\frac{BC}{AC}"}</FormulaBox>
              
              <p>נציב את הנתונים:</p>
              <FormulaBox>{"\\tan(30^\\circ) = \\frac{BC}{10}"}</FormulaBox>
              
              <p>כדי למצוא את BC, נכפול ב-10:</p>
              <FormulaBox>{"BC = 10 \\cdot \\tan(30^\\circ)"}</FormulaBox>
              
              <p>באמצעות מחשבון: <FormulaBox inline>\\tan(30^\\circ) \\approx 0.577</FormulaBox>.</p>
              <FormulaBox>BC \\approx 10 \\cdot 0.577 = 5.77</FormulaBox>
              
              <p className="font-semibold text-green-700">
                אורך הניצב BC הוא כ-5.77 ס"מ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
          <Exercise
          question="במשולש ישר-זווית, היתר הוא 10 ס״מ ואחת הזוויות החדות היא 40°. חשב את אורך הניצב שמול זווית זו (עגל לשתי ספרות אחרי הנקודה)."
          diagram={<TriangleDiagram angle={40} adjacentSide={10 * Math.cos(40 * Math.PI / 180)} showValues={false} />}
          answer={exercise1Answer}
          onAnswerChange={setExercise1Answer}
          onCheck={checkExercise1}
          feedback={exercise1Feedback}
          showSolution={showSolution1}
          onShowSolution={() => setShowSolution1(true)}
          solution={
            <div className="space-y-2">
              <p><strong>פתרון מלא:</strong></p>              <p>נסמן את הניצב שמול הזווית ב-<FormulaBox inline>{"a"}</FormulaBox>. נשתמש בפונקציית הסינוס:</p>
              <FormulaBox>{"\\sin(40^\\circ) = \\frac{a}{10}"}</FormulaBox>
              <FormulaBox>{"a = 10 \\cdot \\sin(40^\\circ) \\approx 10 \\cdot 0.6428 \\approx 6.43"}</FormulaBox>
              <p>התשובה: 6.43 ס״מ</p>
            </div>
          }
        />
      </section>

      {/* Quiz Section */}      <Quiz questions={quizQuestions} />
    </LessonLayout>
  );
};

export default TrigonometryRightTriangleLesson;
