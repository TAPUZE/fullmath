import React, { useState } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';
import Breadcrumb from '../components/Breadcrumb';

// Custom exercise component for coordinate identification
const CoordinateIdentificationExercise = ({ questionText, svgContent, correctAnswer, solutionText }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const checkAnswer = () => {
    const cleanAnswer = answer.trim().replace(/[()]/g, '');
    const coords = cleanAnswer.split(',').map(s => s.trim());
    
    let isCorrect = false;
    if (coords.length === 2) {
      const [userX, userY] = coords;
      isCorrect = userX === correctAnswer.x && userY === correctAnswer.y;
    }
    
    if (isCorrect) {
      setFeedback({ type: 'success', message: 'כל הכבוד! התשובה נכונה.' });
    } else {
      setFeedback({ type: 'error', message: 'התשובה אינה נכונה. נסה שוב או צפה בפתרון.' });
    }
  };
  return (
    <div className="bg-gray-50 p-4 border border-gray-300 rounded-lg">
      <p className="font-medium mb-4" dir="rtl">{questionText}</p>
      
      <div className="text-center my-4">
        <svg width="200" height="200" viewBox="-55 -55 110 110" preserveAspectRatio="xMidYMid meet" className="border border-gray-300 rounded-lg bg-white">
          {/* Grid lines */}
          {[-40, -20, 20, 40].map(pos => (
            <g key={pos}>
              <line x1="-50" y1={pos} x2="50" y2={pos} stroke="#D1D5DB" strokeWidth="0.5" />
              <line x1={pos} y1="-50" x2={pos} y2="50" stroke="#D1D5DB" strokeWidth="0.5" />
            </g>
          ))}
          
          {/* Axes */}
          <line stroke="#1F2937" strokeWidth="1.5" x1="-50" y1="0" x2="50" y2="0" />
          <line stroke="#1F2937" strokeWidth="1.5" x1="0" y1="-50" x2="0" y2="50" />
          
          {/* Arrows */}
          <polygon points="50,0 47,-2 47,2" fill="#4B5563" />
          <polygon points="0,-50 -2,-47 2,-47" fill="#4B5563" />
          
          {/* Axis labels */}          <text x="53" y="2" fontSize="12" fill="#1F2937">x</text>
          <text x="3" y="-51" fontSize="12" fill="#1F2937">y</text>
          <text x="0" y="0" dx="-4" dy="7" fontSize="10" fill="#1F2937">(0,0)</text>
            {/* Point P for exercise */}
          <circle cx="-40" cy="-20" r="2.5" fill="#059669" />
          <text x="-40" y="-20" dx="5" dy="-3" fontSize="12" fill="#059669">P</text>
          
          {/* Tick labels with larger text */}
          <text x="-40" y="7" fontSize="10" fill="#6B7280">-4</text>
          <text x="-7" y="-20" fontSize="10" fill="#6B7280">2</text>
          <text x="20" y="7" fontSize="10" fill="#6B7280">2</text>
          <text x="-7" y="20" fontSize="10" fill="#6B7280">-2</text>
        </svg>
      </div>
      
      <div className="mt-3" dir="rtl">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="הכנס קואורדינטות (למשל: 3,2 או (-4,2))"
        />
      </div>
      
      <div className="mt-3 flex gap-2" dir="rtl">
        <button
          onClick={checkAnswer}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
        >
          בדוק תשובה
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          הצג פתרון
        </button>
      </div>      
      {feedback && (
        <div className={`mt-3 p-3 rounded-md text-sm ${
          feedback.type === 'success' 
            ? 'bg-green-100 border border-green-300 text-green-600' 
            : 'bg-red-100 border border-red-300 text-red-600'
        }`} dir="rtl">
          <p className="font-semibold">{feedback.message}</p>
        </div>
      )}
      
      {showSolution && (
        <div className="mt-3 p-3 border-t border-gray-200 bg-white rounded-md" dir="rtl">
          <p><strong>פתרון מלא:</strong></p>
          <p>{solutionText}</p>
        </div>
      )}
    </div>
  );
};

