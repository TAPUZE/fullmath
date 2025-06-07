import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import HtmlMathBox from '../components/HtmlMathBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const ProblemsWorkRateLesson = () => {

  const breadcrumbItems = [
    { label: 'דף ראשי', href: '/' },
    { label: 'שאלון 35382', href: '/lessons' },
    { label: 'בעיות קצב עבודה', href: '#' }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: (
        <>
          עובד א' מסיים עבודה ב-6 שעות. עובד ב' מסיים את אותה עבודה ב-9 שעות. 
          כמה זמן ייקח להם לסיים את העבודה יחד?
        </>
      ),
      options: [
        { value: 'a', label: '3.6 שעות' },
        { value: 'b', label: '4.5 שעות' },
        { value: 'c', label: '7.5 שעות' },
        { value: 'd', label: '15 שעות' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q2',
      question: (
        <>
          ברז א' ממלא בריכה ב-4 שעות. ברז ב' ממלא את אותה בריכה ב-12 שעות. 
          כמה זמן ייקח למלא את הבריכה עם שני הברזים יחד?
        </>
      ),
      options: [
        { value: 'a', label: '2 שעות' },
        { value: 'b', label: '3 שעות' },
        { value: 'c', label: '8 שעות' },
        { value: 'd', label: '16 שעות' }
      ],
      correctAnswer: 'b'
    }
  ];

  const exercises = [
    {
      id: 'ex1',
      question: (
        <>
          מכונה א' מייצרת 100 חלקים ב-5 שעות. מכונה ב' מייצרת את אותה כמות ב-10 שעות. 
          כמה זמן ייקח לשתי המכונות יחד לייצר 100 חלקים?
        </>
      ),
      correctAnswer: '3.33',
      placeholder: 'הכנס זמן בשעות (עם עשרות)',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>          <p>קצב עבודה של מכונה א': <FormulaBox inline>\frac{1}{5}</FormulaBox> עבודות לשעה</p>
          <p>קצב עבודה של מכונה ב': <FormulaBox inline>\frac{1}{10}</FormulaBox> עבודות לשעה</p>
          <p>קצב עבודה משותף:</p>
          <FormulaBox>\frac{1}{5} + \frac{1}{10} = \frac{2}{10} + \frac{1}{10} = \frac{3}{10}</FormulaBox>
          <p>זמן לסיום העבודה:</p>
          <FormulaBox>{"t = \\frac{1}{\\frac{3}{10}} = \\frac{10}{3} = 3\\frac{1}{3}"}</FormulaBox>
          <p><strong>תשובה:</strong> 3.33 שעות (או 3 שעות ו-20 דקות)</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: (
        <>
          צינור א' מרוקן בריכה ב-6 שעות. צינור ב' מרוקן את אותה בריכה ב-4 שעות. 
          כמה זמן ייקח לרוקן את הבריכה עם שני הצינורות יחד?
        </>
      ),
      correctAnswer: '2.4',
      placeholder: 'הכנס זמן בשעות (עם עשרות)',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>          <p>קצב ריקון של צינור א': <FormulaBox inline>\frac{1}{6}</FormulaBox> בריכות לשעה</p>
          <p>קצב ריקון של צינור ב': <FormulaBox inline>\frac{1}{4}</FormulaBox> בריכות לשעה</p>
          <p>קצב ריקון משותף:</p>
          <FormulaBox>\frac{1}{6} + \frac{1}{4} = \frac{2}{12} + \frac{3}{12} = \frac{5}{12}</FormulaBox>
          <p>זמן לריקון הבריכה:</p>
          <FormulaBox>{"t = \\frac{1}{\\frac{5}{12}} = \\frac{12}{5} = 2.4"}</FormulaBox>
          <p><strong>תשובה:</strong> 2.4 שעות (או 2 שעות ו-24 דקות)</p>
        </div>
      )
    }
  ];
  return (
    <LessonLayout 
      lessonId="problems-work-rate"
      title="בעיות קצב עבודה"
      nextLessonUrl="/lessons/problems-motion"
      menuUrl="/lessons"
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: בעיות קצב עבודה ⚙️🔧
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            בעיות קצב עבודה עוסקות בחישוב הזמן הנדרש לביצוע עבודה כאשר מספר גורמים 
            (עובדים, מכונות, ברזים וכו') עובדים יחד או בנפרד.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            1. עקרונות יסוד
          </h3>
          
          <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 space-y-2">
            <p><strong>עקרון מרכזי:</strong></p>            <p className="text-center my-4">
              <span className="text-lg font-semibold">קצב עבודה = </span>
              <HtmlMathBox inline>{"\\frac{1}{\\text{זמן לסיום העבודה}}"}</HtmlMathBox>
            </p>
            <p>אם עובד מסיים עבודה ב-t שעות, קצב העבודה שלו הוא <FormulaBox inline>{"\\frac{1}{t}"}</FormulaBox> עבודות לשעה.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            2. עבודה משותפת
          </h3>
          
          <p>כאשר מספר גורמים עובדים יחד, קצבי העבודה מתחברים:</p>          <p className="text-center my-4">
            <span className="text-lg font-semibold">קצב משותף = </span>
            <HtmlMathBox inline>{"\\text{קצב}_1 + \\text{קצב}_2 + \\ldots"}</HtmlMathBox>
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            3. אסטרטגיית פתרון
          </h3>
          
          <ol className="list-decimal pr-6 space-y-2">
            <li><strong>זיהוי הנתונים:</strong> מה הזמן הנדרש לכל גורם לסיים את העבודה בנפרד?</li>
            <li><strong>חישוב קצבי עבודה:</strong> עבור כל גורם, חשב את קצב העבודה.</li>
            <li><strong>חישוב קצב משותף:</strong> חבר את כל קצבי העבודה.</li>
            <li><strong>חישוב זמן משותף:</strong> הזמן המשותף הוא <HtmlMathBox inline>{"\\frac{1}{\\text{קצב משותף}}"}</HtmlMathBox>.</li>
            <li><strong>בדיקה:</strong> ודא שהתשובה הגיונית.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            4. דוגמה מפורטת
          </h3>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium">
              <strong>דוגמה:</strong> עובד א' מסיים עבודה ב-8 שעות. עובד ב' מסיים את אותה עבודה ב-12 שעות. 
              כמה זמן ייקח להם לסיים את העבודה יחד?
            </p>
            
            <p><strong>פתרון:</strong></p>
            <p>1. <strong>זיהוי נתונים:</strong></p>
            <ul className="list-disc pr-4">
              <li>עובד א' מסיים ב-8 שעות</li>
              <li>עובד ב' מסיים ב-12 שעות</li>
            </ul>
            
            <p>2. <strong>חישוב קצבי עבודה:</strong></p>
            <ul className="list-disc pr-4">              <li>קצב עובד א': <FormulaBox inline>\frac{1}{8}</FormulaBox> עבודות לשעה</li>
              <li>קצב עובד ב': <FormulaBox inline>\frac{1}{12}</FormulaBox> עבודות לשעה</li>
            </ul>
            
            <p>3. <strong>חישוב קצב משותף:</strong></p>            <FormulaBox>\frac{1}{8} + \frac{1}{12}</FormulaBox>
            <p>נמצא מכנה משותף (24):</p>
            <FormulaBox>\frac{1}{8} + \frac{1}{12} = \frac{3}{24} + \frac{2}{24} = \frac{5}{24}</FormulaBox>
            
            <p>4. <strong>חישוב זמן משותף:</strong></p>            <p className="text-center my-4">
              <FormulaBox>{"t = \\frac{1}{\\frac{5}{24}} = \\frac{24}{5} = 4.8"}</FormulaBox>
              <span className="text-lg mr-2">שעות</span>
            </p>
            
            <p>5. <strong>בדיקה:</strong> 4.8 שעות פחות מכל אחד מהזמנים הבודדים - הגיוני!</p>
            
            <p><strong>תשובה:</strong> יקח להם 4.8 שעות (4 שעות ו-48 דקות) לסיים את העבודה יחד.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            5. מקרים מיוחדים
          </h3>
          
          <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50 space-y-2">
            <p><strong>שימו לב:</strong></p>
            <ul className="list-disc pr-4 space-y-1">
              <li>בבעיות ריקון (צינורות, משאבות), הקצבים גם מתחברים.</li>
              <li>אם יש ברז שממלא וברז שמרוקן - נחסר את קצב הריקון מקצב המילוי.</li>
              <li>תמיד בדקו שהתשובה הגיונית!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} {...exercise} />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz questions={quizQuestions} />
    </LessonLayout>
  );
};

export default ProblemsWorkRateLesson;
