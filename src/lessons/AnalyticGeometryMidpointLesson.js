import React, { useState } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Quiz from '../components/Quiz';

// const x_1 = 0, x_2 = 0, y_1 = 0, y_2 = 0; // Replace with appropriate values or imports - Commented out unused variables

const AnalyticGeometryMidpointLesson = () => {
  // General Midpoint Diagram
  const MidpointDiagram = () => (
    <div className="flex flex-col items-center my-6 p-4 border border-gray-200 rounded-lg bg-white">
      <svg viewBox="-30 -110 160 120" className="w-full max-w-sm h-auto mb-4">
        <title>המחשת נוסחת אמצע קטע</title>
        
        {/* Grid pattern */}
        <defs>
          <pattern id="gridMidpoint" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" className="stroke-gray-300 stroke-[0.5] opacity-50" strokeDasharray="2,2" />
          </pattern>
        </defs>
        <rect x="-25" y="-105" width="150" height="110" fill="url(#gridMidpoint)" />
        
        {/* Axes */}
        <line className="stroke-gray-800 stroke-[1.5]" x1="-20" y1="0" x2="120" y2="0"/>
        <line className="stroke-gray-800 stroke-[1.5]" x1="0" y1="-100" x2="0" y2="5"/>
        <polygon points="120,0 115,-4 115,4" fill="#1F2937"/>
        <polygon points="0,-100 -4,-95 4,-95" fill="#1F2937"/>
        <text className="text-[11px] fill-gray-800 font-semibold" x="125" y="3">x</text>
        <text className="text-[11px] fill-gray-800 font-semibold" x="5" y="-102">y</text>

        {/* Points */}
        <circle className="fill-blue-500 stroke-blue-700" cx="10" cy="-80" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-blue-700 font-medium" x="10" y="-80" dx="-12" dy="-5">A(x₁,y₁)</text>
        
        <circle className="fill-red-500 stroke-red-700" cx="70" cy="-30" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-red-700 font-medium" x="70" y="-30" dx="15" dy="-5">B(x₂,y₂)</text>

        {/* Segment line */}
        <line className="stroke-green-500 stroke-[1.8]" x1="10" y1="-80" x2="70" y2="-30"/>
        
        {/* Midpoint */}
        <circle className="fill-fuchsia-500 stroke-fuchsia-700" cx="40" cy="-55" r="3" strokeWidth="1" />
        <text className="text-[9px] fill-fuchsia-700 font-bold" x="40" y="-55" dy="-7">M(xM,yM)</text>
      </svg>
    </div>
  );

  // Example Diagram for A(2,5) and B(8,1)
  const ExampleDiagram = () => (
    <div className="flex flex-col items-center my-4 p-3 border border-gray-200 rounded-lg bg-white">
      <svg viewBox="5 -5 120 85" className="w-full max-w-xs h-auto">
        <title>אמצע קטע לדוגמה A(2,5) ו-B(8,1)</title>
        
        {/* Grid pattern */}
        <defs>
          <pattern id="gridExampleMid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" className="stroke-gray-300 stroke-[0.5] opacity-50" strokeDasharray="2,2" />
          </pattern>
        </defs>
        <rect x="5" y="0" width="100" height="75" fill="url(#gridExampleMid)" />
        
        {/* Axes */}
        <line className="stroke-gray-800 stroke-[1.5]" x1="0" y1="65" x2="110" y2="65"/>
        <line className="stroke-gray-800 stroke-[1.5]" x1="10" y1="0" x2="10" y2="75"/>
        <text className="text-[11px] fill-gray-800 font-semibold" x="112" y="65" dy="3">x</text>
        <text className="text-[11px] fill-gray-800 font-semibold" x="10" y="-3">y</text>

        {/* Points */}
        <circle className="fill-blue-500 stroke-blue-700" cx="30" cy="15" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-blue-700 font-medium" x="30" y="15" dx="-10" dy="-3">A(2,5)</text>
        
        <circle className="fill-red-500 stroke-red-700" cx="90" cy="55" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-red-700 font-medium" x="90" y="55" dx="10" dy="5">B(8,1)</text>

        {/* Segment line */}
        <line className="stroke-green-500 stroke-[1.8]" x1="30" y1="15" x2="90" y2="55"/>
        
        {/* Midpoint */}
        <circle className="fill-fuchsia-500 stroke-fuchsia-700" cx="60" cy="35" r="3" strokeWidth="1" />
        <text className="text-[9px] fill-fuchsia-700 font-bold" x="60" y="35" dy="-5">M(5,3)</text>
        
        {/* Tick marks */}
        <text className="text-[8px] fill-gray-600" x="30" y="70">2</text>
        <text className="text-[8px] fill-gray-600" x="90" y="70">8</text>
        <text className="text-[8px] fill-gray-600" x="60" y="70">5</text>
        <text className="text-[8px] fill-gray-600" x="5" y="15" dy="3">5</text>
        <text className="text-[8px] fill-gray-600" x="5" y="55" dy="3">1</text>
        <text className="text-[8px] fill-gray-600" x="5" y="35" dy="3">3</text>
      </svg>
    </div>
  );
  // Solved example component
  const SolvedExample = () => (
    <div>
      <h4 className="text-lg font-semibold mb-2">דוגמה פתורה (מתוך חומר הבחינה):</h4>      <p className="font-medium">שאלה: מצא את שיעורי אמצע הקטע שקצותיו הם <FormulaBox inline>{"A(2,5)"}</FormulaBox> ו-<FormulaBox inline>{"B(8,1)"}</FormulaBox>.</p>
      
      <div className="text-center my-4">
        <ExampleDiagram />
      </div>
      
      <div className="mt-2 space-y-1" dir="rtl">
        <p><strong>פתרון:</strong></p>
        <p>נסמן: <FormulaBox inline>{"x_1=2, y_1=5"}</FormulaBox> ו-<FormulaBox inline>{"x_2=8, y_2=1"}</FormulaBox>.</p>
        <p>שיעור ה-X של נקודת האמצע:</p>
        <p><FormulaBox>{"x_M = \\frac{x_1 + x_2}{2} = \\frac{2 + 8}{2} = \\frac{10}{2} = 5"}</FormulaBox></p>
        <p>שיעור ה-Y של נקודת האמצע:</p>
        <p><FormulaBox>{"y_M = \\frac{y_1 + y_2}{2} = \\frac{5 + 1}{2} = \\frac{6}{2} = 3"}</FormulaBox></p>
        <p className="mt-2 font-semibold">שיעורי נקודת האמצע הם <FormulaBox inline>{"(5,3)"}</FormulaBox>.</p>
      </div>
    </div>
  );

  // Custom midpoint exercise component
  const MidpointExercise = ({ question, correctAnswer, solution, exerciseId }) => {
    const [userXAnswer, setUserXAnswer] = useState('');
    const [userYAnswer, setUserYAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [showSolution, setShowSolution] = useState(false);

    const checkAnswer = () => {
      const isXCorrect = userXAnswer.trim() === correctAnswer.xM;
      const isYCorrect = userYAnswer.trim() === correctAnswer.yM;
      
      if (isXCorrect && isYCorrect) {
        setFeedback('כל הכבוד! התשובה נכונה.');
      } else {
        let message = 'התשובה אינה נכונה. ';
        if (!isXCorrect && !isYCorrect) {
          message += 'שני השיעורים שגויים.';
        } else if (!isXCorrect) {
          message += 'שיעור ה-X שגוי.';
        } else {
          message += 'שיעור ה-Y שגוי.';
        }
        setFeedback(message);
      }
    };    return (
      <div className="bg-gray-50 p-4 border border-gray-300 rounded-lg">
        <p className="font-medium mb-3" dir="rtl">{question}</p>
        
        <div className="space-y-3" dir="rtl">
          <div>
            <label className="block text-sm font-medium text-gray-700">שיעור X של האמצע:</label>
            <input
              type="text"
              value={userXAnswer}
              onChange={(e) => setUserXAnswer(e.target.value)}
              className="mt-1 border border-gray-300 p-2 rounded w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="הכנס xM"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">שיעור Y של האמצע:</label>
            <input
              type="text"
              value={userYAnswer}
              onChange={(e) => setUserYAnswer(e.target.value)}
              className="mt-1 border border-gray-300 p-2 rounded w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="הכנס yM"
            />
          </div>
        </div>
        
        <div className="mt-3 text-right">
          <button
            onClick={checkAnswer}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out ml-2"
          >
            בדוק תשובה
          </button>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
          >
            {showSolution ? 'הסתר פתרון' : 'הצג פתרון'}
          </button>
        </div>
        
        {feedback && (
          <div className={`mt-3 p-3 rounded-md text-sm ${
            feedback.includes('נכונה') 
              ? 'bg-green-100 border border-green-300 text-green-800' 
              : 'bg-red-100 border border-red-300 text-red-800'
          }`}>
            {feedback}
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

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהם שיעורי נקודת האמצע של קטע שקצותיו (0,0) ו-(10,4)?',
      options: [
        { value: 'a', label: '(10,4)' },
        { value: 'b', label: '(5,2)' },
        { value: 'c', label: '(2,5)' },
        { value: 'd', label: '(0,2)' }
      ],
      correctAnswer: 'b',
      explanation: 'xM = (0+10)/2 = 5, yM = (0+4)/2 = 2, לכן נקודת האמצע היא (5,2)'
    },
    {
      id: 'q2',
      question: 'נקודה M(3,1) היא אמצע הקטע AB. קצה אחד של הקטע הוא A(1,1). מהם שיעורי הנקודה B?',
      options: [
        { value: 'a', label: '(2,1)' },
        { value: 'b', label: '(5,1)' },
        { value: 'c', label: '(4,0)' },
        { value: 'd', label: '(5,0)' }
      ],
      correctAnswer: 'b',
      explanation: 'אם M אמצע AB, אז 3 = (1+xB)/2 ו-1 = (1+yB)/2. פותרים: xB = 5, yB = 1'
    }
  ];

  return (
    <LessonLayout
      title="אמצע קטע"
      lessonId="35182-analytic-geometry-midpoint"
      nextLessonPath="/lessons/analytic-geometry-points"
    >      {/* Learn Section */}
      <section id="learn" aria-labelledby="learn-heading" className="mb-12">
        <h2 id="learn-heading" className="text-2xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">
          לומדים 📚
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed" dir="rtl">
          <p>
            נקודת האמצע של קטע היא הנקודה הנמצאת בדיוק באמצע בין שתי נקודות הקצה של הקטע, ומחלקת אותו לשני קטעים שווים באורכם.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">נוסחת אמצע קטע</h3>          <p>
            אם נתונות שתי נקודות קצה של קטע, <FormulaBox inline>{"A(x_1, y_1)"}</FormulaBox> ו-<FormulaBox inline>{"B(x_2, y_2)"}</FormulaBox>, הקואורדינטות של נקודת האמצע <FormulaBox inline>{"M(x_M, y_M)"}</FormulaBox> של הקטע AB מחושבות כך:
          </p>
          <div className="formula-box-block my-6 text-center">
            <FormulaBox>{"x_M = \\frac{x_1 + x_2}{2}"}</FormulaBox>
            <br />
            <FormulaBox>{"y_M = \\frac{y_1 + y_2}{2}"}</FormulaBox>
          </div>
          <p>
            כלומר, שיעור ה-X של נקודת האמצע הוא הממוצע של שיעורי ה-X של נקודות הקצה, ושיעור ה-Y של נקודת האמצע הוא הממוצע של שיעורי ה-Y של נקודות הקצה.
          </p>

          <div className="text-center my-6">
            <MidpointDiagram />
          </div>

          <div className="example-box">
            <SolvedExample />
          </div>
        </div>
      </section>      {/* Practice Section */}
      <section id="practice" aria-labelledby="practice-heading" className="mb-12">
        <h2 id="practice-heading" className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
          מתרגלים ✍️
        </h2>
        <div className="space-y-8 mt-6">
          <MidpointExercise
            question="מצא את שיעורי נקודת האמצע של הקטע שקצותיו P(-3, 7) ו-Q(5, -1)."
            correctAnswer={{ xM: '1', yM: '3' }}
            exerciseId="ex1"
            solution={
              <div>
                <p><strong>פתרון מלא:</strong></p>
                <p><FormulaBox inline>{"x_M = \\frac{-3 + 5}{2} = \\frac{2}{2} = 1"}</FormulaBox></p>
                <p><FormulaBox inline>{"y_M = \\frac{7 + (-1)}{2} = \\frac{6}{2} = 3"}</FormulaBox></p>
                <p>נקודת האמצע היא <FormulaBox inline>{"(1,3)"}</FormulaBox>.</p>
                
                <div className="flex flex-col items-center my-4 p-3 border border-gray-200 rounded-lg bg-white">
                  <svg viewBox="-45 -80 115 125" className="w-full max-w-xs h-auto">
                    <title>אמצע קטע לתרגיל 1: P(-3,7) ו-Q(5,-1)</title>
                    
                    <defs>
                      <pattern id="gridPractice1Mid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" className="stroke-gray-300 stroke-[0.5] opacity-50" strokeDasharray="2,2" />
                      </pattern>
                    </defs>
                    <rect x="-40" y="-75" width="105" height="115" fill="url(#gridPractice1Mid)" />
                    
                    <line className="stroke-gray-800 stroke-[1.5]" x1="-40" y1="0" x2="60" y2="0"/>
                    <line className="stroke-gray-800 stroke-[1.5]" x1="0" y1="-75" x2="0" y2="40"/>
                    <text className="text-[11px] fill-gray-800 font-semibold" x="63" y="0" dy="3">x</text>
                    <text className="text-[11px] fill-gray-800 font-semibold" x="0" y="-78">y</text>

                    <circle className="fill-blue-500 stroke-blue-700" cx="-30" cy="-70" r="2.5" strokeWidth="1"/>
                    <text className="text-[9px] fill-blue-700 font-medium" x="-30" y="-70" dx="-10" dy="-3">P(-3,7)</text>
                    
                    <circle className="fill-red-500 stroke-red-700" cx="50" cy="10" r="2.5" strokeWidth="1"/>
                    <text className="text-[9px] fill-red-700 font-medium" x="50" y="10" dx="12" dy="5">Q(5,-1)</text>

                    <line className="stroke-green-500 stroke-[1.8]" x1="-30" y1="-70" x2="50" y2="10"/>
                    
                    <circle className="fill-fuchsia-500 stroke-fuchsia-700" cx="10" cy="-30" r="3" strokeWidth="1" />
                    <text className="text-[9px] fill-fuchsia-700 font-bold" x="10" y="-30" dy="-5">M(1,3)</text>
                  </svg>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Quiz Section */}      <Quiz questions={quizQuestions} />
    </LessonLayout>
  );
};

export default AnalyticGeometryMidpointLesson;
