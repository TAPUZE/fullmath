import React, { useState } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

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
        <span>
          במשולש ישר-זווית ABC (<FormulaBox isInline>∠C=90°</FormulaBox>), אורכי הניצבים הם{' '}
          <FormulaBox isInline>AC=3</FormulaBox> ס"מ ו-<FormulaBox isInline>BC=4</FormulaBox> ס"מ. 
          מהו אורך היתר AB?
        </span>
      ),
      correctAnswer: '5',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>לפי משפט פיתגורס: <FormulaBox isInline>AC² + BC² = AB²</FormulaBox>.</p>
          <p><FormulaBox isInline>3² + 4² = AB² ⇒ 9 + 16 = AB² ⇒ 25 = AB²</FormulaBox></p>
          <p><FormulaBox isInline>AB = √25 = 5</FormulaBox>. אורך היתר AB הוא 5 ס"מ.</p>
        </div>
      ),
      placeholder: 'הכנס אורך היתר (בספרות בלבד)'
    },
    {
      id: 'ex2',
      question: (
        <span>
          במקבילית ABCD, זווית A היא <FormulaBox isInline>70°</FormulaBox>. מה גודלה של זווית B?
        </span>
      ),
      correctAnswer: '110',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>במקבילית, סכום כל שתי זוויות סמוכות הוא <FormulaBox isInline>180°</FormulaBox>.</p>
          <p><FormulaBox isInline>∠A + ∠B = 180° ⇒ 70° + ∠B = 180° ⇒ ∠B = 110°</FormulaBox>.</p>
        </div>
      ),
      placeholder: 'הכנס גודל זווית B (במעלות)'
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: (
        <span>
          במשולש שווה-שוקיים, זווית הראש היא <FormulaBox isInline>80°</FormulaBox>. 
          מה גודלה של כל אחת מזוויות הבסיס?
        </span>
      ),
      options: [
        { value: 'a', label: <FormulaBox isInline>40°</FormulaBox> },
        { value: 'b', label: <FormulaBox isInline>50°</FormulaBox> },
        { value: 'c', label: <FormulaBox isInline>60°</FormulaBox> },
        { value: 'd', label: <FormulaBox isInline>100°</FormulaBox> }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q2',
      question: 'איזו מהתכונות הבאות אינה נכונה תמיד למלבן?',
      options: [
        { value: 'a', label: 'כל הזוויות ישרות.' },
        { value: 'b', label: 'האלכסונים שווים באורכם.' },
        { value: 'c', label: 'האלכסונים מאונכים זה לזה.' },
        { value: 'd', label: 'הצלעות הנגדיות מקבילות.' }
      ],
      correctAnswer: 'c'
    }
  ];

  return (
    <LessonLayout
      title="תכונות גיאומטריות של משולשים ומרובעים"
      lessonId="35182-geometry-shapes-properties"
      nextLessonPath="/lessons/probability-intro"
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="mb-4">
            בשיעור זה נסקור את התכונות המרכזיות של משולשים ומרובעים שונים. 
            שימו לב לסימונים בסקיצות המצורפות לכל צורה, הם יעזרו לכם להבין את התכונות.
          </p>
          
          <h3 className="text-2xl font-semibold text-green-600 mb-3">משולשים</h3>
          
          <ShapeVisualization
            shape="triangle-general"
            title="כללי (משולש ABC)"
            properties={[
              <>סכום הזוויות במשולש הוא תמיד <FormulaBox isInline>180°</FormulaBox>. (<FormulaBox isInline>∠A + ∠B + ∠C = 180°</FormulaBox>)</>,
              'זווית חיצונית למשולש שווה לסכום שתי הזוויות הפנימיות שאינן צמודות לה.',
              <>סכום שתי צלעות במשולש גדול מהצלע השלישית (למשל, <FormulaBox isInline>{`a+b > c`}</FormulaBox>).</>
            ]}
          />

          <ShapeVisualization
            shape="triangle-isosceles"
            title="משולש שווה-שוקיים (AB=AC)"
            properties={[
              'שתי שוקיים שוות באורכן (AB=AC).',
              <>זוויות הבסיס שוות זו לזו (<FormulaBox isInline>∠B = ∠C</FormulaBox>).</>,
              'התיכון לבסיס, הגובה לבסיס וחוצה זווית הראש מתלכדים.'
            ]}
          />

          <ShapeVisualization
            shape="triangle-equilateral"
            title="משולש שווה-צלעות"
            properties={[
              'כל שלוש הצלעות שוות באורכן.',
              <>כל שלוש הזוויות שוות <FormulaBox isInline>60°</FormulaBox> כל אחת.</>
            ]}
          />

          <ShapeVisualization
            shape="triangle-right"
            title={<>משולש ישר-זווית (<FormulaBox isInline>∠C = 90°</FormulaBox>)</>}
            properties={[
              <>זווית אחת ישרה (<FormulaBox isInline>90°</FormulaBox>). הניצבים הם a, b והיתר הוא c.</>,
              <><strong>משפט פיתגורס:</strong> <FormulaBox isInline>a² + b² = c²</FormulaBox>.</>,
              'התיכון ליתר שווה למחצית היתר.',
              <>במשולש ישר-זווית שזוויותיו החדות הן <FormulaBox isInline>30°, 60°</FormulaBox>, הניצב שמול הזווית של <FormulaBox isInline>30°</FormulaBox> שווה למחצית היתר.</>
            ]}
          />

          <hr className="my-8 border-gray-300" />
          
          <h3 className="text-2xl font-semibold text-green-600 mb-3">מרובעים (ABCD)</h3>

          <ShapeVisualization
            shape="parallelogram"
            title="מקבילית"
            properties={[
              'צלעות נגדיות מקבילות (AB || DC, AD || BC) ושוות (AB = DC, AD = BC).',
              <>זוויות נגדיות שוות (<FormulaBox isInline>∠A = ∠C, ∠B = ∠D</FormulaBox>).</>,
              <>סכום זוויות סמוכות <FormulaBox isInline>180°</FormulaBox>.</>,
              'אלכסונים חוצים זה את זה.'
            ]}
          />

          <ShapeVisualization
            shape="rectangle"
            title="מלבן"
            properties={[
              'כל תכונות המקבילית.',
              <>כל הזוויות ישרות (<FormulaBox isInline>90°</FormulaBox>).</>,
              'אלכסונים שווים באורכם.'
            ]}
          />

          <ShapeVisualization
            shape="rhombus"
            title="מעוין"
            properties={[
              'כל תכונות המקבילית.',
              'כל הצלעות שוות.',
              'אלכסונים מאונכים זה לזה וחוצים את הזוויות.'
            ]}
          />

          <ShapeVisualization
            shape="square"
            title="ריבוע"
            properties={[
              'כל תכונות המלבן והמעוין.'
            ]}
          />

          <ShapeVisualization
            shape="trapezoid"
            title="טרפז (AB || DC)"
            properties={[
              'זוג אחד של צלעות נגדיות מקבילות (בסיסים).',
              <>סכום זוויות ליד כל שוק <FormulaBox isInline>180°</FormulaBox>.</>
            ]}
          />

          <ShapeVisualization
            shape="trapezoid-isosceles"
            title="טרפז שווה-שוקיים (AD=BC, AB || DC)"
            properties={[
              'טרפז שבו השוקיים שוות.',
              'זוויות הבסיס שוות.',
              'אלכסונים שווים.'
            ]}
          />
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        
        <ShapeSelector 
          onShapeSelect={setSelectedShape} 
          selectedShape={selectedShape} 
        />
        
        {selectedShape && (
          <div className="min-h-40 bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4 mb-6 flex justify-center items-center">
            <ShapeVisualization
              shape={selectedShape}
              title=""
              properties={[]}
            />
          </div>
        )}

        <div className="space-y-8">
          {exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              {...exercise}
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz questions={quizQuestions} />    
    </LessonLayout>
  );
};

export default GeometryShapesPropertiesLesson;
