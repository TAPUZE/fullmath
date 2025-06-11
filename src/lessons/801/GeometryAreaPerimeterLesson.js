import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import StepByStepSolution from '../../components/math/StepByStepSolution';
import { ShapeCard, ShapeVisual, useShapeSelector } from '../../components/ui/ShapeComponents';

const GeometryAreaPerimeterLesson = () => {
  const { ShapeSelectorComponent } = useShapeSelector('triangle');

  const exercises = [
    {
      id: 'ex1',
      question: (
        <div>
          <p>תרגיל 1: אורך צלעו של ריבוע הוא 7 ס"מ. מהו היקפו ומהו שטחו?</p>
        </div>
      ),
      inputs: [
        {
          id: 'perimeter',
          label: 'היקף (ס"מ)',
          type: 'number',
          placeholder: 'הכנס היקף'
        },
        {
          id: 'area',
          label: 'שטח (סמ"ר)',
          type: 'number',
          placeholder: 'הכנס שטח'
        }
      ],
      correctAnswers: { perimeter: '28', area: '49' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "היקף ריבוע:", formula: "P = 4a = 4 · 7 = 28 ס\"מ" },
            { step: "שטח ריבוע:", formula: "S = a² = 7² = 49 סמ\"ר", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: (
        <div>
          <p>תרגיל 2: רדיוס מעגל הוא 5 ס"מ. חשב את היקפו ואת שטחו (השתמש ב-<FormulaBox inline>\pi \approx 3.14</FormulaBox>).</p>
        </div>
      ),
      inputs: [
        {
          id: 'circumference',
          label: 'היקף (ס"מ)',
          type: 'number',
          step: '0.1',
          placeholder: 'הכנס היקף'
        },
        {
          id: 'area',
          label: 'שטח (סמ"ר)',
          type: 'number',
          step: '0.1',
          placeholder: 'הכנס שטח'
        }
      ],
      correctAnswers: { circumference: '31.4', area: '78.5' },
      solution: (
        <StepByStepSolution
          title="פתרון מלא:"
          steps={[
            { step: "היקף מעגל:", formula: "P = 2πR = 2 · 3.14 · 5 = 31.4 ס\"מ" },
            { step: "שטח מעגל:", formula: "S = πR² = 3.14 · 5² = 3.14 · 25 = 78.5 סמ\"ר", highlight: true }
          ]}
        />
      )
    }
  ];

  return (
    <LessonLayout 
      title="שטח והיקף של צורות גיאומטריות" 
      lessonId="35182-geometry-area-perimeter"
      nextLessonPath="/lessons/analytic-geometry-points"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="mb-4">
            בשיעור זה נלמד לחשב היקף ושטח של צורות גיאומטריות נפוצות. 
            היקף הוא אורך המסגרת של הצורה, ושטח הוא המידה של המישור הכלוא בתוך הצורה.
          </p>
          
          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">1. משולש</h4>
            <ShapeCard 
              title="משולש"
              formulas={[
                {
                  label: "היקף (P)",
                  description: <>סכום אורכי שלוש הצלעות. <FormulaBox inline>P = a+b+c</FormulaBox></>
                },
                {
                  label: "שטח (S)",
                  description: <>מחצית מכפלת אורך צלע בגובה היורד אליה. <FormulaBox inline>{`S = \\frac{a \\cdot h_a}{2}`}</FormulaBox> (כאשר <FormulaBox inline>{`h_a`}</FormulaBox> הוא הגובה לצלע <FormulaBox inline>{`a`}</FormulaBox>).</>
                },
                {
                  label: "במשולש ישר-זווית",
                  description: <>השטח הוא מחצית מכפלת אורכי הניצבים: <FormulaBox inline>{`S = \\frac{\\text{Side}_1 \\cdot \\text{Side}_2}{2}`}</FormulaBox>.</>
                }
              ]}
            >
              <ShapeVisual shape="triangle" />
            </ShapeCard>
          </div>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">2. מלבן</h4>
            <ShapeCard 
              title="מלבן"
              formulas={[
                {
                  label: "היקף (P)",
                  description: <><FormulaBox inline>P = 2(a+b)</FormulaBox> (כאשר <FormulaBox inline>a,b</FormulaBox> אורכי הצלעות הסמוכות).</>
                },
                {
                  label: "שטח (S)",
                  description: <><FormulaBox inline>S = a \cdot b</FormulaBox>.</>
                }
              ]}
            >
              <ShapeVisual shape="rectangle" />
            </ShapeCard>
          </div>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">3. ריבוע</h4>
            <ShapeCard 
              title="ריבוע"
              formulas={[
                {
                  label: "היקף (P)",
                  description: <><FormulaBox inline>P = 4a</FormulaBox> (כאשר <FormulaBox inline>a</FormulaBox> אורך הצלע).</>
                },
                {
                  label: "שטח (S)",
                  description: <><FormulaBox inline>S = a^2</FormulaBox>.</>
                }
              ]}
            >
              <ShapeVisual shape="square" />
            </ShapeCard>
          </div>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">4. מעגל</h4>
            <ShapeCard 
              title="מעגל"
              formulas={[
                {
                  label: "היקף (P)",
                  description: <><FormulaBox inline>P = 2\pi R</FormulaBox> (כאשר <FormulaBox inline>R</FormulaBox> הוא רדיוס המעגל).</>
                },
                {
                  label: "שטח (S)",
                  description: <><FormulaBox inline>S = \pi R^2</FormulaBox>.</>
                },
                {
                  label: "הערה",
                  description: <>הערך של <FormulaBox inline>\pi</FormulaBox> (פאי) הוא בקירוב 3.14.</>
                }
              ]}
            >
              <ShapeVisual shape="circle" />
            </ShapeCard>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה:</h4>
            <p className="font-medium">מלבן שאורכי צלעותיו הם 4 ס"מ ו-6 ס"מ. חשב את שטחו והיקפו.</p>
            
            <StepByStepSolution
              title="פתרון מלא:"
              steps={[
                { step: "נתון:", formula: "a=6 ס\"מ, b=4 ס\"מ" },
                { step: "היקף המלבן:", formula: "P = 2(a+b) = 2(6+4) = 2 · 10 = 20 ס\"מ" },
                { step: "שטח המלבן:", formula: "S = a · b = 6 · 4 = 24 סמ\"ר", highlight: true }
              ]}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">טיפים חשובים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5">
              <li>במשולש, הגובה חייב להיות מאונך לבסיס.</li>
              <li>במלבן, הצלעות הנגדיות שוות זו לזו.</li>
              <li>בריבוע, כל הצלעות שוות זו לזו.</li>
              <li>במעגל, היקף נקרא גם "היקף" או "מעגל".</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        
        <ShapeSelectorComponent />

        <div className="space-y-8">
          {exercises.map((exercise) => (
            <InteractiveExercise
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              inputs={exercise.inputs}
              correctAnswers={exercise.correctAnswers}
              solution={exercise.solution}
              lessonId="geometry-area-perimeter"
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
            question: 'מהו שטח משולש שאורך בסיסו 10 ס״מ והגובה לבסיס זה הוא 6 ס״מ?',
            options: [
              '60 סמ"ר',
              '30 סמ"ר',
              '16 סמ"ר',
              '120 סמ"ר'
            ],
            correctAnswer: '30 סמ"ר',
            explanation: 'שטח משולש = (בסיס × גובה) ÷ 2 = (10 × 6) ÷ 2 = 30 סמ״ר'
          },
          {
            id: 'q2',
            question: 'היקף מלבן הוא 30 ס״מ. אורך אחת מצלעותיו הוא 9 ס״מ. מה אורך הצלע הסמוכה לה?',
            options: [
              '21 ס״מ',
              '12 ס״מ',
              '6 ס״מ',
              '15 ס״מ'
            ],
            correctAnswer: '6 ס״מ',
            explanation: 'היקף מלבן = 2(אורך + רוחב). אז 30 = 2(9 + רוחב) ⟹ 15 = 9 + רוחב ⟹ רוחב = 6 ס״מ'
          },
          {
            id: 'q3',
            question: 'מהו היקף ריבוע ששטחו 64 סמ"ר?',
            options: [
              '16 ס״מ',
              '32 ס״מ',
              '8 ס״מ',
              '24 ס״מ'
            ],
            correctAnswer: '32 ס״מ',
            explanation: 'אם שטח הריבוע הוא 64 סמ"ר, אז אורך הצלע הוא √64 = 8 ס"מ. לכן ההיקף הוא 4 × 8 = 32 ס"מ'
          }
        ]}
      />
    </LessonLayout>
  );
};

export default GeometryAreaPerimeterLesson;
