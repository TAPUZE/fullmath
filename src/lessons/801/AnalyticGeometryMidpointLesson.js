import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import Quiz from '../../components/math/Quiz';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import StepByStepSolution from '../../components/math/StepByStepSolution';

const x_1 = 0, x_2 = 0, y_1 = 0, y_2 = 0; // Replace with appropriate values or imports

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
      <h4 className="text-lg font-semibold mb-2">דוגמה פתורה (מתוך חומר הבחינה):</h4>
      <p className="font-medium">שאלה: מצא את שיעורי אמצע הקטע שקצותיו הם <FormulaBox>\(A(2,5)\)</FormulaBox> ו-<FormulaBox>\(B(8,1)\)</FormulaBox>.</p>
      
      <div className="text-center my-4">
        <ExampleDiagram />
      </div>
      
      <div className="mt-2 space-y-1" dir="rtl">
        <p><strong>פתרון:</strong></p>
        <p>נסמן: <FormulaBox>\(x_1=2, y_1=5\)</FormulaBox> ו-<FormulaBox>\(x_2=8, y_2=1\)</FormulaBox>.</p>
        <p>שיעור ה-X של נקודת האמצע:</p>
        <p><FormulaBox>\(x_M = \frac{x_1 + x_2}{2} = \frac{2 + 8}{2} = \frac{10}{2} = 5\)</FormulaBox></p>
        <p>שיעור ה-Y של נקודת האמצע:</p>
        <p><FormulaBox>\(y_M = \frac{y_1 + y_2}{2} = \frac{5 + 1}{2} = \frac{6}{2} = 3\)</FormulaBox></p>
        <p className="mt-2 font-semibold">שיעורי נקודת האמצע הם <FormulaBox>\((5,3)\)</FormulaBox>.</p>
      </div>
    </div>
  );

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

  const exercises = [
    {
      id: 'ex1',
      question: 'מצא את שיעורי אמצע הקטע שקצותיו הם A(2,5) ו-B(8,1).',
      correctAnswer: { xM: '5', yM: '3' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "1. נסמן את הנתונים:", formula: "A(2,5) \\Rightarrow x_1=2, y_1=5" },
            { step: "2. נסמן את הנקודה השנייה:", formula: "B(8,1) \\Rightarrow x_2=8, y_2=1" },
            { step: "3. נחשב את שיעור ה-X של נקודת האמצע:", formula: "x_M = \\frac{x_1 + x_2}{2} = \\frac{2 + 8}{2} = \\frac{10}{2} = 5" },
            { step: "4. נחשב את שיעור ה-Y של נקודת האמצע:", formula: "y_M = \\frac{y_1 + y_2}{2} = \\frac{5 + 1}{2} = \\frac{6}{2} = 3" },
            { step: "5. נכתוב את התשובה:", formula: "M(5,3)", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: 'נקודה M(3,1) היא אמצע הקטע AB. קצה אחד של הקטע הוא A(1,1). מצא את שיעורי הנקודה B.',
      correctAnswer: { xB: '5', yB: '1' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "1. נסמן את הנתונים:", formula: "M(3,1) \\Rightarrow x_M=3, y_M=1" },
            { step: "2. נסמן את הנקודה A:", formula: "A(1,1) \\Rightarrow x_1=1, y_1=1" },
            { step: "3. נסמן את הנקודה B:", formula: "B(x_2,y_2)" },
            { step: "4. נשתמש בנוסחת אמצע קטע:", formula: "x_M = \\frac{x_1 + x_2}{2} \\Rightarrow 3 = \\frac{1 + x_2}{2}" },
            { step: "5. נפתור את המשוואה:", formula: "6 = 1 + x_2 \\Rightarrow x_2 = 5" },
            { step: "6. נשתמש בנוסחה עבור y:", formula: "y_M = \\frac{y_1 + y_2}{2} \\Rightarrow 1 = \\frac{1 + y_2}{2}" },
            { step: "7. נפתור את המשוואה:", formula: "2 = 1 + y_2 \\Rightarrow y_2 = 1" },
            { step: "8. נכתוב את התשובה:", formula: "B(5,1)", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex3',
      question: 'קטע AB הוא קוטר של מעגל שמרכזו בנקודה M(4,2). אם A(1,3), מצא את שיעורי הנקודה B.',
      correctAnswer: { xB: '7', yB: '1' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "1. נסמן את הנתונים:", formula: "M(4,2) \\Rightarrow x_M=4, y_M=2" },
            { step: "2. נסמן את הנקודה A:", formula: "A(1,3) \\Rightarrow x_1=1, y_1=3" },
            { step: "3. נסמן את הנקודה B:", formula: "B(x_2,y_2)" },
            { step: "4. נשתמש בנוסחת אמצע קטע:", formula: "x_M = \\frac{x_1 + x_2}{2} \\Rightarrow 4 = \\frac{1 + x_2}{2}" },
            { step: "5. נפתור את המשוואה:", formula: "8 = 1 + x_2 \\Rightarrow x_2 = 7" },
            { step: "6. נשתמש בנוסחה עבור y:", formula: "y_M = \\frac{y_1 + y_2}{2} \\Rightarrow 2 = \\frac{3 + y_2}{2}" },
            { step: "7. נפתור את המשוואה:", formula: "4 = 3 + y_2 \\Rightarrow y_2 = 1" },
            { step: "8. נכתוב את התשובה:", formula: "B(7,1)", highlight: true }
          ]}
        />
      )
    }
  ];

  return (
    <LessonLayout
      title="אמצע קטע"
      lessonId="35182-analytic-geometry-midpoint"
      nextLessonPath="/lessons/analytic-geometry-points"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            נקודת האמצע של קטע היא הנקודה הנמצאת בדיוק באמצע בין שתי נקודות הקצה של הקטע, ומחלקת אותו לשני קטעים שווים באורכם.
          </p>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">נוסחת אמצע קטע</h4>
            <p>
              אם נתונות שתי נקודות קצה של קטע, <FormulaBox>\(A(x_1, y_1)\)</FormulaBox> ו-<FormulaBox>\(B(x_2, y_2)\)</FormulaBox>, 
              הקואורדינטות של נקודת האמצע <FormulaBox>\(M(x_M, y_M)\)</FormulaBox> של הקטע AB מחושבות כך:
            </p>
            <div className="my-4 text-center">
              <FormulaBox>\(x_M = \frac{x_1 + x_2}{2}\)</FormulaBox>
              <br />
              <FormulaBox>\(y_M = \frac{y_1 + y_2}{2}\)</FormulaBox>
            </div>
            <p>
              כלומר, שיעור ה-X של נקודת האמצע הוא הממוצע של שיעורי ה-X של נקודות הקצה, 
              ושיעור ה-Y של נקודת האמצע הוא הממוצע של שיעורי ה-Y של נקודות הקצה.
            </p>
          </div>

          <div className="text-center my-6">
            <MidpointDiagram />
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה:</h4>
            <p className="font-medium">מצא את שיעורי אמצע הקטע שקצותיו הם <FormulaBox>\(A(2,5)\)</FormulaBox> ו-<FormulaBox>\(B(8,1)\)</FormulaBox>.</p>
            
            <div className="text-center my-4">
              <ExampleDiagram />
            </div>
            
            <StepByStepSolution
              title="פתרון מלא:"
              steps={[
                { step: "נסמן את הנתונים:", formula: "A(2,5) \\Rightarrow x_1=2, y_1=5" },
                { step: "נסמן את הנקודה השנייה:", formula: "B(8,1) \\Rightarrow x_2=8, y_2=1" },
                { step: "נחשב את שיעור ה-X של נקודת האמצע:", formula: "x_M = \\frac{x_1 + x_2}{2} = \\frac{2 + 8}{2} = \\frac{10}{2} = 5" },
                { step: "נחשב את שיעור ה-Y של נקודת האמצע:", formula: "y_M = \\frac{y_1 + y_2}{2} = \\frac{5 + 1}{2} = \\frac{6}{2} = 3" },
                { step: "התשובה:", formula: "M(5,3)", highlight: true }
              ]}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">טיפים חשובים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5">
              <li>תמיד לסמן את הנתונים בצורה מסודרת: A(x₁,y₁) ו-B(x₂,y₂).</li>
              <li>לזכור ששיעורי נקודת האמצע הם הממוצע של שיעורי נקודות הקצה.</li>
              <li>בדוק את הפתרון על ידי חישוב המרחקים מנקודת האמצע לקצוות.</li>
              <li>שים לב לסימנים של השיעורים (חיוביים או שליליים).</li>
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
              question={
                <div>
                  <p>תרגיל {exercise.id.replace('ex', '')}: {exercise.question}</p>
                </div>
              }
              inputs={[
                {
                  id: 'xM',
                  label: 'שיעור X',
                  type: 'text',
                  placeholder: 'הכנס את שיעור ה-X'
                },
                {
                  id: 'yM',
                  label: 'שיעור Y',
                  type: 'text',
                  placeholder: 'הכנס את שיעור ה-Y'
                }
              ]}
              correctAnswers={exercise.correctAnswer}
              solution={exercise.solution}
              lessonId="analytic-geometry-midpoint"
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
            question: 'מהם שיעורי נקודת האמצע של קטע שקצותיו (0,0) ו-(10,4)?',
            options: [
              '(10,4)',
              '(5,2)',
              '(2,5)',
              '(0,2)'
            ],
            correctAnswer: '(5,2)',
            explanation: 'xM = (0+10)/2 = 5, yM = (0+4)/2 = 2, לכן נקודת האמצע היא (5,2)'
          },
          {
            id: 'q2',
            question: 'נקודה M(3,1) היא אמצע הקטע AB. קצה אחד של הקטע הוא A(1,1). מהם שיעורי הנקודה B?',
            options: [
              '(2,1)',
              '(5,1)',
              '(4,0)',
              '(5,0)'
            ],
            correctAnswer: '(5,1)',
            explanation: 'אם M אמצע AB, אז 3 = (1+xB)/2 ו-1 = (1+yB)/2. פותרים: xB = 5, yB = 1'
          },
          {
            id: 'q3',
            question: 'קטע AB הוא קוטר של מעגל שמרכזו בנקודה M(4,2). אם A(1,3), מהם שיעורי הנקודה B?',
            options: [
              '(7,1)',
              '(5,1)',
              '(7,3)',
              '(5,3)'
            ],
            correctAnswer: '(7,1)',
            explanation: 'מרכז המעגל הוא אמצע הקוטר. נשתמש בנוסחת אמצע קטע: 4 = (1+xB)/2 ו-2 = (3+yB)/2. פותרים: xB = 7, yB = 1'
          }
        ]}
      />
    </LessonLayout>
  );
};

export default AnalyticGeometryMidpointLesson;
