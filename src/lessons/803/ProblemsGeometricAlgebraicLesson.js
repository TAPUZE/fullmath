import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';

const ProblemsGeometricAlgebraicLesson = () => {

  const breadcrumbItems = [
    { label: 'דף ראשי', href: '/' },
    { label: 'שאלון 35382', href: '/lessons' },
    { label: 'בעיות גיאומטריות-אלגבריות', href: '#' }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: (        <>
          רוחב מלבן הוא <FormulaBox inline>x</FormulaBox>, ואורכו פי 2 מרוחבו. 
          אם היקף המלבן הוא 30 ס"מ, מהו רוחב המלבן?
        </>
      ),
      options: [
        { value: 'a', label: '5 ס"מ' },
        { value: 'b', label: '10 ס"מ' },
        { value: 'c', label: '15 ס"מ' },
        { value: 'd', label: '20 ס"מ' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q2', 
      question: 'במשולש ישר זווית, אחד הניצבים הוא 6 ס"מ והיתר הוא 10 ס"מ. מהו אורך הניצב השני?',
      options: [
        { value: 'a', label: '6 ס"מ' },
        { value: 'b', label: '8 ס"מ' },
        { value: 'c', label: '10 ס"מ' },
        { value: 'd', label: '12 ס"מ' }
      ],
      correctAnswer: 'b'
    }
  ];

  const exercises = [
    {
      id: 'ex1',
      question: (        <>
          במשולש ישר זווית, אורך אחד הניצבים הוא <FormulaBox inline>x</FormulaBox> ס"מ. 
          הניצב השני ארוך ממנו ב-7 ס"מ. אורך היתר הוא 13 ס"מ. חשב את אורכי הניצבים.
        </>
      ),
      correctAnswer: '5',
      placeholder: 'הכנס אורך ניצב קטן (ס"מ)',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>          <p>נסמן את הניצב הקצר ב-<FormulaBox inline>x</FormulaBox> ס"מ.</p>
          <p>הניצב הארוך: <FormulaBox inline>x+7</FormulaBox> ס"מ.</p>
          <p>היתר: 13 ס"מ.</p>
          <p>לפי משפט פיתגורס:</p>
          <FormulaBox>x^2 + (x+7)^2 = 13^2</FormulaBox>
          <FormulaBox>x^2 + x^2 + 14x + 49 = 169</FormulaBox>
          <FormulaBox>2x^2 + 14x + 49 = 169</FormulaBox>
          <FormulaBox>2x^2 + 14x - 120 = 0</FormulaBox>
          <FormulaBox>x^2 + 7x - 60 = 0</FormulaBox>
          <p>פתרון: <FormulaBox inline>x = 5</FormulaBox> או <FormulaBox inline>x = -12</FormulaBox></p>
          <p>מכיוון שאורך חייב להיות חיובי: <FormulaBox inline>x = 5</FormulaBox> ס"מ.</p>
          <p><strong>תשובה:</strong> הניצבים הם 5 ס"מ ו-12 ס"מ.</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'שטח ריבוע הוא 64 סמ"ר. מהו היקף הריבוע?',
      correctAnswer: '32',
      placeholder: 'הכנס היקף (ס"מ)',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>          <p>שטח ריבוע = <FormulaBox inline>a^2</FormulaBox> כאשר <FormulaBox inline>a</FormulaBox> הוא אורך הצלע.</p>          <FormulaBox>a^2 = 64</FormulaBox>
          <FormulaBox>{"a = 8 \\text{ cm}"}</FormulaBox>
          <p>היקף ריבוע = <FormulaBox inline>4a</FormulaBox></p>
          <FormulaBox>{"P = 4 \\times 8 = 32 \\text{ cm}"}</FormulaBox>
        </div>
      )
    }
  ];
  return (
    <LessonLayout 
      lessonId="problems-geometric-algebraic"
      title="בעיות גיאומטריות-אלגבריות"
      nextLessonUrl="/lessons/analytic-geometry-line-continued"
      menuUrl="/lessons"
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: שילוב גיאומטריה ואלגברה 🧩📏
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            בעיות גיאומטריות-אלגבריות דורשות מאיתנו להשתמש בידע שלנו הן בגיאומטריה 
            (תכונות של צורות, נוסחאות לשטח והיקף, משפט פיתגורס וכו') והן באלגברה 
            (בניית משוואות ופתרונן, לרוב משוואות ריבועיות).
          </p>
          
          <p>
            המטרה היא לתרגם את המידע הגיאומטרי הנתון בבעיה ואת הקשרים בין מידות הצורה 
            למשוואה אלגברית, שאותה ניתן לפתור כדי למצוא את המידות החסרות.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            1. אסטרטגיית פתרון
          </h3>
          
          <ol className="list-decimal pr-6 space-y-2">
            <li>
              <strong>זיהוי הצורה הגיאומטרית:</strong> קבע באיזו צורה (מלבן, משולש, ריבוע, מעגל וכו').
            </li>
            <li>
              <strong>נוסחאות רלוונטיות:</strong> רשום לעצמך את הנוסחאות הגיאומטריות הקשורות לצורה זו ולנתוני הבעיה.
            </li>            <li>
              <strong>הגדרת משתנים:</strong> סמן את המידות הלא ידועות במשתנה, לרוב <FormulaBox inline>x</FormulaBox>.
            </li>
            <li>
              <strong>בניית משוואה:</strong> השתמש במידע הנתון בבעיה כדי לבנות משוואה אלגברית.
            </li>
            <li>
              <strong>פתרון המשוואה:</strong> פתור את המשוואה שבנית. לעיתים קרובות תתקבל משוואה ריבועית.
            </li>
            <li>
              <strong>בדיקת הפתרונות:</strong> ודא שהפתרונות הגיוניים בהקשר הגיאומטרי.
            </li>
            <li>
              <strong>תשובה מילולית:</strong> רשום תשובה ברורה לשאלה שנשאלה.
            </li>
          </ol>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
            דוגמה פתורה
          </h3>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium">
              <strong>דוגמה:</strong> אורך מלבן גדול ב-3 ס"מ מרוחבו. שטח המלבן 40 סמ"ר. 
              מצא את אורכי צלעות המלבן.
            </p>
            
            <p><strong>פתרון:</strong></p>
            <p>1. <strong>זיהוי הצורה:</strong> מלבן.</p>
            <p>2. <strong>נוסחה רלוונטית:</strong> שטח מלבן = אורך × רוחב.</p>
            <p>3. <strong>הגדרת משתנים:</strong></p>            <ul className="list-disc pr-4">
              <li>נסמן את רוחב המלבן ב-<FormulaBox inline>x</FormulaBox> ס"מ.</li>
              <li>האורך גדול ב-3 ס"מ מהרוחב, לכן אורך המלבן הוא <FormulaBox inline>x+3</FormulaBox> ס"מ.</li>
            </ul>
            <p>4. <strong>בניית משוואה:</strong> נתון ששטח המלבן הוא 40 סמ"ר.</p>
            <FormulaBox>(x+3) \cdot x = 40</FormulaBox>
            <p>5. <strong>פתרון המשוואה:</strong></p>
            <FormulaBox>x^2 + 3x = 40</FormulaBox>
            <FormulaBox>x^2 + 3x - 40 = 0</FormulaBox>
            <p>
              נפתור את המשוואה הריבועית באמצעות נוסחת השורשים{' '}
              <FormulaBox inline>{"x_{1,2} = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}"}</FormulaBox>, 
              כאשר <FormulaBox inline>a=1, b=3, c=-40</FormulaBox>:
            </p>            <FormulaBox>{"x_{1,2} = \\frac{-3 \\pm \\sqrt{3^2 - 4 \\cdot 1 \\cdot (-40)}}{2 \\cdot 1}"}</FormulaBox>            <FormulaBox>{"x_{1,2} = \\frac{-3 \\pm \\sqrt{9 + 160}}{2}"}</FormulaBox>
            <FormulaBox>{"x_{1,2} = \\frac{-3 \\pm \\sqrt{169}}{2}"}</FormulaBox>
            <FormulaBox>{"x_{1,2} = \\frac{-3 \\pm 13}{2}"}</FormulaBox>
            <p>שני פתרונות אפשריים ל-<FormulaBox inline>x</FormulaBox>:</p>            <FormulaBox>{"x_1 = \\frac{-3 + 13}{2} = \\frac{10}{2} = 5"}</FormulaBox>
            <FormulaBox>{"x_2 = \\frac{-3 - 13}{2} = \\frac{-16}{2} = -8"}</FormulaBox>
            <p>6. <strong>בדיקת הפתרונות:</strong></p>            <p>
              מאחר ש-<FormulaBox inline>x</FormulaBox> מייצג רוחב, הוא חייב להיות ערך חיובי. 
              לכן, הפתרון <FormulaBox inline>x = -8</FormulaBox> נפסל.
            </p>
            <p>הפתרון המתקבל הוא <FormulaBox inline>x = 5</FormulaBox> ס"מ (רוחב).</p>
            <p>נחשב את האורך: <FormulaBox inline>x+3 = 5+3 = 8</FormulaBox> ס"מ.</p>            <p>
              בדיקת השטח: <FormulaBox inline>{"5 \\text{ cm} \\cdot 8 \\text{ cm} = 40 \\text{ cm}^2"}</FormulaBox>. (מתאים לנתון)
            </p>
            <p>7. <strong>תשובה מילולית:</strong> רוחב המלבן הוא 5 ס"מ ואורך המלבן הוא 8 ס"מ.</p>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>        <div className="space-y-6">
          {exercises.map((exercise) => (
            <InteractiveExercise 
              key={exercise.id}
              id={exercise.id}
              question={exercise.question}
              correctAnswer={exercise.correctAnswer}
              placeholder={exercise.placeholder}
              solution={exercise.solution}
              lessonId="problems-geometric-algebraic"
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz questions={quizQuestions} />
    </LessonLayout>
  );
};

export default ProblemsGeometricAlgebraicLesson;
