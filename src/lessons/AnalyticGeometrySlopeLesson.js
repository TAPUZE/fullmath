import React, { useState } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

// Define the missing variables at the top of the file
const x_1 = 0, x_2 = 0, y_1 = 0, y_2 = 0; // Replace with appropriate values or imports

// Custom slope visualization component
const SlopeVisualization = ({ points, showSlopeTriangle = true, lineColor = '#D946EF' }) => {
  const [point1, point2] = points;
  
  return (
    <div className="flex justify-center items-center my-6 p-4 border border-gray-300 rounded-lg bg-white">
      <svg width="360" height="220" viewBox="-30 -85 170 110" className="stroke-gray-700">
        <title>המחשת שיפוע ישר</title>
        
        {/* Grid */}
        <defs>
          <pattern id="gridSlope" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#E0E0E0" strokeWidth="0.5" strokeDasharray="2,2" />
          </pattern>
        </defs>
        <rect x="-25" y="-80" width="160" height="100" fill="url(#gridSlope)" />
        
        {/* Axes */}
        <line stroke="#1F2937" strokeWidth="1.5" x1="-20" y1="0" x2="120" y2="0" />
        <line stroke="#1F2937" strokeWidth="1.5" x1="0" y1="-75" x2="0" y2="15" />
        
        {/* Arrows */}
        <polygon points="120,0 115,-4 115,4" fill="#1F2937" />
        <polygon points="0,-75 -4,-70 4,-70" fill="#1F2937" />
        
        {/* Axis labels */}
        <text x="125" y="3" className="text-xs font-semibold fill-gray-800">x</text>
        <text x="5" y="-77" className="text-xs font-semibold fill-gray-800">y</text>
        
        {/* Points */}
        <circle cx={point1.x} cy={point1.y} r="2.5" fill="#3B82F6" stroke="#1E40AF" />
        <text x={point1.x} y={point1.y} dx="-14" dy="-4" className="text-xs font-medium fill-blue-700">
          A(x₁,y₁)
        </text>
        
        <circle cx={point2.x} cy={point2.y} r="2.5" fill="#EF4444" stroke="#991B1B" />
        <text x={point2.x} y={point2.y} dx="17" dy="-4" className="text-xs font-medium fill-red-700">
          B(x₂,y₂)
        </text>
        
        {/* Line */}
        <line 
          x1={point1.x} 
          y1={point1.y} 
          x2={point2.x} 
          y2={point2.y} 
          stroke={lineColor} 
          strokeWidth="2" 
        />
        
        {/* Slope triangle */}
        {showSlopeTriangle && (
          <>
            <line 
              x1={point1.x} 
              y1={point1.y} 
              x2={point2.x} 
              y2={point1.y} 
              stroke="#2563EB" 
              strokeWidth="1.2" 
              strokeDasharray="3,2" 
            />
            <line 
              x1={point2.x} 
              y1={point1.y} 
              x2={point2.x} 
              y2={point2.y} 
              stroke="#2563EB" 
              strokeWidth="1.2" 
              strokeDasharray="3,2" 
            />
            <text 
              x={(point1.x + point2.x) / 2} 
              y={point1.y + 12} 
              className="text-xs fill-blue-600 italic"
              textAnchor="middle"
            >
              x₂ - x₁
            </text>
            <text 
              x={point2.x + 18} 
              y={(point1.y + point2.y) / 2} 
              className="text-xs fill-blue-600 italic"
              textAnchor="middle"
            >
              y₂ - y₁
            </text>
          </>
        )}
      </svg>
    </div>
  );
};

