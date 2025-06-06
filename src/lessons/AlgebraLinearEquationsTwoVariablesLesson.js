import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const AlgebraLinearEquationsTwoVariablesLesson = () => {
  const SystemOfEquations = ({ children }) => (
    <div className="my-4 text-center">
      <FormulaBox>{children}</FormulaBox>
    </div>
  );

  const checkSystemAnswer = (userAnswer, correctAnswer) => {
    // Normalize answers by removing parentheses and spaces
    const normalize = (answer) => answer.replace(/[()]/g, '').replace(/\s+/g, '').trim();
    return normalize(userAnswer) === normalize(correctAnswer);
  };

  return (
    <LessonLayout 
      title="מערכת משוואות ממעלה ראשונה עם שני נעלמים" 
      lessonId="35182-algebra-linear-equations-two-variables"
      nextLessonPath="/lessons/algebra-quadratic-equations"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            מערכת משוואות ממעלה ראשונה עם שני נעלמים (בדרך כלל <FormulaBox inline>x</FormulaBox> ו-<FormulaBox inline>y</FormulaBox>) 
            היא אוסף של שתי משוואות או יותר שצריכות להתקיים בו זמנית. אנו נתמקד במערכת של שתי משוואות.
          </p>
          
          <p>הצורה הכללית של מערכת כזו היא:</p>
          
          <SystemOfEquations>
            \begin{"{"}cases{"}"} 
            a_1x + b_1y = c_1 \\ 
            a_2x + b_2y = c_2 
            \end{"{"}cases{"}"}
          </SystemOfEquations>
          
          <p>
            כאשר <FormulaBox inline>a_1, b_1, c_1, a_2, b_2, c_2</FormulaBox> הם מספרים ידועים. 
            פתרון המערכת הוא זוג סדור <FormulaBox inline>(x,y)</FormulaBox> שמקיים את שתי המשוואות.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">שיטות פתרון:</h3>
          <p>ישנן שתי שיטות עיקריות לפתרון מערכות כאלה:</p>

          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">1. שיטת ההצבה</h4>
            <ol className="list-decimal list-inside space-y-2 pr-5">
              <li>מבודדים את אחד הנעלמים (למשל, <FormulaBox inline>y</FormulaBox>) באחת המשוואות.</li>
              <li>מציבים את הביטוי שקיבלנו עבור הנעלם המבודד במשוואה השנייה.</li>
              <li>פותרים את המשוואה שהתקבלה (שהיא כעת משוואה עם נעלם אחד).</li>
              <li>מציבים את הפתרון שקיבלנו באחת המשוואות המקוריות (או בביטוי של הנעלם המבודד) כדי למצוא את ערכו של הנעלם השני.</li>
            </ol>
          </div>

          <div className="bg-green-50 border-r-4 border-green-400 p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">2. שיטת השוואת מקדמים (או חיבור/חיסור משוואות)</h4>
            <ol className="list-decimal list-inside space-y-2 pr-5">
              <li>אם יש צורך, כופלים את אחת המשוואות (או את שתיהן) במספר כך שהמקדם של אחד הנעלמים יהיה שווה בערכו המוחלט אך הפוך בסימנו (או שווה בסימנו) בשתי המשוואות.</li>
              <li>מחברים (אם הסימנים הפוכים) או מחסרים (אם הסימנים שווים) את המשוואות זו מזו. כתוצאה מכך, אחד הנעלמים "מתבטל".</li>
              <li>פותרים את המשוואה שהתקבלה (עם נעלם אחד).</li>
              <li>מציבים את הפתרון שקיבלנו באחת המשוואות המקוריות כדי למצוא את ערכו של הנעלם השני.</li>
            </ol>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה (מבוססת על בעיה מילולית מחומר הבחינה):</h4>
            <p className="font-medium">שאלה: לגיל יש פי 2 יותר עפרונות מאשר לרון. לשניהם יחד יש 21 עפרונות. כמה עפרונות יש לכל אחד?</p>
            
            <p className="mt-2">נסמן: <FormulaBox inline>g</FormulaBox> - מספר העפרונות של גיל, <FormulaBox inline>r</FormulaBox> - מספר העפרונות של רון.</p>
            <p>המשוואות המתקבלות הן:</p>
            
            <SystemOfEquations>
              \begin{"{"}cases{"}"} 
              g = 2r \\ 
              g + r = 21 
              \end{"{"}cases{"}"}
            </SystemOfEquations>

            <p className="mt-2"><strong>פתרון בשיטת ההצבה:</strong></p>
            <div className="space-y-2 mt-2">
              <p>1. המשוואה הראשונה כבר מציגה את <FormulaBox inline>g</FormulaBox> מבודד: <FormulaBox inline>g = 2r</FormulaBox>.</p>
              <p>2. נציב את <FormulaBox inline>2r</FormulaBox> במקום <FormulaBox inline>g</FormulaBox> במשוואה השנייה: <FormulaBox inline>(2r) + r = 21</FormulaBox>.</p>
              <p>3. נפתור את המשוואה שהתקבלה: <FormulaBox inline>3r = 21 \Rightarrow r = \frac{21}{3} \Rightarrow r = 7</FormulaBox>.</p>
              <p>4. נציב <FormulaBox inline>r=7</FormulaBox> במשוואה הראשונה: <FormulaBox inline>g = 2 \cdot 7 \Rightarrow g = 14</FormulaBox>.</p>
            </div>
            
            <p className="mt-2">
              לכן, לרון יש 7 עפרונות ולגיל יש 14 עפרונות. הפתרון הוא <FormulaBox inline>(g,r) = (14,7)</FormulaBox> 
              (או <FormulaBox inline>(x,y) = (14,7)</FormulaBox> אם היינו מסמנים ב-x ו-y).
            </p>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        
        <div className="space-y-8">
          <Exercise
            question={
              <div>
                <p>תרגיל 1: פתור את מערכת המשוואות הבאה:</p>
                <SystemOfEquations>
                  \begin{"{"}cases{"}"} 
                  x + y = 10 \\ 
                  x - y = 4 
                  \end{"{"}cases{"}"}
                </SystemOfEquations>
                <p>רשום את הפתרון כזוג סדור (x,y), למשל: (7,3).</p>
              </div>
            }
            answer="(7,3)"
            type="text"
            checkCustom={(userAnswer) => checkSystemAnswer(userAnswer, "7,3")}
            solution={
              <div>
                <p><strong>פתרון מלא (בשיטת חיבור משוואות):</strong></p>
                <p>נחבר את שתי המשוואות:</p>
                <FormulaBox>(x+y) + (x-y) = 10 + 4</FormulaBox>
                <FormulaBox>2x = 14 \Rightarrow x = 7</FormulaBox>
                <p>נציב <FormulaBox inline>x=7</FormulaBox> במשוואה הראשונה: <FormulaBox inline>7 + y = 10 \Rightarrow y = 3</FormulaBox>.</p>
                <p>הפתרון הוא: <FormulaBox inline>(7,3)</FormulaBox>.</p>
              </div>
            }
          />

          <Exercise
            question={
              <div>
                <p>תרגיל 2: פתור את מערכת המשוואות הבאה:</p>
                <SystemOfEquations>
                  \begin{"{"}cases{"}"} 
                  2x + 3y = 12 \\ 
                  x - y = 1 
                  \end{"{"}cases{"}"}
                </SystemOfEquations>
                <p>רשום את הפתרון כזוג סדור (x,y).</p>
              </div>
            }
            answer="(3,2)"
            type="text"
            checkCustom={(userAnswer) => checkSystemAnswer(userAnswer, "3,2")}
            solution={
              <div>
                <p><strong>פתרון מלא (בשיטת ההצבה):</strong></p>
                <p>מהמשוואה השנייה נבודד את <FormulaBox inline>x</FormulaBox>: <FormulaBox inline>x = y + 1</FormulaBox>.</p>
                <p>נציב זאת במשוואה הראשונה: <FormulaBox inline>2(y+1) + 3y = 12</FormulaBox>.</p>
                <FormulaBox>2y + 2 + 3y = 12</FormulaBox>
                <FormulaBox>5y + 2 = 12 \Rightarrow 5y = 10 \Rightarrow y = 2</FormulaBox>
                <p>נציב <FormulaBox inline>y=2</FormulaBox> בביטוי שבודדנו: <FormulaBox inline>x = 2 + 1 = 3</FormulaBox>.</p>
                <p>הפתרון הוא: <FormulaBox inline>(3,2)</FormulaBox>.</p>
              </div>
            }
          />
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz
        title="בחן את עצמך 🧐"
        questions={[
          {
            id: 1,
            question: (
              <div>
                <p>מהו ערך <FormulaBox inline>x</FormulaBox> בפתרון מערכת המשוואות הבאה?</p>
                <SystemOfEquations>
                  \begin{"{"}cases{"}"} 
                  x + y = 5 \\ 
                  x - y = 1 
                  \end{"{"}cases{"}"}
                </SystemOfEquations>
              </div>
            ),
            options: [
              { value: "a", label: "1" },
              { value: "b", label: "2" },
              { value: "c", label: "3" },
              { value: "d", label: "4" }
            ],
            correctAnswer: "c",
            explanation: "חיבור המשוואות: (x+y) + (x-y) = 5 + 1 ⟹ 2x = 6 ⟹ x = 3"
          },
          {
            id: 2,
            question: (
              <div>
                <p>מהו ערך <FormulaBox inline>y</FormulaBox> בפתרון מערכת המשוואות הבאה?</p>
                <SystemOfEquations>
                  \begin{"{"}cases{"}"} 
                  y = 2x \\ 
                  x + y = 9 
                  \end{"{"}cases{"}"}
                </SystemOfEquations>
              </div>
            ),
            options: [
              { value: "a", label: "2" },
              { value: "b", label: "3" },
              { value: "c", label: "6" },
              { value: "d", label: "9" }
            ],
            correctAnswer: "c",
            explanation: "הצבה: x + 2x = 9 ⟹ 3x = 9 ⟹ x = 3. אז y = 2 × 3 = 6"
          }
        ]}        />
    </LessonLayout>
  );
};

export default AlgebraLinearEquationsTwoVariablesLesson;