const DynamicCoordinateSystem = () => {
  return (
    <div className="flex justify-center my-6">
      <svg
        width="320"
        height="320"
        viewBox="-160 -160 320 320"
        preserveAspectRatio="xMidYMid meet"
        className="border border-gray-300 rounded-lg bg-white"
      >
        {/* Grid pattern */}
        <defs>
          <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect x="-150" y="-150" width="300" height="300" fill="url(#gridPattern)" />
        
        {/* Axes */}
        <line stroke="#1F2937" strokeWidth="2" x1="-150" y1="0" x2="150" y2="0" />
        <line stroke="#1F2937" strokeWidth="2" x1="0" y1="-150" x2="0" y2="150" />
        
        {/* Arrows */}
        <polygon points="150,0 145,-5 145,5" fill="#1F2937" />
        <polygon points="0,-150 -5,-145 5,-145" fill="#1F2937" />
        
        {/* Axis labels */}        <text x="155" y="5" fontSize="16" fill="#1F2937" fontWeight="bold">x</text>
        <text x="7" y="-152" fontSize="16" fill="#1F2937" fontWeight="bold">y</text>
        <text x="0" y="0" dx="-12" dy="15" fontSize="14" fill="#6B7280">(0,0)</text>
        
        {/* Tick marks and labels */}
        {[-4, -3, -2, -1, 1, 2, 3, 4].map(num => (
          <g key={`x-${num}`}>
            <line x1={num * 20} y1="-3" x2={num * 20} y2="3" stroke="#1F2937" strokeWidth="1" />
            <text x={num * 20} y="0" dy="15" fontSize="12" fill="#6B7280" textAnchor="middle">{num}</text>
          </g>
        ))}
        {[-4, -3, -2, -1, 1, 2, 3, 4].map(num => (
          <g key={`y-${num}`}>
            <line x1="-3" y1={-num * 20} x2="3" y2={-num * 20} stroke="#1F2937" strokeWidth="1" />
            <text x="0" y={-num * 20} dx="-15" dy="3" fontSize="12" fill="#6B7280" textAnchor="middle">{num}</text>
          </g>
        ))}
          {/* Sample points for demonstration */}
        <circle cx="80" cy="-60" r="3" fill="#3B82F6" />
        <text x="80" y="-60" dx="8" dy="-5" fontSize="13" fill="#3B82F6">A(4,3)</text>
        
        <circle cx="-60" cy="40" r="3" fill="#EF4444" />
        <text x="-60" y="40" dx="-25" dy="5" fontSize="13" fill="#EF4444">B(-3,-2)</text>
        
        <circle cx="40" cy="80" r="3" fill="#10B981" />
        <text x="40" y="80" dx="8" dy="5" fontSize="13" fill="#10B981">C(2,-4)</text>
        
        <circle cx="-80" cy="-40" r="3" fill="#F59E0B" />
        <text x="-80" y="-40" dx="-25" dy="-5" fontSize="13" fill="#F59E0B">D(-4,2)</text>
      </svg>
    </div>
  );
};

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
    }  ];

  // Quiz questions
  const quizQuestions = [
    {      id: 'origin-coordinates',
      question: 'מהן הקואורדינטות של ראשית הצירים?',
      options: [
        { value: 'a', label: <FormulaBox inline>{`(1,1)`}</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>{`(0,0)`}</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>{`(0,1)`}</FormulaBox> },
        { value: 'd', label: <FormulaBox inline>{`(1,0)`}</FormulaBox> }
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
        </span>      ),
      options: [
        { value: 'a', label: 'רביע I' },
        { value: 'b', label: 'רביע II' },
        { value: 'c', label: 'רביע III' },
        { value: 'd', label: 'רביע IV' }
      ],
      correctAnswer: 'c',
      explanation: (
        <div>
          <p>נקודה <FormulaBox inline>{`(-2, -5)`}</FormulaBox> יש לה שני קואורדינטות שליליות.</p>
          <p>רביע III הוא האזור שבו גם ציר X וגם ציר Y שליליים.</p>
        </div>
      )
    },
    {
      id: 'quadrant-positive-x',
      question: (
        <span>
          נקודה <FormulaBox inline>{`(3, -4)`}</FormulaBox> נמצאת באיזה רביע?
        </span>      ),
      options: [
        { value: 'a', label: 'רביע I' },
        { value: 'b', label: 'רביע II' },
        { value: 'c', label: 'רביע III' },
        { value: 'd', label: 'רביע IV' }
      ],
      correctAnswer: 'd',
      explanation: (
        <div>
          <p>נקודה <FormulaBox inline>{`(3, -4)`}</FormulaBox> יש לה קואורדינטת X חיובית וקואורדינטת Y שלילית.</p>
          <p>רביע IV הוא האזור שבו ציר X חיובי וציר Y שלילי.</p>
        </div>
      )
    },
    {
      id: 'axes-points',
      question: (
        <span>
          נקודה <FormulaBox inline>{`(0, 5)`}</FormulaBox> נמצאת:
        </span>      ),
      options: [
        { value: 'a', label: 'על ציר ה-X' },
        { value: 'b', label: 'על ציר ה-Y' },
        { value: 'c', label: 'ברביע הראשון' },
        { value: 'd', label: 'ברביע השני' }
      ],
      correctAnswer: 'b',
      explanation: (
        <div>
          <p>נקודה <FormulaBox inline>{`(0, 5)`}</FormulaBox> יש לה קואורדינטת X שווה לאפס.</p>
          <p>כל נקודה עם קואורדינטת X שווה לאפס נמצאת על ציר ה-Y.</p>
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
          </ul>

          <div className="text-center my-6">
            <DynamicCoordinateSystem />
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
          <CoordinateIdentificationExercise
            questionText="תרגיל 1: התבונן במערכת הצירים למטה. מהן הקואורדינטות של נקודה P?"
            correctAnswer={{ x: '-4', y: '2' }}
            solutionText="הנקודה P נמצאת 4 יחידות שמאלה מציר ה-Y (ולכן שיעור ה-X הוא -4) ו-2 יחידות מעל ציר ה-X (ולכן שיעור ה-Y הוא 2). הקואורדינטות של P הן (-4,2)."
          />
          
          {exercises.map((exercise, index) => (
            <div key={exercise.id} className="bg-gray-50 p-4 border border-gray-300 rounded-lg">
              <Exercise
                question={exercise.question}
                type={exercise.type}
                correctAnswer={exercise.correctAnswer}
                correctAnswerKeywords={exercise.correctAnswerKeywords}
                solution={exercise.solution}
                placeholder={exercise.placeholder}
              />
            </div>
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
