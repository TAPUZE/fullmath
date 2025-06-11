import React, { useState } from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import StepByStepSolution from '../../components/math/StepByStepSolution';

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
        <div>
          <p>תרגיל 1: בסדרה החשבונית: 5, 8, 11, 14, ... מהו הפרש הסדרה?</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        type: 'text',
        placeholder: 'הכנס את הפרש הסדרה'
      }],
      correctAnswers: {
        answer: '3'
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "הפרש הסדרה הוא ההפרש בין כל שני איברים עוקבים:", formula: "d = a_{n+1} - a_n" },
            { step: "נחשב את ההפרש בין האיבר השני לראשון:", formula: "d = 8 - 5 = 3" },
            { step: "נבדוק את ההפרש בין האיבר השלישי לשני:", formula: "d = 11 - 8 = 3" },
            { step: "נבדוק את ההפרש בין האיבר הרביעי לשלישי:", formula: "d = 14 - 11 = 3" },
            { step: "התשובה:", formula: "d = 3", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: (
        <div>
          <p>תרגיל 2: בסדרה החשבונית שהאיבר הראשון הוא 7 והפרש הוא 4, מהו האיבר החמישי?</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        type: 'text',
        placeholder: 'הכנס את האיבר החמישי'
      }],
      correctAnswers: {
        answer: '23'
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "נתון:", formula: "a_1 = 7, d = 4" },
            { step: "הנוסחה לאיבר הכללי:", formula: "a_n = a_1 + (n-1)d" },
            { step: "עבור האיבר החמישי (n = 5):", formula: "a_5 = 7 + (5-1) \\times 4" },
            { step: "פישוט:", formula: "a_5 = 7 + 4 \\times 4" },
            { step: "חישוב:", formula: "a_5 = 7 + 16 = 23" },
            { step: "התשובה:", formula: "a_5 = 23", highlight: true }
          ]}
        />
      )
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
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            סדרה היא רשימה מסודרת של מספרים. בסדרה חשבונית, ההפרש בין כל שני איברים עוקבים הוא קבוע. 
            ההפרש הקבוע הזה נקרא <strong>הפרש הסדרה</strong> ומסומן באות <FormulaBox inline>d</FormulaBox>.
          </p>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">הגדרה פורמלית</h4>
            <p>
              סדרה <FormulaBox inline>(aₙ)</FormulaBox> נקראת סדרה חשבונית אם קיים מספר קבוע <FormulaBox inline>d</FormulaBox> 
              כך ש: <FormulaBox>aₙ₊₁ = aₙ + d</FormulaBox>
            </p>
            <p>
              כלומר, כל איבר בסדרה (מהשני ואילך) שווה לאיבר הקודם לו בתוספת <FormulaBox inline>d</FormulaBox>.
            </p>
          </div>

          <div className="bg-green-50 border-r-4 border-green-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">הנוסחה לאיבר הכללי</h4>
            <p>
              באמצעות האיבר הראשון <FormulaBox inline>a₁</FormulaBox> והפרש הסדרה <FormulaBox inline>d</FormulaBox>, 
              ניתן לכתוב נוסחה לאיבר הכללי של הסדרה:
            </p>
            <div className="my-4 text-center">
              <FormulaBox>aₙ = a₁ + (n-1)d</FormulaBox>
            </div>
            <p>כאשר:</p>
            <ul className="list-disc list-inside space-y-2 pr-5 mt-2">
              <li><FormulaBox inline>aₙ</FormulaBox> הוא האיבר ה-n-י בסדרה</li>
              <li><FormulaBox inline>a₁</FormulaBox> הוא האיבר הראשון</li>
              <li><FormulaBox inline>d</FormulaBox> הוא הפרש הסדרה</li>
              <li><FormulaBox inline>n</FormulaBox> הוא מספר האיבר בסדרה</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה:</h4>
            <p className="font-medium">בסדרה החשבונית 3, 7, 11, 15, ... מהו האיבר העשירי?</p>
            
            <StepByStepSolution
              title="פתרון מלא:"
              steps={[
                { step: "1. נמצא את הפרש הסדרה:", formula: "d = 7 - 3 = 4" },
                { step: "2. נשתמש בנוסחה לאיבר הכללי:", formula: "a_n = a_1 + (n-1)d" },
                { step: "3. נציב את הנתונים (n = 10):", formula: "a_{10} = 3 + (10-1) \\times 4" },
                { step: "4. נפשט:", formula: "a_{10} = 3 + 9 \\times 4" },
                { step: "5. נחשב:", formula: "a_{10} = 3 + 36 = 39" },
                { step: "התשובה:", formula: "a_{10} = 39", highlight: true }
              ]}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">טיפים חשובים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5">
              <li>תמיד לבדוק את הפרש הסדרה בין כמה זוגות של איברים עוקבים.</li>
              <li>לזכור את הנוסחה לאיבר הכללי: aₙ = a₁ + (n-1)d.</li>
              <li>בדוק את הפתרון על ידי חישוב כמה איברים בסדרה.</li>
              <li>שים לב לסימן של הפרש הסדרה (חיובי או שלילי).</li>
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
              lessonId="sequences-arithmetic-intro"
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
            question: 'איזה מהרצפים הבאים הוא סדרה חשבונית?',
            options: [
              '1, 4, 9, 16, 25, ...',
              '2, 6, 18, 54, 162, ...',
              '3, 7, 11, 15, 19, ...',
              '1, 1, 2, 3, 5, 8, ...'
            ],
            correctAnswer: '3, 7, 11, 15, 19, ...',
            explanation: 'זוהי סדרה חשבונית כי ההפרש בין כל שני איברים עוקבים הוא קבוע (4).'
          },
          {
            id: 'q2',
            question: 'בסדרה החשבונית 12, 9, 6, 3, ... מהו הפרש הסדרה?',
            options: [
              '3',
              '-3',
              '9',
              '-9'
            ],
            correctAnswer: '-3',
            explanation: 'הפרש הסדרה הוא -3 כי כל איבר קטן מהקודם ב-3.'
          },
          {
            id: 'q3',
            question: 'בסדרה חשבונית, האיבר הראשון הוא 5 והפרש הוא 3. מהו האיבר השישי?',
            options: [
              '15',
              '18',
              '20',
              '23'
            ],
            correctAnswer: '20',
            explanation: 'נשתמש בנוסחה aₙ = a₁ + (n-1)d: a₆ = 5 + (6-1)×3 = 5 + 15 = 20.'
          }
        ]}
      />
    </LessonLayout>
  );
};

export default ArithmeticSequencesIntroLesson;
