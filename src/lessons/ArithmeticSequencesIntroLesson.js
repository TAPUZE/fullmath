import React, { useState } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';
import ProgressSection from '../components/ProgressSection';

// Sequence visualization component
const SequenceVisualization = ({ sequence, difference, title }) => {
  return (
    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg my-4">
      <h5 className="font-semibold mb-2 text-blue-700">{title}</h5>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-2">
        {sequence.map((term, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-blue-500 text-white px-3 py-2 rounded-lg font-mono text-lg min-w-16 text-center">
              {term}
            </div>
            {index < sequence.length - 1 && (
              <div className="mx-2 text-blue-600 font-semibold">
                +{difference}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-sm text-blue-600 text-center mt-2">
        הפרש הסדרה: d = {difference}
      </p>
    </div>
  );
};

// Interactive sequence builder
const SequenceBuilder = () => {
  const [firstTerm, setFirstTerm] = useState(2);
  const [difference, setDifference] = useState(3);
  const [numTerms, setNumTerms] = useState(5);

  const generateSequence = () => {
    const sequence = [];
    for (let i = 0; i < numTerms; i++) {
      sequence.push(firstTerm + i * difference);
    }
    return sequence;
  };

  return (
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg my-4">
      <h5 className="font-semibold mb-3 text-gray-800">בנה סדרה חשבונית בעצמך:</h5>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            איבר ראשון (a₁):
          </label>
          <input
            type="number"
            value={firstTerm}
            onChange={(e) => setFirstTerm(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            הפרש (d):
          </label>
          <input
            type="number"
            value={difference}
            onChange={(e) => setDifference(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            מספר איברים:
          </label>
          <input
            type="number"
            min="3"
            max="8"
            value={numTerms}
            onChange={(e) => setNumTerms(parseInt(e.target.value) || 3)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>
      
      <SequenceVisualization
        sequence={generateSequence()}
        difference={difference}
        title="הסדרה שלך:"
      />
    </div>
  );
};

// Example box component
const ExampleBox = ({ title, children }) => (
  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
    <h4 className="text-lg font-semibold mb-2 text-blue-700">{title}</h4>
    {children}
  </div>
);

const ArithmeticSequencesIntroLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: (
        <span>
          בסדרה החשבונית: 5, 8, 11, 14, ... מהו הפרש הסדרה?
        </span>
      ),
      correctAnswer: '3',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>הפרש הסדרה הוא ההפרש בין כל שני איברים עוקבים:</p>
          <p>d = 8 - 5 = 3</p>
          <p>d = 11 - 8 = 3</p>
          <p>d = 14 - 11 = 3</p>
          <p>לכן, הפרש הסדרה הוא 3.</p>
        </div>
      ),
      placeholder: 'הכנס את הפרש הסדרה'
    },
    {
      id: 'ex2',
      question: (
        <span>
          בסדרה החשבונית שהאיבר הראשון הוא 7 והפרש הוא 4, מהו האיבר החמישי?
        </span>
      ),
      correctAnswer: '23',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>נתון: <FormulaBox isInline>a₁ = 7, d = 4</FormulaBox></p>
          <p>הנוסחה לאיבר הכללי: <FormulaBox isInline>aₙ = a₁ + (n-1)d</FormulaBox></p>
          <p>עבור האיבר החמישי (n = 5):</p>
          <p><FormulaBox isInline>a₅ = 7 + (5-1)×4 = 7 + 4×4 = 7 + 16 = 23</FormulaBox></p>
          <p>האיבר החמישי הוא 23.</p>
        </div>
      ),
      placeholder: 'הכנס את האיבר החמישי'
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'איזה מהרצפים הבאים הוא סדרה חשבונית?',
      options: [
        { value: 'a', label: '1, 4, 9, 16, 25, ...' },
        { value: 'b', label: '2, 6, 18, 54, 162, ...' },
        { value: 'c', label: '3, 7, 11, 15, 19, ...' },
        { value: 'd', label: '1, 1, 2, 3, 5, 8, ...' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q2',
      question: (
        <span>
          בסדרה החשבונית 12, 9, 6, 3, ... מהו הפרש הסדרה?
        </span>
      ),
      options: [
        { value: 'a', label: '3' },
        { value: 'b', label: '-3' },
        { value: 'c', label: '9' },
        { value: 'd', label: '-9' }
      ],
      correctAnswer: 'b'
    }
  ];

  return (
    <LessonLayout
      title="סדרות חשבוניות (מבוא)"
      lessonId="35182-sequences-arithmetic-intro"
      nextLessonPath="/lessons/trigonometry-right-triangle"
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            סדרה היא רשימה מסודרת של מספרים. בסדרה חשבונית, ההפרש בין כל שני איברים עוקבים הוא קבוע. 
            ההפרש הקבוע הזה נקרא <strong>הפרש הסדרה</strong> ומסומן באות <FormulaBox isInline>d</FormulaBox>.
          </p>

          <SequenceVisualization
            sequence={[2, 5, 8, 11, 14]}
            difference={3}
            title="דוגמה לסדרה חשבונית:"
          />

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              הגדרה פורמלית
            </h3>
            <p>
              סדרה <FormulaBox isInline>(aₙ)</FormulaBox> נקראת סדרה חשבונית אם קיים מספר קבוע <FormulaBox isInline>d</FormulaBox> 
              כך ש: <FormulaBox>aₙ₊₁ = aₙ + d</FormulaBox>
            </p>
            <p>
              כלומר, כל איבר בסדרה (מהשני ואילך) שווה לאיבר הקודם לו בתוספת <FormulaBox isInline>d</FormulaBox>.
            </p>
          </div>

          <ExampleBox title="דוגמאות לסדרות חשבוניות:">
            <div className="space-y-3">
              <div>
                <p><strong>דוגמה 1:</strong> 1, 4, 7, 10, 13, ...</p>
                <p className="text-sm text-gray-600">הפרש הסדרה: d = 3 (כל איבר גדול מהקודם ב-3)</p>
              </div>
              
              <div>
                <p><strong>דוגמה 2:</strong> 20, 15, 10, 5, 0, ...</p>
                <p className="text-sm text-gray-600">הפרש הסדרה: d = -5 (כל איבר קטן מהקודם ב-5)</p>
              </div>
              
              <div>
                <p><strong>דוגמה 3:</strong> 3, 3, 3, 3, 3, ...</p>
                <p className="text-sm text-gray-600">הפרש הסדרה: d = 0 (סדרה קבועה)</p>
              </div>
            </div>
          </ExampleBox>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              הנוסחה לאיבר הכללי
            </h3>
            <p>
              באמצעות האיבר הראשון <FormulaBox isInline>a₁</FormulaBox> והפרש הסדרה <FormulaBox isInline>d</FormulaBox>, 
              ניתן לכתוב נוסחה לאיבר הכללי של הסדרה:
            </p>
            
            <div className="my-4 text-center">
              <FormulaBox>aₙ = a₁ + (n-1)d</FormulaBox>
            </div>
            
            <p>כאשר:</p>
            <ul className="list-disc list-inside pr-5 space-y-1">
              <li><FormulaBox isInline>aₙ</FormulaBox> - האיבר ה-n בסדרה</li>
              <li><FormulaBox isInline>a₁</FormulaBox> - האיבר הראשון בסדרה</li>
              <li><FormulaBox isInline>d</FormulaBox> - הפרש הסדרה</li>
              <li><FormulaBox isInline>n</FormulaBox> - מיקום האיבר בסדרה (1, 2, 3, ...)</li>
            </ul>
          </div>

          <ExampleBox title="דוגמה לשימוש בנוסחה:">
            <p className="font-medium mb-2">
              בסדרה החשבונית 5, 8, 11, 14, ... מצא את האיבר ה-10.
            </p>
            
            <div className="mt-4">
              <p><strong>פתרון:</strong></p>
              <p>1. נזהה את הנתונים: <FormulaBox isInline>a₁ = 5</FormulaBox>, <FormulaBox isInline>d = 3</FormulaBox></p>
              <p>2. נשתמש בנוסחה: <FormulaBox isInline>aₙ = a₁ + (n-1)d</FormulaBox></p>
              <p>3. עבור n = 10:</p>
              <p><FormulaBox>a₁₀ = 5 + (10-1)×3 = 5 + 9×3 = 5 + 27 = 32</FormulaBox></p>
              <p className="font-semibold">האיבר ה-10 הוא 32.</p>
            </div>
          </ExampleBox>

          <SequenceBuilder />
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        
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
      <Quiz questions={quizQuestions} />      {/* Progress Section */}
      <ProgressSection 
        lessonId="35182-sequences-arithmetic-intro"
        nextLessonPath="/lessons/sequences-arithmetic-sum"
        menuPath="/lessons"
      />
    </LessonLayout>
  );
};

export default ArithmeticSequencesIntroLesson;
