import React, { useState } from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import StepByStepSolution from '../../components/math/StepByStepSolution';

// Shape visualization components
const ShapeVisualization = ({ shape, title, properties }) => {
  const renderShape = () => {
    switch (shape) {
      case 'triangle-general':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <polygon points="50,10 10,90 90,90" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="50" y="8" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="5" y="95" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="95" y="95" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="50" y="95" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic">a</text>
            <text x="73" y="55" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic" transform="rotate(56 70 50)">b</text>
            <text x="27" y="55" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic" transform="rotate(-56 30 50)">c</text>
          </svg>
        );
      case 'triangle-isosceles':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <polygon points="50,10 10,90 90,90" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="50" y="8" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="5" y="95" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="95" y="95" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="50" y="95" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic">a</text>
            <text x="27" y="55" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic" transform="rotate(-56 30 50)">b</text>
            <text x="73" y="55" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic" transform="rotate(56 70 50)">b</text>
            {/* Equal sides markers */}
            <line x1="28" y1="50" x2="32" y2="45" stroke="#EF4444" strokeWidth="1.5" transform="rotate(-56 30 50)" />
            <line x1="72" y1="50" x2="68" y2="45" stroke="#EF4444" strokeWidth="1.5" transform="rotate(56 70 50)" />
            {/* Equal angles markers */}
            <path d="M 15 90 A 15 15 0 0 1 25 80" stroke="#10B981" strokeWidth="1.5" fill="none" />
            <path d="M 85 90 A 15 15 0 0 0 75 80" stroke="#10B981" strokeWidth="1.5" fill="none" />
          </svg>
        );
      case 'triangle-equilateral':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <polygon points="50,15 15,85 85,85" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="50" y="12" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="10" y="90" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="90" y="90" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="30" y="55" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic">a</text>
            <text x="70" y="55" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic">a</text>
            <text x="50" y="90" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic">a</text>
            {/* Equal sides markers */}
            <line x1="30" y1="50" x2="34" y2="45" stroke="#EF4444" strokeWidth="1.5" transform="rotate(-60 32.5 50)" />
            <line x1="70" y1="50" x2="66" y2="45" stroke="#EF4444" strokeWidth="1.5" transform="rotate(60 67.5 50)" />
            <line x1="48" y1="86" x2="52" y2="86" stroke="#EF4444" strokeWidth="1.5" />
          </svg>
        );
      case 'triangle-right':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <polygon points="10,10 10,90 90,90" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="5" y="10" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="5" y="95" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="95" y="95" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="10" y="50" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic" transform="rotate(-90 10 50)">a</text>
            <text x="50" y="95" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic">b</text>
            <text x="55" y="45" textAnchor="middle" fontSize="9" fill="#1F2937" fontStyle="italic" transform="rotate(-45 50 50)">c</text>
            {/* Right angle marker */}
            <polyline points="10,80 20,80 20,90" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
          </svg>
        );
      case 'parallelogram':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <polygon points="20,20 80,20 70,80 10,80" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="18" y="18" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="82" y="18" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="72" y="85" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="8" y="85" textAnchor="middle" fontSize="10" fill="#1F2937">D</text>
          </svg>
        );
      case 'rectangle':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <rect x="10" y="20" width="80" height="60" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="8" y="18" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="92" y="18" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="92" y="85" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="8" y="85" textAnchor="middle" fontSize="10" fill="#1F2937">D</text>
            {/* Right angle marker */}
            <polyline points="10,28 18,28 18,20" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
          </svg>
        );
      case 'rhombus':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="50" y="8" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="95" y="50" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="50" y="98" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="5" y="50" textAnchor="middle" fontSize="10" fill="#1F2937">D</text>
            {/* Equal sides markers */}
            <line x1="68" y1="30" x2="72" y2="28" stroke="#EF4444" strokeWidth="1.5" transform="rotate(45 70 30)" />
            <line x1="68" y1="70" x2="72" y2="72" stroke="#EF4444" strokeWidth="1.5" transform="rotate(-45 70 70)" />
            <line x1="28" y1="70" x2="32" y2="72" stroke="#EF4444" strokeWidth="1.5" transform="rotate(45 30 70)" />
            <line x1="28" y1="30" x2="32" y2="28" stroke="#EF4444" strokeWidth="1.5" transform="rotate(-45 30 30)" />
          </svg>
        );
      case 'square':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="18" y="18" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="82" y="18" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="82" y="85" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="18" y="85" textAnchor="middle" fontSize="10" fill="#1F2937">D</text>
            {/* Right angle marker */}
            <polyline points="20,28 28,28 28,20" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
            {/* Equal sides markers */}
            <line x1="48" y1="19" x2="52" y2="19" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="81" y1="48" x2="81" y2="52" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="48" y1="81" x2="52" y2="81" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="19" y1="48" x2="19" y2="52" stroke="#EF4444" strokeWidth="1.5" />
          </svg>
        );
      case 'trapezoid':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <polygon points="20,30 80,30 90,70 10,70" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="18" y="28" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="82" y="28" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="95" y="75" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="5" y="75" textAnchor="middle" fontSize="10" fill="#1F2937">D</text>
            {/* Parallel lines markers */}
            <polyline points="45,30 50,25 55,30" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <polyline points="45,70 50,75 55,70" fill="none" stroke="#3B82F6" strokeWidth="2" />
          </svg>
        );
      case 'trapezoid-isosceles':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <polygon points="30,30 70,30 90,70 10,70" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <text x="28" y="28" textAnchor="middle" fontSize="10" fill="#1F2937">A</text>
            <text x="72" y="28" textAnchor="middle" fontSize="10" fill="#1F2937">B</text>
            <text x="95" y="75" textAnchor="middle" fontSize="10" fill="#1F2937">C</text>
            <text x="5" y="75" textAnchor="middle" fontSize="10" fill="#1F2937">D</text>
            {/* Equal sides markers */}
            <line x1="18" y1="50" x2="22" y2="45" stroke="#EF4444" strokeWidth="1.5" transform="rotate(-63.4 20 50)" />
            <line x1="78" y1="50" x2="82" y2="45" stroke="#EF4444" strokeWidth="1.5" transform="rotate(63.4 80 50)" />
            {/* Parallel lines markers */}
            <polyline points="45,30 50,25 55,30" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <polyline points="45,70 50,75 55,70" fill="none" stroke="#3B82F6" strokeWidth="2" />
          </svg>
        );
      default:
        return <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">צורה</div>;
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
      <h4 className="text-xl font-semibold mb-2 text-blue-700">{title}</h4>
      <div className="flex justify-center items-center mb-4 min-h-32">
        {renderShape()}
      </div>
      <ul className="space-y-1 list-disc pr-6">
        {properties.map((property, index) => (
          <li key={index}>{property}</li>
        ))}
      </ul>
    </div>
  );
};

