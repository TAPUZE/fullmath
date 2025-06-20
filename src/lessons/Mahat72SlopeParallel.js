import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat72SlopeParallel = () => {
  const lessonId = 'mahat-7-2-slope-parallel';
  const nextLessonPath = '/lessons/mahat-7-3-midpoint-distance';

  const exercises = [
    {
      id: 'ex1',
      question: 'סדר את הישרים הבאים מהתלול ביותר למתון ביותר: y=5x, y=-8x, y=x, y=-0.5x',
      correctAnswer: 'y=-8x, y=5x, y=x, y=-0.5x',
      placeholder: 'רשום את הישרים בסדר',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>התלילות נקבעת על ידי הערך המוחלט של השיפוע:</p>
          <p>• y = -8x: |−8| = 8 (התלול ביותר)</p>
          <p>• y = 5x: |5| = 5</p>
          <p>• y = x: |1| = 1</p>
          <p>• y = -0.5x: |−0.5| = 0.5 (המתון ביותר)</p>
          <p><strong>הסדר: y=-8x, y=5x, y=x, y=-0.5x</strong></p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'נתונים הישרים y=x+5 ו-y=x-2. מה ניתן לומר עליהם?',
      correctAnswer: 'הם מקבילים',
      placeholder: 'תאר את הקשר בין הישרים',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נבדוק את השיפועים:</p>
          <p>• ישר ראשון: y = x + 5, השיפוע a₁ = 1</p>
          <p>• ישר שני: y = x - 2, השיפוע a₂ = 1</p>
          <p>מכיוון שהשיפועים שווים (a₁ = a₂ = 1), הישרים מקבילים.</p>
          <p><strong>התשובה: הישרים מקבילים</strong></p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'מצא את משוואת הישר המקביל לישר y = -x + 7 ועובר דרך ראשית הצירים.',
      correctAnswer: 'y = -x',
      placeholder: 'רשם את המשוואה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>הישר הנתון: y = -x + 7</p>
          <p>השיפוע של הישר הנתון: a = -1</p>
          <p>הישר המקביל חייב להיות בעל אותו שיפוע: a = -1</p>
          <p>הישר עובר דרך ראשית הצירים (0,0), לכן b = 0</p>
          <p><strong>משוואת הישר: y = -x</strong></p>
        </div>
      )
    },
    {
      id: 'ex4',
      question: 'מצא את משוואת הישר הניצב לישר y = (1/3)x + 2 ועובר דרך הנקודה (2,6).',
      correctAnswer: 'y = -3x + 12',
      placeholder: 'רשם את המשוואה',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>הישר הנתון: y = (1/3)x + 2</p>
          <p>השיפוע של הישר הנתון: a₁ = 1/3</p>
          <p>עבור ישרים ניצבים: a₁ × a₂ = -1</p>
          <FormulaBox>{"\\frac{1}{3} \\times a_2 = -1"}</FormulaBox>
          <FormulaBox>{"a_2 = -3"}</FormulaBox>
          <p>הישר עובר דרך (2,6):</p>
          <FormulaBox>{"6 = -3(2) + b"}</FormulaBox>
          <FormulaBox>{"6 = -6 + b"}</FormulaBox>
          <FormulaBox>{"b = 12"}</FormulaBox>
          <p><strong>משוואת הישר: y = -3x + 12</strong></p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'איזה מהישרים הבאים הוא התלול ביותר?',
      options: [
        'y = 2x + 10',
        'y = -x + 1',
        'y = -3x - 5',
        'y = 0.5x'
      ],
      correctAnswer: 'y = -3x - 5',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <p>התלילות נקבעת על ידי הערך המוחלט של השיפוע:</p>
          <p>• y = 2x + 10: |2| = 2</p>
          <p>• y = -x + 1: |-1| = 1</p>
          <p>• y = -3x - 5: |-3| = 3 ← התלול ביותר</p>
          <p>• y = 0.5x: |0.5| = 0.5</p>
        </div>
      )
    },
    {
      id: 'q2',
      question: 'נתון ישר שמשוואתו y = 5x + 1. מהו שיפועו של ישר הניצב לו?',
      options: [
        '5',
        '-5',
        '1/5',
        '-1/5'
      ],
      correctAnswer: '-1/5',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <p>עבור ישרים ניצבים: a₁ × a₂ = -1</p>
          <p>השיפוע של הישר הנתון: a₁ = 5</p>
          <FormulaBox>{"5 \\times a_2 = -1"}</FormulaBox>
          <FormulaBox>{"a_2 = -\\frac{1}{5}"}</FormulaBox>
        </div>
      )
    }
  ];

  return (
    <LessonLayout
      lessonId={lessonId}
      lessonTitle="MAHAT - נושא 7.2: הבנת השיפוע ונקודת החיתוך"
      nextLessonPath={nextLessonPath}
    >
      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">הבנת השיפוע ונקודת החיתוך</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">מבוא לשיעור</h3>
          <p className="text-gray-700 leading-relaxed">
            בשיעור הקודם הכרנו את המשוואה y = ax + b. שני הפרמטרים a ו-b הם המפתח להבנת "האישיות" של כל קו ישר. 
            בשיעור זה נצלול לעומק ונבין מה כל אחד מהם אומר לנו על הגרף, וכיצד נוכל להשתמש בהם כדי להשוות ולזהות 
            ישרים שונים מבלי לפתור משוואות.
          </p>
        </div>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>להבין את משמעות השיפוע a ואת משמעות המספר החופשי b</strong></li>
            <li><strong>לזהות ישרים על פי ניתוח a ו-b בלבד</strong></li>
            <li><strong>להבין קשרים בין ישרים: מקביל וניצב</strong></li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: תכונות השיפוע a</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">השיפוע קובע שני דברים מרכזיים:</h4>
            
            <div className="space-y-4">
              <div className="border-r-4 border-blue-300 pr-4">
                <h5 className="font-semibold text-blue-700">כיוון הישר:</h5>
                <p>• אם a &gt; 0 (חיובי) - הישר עולה משמאל לימין</p>
                <p>• אם a &lt; 0 (שלילי) - הישר יורד משמאל לימין</p>
                <p>• אם a = 0 - הישר אופקי (קו ישר לכיוון ציר X)</p>
              </div>
              
              <div className="border-r-4 border-green-300 pr-4">
                <h5 className="font-semibold text-green-700">תלילות הישר:</h5>
                <p>ככל שהערך המוחלט של a גדול יותר, הישר תלול יותר.</p>
                <p>• |a| = 0.5 → ישר מתון</p>
                <p>• |a| = 2 → ישר תלול</p>
                <p>• |a| = 10 → ישר תלול מאוד</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: תכונות המספר החופשי b</h3>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">המספר החופשי b קובע את מיקום נקודת החיתוך של הישר עם ציר ה-Y:</h4>
            
            <div className="space-y-3">
              <p>• אם b &gt; 0, החיתוך מעל ראשית הצירים</p>
              <p>• אם b &lt; 0, החיתוך מתחת לראשית הצירים</p>
              <p>• אם b = 0, הישר עובר דרך ראשית הצירים</p>
            </div>
            
            <div className="bg-white p-3 rounded border mt-3">
              <p><strong>דוגמה:</strong></p>
              <p>• y = 2x + 3: הישר חותך את ציר Y בנקודה (0, 3)</p>
              <p>• y = -x - 2: הישר חותך את ציר Y בנקודה (0, -2)</p>
              <p>• y = 5x: הישר עובר דרך ראשית הצירים (0, 0)</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 3: זיהוי שני ישרים</h3>
          
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">אסטרטגיית זיהוי:</h4>
            
            <ol className="list-decimal list-inside space-y-2 mr-4">
              <li><strong>בדוק את השיפועים (a):</strong> זהה מי עולה ומי יורד. אם שניהם באותו כיוון, זהה מי תלול יותר.</li>
              <li><strong>בדוק את נקודות החיתוך (b):</strong> זהה מי חותך את ציר ה-Y גבוה יותר.</li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 4: ישרים מקבילים וישרים ניצבים</h3>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <div className="space-y-4">
              <div className="border-r-4 border-purple-300 pr-4">
                <h4 className="font-semibold text-purple-700">ישרים מקבילים:</h4>
                <p>שני ישרים הם מקבילים אם ורק אם יש להם בדיוק את אותו השיפוע.</p>
                <FormulaBox>{"התנאי: a_1 = a_2"}</FormulaBox>
                <p><strong>דוגמה:</strong> y = 3x + 1 ו-y = 3x - 5 הם מקבילים</p>
              </div>
              
              <div className="border-r-4 border-orange-300 pr-4">
                <h4 className="font-semibold text-orange-700">ישרים ניצבים (מאונכים):</h4>
                <p>שני ישרים הם ניצבים אם ורק אם מכפלת השיפועים שלהם היא -1.</p>
                <FormulaBox>{"התנאי: a_1 \\times a_2 = -1"}</FormulaBox>
                <p>השיפועים "הופכיים ונגדיים".</p>
                <p><strong>דוגמה:</strong> y = 2x + 1 ו-y = -½x + 3 הם ניצבים (כי 2 × (-½) = -1)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">תרגול מעשי</h3>
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <Exercise key={exercise.id} {...exercise} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">נקודות מפתח לזכירה:</h4>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>השיפוע a:</strong> קובע כיוון (עולה/יורד) ותלילות הישר</li>
              <li><strong>המספר החופשי b:</strong> קובע את נקודת החיתוך עם ציר Y</li>
              <li><strong>ישרים מקבילים:</strong> שיפועים שווים (a₁ = a₂)</li>
              <li><strong>ישרים ניצבים:</strong> מכפלת השיפועים = -1 (a₁ × a₂ = -1)</li>
              <li><strong>התלילות:</strong> נקבעת על ידי הערך המוחלט של השיפוע</li>
            </ul>
          </div>
        </section>

        <Quiz 
          questions={quizQuestions} 
          lessonId={lessonId}
          title="בחן את עצמך - השיפוע ונקודת החיתוך"
        />
      </div>
    </LessonLayout>
  );
};

export default Mahat72SlopeParallel;
