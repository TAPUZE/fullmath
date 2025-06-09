import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import { SlopeVisualization, LineGraph } from '../../components/ui/GraphComponents';
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
        <div>          <p><strong>פתרון מלא:</strong></p>
          <FormulaBox>m = \frac{"{y_2 - y_1}"}{"{x_2 - x_1}"} = \frac{"{7 - 3}"}{"{4 - 2}"} = \frac{4}{2} = 2</FormulaBox>
          <p>השיפוע הוא 2.</p>
          <LineGraph 
            slope={2} 
            yIntercept={-1} 
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
          <FormulaBox>m = \frac{"{y_2 - y_1}"}{"{x_2 - x_1}"} = \frac{"{5 - 1}"}{"{3 - 1}"} = \frac{4}{2} = 2</FormulaBox>
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
            <p>אם נתונות שתי נקודות על הישר, <FormulaBox inline>A(x_1, y_1)</FormulaBox> ו-<FormulaBox inline>B(x_2, y_2)</FormulaBox>, השיפוע <FormulaBox inline>m</FormulaBox> מחושב כך:</p>              <FormulaBox>
              m = \frac{"{y_2 - y_1}"}{"{x_2 - x_1}"}
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
              <LineGraph 
              slope={3} 
              yIntercept={2} 
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
            <InteractiveExercise
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              inputs={[{
                id: 'answer',
                label: 'תשובה',
                type: exercise.type || 'text',
                placeholder: exercise.placeholder
              }]}
              correctAnswers={{ answer: exercise.correctAnswer }}
              solution={exercise.solution}
            />
          ))}
            <InteractiveExercise
            id="line-equation-exercise"
            question={
              <span>
                תרגיל 2: מצא את משוואת הישר ששיפועו <FormulaBox inline>-2</FormulaBox> ועובר דרך הנקודה <FormulaBox inline>(1, -1)</FormulaBox>. הצג את התשובה בצורה <FormulaBox inline>y=mx+n</FormulaBox>.
              </span>
            }
            inputs={[{
              id: 'equation',
              label: 'משוואת הישר',
              type: 'text',
              placeholder: 'לדוגמה: y=-2x+1'
            }]}
            correctAnswers={{ equation: 'y=-2x+1' }}
            solution={
              <div>
                <p><strong>פתרון מלא:</strong></p>
                <FormulaBox>y - (-1) = -2(x - 1)</FormulaBox>
                <FormulaBox>y + 1 = -2x + 2 \Rightarrow y = -2x + 1</FormulaBox>
                <p>משוואת הישר היא: <FormulaBox inline>y = -2x + 1</FormulaBox></p>
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