// Interactive shape selector for practice section
const ShapeSelector = ({ onShapeSelect, selectedShape }) => {
  const shapes = [
    { key: 'triangle-general', name: 'משולש כללי' },
    { key: 'triangle-isosceles', name: 'משולש שווה-שוקיים' },
    { key: 'triangle-right', name: 'משולש ישר-זווית' },
    { key: 'parallelogram', name: 'מקבילית' },
    { key: 'rectangle', name: 'מלבן' },
    { key: 'rhombus', name: 'מעוין' },
    { key: 'square', name: 'ריבוע' },
    { key: 'trapezoid', name: 'טרפז' }
  ];

  return (
    <div className="mb-6 p-4 bg-gray-100 rounded-lg">
      <h5 className="text-lg font-semibold mb-3 text-gray-800">בחר/י צורה להצגה כעזר חזותי:</h5>
      <div className="flex flex-wrap justify-center gap-2">
        {shapes.map(shape => (
          <button
            key={shape.key}
            onClick={() => onShapeSelect(shape.key)}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 border ${
              selectedShape === shape.key
                ? 'bg-blue-600 text-white transform -translate-y-1 shadow-md'
                : 'bg-blue-200 text-blue-700 border-blue-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-md'
            }`}
          >
            {shape.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const GeometryShapesPropertiesLesson = () => {
  const [selectedShape, setSelectedShape] = useState(null);

  const exercises = [
    {
      id: 'ex1',
      question: (
        <div>
          <p>תרגיל 1: במשולש ישר-זווית, אורך הניצב הראשון הוא 3 ס"מ ואורך הניצב השני הוא 4 ס"מ. מהו אורך היתר?</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        type: 'text',
        placeholder: 'הכנס אורך היתר (בס"מ)'
      }],
      correctAnswers: {
        answer: '5'
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "לפי משפט פיתגורס:", formula: "a^2 + b^2 = c^2" },
            { step: "הצבת הערכים:", formula: "3^2 + 4^2 = c^2" },
            { step: "חישוב:", formula: "9 + 16 = c^2" },
            { step: "פישוט:", formula: "25 = c^2" },
            { step: "חילוץ c:", formula: "c = \\sqrt{25} = 5" },
            { step: "התשובה:", formula: "c = 5 \\text{ ס\"מ}", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: (
        <div>
          <p>תרגיל 2: במקבילית, זווית A היא 70 מעלות. מה גודלה של זווית B?</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        type: 'text',
        placeholder: 'הכנס גודל זווית B (במעלות)'
      }],
      correctAnswers: {
        answer: '110'
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "במקבילית, זוויות נגדיות שוות:", formula: "\\angle A = \\angle C = 70^\\circ" },
            { step: "סכום הזוויות במקבילית הוא 360 מעלות:", formula: "\\angle A + \\angle B + \\angle C + \\angle D = 360^\\circ" },
            { step: "הצבת הערכים:", formula: "70^\\circ + \\angle B + 70^\\circ + \\angle D = 360^\\circ" },
            { step: "במקבילית, זוויות נגדיות שוות:", formula: "\\angle B = \\angle D" },
            { step: "פישוט:", formula: "140^\\circ + 2\\angle B = 360^\\circ" },
            { step: "חילוץ זווית B:", formula: "2\\angle B = 220^\\circ" },
            { step: "התשובה:", formula: "\\angle B = 110^\\circ", highlight: true }
          ]}
        />
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'במשולש שווה-שוקיים, זווית הראש היא 80°. מה גודלה של כל אחת מזוויות הבסיס?',
      options: [
        '40°',
        '50°',
        '60°',
        '100°'
      ],
      correctAnswer: '50°',
      explanation: 'במשולש שווה-שוקיים, זוויות הבסיס שוות. סכום הזוויות במשולש הוא 180°. לכן: 180° - 80° = 100°, ו-100° ÷ 2 = 50° לכל זווית בסיס.'
    },
    {
      id: 'q2',
      question: 'איזו מהתכונות הבאות אינה נכונה תמיד למלבן?',
      options: [
        'כל הזוויות ישרות',
        'האלכסונים שווים באורכם',
        'האלכסונים מאונכים זה לזה',
        'הצלעות הנגדיות מקבילות'
      ],
      correctAnswer: 'האלכסונים מאונכים זה לזה',
      explanation: 'במלבן, האלכסונים שווים באורכם אך אינם מאונכים זה לזה. האלכסונים מאונכים זה לזה רק בריבוע.'
    },
    {
      id: 'q3',
      question: 'במקבילית, מה נכון לגבי הזוויות הסמוכות?',
      options: [
        'הן שוות',
        'הן משלימות ל-90°',
        'הן משלימות ל-180°',
        'אין קשר ביניהן'
      ],
      correctAnswer: 'הן משלימות ל-180°',
      explanation: 'במקבילית, הזוויות הסמוכות משלימות אחת את השנייה ל-180° בגלל שהצלעות מקבילות.'
    }
  ];

  return (
    <LessonLayout
      title="תכונות של צורות גיאומטריות"
      lessonId="35182-geometry-shapes"
      nextLessonPath="/lesson/35182-geometry-angles"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            בצורות גיאומטריות יש תכונות מיוחדות שמאפשרות לנו לפתור בעיות ולחשב גדלים שונים. 
            נכיר את התכונות העיקריות של הצורות הבסיסיות.
          </p>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">משולש</h4>
            <p>למשולש יש שלוש צלעות ושלוש זוויות. סכום הזוויות במשולש הוא תמיד 180 מעלות.</p>
            <ul className="list-disc list-inside space-y-2 pr-5 mt-2">
              <li>משולש שווה-שוקיים: יש לו שתי צלעות שוות ושתי זוויות שוות.</li>
              <li>משולש שווה-צלעות: כל הצלעות שוות וכל הזוויות שוות ל-60 מעלות.</li>
              <li>משולש ישר-זווית: יש לו זווית של 90 מעלות, ומתקיים בו משפט פיתגורס.</li>
            </ul>
          </div>

          <div className="bg-green-50 border-r-4 border-green-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">מקבילית</h4>
            <p>למקבילית יש ארבע צלעות וארבע זוויות, עם התכונות הבאות:</p>
            <ul className="list-disc list-inside space-y-2 pr-5 mt-2">
              <li>הצלעות הנגדיות מקבילות ושוות באורכן.</li>
              <li>הזוויות הנגדיות שוות.</li>
              <li>סכום הזוויות הסמוכות הוא 180 מעלות.</li>
              <li>האלכסונים חוצים זה את זה.</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה:</h4>
            <p className="font-medium">במקבילית ABCD, זווית A היא 60 מעלות. מה גודלן של שאר הזוויות?</p>
            
            <StepByStepSolution
              title="פתרון מלא:"
              steps={[
                { step: "במקבילית, זוויות נגדיות שוות:", formula: "\\angle A = \\angle C = 60^\\circ" },
                { step: "סכום הזוויות הסמוכות הוא 180 מעלות:", formula: "\\angle A + \\angle B = 180^\\circ" },
                { step: "הצבת הערך של זווית A:", formula: "60^\\circ + \\angle B = 180^\\circ" },
                { step: "חילוץ זווית B:", formula: "\\angle B = 120^\\circ" },
                { step: "במקבילית, זוויות נגדיות שוות:", formula: "\\angle B = \\angle D = 120^\\circ" },
                { step: "התשובה:", formula: "\\angle A = \\angle C = 60^\\circ, \\angle B = \\angle D = 120^\\circ", highlight: true }
              ]}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">טיפים חשובים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5">
              <li>תמיד לזכור את התכונות המיוחדות של כל צורה.</li>
              <li>לצייר סקיצה של הצורה כדי להבין טוב יותר את הבעיה.</li>
              <li>לבדוק אם יש צורות מיוחדות (כמו משולש שווה-שוקיים או מקבילית).</li>
              <li>לשמור על סדר בפתרון ולכתוב את כל השלבים.</li>
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
              lessonId="geometry-shapes"
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz
        title="בחן את עצמך 🧐"
        questions={quizQuestions}
      />
    </LessonLayout>
  );
};

export default GeometryShapesPropertiesLesson;