// Custom line equation diagram
const LineEquationDiagram = ({ slope, intercept, point, title, width = 300, height = 200 }) => {
  const viewBox = `0 -5 120 110`;
  
  return (
    <div className="flex flex-col items-center my-4 p-2 border border-gray-300 rounded-lg bg-white">
      <svg width={width} height={height} viewBox={viewBox} className="stroke-gray-600">
        <title>{title}</title>
        
        {/* Grid */}
        <defs>
          <pattern id={`grid-${slope}-${intercept}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#E0E0E0" strokeWidth="0.5" strokeDasharray="2,2" />
          </pattern>
        </defs>
        <rect x="-15" y="-5" width="110" height="100" fill={`url(#grid-${slope}-${intercept})`} />
        
        {/* Axes */}
        <line stroke="#1F2937" strokeWidth="1.5" x1="0" y1="85" x2="100" y2="85" />
        <line stroke="#1F2937" strokeWidth="1.5" x1="15" y1="0" x2="15" y2="95" />
        
        {/* Axis labels */}
        <text x="103" y="85" dy="3" className="text-xs font-semibold fill-gray-800">x</text>
        <text x="15" y="-3" className="text-xs font-semibold fill-gray-800">y</text>
        
        {/* Line */}
        <line 
          x1="5" 
          y1={85 - (slope * (-1) + intercept) * 10} 
          x2="95" 
          y2={85 - (slope * 8 + intercept) * 10} 
          stroke="#D946EF" 
          strokeWidth="2" 
        />
        
        {/* Point */}
        {point && (
          <>
            <circle 
              cx={15 + point.x * 10} 
              cy={85 - point.y * 10} 
              r="2.5" 
              fill="#10B981" 
              stroke="#047857" 
            />
            <text 
              x={15 + point.x * 10} 
              y={85 - point.y * 10} 
              dx="10" 
              dy="-3" 
              className="text-xs fill-green-700"
            >
              ({point.x},{point.y})
            </text>
          </>
        )}
        
        {/* Y-intercept */}
        <circle 
          cx="15" 
          cy={85 - intercept * 10} 
          r="2" 
          fill="#4B5563" 
        />
        <text 
          x="15" 
          y={85 - intercept * 10} 
          dx="-10" 
          dy="-2" 
          className="text-xs fill-gray-600"
        >
          (0,{intercept})
        </text>
        
        {/* Grid labels */}
        <text x="25" y="85" dy="8" className="text-xs fill-gray-600">1</text>
        <text x="15" y={85 - point?.y * 10} dy="3" dx="-6" className="text-xs fill-gray-600">
          {point?.y}
        </text>
      </svg>
    </div>
  );
};

// Custom line equation exercise checker
const LineEquationExercise = ({ question, slope, intercept, solution }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const checkAnswer = () => {
    // Parse y = mx + n format
    const cleanAnswer = answer.toLowerCase().replace(/\s/g, '');
    const yPattern = /y=(-?\d*\.?\d*)x([+-]\d+\.?\d*)/;
    const match = cleanAnswer.match(yPattern);
    
    if (match) {
      const userSlope = match[1] === '' || match[1] === '-' ? (match[1] === '-' ? '-1' : '1') : match[1];
      const userIntercept = match[2].replace('+', '');
      
      if (userSlope === slope && userIntercept === intercept) {
        setFeedback({ type: 'success', message: 'כל הכבוד! התשובה נכונה.' });
      } else {
        setFeedback({ type: 'error', message: 'התשובה אינה נכונה. בדוק את השיפוע והקבוע החופשי.' });
      }
    } else {
      setFeedback({ type: 'error', message: 'אנא הכנס משוואה בפורמט y=mx+n' });
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
      <p className="font-medium mb-4">{question}</p>
      
      <div className="mt-3">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="הכנס משוואת ישר (לדוגמה: y=2x+3)"
        />
      </div>
      
      <div className="mt-3 space-x-2">
        <button
          onClick={checkAnswer}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
        >
          בדוק תשובה
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md ml-2"
        >
          הצג פתרון
        </button>
      </div>
      
      {feedback && (
        <div className={`mt-3 p-3 rounded-md text-sm ${
          feedback.type === 'success' 
            ? 'bg-green-100 border border-green-300 text-green-600' 
            : 'bg-red-100 border border-red-300 text-red-600'
        }`}>
          <p className="font-semibold">{feedback.message}</p>
        </div>
      )}
      
      {showSolution && (
        <div className="mt-3 p-3 border-t border-gray-200 bg-white rounded-md">
          {solution}
        </div>
      )}
    </div>
  );
};

const AnalyticGeometrySlopeLesson = () => {
  // Exercise definitions
  const exercises = [
    {
      id: 'slope-calculation',
      question: (
        <span>
          מצא את שיפוע הישר העובר דרך הנקודות <FormulaBox inline>A(2,3)</FormulaBox> ו-<FormulaBox inline>B(4,7)</FormulaBox>.
        </span>
      ),
      type: 'input',
      correctAnswer: '2',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <FormulaBox>m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{7 - 3}{4 - 2} = \frac{4}{2} = 2</FormulaBox>
          <p>השיפוע הוא 2.</p>
          <LineEquationDiagram 
            slope={2} 
            intercept={-1} 
            point={{x: 2, y: 3}} 
            title="ישר דרך A(2,3) ו-B(4,7)" 
          />
        </div>
      ),
      placeholder: 'הכנס שיפוע'
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      id: 'slope-calculation-quiz',
      question: (
        <span>
          מהו שיפוע הישר העובר דרך הנקודות <FormulaBox inline>(1,1)</FormulaBox> ו-<FormulaBox inline>(3,5)</FormulaBox>?
        </span>
      ),
      options: [
        { id: 'a', text: '1' },
        { id: 'b', text: '2' },
        { id: 'c', text: '0.5' },
        { id: 'd', text: '-2' }
      ],
      correctAnswer: 'b',
      explanation: (
        <div>
          <p>השיפוע מחושב על פי הנוסחה:</p>
          <FormulaBox>m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{5 - 1}{3 - 1} = \frac{4}{2} = 2</FormulaBox>
        </div>
      )
    },
    {
      id: 'line-equation-quiz',
      question: (
        <span>
          מהי משוואת הישר ששיפועו 1 וחותך את ציר ה-Y בנקודה <FormulaBox inline>(0,-3)</FormulaBox>?
        </span>
      ),
      options: [        { id: 'a', text: <FormulaBox inline>y = -3x + 1</FormulaBox> },
        { id: 'b', text: <FormulaBox inline>y = x - 3</FormulaBox> },
        { id: 'c', text: <FormulaBox inline>y = x + 3</FormulaBox> },
        { id: 'd', text: <FormulaBox inline>y = 3x - 1</FormulaBox> }
      ],
      correctAnswer: 'b',
      explanation: (
        <div>
          <p>במשוואה <FormulaBox inline>y = mx + n</FormulaBox>:</p>
          <p>השיפוע m = 1 ונקודת החיתוך עם ציר Y היא (0,-3), אז n = -3</p>
          <p>לכן המשוואה היא <FormulaBox inline>y = x - 3</FormulaBox></p>
        </div>
      )
    }
  ];

  return (
    <LessonLayout
      title="שיפוע ומשוואת הישר"
      lessonId="35182-analytic-geometry-slope"
      nextLessonPath="/lessons/sequences-arithmetic-intro"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>הקו הישר הוא אחד המושגים הבסיסיים בגיאומטריה אנליטית. אנו מתארים אותו באמצעות השיפוע שלו והמשוואה האלגברית המייצגת אותו.</p>
          
          <div className="sub-section">
            <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-600">1. שיפוע של ישר (<FormulaBox inline>m</FormulaBox>)</h3>
            <p>השיפוע של ישר מתאר את "התלילות" שלו, כלומר, בכמה הישר עולה או יורד עבור כל יחידת התקדמות אופקית.</p>
            <p>אם נתונות שתי נקודות על הישר, <FormulaBox inline>A(x_1, y_1)</FormulaBox> ו-<FormulaBox inline>B(x_2, y_2)</FormulaBox>, השיפוע <FormulaBox inline>m</FormulaBox> מחושב כך:</p>
              <FormulaBox>
              m = \frac{y_2 - y_1}{x_2 - x_1}
            </FormulaBox>
            
            <p>חשוב לשים לב: <FormulaBox inline>x_2 \neq x_1</FormulaBox> (אחרת הישר הוא אנכי והשיפוע אינו מוגדר).</p>
            <p>השיפוע מייצג את היחס בין השינוי ב-<FormulaBox inline>y</FormulaBox> (הפרש הגבהים) לשינוי ב-<FormulaBox inline>x</FormulaBox> (הפרש המרחקים האופקיים) בין שתי נקודות על הישר.</p>
            
            <SlopeVisualization 
              points={[
                { x: 10, y: -50 },
                { x: 70, y: -20 }
              ]} 
            />
            
            <ul className="list-disc list-inside space-y-1 pr-5 mt-3">
              <li>אם <FormulaBox inline>{`m > 0`}</FormulaBox>, הישר "עולה" משמאל לימין.</li>
              <li>אם <FormulaBox inline>m &lt; 0</FormulaBox>, הישר "יורד" משמאל לימין.</li>
              <li>אם <FormulaBox inline>m = 0</FormulaBox>, הישר אופקי (מקביל לציר ה-X).</li>
              <li>אם השיפוע אינו מוגדר, הישר אנכי (מקביל לציר ה-Y).</li>
            </ul>
          </div>

          <div className="sub-section">
            <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-600">2. משוואת הישר</h3>
            <p>המשוואה האלגברית המייצגת קו ישר נקראת משוואת הישר. ישנן מספר צורות להצגתה:</p>
            
            <h4 className="text-lg font-semibold mt-3 mb-1">א. הצורה המפורשת: <FormulaBox inline>y = mx + n</FormulaBox></h4>
            <p>זוהי הצורה הנפוצה ביותר. במשוואה זו:</p>
            <ul className="list-disc list-inside space-y-1 pr-5">
              <li><FormulaBox inline>m</FormulaBox> הוא <strong>השיפוע</strong> של הישר.</li>
              <li><FormulaBox inline>n</FormulaBox> הוא <strong>שיעור ה-Y של נקודת החיתוך של הישר עם ציר ה-Y</strong> (הנקודה <FormulaBox inline>(0,n)</FormulaBox>).</li>
            </ul>

            <h4 className="text-lg font-semibold mt-3 mb-1">ב. מציאת משוואת ישר על פי שיפוע ונקודה</h4>
            <p>אם ידוע שיפוע הישר <FormulaBox inline>m</FormulaBox> ונקודה <FormulaBox inline>(x_1, y_1)</FormulaBox> הנמצאת על הישר, ניתן להשתמש בנוסחה:</p>
              <FormulaBox>
              y - y_1 = m(x - x_1)
            </FormulaBox>
            
            <p>לאחר הצבת הערכים, מפשטים את המשוואה לצורה המפורשת <FormulaBox inline>y = mx + n</FormulaBox>.</p>

            <h4 className="text-lg font-semibold mt-3 mb-1">ג. מציאת משוואת ישר על פי שתי נקודות</h4>
            <p>אם נתונות שתי נקודות <FormulaBox inline>(x_1, y_1)</FormulaBox> ו-<FormulaBox inline>(x_2, y_2)</FormulaBox> הנמצאות על הישר:</p>
            <ol className="list-decimal list-inside space-y-1 pr-5">
              <li>תחילה, מחשבים את השיפוע <FormulaBox inline>m</FormulaBox>.</li>
              <li>לאחר מכן, משתמשים בשיפוע <FormulaBox inline>m</FormulaBox> ובאחת מהנקודות בנוסחה <FormulaBox inline>y - y_1 = m(x - x_1)</FormulaBox>.</li>
              <li>מפשטים את המשוואה.</li>
            </ol>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה (מציאת משוואת ישר ע"פ שיפוע ונקודה):</h4>
            <p className="font-medium">שאלה: מצא את משוואת הישר ששיפועו 3 ועובר דרך הנקודה <FormulaBox inline>(1,5)</FormulaBox>.</p>
            
            <LineEquationDiagram 
              slope={3} 
              intercept={2} 
              point={{x: 1, y: 5}} 
              title="ישר y=3x+2 העובר דרך (1,5)" 
            />
            
            <p className="mt-2"><strong>פתרון:</strong></p>
            <p>נתון: <FormulaBox inline>m=3</FormulaBox>, <FormulaBox inline>(x_1, y_1) = (1,5)</FormulaBox>.</p>
            <p>נשתמש בנוסחה <FormulaBox inline>y - y_1 = m(x - x_1)</FormulaBox>:</p>
            <FormulaBox>y - 5 = 3(x - 1)</FormulaBox>
            <FormulaBox>y - 5 = 3x - 3 \Rightarrow y = 3x + 2</FormulaBox>
            <p className="mt-2">משוואת הישר היא <FormulaBox inline>y = 3x + 2</FormulaBox>.</p>
          </div>

          <div className="sub-section">
            <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-600">3. מצב הדדי בין ישרים</h3>
            <p>בהינתן שני ישרים עם שיפועים <FormulaBox inline>m_1</FormulaBox> ו-<FormulaBox inline>m_2</FormulaBox>:</p>
            <ul className="list-disc list-inside space-y-1 pr-5">
              <li><strong>ישרים מקבילים:</strong> <FormulaBox inline>m_1 = m_2</FormulaBox> (ו-<FormulaBox inline>n_1 \neq n_2</FormulaBox>).</li>
              <li><strong>ישרים מאונכים:</strong> <FormulaBox inline>m_1 \cdot m_2 = -1</FormulaBox>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        
        <div className="space-y-8 mt-6">
          {exercises.map((exercise, index) => (
            <Exercise
              key={exercise.id}
              question={exercise.question}
              type={exercise.type}
              correctAnswer={exercise.correctAnswer}
              solution={exercise.solution}
              placeholder={exercise.placeholder}
            />
          ))}
          
          <LineEquationExercise
            question={
              <span>
                תרגיל 2: מצא את משוואת הישר ששיפועו <FormulaBox inline>-2</FormulaBox> ועובר דרך הנקודה <FormulaBox inline>(1, -1)</FormulaBox>. הצג את התשובה בצורה <FormulaBox inline>y=mx+n</FormulaBox>.
              </span>
            }
            slope="-2"
            intercept="1"
            solution={
              <div>
                <p><strong>פתרון מלא:</strong></p>
                <FormulaBox>y - (-1) = -2(x - 1)</FormulaBox>
                <FormulaBox>y + 1 = -2x + 2 \Rightarrow y = -2x + 1</FormulaBox>
                <LineEquationDiagram 
                  slope={-2} 
                  intercept={1} 
                  point={{x: 1, y: -1}} 
                  title="ישר y=-2x+1 דרך (1,-1)" 
                />
              </div>
            }
          />
        </div>
      </section>

      {/* Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          בחן את עצמך 🧐
        </h2>
        <Quiz questions={quizQuestions} />
      </section>     
    </LessonLayout>
  );
};

export default AnalyticGeometrySlopeLesson;
