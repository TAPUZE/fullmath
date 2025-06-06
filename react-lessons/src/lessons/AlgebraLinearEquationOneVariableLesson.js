import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';
import ProgressSection from '../components/ProgressSection';

const AlgebraLinearEquationOneVariableLesson = () => {
  const lessonId = 'algebra_linear_equation_one_variable_35182';
  const nextLessonPath = '/algebra-linear-equations-two-variables';

  const exercises = [
    {
      id: 'ex1',
      question: 'פתור את המשוואה 5x - 8 = 2x + 7.',
      correctAnswer: '5',
      placeholder: 'הכנס פתרון',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p><FormulaBox inline>5x - 8 = 2x + 7</FormulaBox></p>
          <p>העברת אגפים: <FormulaBox inline>5x - 2x = 7 + 8</FormulaBox></p>
          <p>כינוס איברים: <FormulaBox inline>3x = 15</FormulaBox></p>
          <p>בידוד הנעלם: <FormulaBox inline>x = \\frac{15}{3} = 5</FormulaBox></p>
          <p>הפתרון הוא: <FormulaBox inline>x = 5</FormulaBox>.</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'פתור את המשוואה 4(x+1) - 2(x-3) = 12.',
      correctAnswer: '1',
      placeholder: 'הכנס פתרון',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p><FormulaBox inline>4(x+1) - 2(x-3) = 12</FormulaBox></p>
          <p>פתיחת סוגריים: <FormulaBox inline>4x + 4 - 2x + 6 = 12</FormulaBox></p>
          <p>כינוס איברים באגף שמאל: <FormulaBox inline>2x + 10 = 12</FormulaBox></p>
          <p>העברת אגפים: <FormulaBox inline>2x = 12 - 10</FormulaBox></p>
          <p><FormulaBox inline>2x = 2</FormulaBox></p>
          <p>בידוד הנעלם: <FormulaBox inline>x = \\frac{2}{2} = 1</FormulaBox></p>
          <p>הפתרון הוא: <FormulaBox inline>x = 1</FormulaBox>.</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'פתור את המשוואה עם שברים: x/2 + x/3 = 5.',
      correctAnswer: '6',
      placeholder: 'הכנס פתרון',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p><FormulaBox inline>\\frac{x}{2} + \\frac{x}{3} = 5</FormulaBox></p>
          <p>המכנה המשותף הקטן ביותר של 2 ו-3 הוא 6.</p>
          <p>נכפול כל איבר במשוואה ב-6:</p>
          <p><FormulaBox inline>6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 5</FormulaBox></p>
          <p><FormulaBox inline>3x + 2x = 30</FormulaBox></p>
          <p>כינוס איברים: <FormulaBox inline>5x = 30</FormulaBox></p>
          <p>בידוד הנעלם: <FormulaBox inline>x = \\frac{30}{5} = 6</FormulaBox></p>
          <p>פתרון המשוואה הוא <FormulaBox inline>x = 6</FormulaBox>.</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהו הפתרון של המשוואה 7x - 5 = 3x + 11?',
      options: [
        { value: 'a', label: <FormulaBox inline>x = 2</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>x = 3</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>x = 4</FormulaBox> },
        { value: 'd', label: <FormulaBox inline>x = 1.6</FormulaBox> }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q2',
      question: 'מהו הפתרון של המשוואה x/4 - 1 = 2?',
      options: [
        { value: 'a', label: <FormulaBox inline>x = 4</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>x = 8</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>x = 12</FormulaBox> },
        { value: 'd', label: <FormulaBox inline>x = \\frac{3}{4}</FormulaBox> }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q3',
      question: 'מה השלב הראשון בפתרון המשוואה 2(x + 3) = 8?',
      options: [
        { value: 'a', label: 'חילוק ב-2' },
        { value: 'b', label: 'פתיחת סוגריים' },
        { value: 'c', label: 'העברת 3 לאגף השני' },
        { value: 'd', label: 'כינוס איברים' }
      ],
      correctAnswer: 'b'
    }
  ];

  return (
    <LessonLayout 
      title="משוואה ממעלה ראשונה עם נעלם אחד - שאלון 35182"
      lessonId={lessonId}
      nextLessonPath={nextLessonPath}
    >
      {/* Learning Section */}
      <section id="learn" aria-labelledby="learn-heading" className="mb-12">
        <h2 id="learn-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: משוואות ממעלה ראשונה 📚
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            משוואה ממעלה ראשונה עם נעלם אחד היא משוואה שבה הנעלם (בדרך כלל x) מופיע בחזקה ראשונה בלבד, 
            ולא בחזקות גבוהות יותר או במכנה. המטרה היא למצוא את ערכו של הנעלם שמקיים את השוויון.
          </p>
          <p>
            הצורה הכללית של משוואה כזו לאחר פישוט יכולה להיות <FormulaBox inline>ax = b</FormulaBox>, 
            כאשר a ו-b הם מספרים ידועים, ו-<FormulaBox inline>a \\neq 0</FormulaBox>.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">שלבי פתרון:</h3>
          <div className="bg-blue-50 border-r-4 border-blue-400 p-4 my-4">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5">1</span>
                <div>
                  <strong>פתיחת סוגריים:</strong> אם יש סוגריים במשוואה, פותחים אותם באמצעות חוק הפילוג.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5">2</span>
                <div>
                  <strong>כינוס איברים דומים:</strong> מחברים או מחסרים איברים המכילים את הנעלם בנפרד, 
                  ואיברים חופשיים (מספרים) בנפרד, בכל אגף של המשוואה.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5">3</span>
                <div>
                  <strong>העברת אגפים:</strong> מעבירים את כל האיברים המכילים את הנעלם לאגף אחד ואת כל המספרים החופשיים לאגף השני. 
                  זכרו שכאשר מעבירים איבר מאגף לאגף, סימנו משתנה.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5">4</span>
                <div>
                  <strong>בידוד הנעלם:</strong> מחלקים את שני האגפים במקדם של הנעלם כדי למצוא את ערכו.
                </div>
              </li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה פתורה</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium"><strong>שאלה:</strong> פתור את המשוואה <FormulaBox inline>3(x-2) + 5 = 2x - 1</FormulaBox></p>
            <p><strong>פתרון:</strong></p>
            
            <div className="space-y-2">
              <p><strong>שלב 1 - פתיחת סוגריים:</strong></p>
              <p><FormulaBox inline>3x - 3 \\cdot 2 + 5 = 2x - 1</FormulaBox></p>
              <p><FormulaBox inline>3x - 6 + 5 = 2x - 1</FormulaBox></p>
              
              <p><strong>שלב 2 - כינוס איברים באגף שמאל:</strong></p>
              <p><FormulaBox inline>3x - 1 = 2x - 1</FormulaBox></p>
              
              <p><strong>שלב 3 - העברת אגפים:</strong></p>
              <p>מעבירים 2x שמאלה ו-1- ימינה:</p>
              <p><FormulaBox inline>3x - 2x = -1 + 1</FormulaBox></p>
              
              <p><strong>שלב 4 - כינוס איברים ובידוד הנעלם:</strong></p>
              <p><FormulaBox inline>x = 0</FormulaBox></p>
            </div>
            
            <p className="font-medium text-green-700">לכן, פתרון המשוואה הוא <FormulaBox inline>x = 0</FormulaBox>.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">משוואות עם שברים פשוטים</h3>
          <p>
            כאשר במשוואה יש שברים והנעלם אינו במכנה, ניתן לפתור על ידי מציאת מכנה משותף וכפל כל אברי המשוואה 
            במכנה המשותף כדי "להיפטר" מהמכנים. לאחר מכן, פותרים את המשוואה כרגיל.
          </p>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-yellow-50 space-y-3 my-6">
            <p className="font-medium"><strong>דוגמה:</strong> פתור את המשוואה <FormulaBox inline>\\frac{x}{2} + \\frac{x}{3} = 5</FormulaBox></p>
            <p><strong>פתרון:</strong></p>
            
            <div className="space-y-2">
              <p>המכנה המשותף הקטן ביותר של 2 ו-3 הוא 6.</p>
              <p>נכפול כל איבר במשוואה ב-6:</p>
              <p><FormulaBox inline>6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 5</FormulaBox></p>
              <p><FormulaBox inline>3x + 2x = 30</FormulaBox></p>
              <p>כינוס איברים: <FormulaBox inline>5x = 30</FormulaBox></p>
              <p>בידוד הנעלם: <FormulaBox inline>x = \\frac{30}{5} = 6</FormulaBox></p>
            </div>
            
            <p className="font-medium text-green-700">פתרון המשוואה הוא <FormulaBox inline>x = 6</FormulaBox>.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">טיפים חשובים</h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>תמיד שמרו על שוויון בין שני האגפים</li>
            <li>זכרו לשנות סימן כשמעבירים איבר מאגף לאגף</li>
            <li>בדקו את הפתרון על ידי הצבה במשוואה המקורית</li>
            <li>במשוואות עם שברים, מצאו מכנה משותף לפני הפתרון</li>
            <li>פתחו תמיד סוגריים לפני שילוב איברים</li>
          </ul>
        </div>
      </section>

      {/* Practice Section */}
      <section id="practice" aria-labelledby="practice-heading" className="mb-12">
        <h2 id="practice-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} {...exercise} />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" aria-labelledby="quiz-heading" className="mb-12">
        <h2 id="quiz-heading" className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          בחן את עצמך 🧠
        </h2>
        <Quiz questions={quizQuestions} lessonId={lessonId} />
      </section>

      {/* Progress Section */}
      <ProgressSection lessonId={lessonId} />
    </LessonLayout>
  );
};

export default AlgebraLinearEquationOneVariableLesson;
