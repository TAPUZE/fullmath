import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';
import StepByStepSolution from '../../components/math/StepByStepSolution';

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

  const exercises = [
    {
      id: 'ex1',
      question: (
        <div>
          <p>תרגיל 1: פתור את מערכת המשוואות הבאה:</p>
          <SystemOfEquations>
            {"\\begin{cases}"} 
            x + y = 10 \\ 
            x - y = 4 
            {"\\end{cases}"}
          </SystemOfEquations>
          <p>רשום את הפתרון כזוג סדור (x,y), למשל: (7,3).</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        placeholder: 'הכנס זוג סדור (x,y)',
        type: 'text'
      }],
      correctAnswers: {
        answer: "(7,3)"
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא (בשיטת חיבור משוואות):"
          steps={[
            { step: "1. נחבר את שתי המשוואות:", formula: "(x+y) + (x-y) = 10 + 4" },
            { step: "2. נפשט:", formula: "2x = 14" },
            { step: "3. נחלק ב-2:", formula: "x = 7" },
            { step: "4. נציב x=7 במשוואה הראשונה:", formula: "7 + y = 10" },
            { step: "5. נפתור:", formula: "y = 3" },
            { step: "6. נכתוב את התשובה:", formula: "(7,3)", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: (
        <div>
          <p>תרגיל 2: פתור את מערכת המשוואות הבאה:</p>
          <SystemOfEquations>
            {"\\begin{cases}"} 
            2x + 3y = 12 \\ 
            x - y = 1 
            {"\\end{cases}"}
          </SystemOfEquations>
          <p>רשום את הפתרון כזוג סדור (x,y).</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        placeholder: 'הכנס זוג סדור (x,y)',
        type: 'text'
      }],
      correctAnswers: {
        answer: "(3,2)"
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא (בשיטת ההצבה):"
          steps={[
            { step: "1. נבודד את x מהמשוואה השנייה:", formula: "x = y + 1" },
            { step: "2. נציב במשוואה הראשונה:", formula: "2(y+1) + 3y = 12" },
            { step: "3. נפתח סוגריים:", formula: "2y + 2 + 3y = 12" },
            { step: "4. נכנס איברים:", formula: "5y + 2 = 12" },
            { step: "5. נפתור:", formula: "5y = 10 \\Rightarrow y = 2" },
            { step: "6. נציב y=2 בביטוי של x:", formula: "x = 2 + 1 = 3" },
            { step: "7. נכתוב את התשובה:", formula: "(3,2)", highlight: true }
          ]}
        />
      )
    },
    {
      id: 'ex3',
      question: (
        <div>
          <p>תרגיל 3: פתור את מערכת המשוואות הבאה:</p>
          <SystemOfEquations>
            {"\\begin{cases}"} 
            3x - 2y = 4 \\ 
            2x + y = 8 
            {"\\end{cases}"}
          </SystemOfEquations>
          <p>רשום את הפתרון כזוג סדור (x,y).</p>
        </div>
      ),
      inputs: [{
        id: 'answer',
        label: 'תשובה',
        placeholder: 'הכנס זוג סדור (x,y)',
        type: 'text'
      }],
      correctAnswers: {
        answer: "(4,4)"
      },
      solution: (
        <StepByStepSolution
          title="פתרון מלא (בשיטת השוואת מקדמים):"
          steps={[
            { step: "1. נכפיל את המשוואה השנייה ב-2:", formula: "4x + 2y = 16" },
            { step: "2. נחבר למשוואה הראשונה:", formula: "(3x-2y) + (4x+2y) = 4 + 16" },
            { step: "3. נפשט:", formula: "7x = 20" },
            { step: "4. נפתור:", formula: "x = 4" },
            { step: "5. נציב x=4 במשוואה השנייה:", formula: "2(4) + y = 8" },
            { step: "6. נפתור:", formula: "8 + y = 8 \\Rightarrow y = 4" },
            { step: "7. נכתוב את התשובה:", formula: "(4,4)", highlight: true }
          ]}
        />
      )
    }
  ];

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
            {"\\begin{cases}"} 
            a_1x + b_1y = c_1 \\ 
            a_2x + b_2y = c_2 
            {"\\end{cases}"}
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
              {"\\begin{cases}"} 
              g = 2r \\ 
              g + r = 21 
              {"\\end{cases}"}
            </SystemOfEquations>

            <StepByStepSolution
              title="פתרון מלא (בשיטת ההצבה):"
              steps={[
                { step: "1. המשוואה הראשונה כבר מציגה את g מבודד:", formula: "g = 2r" },
                { step: "2. נציב את 2r במקום g במשוואה השנייה:", formula: "(2r) + r = 21" },
                { step: "3. נפשט:", formula: "3r = 21" },
                { step: "4. נפתור:", formula: "r = \\frac{21}{3} = 7" },
                { step: "5. נציב r=7 במשוואה הראשונה:", formula: "g = 2 \\cdot 7 = 14" },
                { step: "6. נכתוב את התשובה:", formula: "(g,r) = (14,7)", highlight: true }
              ]}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">טיפים חשובים:</h4>
            <ul className="list-disc list-inside space-y-2 pr-5">
              <li>בחר את שיטת הפתרון המתאימה ביותר למערכת הנתונה.</li>
              <li>בדוק תמיד את הפתרון על ידי הצבה בשתי המשוואות המקוריות.</li>
              <li>בבעיות מילוליות, חשוב להגדיר היטב את המשתנים ולכתוב את המשוואות בצורה נכונה.</li>
              <li>כאשר משתמשים בשיטת השוואת מקדמים, כדאי לבחור את הנעלם שהמקדמים שלו קלים יותר להשוואה.</li>
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
              checkCustom={(userAnswers) => {
                const answers = Object.values(userAnswers);
                const correctAnswers = Object.values(exercise.correctAnswers);
                return answers.every((userAnswer, index) => checkSystemAnswer(userAnswer, correctAnswers[index]));
              }}
              solution={exercise.solution}
              lessonId="algebra-linear-equations-two-variables"
            />
          ))}
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
                  {"\\begin{cases}"} 
                  x + y = 5 \\ 
                  x - y = 1 
                  {"\\end{cases}"}
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
                  {"\\begin{cases}"} 
                  y = 2x \\ 
                  x + y = 9 
                  {"\\end{cases}"}
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
        ]}
      />
    </LessonLayout>
  );
};

export default AlgebraLinearEquationsTwoVariablesLesson;
