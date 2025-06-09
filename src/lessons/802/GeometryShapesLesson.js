import React, { useState } from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import FormulaBox from '../../components/math/FormulaBox';

const GeometryShapesLesson = () => {
  const lessonId = 'geometry-shapes';
  const nextLessonPath = '/lessons/geometry-shapes-properties';
  const [selectedShape, setSelectedShape] = useState(null);

  const shapeVisuals = {
    triangle_general: {
      name: "משולש כללי",
      svg: (
        <svg className="sketch-svg" viewBox="0 0 100 100">
          <polygon points="50,10 10,90 90,90" />
          <text x="50" y="8">A</text>
          <text x="5" y="95">B</text>
          <text x="95" y="95">C</text>
          <text x="50" y="95" className="side-label">a</text>
          <text x="73" y="55" className="side-label" transform="rotate(56 70 50)">b</text>
          <text x="27" y="55" className="side-label" transform="rotate(-56 30 50)">c</text>
        </svg>
      )
    },
    triangle_isosceles: {
      name: "משולש שווה-שוקיים",
      svg: (
        <svg className="sketch-svg" viewBox="0 0 100 100">
          <polygon points="50,10 10,90 90,90" />
          <text x="50" y="8">A</text>
          <text x="5" y="95">B</text>
          <text x="95" y="95">C</text>
          <text x="50" y="95" className="side-label">a</text>
          <text x="27" y="55" className="side-label" transform="rotate(-56 30 50)">b</text>
          <text x="73" y="55" className="side-label" transform="rotate(56 70 50)">b</text>
          <line x1="28" y1="50" x2="32" y2="45" className="tick" transform="rotate(-56 30 50)" />
          <line x1="72" y1="50" x2="68" y2="45" className="tick" transform="rotate(56 70 50)" />
          <path d="M 15 90 A 15 15 0 0 1 25 80" className="angle-arc" />
          <path d="M 85 90 A 15 15 0 0 0 75 80" className="angle-arc" />
        </svg>
      )
    },
    triangle_right: {
      name: "משולש ישר-זווית",
      svg: (
        <svg className="sketch-svg" viewBox="0 0 100 100">
          <polygon points="10,10 10,90 90,90" />
          <text x="5" y="10">A</text>
          <text x="5" y="95">C</text>
          <text x="95" y="95">B</text>
          <text x="10" y="50" className="side-label" transform="rotate(-90 10 50)">a</text>
          <text x="50" y="95" className="side-label">b</text>
          <text x="55" y="45" className="side-label" transform="rotate(-45 50 50)">c</text>
          <polyline points="10,80 20,80 20,90" className="right-angle" />
        </svg>
      )
    },
    parallelogram: {
      name: "מקבילית",
      svg: (
        <svg className="sketch-svg" viewBox="0 0 100 100">
          <polygon points="20,20 80,20 70,80 10,80" />
          <text x="18" y="18">A</text>
          <text x="82" y="18">B</text>
          <text x="72" y="85">C</text>
          <text x="8" y="85">D</text>
        </svg>
      )
    },
    rectangle: {
      name: "מלבן",
      svg: (
        <svg className="sketch-svg" viewBox="0 0 100 100">
          <rect x="10" y="20" width="80" height="60" />
          <text x="8" y="18">A</text>
          <text x="92" y="18">B</text>
          <text x="92" y="85">C</text>
          <text x="8" y="85">D</text>
          <polyline points="10,28 18,28 18,20" className="right-angle" />
        </svg>
      )
    }
  };

  const exercises = [
    {
      id: 'ex1',
      question: (
        <>
          במשולש ישר-זווית ABC (<FormulaBox dir="ltr">\(\angle C=90^\circ\)</FormulaBox>), 
          אורכי הניצבים הם <FormulaBox dir="ltr">\(AC=3\)</FormulaBox> ס"מ ו-<FormulaBox dir="ltr">\(BC=4\)</FormulaBox> ס"מ. 
          מהו אורך היתר AB?
        </>
      ),
      correctAnswer: '5',
      placeholder: 'הכנס אורך היתר (בספרות בלבד)',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>לפי משפט פיתגורס: <FormulaBox dir="ltr">\(AC^2 + BC^2 = AB^2\)</FormulaBox>.</p>
          <p><FormulaBox dir="ltr">\(3^2 + 4^2 = AB^2 \Rightarrow 9 + 16 = AB^2 \Rightarrow 25 = AB^2\)</FormulaBox></p>
          <p><FormulaBox dir="ltr">\(AB = \sqrt{25} = 5\)</FormulaBox>. אורך היתר AB הוא 5 ס"מ.</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: (
        <>
          במקבילית ABCD, זווית A היא <FormulaBox dir="ltr">\(70^\circ\)</FormulaBox>. מה גודלה של זווית B?
        </>
      ),
      correctAnswer: '110',
      placeholder: 'הכנס גודל זווית B (במעלות)',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>במקבילית, סכום כל שתי זוויות סמוכות הוא <FormulaBox dir="ltr">\(180^\circ\)</FormulaBox>.</p>
          <p><FormulaBox dir="ltr">\(\angle A + \angle B = 180^\circ \Rightarrow 70^\circ + \angle B = 180^\circ \Rightarrow \angle B = 110^\circ\)</FormulaBox>.</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: (
        <>
          במשולש שווה-שוקיים, זווית הראש היא <FormulaBox dir="ltr">\(80^\circ\)</FormulaBox>. 
          מה גודלה של כל אחת מזוויות הבסיס?
        </>
      ),
      options: [
        { value: 'a', label: <FormulaBox dir="ltr">\(40^\circ\)</FormulaBox> },
        { value: 'b', label: <FormulaBox dir="ltr">\(50^\circ\)</FormulaBox> },
        { value: 'c', label: <FormulaBox dir="ltr">\(60^\circ\)</FormulaBox> },
        { value: 'd', label: <FormulaBox dir="ltr">\(100^\circ\)</FormulaBox> }
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

  const handleShapeSelect = (shapeKey) => {
    setSelectedShape(shapeKey);
  };
  return (    <LessonLayout 
      title="צורות גיאומטריות - שאלון 35381"
      lessonId={lessonId}
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">
          לומדים 📚
        </h2>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="mb-4">
            בשיעור זה נסקור את התכונות המרכזיות של משולשים ומרובעים שונים. 
            שימו לב לסימונים בסקיצות המצורפות לכל צורה, הם יעזרו לכם להבין את התכונות.
          </p>
          
          <h3 className="text-2xl font-semibold text-green-600 mb-3">משולשים</h3>
          
          <div className="shape-card">
            <h4 className="text-xl font-semibold mb-2">משולש כללי</h4>
            <div className="sketch-container">
              {shapeVisuals.triangle_general.svg}
            </div>
            <ul className="property-list space-y-1">
              <li>סכום הזוויות הפנימיות: <FormulaBox dir="ltr">\(180^\circ\)</FormulaBox>.</li>
              <li>אורך כל צלע קטן מסכום שתי הצלעות האחרות (אי-שוויון המשולש).</li>
              <li>הזווית הגדולה ביותר מול הצלע הארוכה ביותר.</li>
            </ul>
          </div>

          <div className="shape-card">
            <h4 className="text-xl font-semibold mb-2">משולש שווה-שוקיים</h4>
            <div className="sketch-container">
              {shapeVisuals.triangle_isosceles.svg}
            </div>
            <ul className="property-list space-y-1">
              <li>שתי צלעות שוות (השוקיים) b = b.</li>
              <li>זוויות הבסיס שוות.</li>
              <li>הגובה מהראש לבסיס הוא גם חוצה זווית וגם חוצה הצלע.</li>
            </ul>
          </div>

          <div className="shape-card">
            <h4 className="text-xl font-semibold mb-2">משולש ישר-זווית</h4>
            <div className="sketch-container">
              {shapeVisuals.triangle_right.svg}
            </div>
            <ul className="property-list space-y-1">
              <li>זווית אחת של <FormulaBox dir="ltr">\(90^\circ\)</FormulaBox> (זווית ישרה).</li>
              <li>משפט פיתגורס: <FormulaBox dir="ltr">\(a^2 + b^2 = c^2\)</FormulaBox> (c היא היתר).</li>
              <li>סכום שתי הזוויות החדות: <FormulaBox dir="ltr">\(90^\circ\)</FormulaBox>.</li>
            </ul>
          </div>

          <hr className="my-8 border-gray-300"/>
          
          <h3 className="text-2xl font-semibold text-green-600 mb-3">מרובעים (ABCD)</h3>
          
          <div className="shape-card">
            <h4 className="text-xl font-semibold mb-2">מקבילית</h4>
            <div className="sketch-container">
              {shapeVisuals.parallelogram.svg}
            </div>
            <ul className="property-list space-y-1">
              <li>צלעות נגדיות מקבילות (AB || DC, AD || BC) ושוות (AB = DC, AD = BC).</li>
              <li>זוויות נגדיות שוות (<FormulaBox dir="ltr">\(\angle A = \angle C, \angle B = \angle D\)</FormulaBox>).</li>
              <li>סכום זוויות סמוכות <FormulaBox dir="ltr">\(180^\circ\)</FormulaBox>.</li>
              <li>אלכסונים חוצים זה את זה.</li>
            </ul>
          </div>

          <div className="shape-card">
            <h4 className="text-xl font-semibold mb-2">מלבן</h4>
            <div className="sketch-container">
              {shapeVisuals.rectangle.svg}
            </div>
            <ul className="property-list space-y-1">
              <li>כל תכונות המקבילית.</li>
              <li>כל הזוויות ישרות (<FormulaBox dir="ltr">\(90^\circ\)</FormulaBox>).</li>
              <li>אלכסונים שווים באורכם.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
          מתרגלים ✍️
        </h2>
        
        <div className="mb-6">
          <h5 className="mb-3">בחר/י צורה להצגה כעזר חזותי:</h5>
          <div className="practice-shape-buttons flex flex-wrap justify-center gap-2 mb-4">
            {Object.entries(shapeVisuals).map(([key, shape]) => (
              <button
                key={key}
                onClick={() => handleShapeSelect(key)}
                className={`py-2 px-4 rounded-md transition duration-150 ease-in-out ${
                  selectedShape === key 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                }`}
              >
                {shape.name}
              </button>
            ))}
          </div>
          
          <div className="text-center">
            {selectedShape ? (
              <div className="inline-block">
                {shapeVisuals[selectedShape].svg}
              </div>
            ) : (
              <p className="text-gray-500">סקיצה של הצורה הנבחרת תופיע כאן.</p>
            )}
          </div>
        </div>        <div className="space-y-8">          {exercises.map((exercise) => (
            <InteractiveExercise
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              correctAnswer={exercise.correctAnswer}
              placeholder={exercise.placeholder}
              solution={exercise.solution}
              lessonId={lessonId}
            />
          ))}
        </div>
      </section>      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
          בחן את עצמך 🧐
        </h2>
        <Quiz questions={quizQuestions} lessonId={lessonId} />
      </section>
    </LessonLayout>
  );
};

export default GeometryShapesLesson;
