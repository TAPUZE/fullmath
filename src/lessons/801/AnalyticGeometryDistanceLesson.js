import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import StepByStepSolution from '../../components/math/StepByStepSolution';

const AnalyticGeometryDistanceLesson = () => {
  // SVG Diagram Component for distance visualization
  const DistanceDiagram = () => (
    <div className="flex flex-col items-center my-6 p-4 border border-gray-200 rounded-lg bg-white">
      <svg viewBox="-50 -70 200 140" className="w-full max-w-sm h-auto mb-4">
        <title>מרחק על קו אופקי ואנכי</title>
        
        {/* Horizontal line example */}
        <line className="stroke-gray-800 stroke-[1.5]" x1="-40" y1="-50" x2="140" y2="-50" />
        <circle className="fill-blue-500 stroke-blue-700" cx="0" cy="-50" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-blue-700 font-medium" x="0" y="-50" dy="-7" textAnchor="middle">A(2,3)</text>
        <circle className="fill-blue-500 stroke-blue-700" cx="100" cy="-50" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-blue-700 font-medium" x="100" y="-50" dy="-7" textAnchor="middle">B(7,3)</text>
        <line className="stroke-purple-600 stroke-[1.8]" x1="0" y1="-40" x2="100" y2="-40" />
        <text className="text-[9px] fill-purple-700 font-bold" x="50" y="-40" dy="-5" textAnchor="middle">d = |7-2| = 5</text>
        <text className="text-[8px] fill-gray-600" x="0" y="-50" dy="15" textAnchor="middle">2</text>
        <text className="text-[8px] fill-gray-600" x="100" y="-50" dy="15" textAnchor="middle">7 (ערכי x)</text>
        <text className="text-[8px] fill-gray-600" x="-30" y="-50" dy="3" textAnchor="end">y=3</text>

        {/* Vertical line example */}
        <line className="stroke-gray-800 stroke-[1.5]" x1="50" y1="-20" x2="50" y2="60" />
        <circle className="fill-green-500 stroke-green-700" cx="50" cy="-10" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-green-700 font-medium" x="50" y="-10" dx="12" dy="3">C(4,6)</text>
        <circle className="fill-green-500 stroke-green-700" cx="50" cy="50" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-green-700 font-medium" x="50" y="50" dx="12" dy="3">D(4,1)</text>
        <line className="stroke-purple-600 stroke-[1.8]" x1="60" y1="-10" x2="60" y2="50" />
        <text className="text-[9px] fill-purple-700 font-bold" x="60" y="20" dx="17">d = |6-1| = 5</text>
        <text className="text-[8px] fill-gray-600" x="50" y="-10" dx="-10" dy="-2">6</text>
        <text className="text-[8px] fill-gray-600" x="50" y="50" dx="-10" dy="5">1 (ערכי y)</text>
        <text className="text-[8px] fill-gray-600" x="50" y="65" dx="-2">x=4</text>
      </svg>
    </div>
  );

  // Pythagorean Theorem Diagram
  const PythagoreanDiagram = () => (
    <div className="flex flex-col items-center my-6 p-4 border border-gray-200 rounded-lg bg-white">
      <svg viewBox="-30 -110 160 120" className="w-full max-w-sm h-auto mb-4">
        <title>המחשת נוסחת המרחק עם משפט פיתגורס</title>
        
        {/* Grid pattern */}
        <defs>
          <pattern id="gridDistGeneral" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" className="stroke-gray-300 stroke-[0.5] opacity-50" strokeDasharray="2,2" />
          </pattern>
        </defs>
        <rect x="-25" y="-105" width="150" height="110" fill="url(#gridDistGeneral)" />
        
        {/* Axes */}
        <line className="stroke-gray-800 stroke-[1.5]" x1="-20" y1="0" x2="120" y2="0"/>
        <line className="stroke-gray-800 stroke-[1.5]" x1="0" y1="-100" x2="0" y2="5"/>
        <polygon points="120,0 115,-4 115,4" fill="#1F2937"/>
        <polygon points="0,-100 -4,-95 4,-95" fill="#1F2937"/>
        <text className="text-[11px] fill-gray-800 font-semibold" x="125" y="3">x</text>
        <text className="text-[11px] fill-gray-800 font-semibold" x="5" y="-102">y</text>

        {/* Helper lines for right triangle */}
        <line className="stroke-blue-600 stroke-[1.2]" x1="10" y1="-80" x2="70" y2="-80" strokeDasharray="3,2" />
        <line className="stroke-blue-600 stroke-[1.2]" x1="70" y1="-80" x2="70" y2="-30" strokeDasharray="3,2" />
        
        {/* Points */}
        <circle className="fill-blue-500 stroke-blue-700" cx="10" cy="-80" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-blue-700 font-medium" x="10" y="-80" dx="-12" dy="-5">A(x₁,y₁)</text>
        
        <circle className="fill-red-500 stroke-red-700" cx="70" cy="-30" r="2.5" strokeWidth="1"/>
        <text className="text-[9px] fill-red-700 font-medium" x="70" y="-30" dx="15" dy="-5">B(x₂,y₂)</text>
        
        <circle cx="70" cy="-80" r="1.5" fill="#4B5563" />
        <text className="text-[7px] fill-gray-600" x="70" y="-80" dx="7" dy="10">C</text>

        {/* Distance line */}
        <line className="stroke-purple-600 stroke-[1.8]" x1="10" y1="-80" x2="70" y2="-30"/>
        <text className="text-[9px] fill-purple-700 font-bold" x="35" y="-60" transform="rotate(-40 40 -55)" dy="-4">d</text>

        {/* Labels */}
        <text className="text-[9px] fill-blue-700 italic" x="40" y="-80" dy="12">|x₂ - x₁|</text>
        <text className="text-[9px] fill-blue-700 italic" x="70" y="-55" dx="15">|y₂ - y₁|</text>
      </svg>
    </div>
  );

  const exercises = [
    {
      id: 'ex1',
      question: (
        <div>
          <p>תרגיל 1: מצא את המרחק בין הנקודות C(-2, 1) וD(3, 13).</p>
        </div>
      ),
      inputs: [
        { id: 'answer', label: 'תשובה', type: 'text', placeholder: 'הכנס את המרחק' }
      ],
      correctAnswers: { answer: '13' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "נסמן את הקואורדינטות:", formula: "C(-2,1), D(3,13)" },
            { step: "נציב בנוסחת המרחק:", formula: "d = √[(3 - (-2))² + (13 - 1)²]" },
            { step: "נחשב:", formula: "d = √[(5)² + (12)²] = √[25 + 144] = √169 = 13" },
            { step: "המרחק הוא 13 יחידות", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: (
        <div>
          <p>תרגיל 2: מצא את המרחק בין הנקודה E(0, -5) לראשית הצירים (0,0).</p>
        </div>
      ),
      inputs: [
        { id: 'answer', label: 'תשובה', type: 'text', placeholder: 'הכנס את המרחק' }
      ],
      correctAnswers: { answer: '5' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "נסמן את הקואורדינטות:", formula: "E(0,-5), O(0,0)" },
            { step: "נציב בנוסחת המרחק:", formula: "d = √[(0 - 0)² + (-5 - 0)²]" },
            { step: "נחשב:", formula: "d = √[0 + 25] = √25 = 5" },
            { step: "המרחק הוא 5 יחידות", highlight: true }
          ]}
        />
      )
    }
  ];

  return (
    <LessonLayout
      title="מרחק בין שתי נקודות"
      lessonId="35182-analytic-geometry-distance"
      nextLessonPath="/lessons/analytic-geometry-midpoint"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            בגיאומטריה אנליטית, אנו יכולים לחשב את המרחק בין שתי נקודות במישור אם ידועות לנו הקואורדינטות שלהן.
          </p>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">1. מרחק בין נקודות על קו ישר (אופקי או אנכי)</h4>
            <p>
              במקרים פשוטים, המרחק הוא ההפרש (בערך מוחלט) בין השיעורים המשתנים.
            </p>
            
            <DistanceDiagram />

            <ul className="list-disc list-inside space-y-2 pr-5 mt-2">
              <li>
                <strong>קו אופקי:</strong> אם שתי נקודות <FormulaBox>\(A(x_1, y)\)</FormulaBox> ו-<FormulaBox>\(B(x_2, y)\)</FormulaBox> נמצאות על קו אופקי, המרחק ביניהן הוא <FormulaBox>\(d = |x_2 - x_1|\)</FormulaBox>.
              </li>
              <li>
                <strong>קו אנכי:</strong> אם שתי נקודות <FormulaBox>\(C(x, y_1)\)</FormulaBox> ו-<FormulaBox>\(D(x, y_2)\)</FormulaBox> נמצאות על קו אנכי, המרחק ביניהן הוא <FormulaBox>\(d = |y_2 - y_1|\)</FormulaBox>.
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">2. נוסחת המרחק הכללית</h4>
            <p>
              כאשר הנקודות אינן בהכרח על קו אופקי או אנכי, אנו משתמשים בנוסחה הכללית.
            </p>
            
            <PythagoreanDiagram />

            <div className="mt-4">
              <p>אם נתונות שתי נקודות <FormulaBox>\(A(x_1, y_1)\)</FormulaBox> ו-<FormulaBox>\(B(x_2, y_2)\)</FormulaBox>, המרחק ביניהן, d, מחושב כך:</p>
              <div className="text-center my-4">
                <FormulaBox>\(d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\)</FormulaBox>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה:</h4>
            <p className="font-medium">מצא את המרחק בין הנקודות <FormulaBox>\(A(1,2)\)</FormulaBox> ו-<FormulaBox>\(B(4,6)\)</FormulaBox>.</p>
            
            <StepByStepSolution
              title="פתרון מלא:"
              steps={[
                { step: "נסמן:", formula: "x₁=1, y₁=2, x₂=4, y₂=6" },
                { step: "נציב בנוסחת המרחק:", formula: "d = √[(4 - 1)² + (6 - 2)²]" },
                { step: "נחשב:", formula: "d = √[(3)² + (4)²] = √[9 + 16] = √25 = 5" },
                { step: "המרחק בין הנקודות הוא 5 יחידות", highlight: true }
              ]}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">טיפים חשובים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5">
              <li>תמיד לזכור שצריך לחסר את הקואורדינטות בסדר הנכון: x₂ - x₁ ו-y₂ - y₁.</li>
              <li>לשים לב לסימנים של הקואורדינטות, במיוחד כשהן שליליות.</li>
              <li>לזכור שתמיד מחשבים את השורש הריבועי של סכום הריבועים.</li>
              <li>במקרים פשוטים (קו אופקי או אנכי), אפשר להשתמש בנוסחה המקוצרת.</li>
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
              lessonId="analytic-geometry-distance"
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
            question: 'מהו המרחק בין הנקודות (2,2) ו-(5,6)?',
            options: [
              '3',
              '4',
              '5',
              '7'
            ],
            correctAnswer: '5',
            explanation: 'd = √[(5-2)² + (6-2)²] = √[9 + 16] = √25 = 5'
          },
          {
            id: 'q2',
            question: 'המרחק בין הנקודה (x, 0) לנקודה (0, 0) הוא 3. מה יכול להיות הערך של x?',
            options: [
              '0',
              '9 או 9-',
              '3 בלבד',
              '3 או 3-'
            ],
            correctAnswer: '3 או 3-',
            explanation: 'd = √[(x-0)² + (0-0)²] = √[x²] = |x| = 3, לכן x = 3 או x = -3'
          },
          {
            id: 'q3',
            question: 'מהו המרחק בין הנקודות (3,4) ו-(3,-4)?',
            options: [
              '0',
              '4',
              '8',
              '10'
            ],
            correctAnswer: '8',
            explanation: 'כאשר שתי הנקודות נמצאות על קו אנכי, המרחק הוא ההפרש המוחלט בין שיעורי ה-y: |4 - (-4)| = |8| = 8'
          }
        ]}
      />
    </LessonLayout>
  );
};

export default AnalyticGeometryDistanceLesson;
