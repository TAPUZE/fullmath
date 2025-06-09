import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';

const AlgebraWordProblemsLesson = () => {
  // Strategy steps component
  const StrategySteps = () => (
    <ol className="list-none pr-0 space-y-2" style={{ counterReset: 'step-counter' }}>
      {[
        { title: 'קריאה והבנה', content: 'קראו את הבעיה בעיון, מספר פעמים אם צריך. זהו את הנתונים הידועים ואת מה שמבקשים למצוא (הנעלמים).' },
        { title: 'הגדרת נעלמים', content: 'סמנו את הנעלם העיקרי (או הנעלמים) באות, בדרך כלל x (או x, y). רשמו בצד מה כל אות מייצגת.' },
        { title: 'תרגום למשוואה', content: 'תרגמו את הקשרים בין הנתונים והנעלמים למשוואה מתמטית. חפשו מילות מפתח כמו "סכום", "הפרש", "גדול פי", "קטן ב-", "שווה ל-" וכו\'.' },
        { title: 'פתרון המשוואה', content: 'פתרו את המשוואה (או מערכת המשוואות) שקיבלתם באמצעות הכלים האלגבריים שלמדתם.' },
        { title: 'בדיקה ותשובה מילולית', content: 'בדקו אם הפתרון שקיבלתם הגיוני בהקשר הבעיה (למשל, גיל לא יכול להיות שלילי). רשמו תשובה מילולית ברורה לשאלה המקורית.' }
      ].map((step, index) => (
        <li key={index} className="relative pr-8 mb-2">
          <div className="absolute right-0 top-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          <strong>{step.title}:</strong> {step.content}
        </li>
      ))}
    </ol>
  );

  // Solved example component
  const SolvedExample = () => (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <p className="font-medium mb-2">שאלה: לגיל יש פי 2 יותר עפרונות מאשר לרון. לשניהם יחד יש 21 עפרונות. כמה עפרונות יש לכל אחד?</p>
      <div className="space-y-2">
        <p><strong>פתרון:</strong></p>
        <p>1. <strong>הבנה:</strong> נתונים יחסים בין כמויות עפרונות וסכום כולל. מחפשים את מספר העפרונות של כל אחד.</p>
        <p>2. <strong>הגדרת נעלמים:</strong></p>
        <p>נסמן את מספר העפרונות של רון ב-<FormulaBox>\(x\)</FormulaBox>.</p>
        <p>לפי הנתון "לגיל יש פי 2 יותר עפרונות מאשר לרון", מספר העפרונות של גיל הוא <FormulaBox>\(2x\)</FormulaBox>.</p>
        <p>3. <strong>תרגום למשוואה:</strong></p>
        <p>הנתון "לשניהם יחד יש 21 עפרונות" מתורגם למשוואה:</p>
        <p><FormulaBox>\(x + 2x = 21\)</FormulaBox> (העפרונות של רון + העפרונות של גיל = סך הכל עפרונות)</p>
        <p>4. <strong>פתרון המשוואה:</strong></p>
        <p><FormulaBox>\(3x = 21\)</FormulaBox></p>
        <p>נחלק ב-3: <FormulaBox>\(x = \frac{21}{3} = 7\)</FormulaBox>.</p>
        <p>5. <strong>בדיקה ותשובה מילולית:</strong></p>
        <p>מצאנו <FormulaBox>\(x=7\)</FormulaBox>. זהו מספר העפרונות של רון.</p>
        <p>מספר העפרונות של גיל הוא <FormulaBox>\(2x = 2 \cdot 7 = 14\)</FormulaBox>.</p>
        <p>בדיקה: לרון (7) ולגיל (14) יש יחד <FormulaBox>\(7+14=21\)</FormulaBox> עפרונות, ו-14 הוא פי 2 מ-7. הנתונים מסתדרים.</p>
        <p className="mt-2 font-semibold">תשובה: לרון יש 7 עפרונות, ולגיל יש 14 עפרונות.</p>
      </div>
    </div>
  );

  // Custom validation for floating point answers
  const validateFloatAnswer = (userAnswer, correctAnswer, tolerance = 0.1) => {
    const userNum = parseFloat(userAnswer);
    const correctNum = parseFloat(correctAnswer);
    return Math.abs(userNum - correctNum) < tolerance;
  };

  const exercises = [
    {
      id: 'ex1',
      question: 'מחיר עט יקר ב-5 ש"ח ממחיר עיפרון. דנה קנתה 3 עטים ו-4 עפרונות ושילמה בסך הכל 40 ש"ח. מה מחיר העיפרון?',
      hint: 'סמן את מחיר העיפרון ב-x.',
      correctAnswer: '3.57',
      tolerance: 0.1,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>נסמן: מחיר עיפרון = <FormulaBox>\(x\)</FormulaBox> ש"ח.</p>
          <p>מחיר עט = <FormulaBox>\(x+5\)</FormulaBox> ש"ח.</p>
          <p>המשוואה: <FormulaBox>\(3(x+5) + 4x = 40\)</FormulaBox></p>
          <p>פתיחת סוגריים: <FormulaBox>\(3x + 15 + 4x = 40\)</FormulaBox></p>
          <p>כינוס איברים: <FormulaBox>\(7x + 15 = 40\)</FormulaBox></p>
          <p>העברת אגפים: <FormulaBox>\(7x = 40 - 15 \Rightarrow 7x = 25\)</FormulaBox></p>
          <p>בידוד הנעלם: <FormulaBox>\(x = \frac{25}{7} \approx 3.57\)</FormulaBox></p>
          <p>מחיר העיפרון הוא כ-3.57 ש"ח.</p>
        </div>
      ),
      placeholder: 'הכנס מחיר עיפרון (בשקלים)'
    },
    {
      id: 'ex2',
      question: 'סכום שלושה מספרים עוקבים הוא 48. מהו המספר הקטן ביותר?',
      hint: 'סמן את המספר הקטן ביותר ב-x. המספרים העוקבים יהיו x, x+1, x+2.',
      correctAnswer: '15',
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>נסמן: המספר הקטן = <FormulaBox>\(x\)</FormulaBox>.</p>
          <p>המספר האמצעי = <FormulaBox>\(x+1\)</FormulaBox>.</p>
          <p>המספר הגדול = <FormulaBox>\(x+2\)</FormulaBox>.</p>
          <p>המשוואה: <FormulaBox>\(x + (x+1) + (x+2) = 48\)</FormulaBox></p>
          <p>כינוס איברים: <FormulaBox>\(3x + 3 = 48\)</FormulaBox></p>
          <p>העברת אגפים: <FormulaBox>\(3x = 48 - 3 \Rightarrow 3x = 45\)</FormulaBox></p>
          <p>בידוד הנעלם: <FormulaBox>\(x = \frac{45}{3} = 15\)</FormulaBox></p>
          <p>המספר הקטן ביותר הוא 15.</p>
        </div>
      ),
      placeholder: 'הכנס את המספר הקטן ביותר'
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מלבן שאורכו גדול ב-4 ס"מ מרוחבו. היקף המלבן הוא 32 ס"מ. מהו רוחב המלבן?',
      hint: 'סמן את הרוחב ב-x.',
      options: [
        { value: 'a', label: '4 ס"מ' },
        { value: 'b', label: '6 ס"מ' },
        { value: 'c', label: '8 ס"מ' },
        { value: 'd', label: '10 ס"מ' }
      ],
      correctAnswer: 'b',
      explanation: 'נסמן רוחב = x, אורך = x+4. היקף = 2(רוחב + אורך) = 2(x + x+4) = 2(2x+4) = 4x+8 = 32. לכן 4x = 24, x = 6.'
    },
    {
      id: 'q2',
      question: 'בקופסה יש כדורים אדומים וכחולים. מספר הכדורים האדומים גדול פי 3 ממספר הכדורים הכחולים. בסך הכל יש 28 כדורים בקופסה. כמה כדורים כחולים יש בקופסה?',
      options: [
        { value: 'a', label: '7' },
        { value: 'b', label: '9' },
        { value: 'c', label: '14' },
        { value: 'd', label: '21' }
      ],
      correctAnswer: 'a',
      explanation: 'נסמן כדורים כחולים = x, כדורים אדומים = 3x. סך הכל: x + 3x = 4x = 28. לכן x = 7.'
    }
  ];

  return (
    <LessonLayout
      title="בעיות מילוליות (אלגברה)"
      lessonId="35182-algebra-word-problems"
      nextLessonPath="/lessons/geometry-shapes-properties"
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            בעיות מילוליות דורשות מאיתנו לתרגם סיפור או תיאור מצב לשפה מתמטית, כלומר למשוואות. לאחר בניית המשוואה (או מערכת המשוואות), פותרים אותה ומוודאים שהתשובה הגיונית בהקשר של הבעיה המקורית.
          </p>
          <p>
            בשאלון 35182, הבעיות המילוליות מתמקדות לרוב בבניית משוואה אחת ממעלה ראשונה, ולעיתים מערכת פשוטה של שתי משוואות.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">אסטרטגיית פתרון כללית:</h3>
          <StrategySteps />

          <h3 className="text-xl font-semibold mt-6 mb-2">דגש: בעיות קנייה ומכירה פשוטות</h3>          <p>בבעיות אלו, לרוב נתעסק במחיר של מוצר, כמות, וסכום כולל. הקשר הבסיסי הוא:</p>          <div className="my-4 text-center">
            <FormulaBox>
              {`\\text{Price per Unit} \\times \\text{Quantity} = \\text{Total}`}
            </FormulaBox>
          </div>

          <h4 className="text-lg font-semibold mt-4 mb-1">דוגמה פתורה (מתוך חומר הבחינה):</h4>
          <SolvedExample />
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>        <div className="space-y-8">
          {exercises.map((exercise) => (
            <InteractiveExercise
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              hint={exercise.hint}
              correctAnswer={exercise.correctAnswer}
              solution={exercise.solution}
              placeholder={exercise.placeholder}
              tolerance={exercise.tolerance}
              customValidator={exercise.tolerance ? validateFloatAnswer : null}
              lessonId="algebra-word-problems"
            />
          ))}
        </div>
      </section>      {/* Quiz Section */}
      <Quiz questions={quizQuestions} />
    </LessonLayout>
  );
};

export default AlgebraWordProblemsLesson;
