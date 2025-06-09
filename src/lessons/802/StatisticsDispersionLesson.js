import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';

const StatisticsDispersionLesson = () => {
  const title = "סטטיסטיקה (המשך) - מדדי פיזור";
  const lessonId = "35381_statistics_dispersion";
  const nextLessonPath = "/lessons/probability-tree-conditional";

  const exercises = [
    {
      id: 'ex1',
      question: 'ציוניהם של 4 תלמידים במבחן הם: 70, 75, 85, 90. חשב את סטיית התקן של הציונים. (עגל לשתי ספרות אחרי הנקודה)',
      correctAnswer: '7.91',
      tolerance: 0.01,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>1. ממוצע: <FormulaBox inline>{"\\bar{x} = \\frac{70+75+85+90}{4} = \\frac{320}{4} = 80"}</FormulaBox>.</p>
          <p>2. סטיות מהממוצע וריבועיהן:</p>
          <ul className="list-disc pr-4">
            <li><FormulaBox inline>(70-80)^2 = (-10)^2 = 100</FormulaBox></li>
            <li><FormulaBox inline>(75-80)^2 = (-5)^2 = 25</FormulaBox></li>
            <li><FormulaBox inline>(85-80)^2 = (5)^2 = 25</FormulaBox></li>
            <li><FormulaBox inline>(90-80)^2 = (10)^2 = 100</FormulaBox></li>
          </ul>
          <p>3. סכום ריבועי הסטיות: <FormulaBox inline>100+25+25+100 = 250</FormulaBox>.</p>
          <p>4. שונות: <FormulaBox inline>S^2 = \\frac{250}{4} = 62.5</FormulaBox>.</p>
          <p>5. סטיית תקן: <FormulaBox inline>{"S = \\sqrt{62.5} \\approx 7.90569"}</FormulaBox>.</p>
          <p>תשובה מעוגלת: 7.91.</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'אם כל הנתונים בקבוצה זהים (למשל, כל הציונים הם 80), מה תהיה סטיית התקן?',
      options: [
        { value: 'a', label: '0' },
        { value: 'b', label: '1' },
        { value: 'c', label: 'תלוי בערך הנתונים' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q2',
      question: 'קבוצת נתונים A: (10, 20, 30). קבוצת נתונים B: (10, 15, 20, 25, 30). לאיזו קבוצה צפויה להיות סטיית תקן גדולה יותר?',
      options: [
        { value: 'a', label: 'קבוצה A' },
        { value: 'b', label: 'קבוצה B' },
        { value: 'c', label: 'סטיות התקן יהיו זהות' }
      ],
      correctAnswer: 'a'
    }
  ];

  return (
    <LessonLayout title={title} lessonId={lessonId} nextLessonPath={nextLessonPath}>
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">לומדים 📚</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>בשיעורים קודמים למדנו על מדדי מרכז בסטטיסטיקה, כמו ממוצע, חציון ושכיח. מדדים אלו נותנים לנו מידע על "מרכז" הנתונים, אך אינם מספרים לנו עד כמה הנתונים מפוזרים או מרוכזים סביב המרכז.</p>
          <p>לשם כך, אנו משתמשים ב<strong>מדדי פיזור</strong>. מדדי פיזור מתארים את מידת השונות או ההטרוגניות של הנתונים. ככל שמדד הפיזור גדול יותר, כך הנתונים מפוזרים יותר. ככל שהוא קטן יותר, כך הנתונים מרוכזים יותר סביב הממוצע.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. טווח</h3>
          <p>הטווח הוא מדד הפיזור הפשוט ביותר. הוא מחושב כהפרש בין הערך הגבוה ביותר לערך הנמוך ביותר בקבוצת הנתונים.</p>
          <div className="my-2 text-center">
            <FormulaBox>{"\\text{Range} = \\text{Maximum Value} - \\text{Minimum Value}"}</FormulaBox>
          </div>
          <p>לדוגמה, אם ציוני תלמידים הם 70, 80, 85, 90, 100, הטווח הוא <FormulaBox inline>100 - 70 = 30</FormulaBox>.</p>
          <p className="text-sm text-gray-600">הטווח קל לחישוב, אך הוא מושפע מאוד מערכים קיצוניים ואינו מתחשב בפיזור של שאר הנתונים.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. שונות (Variance)</h3>
          <p>השונות היא מדד המבטא את ממוצע ריבועי הסטיות של הנתונים מהממוצע שלהם. היא מסומנת בדרך כלל ב-<FormulaBox inline>S^2</FormulaBox> (עבור מדגם) או <FormulaBox inline>\\sigma^2</FormulaBox> (עבור אוכלוסייה).</p>
          <p>הנוסחה לחישוב השונות היא:</p>
          <div className="my-2 text-center">
            <FormulaBox>{"S^2 = \\frac{\\sum_{i=1}^{N} (x_i - \\bar{x})^2}{N}"}</FormulaBox>
          </div>
          <p>כאשר:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li><FormulaBox inline>x_i</FormulaBox> הוא כל אחד מהערכים בקבוצת הנתונים.</li>
            <li><FormulaBox inline>{"\\bar{x}"}</FormulaBox> הוא ממוצע הנתונים.</li>
            <li><FormulaBox inline>N</FormulaBox> הוא מספר הנתונים הכולל.</li>
            <li><FormulaBox inline>{"\\sum"}</FormulaBox> מסמן סכום.</li>
          </ul>
          <p>שלבי החישוב: 1. חשב את הממוצע (<FormulaBox inline>{"\\bar{x}"}</FormulaBox>). 2. לכל נתון, חשב את סטייתו מהממוצע (<FormulaBox inline>{"x_i - \\bar{x}"}</FormulaBox>). 3. העלה כל סטייה בריבוע (<FormulaBox inline>{"(x_i - \\bar{x})^2"}</FormulaBox>). 4. סכם את כל ריבועי הסטיות. 5. חלק את הסכום במספר הנתונים (<FormulaBox inline>N</FormulaBox>).</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. סטיית תקן (Standard Deviation)</h3>
          <p>סטיית התקן היא מדד הפיזור הנפוץ והחשוב ביותר. היא מחושבת כשורש הריבועי של השונות, ומסומנת ב-<FormulaBox inline>S</FormulaBox> או <FormulaBox inline>\\sigma</FormulaBox>.</p>          <div className="my-2 text-center">
            <FormulaBox>{"S = \\sqrt{S^2} = \\sqrt{\\frac{\\sum_{i=1}^{N} (x_i - \\bar{x})^2}{N}}"}</FormulaBox>
          </div>
          <p>סטיית התקן נותנת לנו מדד לפיזור הנתונים באותן יחידות כמו הנתונים המקוריים (בניגוד לשונות, שהיא ביחידות ריבועיות). סטיית תקן גדולה מצביעה על פיזור רחב של הנתונים סביב הממוצע, בעוד שסטיית תקן קטנה מצביעה על כך שהנתונים קרובים יותר לממוצע.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה פתורה: חישוב סטיית תקן מרשימת נתונים</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 mb-6">
            <p className="font-medium"><strong>דוגמה:</strong> חשב את סטיית התקן של קבוצת הציונים הבאה: 6, 7, 8, 9, 10.</p>
            <p><strong>פתרון:</strong></p>
              <p><strong>שלב 1: חישוב הממוצע (<FormulaBox inline>{"\\bar{x}"}</FormulaBox>)</strong></p>
            <div className="my-2 text-center">
              <FormulaBox>{"\\bar{x} = \\frac{6+7+8+9+10}{5} = \\frac{40}{5} = 8"}</FormulaBox>
            </div>
            
            <p><strong>שלב 2: חישוב סטיות מהממוצע וריבועי הסטיות</strong></p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mt-4 mb-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-center font-semibold">ציון (<FormulaBox inline>x_i</FormulaBox>)</th>                    <th className="border border-gray-300 p-3 text-center font-semibold">סטייה מהממוצע (<FormulaBox inline>{"x_i - \\bar{x}"}</FormulaBox>)</th>
                    <th className="border border-gray-300 p-3 text-center font-semibold">ריבוע הסטייה (<FormulaBox inline>{"(x_i - \\bar{x})^2"}</FormulaBox>)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 p-3 text-center">6</td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>6-8 = -2</FormulaBox></td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>(-2)^2 = 4</FormulaBox></td></tr>
                  <tr><td className="border border-gray-300 p-3 text-center">7</td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>7-8 = -1</FormulaBox></td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>(-1)^2 = 1</FormulaBox></td></tr>
                  <tr><td className="border border-gray-300 p-3 text-center">8</td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>8-8 = 0</FormulaBox></td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>(0)^2 = 0</FormulaBox></td></tr>
                  <tr><td className="border border-gray-300 p-3 text-center">9</td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>9-8 = 1</FormulaBox></td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>(1)^2 = 1</FormulaBox></td></tr>
                  <tr><td className="border border-gray-300 p-3 text-center">10</td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>10-8 = 2</FormulaBox></td><td className="border border-gray-300 p-3 text-center"><FormulaBox inline>(2)^2 = 4</FormulaBox></td></tr>
                  <tr className="bg-gray-100"><td className="border border-gray-300 p-3 text-center font-bold" colSpan="2"><strong>סכום ריבועי הסטיות (<FormulaBox inline>{"\\sum (x_i - \\bar{x})^2"}</FormulaBox>)</strong></td><td className="border border-gray-300 p-3 text-center font-bold"><strong>10</strong></td></tr>
                </tbody>
              </table>
            </div>
            
            <p><strong>שלב 3: חישוב השונות (<FormulaBox inline>S^2</FormulaBox>)</strong></p>
            <p>מספר הנתונים <FormulaBox inline>N=5</FormulaBox>.</p>
            <div className="my-2 text-center">
              <FormulaBox>{"S^2 = \\frac{\\sum (x_i - \\bar{x})^2}{N} = \\frac{10}{5} = 2"}</FormulaBox>
            </div>
            
            <p><strong>שלב 4: חישוב סטיית התקן (<FormulaBox inline>S</FormulaBox>)</strong></p>            <div className="my-2 text-center">
              <FormulaBox>{"S = \\sqrt{S^2} = \\sqrt{2} \\approx 1.414"}</FormulaBox>
            </div>
            <p>תשובה: סטיית התקן של הציונים היא כ-1.414.</p>
          </div>
          <p className="text-sm text-gray-600">הערה: חישוב סטיית תקן מטבלת שכיחויות דומה, אך יש להכפיל כל ריבוע סטייה בשכיחות המתאימה לפני הסכימה, ולחלק בסך כל השכיחויות (שהוא N).</p>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">מתרגלים ✍️</h2>
        <div className="space-y-6">          {exercises.map((exercise, index) => (
            <InteractiveExercise
              key={exercise.id}
              id={exercise.id}
              question={`תרגיל ${index + 1}: ${exercise.question}`}
              correctAnswer={exercise.correctAnswer}
              tolerance={exercise.tolerance}
              solution={exercise.solution}
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">בחן את עצמך 🧐</h2>
        <Quiz questions={quizQuestions} />
      </section>
    </LessonLayout>
  );
};

export default StatisticsDispersionLesson;
