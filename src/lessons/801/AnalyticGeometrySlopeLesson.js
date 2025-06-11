import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import StepByStepSolution from '../../components/math/StepByStepSolution';
import { SlopeVisualization, LineGraph } from '../../components/ui/GraphComponents';

const AnalyticGeometrySlopeLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: (
        <div>
          <p>תרגיל 1: מצא את שיפוע הישר העובר דרך הנקודות <FormulaBox inline>A(2,3)</FormulaBox> ו-<FormulaBox inline>B(4,7)</FormulaBox>.</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'שיפוע',
        type: 'text',
        placeholder: 'הכנס שיפוע'
      }],
      correctAnswers: { answer: '2' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "נסמן את הקואורדינטות:", formula: "A(2,3), B(4,7)" },
            { step: "נציב בנוסחת השיפוע:", formula: "m = (y₂ - y₁)/(x₂ - x₁) = (7 - 3)/(4 - 2) = 4/2 = 2" },
            { step: "השיפוע הוא 2", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: (
        <div>
          <p>תרגיל 2: מצא את משוואת הישר ששיפועו 2 ועובר דרך הנקודה <FormulaBox inline>(3,4)</FormulaBox>.</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'משוואת הישר',
        type: 'text',
        placeholder: 'הכנס משוואה בצורה y=mx+n'
      }],
      correctAnswers: { answer: 'y=2x-2' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "נתון:", formula: "m=2, (x₁,y₁)=(3,4)" },
            { step: "נציב בנוסחה:", formula: "y - y₁ = m(x - x₁)" },
            { step: "נציב את הערכים:", formula: "y - 4 = 2(x - 3)" },
            { step: "נפשט:", formula: "y - 4 = 2x - 6" },
            { step: "נעביר אגפים:", formula: "y = 2x - 2", highlight: true }
          ]}
        />
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
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>הקו הישר הוא אחד המושגים הבסיסיים בגיאומטריה אנליטית. אנו מתארים אותו באמצעות השיפוע שלו והמשוואה האלגברית המייצגת אותו.</p>
          
          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">1. שיפוע של ישר (<FormulaBox inline>m</FormulaBox>)</h4>
            <p>השיפוע של ישר מתאר את "התלילות" שלו, כלומר, בכמה הישר עולה או יורד עבור כל יחידת התקדמות אופקית.</p>
            
            <div className="mt-4">
              <p>אם נתונות שתי נקודות על הישר, <FormulaBox inline>A(x_1, y_1)</FormulaBox> ו-<FormulaBox inline>B(x_2, y_2)</FormulaBox>, השיפוע <FormulaBox inline>m</FormulaBox> מחושב כך:</p>
              <div className="text-center my-4">
                <FormulaBox>m = \frac{y_2 - y_1}{x_2 - x_1}</FormulaBox>
              </div>
            </div>
            
            <p>חשוב לשים לב: <FormulaBox inline>x_2 \neq x_1</FormulaBox> (אחרת הישר הוא אנכי והשיפוע אינו מוגדר).</p>
            
            <SlopeVisualization 
              points={[
                { x: 10, y: -50 },
                { x: 70, y: -20 }
              ]} 
            />
            
            <ul className="list-disc list-inside space-y-2 pr-5 mt-3">
              <li>אם <FormulaBox inline>m {'>'} 0</FormulaBox>, הישר "עולה" משמאל לימין.</li>
              <li>אם <FormulaBox inline>m {'<'} 0</FormulaBox>, הישר "יורד" משמאל לימין.</li>
              <li>אם <FormulaBox inline>m = 0</FormulaBox>, הישר אופקי (מקביל לציר ה-X).</li>
              <li>אם השיפוע אינו מוגדר, הישר אנכי (מקביל לציר ה-Y).</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">2. משוואת הישר</h4>
            <p>המשוואה האלגברית המייצגת קו ישר נקראת משוואת הישר. ישנן מספר צורות להצגתה:</p>
            
            <div className="mt-4">
              <h5 className="font-semibold mb-2">א. הצורה המפורשת: <FormulaBox inline>y = mx + n</FormulaBox></h5>
              <p>זוהי הצורה הנפוצה ביותר. במשוואה זו:</p>
              <ul className="list-disc list-inside space-y-2 pr-5">
                <li><FormulaBox inline>m</FormulaBox> הוא <strong>השיפוע</strong> של הישר.</li>
                <li><FormulaBox inline>n</FormulaBox> הוא <strong>שיעור ה-Y של נקודת החיתוך של הישר עם ציר ה-Y</strong> (הנקודה <FormulaBox inline>(0,n)</FormulaBox>).</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="font-semibold mb-2">ב. מציאת משוואת ישר על פי שיפוע ונקודה</h5>
              <p>אם ידוע שיפוע הישר <FormulaBox inline>m</FormulaBox> ונקודה <FormulaBox inline>(x_1, y_1)</FormulaBox> הנמצאת על הישר, ניתן להשתמש בנוסחה:</p>
              <div className="text-center my-4">
                <FormulaBox>y - y_1 = m(x - x_1)</FormulaBox>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="font-semibold mb-2">ג. מציאת משוואת ישר על פי שתי נקודות</h5>
              <p>אם נתונות שתי נקודות <FormulaBox inline>(x_1, y_1)</FormulaBox> ו-<FormulaBox inline>(x_2, y_2)</FormulaBox> הנמצאות על הישר:</p>
              <ol className="list-decimal list-inside space-y-2 pr-5">
                <li>תחילה, מחשבים את השיפוע <FormulaBox inline>m</FormulaBox>.</li>
                <li>לאחר מכן, משתמשים בשיפוע <FormulaBox inline>m</FormulaBox> ובאחת מהנקודות בנוסחה <FormulaBox inline>y - y_1 = m(x - x_1)</FormulaBox>.</li>
                <li>מפשטים את המשוואה.</li>
              </ol>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה:</h4>
            <p className="font-medium">מצא את משוואת הישר ששיפועו 3 ועובר דרך הנקודה <FormulaBox inline>(1,5)</FormulaBox>.</p>
            
            <LineGraph 
              slope={3} 
              yIntercept={2} 
              point={{x: 1, y: 5}} 
              title="ישר y=3x+2 העובר דרך (1,5)" 
            />
            
            <StepByStepSolution
              title="פתרון מלא:"
              steps={[
                { step: "נתון:", formula: "m=3, (x₁,y₁)=(1,5)" },
                { step: "נציב בנוסחה:", formula: "y - y₁ = m(x - x₁)" },
                { step: "נציב את הערכים:", formula: "y - 5 = 3(x - 1)" },
                { step: "נפשט:", formula: "y - 5 = 3x - 3" },
                { step: "נעביר אגפים:", formula: "y = 3x + 2", highlight: true }
              ]}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">טיפים חשובים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5">
              <li>תמיד לזכור שצריך לחסר את הקואורדינטות בסדר הנכון: y₂ - y₁ ו-x₂ - x₁.</li>
              <li>לשים לב לסימנים של הקואורדינטות, במיוחד כשהן שליליות.</li>
              <li>לזכור שכאשר x₂ = x₁, השיפוע אינו מוגדר (הישר אנכי).</li>
              <li>במשוואת הישר y = mx + n, n הוא נקודת החיתוך עם ציר ה-Y.</li>
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
              lessonId="analytic-geometry-slope"
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
            question: 'מהו שיפוע הישר העובר דרך הנקודות (1,1) ו-(3,5)?',
            options: [
              '1',
              '2',
              '0.5',
              '-2'
            ],
            correctAnswer: '2',
            explanation: 'm = (5-1)/(3-1) = 4/2 = 2'
          },
          {
            id: 'q2',
            question: 'מהי משוואת הישר ששיפועו 1 וחותך את ציר ה-Y בנקודה (0,-3)?',
            options: [
              'y = -3x + 1',
              'y = x - 3',
              'y = x + 3',
              'y = 3x - 1'
            ],
            correctAnswer: 'y = x - 3',
            explanation: 'במשוואה y = mx + n, m=1 ו-n=-3 (נקודת החיתוך עם ציר Y)'
          },
          {
            id: 'q3',
            question: 'איזה מהבאים מתאר נכון את הישר y = -2x + 4?',
            options: [
              'ישר עולה החותך את ציר Y בנקודה (0,4)',
              'ישר יורד החותך את ציר Y בנקודה (0,4)',
              'ישר עולה החותך את ציר Y בנקודה (0,-4)',
              'ישר יורד החותך את ציר Y בנקודה (0,-4)'
            ],
            correctAnswer: 'ישר יורד החותך את ציר Y בנקודה (0,4)',
            explanation: 'השיפוע שלילי (m=-2) ולכן הישר יורד, ו-n=4 ולכן חותך את ציר Y בנקודה (0,4)'
          }
        ]}
      />
    </LessonLayout>
  );
};

export default AnalyticGeometrySlopeLesson;
