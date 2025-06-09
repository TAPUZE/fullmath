import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import Quiz from '../../components/math/Quiz';
import { ShapeCard, ShapeVisual, useShapeSelector } from '../../components/ui/ShapeComponents';

const GeometryAreaPerimeterLesson = () => {
  const { ShapeSelectorComponent } = useShapeSelector('triangle');

  const checkAreaPerimeterAnswer = (answers, correctAnswers) => {
    const results = [];
    let allCorrect = true;

    if (correctAnswers.perimeter !== undefined) {
      const userPerimeter = parseFloat(answers.perimeter) || 0;
      const correctPerimeter = parseFloat(correctAnswers.perimeter);
      if (Math.abs(userPerimeter - correctPerimeter) < 0.01) {
        results.push("היקף: נכון 👍");
      } else {
        results.push(`היקף: שגוי (תשובה: ${answers.perimeter}, נכון: ${correctAnswers.perimeter}) 🤔`);
        allCorrect = false;
      }
    }

    if (correctAnswers.circumference !== undefined) {
      const userCircumference = parseFloat(answers.circumference) || 0;
      const correctCircumference = parseFloat(correctAnswers.circumference);
      if (Math.abs(userCircumference - correctCircumference) < 0.01) {
        results.push("היקף: נכון 👍");
      } else {
        results.push(`היקף: שגוי (תשובה: ${answers.circumference}, נכון: ${correctAnswers.circumference}) 🤔`);
        allCorrect = false;
      }
    }

    if (correctAnswers.area !== undefined) {
      const userArea = parseFloat(answers.area) || 0;
      const correctArea = parseFloat(correctAnswers.area);
      if (Math.abs(userArea - correctArea) < 0.01) {
        results.push("שטח: נכון 👍");
      } else {
        results.push(`שטח: שגוי (תשובה: ${answers.area}, נכון: ${correctAnswers.area}) 🤔`);
        allCorrect = false;
      }
    }

    return {
      message: results.join('<br>'),
      isCorrect: allCorrect
    };
  };

  return (
    <LessonLayout 
      title="שטח והיקף של צורות גיאומטריות" 
      lessonId="35182-geometry-area-perimeter"
      nextLessonPath="/lessons/analytic-geometry-points"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="mb-4">
            בשיעור זה נלמד לחשב היקף ושטח של צורות גיאומטריות נפוצות. 
            היקף הוא אורך המסגרת של הצורה, ושטח הוא המידה של המישור הכלוא בתוך הצורה.
          </p>
          
          <ShapeCard 
            title="משולש"
            formulas={[
              {
                label: "היקף (P)",
                description: <>סכום אורכי שלוש הצלעות. <FormulaBox inline>{`P = a+b+c`}</FormulaBox></>
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

          <ShapeCard 
            title="מלבן"
            formulas={[
              {
                label: "היקף (P)",
                description: <><FormulaBox inline>{`P = 2(a+b)`}</FormulaBox> (כאשר <FormulaBox inline>{`a,b`}</FormulaBox> אורכי הצלעות הסמוכות).</>
              },
              {
                label: "שטח (S)",
                description: <><FormulaBox inline>{`S = a \\cdot b`}</FormulaBox>.</>
              }
            ]}
          >
            <ShapeVisual shape="rectangle" />
          </ShapeCard>

          <ShapeCard 
            title="ריבוע"
            formulas={[
              {
                label: "היקף (P)",
                description: <><FormulaBox inline>{`P = 4a`}</FormulaBox> (כאשר <FormulaBox inline>{`a`}</FormulaBox> אורך הצלע).</>
              },
              {
                label: "שטח (S)",
                description: <><FormulaBox inline>{`S = a^2`}</FormulaBox>.</>
              }
            ]}
          >
            <ShapeVisual shape="square" />
          </ShapeCard>

          <ShapeCard 
            title="מעגל"
            formulas={[
              {
                label: "היקף (P)",
                description: <><FormulaBox inline>{`P = 2\\pi R`}</FormulaBox> (כאשר <FormulaBox inline>{`R`}</FormulaBox> הוא רדיוס המעגל).</>
              },
              {
                label: "שטח (S)",
                description: <><FormulaBox inline>{`S = \\pi R^2`}</FormulaBox>.</>
              },
              {
                label: "הערה",
                description: <>הערך של <FormulaBox inline>{`\\pi`}</FormulaBox> (פאי) הוא בקירוב 3.14.</>
              }
            ]}
          >
            <ShapeVisual shape="circle" />
          </ShapeCard>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה (שטח והיקף מלבן):</h4>
            <p className="font-medium">שאלה: מלבן שאורכי צלעותיו הם 4 ס"מ ו-6 ס"מ. חשב את שטחו והיקפו.</p>
            <p className="mt-2"><strong>פתרון:</strong></p>
            <p>נתון: <FormulaBox inline>{`a=6`}</FormulaBox> ס"מ, <FormulaBox inline>{`b=4`}</FormulaBox> ס"מ.</p>
            <p>היקף המלבן: <FormulaBox inline>{`P = 2(a+b) = 2(6+4) = 2 \\cdot 10 = 20`}</FormulaBox> ס"מ.</p>
            <p>שטח המלבן: <FormulaBox inline>{`S = a \\cdot b = 6 \\cdot 4 = 24`}</FormulaBox> סמ"ר.</p>
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
          <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
            <p className="font-medium mb-4">תרגיל 1: אורך צלעו של ריבוע הוא 7 ס"מ. מהו היקפו ומהו שטחו?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">היקף (ס"מ):</label>
                <input 
                  type="number" 
                  id="ex1-perimeter"
                  className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="הכנס היקף"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">שטח (סמ"ר):</label>
                <input 
                  type="number" 
                  id="ex1-area"
                  className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="הכנס שטח"
                />
              </div>
            </div>
            <div className="mt-4 space-x-2">
              <button 
                onClick={() => {
                  const perimeter = document.getElementById('ex1-perimeter').value;
                  const area = document.getElementById('ex1-area').value;
                  const result = checkAreaPerimeterAnswer(
                    { perimeter, area },
                    { perimeter: '28', area: '49' }
                  );
                  const feedbackEl = document.getElementById('feedback-ex1');
                  feedbackEl.innerHTML = result.message;
                  feedbackEl.className = `mt-3 p-3 rounded-md text-sm ${
                    result.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`;
                  feedbackEl.classList.remove('hidden');
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150"
              >
                בדוק תשובה
              </button>
              <button 
                onClick={() => {
                  const sol = document.getElementById('sol1');
                  sol.classList.toggle('hidden');
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150"
              >
                הצג פתרון
              </button>
            </div>
            <div id="feedback-ex1" className="hidden mt-3 p-3 rounded-md text-sm"></div>
            <div id="sol1" className="hidden mt-3 p-3 border-t border-gray-200 bg-white rounded-md">
              <p><strong>פתרון מלא:</strong></p>
              <p>היקף ריבוע: <FormulaBox inline>{`P = 4a = 4 \\cdot 7 = 28`}</FormulaBox> ס"מ.</p>
              <p>שטח ריבוע: <FormulaBox inline>S = a^2 = 7^2 = 49</FormulaBox> סמ"ר.</p>
            </div>
          </div>

          <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
            <p className="font-medium mb-4">תרגיל 2: רדיוס מעגל הוא 5 ס"מ. חשב את היקפו ואת שטחו (השתמש ב-<FormulaBox inline>\pi \approx 3.14</FormulaBox>).</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">היקף (ס"מ):</label>
                <input 
                  type="number" 
                  id="ex2-circumference"
                  step="0.1"
                  className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="הכנס היקף"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">שטח (סמ"ר):</label>
                <input 
                  type="number" 
                  id="ex2-area"
                  step="0.1"
                  className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="הכנס שטח"
                />
              </div>
            </div>
            <div className="mt-4 space-x-2">
              <button 
                onClick={() => {
                  const circumference = document.getElementById('ex2-circumference').value;
                  const area = document.getElementById('ex2-area').value;
                  const result = checkAreaPerimeterAnswer(
                    { circumference, area },
                    { circumference: '31.4', area: '78.5' }
                  );
                  const feedbackEl = document.getElementById('feedback-ex2');
                  feedbackEl.innerHTML = result.message;
                  feedbackEl.className = `mt-3 p-3 rounded-md text-sm ${
                    result.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`;
                  feedbackEl.classList.remove('hidden');
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150"
              >
                בדוק תשובה
              </button>
              <button 
                onClick={() => {
                  const sol = document.getElementById('sol2');
                  sol.classList.toggle('hidden');
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150"
              >
                הצג פתרון
              </button>
            </div>
            <div id="feedback-ex2" className="hidden mt-3 p-3 rounded-md text-sm"></div>
            <div id="sol2" className="hidden mt-3 p-3 border-t border-gray-200 bg-white rounded-md">
              <p><strong>פתרון מלא:</strong></p>
              <p>היקף מעגל: <FormulaBox inline>P = 2\pi R = 2 \cdot 3.14 \cdot 5 = 31.4</FormulaBox> ס"מ.</p>
              <p>שטח מעגל: <FormulaBox inline>S = \pi R^2 = 3.14 \cdot 5^2 = 3.14 \cdot 25 = 78.5</FormulaBox> סמ"ר.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz
        title="בחן את עצמך 🧐"
        questions={[
          {
            id: 1,
            question: "מהו שטח משולש שאורך בסיסו 10 ס״מ והגובה לבסיס זה הוא 6 ס״מ?",
            options: [
              { value: "a", label: "60 סמ\"ר" },
              { value: "b", label: "30 סמ\"ר" },
              { value: "c", label: "16 סמ\"ר" },
              { value: "d", label: "120 סמ\"ר" }
            ],
            correctAnswer: "b",
            explanation: "שטח משולש = (בסיס × גובה) ÷ 2 = (10 × 6) ÷ 2 = 30 סמ״ר"
          },
          {
            id: 2,
            question: "היקף מלבן הוא 30 ס״מ. אורך אחת מצלעותיו הוא 9 ס״מ. מה אורך הצלע הסמוכה לה?",
            options: [
              { value: "a", label: "21 ס״מ" },
              { value: "b", label: "12 ס״מ" },
              { value: "c", label: "6 ס״מ" },
              { value: "d", label: "15 ס״מ" }
            ],
            correctAnswer: "c",
            explanation: "היקף מלבן = 2(אורך + רוחב). אז 30 = 2(9 + רוחב) ⟹ 15 = 9 + רוחב ⟹ רוחב = 6 ס״מ"        }
        ]}
      />
    </LessonLayout>
  );
};

export default GeometryAreaPerimeterLesson;
